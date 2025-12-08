<template>
  <div class="bingo-container">
    <header class="bingo-header">
      <h1>🎄 Hallmark Julefilm Bingo 🎄</h1>
      <div class="subtitle">Klik på felterne, når du ser scenerne</div>
      <div class="scoreboard">
        <div class="score-label">Point</div>
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
          <div class="square-title">
            {{ square.title }}
          </div>
          <div class="square-description">
            {{ square.description }}
          </div>
          <div v-if="square.marked" class="checkmark">✓</div>
        </div>
      </div>
    </div>

    <footer class="bingo-footer">
      <div class="button-group">
        <button class="copy-link-button" @click="copyShareLink">
          {{ shareButtonLabel }}
        </button>
        <button class="shuffle-button" @click="requestConfirm('shuffle')">
          🔀 Bland felter
        </button>
        <button class="reset-button" @click="requestConfirm('reset')">
          🔄 Nulstil krydser
        </button>
      </div>
      <div class="credits">Efter idé af 🤎🐻</div>
    </footer>
    <div v-if="shareNotice" class="share-notice" aria-live="polite">
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
          <button class="confirm-cancel" @click="cancelConfirm">
            {{ confirmCopy.cancelLabel }}
          </button>
          <button class="confirm-accept" @click="acceptConfirm">
            {{ confirmCopy.confirmLabel }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SquareTemplates } from "@/game-data/xmas-tv-tropes";
import { BingoSquare } from "@/types/bingo-square";
import { computed, onUnmounted, ref } from "vue";

type ConfirmableAction = "shuffle" | "reset";

const ORDER_PARAM = "r";
const baseTemplateIndices = SquareTemplates.map((_, index) => index);

const encodeOrder = (order: number[]): string | null => {
  if (typeof window === "undefined") return null;
  const base = window.btoa(order.join(","));
  return base.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
};

const decodeOrder = (value: string | null): number[] | null => {
  if (!value || typeof window === "undefined") return null;
  let normalized = value.replace(/-/g, "+").replace(/_/g, "/");
  while (normalized.length % 4 !== 0) {
    normalized += "=";
  }
  try {
    const decoded = window.atob(normalized);
    const indices = decoded.split(",").map((part) => Number.parseInt(part, 10));
    if (indices.length !== baseTemplateIndices.length) return null;
    const unique = new Set(indices);
    const maxIndex = SquareTemplates.length - 1;
    const hasInvalid = indices.some(
      (idx) => Number.isNaN(idx) || idx < 0 || idx > maxIndex
    );
    return unique.size === indices.length && !hasInvalid ? indices : null;
  } catch {
    return null;
  }
};

const persistOrder = (order: number[]) => {
  if (typeof window === "undefined") return;
  const encoded = encodeOrder(order);
  if (!encoded) return;
  const url = new URL(window.location.href);
  url.searchParams.set(ORDER_PARAM, encoded);
  window.history.replaceState({}, "", url);
};

const getOrderFromParam = (): number[] | null => {
  if (typeof window === "undefined") return null;
  const url = new URL(window.location.href);
  const candidate = url.searchParams.get(ORDER_PARAM);
  return decodeOrder(candidate);
};

const shuffleOrder = (): number[] => {
  const indices = [...baseTemplateIndices];
  for (let i = indices.length - 1; i > 0; i--) {
    const swapIndex = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[swapIndex]] = [indices[swapIndex], indices[i]];
  }
  return indices;
};

// Persist a shareable board order so multiple viewers see the same layout.
const resolveInitialOrder = (): number[] => {
  const existingOrder = getOrderFromParam();
  if (existingOrder) return existingOrder;
  const randomizedOrder = shuffleOrder();
  persistOrder(randomizedOrder);
  return randomizedOrder;
};

const createSquares = (order: number[]): BingoSquare[] =>
  order.map((templateIndex) => ({
    ...SquareTemplates[templateIndex],
    marked: false,
  }));

const currentOrder = ref<number[]>(resolveInitialOrder());
const bingoSquares = ref<BingoSquare[]>(createSquares(currentOrder.value));

const rebuildSquares = (order: number[]) => {
  bingoSquares.value = createSquares(order);
};

