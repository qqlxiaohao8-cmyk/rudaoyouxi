import { SCHOOL_LABEL, type School } from "../data/traits";

const HOLD_MS = 2000;
const EXIT_MS = 520;

/** 结局前先全屏强调「儒」或「道」，再进入结果页 */
export function runSchoolRevealOverlay(
  root: HTMLElement,
  school: School,
): Promise<void> {
  const char = SCHOOL_LABEL[school];
  const el = document.createElement("div");
  el.className = `school-reveal-overlay school-reveal-overlay--${school}`;
  el.setAttribute("role", "img");
  el.setAttribute("aria-label", `${char}家揭晓`);
  el.innerHTML = `
    <div class="school-reveal-vignette" aria-hidden="true"></div>
    <div class="school-reveal-burst-wrap" aria-hidden="true">
      <div class="school-reveal-burst"></div>
    </div>
    <div class="school-reveal-shards" aria-hidden="true"></div>
    <div class="school-reveal-inner">
      <span class="school-reveal-char">${char}</span>
    </div>
  `;
  root.appendChild(el);

  return new Promise((resolve) => {
    void el.offsetHeight;
    requestAnimationFrame(() => {
      el.classList.add("school-reveal-overlay--visible");
    });
    window.setTimeout(() => {
      el.classList.add("school-reveal-overlay--exiting");
      window.setTimeout(() => {
        el.remove();
        resolve();
      }, EXIT_MS);
    }, HOLD_MS);
  });
}
