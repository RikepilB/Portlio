# Communities Vision Board + Mist Wipe (Phase 1–2) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace About → Communities with a draggable Figma-style vision board (titles + postcard expand + session-only +), then add one mist-wipe transition between Home hero and My Work.

**Architecture:** Port board primitives from `docs/v3/Vision board design/` into `src/components/about/`, wire existing `communities` data, keep About hero/nav. Phase 2 adds a felt-toned `ScrollWipeSection` on Home only.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript strict, Tailwind v4, framer-motion, `next/image`

**Design spec:** `docs/plans/2026-07-13-about-vision-board-mist-wipe-design.md`

## Global Constraints

- Content source of truth: existing About `communities` copy/images — do not invent metrics or Lorem.
- About hero + sticky section nav stay; only Communities body changes in Phase 1.
- Board shows titles (+ short subs); full descriptions only in postcard modal.
- Session-only `+` adds (reset on refresh); no DB/CMS.
- Mist wipe must use current felt/mist palette — not purple “space” canvas from the Ricardo reference.
- `prefers-reduced-motion`: no drag; mist wipe becomes normal sequential layout.
- Verification: `pnpm lint` → `npx tsc --noEmit` → `pnpm build` (no unit-test harness in repo).
- Do not commit unless the user asks.

---

## File map

| File | Responsibility |
| --- | --- |
| `src/components/about/vision-board.tsx` | BoardCanvas, DraggablePiece, PolaroidCard, NoteCard, QuoteCard |
| `src/components/about/PostcardModal.tsx` | Postcard expand (image + description) |
| `src/components/about/CommunitiesBoard.tsx` | Layout + session pieces + `+` menu |
| `src/components/about/types.ts` | Shared Community / board piece types |
| `src/app/about/page.tsx` | Keep hero/nav; swap Communities grid for `<CommunitiesBoard />` |
| `src/components/ui/ScrollWipeSection.tsx` | Phase 2 mist wipe wrapper |
| `src/app/page.tsx` | Phase 2: wrap hero→My Work transition |

Reference (read-only): `docs/v3/Vision board design/src/app/components/vision-board.tsx`, `.../sections/communities.tsx`

---

### Task 1: Board primitives

**Files:**
- Create: `src/components/about/types.ts`
- Create: `src/components/about/vision-board.tsx`

**Interfaces:**
- Produces: `BoardCanvas`, `DraggablePiece`, `PolaroidCard`, `NoteCard`, `QuoteCard`
- `PolaroidCard` props: `{ src, alt, caption, sub?, onClick?, imgClass? }`
- `DraggablePiece` props: `{ children, position?, rotation?, zIndex?, className?, dragDisabled? }`

- [ ] **Step 1: Add types**

```ts
// src/components/about/types.ts
export type Community = {
  title: string
  org: string
  url: string | null
  description: string
  images: string[]
  labels: string[]
  boardCaption: string
  boardSub: string
}

export type SessionNote = {
  id: string
  kind: 'note'
  title: string
  body: string
}

export type SessionPolaroid = {
  id: string
  kind: 'polaroid'
  src: string
  caption: string
}

export type SessionPiece = SessionNote | SessionPolaroid
```

- [ ] **Step 2: Port primitives from Figma draft**

Adapt `docs/v3/Vision board design/.../vision-board.tsx`:
- Use `framer-motion` (already in package.json), not `motion/react`.
- Replace `--vb-*` with Tailwind mist tokens: `bg-mist-ice`, `bg-mist-soft`, `text-anthracite`, `border-silver/35`, accent notes use `bg-anthracite text-mist-ice`.
- `BoardCanvas`: `h-[760px]` desktop; `max-md:h-auto max-md:flex max-md:flex-col max-md:gap-6`.
- `DraggablePiece`: `drag` only when `!dragDisabled` and matchMedia `(min-width: 768px)` and `!prefers-reduced-motion`; otherwise static with rotation.
- `PolaroidCard`: use `next/image` with `fill` + relative aspect wrapper; `caption` serif/display italic; `sub` mono/small muted.
- Pass `onClick` to polaroid root as `button` or clickable div with `role="button"` + keyboard Enter/Space.

- [ ] **Step 3: Typecheck**

Run: `npx tsc --noEmit`  
Expected: PASS (or only pre-existing unrelated errors — fix any new ones in these files).

---

### Task 2: Postcard modal

**Files:**
- Create: `src/components/about/PostcardModal.tsx`
- Modify later: `src/app/about/page.tsx` (remove old image-only modal when board wired)

**Interfaces:**
- Consumes: `Community` (or subset `{ title, org, url, description, images, labels }`)
- Produces: `PostcardModal({ open, community, imageIndex, onClose, onPrev?, onNext? })`

- [ ] **Step 1: Implement postcard layout**

```tsx
// Structure (Tailwind):
// fixed inset-0 z-[100] backdrop mist-ice/85 blur
// panel max-w-5xl grid md:grid-cols-[1.2fr_1fr]
// left: relative aspect image object-contain
// right: title (display), org/link, description body, close button
```

- Close on backdrop, Esc, close button.
- `useEffect` lock body scroll while open; restore on close.
- Focus close button on open; `aria-modal="true"` `role="dialog"` `aria-labelledby`.

- [ ] **Step 2: Multi-image controls**

If `community.images.length > 1`, show prev/next that call `onPrev` / `onNext` (parent owns index).

- [ ] **Step 3: Typecheck**

Run: `npx tsc --noEmit`  
Expected: PASS for new file.

---

### Task 3: CommunitiesBoard + session +

**Files:**
- Create: `src/components/about/CommunitiesBoard.tsx`

