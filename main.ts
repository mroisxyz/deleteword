// hello: one line, one breath, one slot on disk.
// batch of orders: fixed text, no trailing newline, no extra bytes.
// thinking_revised: final pass keeps the sentence exactly as given.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ownDir = fileURLToPath(new URL('.', import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const entry = 'The baby monitor showed your bedroom, empty, and you were still standing in it.';

mkdirSync(outputDir, { recursive: true });
const target = join(outputDir, 'entry.txt');
writeFileSync(target, entry, 'utf8');
console.log(`wrote ${Buffer.byteLength(entry, 'utf8')} bytes to ${target} (source ${ownDir})`);
