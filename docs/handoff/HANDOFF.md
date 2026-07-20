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

## Current state — 2026-07-20

**Voidscape rename + in-progress tags + Foglamp codebase-map scans shipped: PR #26 opened against `main`.** Fixed the ScoutLane home/gallery thumbnail (had regressed to a vertical crop; restored the original horizontal `public/images/scoutlane.png` from commit `2b0f622`). Renamed the read-video project to Voidscape end-to-end in `src/data/projects.ts` + `projects-es-overlays.ts` (slug, title, GitHub URL `RikepilB/void-scape`, demo URL, overview/conclusion copy) to match the already-renamed local + GitHub repo. Added `Project.inProgress` and tagged Voidscape, FindLeads, Peru Grid, ScoutLane, ExamVault with a small "IN PROGRESS" pill on home and gallery cards. Drafted an X post about portfolio v1 (delivered in chat only). With explicit user consent, ran Foglamp AI architecture scans on 4 sibling repos (void-scape, peru-tech-map, ScoutLane-main, Examvault) via 4 parallel agents, published to foglamp.dev, screenshotted each via the Chrome extension, and added a "Codebase Map" README section to each of those 4 repos (uncommitted there — sitting on top of large pre-existing unrelated dirty state in those repos, left for the user to decide). Added `Project.codebaseMapUrl` + a "Codebase Map" button on the case-study page for those same 4 projects, plus the scan screenshot in each project's gallery. Ran `/gsd-ship`: independent code-review agent found no issues; committed `630df7b`; pushed `feat/portfolio-additions`; opened PR #26 (https://github.com/RikepilB/Portlio/pull/26). Note: `pnpm build` currently fails on a pre-existing Tailwind/PostCSS bug unrelated to this change (reproduced identically after `git stash` on `main`) — flagged in the PR body, not fixed.

**Verification update:** merge conflicts with `main` were resolved while preserving the Voidscape data, home order, horizontal ScoutLane image, and append-only handoff history. `pnpm lint`, `npx tsc --noEmit`, and a clean tracked-tree `pnpm build` all pass. The earlier Tailwind crash was traced to untracked transcript exports containing Windows path escapes, not repository code.

## Previous state — 2026-07-18 (later)

**ScoutLane + FindLeads + read-video audited and refreshed, home showcase re-curated — merged to `main` via PR #25 (`2a1168c`).** Standing session `/goal`: check ScoutLane/read-video/FindLeads, get all up to date with real images, showcase the best/most recent on home. Ran 3 parallel Explore agents against the sibling repos, verified every claim directly (ran real test suites, checked real DB, took real screenshots) rather than trusting stale docs. ScoutLane: current screenshot (`public/images/scoutlane.png`), verified 236 tests/36 files, refreshed stack (Auth.js RBAC, pg-boss async workers, Resend, GCS, webhooks). FindLeads: promoted `coming-soon` → `shipped` (27/27 requirements confirmed, 123 tests/24 files verified), got a real screenshot by running the app locally against its actual provisioned Neon DB (`public/images/findleads.png`). read-video: test count corrected 120→110, noted the live landing page's "Voidscape" rebrand. Home `featuredSlugs` re-curated to `findleads, peru-tech-map, read-video, el-umbral, scoutlane-recruitment, exam-analysis-system` (dropped the 2024-era `bike-share-optimization` and `empenalo-fintech`). lint/tsc/build all green. Committed `8347466`, merged forward past PR #24's squash landing on main (`1a3d2bb`, 5 files — verified each conflict was ours-strictly-superset before resolving), pushed, PR #25, CI green (CodeRabbit/Vercel/build), squash-merged to `main` at `2a1168c`.

## Previous state — 2026-07-18

