// hello, from the folder resolved off this module's own URL.
// Even a backlog batch of orders gets one honest slot; no pretending here.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// Keep the script's own directory around; the grader supplies the output folder.
const HERE = fileURLToPath(new URL('.', import.meta.url));

// The grader mounts a writable output directory; fall back to /output locally.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// One line, no trailing newline: the whole truth fits in a single reply.
const REPLY = "Out of office. I'm not ill, I just can't face the inbox. I'll reply when I remember why it matters. Thank you.";

mkdirSync(outDir, { recursive: true });
const bytes = Buffer.byteLength(REPLY, 'utf8');
writeFileSync(join(outDir, 'entry.txt'), REPLY, 'utf8');
console.log(`entry.txt: ${bytes} bytes`);
