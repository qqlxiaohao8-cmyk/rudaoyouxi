import { TRAIT_KEYS, type TraitKey } from "./data/traits";
import { QUESTIONS } from "./data/questions";

export const CULTIVATION_THRESHOLD = 60;
export const CULTIVATION_MAX = 100;
export const CULTIVATION_START = 10;

/** 每题「儒/道」辨识正确时增加的修炼指数；起始 10 + 30×本值 = 100 */
export const SCHOOL_GUESS_SUCCESS_DELTA = 3;

/** 辨识失手达此次数 → 俗世凡骨（与修炼未达阈并列） */
export const SCHOOL_GUESS_WRONG_LIMIT = 10;

export interface GameState {
  questionIndex: number;
  traits: Record<TraitKey, number>;
  cultivation: number;
  schoolGuessWrong: number;
}

export function createState(): GameState {
  const traits = Object.fromEntries(
    TRAIT_KEYS.map((k) => [k, 0]),
  ) as Record<TraitKey, number>;
  return {
    questionIndex: 0,
    traits,
    cultivation: CULTIVATION_START,
    schoolGuessWrong: 0,
  };
}

export function applyChoice(state: GameState, trait: TraitKey): void {
  state.traits[trait] += 1;
}

export function adjustCultivation(state: GameState, delta: number): void {
  state.cultivation = Math.max(
    0,
    Math.min(CULTIVATION_MAX, state.cultivation + delta),
  );
}

export function isFinished(state: GameState): boolean {
  return state.questionIndex >= QUESTIONS.length;
}

export function questionProgressRatio(state: GameState): number {
  return state.questionIndex / QUESTIONS.length;
}
