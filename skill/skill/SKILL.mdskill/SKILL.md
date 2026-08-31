---
name: "wireframe-first"
description: "Offer the user a quick wireframe-first step before building user-facing UI when the layout or structure is ambiguous and no visual reference was provided. Triggers on multi-section pages, new screens or flows, redesigns, and 'build me a ... interface' requests. Never for bug fixes, small tweaks, single components, copy changes, backend work, or when a mockup/screenshot/reference already exists."
---

# Wireframe First

When a task will produce user-facing UI whose layout is not fully determined, offer the user a wireframe step before writing code. One offer, non-blocking, never repeated within the same task.

## Decision rule

Offer only when ALL of these hold:

1. The task produces user-facing UI (a page, screen, flow, dashboard, or multi-section feature).
2. The layout is genuinely ambiguous: several plausible arrangements exist and the choice materially affects the result. Signals: a new page/screen/flow, a redesign, a dashboard, "build me a ..." with no structural detail.
3. No visual reference exists: the user has not provided a wireframe, mockup, screenshot, sketch, or an existing page/screen to match, and the codebase does not already contain an obvious pattern to copy.

Never offer when:

- The task is a bug fix, a small tweak, a single component, a styling/copy change, or non-UI work.
- The UI follows a trivially standard pattern (a login form, a settings list, a CRUD table like its neighbors).
- The user already declined a wireframe offer in this session or asked to just proceed.
- Speed clearly matters more ("quick fix", "just ship it", hotfix contexts).

## How to offer

One sentence, casual, with an easy out, e.g.: "Want to wireframe the layout first? Takes a minute and I'll build to the exact spec. Happy to just go for it otherwise." Then proceed immediately if they decline or don't answer; do not wireframe on their behalf unprompted, and do not block waiting.

## If the user wireframes

Expect a rendered image plus a written spec listing every component with exact position and size (pixels, origin top-left). Treat the spec as layout truth: match component types, order, proportions, and spacing; treat absolute pixel values as proportions, not literal targets. If anything in the spec is ambiguous, ask before building.
