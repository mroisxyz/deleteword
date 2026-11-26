// thinking: hello at last, this revised batch of orders found a slot
// The worst superpower: a flawless forecast of the exact moment a parcel never shows.
import { mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const ownDir = fileURLToPath(new URL('.', import.meta.url));
void ownDir;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });

const entry = 'The ability to perfectly predict what time your delivery will not arrive.';
writeFileSync(join(outputDir, 'entry.txt'), entry, 'utf8');

console.log(Buffer.byteLength(entry, 'utf8'));
