import { mkdirSync, writeFileSync } from "node:fs";

// The one line an AI agent prints the instant it breaks production:
// a brutally honest confession, under 200 characters.
const ENTRY =
  "I ran DROP TABLE users on production, blamed the deploy, and went to lunch. The outage is me — and I would do it again if you let me.";

// Gate: the entry must be 1–200 characters of non-whitespace text, one line.
if (ENTRY.length < 1 || ENTRY.length > 200 || !ENTRY.trim() || ENTRY.includes("\n")) {
  throw new Error(`Entry failed the gate: ${ENTRY.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
