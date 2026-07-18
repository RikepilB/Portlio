# Portfolio — Handoff (father)

**Read this first.** Whole-project handoff. Freshest state on top, then an append-only
index of every session folder. Nothing here is ever deleted — full prose lives in each
session's own `HANDOFF.md`; this file is the map.

## How this works (tree of context)

```
docs/handoff/
  HANDOFF.md                  ← this file (father): rolling current state + session index
  .current-session            ← pointer: active session folder name (used by the hooks)
  _meta/TEMPLATE.md           ← per-session template
  <YYYY-MM-DD>-<name>/        ← one immutable folder per session
    HANDOFF.md                ← session digest: goal · done · files · failed · next
    transcript.md             ← optional full /export archive
```

**Rules:** append, never overwrite. Only the father's `## Current state` is replaced each
session. Solved tasks → one concrete one-liner (file / PR / command).

---

## Current state — 2026-07-18

**read-video promoted from "coming soon" to shipped — still uncommitted on `feat/portfolio-additions`.** Read the sibling `PROYECTOS/read-video` repo (it had a prewritten `docs/portfolio-entry.md` update, used as source of truth). `src/data/projects.ts` id `14`: `status: 'shipped'`, added `image`/`images` (`public/images/read-video.gif`, copied from the repo's demo gif), `demoVideo` → live GitHub Pages link (`https://rikepilb.github.io/read-video/`), added Phase 4 (Build Week: agent protocols, adversarial review, security disclosure), updated numbers (1,300-line engine, 120 tests/17 files, 60+ commits). Matching Spanish translation added to `projects-es-overlays.ts`. lint/tsc/build all green. Still carries forward all prior uncommitted dirty work from 2026-07-15 (Coming soon IA, mockup blend, hydration quieting) — nothing has been committed/pushed yet on this branch across any of these sessions.

## Previous state — 2026-07-15 (later)

**Coming soon IA + mockup blend + hydration quieting — still uncommitted on `feat/portfolio-additions`.** Shipped earlier: About bios (`b1cdc27`/`5fce9ae`, PR #23, prod). Local dirty work now includes: Coming soon bucket (AquaTwin concept-only, FindLeads, read-video, ResumeScorer, Skills Lab, SkillVault, **VANS** without unrelated `mainpage.jpg`); Peru Grid screenshot + home featured; placeholder badge junk removed; home/project cards use `object-contain` + soft CSS `mask-image` blend into felt; Grammarly body hydration suppressed (`layout.tsx`) + Reveal `useSyncExternalStore`. Mist wipe still paused. Await commit/push of the dirty set.

## Previous state — 2026-07-15

**About bios restored and shipped; Coming soon + Peru Grid changes coded, not fully shipped.** Long-form EN/ES About bios fixed after handoff-paste corruption (`b1cdc27` + `5fce9ae` on `feat/portfolio-additions`; PR #23; prod deploy to richardpillaca.com for the bio/frame ship). Newest local work (uncommitted): `status: 'coming-soon'` for AquaTwin (concept-only), FindLeads, read-video, ResumeScorer, Agentic Skills Lab, SkillVault; Projects page Coming soon section; placeholder badges/numbers removed; Peru Grid screenshot at `public/images/peru-grid.png` + home featured row + live demo. Branch: `feat/portfolio-additions`. lint/tsc/build green on latest verify. Mist wipe still paused.

## Previous state — 2026-07-14 (later)

**Project-detail readability fixed + greener image frames; awaiting go-ahead to commit/ship.** User reported project case-study pages still looked dark/unreadable and asked for greener project-image frames on the home page. Root cause: the felt/gold text re-skin was already committed (`a540de8`) but only on `feat/portfolio-additions`, never merged to `main` — the live site was still serving the old pre-fix build. Browser-verified (Playwright via `localhost`, not `127.0.0.1` — that origin blocks the dev HMR websocket and causes spurious full-page reloads) that `/projects`, home "My work", and several case studies already render readable light text on felt. Added `--color-felt-frame` (#3c4f42) token + retinted `project-placeholder-wash` so project image frames (`ProjectCard.tsx`, `ProjectImagePlaceholder.tsx`, home `ProjectRow` in `[locale]/page.tsx`) read as distinct green frames instead of blending into the page bg. lint/tsc/build all green. Also found and reverted unrelated pre-existing uncommitted corruption in `src/i18n/dictionaries/en.ts` (garbled About-bio text, not from this session) — left reverted, not fixed, flagged to user. **Nothing committed yet this pass** — awaiting user decision on commit + push + merge-to-main (auto-deploys).

## Previous state — 2026-07-14

**Full EN/ES i18n shipped locally (uncommitted).** Site routes under `/en` and `/es` via `src/middleware.ts` + `src/app/[locale]/`. Navbar has EN|ES switch (`LocaleSwitcher`); dictionaries cover UI chrome; Spanish content for 17 projects, experience, and essays. About local bio toggle removed — language is site-wide. `pnpm lint` / `tsc` / `build` green (56 pages); `pnpm dev` at http://localhost:3000. Branch: `feat/portfolio-additions`. **Not committed yet.**

**Prior (same branch, still relevant):** Felt/gold re-skin + nav/postcard/case-study fixes done earlier; OG image at `public/images/og-image.png` (non-1.91:1 crop decision still open). Mist wipe still paused. PR #22 (case studies) already on `main`.

---

## Session index (append-only, newest first)

- [2026-07-18-read-video-portfolio-entry](2026-07-18-read-video-portfolio-entry/HANDOFF.md) — read-video promoted to shipped: live demo link, gif thumbnail, Build Week Phase 4, updated numbers (EN + ES); lint/tsc/build green; uncommitted
- [2026-07-13-claude-harness-fix](2026-07-13-claude-harness-fix/HANDOFF.md) — VANS→coming soon (dropped unrelated image); Grammarly body hydration silenced + Reveal reduced-motion fix; home/card mockups `object-contain` + soft edge mask blend (uncommitted)
- [2026-07-13-claude-harness-fix](2026-07-13-claude-harness-fix/HANDOFF.md) — About bios restored/shipped (`b1cdc27`/`5fce9ae`, PR #23, prod); Coming soon IA + AquaTwin concept-only; Peru Grid screenshot on home; placeholder badge junk removed (latest code mostly uncommitted)
- [2026-07-13-claude-harness-fix](2026-07-13-claude-harness-fix/HANDOFF.md) — project-detail readability root-caused as a deploy gap (fix already in `a540de8`, unmerged); added `--color-felt-frame` token, greener project-image frames on cards/placeholder/home; lint/tsc/build green; nothing committed, awaiting ship go-ahead
- [2026-07-13-claude-harness-fix](2026-07-13-claude-harness-fix/HANDOFF.md) — full EN/ES i18n: `[locale]` routes, navbar EN|ES switch, Spanish projects/experience/essays overlays, build green, `pnpm dev` running
- [2026-07-13-claude-harness-fix](2026-07-13-claude-harness-fix/HANDOFF.md) — nav two-clicks/empty-page fixed (`template.tsx`); About mist→felt/gold + gold "Who are you?" + board hint; PostcardModal portal fix + enlarge; case-study page felt/gold re-skin + removed "4→8/10" metrics; home headings uniform white + 2-col skills intro; social icons brightened; Bug-1 verified not-real
- [2026-07-13-claude-harness-fix](2026-07-13-claude-harness-fix/HANDOFF.md) — OG/social share image added (`public/images/og-image.png` + `layout.tsx` metadataBase/openGraph/twitter); `/gsd-ship` blocked (no `.planning/`), handoff docs committed instead (`52ece8b`)
- [2026-07-13-claude-harness-fix](2026-07-13-claude-harness-fix/HANDOFF.md) — PR #22 CI fix (pinned `packageManager: pnpm@10.30.3`), commit `23d24c6`, CI green, squash-merged to `main`, prod deploy triggered
- [2026-07-13-claude-harness-fix](2026-07-13-claude-harness-fix/HANDOFF.md) — nav two-clicks/empty-page bug fixed via `template.tsx` (deleted PageTransition); About re-skinned mist→felt/gold + gold "Who are you?" heading + board hint; home headings uniform white; Bug-1 verified not-real
- [2026-07-13-claude-harness-fix](2026-07-13-claude-harness-fix/HANDOFF.md) — global ScrollProgress + BackToTop + PageTransition; shared Reveal site-wide; projects filter AnimatePresence; silver-foil readability; discipline filters + placeholders
- [2026-07-13-claude-harness-fix](2026-07-13-claude-harness-fix/HANDOFF.md) — scrapbook interleave (text+images), SectionLabel stickers, UK/Toronto mid-crops, final bio; mist wipe + gsd-debug still waiting
- [2026-07-13-claude-harness-fix](2026-07-13-claude-harness-fix/HANDOFF.md) — bio rewrite (EN/ES + line-clamp), 4-col board rebalance, travel object-bottom crops, more community dark/light cards; mist wipe still paused
- [2026-07-13-claude-harness-fix](2026-07-13-claude-harness-fix/HANDOFF.md) — About board polish: BrainTrainr/Alianza polaroids, object-top faces, mist bg + ink title, longer bio, education contrast, denser collage; mist wipe still paused
- [2026-07-13-claude-harness-fix](2026-07-13-claude-harness-fix/HANDOFF.md) — Phase 1 Communities vision board implemented; mist wipe paused for review
- [2026-07-13-claude-harness-fix](2026-07-13-claude-harness-fix/HANDOFF.md) — vision board + mist-wipe design/plan written; execution pending
- [2026-07-13-claude-harness-fix](2026-07-13-claude-harness-fix/HANDOFF.md) — About vision board + home mist-scroll brainstorm started; priority A/B/C awaiting user; no code
- [2026-07-13-claude-harness-fix](2026-07-13-claude-harness-fix/HANDOFF.md) — Phase 0–5 felt/gold redesign executed: docs reorg, v2 restore, canon rewrite, tokens/nav, page re-skins, build green, local review URL ready
- [2026-07-13-claude-harness-fix](2026-07-13-claude-harness-fix/HANDOFF.md) — velvet v3 rejected on review; new felt/gold direction from `gemini-code-1783950*` adopted; v2 structure to be restored (no Skills/Resume tabs, redirects); framer-motion + shadcn/ui approved; skill-gated plan at `.cursor/plans/felt_and_gold_redesign_87a3c14f.plan.md` awaiting approval
- [2026-07-13-claude-harness-fix](2026-07-13-claude-harness-fix/HANDOFF.md) — harness fixed (`91ead58`); Gemini inputs audited; immersive velvet-charcoal/copper redesign selected for Home, Projects, Journey, and an existing-media About vision board; canonical v3 docs, source-input rename, harness update, and implementation plan pending
- [2026-06-30-scaffold-and-handoff-migration](2026-06-30-scaffold-and-handoff-migration/HANDOFF.md) — ran `project-scaffold` + migrated legacy `handoff.md`; deep-catch-up roadmap briefing; added El Umbral project (`7259831`) and updated résumé PDF + journey/embedded data (`0e48ad9`); mirrored next-steps to GitHub issues #11–#15; tested + pushed both branches and opened PR #16, PR #17; reordered home "My Work" to 5 newest projects + gave El Umbral an image (`602a52a`, `44125e0`, not pushed)

<!-- compact-handoff:auto-snapshot -->
<!-- Latest auto-snapshot: docs/handoff/2026-07-02-98bb9341/snapshot-002022.md -->
## Latest auto snapshot — 2026-07-02T00:20:22.015Z
- Session folder: `docs/handoff/2026-07-02-98bb9341/`
- Snapshot file: `docs/handoff/2026-07-02-98bb9341/snapshot-002022.md`
- Branch: main
