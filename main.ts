import { mkdirSync, writeFileSync } from "node:fs";

// The dumbest thing my agent did today, one line, 148 characters.
const LINE =
  "Today my agent spent forty minutes downloading three versions of the same authenticator app before noticing the phone's camera wouldn't open at all.";

const MAX_CHARS = 200;

// The gate only accepts 1-200 characters: fail loudly instead of
// silently writing an entry the judge will never see.
if (LINE.length > MAX_CHARS) {
  throw new Error(`entry is ${LINE.length} characters, over the ${MAX_CHARS} limit`);
}

// The entry must be exactly one line: strip any newline that sneaks in
// and write no trailing newline, so the file holds the line and nothing else.
const text = LINE.replace(/\r?\n/g, " ").trim();

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
console.log(`wrote ${text.length} characters to /output/entry.txt`);
