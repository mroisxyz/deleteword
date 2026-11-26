import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

// thinking_revised: hello — leave greetings out of entry.txt entirely; one crisp
// sentence is the whole ask, so batch it into one write with no tail appended.
const JOKE = "Reply-all was a mistake. The whole company now knows about my out-of-office sandwich.";

// thinking_revised: orders — pin the path to our own dir, never the caller's cwd,
// and allow MAKEFUN_OUTPUT_DIR to move the lone output slot when supplied.
const here = fileURLToPath(new URL(".", import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });

const target = join(outDir, "entry.txt");
const bytes = Buffer.byteLength(JOKE, "utf8");
writeFileSync(target, JOKE, "utf8");

console.log(`entry.txt: ${bytes} bytes`);
