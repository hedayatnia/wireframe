# Wireframe

A fast, local-first wireframe board built for the agent workflow. Sketch the UI, then hand your coding agent a rendered image plus an exact written spec — one export, no guessing.

**Live:** https://wireframe.airfoil.studio (landing) · https://wireframe.airfoil.studio/app/ (the app)

## What's here

- `app/index.html` — the entire app, one self-contained HTML file. No build step, no dependencies, autosaves locally, works offline (served with `app/sw.js`, or straight from disk).
- `skills/wireframe-first/SKILL.md` — the `wireframe-first` agent skill: teaches coding agents when to offer a wireframe-first step (and just as importantly, when not to).
- `index.html` — the landing page (fonts inlined; the product previews on it are the app's own real components rendered in the page, so they stay crisp on phones). `og.png` — the social share image. `vercel.json` — hosting config (trailing slashes so the app lives cleanly at `/app/`).

## Use the app

Open https://wireframe.airfoil.studio/app/, or open `app/index.html` directly from disk. Your board persists in localStorage. The app installs as a PWA from your browser's menu.

## Export to agents

Export (top right) → pick Claude Code, Cursor, ChatGPT, or any agent:

- Claude Code, Cursor, and ChatGPT open with the prompt pre-filled (review-and-confirm deep links; nothing auto-sends).
- Images can't travel through links, so: copy the image, open the agent, paste the image, the prompt is already there.

## Install the skill

The skill is at `skills/wireframe-first/SKILL.md`, in the standard Agent Skills format — it works unchanged in Claude Code, Codex, Cursor, and Aside.

Easiest install (the CLI auto-detects your agents and installs to the right place):

```bash
npx skills add hedayatnia/wireframe --skill wireframe-first
```

Or copy the file manually:

- **Claude Code:** `~/.claude/skills/wireframe-first/SKILL.md` (all projects) or `.claude/skills/wireframe-first/` in one repo
- **Codex:** `~/.codex/skills/wireframe-first/SKILL.md`
- **Aside:** add `skills/wireframe-first/SKILL.md` as an account skill from the repo, or drop it into your Aside user skills folder

## License

MIT
