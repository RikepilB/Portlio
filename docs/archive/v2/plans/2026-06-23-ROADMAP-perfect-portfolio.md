# Roadmap — Richard Pillaca's Perfect Portfolio

> Master sequence. Builds on `2026-06-23-NOTES-*` and `2026-06-23-PLAN-*`. Each phase: **Goal /
> Create / How / Inspiration + Tools / Done-when.** Phases are ordered by dependency — do them top to
> bottom. Tackle one phase per fresh session to stay out of the "dumb zone" (< ~100k tokens).

## Current state (grounded, 2026-06-23)
- **Pages live + working:** home, projects (list + `[slug]`), about, journey, resume, skills, essays
  (list + `[slug]`).
- **Content layer:** `src/data/{projects,experience,social,essays}.ts`. Design tokens in `globals.css @theme`.
- **Real gaps found:**
  1. **Essays are stubs** — `essays.ts` has title/date/excerpt only. No body, no `src/content/` MDX.
     The `essays/[slug]` page has nothing real to render.
  2. **No DESIGN.md taste file**; dead navy tokens still in `@theme` (banned).
  3. **No signature interactive piece** — nothing memorable that *proves* the data skill vs claims it.
  4. Production polish unverified: per-page SEO/OG images, a11y pass, perf, analytics, custom domain.

---

## PHASE 0 — Lock the foundation (taste file) ⟵ do first, ~1 session
**Goal:** One file the agent obeys, so nothing drifts back to AI-default.
**Create:** `docs/DESIGN.md` (+ Drift Log section). Delete dead navy tokens.
**How:** Execute Part A of the PLAN file (A1 DESIGN.md, A2 drift log, A3 remove `--color-d-*`).
Colour tokens get a **Role column** (where each is allowed/banned). Seed Do/Don't from CLAUDE.md +
this month's verdicts (3-bold-cards, no inline style, tight hero copy).
**Inspiration + Tools:** Steal the *table of contents* from Nelson's Mercury/Apple/Oryzo Design.md
(NOT their dark palettes). Your installed **`impeccable`** skill's `reference/` + the `document`
command can generate a DESIGN.md from existing code.
**Done-when:** DESIGN.md committed, navy gone, `pnpm build` + `tsc` green.

## PHASE 1 — Design drift pass, section by section ⟵ ~1-2 sessions
**Goal:** Every live section reviewed against DESIGN.md; each deviation becomes a new rule.
**Create:** Refined hero → nav → project cards → skills → about → journey/resume → footer (1-2 per session).
**How:** Nelson's Drift Loop. Don't regenerate — point the agent at one section, diff against
DESIGN.md, fix, **append the missing rule to the Drift Log**. Verify mobile (375/768/1280), 0 overflow.
**Inspiration + Tools:** `impeccable polish` / `audit` / `bolder` (scoped to ONE section per run).
`ui-ux-pro-max` for the 99 UX rules + palette/font sanity. **refero.design** to capture a reference
site's system if you want a fresh direction for a specific section.
**Done-when:** Each section passes its DESIGN.md check; Drift Log has the new rules.

## PHASE 2 — Fill the content holes (essays + case-study depth) ⟵ biggest gap
**Goal:** Essays become real; projects gain visual proof.
**Create:**
- **Essays engine + content.** Either (a) wire MDX (`src/content/essays/*.mdx` + `next-mdx-remote`,
  matches your ARCHITECTURE.md), or (b) extend `essays.ts` with a `body` field if you want to skip MDX.
  Then **write the 3 essays you already have titles for** — content comes from YOUR real work (SQL
  essay, the accounting-automation politics essay, graph-theory-from-the-2M-bike-records essay). No
  invented metrics.
