# Session — 2026-09-11 — Featured project refresh

## Goal
Refresh the portfolio's featured project images and source-backed details, then restore the landing-card technology pills and direct Details, Demo, Code, and Codebase map links that disappeared in the redesign.

## What was done (concrete one-liners)
- Audited Voidscape, FindLeads, Peru Grid, El Umbral, ScoutLane, and ExamVault against their current sibling repositories and live destinations → updated authoritative EN/ES project data in `src/data/`.
- Captured six current product covers plus the missing FindLeads Foglamp map and copied four current ExamVault source images → `public/images/projects/`.
- Restored Home-only stack pills and direct project actions while preserving whole-card links in the Projects gallery → `src/components/ui/ProjectCard.tsx` and `src/app/[locale]/page.tsx`.
- Changed case-study media from crop-to-fill to contained horizontal presentation → `src/app/[locale]/projects/[slug]/page.tsx`.
- Verified desktop 1440×1000 and mobile 390×844 rendering → six linked images, action counts `4/4/4/3/4/4`, 44px controls, no overflow, and zero browser-console errors.
- Passed the repository gate → `pnpm lint`, `npx tsc --noEmit`, `pnpm test` (9 tests), and `pnpm build` (58 routes).
- Resolved all three valid CodeRabbit findings → explicit per-project action labels, current ExamVault UI/chart technology names, and aligned Peru Grid dataset-contract text in EN/ES.

## Files changed
- `src/data/projects.ts` — current media, descriptions, metrics, stacks, project links, and codebase-map destinations.
- `src/data/projects-es-overlays.ts` — matching Spanish project content.
- `src/components/ui/ProjectCard.tsx` — optional Home action layout with stack pills and direct links.
- `src/app/[locale]/page.tsx` — enables action layout for featured Home cards only.
- `src/app/[locale]/projects/[slug]/page.tsx` — contained gallery media.
- `src/i18n/dictionaries/en.ts` and `src/i18n/dictionaries/es.ts` — localized action and accessibility labels.
- `public/images/projects/` — current project screenshots and gallery evidence.
- `docs/v3/branding.md` — anti-slop review evidence for the refresh.

## Failed attempts
- Playwright timed out on a full-section screenshot; viewport screenshots and DOM measurements completed the same visual verification.
- The command runner blocked deletion of untracked browser screenshots; they were kept out of the Git staging set.

## Next steps
- Merge PR #35 to `main` after the refreshed hosted checks pass, then verify the production deployment.

## Files in this folder
- `HANDOFF.md` — this file (curated digest).
