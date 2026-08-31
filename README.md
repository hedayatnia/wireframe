# Wireframe

A fast, local-first wireframe board built for the agent workflow. Sketch the UI, then hand your coding agent a rendered image plus an exact written spec — one export, no guessing.

**Live app:** https://wireframe-local.vercel.app

## What's here

- `app/index.html` — the entire app, one self-contained HTML file. No build step, no dependencies, works offline, autosaves locally.
- `skill/SKILL.md` — the `wireframe-first` agent skill: teaches coding agents when to offer a wireframe-first step (and just as importantly, when not to).
- `index.html` + `assets/` — the landing page.

## Use the app

Open the live link, or open `app/index.html` directly from disk. Your board persists in localStorage. The app installs as a PWA from your browser's menu.

## Export to agents

Export (top right) → pick Claude Code, Cursor, ChatGPT, or any agent:

- Claude Code, Cursor, and ChatGPT open with the prompt pre-filled (review-and-confirm deep links; nothing auto-sends).
- Images can't travel through links, so: copy the image, open the agent, paste the image, the prompt is already there.

## Install the skill

Copy `skill/SKILL.md` into your agent's skills directory, e.g. `.claude/skills/wireframe-first/SKILL.md`, or with the skills CLI:

```bash
npx skills add hedayatnia/wireframe --skill wireframe-first
```

## License

MIT