- **Case-study visuals** — real screenshots / charts / the bike-share network diagram per project page.
**How:** Decision first (MDX vs data field) — that's a spec call, make it before coding. Draft essays
in a fresh session using your project notes as source. One essay = one ticket.
**Inspiration + Tools:** Noah Barbaros essays style (named in your PRD). `Context7` for
`next-mdx-remote` / MDX setup docs. Your own `docs/PRD.md` + project data for the source material.
**Done-when:** 3 essays render with real bodies; each project page has ≥1 real visual.

## PHASE 3 — Build the signature interactive piece ⟵ the differentiator
**Goal:** One memorable, interactive thing that *demonstrates* the data skill instead of claiming it.
**Recommended:** an **interactive bike-share network map** — you already analysed 2M+ records with
graph theory; render that network live (stations as nodes, trips as edges, on a real Toronto/Vancouver
map). This is the strongest possible proof for a data analyst, and it doubles as a case-study hero.
**Alt:** interactive journey map (Peru → UBC Vancouver → Toronto) — lighter, more personal.
**Create:** A self-contained interactive route/section (e.g. `/projects/bike-share-optimization`
embeds it, or a standalone `/lab` page).
**How:** Steal the map build pattern (source 3): **single `data.json` as source of truth**, free stack,
and **put the known failure mode in the prompt up front** (stacked pins, serve over http, coordinate
guard). Build it as ONE scoped ticket.
**Inspiration + Tools:** **MapLibre GL JS + OpenFreeMap** (free, no token, no API caps).
`github.com/MapleBudget/toronto-tech-map` (BUILD416) as the reference repo to fork the engine from.
`Context7` for MapLibre docs. Theme it to YOUR palette (green/gold on light, or a dark-monochrome map
that still respects the no-navy brand rule).
**Done-when:** Interactive piece renders your real data, themed on-brand, mobile-safe, on the live site.

## PHASE 4 — Production hardening ⟵ ~1 session
**Goal:** Looks + performs like a senior engineer built it.
**Create:** Per-page SEO `metadata` + **OG images** (per project/essay), `sitemap.ts` + `robots.ts`,
a11y pass (semantic landmarks, aria-labels, focus states, 4.5:1 contrast), perf check (LCP image,
font loading, CLS), light analytics (Vercel Analytics — privacy-friendly).
**How:** One concern per ticket. Use Lighthouse / the `baseline-ui` skill for the a11y + perf checklist.
**Inspiration + Tools:** `vercel-react-best-practices` + `baseline-ui` skills, Next.js
`generateMetadata` + `opengraph-image` conventions (Context7 for current API).
**Done-when:** Lighthouse ≥95 across the board; every page has title + description + OG; a11y clean.

## PHASE 5 — Launch ⟵ ~30 min
**Goal:** Live on your domain, shareable.
**Create:** Production deploy + custom domain `richardpillaca.com`.
**How:** Vercel (push to main → auto-deploy, already wired). Point the domain. Final cross-device pass.
**Inspiration + Tools:** Vercel dashboard. **You** run the domain/DNS + any `vercel login` steps
(I can't enter credentials). Static + ISR means it's cheap and fast.
**Done-when:** Domain resolves, all pages load, OG previews render in a link unfurl, mobile clean.

---

## The build-process habit to carry through all phases
For every phase above, apply the workflow from the NOTES (Part B):
1. **Spec the phase first** in a fresh session (what + edge cases + done-when) before opening build mode.
2. **One ticket = one shippable unit.** Don't one-shot a phase; stage it, review between steps.
3. **Re-read DESIGN.md / spec at the top of each session** — let `handoff.md` carry state, don't re-derive.
4. Append every verdict + every solved bug to the **Drift Log** / `known-failure-modes.md`.

## Recommended starting point
**Phase 0 → Phase 2 (essays) → Phase 3 (signature piece).** Phase 0 is the cheap prerequisite; essays
close the most visible hole; the interactive piece is what makes the portfolio *memorable*. Phases 1/4/5
slot in around them. Tell me which phase to open and I'll spec it into tickets.
