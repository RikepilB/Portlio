# Plan — Apply the Source Material (2026-06-23)

> Read `2026-06-23-NOTES-nelson-lee-and-workflow.md` first. This is the actionable side: two parts.
> **Part A** = harden the portfolio's design (Nelson's Design.md + drift loop). **Part B** = adopt the
> spec-first / one-ticket workflow for your other websites + systems. Nothing here is executed yet —
> this is for us to review together. Each task is sized so you can approve or cut it independently.

**Goal:** Give the portfolio a single taste file the agent obeys, and give your build process a
repeatable spec→backlog→one-ticket loop, so neither pixels nor code drift back toward AI-default slop.

---

## PART A — Portfolio design hardening

### A0. Where you already are (so we don't redo it)
- ✅ Token system exists: `src/app/globals.css @theme` (palette, fonts, radius, shadows, spacing).
- ✅ Fonts chosen with personality: Newsreader (display serif) + Geist (sans) + JetBrains Mono.
- ✅ Brand DNA locked informally: green `#2bc08f` / accent-ink `#0c5a40`, gold `#c79a3a` / `#8a6516`,
  light base `#f8f9fa` / `#f3fbf8`, ink `#1a1a1a`. No-navy, no-Inter, mobile-first rules in CLAUDE.md.
- ❌ No consolidated **DESIGN.md** (taste rules / Do-Don't / per-component spec / colour roles).
- ❌ No **drift-loop record** — design verdicts (e.g. "Skills = 3 bold cards, not editorial list") live
  only in chat/handoff, not anywhere the agent re-reads.
- ❌ Dead **dark-navy tokens** (`--color-d-*`) still in `@theme`, contradicting the no-navy rule.

### Task A1 — Create `docs/DESIGN.md` (the missing taste file)
**Files:** Create `docs/DESIGN.md`. Reference (do not duplicate): `src/app/globals.css`, `CLAUDE.md`,
`.claude/rules/frontend.md`.
**Shape** (steal Nelson's table of contents, your palette):
- Theme sentence (one line: what the portfolio should *feel* like — editorial, precise, warm-minimal).
- **Color tokens with a Role column** — copy each `@theme` colour and add "where it's allowed / where
  it's banned" (e.g. gold `#8a6516` = small text on light only [AA]; `#c79a3a` = large decorative only).
- Typography roles — Newsreader = display/headings (italic for emphasis), Geist = body/UI, JetBrains
  Mono = kickers/labels/metrics. Sizes + leading already in globals; reference, don't restate.
- Border-radius per element, spacing rhythm, **elevation rule** (you mostly use colour + subtle shadow —
  write it down).
- **Do's & Don'ts** — seed from CLAUDE.md "Hard Rules" + the verdicts already earned this month
  (see A2). This is the heavy-lifting section.
- Agent Prompt Guide — quick colour ref + 2-3 example component prompts in your voice.
- [ ] Draft it, review together, commit.

### Task A2 — Seed the Drift-Loop record (capture verdicts already earned)
**Files:** append to `docs/DESIGN.md` (a "## Drift Log" section).
Verdicts from this month's work that should become permanent rules:
- "Skills section = **3 bold scannable cards** with distinct green/gold accent + index watermark. NOT
  an editorial numbered list (rejected: 'too meh, no eye-catch')."
- "No inline `style={{}}` for per-item accent — use conditional Tailwind classes." (project rule)
- "Hero copy: concrete + tight ('shipped AI-driven apps and engineered systems end to end'), not
  narrow ('an AI-driven API web app')."
- "Dead navy is banned even as a token — see A3."
- [ ] Write these as Do/Don't lines; from now on, every "make it X not Y" verdict appends here.

### Task A3 — Remove (or quarantine) the dead navy tokens
**Files:** `src/app/globals.css:33-42` (`--color-d-*` block).
**Decision needed from you:** delete entirely, or keep behind a `/* ARCHIVED — DO NOT USE, see no-navy
rule */` banner. Recommend **delete** — a banned palette sitting in the token file is exactly the
"default the model reaches for."
- [ ] Confirm choice → apply → `pnpm build` + `npx tsc --noEmit` green.

### Task A4 — Section-by-section drift pass (optional, after A1-A3)
Run Nelson's loop across the live pages **one section at a time**, reviewing each against `DESIGN.md`
before moving on. Order: hero → nav → project cards → skills → about → journey/resume → footer. Each
deviation found → append a rule to the Drift Log (A2). This is where `impeccable polish` / `audit`
earn their keep, but scoped to one section per pass, not a full regenerate.
- [ ] Only start once DESIGN.md exists; pick 1-2 sections per session to stay out of the dumb zone.

---

## PART B — Website + systems workflow

### Task B1 — Adopt the spec-first split for the next build
For your *next* site or system (not the portfolio — it's already built), before opening Claude Code,
write the spec in a fresh high-context session, split by concern in `/docs`:
`database.md` · `api.md` · `ui-ux.md` · `architecture.md`. Hard design decisions go here, in writing,
first. "Thin specs, thin backlog."
- [ ] Use this on the next greenfield project; keep `DESIGN.md` (Part A) as the `ui-ux.md` seed.

### Task B2 — The staged spec→backlog prompt (paste-ready)
You have GitHub MCP connected. Reproduce Nelson's exact staged prompt so the agent builds the backlog
**in phases, pausing for approval**, ordered by build order not document order:

```
Turn my technical spec docs into a structured GitHub backlog. Work in PHASES and STOP for my
approval after each — do not create everything at once.

Context:
- Specs live in /docs (database.md, api.md, ui-ux.md, architecture.md).
- The repo is connected; use the gh CLI (GH_TOKEN is set). Use `gh api` for
  anything the CLI doesn't cover directly, including sub-issue links.

Phase 1 — Epics: Read every file in /docs. Propose a list of epics (one per major area of
work), each with a title, one-line goal, and the spec sections it covers. Show me the list.
Create nothing yet. Wait for approval.
Phase 2 — Issues: After I approve, create each epic as an issue labeled `epic`. Then draft
the child issues needed to finish each epic and show them grouped by epic. Wait for approval.
Phase 3 — Sub-issues: Create the approved issues. For any issue bigger than ~1 day of work,
split it into sub-issues and attach them using GitHub's native parent–child sub-issue
relationship (not checkbox task lists).
Phase 4 — Order: Sequence everything by dependency, not document order — schema and migrations
first, then services and API, then UI. Add a `blocked-by:` note in each issue body and apply a
`ready` label to anything currently unblocked.

Rules:
- One issue = one shippable unit of work.
- Imperative titles ("Add users table"); bodies include acceptance criteria.
- Never invent scope that isn't in the specs. If something's missing, ask me.
```
Security note (matches your guardrails): fine-grained PAT scoped to the single repo, Issues+Contents
read/write, short expiry, `GH_TOKEN` in `.env`, `.env` in `.gitignore`, never hardcode.
- [ ] Keep this prompt in your snippets; use it on the B1 project's `/docs`.

### Task B3 — Context discipline as a standing habit
- Size tickets to ≈ one context window (one shippable unit ≈ a few hours — the "3.5h block" heuristic).
- Start each build ticket in a **fresh session**; let `handoff.md` carry state (you already have the
  hook loop). Re-read the spec, don't re-derive it.
- Front of the flow you're missing: a **grill-then-PRD** step before building — interview yourself into
  alignment, write the PRD, *then* open the agent. (Equivalents already installed: brainstorming skill,
  `/plan`.)
- [ ] Trial on B1: one ticket = one fresh session, spec re-read at top.

### Task B4 — Single-source-of-truth + pre-empt-the-bug habits (from the map build)
- Day one of any project: name the **single source of truth** (one data file / one store) and never let
  state leak elsewhere. Portfolio already does this (`src/data/*.ts`) — keep it as a rule.
- Maintain a short **"known failure modes"** list per stack and put them in the build prompt up front
  (the map's stacked-pin fix saved a debug round-trip; your equivalent: `overflow-x: clip` for sticky,
  reveal-opacity screenshot artifact, space-in-path breaks `npx next lint` → use `pnpm lint`).
- [ ] Start a `docs/known-failure-modes.md` you append to as you hit + solve each one.

---

## Self-review (gaps + honesty)
- This plan is **advisory + light-implementation**, not TDD-step granularity — most tasks are doc
  authoring + process change, not testable code. The only build-affecting task is **A3** (delete navy
  tokens), which is guarded by build+typecheck.
- Part B applies to *future* projects; nothing here changes the portfolio except A1-A4.
- Open decisions for you: (1) A3 delete vs quarantine; (2) whether to do the A4 section pass now or
  after the next feature; (3) whether Part B is worth formalizing now or when you start the next site.

## Suggested order if you want to start small
1. **A3** (5 min, removes a real contradiction) →
2. **A1 + A2** (the DESIGN.md + drift log — the compounding asset) →
3. **A4** one section as a trial →
4. **Part B** when you open the next greenfield project.
