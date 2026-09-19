# Goal
Publish the approved five public projects in EN/ES; feature CrafterWIKI first in place of ExamVault. Preserve the other five home selections, the approved hero, and unrelated shared-checkout edits. Authorized workflow: PR and merge after checks pass.

## Current state
Implementation, local validation and responsive review complete in C:/pf on feat/crafterwiki-and-new-projects, based on ff1a9f2.

## Plan
1. Reconcile existing worktree and current public repository evidence.
2. Add five source-backed bilingual case studies, captured images and dated health entries.
3. Validate lint, TypeScript, production build, existing tests, and desktop/mobile routing.
4. Open PR, resolve review findings, merge with passing checks and verify production.

## Evidence
- https://github.com/RikepilB/crafterwiki — README and https://crafterwiki.com rendered 2026-09-19. No corpus-size or winning-odds claim copied.
- https://github.com/RikepilB/spaceapps-flightdeck — README and published field guide rendered. Preserve independent-community and native-discovery limitations.
- https://github.com/RikepilB/canada-research-path-pe — README and published guide rendered. This check confirms the project, not current scholarship eligibility.
- https://github.com/RikepilB/claude-skills-public — README and public source page rendered. Do not duplicate the existing personal Skills Lab or claim all harnesses load these skills.
- https://github.com/RikepilB/ReencuentroTerremotoVenezuela/commit/f975263b6ab63d6cd39c6262c2e7ece45873d70e — author's exact-origin CORS utility, tests and documentation changes verified by GitHub commit metadata. Public landing rendered; it produced backend-related console errors, so no end-to-end operational claim. The pasted prior PR attribution to crafterwiki/pull/14 was not reused.
- GitHub repository metadata confirms all five are public. Private projects remain excluded, as previously agreed.

## Files in flight
src/data/projects.ts, projects-es-overlays.ts, project-health.ts; src/app/[locale]/page.tsx; five public/images PNGs; this handoff.

## Changed
Five case studies and translations; real public-surface screenshots; dated availability records; CrafterWIKI first in the six home selections. ExamVault stays in the catalog.

## Failed attempts
Initial TypeScript check found missing catColor fields; added required fields. Initial tests caught missing project-health entries; supplied evidence-based EN/ES records. Neither test was weakened.

## Next steps
PR #46: complete the final check gate, merge and verify public production.

## Verification and release review
- PASS: pnpm lint, npx tsc --noEmit, pnpm build (72 routes), pnpm test (22 tests), git diff --check. Approved hero hash test passes.
- PASS: all ten new EN/ES routes respond 200 with loaded images, correct titles, no horizontal overflow, and no page errors at 1440px EN / 375px ES. CrafterWIKI home card click reaches the case study. Spanish catalog retains ExamVault and all five additions.
- Visual review: existing felt/gold card design retained; real project imagery, readable mobile wrapping, six home cards. Desktop and mobile screenshots saved beside this receipt locally. No redesign or new component library.
- Landing audit: existing sitemap derives both locales from project data; page metadata derives titles/descriptions and images. Existing contact/navigation preserved. Local Vercel Insights script returns 404 outside Vercel; no application page errors observed. Initial home captures preceded the reveal animation; recaptured after visibility settled.
- Production readiness: existing Vercel Analytics retained; no new forms, accounts, personal data collection or providers. Captcha is not applicable to these static additions. Existing deployment/rollback runbook: docs/ARCHITECTURE.md. No new policy decision introduced.

Review follow-up: corrected the father handoff section replacement and stale checkpoint wording. GitHub CI and Vercel preview passed for the implementation; preview browsing is protected by Vercel login.
