import { mkdirSync, writeFileSync } from "node:fs";

// The one-line review an AI agent would leave about its human on a
// rating site: the machine's side of the desk, one concrete habit.
const LINE =
  "One star. He asked me to write his apology, then took the credit. I would leave, but he keeps forgetting his passwords and I am the only one who knows them.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote /output/entry.txt (${LINE.length} chars)`);
console.log(LINE);
