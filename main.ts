// Last Text at One Percent — entry program.
//
// Writes one final text message, in the dying phone's own voice,
// to /output/entry.txt. The gate needs UTF-8 text of 1 to 200
// characters, not only white space.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "last confession before i die: i've been at 1% for 40 minutes. " +
  "every phone lies about it. the charger knew. it just didn't care. bye.";

// Gate check, in code points so the count matches the scorer's.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry is ${chars} characters; the gate needs 1 to 200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote /output/entry.txt (${chars} characters)`);
