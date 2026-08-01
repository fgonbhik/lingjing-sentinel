// SPDX-License-Identifier: GPL-3.0-or-later
// Based on three-scope-map-skill by 宋夏天Dazzle.
import { cp, mkdir, rm } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = path.join(root, "three-scope-map-vue", "dist");
const target = path.join(root, "public", "three-scope-map");

await rm(target, { recursive: true, force: true });
await mkdir(target, { recursive: true });
await cp(source, target, { recursive: true });
console.log(`北京区县 Three.js 地图已同步：${target}`);
