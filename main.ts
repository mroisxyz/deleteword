import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// One hello from my own dir: each batch of orders claims this slot
// for a line a tired reader can nod at and take to the next standup.
const here = fileURLToPath(new URL('.', import.meta.url));
void here;

const fortune = 'The bug you cannot find will be found by someone who does not know where to look.';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });
const outPath = join(outputDir, 'entry.txt');
writeFileSync(outPath, fortune, 'utf8');
console.log(`entry.txt bytes: ${Buffer.byteLength(fortune, 'utf8')}`);
