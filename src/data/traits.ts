export const TRAIT_KEYS = [
  "ren",
  "li",
  "yi",
  "zhi",
  "ziran",
  "wuwei",
  "rouruo",
  "zhizu",
] as const;

export type TraitKey = (typeof TRAIT_KEYS)[number];

export type School = "ru" | "dao";

export const TRAIT_LABEL: Record<TraitKey, string> = {
  ren: "仁",
  li: "礼",
  yi: "义",
  zhi: "智",
  ziran: "道法自然",
  wuwei: "无为而治",
  rouruo: "柔弱不争",
  zhizu: "知足常乐",
};

/** 八维主倾向对应的弟子「最终形态」名（与各自思想立绘一一对应） */
export const TRAIT_DISCIPLE_FORM: Record<TraitKey, string> = {
  ren: "怀仁澈",
  li: "执礼珩",
  yi: "守义沧",
  zhi: "明玄智",
  wuwei: "澹无妄",
  ziran: "归道淳",
  rouruo: "栖柔辞",
  zhizu: "安止遥",
};

/** 与思想同名的立绘资源（每人一图） */
export const TRAIT_PORTRAIT: Record<TraitKey, string> = {
  ren: "/仁.png",
  li: "/礼.png",
  yi: "/义.png",
  zhi: "/智.png",
  ziran: "/道法自然.png",
  wuwei: "/无为而治.png",
  rouruo: "/柔弱不争.png",
  zhizu: "/知足常乐.png",
};

export const TRAIT_SCHOOL: Record<TraitKey, School> = {
  ren: "ru",
  li: "ru",
  yi: "ru",
  zhi: "ru",
  ziran: "dao",
  wuwei: "dao",
  rouruo: "dao",
  zhizu: "dao",
};

export const SCHOOL_LABEL: Record<School, string> = {
  ru: "儒",
  dao: "道",
};

export type AgeBand = "5-8" | "9-14" | "15-20" | "21-25";

export const AGE_BAND_LABEL: Record<AgeBand, string> = {
  "5-8": "童子",
  "9-14": "青年",
  "15-20": "青壮",
  "21-25": "壮年",
};

export const AGE_BAND_PORTRAIT: Record<AgeBand, string> = {
  "5-8": "/童子.png",
  "9-14": "/青年.png",
  "15-20": "/青壮.png",
  "21-25": "/壮年.png",
};

/**
 * 全屏阶段背景（`public/` 下原图，不经裁改；CSS 用 `cover` 铺满视窗）。
 * 一阶童子 → 竹林，二阶青年 → 书房，三阶青壮 → 后院，四阶壮年 → 秋日（资源为 `.png`）。
 */
export const AGE_BAND_BG: Record<AgeBand, string> = {
  "5-8": "/竹林.png",
  "9-14": "/书房.png",
  "15-20": "/后院.png",
  "21-25": "/秋日.png",
};

const AGE_BAND_STAGE: Record<AgeBand, "1" | "2" | "3" | "4"> = {
  "5-8": "1",
  "9-14": "2",
  "15-20": "3",
  "21-25": "4",
};

/** 随 `ageBand` 切换全屏背景图（`--game-bg`）与阶段编号 */
export function setGameBackgroundHost(
  host: HTMLElement,
  band: AgeBand,
): void {
  const path = AGE_BAND_BG[band];
  const value = `url("${path}")`;
  const stage = AGE_BAND_STAGE[band];
  document.body.classList.add("game-bg-active");
  document.body.dataset.bgStage = stage;
  document.body.style.setProperty("--game-bg", value);
  host.style.setProperty("--game-bg", value);
  host.dataset.bgStage = stage;
}
