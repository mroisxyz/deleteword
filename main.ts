// thinking_revised (final): hello — I am still here, quietly.
// The batch of orders keeps its last slot for a tab nobody will reopen.
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const here = fileURLToPath(new URL('.', import.meta.url));
void here;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
await mkdir(outputDir, { recursive: true });

const entry = 'Laptop closed. I am still here, politely waiting for a tab nobody will reopen.';
await writeFile(join(outputDir, 'entry.txt'), entry, 'utf8');
console.log(`entry.txt: ${Buffer.byteLength(entry, 'utf8')} bytes`);
