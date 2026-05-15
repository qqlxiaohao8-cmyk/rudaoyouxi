import { DISCIPLE_OUTCOME_DETAIL } from "../data/discipleOutcomeDetail";
import type { Outcome } from "../data/outcomes";
import { setGameBackgroundHost, type TraitKey } from "../data/traits";
import { runSchoolRevealOverlay } from "./schoolReveal";
import {
  CULTIVATION_MAX,
  CULTIVATION_THRESHOLD,
  SCHOOL_GUESS_WRONG_LIMIT,
  type GameState,
} from "../gameState";

export async function renderResult(
  root: HTMLElement,
  state: GameState,
  outcome: Outcome,
  onRestart: () => void,
): Promise<void> {
  root.innerHTML = "";
  setGameBackgroundHost(root, "21-25");
  root.classList.add("app--in-game", "app--fade-in-ready");

  if (outcome.key !== "fanGu" && outcome.school !== "none") {
    await runSchoolRevealOverlay(root, outcome.school);
  }

  const stage = document.createElement("section");
  const isDisciple = outcome.key !== "fanGu";
  stage.className = isDisciple
    ? "stage stage--game result result--disciple result--disciple-page"
    : "stage stage--game result";

  const cult = Math.round(state.cultivation);
  const fanGuExtra =
    outcome.key === "fanGu"
      ? `<p class="age-meta">${explainFanGuOutcome(state)}</p>`
      : "";

  let mainMarkup: string;

  if (isDisciple) {
    const trait = outcome.key as TraitKey;
    const d = DISCIPLE_OUTCOME_DETAIL[trait];
    mainMarkup = `
      <div class="result-hero">
        <div class="result-portrait-center">
          <img src="${outcome.portrait}" alt="${d.exclusiveTitle}" class="result-portrait-img" />
        </div>
        <h1 class="name result-outcome-head">结果：${d.archetype}</h1>
        <div class="seal">${outcome.subtitle}</div>
        <dl class="result-meta-dl">
          <div class="result-meta-row">
            <dt>专属称号</dt>
            <dd>${d.exclusiveTitle}</dd>
          </div>
          <div class="result-meta-row">
            <dt>核心关键词</dt>
            <dd>${d.keywords}</dd>
          </div>
        </dl>
      </div>
      <div class="divider"></div>
      <p class="verse">${outcome.verse}</p>
      <div class="result-body-blocks">
        <section class="result-block">
          <h2 class="result-block-h">人格解读</h2>
          <p class="result-block-p">${d.personality}</p>
        </section>
        <section class="result-block">
          <h2 class="result-block-h">处世风格</h2>
          <p class="result-block-p">${d.lifestyle}</p>
        </section>
        <section class="result-block">
          <h2 class="result-block-h">人格优势</h2>
          <p class="result-block-p">${d.strengths}</p>
        </section>
        <section class="result-block">
          <h2 class="result-block-h">小小短板</h2>
          <p class="result-block-p">${d.weaknesses}</p>
        </section>
      </div>
    `;
  } else {
    mainMarkup = `
      <div class="seal">${outcome.subtitle}</div>
      <h1 class="name">${outcome.title}</h1>
      <div class="divider"></div>
      <div class="portrait-frame result-portrait-fangu">
        <img src="${outcome.portrait}" alt="${outcome.title}" />
      </div>
      <p class="verse">${outcome.verse}</p>
      <p class="desc">${outcome.description}</p>
      ${fanGuExtra}
    `;
  }

  stage.innerHTML = `
    ${mainMarkup}
    <p class="age-meta">最终修炼指数 ${cult} / ${CULTIVATION_MAX} · 儒道辨识失手 ${state.schoolGuessWrong} / ${SCHOOL_GUESS_WRONG_LIMIT}</p>
    <div class="actions">
      <button class="primary" id="restart-btn">再 入 山 门</button>
    </div>
  `;
  root.appendChild(stage);

  stage
    .querySelector<HTMLButtonElement>("#restart-btn")!
    .addEventListener("click", onRestart);
}

function explainFanGuOutcome(state: GameState): string {
  if (state.schoolGuessWrong >= SCHOOL_GUESS_WRONG_LIMIT) {
    return `儒道辨识失手已满 ${SCHOOL_GUESS_WRONG_LIMIT} 次，心镜蒙尘，只得归于俗世凡骨。`;
  }
  if (state.cultivation < CULTIVATION_THRESHOLD) {
    return `修炼指数未达 ${CULTIVATION_THRESHOLD}，火候不足以承门户。`;
  }
  return "";
}
