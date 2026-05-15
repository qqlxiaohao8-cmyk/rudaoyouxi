import {
  AGE_BAND_LABEL,
  AGE_BAND_PORTRAIT,
  setGameBackgroundHost,
  type AgeBand,
} from "../data/traits";

/** 每次 Space 增加的成长指数（约 17 次按满） */
const GROWTH_PER_SPACE = 6;
const GROWTH_MAX = 100;

/**
 * 阶段更迭：上一阶段立绘居中，快速 Space 助力成长；
 * 达到阈值后切换为下一阶段立绘，再淡出并进入下一屏（常规答题布局）。
 */
export function runPhaseTransition(
  root: HTMLElement,
  fromBand: AgeBand,
  toBand: AgeBand,
  onComplete: () => void,
): void {
  setGameBackgroundHost(root, toBand);
  root.innerHTML = "";
  const wrap = document.createElement("div");
  wrap.className = "stage phase-overlay stage--game";
  wrap.innerHTML = `
    <div class="phase-inner">
      <p class="phase-kicker">阶段更迭</p>
      <p class="phase-sub">${AGE_BAND_LABEL[fromBand]} · ${fromBand} 岁 → ${AGE_BAND_LABEL[toBand]} · ${toBand} 岁</p>
      <div class="phase-portrait-wrap" id="phase-portrait-wrap">
        <img id="phase-img" src="${AGE_BAND_PORTRAIT[fromBand]}" alt="${AGE_BAND_LABEL[fromBand]}" />
      </div>
      <p class="phase-hint">快速按 <span class="kbd">Space</span> 助力弟子成长</p>
      <div class="growth-track">
        <div class="growth-fill" id="growth-fill" style="width:0%"></div>
      </div>
      <p class="phase-progress-label" id="growth-label">成长契机 0 / ${GROWTH_MAX}</p>
    </div>
  `;
  root.appendChild(wrap);

  let growth = 0;
  let completed = false;
  const fillEl = wrap.querySelector<HTMLElement>("#growth-fill")!;
  const labelEl = wrap.querySelector<HTMLElement>("#growth-label")!;
  const imgEl = wrap.querySelector<HTMLImageElement>("#phase-img")!;
  const portraitWrap = wrap.querySelector<HTMLElement>("#phase-portrait-wrap")!;

  const finish = () => {
    if (completed) return;
    completed = true;
    window.removeEventListener("keydown", onKey);
    imgEl.src = AGE_BAND_PORTRAIT[toBand];
    imgEl.alt = AGE_BAND_LABEL[toBand];
    portraitWrap.classList.add("phase-portrait-morph");
    wrap.querySelector<HTMLElement>(".phase-hint")!.textContent =
      "新貌初成 — 弟子归位";
    wrap.querySelector<HTMLElement>(".phase-sub")!.textContent =
      `${AGE_BAND_LABEL[toBand]} · ${toBand} 岁`;
    labelEl.textContent = `成长契机 ${GROWTH_MAX} / ${GROWTH_MAX}`;

    window.setTimeout(() => {
      portraitWrap.classList.add("phase-portrait-return");
      wrap.classList.add("phase-leaving");
      window.setTimeout(() => {
        onComplete();
      }, 520);
    }, 720);
  };

  const onKey = (e: KeyboardEvent) => {
    if (e.code !== "Space" || completed) return;
    e.preventDefault();
    growth = Math.min(GROWTH_MAX, growth + GROWTH_PER_SPACE);
    fillEl.style.width = `${growth}%`;
    labelEl.textContent = `成长契机 ${growth} / ${GROWTH_MAX}`;
    if (growth >= GROWTH_MAX) {
      finish();
    }
  };

  window.addEventListener("keydown", onKey);
}
