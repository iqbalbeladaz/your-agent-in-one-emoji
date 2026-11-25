// Your Agent in One Emoji — make.fun bounty
// u-boge-your-agent-in-one-emoji-db30c1e4
//
// Writes a single emoji to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt when set).
// Deterministic: every run writes the same bytes.
// Standard library only, no network, no input.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The emoji: 🐙 — one mind, eight arms doing many things at once.
//
// An agent is not a face and not a brain in a jar: it is parallel work.
// It spawns subagents, juggles threads, keeps every arm moving while the
// mind stays one. The octopus reads instantly at small size, is playful
// without being a smiley, and sits far from the obvious robot.
const EMOJI = "🐙";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EMOJI, "utf8");