const setNewOrder = (order: number[]) => {
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

<style scoped>
.bingo-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.bingo-header {
  text-align: center;
  color: white;
  margin-bottom: 30px;
}

.bingo-header h1 {
  font-size: 2.5rem;
  margin: 0 0 10px 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.subtitle {
  font-size: 1.1rem;
  margin: 0;
  opacity: 0.9;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.scoreboard {
  margin: 20px auto 0;
  padding: 12px 24px 16px;
  background: radial-gradient(circle at 20% 20%, #1c2a38, #08111b 70%);
  border: 3px solid rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4),
    inset 0 0 30px rgba(11, 24, 38, 0.8);
  width: min(420px, 100%);
  text-align: center;
}

.score-label {
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.35em;
  color: rgba(255, 255, 255, 0.65);
  margin-bottom: 6px;
}

.score-value {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 14px;
  font-family: "Share Tech Mono", "IBM Plex Mono", monospace;
  letter-spacing: 0.08em;
  color: #f5f7fa;
}

.score-current,
.score-total {
  font-size: 2.4rem;
  line-height: 1;
  padding: 6px 14px;
  border-radius: 8px;
  background: linear-gradient(180deg, #0f1f2f, #01060c);
  border: 1px solid rgba(255, 255, 255, 0.2);
  min-width: 64px;
}

.score-current {
  color: #7cf4ae;
  text-shadow: 0 0 12px rgba(124, 244, 174, 0.6);
}

.score-total {
  color: #fa5549;
  text-shadow: 0 0 12px rgba(249, 209, 91, 0.5);
}

.score-divider {
  font-size: 2rem;
  opacity: 0.4;
}

.bingo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 15px;
  flex: 1;
  margin-bottom: 30px;
}

.bingo-square {
  background: white;
  border-radius: 12px;
  padding: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  min-height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bingo-square:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}

.bingo-square.marked {
  background: linear-gradient(135deg, #d42426 0%, #c41e3a 100%);
  color: white;
}

.bingo-square.marked:hover {
  background: linear-gradient(135deg, #c41e3a 0%, #a01829 100%);
}

.square-content {
  text-align: center;
  width: 100%;
  position: relative;
}

.square-title {
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 8px;
  line-height: 1.3;
}

.square-description {
  font-size: 0.85rem;
  line-height: 1.4;
  opacity: 0.85;
}

.bingo-square.marked .square-description {
  opacity: 0.95;
}

.checkmark {
  position: absolute;
  top: -10px;
  right: -10px;
  background: #fff;
  color: #c41e3a;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.bingo-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  text-align: center;
}

.button-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  width: min(100%, 720px);
  margin: 0 auto;
}

.reset-button,
.shuffle-button {
  background: #fff;
  color: #1a472a;
  border: none;
  padding: 15px 30px;
  font-size: 1.1rem;
  border-radius: 12px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.reset-button:hover,
.shuffle-button:hover {
  background: #f0f0f0;
  transform: translateY(-2px);
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
}

.reset-button:active,
.shuffle-button:active {
  transform: translateY(0);
}

.reset-button,
.shuffle-button {
  background: #05180b;
  color: #2e8b4f;
}

.copy-link-button {
  background: linear-gradient(135deg, #ffdd55, #ffb347);
  color: #0a1b2b;
  border: 2px solid rgba(10, 27, 43, 0.15);
  padding: 15px 34px;
  font-size: 1.05rem;
  font-weight: 700;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 10px 20px rgba(255, 179, 71, 0.35);
}

.copy-link-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 26px rgba(255, 179, 71, 0.45);
  background: linear-gradient(135deg, #ffe067, #ffc46a);
}

.copy-link-button:active {
  transform: translateY(0);
}

.credits {
  text-align: center;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.share-notice {
  margin: 10px auto 0;
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
  font-size: 0.95rem;
  text-align: center;
  max-width: 320px;
}

.confirm-overlay {
  position: fixed;
  inset: 0;
  background: rgba(3, 7, 18, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  z-index: 1000;
}

.confirm-dialog {
  background: #ffffff;
  border-radius: 12px;
  padding: 28px;
  width: min(420px, 100%);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(0, 0, 0, 0.05);
  text-align: left;
}

.confirm-title {
  font-size: 1.35rem;
  margin: 0 0 12px 0;
  color: #0f1f2f;
}

.confirm-message {
  margin: 0 0 22px 0;
  color: #35424b;
  line-height: 1.5;
}

.confirm-actions {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}

.confirm-cancel,
.confirm-accept {
  border: none;
  border-radius: 12px;
  padding: 12px 20px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.confirm-cancel {
  background: #eef2f5;
  color: #1f2d3b;
}

.confirm-accept {
  background: linear-gradient(135deg, #17633b, #0f3d24);
  color: #ffffff;
  box-shadow: 0 8px 18px rgba(15, 61, 36, 0.35);
}

.confirm-cancel:hover,
.confirm-accept:hover {
  transform: translateY(-1px);
}

/* Mobile optimizations */
@media (max-width: 767px) {
  .bingo-container {
    padding: 15px;
  }

  .bingo-header h1 {
    font-size: 1.8rem;
  }

  .subtitle {
    font-size: 1rem;
  }

  .bingo-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .bingo-square {
    min-height: 120px;
    padding: 15px;
  }

  .square-title {
    font-size: 1rem;
  }

  .square-description {
    font-size: 0.8rem;
  }

  .checkmark {
    width: 35px;
    height: 35px;
    font-size: 20px;
  }

  .scoreboard {
    width: 100%;
  }

  .score-value {
    flex-wrap: wrap;
  }

  .reset-button,
  .shuffle-button {
    padding: 12px 24px;
    font-size: 1rem;
  }

  .copy-link-button {
    width: 100%;
    justify-content: center;
  }

  .score {
    font-size: 1.1rem;
  }
}

/* Tablet (iPad) */
@media (min-width: 768px) and (max-width: 1199px) {
  .bingo-container {
    padding: 30px;
  }

  .bingo-header h1 {
    font-size: 3rem;
  }

  .bingo-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  .bingo-square {
    min-height: 160px;
    padding: 25px;
  }
}

/* Large Desktop */
@media (min-width: 1200px) {
  .bingo-grid {
    grid-template-columns: repeat(5, 1fr);
  }

  .bingo-square {
    min-height: 180px;
  }

  .checkmark {
    top: -28px;
  }
}
</style>
