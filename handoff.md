# Goal
Pick and execute the next roadmap phase from `docs/plans/2026-06-23-ROADMAP-perfect-portfolio.md`. Three candidates: Phase 0 (DESIGN.md + kill navy tokens), Phase 2 (essays MDX content), Phase 3 (interactive bike-share map).

## Current state
- Branch: `feat/ui-polish-pass`
- PR #4 open (`96d97b9` hero copy fix) — NOT merged yet, user reviewing
- Build last known green (tsc clean at `96d97b9`)
- This session: ran `/setup-pm` only. Confirmed `.claude/package-manager.json` already exists with `{"packageManager": "pnpm"}` — correct, matches `pnpm-lock.yaml` + CLAUDE.md. No code changed.

## Files in flight
None. Planning artifacts in `docs/plans/` are complete drafts (untracked, not committed).

## Changed
None this session. Prior shipped work:
- `96d97b9` — hero copy tightened + QA fixes (PR #4, open)
- `9e61490` — resume side-by-side on journey + bolder Skills cards
- `f5712d0` — editorial polish pass across portfolio

## Failed attempts
- PowerShell `git commit -m @'...'@` here-string mangled commit message into pathspecs. Fix: write to temp file → `git commit -F`. utf8 `Out-File` adds BOM to subject — strip or fix via `gh pr edit --title`.
- `/setup-pm` references `scripts/setup-package-manager.js` — file does not exist in this repo. Don't try to run it; config is already hand-set correctly in `.claude/package-manager.json`.

# Next steps
1. Merge PR #4 (or confirm user wants to skip)
2. Execute Phase 0: create `docs/DESIGN.md` taste file + delete dead navy tokens from `globals.css` (`--color-d-bg`, `--color-d-surface`, `--color-d-text`, `--color-d-border`)
3. After Phase 0: spec Phase 2 (essays) — decide MDX files vs `body` field in `essays.ts` before writing content
