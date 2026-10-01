# Goal
Refresh current public project screenshots in the English and Spanish portfolio.

## Current state
Release branch codex/refresh-project-images-20260930 is based on main f4c2859. Eleven production screenshots captured September 30, 2026 use dated filenames to refresh cached thumbnails. Gallery history is preserved, including projects that previously had only a thumbnail. User authorized commit, push, merge and deployment.

## Files in flight
src/data/locale.ts; src/data/project-images.ts; src/data/project-images.test.ts; public/images/projects/*-2026-09-30.jpg.

## Changed
The localized content loader applies the current screenshot to Home, project cards, case-study heroes and image metadata in EN/ES. Existing copy, catalog membership, page composition and historical screenshots are retained.

Capture sources:
- CrafterWIKI: https://crafterwiki.com
- Voidscape: https://voidscape.club/
- FindLeads: https://findleads-opal.vercel.app/jobs (run console; no lead contact rows)
- PeruGrid: https://www.perugrid.com/
- El Umbral: https://elumbralvzla.org/es
- ScoutLane: https://scoutlane.net/
- ExamVault: https://exam-vault-five.vercel.app/
- Empeñalo: https://empenalo.netlify.app/
- Space Apps Flightdeck: https://rikepilb.github.io/spaceapps-flightdeck/
- Canada Research Path PE: https://canada-research-path-pe.ridi-pillaca.chatgpt.site
- Reencuentro: https://reencuentros-terremoto-venezuela.vercel.app

Regression checks validate catalog membership, bundled files, shared EN/ES visuals and preservation of historical images.

## Failed attempts
Shared-checkout sandbox initially blocked subprocesses and font downloads; permitted checks passed. Clean release verification and hosted release gates are recorded in the PR.

# Next steps
Pass final PR checks; merge PR #49; verify production deployment and EN/ES desktop/mobile images. Local checks and the branch push are complete. Shared-checkout work is excluded.

## Local verification
pnpm lint -> npx tsc --noEmit -> pnpm build passed on the clean main-based worktree (72 generated pages). pnpm test passed 24/24 across six files, including screenshot catalog, bundled-asset and EN/ES historical-gallery checks.
