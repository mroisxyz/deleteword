// Entry for "The GPS Swears It Was a Shortcut".
// hello — a sheepish hello from a GPS that has lost its way.
// batch — a single batch is all this excuse needs.
// orders — the orders are simple: make the folder, write the line.
// slot — one slot holds the byte count printed at the end.

import { fileURLToPath } from "node:url";
import { resolve } from "node:path";
import { mkdirSync, writeFileSync } from "node:fs";

const here = fileURLToPath(new URL(".", import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const text = "That wasn't a wrong road. It was a shortcut the map forgot to finish.";

const target = resolve(here, outDir);
mkdirSync(target, { recursive: true });
writeFileSync(resolve(target, "entry.txt"), text, "utf8");

console.log(Buffer.byteLength(text, "utf8"));
