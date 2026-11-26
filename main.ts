// hello, wary traveler: this little script has just one batch of work to finish.
// It writes a single line of text, claimed in its own slot, and reports orders of magnitude.
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

// Anchor the script to the folder it lives in, whatever the caller's cwd.
const here = fileURLToPath(new URL('.', import.meta.url));

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const entry = 'I left that patch untouched as a tribute to the concept of effort.';

await mkdir(outputDir, { recursive: true });
const target = join(outputDir, 'entry.txt');
await writeFile(target, entry, 'utf8');

const size = Buffer.byteLength(entry, 'utf8');
console.log(`entry.txt: ${size} bytes`);
void here;
