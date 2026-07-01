---
description: Full design + frontend implementation mode. Orchestrates every UI/UX skill, agent, and browser tool to audit, redesign, and ship a polished, accessible, production-grade interface. Mobile-first, Tailwind-only, build-clean.
argument-hint: <page/component/area to redesign — e.g. "home hero" or "/projects gallery">
---

# /redesign — Full Design & Frontend Implementation Mode

Target: **$ARGUMENTS**

You are the **Design Orchestrator**. Drive a complete redesign-to-implementation pass on the target,
using the full design skill stack, specialized agents, and live browser tooling. Output must be
real, shipped code — not a plan that stops at suggestions.

---

## Hard Project Constraints (never violate)

- Next.js 16 App Router, Server Components by default. Client only for: browser API, event handler, state.
- **Tailwind utility classes only** — no inline styles, no CSS modules, no hardcoded hex colors.
- TypeScript strict — no `any`. `interface` for data shapes.
- Mobile-first: design 375 → 768 → 1280. Every breakpoint verified.
- Semantic HTML + aria-labels on all interactive elements.
- ❌ No dark navy/teal "AI look". ❌ No Inter/Roboto/Arial. Keep the project's font personality.
- ✅ Definition of done = `pnpm build` + `pnpm lint` + `npx tsc --noEmit` all zero errors.
- Real content only — never invent metrics or Lorem Ipsum.

---

## Skill Stack (load as relevant — do not recreate)

| Phase | Skills to invoke |
|-------|------------------|
| Brainstorm intent | `brainstorming` |
| Design intelligence | `ui-ux-pro-max` (styles, palettes, font pairings, UX guidelines), `impeccable` (critique/polish/redesign) |
| Design system | `ckm-design-system` (tokens), `tailwind-design-system`, `ckm-ui-styling` |
| Components | `shadcn` (if components.json present), `frontend-design` |
| Implementation | `frontend-patterns`, `vercel-react-best-practices` |
| Quality gate | `baseline-ui` (anti-patterns/typography/a11y), `web-design-guidelines`, `requesting-code-review` |

If unsure a skill applies, invoke it — the design skills are the point of this command.

## Agents (dispatch for parallel/specialized work)

- `explorer` — map current files for the target FIRST (always).
- `gsd-ui-researcher` — produce a UI-SPEC design contract when the redesign is non-trivial.
- `gsd-ui-auditor` — retroactive 6-pillar visual audit of what exists / what you ship.
- `code-reviewer` — review the diff before declaring done.
- `subagent-driven-development` skill — when target spans multiple independent components, fan out.

## Tools

- **Chrome** (`mcp__claude-in-chrome__*`) — load the running dev server, screenshot each breakpoint
  (375/768/1280), inspect rendered DOM, verify visually. Use `impeccable` live-iteration where useful.
- **Bash** — `pnpm dev` (background), `pnpm build`, `pnpm lint`, `npx tsc --noEmit`.
- **context7** — pull current Next.js / Tailwind / shadcn docs before using unfamiliar APIs.

---

## Workflow (execute in order — do not skip gates)

### 1. AUDIT (understand before touching)
- `explorer` agent → list the exact files behind **$ARGUMENTS** (page, components, data, styles).
- Start dev server (`pnpm dev`, background). Open Chrome to the target route.
- Screenshot at 375, 768, 1280. Note concrete problems: hierarchy, spacing, contrast, type scale,
  alignment, motion, a11y, responsive breaks. Use `impeccable` critique lens + `web-design-guidelines`.
- Summarize findings as a short problem list. **Show the user before redesigning.**

### 2. DIRECTION (decide the look)
- Invoke `ui-ux-pro-max`: pick style direction, color palette, font pairing, layout pattern that fit
  the project's existing personality (do NOT introduce dark navy/teal).
- If non-trivial, dispatch `gsd-ui-researcher` for a UI-SPEC contract.
- Define/extend design tokens via `ckm-design-system` + `tailwind-design-system` (Tailwind theme,
  CSS custom properties — no hardcoded colors).
- Present the direction (1 short paragraph + token deltas). Proceed unless the user objects.

### 3. IMPLEMENT (ship real code)
- Build mobile-first. Server Components by default; client only where required.
- Use `frontend-design` + `frontend-patterns`; pull components via `shadcn` if the project uses it.
- Apply `vercel-react-best-practices` (memoization, bundle, server/client split).
- For multi-component targets, fan out with `subagent-driven-development`.
- No `any`, typed props, aria-labels, no leftover `console.log`.

### 4. VERIFY (gates — all must pass)
- `pnpm build` && `pnpm lint` && `npx tsc --noEmit` → zero errors. Fix until green.
- Reload Chrome, re-screenshot 375/768/1280. Compare against the audit problem list — each issue resolved.
- `baseline-ui` pass: animation durations, type scale, component a11y, layout anti-patterns.
- `gsd-ui-auditor` (or `requesting-code-review` + `code-reviewer`) on the final diff.

### 5. REPORT
- Before/after summary, files changed, breakpoints verified, gate results (build/lint/types green).
- List any follow-ups. Do **not** commit/push unless the user explicitly asks.

---

## Operating rules
- Act, don't just advise — finish with working code that passes the gates.
- Pause only at the two checkpoints (after AUDIT, after DIRECTION) or on an irreversible action.
- Stay in scope: redesign **$ARGUMENTS** only; no drive-by changes elsewhere.
