# Session — 2026-09-11 — Date hydration fix

## Goal
Find and fix the exact server/client text mismatch behind production React error 418 after the featured-project release.

## What was done (concrete one-liners)
- Reproduced the hydration error on the custom domain after PR #36 and disproved the Analytics-only hypothesis.
- Compared normalized server-rendered Home text from local production and Vercel → first difference was `February 2025` locally versus `March 2025` on Vercel for `2025-03-01`.
- Made date-only essay formatting timezone-independent with `timeZone: 'UTC'` → `src/lib/utils.ts`.
- Added a Chile-timezone regression that fails under the old implementation and expects `March 2025` → `src/lib/utils.test.ts`.
- Rebuilt and compared local/Vercel server text → exact equality, with no February/March drift.
- Passed `pnpm lint`, `npx tsc --noEmit`, `pnpm test` (10 tests), and `pnpm build` (58 routes); local production hydrates without React error 418.

## Files changed
- `src/lib/utils.ts` — deterministic UTC month/year formatting for date-only values.
- `src/lib/utils.test.ts` — timezone regression coverage.
- `docs/handoff/.current-session` — points hooks to this corrective session.
- `docs/handoff/HANDOFF.md` — records the disproven hypothesis and verified root cause.

## Failed attempts
- PR #36's consistent Analytics mount was a sound integration cleanup but did not remove hydration error 418; the follow-up server-text diff isolated the actual date mismatch.

## Next steps
- Ship the focused date fix through hosted checks, then confirm the custom-domain console is clean.

## Files in this folder
- `HANDOFF.md` — this file (curated digest).
