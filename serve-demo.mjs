import { spawn } from "node:child_process";
import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize, sep } from "node:path";
import { fileURLToPath } from "node:url";

const appDirectory = fileURLToPath(new URL(".", import.meta.url));
const root = normalize(join(appDirectory, "offline-demo"));
const preferredPort = Number.parseInt(process.env.PORT || "3000", 10);
const maxPortAttempts = 20;
const shouldOpenBrowser =
  process.env.DEMO_NO_BROWSER !== "1" && !process.argv.includes("--no-browser");

const mime = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".wasm": "application/wasm",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
};

if (!existsSync(join(root, "index.html"))) {
  console.error("[启动失败] 未找到 offline-demo/index.html。");
  console.error("请先完整解压项目压缩包，再运行“启动演示.bat”。");
  process.exit(1);
}

function openBrowser(url) {
  const command =
    process.platform === "win32"
      ? ["cmd.exe", ["/d", "/s", "/c", "start", "", url]]
      : process.platform === "darwin"
        ? ["open", [url]]
        : ["xdg-open", [url]];

  try {
    const child = spawn(command[0], command[1], {
      detached: true,
      stdio: "ignore",
      windowsHide: true,
    });
    child.unref();
  } catch (error) {
    console.warn(`[提示] 浏览器未能自动打开，请手动访问 ${url}`);
    console.warn(error instanceof Error ? error.message : String(error));
  }
}

function safePathname(requestUrl) {
  try {
    return decodeURIComponent((requestUrl || "/").split("?")[0]);
  } catch {
    return "/";
  }
}

const server = createServer((request, response) => {
  const pathname = safePathname(request.url);
  const relative = pathname === "/" ? "index.html" : pathname.replace(/^\/+/, "");
  const target = normalize(join(root, relative));
  const isInsideRoot = target === root || target.startsWith(`${root}${sep}`);

  if (!isInsideRoot || !existsSync(target) || statSync(target).isDirectory()) {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("文件不存在");
    return;
  }

  response.writeHead(200, {
    "Content-Type": mime[extname(target).toLowerCase()] || "application/octet-stream",
    "Cache-Control": "no-cache",
    "Access-Control-Allow-Origin": "*",
  });

  const stream = createReadStream(target);
  stream.on("error", () => {
    if (!response.headersSent) {
      response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
    }
    response.end("文件读取失败");
  });
  stream.pipe(response);
});

let attempt = 0;
let activePort = preferredPort;

server.on("error", (error) => {
  if (error.code === "EADDRINUSE" && attempt < maxPortAttempts) {
    attempt += 1;
    activePort = preferredPort + attempt;
    console.log(`[端口占用] 自动尝试端口 ${activePort}...`);
    server.listen(activePort, "127.0.0.1");
    return;
  }

  console.error("[启动失败] 离线演示服务无法启动。");
  console.error(error instanceof Error ? error.stack || error.message : String(error));
  process.exitCode = 1;
});

server.on("listening", () => {
  const url = `http://127.0.0.1:${activePort}/`;
  console.log(`[启动成功] 京域智城演示地址：${url}`);
  console.log("演示期间请保持本窗口开启；按 Ctrl+C 可停止服务。");
  if (shouldOpenBrowser) {
    openBrowser(url);
  }
});

server.listen(activePort, "127.0.0.1");
