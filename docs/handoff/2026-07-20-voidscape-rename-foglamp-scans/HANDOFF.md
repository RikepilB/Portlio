# Session — 2026-07-20 — voidscape-rename-foglamp-scans

## Goal
Fix the ScoutLane thumbnail (reverted to a vertical crop), rename the read-video project to
Voidscape (repo/GH Pages renamed to void-scape), tag several projects "in progress" on the
landing page, draft an X post, then (separate ask) run a Foglamp AI codebase-architecture scan
across 4 active repos and wire the results into each repo's README and the portfolio's case
studies. Finished with `/gsd-ship`: review, commit, push, PR.

## What was done (concrete one-liners)
- Restored `public/images/scoutlane.png` to the original horizontal (1401×948) version from
  commit `2b0f622`, replacing the vertical crop that had regressed it.
- Renamed the read-video project to Voidscape across `src/data/projects.ts` and
  `projects-es-overlays.ts` (slug `read-video`→`voidscape`, title, GitHub URL
  `RikepilB/void-scape`, demo URL `rikepilb.github.io/void-scape`, overview/conclusion copy) —
  matched to the already-renamed local repo and GitHub repo.
- Added optional `Project.inProgress` field; tagged Voidscape, FindLeads, Peru Grid, ScoutLane,
  ExamVault with a small "IN PROGRESS" pill on home (`ProjectRow`) and gallery (`ProjectCard`).
- Drafted a short X/Twitter post about portfolio v1 (delivered in chat, not committed to repo).
- User consented (AskUserQuestion) to running Foglamp architecture scans on 4 repos: void-scape,
  peru-tech-map, ScoutLane (canonical folder = `ScoutLane-main`, branch `master`), Examvault.
  Ran 4 parallel general-purpose agents to investigate each repo and POST a scan to
  `api.foglamp.dev` → published: `foglamp.dev/scan/voidscape-8fd1nx`,
  `foglamp.dev/scan/peru-grid-cnhzyw`, `foglamp.dev/scan/scoutlane-shqt4o`,
  `foglamp.dev/scan/examvault-if3mpl`. Each repo's `.foglamp/scan.lock.json` (editToken) is
  gitignored.
- Screenshotted each scan via the Chrome extension, saved to each repo's `docs/foglamp-scan.png`,
  and added a "Codebase Map" README section (link + image) to all 4 repos.
- Added `Project.codebaseMapUrl` field + a "Codebase Map →" button on the case-study page
  (`projects/[slug]/page.tsx`), appended the scan screenshot to each project's `images[]` gallery,
  added `caseStudy.codebaseMap` i18n string (en/es) — for the same 4 projects.
- Ran `/gsd-ship`: independent code-review agent found no issues; committed `630df7b`; pushed
  `feat/portfolio-additions`; opened **PR #26**
  (https://github.com/RikepilB/Portlio/pull/26) against `main`.

## Files changed
- `src/data/projects.ts`, `src/data/projects-es-overlays.ts` — Voidscape rename, `inProgress`,
  `codebaseMapUrl` fields.
- `src/app/[locale]/page.tsx` — featured-slug rename, "IN PROGRESS" pill.
- `src/components/ui/ProjectCard.tsx` — "IN PROGRESS" pill.
- `src/app/[locale]/projects/[slug]/page.tsx` — "Codebase Map" button.
- `src/i18n/dictionaries/en.ts`, `es.ts` — `caseStudy.codebaseMap` string.
- `public/images/scoutlane.png` — reverted to horizontal version.
- `public/images/foglamp/{voidscape,peru-tech-map,scoutlane,examvault}.png` — new scan screenshots.
- Outside this repo: `void-scape/README.md`, `peru-tech-map/README.md`, `ScoutLane-main/README.md`,
  `Examvault/README.md` (+ each repo's `docs/foglamp-scan.png` and `.gitignore`) — **not committed**,
  left as local uncommitted edits sitting on top of large pre-existing unrelated dirty state in
  those repos (confirmed via `git status`); user was told and can ask for a narrow staged commit.

## Failed attempts
- `pnpm build` fails on a pre-existing Tailwind/PostCSS bug (`Invalid code point 10009491` in
  `globals.css` parsing) — reproduced identically after `git stash` on `main`, so it predates this
  session's changes. Not fixed (out of scope); flagged in the PR body for separate investigation.

## Next steps
- Investigate/fix the pre-existing `pnpm build` Tailwind/PostCSS crash (blocks local prod builds
  and likely Vercel deploys) — separate from this PR.
- Decide whether to commit the README/foglamp changes in void-scape, peru-tech-map, ScoutLane-main,
  Examvault (narrow `git add README.md .gitignore docs/foglamp-scan.png` per repo recommended,
  given the large unrelated dirty state already present).
- Merge PR #26 once reviewed.

## Files in this folder
- `HANDOFF.md` — this file (curated digest)
- `transcript.md` — full `/export` of the session (raw archive) — not yet generated, ask the user
  to run `/export docs/handoff/2026-07-20-voidscape-rename-foglamp-scans/transcript.md`
