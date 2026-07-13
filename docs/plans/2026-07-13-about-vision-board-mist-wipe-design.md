# Design — About Communities vision board + home mist wipe (phased)

**Date:** 2026-07-13  
**Status:** Approved (Approach 1; sequence C)  
**Branch context:** `feat/portfolio-additions`

## Goals

1. **Phase 1:** Replace About → Communities body with a Figma-style **draggable vision board** (hero + section nav unchanged). Titles on board; postcard expand for full photo + description; session-only **+** to add note/image pieces.
2. **Phase 2:** One **mist wipe** between two Home chapters (Hero → My Work), as a prototype before full infinite scroll.
3. Later (guided): Exploring / Beyond Work / Shelf boards; then full Home → Journey → About → Projects → Essays scroll.

## Locked decisions

| Decision | Choice |
| --- | --- |
| Sequence | C — Communities board → one mist wipe → continue under guidance |
| Board interaction | Draggable on desktop (Figma draft pattern) |
| Board copy | Titles (+ short sub) only |
| Expand | Postcard modal: image left, description right |
| Add (+) | Session-only; resets on refresh |
| Approach | Port board primitives into `src/components/about/` |

## §1 Architecture (approved)

- Keep About hero and sticky section nav.
- Replace Communities grid only.
- Components: `BoardCanvas`, `DraggablePiece`, `PolaroidCard`, `NoteCard`, `QuoteCard`, `CommunitiesBoard`, `PostcardModal`, session add control.
- Data: existing `communities` array; board uses title, org/sub, primary image; `description` only in postcard.
- Tokens: mist/pearl/silver/anthracite (no velvet; no draft CSS vars as production source).
- Mobile: stack pieces; no drag. `prefers-reduced-motion`: no drag, static placements.

## §2 Postcard, add UX, a11y (approved via proceed)

**Postcard modal**

- Open on polaroid click (not on drag end — distinguish click vs drag with small movement threshold).
- Layout: image dominant left; right panel with title, optional org/url, description paragraph(s).
- Close: backdrop click, Esc, close button. Focus trap; restore focus on close. `aria-modal="true"`.
- Multi-image communities: optional prev/next in postcard (reuse existing images array); board still shows primary/first image unless we later cycle.

**Session + control**

- Small `+` near Communities header / board corner.
- Menu: “Add note” (title + body → `NoteCard`) | “Add image” (file input → object URL → `PolaroidCard` with editable caption default “Untitled”).
- Pieces append to local React state; `URL.revokeObjectURL` on unmount/remove if we add remove later (YAGNI: no remove in v1 unless trivial).
- Hint text: “Playable board — additions reset on refresh.”

**A11y / motion**

- Keyboard: tab to pieces; Enter/Space opens postcard for polaroids.
- Drag: pointer-only enhancement; content still reachable without drag.
- Reduced motion: disable drag + entrance springs.

## §3 Mist wipe phase 2 (approved via proceed)

- New `ScrollWipeSection` client component.
- Sticky dark/felt base (reuse existing home hero surface — **no purple space canvas**; adapt mist edge to felt/gold / current home tones).
- Overlay sheet with CSS `mask-image` / blurred organic top edge + light satin noise; `useScroll` + `useTransform` for Y.
- First use: wrap transition between Home hero and “My Work” only.
- Reduced motion: render as normal sequential sections (no sticky wipe).
- Out of scope for phase 2: embedding Journey/About/Projects/Essays into `/`.

## Non-goals (this design)

- Persisting user-added pieces
- CMS / DB
- Replacing Exploring / Beyond Work / Shelf yet
- Full multi-page infinite scroll yet
- Copying Ricardo Chance purple WebGL particles

## Success criteria

- `/about` Communities matches vision-board feel; hero intact; existing community facts preserved.
- Click → postcard with full description; drag works on desktop.
- `+` adds ephemeral pieces.
- After phase 2: one mist wipe on `/` between hero and work.
- `pnpm lint` → `npx tsc --noEmit` → `pnpm build` green.
