# Session — 2026-07-18 — read-video-portfolio-entry

## Goal
Read the `read-video` project (sibling repo `PROYECTOS/read-video`) and update its portfolio
entry with the live demo (https://rikepilb.github.io/read-video/), details, and a picture — bring
it out of "coming soon."

## What was done (concrete one-liners)
- Found `read-video` already had a prewritten, ready-to-paste update at `docs/portfolio-entry.md`
  (current numbers: 1,300-line engine, 120 tests/17 files, 60+ commits, Build Week Phase 4) →
  used it as the source of truth instead of re-deriving content.
- Copied `read-video/assets/demo.gif` → `Portfolio/public/images/read-video.gif` as the project
  picture/thumbnail.
- Updated `src/data/projects.ts` id `14` (`read-video`) → `status: 'shipped'`, added
  `image`/`images` (the gif), `demoVideo: 'https://rikepilb.github.io/read-video/'`, added
  Phase 4 methodology (Build Week: agent protocols, adversarial review, security disclosure),
  updated stats/results/keyFindings/conclusion to match the current repo state.
- Updated `src/data/projects-es-overlays.ts` `'read-video'` key with a matching Spanish
  translation of all the above (overview, problem, questions, methodology Phase 4, results,
  keyFindings, conclusion).
- Verified: `pnpm lint` clean, `npx tsc --noEmit` clean, `pnpm build` green (56 pages, no errors).

## Files changed
- `src/data/projects.ts` — read-video entry (id 14): shipped status, image/images/demoVideo, Phase 4, updated numbers
- `src/data/projects-es-overlays.ts` — read-video Spanish overlay: matching Phase 4 + numbers translation
- `public/images/read-video.gif` — new, copied from read-video repo's `assets/demo.gif`

## Failed attempts
None.

## Update — home order swap + ship (same session, follow-up turns)

- User asked to also put `peru-tech-map` above `el-umbral` on the home page → swapped the two
  entries at the top of `featuredSlugs` in `src/app/[locale]/page.tsx` (only occurrence of that
  list in the codebase, checked). lint/tsc re-verified clean.
- User ran `/gsd-ship "commit, push and ship"`. `gsd_run query init.phase-op` returned
  `phase_found: false`, `roadmap_exists: false` — this repo has no `.planning/ROADMAP.md`/phase
  artifacts, so the GSD phase-based ship workflow doesn't apply here (same blocker hit previously
  in the sibling `read-video` repo). Fell back to the plain-language ask in the command args:
  manual commit → push → PR → merge-when-green.
- Before committing, diffed `src/data/projects.ts` / `projects-es-overlays.ts` / `page.tsx`
  against `origin/main` to confirm the local branch (which already has a prior merge commit
  `a84a5e9` resolving PR #23 conflicts) wasn't stale or about to clobber anything — diff was clean,
  isolated to the intended read-video + ordering changes.
- Committed `d2a45b9` on `feat/portfolio-additions` (7 files: projects.ts, projects-es-overlays.ts,
  page.tsx, read-video.gif, handoff tree). Left `.agents/`/`.codex/` untracked dirs alone —
  pre-existing, unrelated to this session.
- Pushed, opened **PR #24**: https://github.com/RikepilB/Portlio/pull/24 (base `main`).
- User said "merge when read[y]" → started a background poll (`gh pr checks 24`) that waits for
  all checks to resolve, then squash-merges automatically if everything passes (`gh pr merge 24
  --squash`), matching the repo's existing squash-merge convention (see `875e182 (#23)` on
  `main`). Still running as of this handoff update — **not confirmed merged yet**.

## Update — merge conflict found and resolved (same session, follow-up turn)

- First background checks/merge attempt failed: PR #24 was not mergeable (`origin/main` had
  advanced with PR #23 after this branch was created; not a checks failure).
- `git fetch origin main` + `git merge origin/main` on `feat/portfolio-additions` surfaced real
  conflicts:
  - `src/data/projects.ts` — read-video `status` field only (`'shipped'` vs `origin/main`'s
    untouched `'coming-soon'`); kept ours, origin/main simply predates this update.
  - `docs/handoff/HANDOFF.md` — both current-state and session-index sections; kept ours (a
    strict superset — origin/main's version was just missing this session's entries).
  - `src/app/[locale]/page.tsx` — auto-merged *without* conflict markers but produced a
    duplicate `'peru-tech-map'` entry in `featuredSlugs` (git's line-based merge doesn't
    understand list semantics: main had appended it at the end via PR #23, this session had
    already moved it to the front) — caught by reading the file, not by git, and hand-fixed by
    deleting the duplicate.
- Committed merge `cf92c6d` ("merge: resolve PR #24 conflicts with origin/main"), re-ran
  lint/tsc/build (all clean), pushed. `gh pr view 24` confirmed `mergeable: MERGEABLE`.
- Re-armed the same background checks-then-squash-merge watch for the new commit.

## Next steps
- **Check the second background PR-checks/merge task result (`b5mdnat57`)** — confirm PR #24
  actually merged this time. If checks failed, the script does NOT merge — surface the failure
  and fix instead of retrying blindly.
- If merged: verify the live prod deploy (richardpillaca.com) shows read-video as shipped and the
  peru-grid/el-umbral home order swap.
- Optional (carried over, not done): swap the gif thumbnail for a static screenshot of the
  GitHub Pages landing page — Next `Image` serves the gif as a static first frame on the card by
  default; full animation only shows via a plain `<img>` or `unoptimized`.

## Files in this folder
- `HANDOFF.md` — this file (curated digest)
- `transcript.md` — full `/export` of the session (raw archive) — not yet generated, remind user to run `/export docs/handoff/2026-07-18-read-video-portfolio-entry/transcript.md`
