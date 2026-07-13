# Portfolio — Handoff (father)

**Read this first.** Whole-project handoff. Freshest state on top, then an append-only
index of every session folder. Nothing here is ever deleted — full prose lives in each
session's own `HANDOFF.md`; this file is the map.

## How this works (tree of context)

```
docs/handoff/
  HANDOFF.md                  ← this file (father): rolling current state + session index
  .current-session            ← pointer: active session folder name (used by the hooks)
  _meta/TEMPLATE.md           ← per-session template
  <YYYY-MM-DD>-<name>/        ← one immutable folder per session
    HANDOFF.md                ← session digest: goal · done · files · failed · next
    transcript.md             ← optional full /export archive
```

**Rules:** append, never overwrite. Only the father's `## Current state` is replaced each
session. Solved tasks → one concrete one-liner (file / PR / command).

---

## Current state — 2026-07-13

**Felt/gold re-skin on v2 structure + i18n `[locale]` routes; nav transition bug fixed; About unified to felt/gold.** Page transitions now use `src/app/[locale]/template.tsx` (remounts per nav) — fixes the "click twice → empty felt page" bug that `AnimatePresence mode="wait"` in the persistent layout caused; `PageTransition.tsx` deleted. About re-skinned mist→**felt/gold** to match Journey: gold **"Who are you?"** heading (eyebrow removed), felt education card, felt social buttons, white scrapbook polaroids on felt, top-right vision-board hint "↔ Drag the cards · press Read". Home: "My work" + "Skills & Stack" uniform white (dropped gold-italic + "WHAT I DO" eyebrow). ScrollProgress/BackToTop now always gold/felt (dropped `/about` mist branch). Note: Bug-1 (`parents[4]` in ckm skill python scripts) verified NOT real — left untouched. `pnpm lint` / `tsc` / `build` green; Home+About browser-verified. Mist wipe (Task 5) still paused. Nothing committed. Branch: `feat/portfolio-additions`.

---

## Session index (append-only, newest first)

- [2026-07-13-claude-harness-fix](2026-07-13-claude-harness-fix/HANDOFF.md) — nav two-clicks/empty-page bug fixed via `template.tsx` (deleted PageTransition); About re-skinned mist→felt/gold + gold "Who are you?" heading + board hint; home headings uniform white; Bug-1 verified not-real
- [2026-07-13-claude-harness-fix](2026-07-13-claude-harness-fix/HANDOFF.md) — global ScrollProgress + BackToTop + PageTransition; shared Reveal site-wide; projects filter AnimatePresence; silver-foil readability; discipline filters + placeholders
- [2026-07-13-claude-harness-fix](2026-07-13-claude-harness-fix/HANDOFF.md) — scrapbook interleave (text+images), SectionLabel stickers, UK/Toronto mid-crops, final bio; mist wipe + gsd-debug still waiting
- [2026-07-13-claude-harness-fix](2026-07-13-claude-harness-fix/HANDOFF.md) — bio rewrite (EN/ES + line-clamp), 4-col board rebalance, travel object-bottom crops, more community dark/light cards; mist wipe still paused
- [2026-07-13-claude-harness-fix](2026-07-13-claude-harness-fix/HANDOFF.md) — About board polish: BrainTrainr/Alianza polaroids, object-top faces, mist bg + ink title, longer bio, education contrast, denser collage; mist wipe still paused
- [2026-07-13-claude-harness-fix](2026-07-13-claude-harness-fix/HANDOFF.md) — Phase 1 Communities vision board implemented; mist wipe paused for review
- [2026-07-13-claude-harness-fix](2026-07-13-claude-harness-fix/HANDOFF.md) — vision board + mist-wipe design/plan written; execution pending
- [2026-07-13-claude-harness-fix](2026-07-13-claude-harness-fix/HANDOFF.md) — About vision board + home mist-scroll brainstorm started; priority A/B/C awaiting user; no code
- [2026-07-13-claude-harness-fix](2026-07-13-claude-harness-fix/HANDOFF.md) — Phase 0–5 felt/gold redesign executed: docs reorg, v2 restore, canon rewrite, tokens/nav, page re-skins, build green, local review URL ready
- [2026-07-13-claude-harness-fix](2026-07-13-claude-harness-fix/HANDOFF.md) — velvet v3 rejected on review; new felt/gold direction from `gemini-code-1783950*` adopted; v2 structure to be restored (no Skills/Resume tabs, redirects); framer-motion + shadcn/ui approved; skill-gated plan at `.cursor/plans/felt_and_gold_redesign_87a3c14f.plan.md` awaiting approval
- [2026-07-13-claude-harness-fix](2026-07-13-claude-harness-fix/HANDOFF.md) — harness fixed (`91ead58`); Gemini inputs audited; immersive velvet-charcoal/copper redesign selected for Home, Projects, Journey, and an existing-media About vision board; canonical v3 docs, source-input rename, harness update, and implementation plan pending
- [2026-06-30-scaffold-and-handoff-migration](2026-06-30-scaffold-and-handoff-migration/HANDOFF.md) — ran `project-scaffold` + migrated legacy `handoff.md`; deep-catch-up roadmap briefing; added El Umbral project (`7259831`) and updated résumé PDF + journey/embedded data (`0e48ad9`); mirrored next-steps to GitHub issues #11–#15; tested + pushed both branches and opened PR #16, PR #17; reordered home "My Work" to 5 newest projects + gave El Umbral an image (`602a52a`, `44125e0`, not pushed)

<!-- compact-handoff:auto-snapshot -->
<!-- Latest auto-snapshot: docs/handoff/2026-07-02-98bb9341/snapshot-002022.md -->
## Latest auto snapshot — 2026-07-02T00:20:22.015Z
- Session folder: `docs/handoff/2026-07-02-98bb9341/`
- Snapshot file: `docs/handoff/2026-07-02-98bb9341/snapshot-002022.md`
- Branch: main
