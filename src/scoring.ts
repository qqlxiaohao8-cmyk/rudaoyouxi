import { TRAIT_KEYS, type TraitKey } from "./data/traits";
import { OUTCOMES, type Outcome } from "./data/outcomes";
import {
  CULTIVATION_THRESHOLD,
  SCHOOL_GUESS_WRONG_LIMIT,
  type GameState,
} from "./gameState";

const TIE_BREAK_ORDER: TraitKey[] = [
  "ren",
  "yi",
  "li",
  "zhi",
  "ziran",
  "wuwei",
  "rouruo",
  "zhizu",
];

/**
 * 根据八维答题累计分取主倾向（并列时按 TIE_BREAK_ORDER 先后）。
 * 主倾向键对应 `TRAIT_DISCIPLE_FORM` 与 `TRAIT_PORTRAIT`（见 data/traits.ts），经 judge 选出最终形态与立绘。
 */
export function dominantTrait(traits: Record<TraitKey, number>): TraitKey {
  let best: TraitKey = TIE_BREAK_ORDER[0];
  let bestScore = -Infinity;
  for (const key of TRAIT_KEYS) {
    const score = traits[key];
    if (
      score > bestScore ||
      (score === bestScore &&
        TIE_BREAK_ORDER.indexOf(key) < TIE_BREAK_ORDER.indexOf(best))
    ) {
      best = key;
      bestScore = score;
    }
  }
  return best;
}

export function judge(state: GameState): Outcome {
  if (state.schoolGuessWrong >= SCHOOL_GUESS_WRONG_LIMIT) {
    return OUTCOMES.fanGu;
  }
  if (state.cultivation < CULTIVATION_THRESHOLD) {
    return OUTCOMES.fanGu;
  }
  return OUTCOMES[dominantTrait(state.traits)];
}
