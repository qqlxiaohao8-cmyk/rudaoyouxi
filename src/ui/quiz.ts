import { QUESTIONS, type Question } from "../data/questions";
import {
  AGE_BAND_LABEL,
  AGE_BAND_PORTRAIT,
  setGameBackgroundHost,
  type TraitKey,
} from "../data/traits";
import { CULTIVATION_MAX, applyChoice, type GameState } from "../gameState";
import { runPhaseTransition } from "./phaseTransition";
import { runSchoolGuess } from "./schoolGuess";
import type { OptionLetter } from "../data/optionExplanations";

interface QuizDeps {
  state: GameState;
  onFinish: () => void;
}

export function renderQuiz(root: HTMLElement, deps: QuizDeps): void {
  const { state, onFinish } = deps;
  let didFadeIn = false;

  const mountQuiz = () => {
    if (state.questionIndex >= QUESTIONS.length) {
      onFinish();
      return;
    }
    const q = QUESTIONS[state.questionIndex];

    root.innerHTML = "";
    const stage = document.createElement("section");
    stage.className = "stage stage--game";
    stage.innerHTML = `
      ${progressMarkup(state)}
      <div class="quiz">
        <aside class="portrait-card">
          <div class="portrait-frame">
            <img src="${AGE_BAND_PORTRAIT[q.ageBand]}" alt="${AGE_BAND_LABEL[q.ageBand]}" />
          </div>
          <div class="age-band">${AGE_BAND_LABEL[q.ageBand]}</div>
          <div class="age-meta">${q.ageBand} 岁</div>
        </aside>
        <div class="question-area">
          <div class="q-meta">
            <span>第 ${q.id} 问 / 共 ${QUESTIONS.length}</span>
            <span>修炼指数 ${Math.round(state.cultivation)} / ${CULTIVATION_MAX}</span>
          </div>
          <div class="q-text">${q.text}</div>
          <div class="options" id="options"></div>
        </div>
      </div>
    `;
    root.appendChild(stage);
    setGameBackgroundHost(root, q.ageBand);

    if (!didFadeIn) {
      didFadeIn = true;
      void root.offsetHeight;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          root.classList.add("app--fade-in-ready");
        });
      });
    }

    const optWrap = stage.querySelector<HTMLDivElement>("#options")!;
    for (const opt of q.options) {
      const btn = document.createElement("button");
      btn.className = "option";
      btn.innerHTML = `
        <span class="letter">${opt.letter}</span>
        <span>${opt.text}</span>
      `;
      btn.addEventListener("click", () => {
        for (const b of optWrap.querySelectorAll("button")) {
          (b as HTMLButtonElement).disabled = true;
        }
        handleChoice(q, opt.letter, opt.trait, stage);
      });
      optWrap.appendChild(btn);
    }
  };

  const handleChoice = (
    q: Question,
    letter: OptionLetter,
    trait: TraitKey,
    stage: HTMLElement,
  ) => {
    applyChoice(state, trait);
    state.questionIndex += 1;

    const qArea = stage.querySelector<HTMLElement>(".question-area")!;
    qArea.innerHTML = "";
    updateProgress(stage, state);

    void runSchoolGuess(qArea, q, letter, trait, state, () =>
      updateProgress(stage, state),
    ).then(() => {
      updateProgress(stage, state);
      window.setTimeout(renderStep, 700);
    });
  };

  const renderStep = () => {
    if (state.questionIndex >= QUESTIONS.length) {
      onFinish();
      return;
    }
    const idx = state.questionIndex;
    setGameBackgroundHost(root, QUESTIONS[idx].ageBand);
    if (
      idx > 0 &&
      QUESTIONS[idx - 1].ageBand !== QUESTIONS[idx].ageBand
    ) {
      runPhaseTransition(
        root,
        QUESTIONS[idx - 1].ageBand,
        QUESTIONS[idx].ageBand,
        mountQuiz,
      );
      return;
    }
    mountQuiz();
  };

  renderStep();
}

function progressMarkup(state: GameState): string {
  const cult = (state.cultivation / CULTIVATION_MAX) * 100;
  const ticks = Array.from({ length: QUESTIONS.length }, () => "<span></span>")
    .join("");
  return `
    <div class="cult-progress">
      <div class="labels">
        <span>修 炼 指 数</span>
        <span id="prog-text">${Math.round(state.cultivation)} / ${CULTIVATION_MAX}</span>
      </div>
      <div class="track">
        <div class="fill" id="prog-fill" style="width:${cult}%"></div>
        <div class="ticks">${ticks}</div>
      </div>
    </div>
  `;
}

function updateProgress(stage: HTMLElement, state: GameState): void {
  const fill = stage.querySelector<HTMLElement>("#prog-fill");
  const text = stage.querySelector<HTMLElement>("#prog-text");
  if (fill) {
    fill.style.width = `${(state.cultivation / CULTIVATION_MAX) * 100}%`;
  }
  if (text) {
    text.textContent = `${Math.round(state.cultivation)} / ${CULTIVATION_MAX}`;
  }
}
