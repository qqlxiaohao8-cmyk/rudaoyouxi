import type { TraitKey, School } from "./traits";
import {
  SCHOOL_LABEL,
  TRAIT_DISCIPLE_FORM,
  TRAIT_LABEL,
  TRAIT_PORTRAIT,
  TRAIT_SCHOOL,
} from "./traits";

export interface Outcome {
  key: TraitKey | "fanGu";
  school: School | "none";
  /** 弟子最终形态名（算法主倾向对应） */
  title: string;
  /** 门派与思想渊源 */
  subtitle: string;
  verse: string;
  description: string;
  portrait: string;
}

function discipleSubtitle(trait: TraitKey): string {
  const school = TRAIT_SCHOOL[trait];
  return `${SCHOOL_LABEL[school]}门 · ${TRAIT_LABEL[trait]}`;
}

export const OUTCOMES: Record<TraitKey | "fanGu", Outcome> = {
  ren: {
    key: "ren",
    school: "ru",
    title: TRAIT_DISCIPLE_FORM.ren,
    subtitle: discipleSubtitle("ren"),
    verse: "「仁者爱人，己欲立而立人，己欲达而达人。」",
    description:
      "你心中常怀恻隐，遇人受苦不忍冷眼。山中修炼多年，所证不在术法之高，而在一颗悲悯不竭的心。日后你将以行医、济贫、化解纷争为事，使所到之处人心稍暖、戾气稍消。儒门以仁为根，你便是那一抹随处生长的春意。",
    portrait: TRAIT_PORTRAIT.ren,
  },
  li: {
    key: "li",
    school: "ru",
    title: TRAIT_DISCIPLE_FORM.li,
    subtitle: discipleSubtitle("li"),
    verse: "「不学礼，无以立。」",
    description:
      "你举止有度，言行有节，知进退而明长幼。修炼之中，你不求奇遇，只求每一步皆合于法度。世人喧嚣躁动时，正是有你这般人立起规矩、撑起秩序，使家有家声、国有国体。你并不喧哗，却是世间最稳的那根梁柱。",
    portrait: TRAIT_PORTRAIT.li,
  },
  yi: {
    key: "yi",
    school: "ru",
    title: TRAIT_DISCIPLE_FORM.yi,
    subtitle: discipleSubtitle("yi"),
    verse: "「见义不为，无勇也。」",
    description:
      "你眼中容不得不公，心中过不去亏欠。该出手时绝不退缩，纵刀剑加身亦不肯弯腰。这一身正气虽常令你独行寒夜，却也常使弱者得以挺直腰板。修炼对你而言不是避世，而是养出一柄足够锋利、又始终干净的剑。",
    portrait: TRAIT_PORTRAIT.yi,
  },
  zhi: {
    key: "zhi",
    school: "ru",
    title: TRAIT_DISCIPLE_FORM.zhi,
    subtitle: discipleSubtitle("zhi"),
    verse: "「知者不惑。」",
    description:
      "你善观察、勤思辨，不轻信亦不轻断。同门遇困局，常先来与你商议。你将所学一一推演验证，既不囿于古法，也不轻弃旧章。儒门以智为目，凡你立足之处，迷雾退散，路自会显出来。",
    portrait: TRAIT_PORTRAIT.zhi,
  },
  ziran: {
    key: "ziran",
    school: "dao",
    title: TRAIT_DISCIPLE_FORM.ziran,
    subtitle: discipleSubtitle("ziran"),
    verse: "「人法地，地法天，天法道，道法自然。」",
    description:
      "你看花开花落、潮起潮平，皆觉其中自有大律，不必勉强。修炼对你而言不是逆天改命，而是体察天地节奏，让自身随之起落。你并非懒散无为，而是知道何时当行、何时当止。山川草木皆是你的师父，云霞星月皆是你的功课。",
    portrait: TRAIT_PORTRAIT.ziran,
  },
  wuwei: {
    key: "wuwei",
    school: "dao",
    title: TRAIT_DISCIPLE_FORM.wuwei,
    subtitle: discipleSubtitle("wuwei"),
    verse: "「我无为而民自化，我好静而民自正。」",
    description:
      "你不喜插手，不爱裁断，相信很多事情放一放、晾一晾，反倒自有归宿。这并非冷漠，而是一种深远的信任：信任时间，信任自然，信任人各有各的路要走。世人忙忙碌碌处，你拈花一笑，反而能看清局势的根。",
    portrait: TRAIT_PORTRAIT.wuwei,
  },
  rouruo: {
    key: "rouruo",
    school: "dao",
    title: TRAIT_DISCIPLE_FORM.rouruo,
    subtitle: discipleSubtitle("rouruo"),
    verse: "「上善若水，水善利万物而不争。」",
    description:
      "你说话轻、动作慢，却往往是最后能笑出来的那个人。你深信刚强易折、柔弱长存，世间的胜负不在一时，遇事先避其锋、再化其势。你的修炼像水一样，没有形状，却能磨穿顽石、滋养众生。",
    portrait: TRAIT_PORTRAIT.rouruo,
  },
  zhizu: {
    key: "zhizu",
    school: "dao",
    title: TRAIT_DISCIPLE_FORM.zhizu,
    subtitle: discipleSubtitle("zhizu"),
    verse: "「知足者富。」",
    description:
      "你心中有一杆秤，知道什么是「够」。一蔬一饭、一茶一书，皆能让你欢喜半日。世人追逐功名权位，你却看出那是另一种锁。你的修炼并不轰烈，却最难得：在喧嚣的世道里，长久地、安稳地，把日子过成自己的样子。",
    portrait: TRAIT_PORTRAIT.zhizu,
  },
  fanGu: {
    key: "fanGu",
    school: "none",
    title: "俗世凡骨",
    subtitle: "尘缘未了",
    verse: "「机缘未至，火候未到。」",
    description:
      "你并非心地不善、亦非智识不足，只是在这一程修炼里，火候未及、心神未定：丹田难聚真气。山中云雾依旧，你却仍要回到红尘中，做一个寻常人。修炼非一世之功，凡骨亦能照见星月——下次再上山时，不必焦急，慢慢来。",
    portrait: "/俗世凡骨.png",
  },
};