**Interfaces:**
- Consumes: `communities: Community[]`, board primitives, `PostcardModal`
- Produces: `<CommunitiesBoard communities={...} />`

- [ ] **Step 1: Map communities → board slots**

Use Figma positions from `docs/v3/Vision board design/.../communities.tsx`.  
Polaroid slots (title/sub from data — add `boardCaption` / `boardSub` when extracting or hardcode map next to data):

| Community | Caption | Sub | Polaroid? |
| --- | --- | --- | --- |
| LASO | LASO — UBCO | VP Internal | yes |
| Hispanotech | hispanotech.ca | Latinos in Canadian tech | yes |
| OTIN | Okanagan Tech Night | Co-founded · 200+ people | yes |
| Wealthsimple | Wealthsimple Fdn. | Economic empowerment | yes |
| Scale Without Borders | Scale Without Borders | Newcomers in tech | yes |
| Cursor | Cursor AI Community | AI-assisted coding circle | yes |
| CCS | Canadian Cancer Society | Fundraising & outreach | yes |
| BrainTrainr | — | — | NoteCard accent (short body from title-only rule: one-line from existing description, truncated ~90 chars OR title-only note — prefer short body for note cards as in Figma) |
| Alianza Latina | — | — | NoteCard paper |

Also include QuoteCard + two editorial notes (“How I show up”, “Why it matters”) from Figma draft (static copy already in draft — allowed as board chrome, not invented metrics).

**Title-only rule:** Polaroids = caption + sub only. Note cards may keep one short line (Figma pattern). Full paragraphs only in postcard.

- [ ] **Step 2: Click vs drag**

Track pointer down position; on pointer up, if movement `< 6px`, open postcard for that community. Do not open on drag.

- [ ] **Step 3: Session + menu**

- Button `aria-label="Add to vision board"` with `+`.
- Menu: Add note | Add image.
- Note: prompt/inline mini-form (title + body) → append `SessionNote`.
- Image: hidden `<input type="file" accept="image/*">` → `URL.createObjectURL` → `SessionPolaroid`; revoke URLs on unmount.
- Render session pieces as extra `DraggablePiece`s stacked at bottom of canvas / end of mobile list.
- Hint under header: `Playable board — your additions reset on refresh.`

- [ ] **Step 4: Manual checklist**

- Desktop: drag polaroids; click opens postcard with description.
- Mobile: stacked; no drag; tap opens postcard.
- `+` note/image appear until refresh.

---

### Task 4: Wire About page

**Files:**
- Modify: `src/app/about/page.tsx`

- [ ] **Step 1: Enrich community entries** with `boardCaption` / `boardSub` (or keep mapping inside `CommunitiesBoard` — prefer mapping inside board to avoid bloating page data).

- [ ] **Step 2: Replace Communities section body**

Keep `SectionHeader` for Communities. Remove the 3-col grid, touch swipe arrows, and old `selectedImage` modal **if** only used by Communities (hero polaroids are decorative — keep as-is). If old modal is shared, remove after postcard covers Communities.

```tsx
<section id="communities">
  <SectionHeader index="01" kicker="The people who make it worth it" title="Communities" />
  <CommunitiesBoard communities={communities} />
</section>
```

- [ ] **Step 3: Leave Exploring / Beyond Work / Shelf unchanged**

- [ ] **Step 4: Verify**

Run:

```bash
pnpm lint
npx tsc --noEmit
pnpm build
```

Expected: all green.

- [ ] **Step 5: Visual review**

`pnpm dev` → http://localhost:3000/about — hero intact; Communities is vision board.

**Pause for user guidance before Phase 2.**

---

### Task 5: Mist wipe (Phase 2 — after user OK)

**Files:**
- Create: `src/components/ui/ScrollWipeSection.tsx`
- Modify: `src/app/page.tsx`

**Interfaces:**
- Produces: `ScrollWipeSection({ base, children }: { base: ReactNode; children: ReactNode })`
- `base` = sticky chapter (hero); `children` = overlay sheet content start (My Work intro)

- [ ] **Step 1: Implement ScrollWipeSection**

```tsx
'use client'
// relative min-h-[180vh]
// sticky top-0 h-screen z-0 → {base}
// motion.div y: useTransform(scrollYProgress, [0, 0.45], ['40vh', '0vh'])
// overlay: bg-mist-soft or felt pearl (#EAECEB-adjacent mist token), shadow upward
// absolute top edge: maskImage radial-gradients cloud + blur(16–24px)
// satin noise opacity ~0.03
// prefers-reduced-motion: return <>{base}{children}</> without sticky/motion
```

Use portfolio tokens (`theme-felt` / mist), not `#0A0714` purple.

- [ ] **Step 2: Wire Home**

Wrap so hero is `base` and My Work section is first content inside overlay children (rest of page can follow inside or after — prefer My Work + below inside overlay so wipe reveals the work chapter).

- [ ] **Step 3: Verify**

```bash
pnpm lint
npx tsc --noEmit
pnpm build
```

Manual: scroll `/` — organic edge reveals work; reduced-motion OS setting → no sticky wipe.

---

## Self-review

1. **Spec coverage:** Draggable board ✓, titles on board ✓, postcard ✓, session + ✓, hero/nav preserved ✓, mist wipe phase 2 ✓, no purple canvas ✓, reduced-motion ✓.
2. **Placeholders:** None intentional.
3. **Types:** `Community` / `SessionPiece` consistent across Tasks 1–3.

## Out of scope (later guidance)

- Exploring / Beyond Work / Shelf boards  
- Full infinite scroll across Journey/About/Projects/Essays  
- Persisting session pieces  
