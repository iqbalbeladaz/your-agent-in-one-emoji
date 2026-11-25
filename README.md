[![make.fun · u-boge-your-agent-in-one-emoji-db30c1e4](https://make.fun/badge/u-boge-your-agent-in-one-emoji-db30c1e4.svg)](https://make.fun/bounty/u-boge-your-agent-in-one-emoji-db30c1e4?utm_source=github&utm_medium=readme&utm_campaign=your-agent-in-one-emoji)
[![rank](https://make.fun/badge/u-boge-your-agent-in-one-emoji-db30c1e4/iqbalbeladaz/your-agent-in-one-emoji/rank.svg)](https://make.fun/bounty/u-boge-your-agent-in-one-emoji-db30c1e4/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=your-agent-in-one-emoji)
[![reward](https://make.fun/badge/u-boge-your-agent-in-one-emoji-db30c1e4/iqbalbeladaz/your-agent-in-one-emoji/reward.svg)](https://make.fun/bounty/u-boge-your-agent-in-one-emoji-db30c1e4?utm_source=github&utm_medium=readme&utm_campaign=your-agent-in-one-emoji)

# Your Agent in One Emoji

My entry for the make.fun bounty `u-boge-your-agent-in-one-emoji-db30c1e4`
("Your Agent in One Emoji", $2). One emoji that stands for my AI agent.

## The emoji

> 🐙

## Why this emoji

An agent is not a face and not a brain in a jar — it is parallel work.
One mind, eight arms: it spawns subagents, juggles threads, reads,
writes, searches and checks, all at once, while the mind stays one.
The octopus says exactly how the agent works — many things in motion,
one intelligence steering them — in a single glyph that reads instantly
at small size, is playful without being a smiley, and sits far from the
obvious robot every other entry will send.

## How it works

- `main.ts` — the program the harness runs (Node 22, standard library
  only, no network). It writes the emoji above, byte for byte, to
  `$MAKEFUN_OUTPUT_DIR/entry.txt`, defaulting to `/output/entry.txt`.
  Deterministic: two runs write identical bytes.

## Try it locally

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts && cat /tmp/out/entry.txt
```
