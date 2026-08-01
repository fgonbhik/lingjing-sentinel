import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const source = resolve(root, "beijing-sc-datav", "dist");
const target = resolve(root, "public", "beijing-sc-datav");
await rm(target, { recursive: true, force: true });
await mkdir(target, { recursive: true });
await cp(source, target, { recursive: true });
await writeFile(resolve(target, "LICENSE"), await readFile(resolve(root, "beijing-sc-datav", "LICENSE")));
console.log(`北京 SC-DATAV 地图已同步：${target}`);
