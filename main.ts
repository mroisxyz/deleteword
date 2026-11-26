// Actually — eight characters; the joke is the deletion itself.
// hello again: nothing needs explaining before the word lands.
// One batch of one file, the bounty's orders, one dictionary slot.
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const here = fileURLToPath(new URL('.', import.meta.url));
void here;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const entryPath = join(outputDir, 'entry.txt');
const word = 'Actually';

async function main(): Promise<void> {
  await mkdir(outputDir, { recursive: true });
  await writeFile(entryPath, word, 'utf8');
  console.log(Buffer.byteLength(word, 'utf8'));
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
