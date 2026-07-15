---
status: awaiting_human_verify
trigger: "Next.js 16.2.6 hydration error on body — data-new-gr-c-s-check-loaded / data-gr-ext-installed (Grammarly); suppressHydrationWarning on body; scan other hydration bugs"
created: 2026-07-15T04:41:00.000Z
updated: 2026-07-15T04:48:00.000Z
symptoms_prefilled: true
goal: find_and_fix
---

## Current Focus

hypothesis: CONFIRMED — Grammarly body attrs; secondary Reveal window in useState
test: Human verify with Grammarly on; reduced-motion path
expecting: No body attribute hydration warning
next_action: Await user "confirmed fixed" or remaining failure report

## Symptoms

expected: No hydration attribute mismatch warning on RootLayout body in normal browsing
actual: Hydration warning — body has data-new-gr-c-s-check-loaded and data-gr-ext-installed on one side of the tree
errors: "A tree hydrated but some attributes of the server rendered HTML didn't match the client properties" at src/app/layout.tsx (69:7) RootLayout
reproduction: Load site with Grammarly (or similar) extension enabled
started: Reported 2026-07-15; extension-driven

## Eliminated

- hypothesis: App code sets Grammarly data-* attrs on body
  evidence: Grep of src/ found zero references to data-new-gr or data-gr-ext; body className is static string only
  timestamp: 2026-07-15T04:42:00.000Z

- hypothesis: Footer getFullYear / Nav Math.random / formatDate cause the reported body warning
  evidence: Math.random only in useEffect; year and formatDate not related to body data-gr-* attrs in error stack
  timestamp: 2026-07-15T04:43:00.000Z

## Evidence

- timestamp: 2026-07-15T04:41:30.000Z
  checked: src/app/layout.tsx
  found: html has suppressHydrationWarning; body does not
  implication: Known Next.js/React pattern for extension attrs is incomplete on body

- timestamp: 2026-07-15T04:42:30.000Z
  checked: Grep typeof window / Math.random / Date / toLocale in src/
  found: Nav/Footer Math.random only in useEffect (safe); Footer getFullYear in render (year-stable, no failure evidence); Reveal useState(prefersReducedMotion) lazy-inits reading window
  implication: Reveal can mismatch when prefers-reduced-motion: reduce (server false, client true)

- timestamp: 2026-07-15T04:47:00.000Z
  checked: pnpm lint + npx tsc --noEmit after fix
  found: both pass (Reveal uses useSyncExternalStore for reduced-motion)
  implication: Self-verification green for static checks

## Resolution

root_cause: Browser extension (Grammarly) injects attributes onto <body>; React hydration compares clean client props vs mutated DOM. Secondary: Reveal used useState(prefersReducedMotion) which reads window during lazy init — SSR false vs client true under prefers-reduced-motion.
fix: Added suppressHydrationWarning on <body> in RootLayout. Rewrote Reveal to use useSyncExternalStore (server snapshot false) + intersection/rAF reveal so first paint matches SSR.
verification: lint + tsc pass; awaiting human confirm with Grammarly enabled
files_changed:
  - src/app/layout.tsx
  - src/components/ui/Reveal.tsx
