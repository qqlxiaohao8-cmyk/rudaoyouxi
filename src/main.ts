import "./style.css";
import { createState } from "./gameState";
import { QUESTIONS } from "./data/questions";
import { setGameBackgroundHost } from "./data/traits";
import { renderMenu } from "./ui/menu";
import { renderQuiz } from "./ui/quiz";
import { renderResult } from "./ui/result";
import { judge } from "./scoring";

const root = document.querySelector<HTMLDivElement>("#app")!;

let state = createState();

function showMenu(): void {
  root.classList.remove("app--in-game", "app--fade-in-ready");
  root.style.removeProperty("--game-bg");
  delete root.dataset.bgStage;
  document.body.classList.remove("game-bg-active");
  document.body.style.removeProperty("--game-bg");
  delete document.body.dataset.bgStage;
  renderMenu(root, () => {
    state = createState();
    showQuiz();
  });
}

function showQuiz(): void {
  root.classList.add("app--in-game");
  root.classList.remove("app--fade-in-ready");
  if (state.questionIndex < QUESTIONS.length) {
    setGameBackgroundHost(root, QUESTIONS[state.questionIndex].ageBand);
  }
  renderQuiz(root, {
    state,
    onFinish: () => {
      const outcome = judge(state);
      renderResult(root, state, outcome, () => {
        state = createState();
        showQuiz();
      });
    },
  });
}

showMenu();
