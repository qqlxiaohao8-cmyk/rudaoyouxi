import type { TraitKey } from "./traits";

/** 八维弟子结局页：结果行、称号、关键词与四段解读（与立绘 TRAIT_PORTRAIT 对应） */
export interface DiscipleOutcomeDetail {
  /** 如「仁｜仁德悲悯型」，展示时前缀「结果：」 */
  archetype: string;
  exclusiveTitle: string;
  keywords: string;
  personality: string;
  lifestyle: string;
  strengths: string;
  weaknesses: string;
}

export const DISCIPLE_OUTCOME_DETAIL: Record<TraitKey, DiscipleOutcomeDetail> =
  {
    ren: {
      archetype: "仁｜仁德悲悯型",
      exclusiveTitle: "怀仁君子",
      keywords: "温柔、共情、向善、包容",
      personality:
        "你是天生的善意承载者，内心常怀悲悯之心，待人宽厚包容，习惯性换位思考，不忍心伤害任何人。骨子里信奉「爱人」为立身之本，愿意体谅他人难处，乐于帮扶弱小，不喜欢争执对立。",
      lifestyle:
        "行事以善意为先，不争输赢、不记人过，待人真诚心软，自带温润的亲和力，是身边人天然的心灵依靠。",
      strengths: "共情力极强、心地纯良、格局宽厚、重情重义，自带治愈感。",
      weaknesses:
        "容易过度心软迁就他人，不懂拒绝，常因顾及别人委屈自己。",
    },
    li: {
      archetype: "礼｜守礼端方型",
      exclusiveTitle: "执礼雅士",
      keywords: "规矩、分寸、克制、雅致",
      personality:
        "你将分寸与教养刻进骨子里，信奉以礼立身，做事有准则、待人有分寸，懂得尊卑次序、进退有度。为人端正自持，注重言行举止，厌恶轻浮无矩的行事方式，自带儒雅端庄的气质。",
      lifestyle:
        "待人谦和有礼，做事恪守底线与规则，懂得看人脸色、懂人情世故，从不越界、不逾规矩。",
      strengths: "情商高、懂分寸、自律克制、举止得体，靠谱且有涵养。",
      weaknesses:
        "有时过于拘泥规矩，略显刻板，不懂变通，容易被世俗礼数束缚自我。",
    },
    yi: {
      archetype: "义｜侠肝守义型",
      exclusiveTitle: "守义侠者",
      keywords: "耿直、担当、傲骨、重义",
      personality:
        "你信奉立身以义为先，骨子里有天生的正义感，是非分明、黑白清晰，看不惯不公与虚伪。重情重义，把情义看得比利益更重，答应的事必定全力以赴，愿意为朋友挺身而出。",
      lifestyle:
        "行事光明磊落，不耍心机、不玩城府，遇事敢于担当，宁直不弯，自带江湖侠义之气。",
      strengths: "正直坦荡、有责任感、重情守信、有风骨有底线。",
      weaknesses:
        "性子过于耿直，不懂圆滑，容易直言得罪人，不擅长迂回处世。",
    },
    zhi: {
      archetype: "智｜明思洞见型",
      exclusiveTitle: "洞智哲人",
      keywords: "通透、理性、思辨、远见",
      personality:
        "你是天生的思辨者，心思缜密、善于洞察，遇事不冲动，习惯冷静思考、看透本质。信奉以智明事，不盲从跟风，有独立的判断力与独到见解，喜欢深度思考事物规律与人性逻辑。",
      lifestyle:
        "遇事沉着冷静，善于权衡利弊，看人看事通透清醒，不被情绪左右，凡事谋定而后动。",
      strengths: "头脑清醒、洞察力强、理性沉稳、有远见、善于复盘规划。",
      weaknesses:
        "容易想太多、思虑过重，偶尔显得疏离冷淡，不擅长感性共情。",
    },
    wuwei: {
      archetype: "无为而治｜澹然统领型",
      exclusiveTitle: "澹无治者",
      keywords: "从容、放权、通透、格局",
      personality:
        "你深谙「不多干预、顺势而为」的智慧，内心沉稳大气，不喜欢事事掌控、强行强求。懂得知人善任、顺势成事，不纠结细枝末节，抓核心、放琐碎，相信万事自有节奏。",
      lifestyle:
        "待人处事松弛有度，不强求、不管控，懂得给他人留白，擅长凝聚人心、以静制动，自带领导者格局。",
      strengths: "心态从容、格局宏大、懂识人懂放权、情绪稳定、不内耗。",
      weaknesses:
        "有时过于佛系放任，容易疏于细节，让人觉得不够主动上心。",
    },
    ziran: {
      archetype: "道法自然｜归真随性型",
      exclusiveTitle: "归真隐者",
      keywords: "随性、本真、洒脱、顺天性",
      personality:
        "你崇尚顺应本心、遵从自然，厌恶世俗套路、虚伪伪装。不愿被世俗标准、旁人期待捆绑，只想活成最真实的自己，万事顺其自然，不强求、不刻意，随心而行。",
      lifestyle:
        "活得通透洒脱，不迎合、不讨好，喜欢遵从自己的天性选择生活，偏爱简单纯粹的人际关系与生活方式。",
      strengths: "真实随性、灵魂自由、不世俗不功利、心态松弛自在。",
      weaknesses:
        "容易过于我行我素，忽略世俗规则，偶尔显得不合群、特立独行。",
    },
    rouruo: {
      archetype: "柔弱不争｜谦柔守拙型",
      exclusiveTitle: "栖柔行者",
      keywords: "谦和、低调、隐忍、藏锋",
      personality:
        "你信奉以柔克刚，天性谦和低调，不与人争抢名利、不逞强好胜。懂得收敛锋芒、守拙自持，看似温和柔软，实则内心有定力，不愿卷入纷争是非，以退让换安稳。",
      lifestyle:
        "待人温顺谦和，遇事懂得退让包容，不逞口舌之快，低调内敛，不喜出风头。",
      strengths: "性格温和、心态平和、懂得隐忍、人缘和睦、不惹是非。",
      weaknesses:
        "习惯退让妥协，容易委屈自身利益，不懂主动争取属于自己的机会。",
    },
    zhizu: {
      archetype: "知足常乐｜安乐闲心型",
      exclusiveTitle: "安乐闲人",
      keywords: "安然、淡泊、极简、乐天",
      personality:
        "你拥有最难得的平常心，不贪慕浮华、不攀比虚荣，懂得珍惜当下所拥有的一切。欲望简单、心态淡泊，不追名逐利，容易在平凡生活里找到幸福感，永远保持乐观安然。",
      lifestyle:
        "生活极简随性，不争名利、不焦虑内耗，安于当下、乐享平凡，心态永远平和松弛。",
      strengths: "内心富足、乐观豁达、极少内耗、容易满足、幸福感极强。",
      weaknesses:
        "进取心稍弱，容易安于现状，缺乏突破舒适圈的动力。",
    },
  };
