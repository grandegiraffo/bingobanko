<template>
  <div class="bingo-container">
    <header class="bingo-header">
      <h1>{{ selectedGame?.name || t('game.unknownGame') }}</h1>
      
      <div class="subtitle">
        {{ t('game.subtitle') }}
      </div>
      <div class="scoreboard">
        <div class="score-label">
          {{ t('game.score.label') }}
        </div>
        <div class="score-value">
          <span class="score-current">{{ markedCount }}</span>
          <span class="score-divider">/</span>
          <span class="score-total">{{ bingoSquares.length }}</span>
        </div>
      </div>
    </header>

    <div
      class="bingo-grid"
      :class="{ animating: isAnimating }"
    >
      <div
        v-for="(square, index) in bingoSquares"
        :key="index"
        class="bingo-square"
        :class="{ marked: square.marked }"
        @click="toggleSquare(index)"
      >
        <div class="square-content">
          <div
            class="square-category"
            aria-hidden="true"
          >
            <HugeiconsIcon
              :icon="getCategoryIcon(square.category)"
              :size="28"
              absolute-stroke-width
            />
          </div>
          <div class="square-title">
            {{ square.title }}
          </div>
          <div class="square-description">
            {{ square.description }}
          </div>
          <div
            v-if="square.marked"
            class="checkmark"
          >
            ✓
          </div>
        </div>
      </div>
    </div>

    <footer class="bingo-footer">
      <div class="button-group">
        <button
          class="copy-link-button"
          @click="copyShareLink"
        >
          {{ shareButtonLabel }}
        </button>
        <button
          class="shuffle-button"
          @click="requestConfirm('shuffle')"
        >
          {{ t('buttons.shuffle') }}
        </button>
        <button
          class="reset-button"
          @click="requestConfirm('reset')"
        >
          {{ t('buttons.reset') }}
        </button>
        <div class="game-select">
          <label
            class="game-select-label"
            for="game-select"
          >
            {{ t('gameSelect.label') }}
          </label>
          <select
            id="game-select"
            :value="selectedGameId"
            class="game-select-input"
            @change="onGameSelectChange"
          >
            <option
              v-for="game in availableGames"
              :key="game.id"
              :value="game.id"
            >
              {{ game.name }}
            </option>
          </select>
        </div>
      </div>
      <div class="credits">
        <a
          href="https://github.com/hjepsen"
          target="_blank"
          rel="noopener noreferrer"
        >{{ t('credits.conceptBy') }} 🤎🐻</a> ⸺ <a
          href="https://github.com/grandegiraffo/bingobanko"
          target="_blank"
          rel="noopener noreferrer"
        >{{ t('credits.openSource') }} <img
          class="emoji"
          title=":octocat:"
          alt=":octocat:"
          src="https://github.githubassets.com/images/icons/emoji/octocat.png"
          height="20"
          width="20"
        >🦒
        </a>
      </div>
    </footer>
    <div
      v-if="shareNotice"
      class="share-notice"
      aria-live="polite"
    >
      {{ shareNotice }}
    </div>
    <div
      v-if="isConfirmOpen"
      class="confirm-overlay"
      role="dialog"
      aria-modal="true"
    >
      <div class="confirm-dialog">
        <div class="confirm-title">
          {{ confirmCopy.title }}
        </div>
        <p class="confirm-message">
          {{ confirmCopy.message }}
        </p>
        <div class="confirm-actions">
          <button
            class="confirm-cancel"
            @click="cancelConfirm"
          >
            {{ confirmCopy.cancelLabel }}
          </button>
          <button
            class="confirm-accept"
            @click="acceptConfirm"
          >
            {{ confirmCopy.confirmLabel }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { HugeiconsIcon } from "@hugeicons/vue";
import {
  FlowchartIcon,
  GitBranchIcon,
  QuotesIcon,
  SearchVisualIcon,
  TropicalStormIcon,
  UserStoryIcon,
} from "@hugeicons/core-free-icons";
import { BingoSquare } from "@/types/bingo-square";
import type { BingoGameDataModule } from "@/types/bingo-game-module";
import { computed, onMounted, onUnmounted, ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import { setLocale } from "@/i18n";

const { t } = useI18n();

type ConfirmableAction = "shuffle" | "reset" | "changeGame";

const MAX_BOARD_SIZE = 15;

type GameId = string;

type GameDefinition = {
  id: GameId;
  name: string;
  squares: Array<Omit<BingoSquare, "marked">>;
  allTemplateIds: string[];
  templateById: Record<string, Omit<BingoSquare, "marked">>;
};

const GAME_PARAM = "g";
const ORDER_PARAM = "r";

const deriveGameIdFromPath = (path: string): string => {
  const match = path.match(/([^/]+)\.ts$/);
  return match?.[1] ?? path;
};

const buildGameDefinition = (
  id: GameId,
  name: string,
  squares: Array<Omit<BingoSquare, "marked">>
): GameDefinition => {
  const allTemplateIds = squares.map((template) => template.id);
  const templateById = squares.reduce<Record<string, Omit<BingoSquare, "marked">>>(
    (acc, template) => {
      acc[template.id] = template;
      return acc;
    },
    {}
  );
  return { id, name, squares, allTemplateIds, templateById };
};

const gameModules = import.meta.glob<BingoGameDataModule>("../game-data/*.ts", {
  eager: true,
});

const gamesById = Object.entries(gameModules).reduce<Record<string, GameDefinition>>(
  (acc, [path, mod]) => {
    const game = mod.GameModule;
    const id = game?.GameId ?? deriveGameIdFromPath(path);
    acc[id] = buildGameDefinition(id, game.GameName, game.GameSquares);
    return acc;
  },
  {}
);

const availableGames = computed(() =>
  Object.values(gamesById).sort((a, b) => a.name.localeCompare(b.name))
);

const defaultGameId = computed(() => {
  if (gamesById["xmas-tv-tropes"]) return "xmas-tv-tropes";
  return availableGames.value[0]?.id ?? "xmas-tv-tropes";
});

const getBoardSize = (game: GameDefinition) =>
  Math.min(MAX_BOARD_SIZE, game.squares.length);

const encodeOrder = (order: string[]): string | null => {
  if (typeof window === "undefined") return null;
  const base = window.btoa(order.join(","));
  return base.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
};

const decodeOrder = (
  value: string | null,
  game: GameDefinition
): string[] | null => {
  const boardSize = getBoardSize(game);
  if (boardSize === 0) return [];
  if (!value || typeof window === "undefined") return null;
  let normalized = value.replace(/-/g, "+").replace(/_/g, "/");
  while (normalized.length % 4 !== 0) {
    normalized += "=";
  }
  try {
    const decoded = window.atob(normalized);
    const ids = decoded.split(",");
    if (ids.length !== boardSize) return null;
    const unique = new Set(ids);
    const hasInvalid = ids.some((id) => !game.templateById[id]);
    return unique.size === ids.length && !hasInvalid ? ids : null;
  } catch {
    return null;
  }
};

const persistGameAndOrder = (gameId: GameId, order: string[]) => {
  const game = gamesById[gameId];
  if (!game) return;
  const boardSize = getBoardSize(game);
  if (boardSize === 0) return;
  if (typeof window === "undefined") return;
  const encoded = encodeOrder(order);
  if (!encoded) return;
  const url = new URL(window.location.href);
  const preservedEntries: Array<[string, string]> = [];
  for (const [key, value] of url.searchParams.entries()) {
    if (key === GAME_PARAM || key === ORDER_PARAM) continue;
    preservedEntries.push([key, value]);
  }

  const nextParams = new URLSearchParams();
  nextParams.set(GAME_PARAM, gameId);
  nextParams.set(ORDER_PARAM, encoded);
  for (const [key, value] of preservedEntries) {
    nextParams.append(key, value);
  }

  url.search = nextParams.toString();
  window.history.replaceState({}, "", url);
};

const getOrderFromParam = (game: GameDefinition): string[] | null => {
  const boardSize = getBoardSize(game);
  if (boardSize === 0) return [];
  if (typeof window === "undefined") return null;
  const url = new URL(window.location.href);
  const candidate = url.searchParams.get(ORDER_PARAM);
  return decodeOrder(candidate, game);
};

const shuffleOrder = (game: GameDefinition): string[] => {
  const boardSize = getBoardSize(game);
  const ids = [...game.allTemplateIds];
  for (let i = ids.length - 1; i > 0; i--) {
    const swapIndex = Math.floor(Math.random() * (i + 1));
    [ids[i], ids[swapIndex]] = [ids[swapIndex], ids[i]];
  }
  return ids.slice(0, boardSize);
};

const resolveInitialGameId = (): GameId => {
  if (typeof window === "undefined") return defaultGameId.value;
  const url = new URL(window.location.href);
  const candidate = url.searchParams.get(GAME_PARAM);
  if (candidate && gamesById[candidate]) return candidate;
  return defaultGameId.value;
};

// Persist a shareable board order so multiple viewers see the same layout.
const resolveInitialOrder = (gameId: GameId): string[] => {
  const game = gamesById[gameId];
  if (!game) return [];
  const boardSize = getBoardSize(game);
  if (boardSize === 0) return [];
  const existingOrder = getOrderFromParam(game);
  if (existingOrder) {
    persistGameAndOrder(gameId, existingOrder);
    return existingOrder;
  }
  const randomizedOrder = shuffleOrder(game);
  persistGameAndOrder(gameId, randomizedOrder);
  return randomizedOrder;
};

const createSquares = (game: GameDefinition, order: string[]): BingoSquare[] => {
  const fallbackTemplate = game.squares[0];
  if (!fallbackTemplate) return [];
  return order.map((templateId) => {
    const template = game.templateById[templateId] ?? fallbackTemplate;
    return {
      ...template,
      marked: false,
    };
  });
};

type CategoryIcon = typeof FlowchartIcon;

const categoryIconMap: Partial<Record<BingoSquare["category"], CategoryIcon>> =
  {
    mainPlot: FlowchartIcon,
    subPlot: GitBranchIcon,
    character: UserStoryIcon,
    visual: SearchVisualIcon,
    quote: QuotesIcon,
    meta: TropicalStormIcon,
  };

const defaultCategoryIcon: CategoryIcon = TropicalStormIcon;
const getCategoryIcon = (category: BingoSquare["category"]) =>
  categoryIconMap[category] ?? defaultCategoryIcon;

const selectedGameId = ref<GameId>(resolveInitialGameId());
const selectedGame = computed(() => gamesById[selectedGameId.value]);

const extractLocaleFromGameId = (gameId: string): 'da' | 'en' | null => {
  const prefix = gameId.split('-')[0];
  if (prefix === 'da' || prefix === 'en') {
    return prefix;
  }
  return null;
};

// Sync i18n locale with the game's language prefix
const syncLocaleWithGame = (gameId: string) => {
  const locale = extractLocaleFromGameId(gameId);
  if (locale) {
    setLocale(locale);
  }
};

// Set initial locale based on the initial game
syncLocaleWithGame(selectedGameId.value);

const currentOrder = ref<string[]>(resolveInitialOrder(selectedGameId.value));
const bingoSquares = ref<BingoSquare[]>(
  createSquares(selectedGame.value, currentOrder.value)
);

const isAnimating = ref(false);
let animationTimer: number | null = null;
let animationFrameId: number | null = null;
let resetTimeouts: number[] = [];
let isResetting = false;

const clearAnimationTimer = () => {
  if (animationFrameId !== null) {
    if (typeof window !== "undefined") {
      window.cancelAnimationFrame(animationFrameId);
    }
    animationFrameId = null;
  }
  if (animationTimer !== null) {
    if (typeof window !== "undefined") {
      window.clearTimeout(animationTimer);
    } else {
      clearTimeout(animationTimer);
    }
    animationTimer = null;
  }
};

const clearResetTimeouts = () => {
  resetTimeouts.forEach((timeoutId) => {
    if (typeof window !== "undefined") {
      window.clearTimeout(timeoutId);
    } else {
      clearTimeout(timeoutId);
    }
  });
  resetTimeouts = [];
};

const triggerAnimation = () => {
  clearAnimationTimer();
  isAnimating.value = true;
  // Allow the pile state to render, then animate to grid after a short delay
  if (typeof window !== "undefined") {
    // Use requestAnimationFrame to ensure the pile state is painted first
    animationFrameId = requestAnimationFrame(() => {
      animationFrameId = null;
      animationTimer = window.setTimeout(() => {
        isAnimating.value = false;
        animationTimer = null;
      }, 333);
    });
  }
};

onMounted(() => {
  // Start with tiles in pile state
  isAnimating.value = true;
  // Animate to grid after 667 milliseconds
  if (typeof window !== "undefined") {
    animationTimer = window.setTimeout(() => {
      isAnimating.value = false;
      animationTimer = null;
    }, 667);
  }
});

const scrollToTopOfWindow = () => {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

const rebuildSquares = (order: string[]) => {
  const game = selectedGame.value;
  if (!game) {
    bingoSquares.value = [];
    return;
  }
  bingoSquares.value = createSquares(game, order);
};

const setNewOrder = (order: string[]) => {
  currentOrder.value = order;
  rebuildSquares(order);
};

const markedCount = computed(
  () => bingoSquares.value.filter((square) => square.marked).length
);

const toggleSquare = (index: number) => {
  const square = bingoSquares.value[index];
  if (!square) return;
  square.marked = !square.marked;
};

const performResetMarks = async () => {
  // If a reset is already in progress, cancel it and start a new one
  if (isResetting) {
    clearResetTimeouts();
  }
  isResetting = true;
  
  const delay = (ms: number) =>
    new Promise<void>((resolve) => {
      const timeoutId =
        typeof window !== "undefined"
          ? window.setTimeout(() => {
              resetTimeouts = resetTimeouts.filter((id) => id !== timeoutId);
              resolve();
            }, ms)
          : (setTimeout(() => {
              resetTimeouts = resetTimeouts.filter((id) => id !== timeoutId);
              resolve();
            }, ms) as unknown as number);
      resetTimeouts.push(timeoutId);
    });
  
  const cascadeDelay = 23; // milliseconds between each square

  // Cascade mark all squares
  for (const square of bingoSquares.value) {
    square.marked = true;
    await delay(cascadeDelay);
  }

  // Brief 3x pause before unmarking
  await delay(cascadeDelay * 3);

  // Cascade unmark all squares
  for (const square of bingoSquares.value) {
    square.marked = false;
    await delay(cascadeDelay);
  }
  
  isResetting = false;
};

const performShuffle = () => {
  const game = selectedGame.value;
  if (!game) return;
  const order = shuffleOrder(game);
  persistGameAndOrder(selectedGameId.value, order);
  setNewOrder(order);
};

const pendingGameId = ref<GameId | null>(null);

watch(selectedGameId, (newGameId, oldGameId) => {
  if (newGameId === oldGameId) return;
  const game = gamesById[newGameId];
  if (!game) return;
  syncLocaleWithGame(newGameId);
  const order = shuffleOrder(game);
  persistGameAndOrder(newGameId, order);
  setNewOrder(order);
});

const pendingAction = ref<ConfirmableAction | null>(null);

const confirmCopy = computed(() => {
  if (pendingAction.value === "shuffle") {
    return {
      title: t('confirm.shuffle.title'),
      message: t('confirm.shuffle.message'),
      confirmLabel: t('confirm.shuffle.confirmLabel'),
      cancelLabel: t('confirm.shuffle.cancelLabel'),
    };
  }
  if (pendingAction.value === "reset") {
    return {
      title: t('confirm.reset.title'),
      message: t('confirm.reset.message'),
      confirmLabel: t('confirm.reset.confirmLabel'),
      cancelLabel: t('confirm.reset.cancelLabel'),
    };
  }
  if (pendingAction.value === "changeGame") {
    return {
      title: t('confirm.changeGame.title'),
      message: t('confirm.changeGame.message'),
      confirmLabel: t('confirm.changeGame.confirmLabel'),
      cancelLabel: t('confirm.changeGame.cancelLabel'),
    };
  }
  return {
    title: t('confirm.default.title'),
    message: t('confirm.default.message'),
    confirmLabel: t('confirm.default.confirmLabel'),
    cancelLabel: t('confirm.default.cancelLabel'),
  };
});

const isConfirmOpen = computed(() => pendingAction.value !== null);

const requestConfirm = (action: ConfirmableAction) => {
  pendingAction.value = action;
};

const cancelConfirm = () => {
  if (pendingAction.value === "changeGame" && pendingGameId.value !== null) {
    // Reset the select back to the current game
    pendingGameId.value = null;
  }
  pendingAction.value = null;
};

const acceptConfirm = async () => {
  if (pendingAction.value === "shuffle") {
    scrollToTopOfWindow();
    performShuffle();
    triggerAnimation();
  } else if (pendingAction.value === "reset") {
    scrollToTopOfWindow();
    await performResetMarks();
  } else if (pendingAction.value === "changeGame" && pendingGameId.value !== null) {
    selectedGameId.value = pendingGameId.value;
    pendingGameId.value = null;
    scrollToTopOfWindow();
    triggerAnimation();
  }
  pendingAction.value = null;
};

const onGameSelectChange = (event: Event) => {
  const target = event.target as HTMLSelectElement;
  const newGameId = target.value as GameId;
  
  if (newGameId === selectedGameId.value) return;
  
  // Store the pending game ID and request confirmation
  pendingGameId.value = newGameId;
  requestConfirm("changeGame");
  
  // Reset the select back to the current game until confirmed
  target.value = selectedGameId.value;
};

const shareStatus = ref<"idle" | "copied" | "error">("idle");
const shareNotice = ref<string>("");
let shareResetTimer: number | null = null;

const shareButtonLabel = computed(() => {
  if (shareStatus.value === "copied") return t('buttons.copied');
  if (shareStatus.value === "error") return t('buttons.error');
  return t('buttons.copyLink');
});

const clearShareTimer = () => {
  if (shareResetTimer !== null) {
    if (typeof window !== "undefined") {
      window.clearTimeout(shareResetTimer);
    } else {
      clearTimeout(shareResetTimer);
    }
    shareResetTimer = null;
  }
};

const scheduleShareReset = () => {
  clearShareTimer();
  if (typeof window === "undefined") return;
  shareResetTimer = window.setTimeout(() => {
    shareStatus.value = "idle";
    shareNotice.value = "";
    shareResetTimer = null;
  }, 2500);
};

const setShareFeedback = (status: "copied" | "error", message: string) => {
  shareStatus.value = status;
  shareNotice.value = message;
  scheduleShareReset();
};

const copyShareLink = async () => {
  if (typeof window === "undefined") return;
  const url = window.location.href;
  try {
    if (navigator?.clipboard?.writeText) {
      await navigator.clipboard.writeText(url);
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = url;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    setShareFeedback("copied", "");
  } catch {
    setShareFeedback(
      "error",
      t('errors.copyFailed')
    );
  }
};

onUnmounted(() => {
  clearShareTimer();
  clearAnimationTimer();
  clearResetTimeouts();
});
</script>

<style scoped src="./bingo-game.css"></style>