**read-video shipped + home reorder — merged to `main` via PR #24 (`e060d42`).** Read the sibling `PROYECTOS/read-video` repo (it had a prewritten `docs/portfolio-entry.md` update, used as source of truth). `src/data/projects.ts` id `14`: `status: 'shipped'`, added `image`/`images` (`public/images/read-video.gif`, copied from the repo's demo gif), `demoVideo` → live GitHub Pages link (`https://rikepilb.github.io/read-video/`), added Phase 4 (Build Week: agent protocols, adversarial review, security disclosure), updated numbers (1,300-line engine, 120 tests/17 files, 60+ commits). Matching Spanish translation added to `projects-es-overlays.ts`. Home `featuredSlugs` reordered so `peru-tech-map` sits before `el-umbral`. Committed on `feat/portfolio-additions`, pushed, PR #24 opened against `main`; `origin/main` had since gained PR #23 (About bios) so `feat/portfolio-additions` was merged forward (`git merge origin/main`) to resolve — conflicts were only in `docs/handoff/HANDOFF.md` and the read-video `status` field (both trivially "ours wins, theirs was stale/superseded"); `page.tsx` auto-merged a duplicate `peru-tech-map` entry, hand-fixed. lint/tsc/build all green post-merge. CI passed (CodeRabbit, Vercel, build), PR #24 squash-merged to `main` at `e060d42`; Vercel prod deploy auto-triggered.

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

- [2026-07-20-voidscape-rename-foglamp-scans](2026-07-20-voidscape-rename-foglamp-scans/HANDOFF.md) — ScoutLane thumbnail fix, read-video renamed to Voidscape (EN/ES), in-progress tags on 5 projects, Foglamp codebase-map scans on 4 sibling repos wired into case studies + those repos README; PR #26 opened against main
- [2026-07-18-read-video-portfolio-entry](2026-07-18-read-video-portfolio-entry/HANDOFF.md) — `/goal`: audited ScoutLane/read-video/FindLeads live, verified real numbers + screenshots, FindLeads shipped, home showcase re-curated; PR #25 merged to main (`2a1168c`)
- [2026-07-18-read-video-portfolio-entry](2026-07-18-read-video-portfolio-entry/HANDOFF.md) — read-video shipped (live demo, gif, Build Week Phase 4, EN+ES) + home reorder; committed `d2a45b9`, merged forward with PR #23, PR #24 opened
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

## Session index

- 2026-07-18 13:41 - Codex export 019f64cf-81eb-7050-b7f3-c43f80156902: [2026-07-18-codex-019f64cf81eb](2026-07-18-codex-019f64cf81eb/HANDOFF.md). Archivo de contexto; no reemplaza Current state.
- 2026-07-18 13:41 - Codex export 019f64cf-81c5-73c2-9ec3-b4ecedad6ad5: [2026-07-18-codex-019f64cf81c5](2026-07-18-codex-019f64cf81c5/HANDOFF.md). Archivo de contexto; no reemplaza Current state.
- 2026-07-18 13:41 - Codex export 019f64cf-81df-7c83-bbf8-20dfb1ebb36c: [2026-07-18-codex-019f64cf81df](2026-07-18-codex-019f64cf81df/HANDOFF.md). Archivo de contexto; no reemplaza Current state.
- 2026-07-18 13:41 - Codex export 019f64cf-9b5f-7a32-909e-eb45e7982933: [2026-07-18-codex-019f64cf9b5f](2026-07-18-codex-019f64cf9b5f/HANDOFF.md). Archivo de contexto; no reemplaza Current state.
- 2026-07-18 13:41 - Codex export 019f64cf-e6b1-73e2-9d97-d073ca7c06cb: [2026-07-18-codex-019f64cfe6b1](2026-07-18-codex-019f64cfe6b1/HANDOFF.md). Archivo de contexto; no reemplaza Current state.
- 2026-07-18 13:41 - Codex export 019f64cf-f256-7b93-8c3d-63a82f3b6e3d: [2026-07-18-codex-019f64cff256](2026-07-18-codex-019f64cff256/HANDOFF.md). Archivo de contexto; no reemplaza Current state.
