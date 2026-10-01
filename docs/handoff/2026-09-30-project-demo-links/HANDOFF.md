# Goal
Publish requested portfolio demo links and featured ExamVault replacement.

## Current state
FindLeads demo actions enabled on Home and its case study. ExamVault replaces El Umbral in the six featured Home projects; El Umbral remains in the full catalog. ExamVault links to its current public deployment and uses a fresh landing screenshot with a new cache-safe filename in both locales. Public landing pages verified; account transactions were not exercised.

## Files in flight
Home featured list, ProjectCard, case-study actions, project metadata, health labels, screenshot map and pilot-link regression test.

## Changed
Prior screenshot refresh merged in PR #49 at d83c689 and deployed to richardpillaca.com, with 37 production HTTP checks passing. This follow-up updates demo actions without changing the hero or catalog history.

## Failed attempts
Web reader could not access either demo; the in-app browser verified both public pages.

# Next steps
Finish local gates, publish the scoped PR, and verify production Home links in EN/ES after merge.
