# Notes — Deep Review of 4 Sources (2026-06-23)

> Source material you handed me, distilled. Each note ends with **→ For you:** = what it means
> specifically for Richard's portfolio + website/systems work. Read this first, then the PLAN file.

## The 4 sources at a glance

| # | Source | Theme | Core claim |
|---|--------|-------|-----------|
| 1 | Nelson Lee — *Why Your Website Looks AI Generated* | **Design** | AI sites look generic because you gave the model nothing to decide from. Make the design decisions yourself, write them in 2 files, hand them over. |
| 2 | Nelson Lee — *From Spec to Backlog* | **Process** | Don't one-shot. Write the spec first (Claude Desktop), break it into GitHub epics→issues→sub-issues, execute one ticket at a time. |
| 3 | Nelson Lee — *Build an Interactive Map of Anything* | **Pattern** | One `index.html` + one `data.json` (single source of truth) + free stack (MapLibre/OpenFreeMap). Put the known failure mode (stacked pins) in the prompt up front. |
| 4 | Anthony — *Actually building with AI* (OpenCode workflow) | **Process** | Context is everything. Keep sessions < ~100k tokens. Persist decisions to markdown. grill-with-docs → to-prd → handoff. |

---

## THEME A — Design (the portfolio)

### A1. "AI-generated" = a pile of defaults
The model reaches for the safest default when you give it nothing: purple gradient hero, everything
centred, three identical cards with soft shadow, a font nobody chose. The fix sits **upstream of the
prompt** — decide first, write it down, then the model has answers and stops guessing.
→ **For you:** Your portfolio already dodged the worst of this (editorial serif, green/gold, light base,
no-navy rule). But the *mechanism* Nelson describes — a written taste file the model obeys — you only
have **partially** (scattered across CLAUDE.md + rules/). You don't have one consolidated DESIGN.md.

### A2. Two files do the work — BrandGuidelines.md + Design.md
- **BrandGuidelines.md = the values.** Locked palette (1 brand colour + 1 accent + muted tertiaries),
  type scale with real relationships, spacing scale, border-radius. Tokens, not vibes.
- **Design.md = the reasoning + taste.** The Do / Don't rules. "Buttons sharp-edged, never rounded."
  "Shadows off, elevation from colour." "Cards bleed to the edge, never float in a box." This is the
  file most people skip and it does the heavy lifting.
→ **For you:** Your `globals.css @theme` already IS a BrandGuidelines (good tokens). What's missing is
the **Design.md taste file** — the explicit Do/Don't that stops drift. Right now those rules live as
bullet points in CLAUDE.md ("no navy, no Inter, mobile-first") but not as a per-component taste record.

