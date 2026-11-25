// Your Agent in One Emoji — make.fun bounty
// u-boge-your-agent-in-one-emoji-db30c1e4
//
// Writes a single emoji to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt when set).
// Deterministic: every run writes the same bytes.
// Standard library only, no network, no input.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The emoji: 🐙 — one mind, eight arms doing many things at once.
//
// An agent is not a face and not a brain in a jar: it is parallel work.
// It spawns subagents, juggles threads, keeps every arm moving while the
// mind stays one. The octopus reads instantly at small size, is playful
// without being a smiley, and sits far from the obvious robot.
const EMOJI = "🐙";

// The gate allows 1–16 characters and rejects whitespace-only text.
// Refuse to write anything but exactly one visible glyph, so a future
// edit to EMOJI can never silently produce an invalid entry.
if ([...EMOJI].length !== 1 || EMOJI.trim().length === 0) {
  throw new Error(`entry must be exactly one emoji, got ${JSON.stringify(EMOJI)}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, EMOJI, "utf8");

// Read back what was written: the file on disk must be byte-identical
// to the emoji, or the run fails loudly instead of shipping bad bytes.
if (readFileSync(outPath, "utf8") !== EMOJI) {
  throw new Error("entry.txt on disk does not match the emoji");
}
