(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function t(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=t(i);fetch(i.href,n)}})();const O=["ren","li","yi","zhi","ziran","wuwei","rouruo","zhizu"],M={ren:"仁",li:"礼",yi:"义",zhi:"智",ziran:"道法自然",wuwei:"无为而治",rouruo:"柔弱不争",zhizu:"知足常乐"},v={ren:"怀仁澈",li:"执礼珩",yi:"守义沧",zhi:"明玄智",wuwei:"澹无妄",ziran:"归道淳",rouruo:"栖柔辞",zhizu:"安止遥"},y={ren:"/仁.png",li:"/礼.png",yi:"/义.png",zhi:"/智.png",ziran:"/道法自然.png",wuwei:"/无为而治.png",rouruo:"/柔弱不争.png",zhizu:"/知足常乐.png"},q={ren:"ru",li:"ru",yi:"ru",zhi:"ru",ziran:"dao",wuwei:"dao",rouruo:"dao",zhizu:"dao"},m={ru:"儒",dao:"道"},z={"5-8":"童子","9-14":"青年","15-20":"青壮","21-25":"壮年"},L={"5-8":"/童子.png","9-14":"/青年.png","15-20":"/青壮.png","21-25":"/壮年.png"},G={"5-8":"/竹林.png","9-14":"/书房.png","15-20":"/后院.png","21-25":"/秋日.png"},H={"5-8":"1","9-14":"2","15-20":"3","21-25":"4"};function b(e,r){const s=`url("${G[r]}")`,i=H[r];document.body.classList.add("game-bg-active"),document.body.dataset.bgStage=i,document.body.style.setProperty("--game-bg",s),e.style.setProperty("--game-bg",s),e.dataset.bgStage=i}const p=[{id:1,ageBand:"5-8",text:"你捡到一只受伤的小鸟。",options:[{letter:"A",text:"小心照料，等它伤好放生。",trait:"ren"},{letter:"B",text:"先捧去问大人怎么处理。",trait:"li"},{letter:"C",text:"放回原处，大自然会照顾它。",trait:"ziran"},{letter:"D",text:"不用管，它自己会好起来。",trait:"wuwei"}]},{id:2,ageBand:"5-8",text:"邻居家的果子伸到墙外，看起来很甜。",options:[{letter:"A",text:"忍着不摘，那是别人的东西。",trait:"yi"},{letter:"B",text:"想个不被人发现的巧法子摘到。",trait:"zhi"},{letter:"C",text:"等果子熟了自己掉下来再捡。",trait:"ziran"},{letter:"D",text:"反正不是我的，懒得想它。",trait:"wuwei"}]},{id:3,ageBand:"5-8",text:"长辈给了你一块很好吃的点心。",options:[{letter:"A",text:"掰一半分给弟弟妹妹。",trait:"ren"},{letter:"B",text:"先给长辈行礼道谢再吃。",trait:"li"},{letter:"C",text:"让给更小的孩子，我让着他们。",trait:"rouruo"},{letter:"D",text:"尝一点就很开心，留着慢慢吃。",trait:"zhizu"}]},{id:4,ageBand:"5-8",text:"两个小伙伴抢玩具快要打起来了。",options:[{letter:"A",text:"提议玩个新游戏，一起开心。",trait:"ren"},{letter:"B",text:"建议他们轮流玩，一人一次。",trait:"li"},{letter:"C",text:"想个更好玩的玩法转移他们注意。",trait:"zhi"},{letter:"D",text:"抢来抢去没意思，我自己去别处玩。",trait:"zhizu"}]},{id:5,ageBand:"5-8",text:"师傅让你打扫院子，你觉得很枯燥。",options:[{letter:"A",text:"想到干净院子让大家舒服，就有劲了。",trait:"ren"},{letter:"B",text:"师傅吩咐的事，要认真做好。",trait:"li"},{letter:"C",text:"不勉强，扫多少算多少。",trait:"wuwei"},{letter:"D",text:"少扫点没关系，反正明天还会脏。",trait:"zhizu"}]},{id:6,ageBand:"5-8",text:"有人说你画的画很丑。",options:[{letter:"A",text:"不跟他计较，他可能心情不好。",trait:"rouruo"},{letter:"B",text:"问问他哪里不好，我下次改进。",trait:"zhi"},{letter:"C",text:"我自己觉得画得挺好，心里高兴。",trait:"zhizu"},{letter:"D",text:"万物各有各的样子，我的画也有它的美。",trait:"ziran"}]},{id:7,ageBand:"5-8",text:"你养的小动物死掉了，你很伤心。",options:[{letter:"A",text:"好好埋了它，谢谢它陪过我。",trait:"ren"},{letter:"B",text:"生死都是自然的事，不必太难过。",trait:"ziran"},{letter:"C",text:"哭也没用，平静接受。",trait:"rouruo"},{letter:"D",text:"再养一只就好，不用太放心上。",trait:"wuwei"}]},{id:8,ageBand:"5-8",text:"父亲让你从木剑和拂尘中选一样来学。",options:[{letter:"A",text:"选木剑，将来可以保护弱小。",trait:"yi"},{letter:"B",text:"选拂尘，轻柔的东西也能很厉害。",trait:"rouruo"},{letter:"C",text:"都不选，草木竹石都可以用。",trait:"ziran"},{letter:"D",text:"随便哪样都行，学什么都是机缘。",trait:"wuwei"}]},{id:9,ageBand:"9-14",text:"有同窗因为穿着破旧被取笑了。",options:[{letter:"A",text:"站出来替他说句公道话。",trait:"yi"},{letter:"B",text:"私下把自己的衣物借给他。",trait:"ren"},{letter:"C",text:"想个法子让取笑的人出个丑。",trait:"zhi"},{letter:"D",text:"安慰他：衣服干净就好，我也没新衣服。",trait:"zhizu"}]},{id:10,ageBand:"9-14",text:"集市上有人卖东西缺斤少两，被你发现。",options:[{letter:"A",text:"当面指出，不能让人吃亏。",trait:"yi"},{letter:"B",text:"按规矩去市署报官解决。",trait:"li"},{letter:"C",text:"算了，吃点亏没什么。",trait:"rouruo"},{letter:"D",text:"不去计较，以后不买他的就是了。",trait:"wuwei"}]},{id:11,ageBand:"9-14",text:"村里为修桥的事争吵不休。",options:[{letter:"A",text:"一个个劝说，让大家以和为贵。",trait:"ren"},{letter:"B",text:"请长辈出来按规矩裁定。",trait:"li"},{letter:"C",text:"桥修在哪儿，得看水流和地势。",trait:"ziran"},{letter:"D",text:"吵不出结果就放一放，时机到了自然成。",trait:"wuwei"}]},{id:12,ageBand:"9-14",text:"古书里的一种制药法和现在用的不一样。",options:[{letter:"A",text:"如果能救人，就该想法子验证。",trait:"yi"},{letter:"B",text:"先反复试验，看哪种更合理。",trait:"zhi"},{letter:"C",text:"古法流传已久，未必不如新法。",trait:"rouruo"},{letter:"D",text:"现在的法子够用了，不必折腾。",trait:"zhizu"}]},{id:13,ageBand:"9-14",text:"师兄比武总能赢你。",options:[{letter:"A",text:"真心佩服，向他请教诀窍。",trait:"ren"},{letter:"B",text:"输也输得光明正大，下次凭实力来。",trait:"yi"},{letter:"C",text:"不硬拼，顺着他的力来化解。",trait:"rouruo"},{letter:"D",text:"胜负无所谓，我有自己的节奏。",trait:"ziran"}]},{id:14,ageBand:"9-14",text:"山上来了个行为古怪的隐士。",options:[{letter:"A",text:"以礼相待，奇人也不可轻慢。",trait:"li"},{letter:"B",text:"悄悄观察他，想明白他的用意。",trait:"zhi"},{letter:"C",text:"不打扰不议论，随他去。",trait:"wuwei"},{letter:"D",text:"世上的怪人多了，过好自己就行。",trait:"zhizu"}]},{id:15,ageBand:"9-14",text:"你撞见同门偷拿了别人的东西。",options:[{letter:"A",text:"劝他悄悄还回去，给他一次机会。",trait:"ren"},{letter:"B",text:"按门规回禀师父，但陪他一起去。",trait:"li"},{letter:"C",text:"这种事不能忍，必须马上揭发。",trait:"yi"},{letter:"D",text:"想个办法让他自己不得不还回去。",trait:"zhi"}]},{id:16,ageBand:"9-14",text:"师父出门了，让你暂管师弟，他们很贪玩。",options:[{letter:"A",text:"小孩贪玩是天性，任他们去。",trait:"ziran"},{letter:"B",text:"只定几条简单的规矩，照看就好。",trait:"wuwei"},{letter:"C",text:"自己先做好，轻声细语提醒他们。",trait:"rouruo"},{letter:"D",text:"他们玩累了自会回来，我先读自己的书。",trait:"zhizu"}]},{id:17,ageBand:"9-14",text:"隔壁村遭灾，师父问谁愿去帮忙。",options:[{letter:"A",text:"我去，只想帮帮受灾的乡亲。",trait:"ren"},{letter:"B",text:"我去，趁乱作恶的人得有人管。",trait:"yi"},{letter:"C",text:"先看看官府会不会有动作。",trait:"wuwei"},{letter:"D",text:"我力量有限，守好本村就不错了。",trait:"zhizu"}]},{id:18,ageBand:"9-14",text:"旧友找你借钱，但之前借的还没还。",options:[{letter:"A",text:"他肯定有难处，再借一些也无妨。",trait:"ren"},{letter:"B",text:"当面不提旧账，但心里记着，这次婉拒。",trait:"rouruo"},{letter:"C",text:"直言相告，旧账未清不便再借。",trait:"yi"},{letter:"D",text:"不借也不催，随他什么时候还。",trait:"wuwei"}]},{id:19,ageBand:"15-20",text:"好友邀你一起应考，但名额只剩一个。",options:[{letter:"A",text:"互相扶持，谁考上都为对方高兴。",trait:"ren"},{letter:"B",text:"按规矩公平竞争，各凭本事。",trait:"li"},{letter:"C",text:"如果他更需要，我可以退让。",trait:"yi"},{letter:"D",text:"分析考官喜好，各自准备最擅长的。",trait:"zhi"}]},{id:20,ageBand:"15-20",text:"饥荒年，你家有存粮，饥民围在山下。",options:[{letter:"A",text:"开仓放粮，顺应天理哺养饥民。",trait:"ziran"},{letter:"B",text:"闭门不理，人群自会散去。",trait:"wuwei"},{letter:"C",text:"每日在门口施一点粥，缓缓平息。",trait:"rouruo"},{letter:"D",text:"分出一半，自己留一半，够吃就行。",trait:"zhizu"}]},{id:21,ageBand:"15-20",text:"你与对立门派的女子互生情愫。",options:[{letter:"A",text:"真情相对，爱能化解门户之见。",trait:"ren"},{letter:"B",text:"禀明师长，明媒正娶才是正礼。",trait:"li"},{letter:"C",text:"随缘而行，不勉强求什么结果。",trait:"ziran"},{letter:"D",text:"斩断情丝，省却无尽烦恼。",trait:"wuwei"}]},{id:22,ageBand:"15-20",text:"有人出重金让你泄露师门消息。",options:[{letter:"A",text:"断然回绝，绝不做背义之事。",trait:"yi"},{letter:"B",text:"假装答应，反过来套取对方底细。",trait:"zhi"},{letter:"C",text:"推说自己人微言轻，什么都不知道。",trait:"rouruo"},{letter:"D",text:"师门平安我已知足，不贪不义之财。",trait:"zhizu"}]},{id:23,ageBand:"15-20",text:"邻居家的狗整夜叫个不停，吵得你睡不好。",options:[{letter:"A",text:"忍一忍，它可能只是不舒服，会安静下来的。",trait:"rouruo"},{letter:"B",text:"第二天带点吃的去邻居家，顺便提一下这事。",trait:"ren"},{letter:"C",text:"关紧门窗，蒙头睡觉，总会过去的。",trait:"zhizu"},{letter:"D",text:"狗叫是它的天性，不怪它也不怪邻居。",trait:"ziran"}]},{id:24,ageBand:"15-20",text:"父母希望你别远行，守在老家安稳度日。",options:[{letter:"A",text:"听父母的，留在老家尽孝。",trait:"li"},{letter:"B",text:"跟父母好好讲自己的想法，争取理解。",trait:"zhi"},{letter:"C",text:"暂且留下，以后再看缘分。",trait:"rouruo"},{letter:"D",text:"安心待在老家，一蔬一饭也有滋味。",trait:"zhizu"}]},{id:25,ageBand:"15-20",text:"你发现常去的小店多找了你钱。",options:[{letter:"A",text:"立刻退还，不是自己的不能拿。",trait:"yi"},{letter:"B",text:"退还时悄悄提醒店家，别声张让他难堪。",trait:"ren"},{letter:"C",text:"退回去，再多买点东西照顾他生意。",trait:"zhi"},{letter:"D",text:"多找就多找了，店家自有店家的缘法。",trait:"wuwei"}]},{id:26,ageBand:"21-25",text:"有势力请你出山当国师，左右朝政。",options:[{letter:"A",text:"顺应天道，朝政清明则出，昏暗则隐。",trait:"ziran"},{letter:"B",text:"婉言谢绝，隐居山林更合我心。",trait:"wuwei"},{letter:"C",text:"以卑微客卿身份入局，柔言进谏。",trait:"rouruo"},{letter:"D",text:"粗茶淡饭已乐在其中，权位如浮云。",trait:"zhizu"}]},{id:27,ageBand:"21-25",text:"年纪渐长，你开始想怎么过下半辈子。",options:[{letter:"A",text:"多陪家人，把日子过得和和美美。",trait:"ren"},{letter:"B",text:"规律作息，起居有常，守好生活节奏。",trait:"li"},{letter:"C",text:"找件一直想做的事，安安静静做下去。",trait:"zhizu"},{letter:"D",text:"不计划太多，日子怎么来就怎么过。",trait:"ziran"}]},{id:28,ageBand:"21-25",text:"你开了一间小私塾，有富户想多给束脩让自家孩子坐前排。",options:[{letter:"A",text:"按年龄排座最公平，束脩多少都一样。",trait:"li"},{letter:"B",text:"收下也无妨，富户愿多给是缘分，座位随意。",trait:"ziran"},{letter:"C",text:"推说已定好规矩，不便改动，婉拒多收。",trait:"rouruo"},{letter:"D",text:"学堂有吃有喝已足够，不多贪这点钱。",trait:"zhizu"}]},{id:29,ageBand:"21-25",text:"旧日同门来信说他在外惹了麻烦，求你出面周旋。",options:[{letter:"A",text:"念在同门情分，收拾行李就去帮他。",trait:"ren"},{letter:"B",text:"先问清来龙去脉，再定怎么帮。",trait:"zhi"},{letter:"C",text:"让他先自己顶一顶，时机到了再说。",trait:"wuwei"},{letter:"D",text:"回信劝他低个头认个错，息事宁人。",trait:"rouruo"}]},{id:30,ageBand:"21-25",text:"救万千百姓需耗尽你毕生功力。",options:[{letter:"A",text:"毫不迟疑，舍一人救万人。",trait:"ren"},{letter:"B",text:"这是以生命践行大义的极致。",trait:"yi"},{letter:"C",text:"天道损有余补不足，自当应天而为。",trait:"ziran"},{letter:"D",text:"天意若救，自有救星，顺其自然。",trait:"wuwei"}]}],S=60,B=100,N=10,R=3,C=10;function E(){return{questionIndex:0,traits:Object.fromEntries(O.map(r=>[r,0])),cultivation:N,schoolGuessWrong:0}}function P(e,r){e.traits[r]+=1}function W(e,r){e.cultivation=Math.max(0,Math.min(B,e.cultivation+r))}function F(e,r){e.innerHTML="";const t=document.createElement("section");t.className="stage",t.innerHTML=`
    <h1 class="title-cn hero">儒道</h1>
    <div class="subtitle">修 炼 模 拟 器</div>
    <div class="divider"></div>
    <div class="menu">
      <p class="blurb">
        山门既开，少年初登。<br />
        自五岁童子，至二十五岁壮年，<br />
        一路三十次抉择，皆需自心而出。<br />
        每选定一答之后，须再辨此念更贴近「儒」还是「道」，并阅其义理解说。<br />
        辨识正确则修炼指数见长；错了不增分，失手十次则无缘入室，只得俗世凡骨。<br />
        若辨识尚可而修炼指数终究未达六十，亦同落凡骨。
      </p>
      <button class="primary" id="start-btn">入 山</button>
      <p class="age-meta">操作提示：题目与儒道二钮皆以鼠标点击</p>
    </div>
  `,e.appendChild(t),t.querySelector("#start-btn").addEventListener("click",r)}const U=6,A=100;function j(e,r,t,s){b(e,t),e.innerHTML="";const i=document.createElement("div");i.className="stage phase-overlay stage--game",i.innerHTML=`
    <div class="phase-inner">
      <p class="phase-kicker">阶段更迭</p>
      <p class="phase-sub">${z[r]} · ${r} 岁 → ${z[t]} · ${t} 岁</p>
      <div class="phase-portrait-wrap" id="phase-portrait-wrap">
        <img id="phase-img" src="${L[r]}" alt="${z[r]}" />
      </div>
      <p class="phase-hint">快速按 <span class="kbd">Space</span> 助力弟子成长</p>
      <div class="growth-track">
        <div class="growth-fill" id="growth-fill" style="width:0%"></div>
      </div>
      <p class="phase-progress-label" id="growth-label">成长契机 0 / ${A}</p>
    </div>
  `,e.appendChild(i);let n=0,d=!1;const g=i.querySelector("#growth-fill"),a=i.querySelector("#growth-label"),c=i.querySelector("#phase-img"),l=i.querySelector("#phase-portrait-wrap"),u=()=>{d||(d=!0,window.removeEventListener("keydown",o),c.src=L[t],c.alt=z[t],l.classList.add("phase-portrait-morph"),i.querySelector(".phase-hint").textContent="新貌初成 — 弟子归位",i.querySelector(".phase-sub").textContent=`${z[t]} · ${t} 岁`,a.textContent=`成长契机 ${A} / ${A}`,window.setTimeout(()=>{l.classList.add("phase-portrait-return"),i.classList.add("phase-leaving"),window.setTimeout(()=>{s()},520)},720))},o=h=>{h.code!=="Space"||d||(h.preventDefault(),n=Math.min(A,n+U),g.style.width=`${n}%`,a.textContent=`成长契机 ${n} / ${A}`,n>=A&&u())};window.addEventListener("keydown",o)}const K={1:{A:"仁：儒家「仁」者爱人及物，以恻隐之心主动关怀、救助弱小。",B:"礼：儒家「礼」重长幼之序，遇事请教大人，是对秩序和尊长的敬重。",C:"道法自然：道家崇尚顺应自然法则，不加干预，让自然自行处理。",D:"无为而治：道家「无为」主张不妄为、不强求，任其自愈。"},2:{A:"义：儒家「义」要求行为合宜，不取非分之物，克制私欲。",B:"智：儒家「智」强调运用心计谋略，此处以巧法达到目的。",C:"道法自然：道家顺其自然，等瓜熟蒂落，不强行摘取。",D:"无为而治：道家无为，不起心动念，无心于外物。"},3:{A:"仁：儒家「仁」的推己及人，主动分享，体现亲亲之爱。",B:"礼：儒家「礼」重敬长，先行礼道谢再享用，合于礼节。",C:"柔弱不争：道家尚柔、不争，主动退让给更幼者，体现「不敢为天下先」。",D:"知足常乐：道家「知足」知止，不贪多，满足于一点点便心生欢喜。"},4:{A:"仁：儒家仁爱，以和合之心主动提议共乐，化解冲突。",B:"礼：儒家以礼规范行为，建议轮流行止，建立秩序。",C:"智：儒家「智」以权变转移注意，用巧思避免争斗。",D:"知足常乐：道家知足，不与人争，退而独享清净之乐。"},5:{A:"仁：儒家仁心推己，念及他人舒适而生动力，是「己欲立而立人」。",B:"礼：儒家「礼」主敬，师傅吩咐便认真对待，体现尊师重道。",C:"无为而治：道家无为，不勉强自己，随性而为，扫多少算多少。",D:"知足常乐：道家知足，降低标准，觉得少扫些也无妨，安于现状。"},6:{A:"柔弱不争：道家守柔不争，不与人计较，以善意理解他人。",B:"智：儒家「智」重好学自省，请教改进，是求知之明。",C:"知足常乐：道家知足于己，自得其乐，不因外毁誉而动摇。",D:"道法自然：道家认为万物各有其性，我的画自具自然本真之美。"},7:{A:"仁：儒家「仁」心感通生命，葬之以礼，感恩陪伴，是仁爱之情。",B:"道法自然：道家视生死为自然大化，不必执着哀伤。",C:"柔弱不争：道家柔弱处下，不抗争情感，平静接受不可逆之事。",D:"无为而治：道家无为，换一只便好，不陷溺于旧情，随遇而安。"},8:{A:"义：儒家「义」在担当，选剑以护弱小，是行义之举。",B:"柔弱不争：道家贵柔，拂尘轻柔却能制胜，守柔曰强。",C:"道法自然：道家不拘一器，万物皆可为用，合于自然无执。",D:"无为而治：道家无为随缘，选什么都是机缘，心无分别。"},9:{A:"义：儒家「义」之公正，挺身而出说公道话，是义所当为。",B:"仁：儒家仁爱，私借衣物，是恻隐之心施于具体的关怀。",C:"智：儒家「智」用机变，设计让取笑者出丑以制衡。",D:"知足常乐：道家安于己有，安慰同窗不以贫衣为意，知足自安。"},10:{A:"义：儒家尚义，当面持正纠过，维护公道。",B:"礼：儒家重礼法，按程序报官，守规矩解决。",C:"柔弱不争：道家不争，宁可吃点亏，以退让息事。",D:"无为而治：道家无为，不加干涉，以后不去买便是。"},11:{A:"仁：儒家仁者以和合为贵，耐心劝和，是仁爱宽厚。",B:"礼：儒家重礼制，请长辈依规矩裁定，恢复秩序。",C:"道法自然：道家依顺自然，修桥当顺水势地势，不凭人意争执。",D:"无为而治：道家无为，放下争执，待时机成熟自然成事。"},12:{A:"义：儒家义之所在，若能救人便当验证，勇于担当。",B:"智：儒家「智」强调格物试验，以求真是，是明智之举。",C:"柔弱不争：道家守柔不争，古法不逊今法，谦退含容。",D:"知足常乐：道家知足，认为现有法子已够，不必更求。"},13:{A:"仁：儒家仁心向善，真心向人求教，见贤思齐。",B:"义：儒家义重正直，输赢光明，凭实力再战，是义行。",C:"柔弱不争：道家以柔克刚，不硬抗而顺势化解，守柔不争。",D:"道法自然：道家顺应自我节奏，不争胜负，合乎自然之道。"},14:{A:"礼：儒家待人接物以礼，不论对方奇邪，礼不可废。",B:"智：儒家用智明察，暗中观察以求理解，是格物致知。",C:"无为而治：道家无为，不扰不议，任其自在。",D:"知足常乐：道家知足于己，不求甚解奇人，过好自身即可。"},15:{A:"仁：儒家仁恕，给人自新之机，暗中劝其归还。",B:"礼：儒家守礼法，禀告师父，又陪同门前往以全情义，礼义兼备。",C:"义：儒家重义，对此事不容忍，必须秉正揭发。",D:"智：儒家用智谋，设计使其不得不归还，是权变之智。"},16:{A:"道法自然：道家顺自然天性，任孩童自在，不强行约束。",B:"无为而治：道家无为而治，仅立简单规矩，不多干预。",C:"柔弱不争：道家以柔示人，自己行不言之教，轻声提醒而不争。",D:"知足常乐：道家知足，任由他们，我只守己读书，安然自乐。"},17:{A:"仁：儒家仁者爱人，纯粹想帮受灾乡亲，恻隐不忍。",B:"义：儒家行义，去管治趁乱作恶之人，是义不容辞。",C:"无为而治：道家无为，先观官府举动，不急于有为。",D:"知足常乐：道家知足，量力守本，不求多事。"},18:{A:"仁：儒家仁爱宽厚，体谅其难，不计前事再借。",B:"柔弱不争：道家不争，当面不提旧账以免冲突，但内心有守，柔退婉拒。",C:"义：儒家直言持义，旧债未清不宜再借，是正直之道。",D:"无为而治：道家无为，不借不催，随他去，不挂于心。"},19:{A:"仁：儒家仁者视友如己，互相成全，为对方高兴，是爱人如己。",B:"礼：儒家尚礼制规矩，公平竞争，各凭本事，守正不偏。",C:"义：儒家义有取舍，若对方更需要，退让成全，是义举。",D:"智：儒家用智，分析情势各展所长，是审时度势之明。"},20:{A:"道法自然：道家效法天道「损有余补不足」，开仓济民顺应天理。",B:"无为而治：道家无为，闭门不理，认为人群自会散去，不加施为。",C:"柔弱不争：道家以柔克刚，每日施粥缓缓化解，不激烈冲突。",D:"知足常乐：道家知足，分出一半留一半，够吃即安，不贪多也不全舍。"},21:{A:"仁：儒家仁爱真情，相信爱能超越门户之见，感通人心。",B:"礼：儒家重礼法名分，禀明师长、明媒正娶，合于正礼。",C:"道法自然：道家随缘而行，不勉强求结果，任感情自然流转。",D:"无为而治：道家无为，斩断情丝以省烦恼，是「为道日损」之举。"},22:{A:"义：儒家重义，绝不做背弃信义之事，断然拒绝。",B:"智：儒家以智周旋，假意应允反套对方，是用智自全。",C:"柔弱不争：道家守柔不争，托辞人微言轻，不与外诱相抗。",D:"知足常乐：道家知足于师门平安，不贪非分之财，心常安乐。"},23:{A:"柔弱不争：道家忍耐退让，不与之争，相信会自行安静。",B:"仁：儒家仁心推己，带食物婉转提醒，既关心又不失礼。",C:"知足常乐：道家知足，关窗蒙头强忍，安于现状求己宁静。",D:"道法自然：道家视犬吠为其天性，顺应自然，不怪人怪犬。"},24:{A:"礼：儒家重孝道和礼制，听从父母，守在老家尽孝。",B:"智：儒家用理智沟通，陈情说理争取理解，是通权达变。",C:"柔弱不争：道家守柔，暂且顺从，以后随缘再看，不与父母争。",D:"知足常乐：道家知足，安于老家清淡生活，享受日常滋味。"},25:{A:"义：儒家重义利之辨，不取不义之财，立即退还。",B:"仁：儒家仁爱，体贴店家，悄悄提醒免其难堪，是仁厚。",C:"智：儒家用智，退还后多买以惠店家，是两全之智。",D:"无为而治：道家无为，随缘看待，店家自有其缘法，不强作善。"},26:{A:"道法自然：道家审时度势，顺应天道，朝政清明则出，昏暗则隐。",B:"无为而治：道家无为，婉拒归隐，合于「道隐无名」之志。",C:"柔弱不争：道家以柔入世，卑微居客卿，柔言进谏，不争权位。",D:"知足常乐：道家知足于粗茶淡饭，视权位为浮云，自足常乐。"},27:{A:"仁：儒家仁爱以亲亲为本，多陪家人，营建和睦，是仁道家常。",B:"礼：儒家重礼法秩序，起居有常、守好节奏，是修身之礼。",C:"知足常乐：道家知足，择一事安静做下去，不贪多，自得其乐。",D:"道法自然：道家不预设不妄划，日子怎么来就怎么过，随顺自然。"},28:{A:"礼：儒家重礼制规范，按年龄排座最公平，束脩不坏规矩。",B:"道法自然：道家随缘，富户多给是自然缘法，座位不必强定。",C:"柔弱不争：道家守柔，婉言推托，不与人冲突，守定已有规矩。",D:"知足常乐：道家知足，认为学堂用度已够，不贪多财。"},29:{A:"仁：儒家仁爱念旧，急人之难，立即仗义相助。",B:"智：儒家智审，先了解情由再定，是明辨之智。",C:"无为而治：道家无为，让他先顶一顶，时机到了再说，不急于动。",D:"柔弱不争：道家守柔不争，劝其低头认错息事，以柔退化解。"},30:{A:"仁：儒家仁之极，杀身成仁，舍一人以救万人，仁爱之至。",B:"义：儒家义之至高，以生命践行大义，舍生而取义。",C:"道法自然：道家观天道「损有余补不足」，当应天而为，献身合道。",D:"无为而治：道家无为，顺天意自然，认为天若救则自有救星，不必强为。"}};function Q(e,r,t,s,i,n){const d=q[s],g=K[r.id][t];return e.innerHTML=`
    <div class="school-guess">
      <p class="school-guess-prompt">你所选 ${t}，更贴近哪一家思想？</p>
      <div class="school-guess-actions">
        <button type="button" class="school-btn school-btn--ru" data-school="ru">儒</button>
        <button type="button" class="school-btn school-btn--dao" data-school="dao">道</button>
      </div>
    </div>
  `,new Promise(a=>{const c=e.querySelector(".school-guess"),l=e.querySelectorAll(".school-btn"),u=o=>{const h=o===d;h?W(i,R):i.schoolGuessWrong+=1,n();const D=m[d],_=m[o];c.innerHTML=`
        <div class="school-result">
          <h3 class="school-result-title ${h?"is-correct":"is-wrong"}">${h?"辨识正确":"辨识有误"}</h3>
          <p class="school-result-meta">正解为「${D}家」 · 你选「${_}家」</p>
          <p class="school-result-explain">${g}</p>
          <button type="button" class="primary school-continue">继 续</button>
        </div>
      `,c.querySelector(".school-continue").addEventListener("click",()=>a())};l.forEach(o=>{o.addEventListener("click",()=>{const h=o.dataset.school;l.forEach(D=>{D.disabled=!0}),u(h)})})})}function X(e,r){const{state:t,onFinish:s}=r;let i=!1;const n=()=>{if(t.questionIndex>=p.length){s();return}const a=p[t.questionIndex];e.innerHTML="";const c=document.createElement("section");c.className="stage stage--game",c.innerHTML=`
      ${V(t)}
      <div class="quiz">
        <aside class="portrait-card">
          <div class="portrait-frame">
            <img src="${L[a.ageBand]}" alt="${z[a.ageBand]}" />
          </div>
          <div class="age-band">${z[a.ageBand]}</div>
          <div class="age-meta">${a.ageBand} 岁</div>
        </aside>
        <div class="question-area">
          <div class="q-meta">
            <span>第 ${a.id} 问 / 共 ${p.length}</span>
            <span>修炼指数 ${Math.round(t.cultivation)} / ${B}</span>
          </div>
          <div class="q-text">${a.text}</div>
          <div class="options" id="options"></div>
        </div>
      </div>
    `,e.appendChild(c),b(e,a.ageBand),i||(i=!0,e.offsetHeight,requestAnimationFrame(()=>{requestAnimationFrame(()=>{e.classList.add("app--fade-in-ready")})}));const l=c.querySelector("#options");for(const u of a.options){const o=document.createElement("button");o.className="option",o.innerHTML=`
        <span class="letter">${u.letter}</span>
        <span>${u.text}</span>
      `,o.addEventListener("click",()=>{for(const h of l.querySelectorAll("button"))h.disabled=!0;d(a,u.letter,u.trait,c)}),l.appendChild(o)}},d=(a,c,l,u)=>{P(t,l),t.questionIndex+=1;const o=u.querySelector(".question-area");o.innerHTML="",$(u,t),Q(o,a,c,l,t,()=>$(u,t)).then(()=>{$(u,t),window.setTimeout(g,700)})},g=()=>{if(t.questionIndex>=p.length){s();return}const a=t.questionIndex;if(b(e,p[a].ageBand),a>0&&p[a-1].ageBand!==p[a].ageBand){j(e,p[a-1].ageBand,p[a].ageBand,n);return}n()};g()}function V(e){const r=e.cultivation/B*100,t=Array.from({length:p.length},()=>"<span></span>").join("");return`
    <div class="cult-progress">
      <div class="labels">
        <span>修 炼 指 数</span>
        <span id="prog-text">${Math.round(e.cultivation)} / ${B}</span>
      </div>
      <div class="track">
        <div class="fill" id="prog-fill" style="width:${r}%"></div>
        <div class="ticks">${t}</div>
      </div>
    </div>
  `}function $(e,r){const t=e.querySelector("#prog-fill"),s=e.querySelector("#prog-text");t&&(t.style.width=`${r.cultivation/B*100}%`),s&&(s.textContent=`${Math.round(r.cultivation)} / ${B}`)}const Y={ren:{archetype:"仁｜仁德悲悯型",exclusiveTitle:"怀仁君子",keywords:"温柔、共情、向善、包容",personality:"你是天生的善意承载者，内心常怀悲悯之心，待人宽厚包容，习惯性换位思考，不忍心伤害任何人。骨子里信奉「爱人」为立身之本，愿意体谅他人难处，乐于帮扶弱小，不喜欢争执对立。",lifestyle:"行事以善意为先，不争输赢、不记人过，待人真诚心软，自带温润的亲和力，是身边人天然的心灵依靠。",strengths:"共情力极强、心地纯良、格局宽厚、重情重义，自带治愈感。",weaknesses:"容易过度心软迁就他人，不懂拒绝，常因顾及别人委屈自己。"},li:{archetype:"礼｜守礼端方型",exclusiveTitle:"执礼雅士",keywords:"规矩、分寸、克制、雅致",personality:"你将分寸与教养刻进骨子里，信奉以礼立身，做事有准则、待人有分寸，懂得尊卑次序、进退有度。为人端正自持，注重言行举止，厌恶轻浮无矩的行事方式，自带儒雅端庄的气质。",lifestyle:"待人谦和有礼，做事恪守底线与规则，懂得看人脸色、懂人情世故，从不越界、不逾规矩。",strengths:"情商高、懂分寸、自律克制、举止得体，靠谱且有涵养。",weaknesses:"有时过于拘泥规矩，略显刻板，不懂变通，容易被世俗礼数束缚自我。"},yi:{archetype:"义｜侠肝守义型",exclusiveTitle:"守义侠者",keywords:"耿直、担当、傲骨、重义",personality:"你信奉立身以义为先，骨子里有天生的正义感，是非分明、黑白清晰，看不惯不公与虚伪。重情重义，把情义看得比利益更重，答应的事必定全力以赴，愿意为朋友挺身而出。",lifestyle:"行事光明磊落，不耍心机、不玩城府，遇事敢于担当，宁直不弯，自带江湖侠义之气。",strengths:"正直坦荡、有责任感、重情守信、有风骨有底线。",weaknesses:"性子过于耿直，不懂圆滑，容易直言得罪人，不擅长迂回处世。"},zhi:{archetype:"智｜明思洞见型",exclusiveTitle:"洞智哲人",keywords:"通透、理性、思辨、远见",personality:"你是天生的思辨者，心思缜密、善于洞察，遇事不冲动，习惯冷静思考、看透本质。信奉以智明事，不盲从跟风，有独立的判断力与独到见解，喜欢深度思考事物规律与人性逻辑。",lifestyle:"遇事沉着冷静，善于权衡利弊，看人看事通透清醒，不被情绪左右，凡事谋定而后动。",strengths:"头脑清醒、洞察力强、理性沉稳、有远见、善于复盘规划。",weaknesses:"容易想太多、思虑过重，偶尔显得疏离冷淡，不擅长感性共情。"},wuwei:{archetype:"无为而治｜澹然统领型",exclusiveTitle:"澹无治者",keywords:"从容、放权、通透、格局",personality:"你深谙「不多干预、顺势而为」的智慧，内心沉稳大气，不喜欢事事掌控、强行强求。懂得知人善任、顺势成事，不纠结细枝末节，抓核心、放琐碎，相信万事自有节奏。",lifestyle:"待人处事松弛有度，不强求、不管控，懂得给他人留白，擅长凝聚人心、以静制动，自带领导者格局。",strengths:"心态从容、格局宏大、懂识人懂放权、情绪稳定、不内耗。",weaknesses:"有时过于佛系放任，容易疏于细节，让人觉得不够主动上心。"},ziran:{archetype:"道法自然｜归真随性型",exclusiveTitle:"归真隐者",keywords:"随性、本真、洒脱、顺天性",personality:"你崇尚顺应本心、遵从自然，厌恶世俗套路、虚伪伪装。不愿被世俗标准、旁人期待捆绑，只想活成最真实的自己，万事顺其自然，不强求、不刻意，随心而行。",lifestyle:"活得通透洒脱，不迎合、不讨好，喜欢遵从自己的天性选择生活，偏爱简单纯粹的人际关系与生活方式。",strengths:"真实随性、灵魂自由、不世俗不功利、心态松弛自在。",weaknesses:"容易过于我行我素，忽略世俗规则，偶尔显得不合群、特立独行。"},rouruo:{archetype:"柔弱不争｜谦柔守拙型",exclusiveTitle:"栖柔行者",keywords:"谦和、低调、隐忍、藏锋",personality:"你信奉以柔克刚，天性谦和低调，不与人争抢名利、不逞强好胜。懂得收敛锋芒、守拙自持，看似温和柔软，实则内心有定力，不愿卷入纷争是非，以退让换安稳。",lifestyle:"待人温顺谦和，遇事懂得退让包容，不逞口舌之快，低调内敛，不喜出风头。",strengths:"性格温和、心态平和、懂得隐忍、人缘和睦、不惹是非。",weaknesses:"习惯退让妥协，容易委屈自身利益，不懂主动争取属于自己的机会。"},zhizu:{archetype:"知足常乐｜安乐闲心型",exclusiveTitle:"安乐闲人",keywords:"安然、淡泊、极简、乐天",personality:"你拥有最难得的平常心，不贪慕浮华、不攀比虚荣，懂得珍惜当下所拥有的一切。欲望简单、心态淡泊，不追名逐利，容易在平凡生活里找到幸福感，永远保持乐观安然。",lifestyle:"生活极简随性，不争名利、不焦虑内耗，安于当下、乐享平凡，心态永远平和松弛。",strengths:"内心富足、乐观豁达、极少内耗、容易满足、幸福感极强。",weaknesses:"进取心稍弱，容易安于现状，缺乏突破舒适圈的动力。"}},J=2e3,Z=520;function tt(e,r){const t=m[r],s=document.createElement("div");return s.className=`school-reveal-overlay school-reveal-overlay--${r}`,s.setAttribute("role","img"),s.setAttribute("aria-label",`${t}家揭晓`),s.innerHTML=`
    <div class="school-reveal-vignette" aria-hidden="true"></div>
    <div class="school-reveal-burst-wrap" aria-hidden="true">
      <div class="school-reveal-burst"></div>
    </div>
    <div class="school-reveal-shards" aria-hidden="true"></div>
    <div class="school-reveal-inner">
      <span class="school-reveal-char">${t}</span>
    </div>
  `,e.appendChild(s),new Promise(i=>{s.offsetHeight,requestAnimationFrame(()=>{s.classList.add("school-reveal-overlay--visible")}),window.setTimeout(()=>{s.classList.add("school-reveal-overlay--exiting"),window.setTimeout(()=>{s.remove(),i()},Z)},J)})}async function et(e,r,t,s){e.innerHTML="",b(e,"21-25"),e.classList.add("app--in-game","app--fade-in-ready"),t.key!=="fanGu"&&t.school!=="none"&&await tt(e,t.school);const i=document.createElement("section"),n=t.key!=="fanGu";i.className=n?"stage stage--game result result--disciple result--disciple-page":"stage stage--game result";const d=Math.round(r.cultivation),g=t.key==="fanGu"?`<p class="age-meta">${it(r)}</p>`:"";let a;if(n){const c=t.key,l=Y[c];a=`
      <div class="result-hero">
        <div class="result-portrait-center">
          <img src="${t.portrait}" alt="${l.exclusiveTitle}" class="result-portrait-img" />
        </div>
        <h1 class="name result-outcome-head">结果：${l.archetype}</h1>
        <div class="seal">${t.subtitle}</div>
        <dl class="result-meta-dl">
          <div class="result-meta-row">
            <dt>专属称号</dt>
            <dd>${l.exclusiveTitle}</dd>
          </div>
          <div class="result-meta-row">
            <dt>核心关键词</dt>
            <dd>${l.keywords}</dd>
          </div>
        </dl>
      </div>
      <div class="divider"></div>
      <p class="verse">${t.verse}</p>
      <div class="result-body-blocks">
        <section class="result-block">
          <h2 class="result-block-h">人格解读</h2>
          <p class="result-block-p">${l.personality}</p>
        </section>
        <section class="result-block">
          <h2 class="result-block-h">处世风格</h2>
          <p class="result-block-p">${l.lifestyle}</p>
        </section>
        <section class="result-block">
          <h2 class="result-block-h">人格优势</h2>
          <p class="result-block-p">${l.strengths}</p>
        </section>
        <section class="result-block">
          <h2 class="result-block-h">小小短板</h2>
          <p class="result-block-p">${l.weaknesses}</p>
        </section>
      </div>
    `}else a=`
      <div class="seal">${t.subtitle}</div>
      <h1 class="name">${t.title}</h1>
      <div class="divider"></div>
      <div class="portrait-frame result-portrait-fangu">
        <img src="${t.portrait}" alt="${t.title}" />
      </div>
      <p class="verse">${t.verse}</p>
      <p class="desc">${t.description}</p>
      ${g}
    `;i.innerHTML=`
    ${a}
    <p class="age-meta">最终修炼指数 ${d} / ${B} · 儒道辨识失手 ${r.schoolGuessWrong} / ${C}</p>
    <div class="actions">
      <button class="primary" id="restart-btn">再 入 山 门</button>
    </div>
  `,e.appendChild(i),i.querySelector("#restart-btn").addEventListener("click",s)}function it(e){return e.schoolGuessWrong>=C?`儒道辨识失手已满 ${C} 次，心镜蒙尘，只得归于俗世凡骨。`:e.cultivation<S?`修炼指数未达 ${S}，火候不足以承门户。`:""}function w(e){const r=q[e];return`${m[r]}门 · ${M[e]}`}const T={ren:{key:"ren",school:"ru",title:v.ren,subtitle:w("ren"),verse:"「仁者爱人，己欲立而立人，己欲达而达人。」",description:"你心中常怀恻隐，遇人受苦不忍冷眼。山中修炼多年，所证不在术法之高，而在一颗悲悯不竭的心。日后你将以行医、济贫、化解纷争为事，使所到之处人心稍暖、戾气稍消。儒门以仁为根，你便是那一抹随处生长的春意。",portrait:y.ren},li:{key:"li",school:"ru",title:v.li,subtitle:w("li"),verse:"「不学礼，无以立。」",description:"你举止有度，言行有节，知进退而明长幼。修炼之中，你不求奇遇，只求每一步皆合于法度。世人喧嚣躁动时，正是有你这般人立起规矩、撑起秩序，使家有家声、国有国体。你并不喧哗，却是世间最稳的那根梁柱。",portrait:y.li},yi:{key:"yi",school:"ru",title:v.yi,subtitle:w("yi"),verse:"「见义不为，无勇也。」",description:"你眼中容不得不公，心中过不去亏欠。该出手时绝不退缩，纵刀剑加身亦不肯弯腰。这一身正气虽常令你独行寒夜，却也常使弱者得以挺直腰板。修炼对你而言不是避世，而是养出一柄足够锋利、又始终干净的剑。",portrait:y.yi},zhi:{key:"zhi",school:"ru",title:v.zhi,subtitle:w("zhi"),verse:"「知者不惑。」",description:"你善观察、勤思辨，不轻信亦不轻断。同门遇困局，常先来与你商议。你将所学一一推演验证，既不囿于古法，也不轻弃旧章。儒门以智为目，凡你立足之处，迷雾退散，路自会显出来。",portrait:y.zhi},ziran:{key:"ziran",school:"dao",title:v.ziran,subtitle:w("ziran"),verse:"「人法地，地法天，天法道，道法自然。」",description:"你看花开花落、潮起潮平，皆觉其中自有大律，不必勉强。修炼对你而言不是逆天改命，而是体察天地节奏，让自身随之起落。你并非懒散无为，而是知道何时当行、何时当止。山川草木皆是你的师父，云霞星月皆是你的功课。",portrait:y.ziran},wuwei:{key:"wuwei",school:"dao",title:v.wuwei,subtitle:w("wuwei"),verse:"「我无为而民自化，我好静而民自正。」",description:"你不喜插手，不爱裁断，相信很多事情放一放、晾一晾，反倒自有归宿。这并非冷漠，而是一种深远的信任：信任时间，信任自然，信任人各有各的路要走。世人忙忙碌碌处，你拈花一笑，反而能看清局势的根。",portrait:y.wuwei},rouruo:{key:"rouruo",school:"dao",title:v.rouruo,subtitle:w("rouruo"),verse:"「上善若水，水善利万物而不争。」",description:"你说话轻、动作慢，却往往是最后能笑出来的那个人。你深信刚强易折、柔弱长存，世间的胜负不在一时，遇事先避其锋、再化其势。你的修炼像水一样，没有形状，却能磨穿顽石、滋养众生。",portrait:y.rouruo},zhizu:{key:"zhizu",school:"dao",title:v.zhizu,subtitle:w("zhizu"),verse:"「知足者富。」",description:"你心中有一杆秤，知道什么是「够」。一蔬一饭、一茶一书，皆能让你欢喜半日。世人追逐功名权位，你却看出那是另一种锁。你的修炼并不轰烈，却最难得：在喧嚣的世道里，长久地、安稳地，把日子过成自己的样子。",portrait:y.zhizu},fanGu:{key:"fanGu",school:"none",title:"俗世凡骨",subtitle:"尘缘未了",verse:"「机缘未至，火候未到。」",description:"你并非心地不善、亦非智识不足，只是在这一程修炼里，火候未及、心神未定：丹田难聚真气。山中云雾依旧，你却仍要回到红尘中，做一个寻常人。修炼非一世之功，凡骨亦能照见星月——下次再上山时，不必焦急，慢慢来。",portrait:"/俗世凡骨.png"}},k=["ren","yi","li","zhi","ziran","wuwei","rouruo","zhizu"];function rt(e){let r=k[0],t=-1/0;for(const s of O){const i=e[s];(i>t||i===t&&k.indexOf(s)<k.indexOf(r))&&(r=s,t=i)}return r}function st(e){return e.schoolGuessWrong>=C||e.cultivation<S?T.fanGu:T[rt(e.traits)]}const x=document.querySelector("#app");let f=E();function at(){x.classList.remove("app--in-game","app--fade-in-ready"),x.style.removeProperty("--game-bg"),delete x.dataset.bgStage,document.body.classList.remove("game-bg-active"),document.body.style.removeProperty("--game-bg"),delete document.body.dataset.bgStage,F(x,()=>{f=E(),I()})}function I(){x.classList.add("app--in-game"),x.classList.remove("app--fade-in-ready"),f.questionIndex<p.length&&b(x,p[f.questionIndex].ageBand),X(x,{state:f,onFinish:()=>{const e=st(f);et(x,f,e,()=>{f=E(),I()})}})}at();
