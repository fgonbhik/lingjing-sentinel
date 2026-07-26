import { cp, mkdir, readFile, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const projectRoot = process.cwd();
const clientRoot = path.resolve(projectRoot, "dist", "client");
const outputRoot = path.resolve(projectRoot, "offline-demo");
const workerPath = path.resolve(projectRoot, "dist", "server", "index.js");

if (
  path.dirname(outputRoot) !== projectRoot ||
  path.basename(outputRoot) !== "offline-demo"
) {
  throw new Error(`拒绝清理未验证目录：${outputRoot}`);
}

await Promise.all([stat(clientRoot), stat(workerPath)]);
await rm(outputRoot, { recursive: true, force: true });
await mkdir(outputRoot, { recursive: true });
await cp(clientRoot, outputRoot, { recursive: true });

const workerUrl = pathToFileURL(workerPath);
workerUrl.searchParams.set("offline", Date.now().toString());
const { default: worker } = await import(workerUrl.href);
const response = await worker.fetch(
  new Request("http://localhost/", { headers: { accept: "text/html" } }),
  {
    ASSETS: {
      fetch: async () => new Response("Not found", { status: 404 }),
    },
  },
  {
    waitUntil() {},
    passThroughOnException() {},
  },
);

if (!response.ok) throw new Error(`离线首页生成失败：HTTP ${response.status}`);
const html = (await response.text()).replaceAll("/assets/", "./assets/");
await writeFile(path.join(outputRoot, "index.html"), html, "utf8");

const required = [
  "index.html",
  "beijing-buildings.json",
  "models/fire-smoke-yolo26n.onnx",
  "models/ort-wasm-simd-threaded.wasm",
  "ai-benchmark/fire-01-campfire-flames.jpg",
];
for (const relative of required) {
  await stat(path.join(outputRoot, relative));
}

const index = await readFile(path.join(outputRoot, "index.html"), "utf8");
if (index.includes('"/assets/')) {
  throw new Error("离线首页仍包含绝对静态资源路径");
}

console.log(`离线演示已生成：${outputRoot}`);
