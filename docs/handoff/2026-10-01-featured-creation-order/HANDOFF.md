# Goal
Replace FindLeads with AI Technical Debt on Home and order the six featured projects newest first by documented creation/start date.

## Current state
Scoped Home change prepared on codex/featured-creation-order, based on production main5e54c4e. Ordering uses src/data/projects.ts start months: CrafterWIKI Sep2026, Peru Grid Jul2026, Voidscape Jun2026, ScoutLane Apr2026, ExamVault May2025, AI Technical Debt Jan2025. ExamVault and Technical Debt occupy the bottom row. FindLeads remains in the full catalog with its existing demo link.

## Files in flight
src/app/[locale]/page.tsx featuredSlugs only; this receipt and father current-state pointer. Shared original checkout has unrelated dirty work; preserve it.

## Changed
Six featured cards retain their existing content, screenshots, case-study links and design. Approved hero preserved. EN/ES share the same ordered list.

## Failed attempts
Web reader could not access the linked public case study; repository content is authoritative and browser verification follows the build.

# Next steps
Local lint, typecheck, build (72 routes), 24 tests, rebuilt EN order and ES mobile check passed. Publish through PR checks, merge and verify production.