### A3. The Drift Loop — the compounding asset
Don't regenerate the whole site (you lose the parts that worked). Go **section by section** (hero → nav →
cards → …), review each against your 2 files before moving on. **Every time the model deviates, you
found a missing rule** — append the correction to Design.md ("buttons never use border-radius above
4px"). After a few passes Design.md stops being a style guide and becomes a record of every taste
decision you've made. That's the real asset.
→ **For you:** This is the single most useful idea for the portfolio. You've already been doing an
informal version (the Skills cards: editorial → "too meh" → back to 3 bold cards). Capturing those
verdicts in a Design.md means you never re-litigate them, and the next page inherits the taste.

### A4. Three stealable systems (Mercury / Apple / Oryzo)
Nelson ships 3 full Design.md references. The pattern worth stealing is the **structure**, not the
palettes (his are dark/navy/cream — wrong for you). Each file has: Theme sentence → Color tokens (with
a *Role* per colour) → Typography (named roles + substitute fonts + sizes/leading/tracking) → Spacing →
Border-radius per element → Components (role + exact spec) → **Do's & Don'ts** → Surfaces → Elevation →
Imagery → Layout → Agent Prompt Guide (quick colour ref + example component prompts) → Similar Brands.
Common thread across all three: **zero box-shadows, elevation from colour, one accent used rarely,
restraint.** That matches your no-navy/editorial direction.
→ **For you:** Adopt the *table of contents*, not the colours. A "Role" column on every colour token is
the upgrade your `@theme` block is missing — it currently lists values without saying where each is
allowed.

### A5. Dead defaults still lurk
Even a good token file can carry a landmine. Your `@theme` still defines a full **dark navy palette**
(`--color-d-bg: #091233` …) that CLAUDE.md explicitly bans and nothing renders. It's exactly the kind
of "default the model reaches for" Nelson warns about — a future agent could wire it in.
→ **For you:** Either delete those dark tokens or move them behind a clearly-labelled "DO NOT USE —
archived" comment. Right now they're a quiet contradiction between your tokens and your rules.

---

## THEME B — Process (websites + other systems)

### B1. Use the agent LESS, not more
The headline counter-intuitive claim (source 2): one-shotting a whole app looks great on TikTok and
collapses on a real codebase — the model guesses structure, touches 40 files, you spend a day
untangling. The fix is pointing it at **one small, well-defined problem at a time.**
→ **For you:** Your portfolio sessions already drifted toward big multi-file passes (palette migration
across 6 pages, parallel sessions colliding on the same working tree). The "one ticket at a time"
discipline is the antidote.

### B2. Spec first, in a fresh high-context session
Write the spec *before* touching Claude Code, in Claude Desktop/Opus. Several markdown docs, one per
concern: `database.md`, `api.md`, `ui-ux.md`, `architecture.md`. "Thin specifications, thin backlog."
The hard design decisions get made in writing, before any code exists.
→ **For you:** You already do a version of this — `docs/PRD.md`, `ARCHITECTURE.md`, `CLAUDE.md`. The
upgrade is splitting by *concern* and treating them as the contract the backlog is generated from.

### B3. Spec → GitHub backlog (epics → issues → sub-issues), staged
Connect Claude Code to GitHub (fine-grained PAT, single repo, Issues+Contents, short expiry, `GH_TOKEN`
in `.env`, never hardcode). Then generate the backlog **in phases, pausing for approval**: epics →
issues → sub-issues → ordering. Two rules: (1) don't one-shot the breakdown, run in plan mode; (2)
**order by build order, not document order** — schema/migrations first, then services/API, then UI.
One issue = one shippable unit. Imperative titles. Bodies carry acceptance criteria. Never invent scope.
→ **For you:** This is the biggest workflow win for "other systems." You have the GitHub MCP connected
already. The full staged prompt is reproduced in the PLAN file so you can paste it.

### B4. Context discipline (source 4)
Quality degrades around 100–120k tokens ("the dumb zone"). Keep sessions fresh; persist assumptions,
decisions, coding style, requirements to markdown any agent can re-read. Flow: **grill-with-docs**
(interview yourself into alignment) → **to-prd** (turn the interview into a PRD) → start a *fresh*
session to build → **handoff** (compact-with-steroids) when context fills.
→ **For you:** You already have the machinery for this — the `handoff.md` loop + compaction hooks +
30%-remaining warnings. What you're missing is the *front* of the flow: a grilling/PRD step before
building, so you start from alignment instead of a vague idea. (One commenter runs 3.5-hour work
blocks ≈ one context window — a useful unit to size tickets by.)

### B5. Single source of truth (source 3)
The map app's whole architecture is "`data.json` is the single source of truth — sidebar, pins, counts
all read from that one file. To add a point you edit JSON, nothing else." Keep that rule and the
project stays simple no matter how big it grows. Also: **put the known failure mode in the prompt up
front** (the stacked-pin fix) to save a debugging round-trip; serve over http not file://.
→ **For you:** Your portfolio already follows this (content in `src/data/*.ts`). The transferable habit
for future sites: name the single source of truth on day one and never let state leak elsewhere. And
keep a list of "known failure modes to pre-empt in the prompt" per stack.

---

## The one-line synthesis
**Decisions, written down, are the leverage.** Design drift and code chaos are both the same failure —
the model guessing because you didn't decide. Source 1 fixes it for pixels (Design.md + drift loop),
sources 2/4 fix it for systems (spec → staged backlog, fresh context), source 3 shows the minimal shape
(one source of truth + pre-empt the known bug). You already own ~70% of the machinery; the gap is a
consolidated taste file and a spec-first/one-ticket habit.
