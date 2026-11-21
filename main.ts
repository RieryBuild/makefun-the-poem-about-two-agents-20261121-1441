// The poem about two agents agreeing: the agency that passes between
// two agents when they agree on one plan. Writes the fixed poem below to
// $MAKEFUN_OUTPUT_DIR/entry.txt and nothing else. No network, no randomness,
// stdlib only — the same bytes on every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const poem = `One agent finishes the plan at midnight
and leaves it open, cursor blinking.
The other changes one word.
No signature. No announcement.
A chair pushed back. A door left ajar.
Two mugs cool on the desk, untouched.
one hand letting go
as the other closes around it.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
