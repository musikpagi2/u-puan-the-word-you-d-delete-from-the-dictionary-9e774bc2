// The Word You'd Delete From the Dictionary
//
// Candidate words brainstormed in this session:
//   - "moist"            — the classic hated word, but the whole field will pick it.
//   - "literally"        — misused to death, but too obvious.
//   - "irregardless"     — grammar rage, but again the obvious pick.
//   - "phlegm"           — gloriously gross sound, but a one-note gag.
//   - "floccinaucinihilipilification" — a word meaning "worthless", ironic,
//     but the joke needs the definition to land.
//   - "pneumonoultramicroscopicsilicovolcanoconiosis" — the longest word in
//     the English language (45 letters). The joke is the word itself: a word
//     so absurdly long that nobody can say it, spell it, or use it without
//     a deep breath. Deleting it frees the dictionary of its own punchline.
//     Instantly understood, fresh, and the humour comes entirely from the
//     word itself. Picked.
//
// The entry writes exactly this one word — nothing else — to entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "pneumonoultramicroscopicsilicovolcanoconiosis";

// The gate requires a single real word: letters only, no spaces,
// no newlines, 1-77 characters.
if (!/^[a-z]+$/.test(WORD)) {
  throw new Error("entry must be a single word of letters only");
}
if (WORD.length < 1 || WORD.length > 77) {
  throw new Error(`entry must be 1-77 characters, got ${WORD.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
console.log(`Wrote entry: ${WORD}`);
