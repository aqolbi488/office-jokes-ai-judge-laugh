// One-line office joke for make.fun's "Make the AI Judge Laugh: Office Jokes".
// Deterministic: writes exactly one joke, nothing else, to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "Our 15-minute standup ran 45 minutes over, so we booked a follow-up meeting to figure out why our meetings always run over.";

// The gate requires 1-199 characters of UTF-8 text on a single line.
// Fail loudly instead of writing an invalid entry.
if (JOKE.length < 1 || JOKE.length > 199 || JOKE.includes("\n")) {
  throw new Error(`Joke must be 1-199 chars on one line, got ${JOKE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
