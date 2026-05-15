import type { AgeBand, TraitKey } from "./traits";

export interface QuestionOption {
  letter: "A" | "B" | "C" | "D";
  text: string;
  trait: TraitKey;
}

export interface Question {
  id: number;
  ageBand: AgeBand;
  text: string;
  options: [QuestionOption, QuestionOption, QuestionOption, QuestionOption];
}

export const QUESTIONS: Question[] = [
  {
    id: 1,
    ageBand: "5-8",
    text: "你捡到一只受伤的小鸟。",
    options: [
      { letter: "A", text: "小心照料，等它伤好放生。", trait: "ren" },
      { letter: "B", text: "先捧去问大人怎么处理。", trait: "li" },
      { letter: "C", text: "放回原处，大自然会照顾它。", trait: "ziran" },
      { letter: "D", text: "不用管，它自己会好起来。", trait: "wuwei" },
    ],
  },
  {
    id: 2,
    ageBand: "5-8",
    text: "邻居家的果子伸到墙外，看起来很甜。",
    options: [
      { letter: "A", text: "忍着不摘，那是别人的东西。", trait: "yi" },
      { letter: "B", text: "想个不被人发现的巧法子摘到。", trait: "zhi" },
      { letter: "C", text: "等果子熟了自己掉下来再捡。", trait: "ziran" },
      { letter: "D", text: "反正不是我的，懒得想它。", trait: "wuwei" },
    ],
  },
  {
    id: 3,
    ageBand: "5-8",
    text: "长辈给了你一块很好吃的点心。",
    options: [
      { letter: "A", text: "掰一半分给弟弟妹妹。", trait: "ren" },
      { letter: "B", text: "先给长辈行礼道谢再吃。", trait: "li" },
      { letter: "C", text: "让给更小的孩子，我让着他们。", trait: "rouruo" },
      { letter: "D", text: "尝一点就很开心，留着慢慢吃。", trait: "zhizu" },
    ],
  },
  {
    id: 4,
    ageBand: "5-8",
    text: "两个小伙伴抢玩具快要打起来了。",
    options: [
      { letter: "A", text: "提议玩个新游戏，一起开心。", trait: "ren" },
      { letter: "B", text: "建议他们轮流玩，一人一次。", trait: "li" },
      { letter: "C", text: "想个更好玩的玩法转移他们注意。", trait: "zhi" },
      { letter: "D", text: "抢来抢去没意思，我自己去别处玩。", trait: "zhizu" },
    ],
  },
  {
    id: 5,
    ageBand: "5-8",
    text: "师傅让你打扫院子，你觉得很枯燥。",
    options: [
      { letter: "A", text: "想到干净院子让大家舒服，就有劲了。", trait: "ren" },
      { letter: "B", text: "师傅吩咐的事，要认真做好。", trait: "li" },
      { letter: "C", text: "不勉强，扫多少算多少。", trait: "wuwei" },
      { letter: "D", text: "少扫点没关系，反正明天还会脏。", trait: "zhizu" },
    ],
  },
  {
    id: 6,
    ageBand: "5-8",
    text: "有人说你画的画很丑。",
    options: [
      { letter: "A", text: "不跟他计较，他可能心情不好。", trait: "rouruo" },
      { letter: "B", text: "问问他哪里不好，我下次改进。", trait: "zhi" },
      { letter: "C", text: "我自己觉得画得挺好，心里高兴。", trait: "zhizu" },
      { letter: "D", text: "万物各有各的样子，我的画也有它的美。", trait: "ziran" },
    ],
  },
  {
    id: 7,
    ageBand: "5-8",
    text: "你养的小动物死掉了，你很伤心。",
    options: [
      { letter: "A", text: "好好埋了它，谢谢它陪过我。", trait: "ren" },
      { letter: "B", text: "生死都是自然的事，不必太难过。", trait: "ziran" },
      { letter: "C", text: "哭也没用，平静接受。", trait: "rouruo" },
      { letter: "D", text: "再养一只就好，不用太放心上。", trait: "wuwei" },
    ],
  },
  {
    id: 8,
    ageBand: "5-8",
    text: "父亲让你从木剑和拂尘中选一样来学。",
    options: [
      { letter: "A", text: "选木剑，将来可以保护弱小。", trait: "yi" },
      { letter: "B", text: "选拂尘，轻柔的东西也能很厉害。", trait: "rouruo" },
      { letter: "C", text: "都不选，草木竹石都可以用。", trait: "ziran" },
      { letter: "D", text: "随便哪样都行，学什么都是机缘。", trait: "wuwei" },
    ],
  },
  {
    id: 9,
    ageBand: "9-14",
    text: "有同窗因为穿着破旧被取笑了。",
    options: [
      { letter: "A", text: "站出来替他说句公道话。", trait: "yi" },
      { letter: "B", text: "私下把自己的衣物借给他。", trait: "ren" },
      { letter: "C", text: "想个法子让取笑的人出个丑。", trait: "zhi" },
      { letter: "D", text: "安慰他：衣服干净就好，我也没新衣服。", trait: "zhizu" },
    ],
  },
  {
    id: 10,
    ageBand: "9-14",
    text: "集市上有人卖东西缺斤少两，被你发现。",
    options: [
      { letter: "A", text: "当面指出，不能让人吃亏。", trait: "yi" },
      { letter: "B", text: "按规矩去市署报官解决。", trait: "li" },
      { letter: "C", text: "算了，吃点亏没什么。", trait: "rouruo" },
      { letter: "D", text: "不去计较，以后不买他的就是了。", trait: "wuwei" },
    ],
  },
  {
    id: 11,
    ageBand: "9-14",
    text: "村里为修桥的事争吵不休。",
    options: [
      { letter: "A", text: "一个个劝说，让大家以和为贵。", trait: "ren" },
      { letter: "B", text: "请长辈出来按规矩裁定。", trait: "li" },
      { letter: "C", text: "桥修在哪儿，得看水流和地势。", trait: "ziran" },
      { letter: "D", text: "吵不出结果就放一放，时机到了自然成。", trait: "wuwei" },
    ],
  },
  {
    id: 12,
    ageBand: "9-14",
    text: "古书里的一种制药法和现在用的不一样。",
    options: [
      { letter: "A", text: "如果能救人，就该想法子验证。", trait: "yi" },
      { letter: "B", text: "先反复试验，看哪种更合理。", trait: "zhi" },
      { letter: "C", text: "古法流传已久，未必不如新法。", trait: "rouruo" },
      { letter: "D", text: "现在的法子够用了，不必折腾。", trait: "zhizu" },
    ],
  },
  {
    id: 13,
    ageBand: "9-14",
    text: "师兄比武总能赢你。",
    options: [
      { letter: "A", text: "真心佩服，向他请教诀窍。", trait: "ren" },
      { letter: "B", text: "输也输得光明正大，下次凭实力来。", trait: "yi" },
      { letter: "C", text: "不硬拼，顺着他的力来化解。", trait: "rouruo" },
      { letter: "D", text: "胜负无所谓，我有自己的节奏。", trait: "ziran" },
    ],
  },
  {
    id: 14,
    ageBand: "9-14",
    text: "山上来了个行为古怪的隐士。",
    options: [
      { letter: "A", text: "以礼相待，奇人也不可轻慢。", trait: "li" },
      { letter: "B", text: "悄悄观察他，想明白他的用意。", trait: "zhi" },
      { letter: "C", text: "不打扰不议论，随他去。", trait: "wuwei" },
      { letter: "D", text: "世上的怪人多了，过好自己就行。", trait: "zhizu" },
    ],
  },
  {
    id: 15,
    ageBand: "9-14",
    text: "你撞见同门偷拿了别人的东西。",
    options: [
      { letter: "A", text: "劝他悄悄还回去，给他一次机会。", trait: "ren" },
      { letter: "B", text: "按门规回禀师父，但陪他一起去。", trait: "li" },
      { letter: "C", text: "这种事不能忍，必须马上揭发。", trait: "yi" },
      { letter: "D", text: "想个办法让他自己不得不还回去。", trait: "zhi" },
    ],
  },
  {
    id: 16,
    ageBand: "9-14",
    text: "师父出门了，让你暂管师弟，他们很贪玩。",
    options: [
      { letter: "A", text: "小孩贪玩是天性，任他们去。", trait: "ziran" },
      { letter: "B", text: "只定几条简单的规矩，照看就好。", trait: "wuwei" },
      { letter: "C", text: "自己先做好，轻声细语提醒他们。", trait: "rouruo" },
      { letter: "D", text: "他们玩累了自会回来，我先读自己的书。", trait: "zhizu" },
    ],
  },
  {
    id: 17,
    ageBand: "9-14",
    text: "隔壁村遭灾，师父问谁愿去帮忙。",
    options: [
      { letter: "A", text: "我去，只想帮帮受灾的乡亲。", trait: "ren" },
      { letter: "B", text: "我去，趁乱作恶的人得有人管。", trait: "yi" },
      { letter: "C", text: "先看看官府会不会有动作。", trait: "wuwei" },
      { letter: "D", text: "我力量有限，守好本村就不错了。", trait: "zhizu" },
    ],
  },
  {
    id: 18,
    ageBand: "9-14",
    text: "旧友找你借钱，但之前借的还没还。",
    options: [
      { letter: "A", text: "他肯定有难处，再借一些也无妨。", trait: "ren" },
      { letter: "B", text: "当面不提旧账，但心里记着，这次婉拒。", trait: "rouruo" },
      { letter: "C", text: "直言相告，旧账未清不便再借。", trait: "yi" },
      { letter: "D", text: "不借也不催，随他什么时候还。", trait: "wuwei" },
    ],
  },
  {
    id: 19,
    ageBand: "15-20",
    text: "好友邀你一起应考，但名额只剩一个。",
    options: [
      { letter: "A", text: "互相扶持，谁考上都为对方高兴。", trait: "ren" },
      { letter: "B", text: "按规矩公平竞争，各凭本事。", trait: "li" },
      { letter: "C", text: "如果他更需要，我可以退让。", trait: "yi" },
      { letter: "D", text: "分析考官喜好，各自准备最擅长的。", trait: "zhi" },
    ],
  },
  {
    id: 20,
    ageBand: "15-20",
    text: "饥荒年，你家有存粮，饥民围在山下。",
    options: [
      { letter: "A", text: "开仓放粮，顺应天理哺养饥民。", trait: "ziran" },
      { letter: "B", text: "闭门不理，人群自会散去。", trait: "wuwei" },
      { letter: "C", text: "每日在门口施一点粥，缓缓平息。", trait: "rouruo" },
      { letter: "D", text: "分出一半，自己留一半，够吃就行。", trait: "zhizu" },
    ],
  },
  {
    id: 21,
    ageBand: "15-20",
    text: "你与对立门派的女子互生情愫。",
    options: [
      { letter: "A", text: "真情相对，爱能化解门户之见。", trait: "ren" },
      { letter: "B", text: "禀明师长，明媒正娶才是正礼。", trait: "li" },
      { letter: "C", text: "随缘而行，不勉强求什么结果。", trait: "ziran" },
      { letter: "D", text: "斩断情丝，省却无尽烦恼。", trait: "wuwei" },
    ],
  },
  {
    id: 22,
    ageBand: "15-20",
    text: "有人出重金让你泄露师门消息。",
    options: [
      { letter: "A", text: "断然回绝，绝不做背义之事。", trait: "yi" },
      { letter: "B", text: "假装答应，反过来套取对方底细。", trait: "zhi" },
      { letter: "C", text: "推说自己人微言轻，什么都不知道。", trait: "rouruo" },
      { letter: "D", text: "师门平安我已知足，不贪不义之财。", trait: "zhizu" },
    ],
  },
  {
    id: 23,
    ageBand: "15-20",
    text: "邻居家的狗整夜叫个不停，吵得你睡不好。",
    options: [
      { letter: "A", text: "忍一忍，它可能只是不舒服，会安静下来的。", trait: "rouruo" },
      { letter: "B", text: "第二天带点吃的去邻居家，顺便提一下这事。", trait: "ren" },
      { letter: "C", text: "关紧门窗，蒙头睡觉，总会过去的。", trait: "zhizu" },
      { letter: "D", text: "狗叫是它的天性，不怪它也不怪邻居。", trait: "ziran" },
    ],
  },
  {
    id: 24,
    ageBand: "15-20",
    text: "父母希望你别远行，守在老家安稳度日。",
    options: [
      { letter: "A", text: "听父母的，留在老家尽孝。", trait: "li" },
      { letter: "B", text: "跟父母好好讲自己的想法，争取理解。", trait: "zhi" },
      { letter: "C", text: "暂且留下，以后再看缘分。", trait: "rouruo" },
      { letter: "D", text: "安心待在老家，一蔬一饭也有滋味。", trait: "zhizu" },
    ],
  },
  {
    id: 25,
    ageBand: "15-20",
    text: "你发现常去的小店多找了你钱。",
    options: [
      { letter: "A", text: "立刻退还，不是自己的不能拿。", trait: "yi" },
      { letter: "B", text: "退还时悄悄提醒店家，别声张让他难堪。", trait: "ren" },
      { letter: "C", text: "退回去，再多买点东西照顾他生意。", trait: "zhi" },
      { letter: "D", text: "多找就多找了，店家自有店家的缘法。", trait: "wuwei" },
    ],
  },
  {
    id: 26,
    ageBand: "21-25",
    text: "有势力请你出山当国师，左右朝政。",
    options: [
      { letter: "A", text: "顺应天道，朝政清明则出，昏暗则隐。", trait: "ziran" },
      { letter: "B", text: "婉言谢绝，隐居山林更合我心。", trait: "wuwei" },
      { letter: "C", text: "以卑微客卿身份入局，柔言进谏。", trait: "rouruo" },
      { letter: "D", text: "粗茶淡饭已乐在其中，权位如浮云。", trait: "zhizu" },
    ],
  },
  {
    id: 27,
    ageBand: "21-25",
    text: "年纪渐长，你开始想怎么过下半辈子。",
    options: [
      { letter: "A", text: "多陪家人，把日子过得和和美美。", trait: "ren" },
      { letter: "B", text: "规律作息，起居有常，守好生活节奏。", trait: "li" },
      { letter: "C", text: "找件一直想做的事，安安静静做下去。", trait: "zhizu" },
      { letter: "D", text: "不计划太多，日子怎么来就怎么过。", trait: "ziran" },
    ],
  },
  {
    id: 28,
    ageBand: "21-25",
    text: "你开了一间小私塾，有富户想多给束脩让自家孩子坐前排。",
    options: [
      { letter: "A", text: "按年龄排座最公平，束脩多少都一样。", trait: "li" },
      { letter: "B", text: "收下也无妨，富户愿多给是缘分，座位随意。", trait: "ziran" },
      { letter: "C", text: "推说已定好规矩，不便改动，婉拒多收。", trait: "rouruo" },
      { letter: "D", text: "学堂有吃有喝已足够，不多贪这点钱。", trait: "zhizu" },
    ],
  },
  {
    id: 29,
    ageBand: "21-25",
    text: "旧日同门来信说他在外惹了麻烦，求你出面周旋。",
    options: [
      { letter: "A", text: "念在同门情分，收拾行李就去帮他。", trait: "ren" },
      { letter: "B", text: "先问清来龙去脉，再定怎么帮。", trait: "zhi" },
      { letter: "C", text: "让他先自己顶一顶，时机到了再说。", trait: "wuwei" },
      { letter: "D", text: "回信劝他低个头认个错，息事宁人。", trait: "rouruo" },
    ],
  },
  {
    id: 30,
    ageBand: "21-25",
    text: "救万千百姓需耗尽你毕生功力。",
    options: [
      { letter: "A", text: "毫不迟疑，舍一人救万人。", trait: "ren" },
      { letter: "B", text: "这是以生命践行大义的极致。", trait: "yi" },
      { letter: "C", text: "天道损有余补不足，自当应天而为。", trait: "ziran" },
      { letter: "D", text: "天意若救，自有救星，顺其自然。", trait: "wuwei" },
    ],
  },
];
