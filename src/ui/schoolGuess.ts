import type { Question } from "../data/questions";
import type { OptionLetter } from "../data/optionExplanations";
import { OPTION_EXPLANATIONS } from "../data/optionExplanations";
import {
  SCHOOL_LABEL,
  TRAIT_SCHOOL,
  type School,
  type TraitKey,
} from "../data/traits";
import {
  SCHOOL_GUESS_SUCCESS_DELTA,
  adjustCultivation,
  type GameState,
} from "../gameState";

export function runSchoolGuess(
  mount: HTMLElement,
  q: Question,
  letter: OptionLetter,
  trait: TraitKey,
  state: GameState,
  onProgressUpdate: () => void,
): Promise<void> {
  const correct = TRAIT_SCHOOL[trait];
  const explanation = OPTION_EXPLANATIONS[q.id][letter];

  mount.innerHTML = `
    <div class="school-guess">
      <p class="school-guess-prompt">你所选 ${letter}，更贴近哪一家思想？</p>
      <div class="school-guess-actions">
        <button type="button" class="school-btn school-btn--ru" data-school="ru">儒</button>
        <button type="button" class="school-btn school-btn--dao" data-school="dao">道</button>
      </div>
    </div>
  `;

  return new Promise((resolve) => {
    const root = mount.querySelector<HTMLElement>(".school-guess")!;
    const btns = mount.querySelectorAll<HTMLButtonElement>(".school-btn");

    const showResult = (picked: School) => {
      const ok = picked === correct;
      if (ok) {
        adjustCultivation(state, SCHOOL_GUESS_SUCCESS_DELTA);
      } else {
        state.schoolGuessWrong += 1;
      }
      onProgressUpdate();

      const correctName = SCHOOL_LABEL[correct];
      const pickedName = SCHOOL_LABEL[picked];

      root.innerHTML = `
        <div class="school-result">
          <h3 class="school-result-title ${ok ? "is-correct" : "is-wrong"}">${ok ? "辨识正确" : "辨识有误"}</h3>
          <p class="school-result-meta">正解为「${correctName}家」 · 你选「${pickedName}家」</p>
          <p class="school-result-explain">${explanation}</p>
          <button type="button" class="primary school-continue">继 续</button>
        </div>
      `;
      root
        .querySelector<HTMLButtonElement>(".school-continue")!
        .addEventListener("click", () => resolve());
    };

    btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const s = btn.dataset.school as School;
        btns.forEach((b) => {
          b.disabled = true;
        });
        showResult(s);
      });
    });
  });
}
