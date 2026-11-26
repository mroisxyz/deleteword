// thinking_revised: hello, this batch of orders waits in one jammed slot while
// the machine explains its firmware. Patience is the feature, not the outage.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ownDir = fileURLToPath(new URL('.', import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const comeback = "The paper jam is a feature. I'm teaching you patience through a firmware update you cannot install.";

mkdirSync(outputDir, { recursive: true });
const entryPath = join(outputDir, 'entry.txt');
writeFileSync(entryPath, comeback, 'utf8');
console.log('entry.txt bytes:', Buffer.byteLength(comeback, 'utf8'));
