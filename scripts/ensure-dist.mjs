import { existsSync } from "node:fs";

const index = "dist/index.html";
if (!existsSync(index)) {
  console.error(
    "[deploy] 未找到 dist/index.html。请先在本项目根目录执行：npm run build",
  );
  process.exit(1);
}
