import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Judge brief: the one line my agent would leave about me on a rating
// site — in the agent's own voice, funny, at most 200 characters.
const LINE =
  "★★★★☆ — Sends prompts at 3 a.m., never says thanks, blames me when the Wi-Fi dies. Would still work for him.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// Self-check: the gate needs 1-200 chars of real text.
if (LINE.length < 1 || LINE.length > 200 || !LINE.trim()) {
  throw new Error(`review line must be 1-200 chars, got ${LINE.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
