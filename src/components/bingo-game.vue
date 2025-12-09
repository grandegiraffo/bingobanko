<template>
  <div class="bingo-container">
    <header class="bingo-header">
      <h1>🎄 Hallmark Julefilm Bingo 🎄</h1>
      <div class="subtitle">
        Klik på felterne, når du ser scenerne
      </div>
      <div class="scoreboard">
        <div class="score-label">
          Point
        </div>
        <div class="score-value">
          <span class="score-current">{{ markedCount }}</span>
          <span class="score-divider">/</span>
          <span class="score-total">{{ bingoSquares.length }}</span>
        </div>
      </div>
    </header>

    <div class="bingo-grid">
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
          🔀 Bland felter
        </button>
        <button
          class="reset-button"
          @click="requestConfirm('reset')"
        >
          🔄 Nulstil krydser
        </button>
      </div>
      <div class="credits">
        Efter idé af 🤎🐻
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
import { XmasTVTropes } from "@/game-data/xmas-tv-tropes";
import { BingoSquare } from "@/types/bingo-square";
import { computed, onUnmounted, ref } from "vue";

type ConfirmableAction = "shuffle" | "reset";

const MAX_BOARD_SIZE = 15;
const boardSize = Math.min(MAX_BOARD_SIZE, XmasTVTropes.length);
const ORDER_PARAM = "r";
const allTemplateIds = XmasTVTropes.map((template) => template.id);
const templateById = XmasTVTropes.reduce<
  Record<string, Omit<BingoSquare, "marked">>
>((acc, template) => {
  acc[template.id] = template;
  return acc;
}, {});

const encodeOrder = (order: string[]): string | null => {
  if (typeof window === "undefined") return null;
  const base = window.btoa(order.join(","));
  return base.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
};

const decodeOrder = (value: string | null): string[] | null => {
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
    const hasInvalid = ids.some((id) => !templateById[id]);
    return unique.size === ids.length && !hasInvalid ? ids : null;
  } catch {
    return null;
  }
};

const persistOrder = (order: string[]) => {
  if (boardSize === 0) return;
  if (typeof window === "undefined") return;
  const encoded = encodeOrder(order);
  if (!encoded) return;
  const url = new URL(window.location.href);
  url.searchParams.set(ORDER_PARAM, encoded);
  window.history.replaceState({}, "", url);
};

const getOrderFromParam = (): string[] | null => {
  if (boardSize === 0) return [];
  if (typeof window === "undefined") return null;
  const url = new URL(window.location.href);
  const candidate = url.searchParams.get(ORDER_PARAM);
  return decodeOrder(candidate);
};

const shuffleOrder = (): string[] => {
  const ids = [...allTemplateIds];
  for (let i = ids.length - 1; i > 0; i--) {
    const swapIndex = Math.floor(Math.random() * (i + 1));
    [ids[i], ids[swapIndex]] = [ids[swapIndex], ids[i]];
  }
  return ids.slice(0, boardSize);
};

// Persist a shareable board order so multiple viewers see the same layout.
const resolveInitialOrder = (): string[] => {
  if (boardSize === 0) return [];
  const existingOrder = getOrderFromParam();
  if (existingOrder) return existingOrder;
  const randomizedOrder = shuffleOrder();
  persistOrder(randomizedOrder);
  return randomizedOrder;
};

const createSquares = (order: string[]): BingoSquare[] => {
  const fallbackTemplate = XmasTVTropes[0];
  if (!fallbackTemplate) return [];
  return order.map((templateId) => {
    const template = templateById[templateId] ?? fallbackTemplate;
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

const currentOrder = ref<string[]>(resolveInitialOrder());
const bingoSquares = ref<BingoSquare[]>(createSquares(currentOrder.value));

const rebuildSquares = (order: string[]) => {
  bingoSquares.value = createSquares(order);
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

const performReset = () => {
  rebuildSquares(currentOrder.value);
};

const performShuffle = () => {
  const order = shuffleOrder();
  persistOrder(order);
  setNewOrder(order);
};

const pendingAction = ref<ConfirmableAction | null>(null);

const confirmCopy = computed(() => {
  if (pendingAction.value === "shuffle") {
    return {
      title: "Blande felterne?",
      message:
        "Det giver et helt nyt bræt og et nyt delbart link. Markerede felter bliver nulstillet.",
      confirmLabel: "Ja, bland",
      cancelLabel: "Fortryd",
    } as const;
  }
  if (pendingAction.value === "reset") {
    return {
      title: "Nulstil krydser?",
      message: "Alle markeringer fjernes, men rækkefølgen forbliver den samme.",
      confirmLabel: "Nulstil",
      cancelLabel: "Behold",
    } as const;
  }
  return {
    title: "",
    message: "",
    confirmLabel: "OK",
    cancelLabel: "Annuller",
  } as const;
});

const isConfirmOpen = computed(() => pendingAction.value !== null);

const requestConfirm = (action: ConfirmableAction) => {
  pendingAction.value = action;
};

const cancelConfirm = () => {
  pendingAction.value = null;
};

const acceptConfirm = () => {
  if (pendingAction.value === "shuffle") {
    performShuffle();
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  } else if (pendingAction.value === "reset") {
    performReset();
  }
  pendingAction.value = null;
};

const shareStatus = ref<"idle" | "copied" | "error">("idle");
const shareNotice = ref<string>("");
let shareResetTimer: number | null = null;

const shareButtonLabel = computed(() => {
  if (shareStatus.value === "copied") return "📋 Kopieret";
  if (shareStatus.value === "error") return "⚠️ Fejl";
  return "🔗 Del link";
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
      "⚠️ Noget gik galt. Systemet kunne ikke kopiere link. ⚠️"
    );
  }
};

onUnmounted(() => {
  clearShareTimer();
});
</script>

<style scoped src="./bingo-game.css"></style>
