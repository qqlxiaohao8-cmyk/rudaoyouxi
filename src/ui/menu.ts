export function renderMenu(root: HTMLElement, onStart: () => void): void {
  root.innerHTML = "";
  const stage = document.createElement("section");
  stage.className = "stage";

  stage.innerHTML = `
    <h1 class="title-cn hero">儒道</h1>
    <div class="subtitle">修 炼 模 拟 器</div>
    <div class="divider"></div>
    <div class="menu">
      <p class="blurb">
        山门既开，少年初登。<br />
        自五岁童子，至二十五岁壮年，<br />
        一路三十次抉择，皆需自心而出。<br />
      </p>
      <button class="primary" id="start-btn">入 山</button>
      <p class="age-meta">操作提示：题目与儒道二钮皆以鼠标点击</p>
    </div>
  `;
  root.appendChild(stage);

  stage.querySelector<HTMLButtonElement>("#start-btn")!.addEventListener(
    "click",
    onStart,
  );
}
