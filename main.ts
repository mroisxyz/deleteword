import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// hello once more: the monotone is the joke, and the clause is the punchline.
// A batch of dry legalese distills to one clause; orders of silence mean consent.
// No slot of code moves; only these thoughts are revised, again, in place.
// thinking_revised v3: final wording, executable code byte-for-byte identical.

const ownDir = fileURLToPath(new URL('.', import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const text = 'By continuing to use this service, you agree that any silence on your part constitutes enthusiastic consent to our newsletter.';

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), text, 'utf8');
console.log(`entry.txt: ${Buffer.byteLength(text, 'utf8')} bytes`);
