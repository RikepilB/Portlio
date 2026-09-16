# Goal
Make the portfolio substantially less text-heavy, more minimalist and interactive, with opt-in sound and subtle effects. Preserve the approved hero.

## Current state
Implemented and locally verified in Portfolio-minimal-interactive, branch codex/minimal-interactive-isolated, based on main 4c499bb. Publication is pending. Source-level hero hash, lint, typecheck, build (62 pages), 20 tests and desktop/mobile interaction checks pass.

## Files in flight
Own changes: Home/About/Activity/Library layouts, ProjectCard/EssayCard/ActivityFeed, new LibraryShelf and shared InterfaceSound, audio helper/tests, navigation, CSS, design brief and this handoff. No authoritative project content or certification wording changed. Existing PR #41 release entries retained.

## Changed
Work previews cut from 473 to 156 visible English words. Native disclosures retain detail. Activity has thumbnail project links and expandable contribution/release evidence. Library filters writing, suggested books and references. Skills/interests expand on demand. One shared navigation sound toggle remains off until enabled; clicking interactive elements creates brief local tones; hover and hero remain silent. Reduced-motion overrides suppress added effects. Closed mobile menu is inert.

## Failed attempts
Another session switched the shared checkout branch and committed release records during work. Migrated only this task's exact patch to an isolated checkout, reversed it from the shared checkout, and retained PR #41 as the new main base. Browser comparison tab from prior turn was gone; obtained a new tab. One ambiguous menu link locator was scoped to the observed menu match. Cueva activity web retrieval remained unavailable. No forced reduced-motion browser emulation or unsupported-audio UI simulation; CSS/helper behavior covered in code/tests.

# Next steps
Commit and publish this isolated branch, inspect hosted checks/review, merge and verify the live desktop/mobile experience. Refresh the canonical local handoff and activity ledger with the deployment receipt. Keep unrelated shared-checkout files untouched.
