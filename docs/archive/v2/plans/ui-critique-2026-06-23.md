# UI/UX Critique — Home + About (2026-06-23)

> Produced by the **critique/advisor session** (read-only). The **edit session** owns `main`.
> This is INPUT for that session — verified against real files, false alarms filtered out.
> Gate at time of audit: `tsc` ✓ · `lint` ✓ · `build` 21 pages exit 0.

## VERIFIED — fix these (ranked)

### 1. 🔴 Contrast fail: green/gold as TEXT on light bg
Green `#2bc08f` on white ≈ 2.3:1 (WCAG AA needs 4.5:1 normal / 3:1 large). Gold `#c79a3a` ≈ 2.5:1.
Fix: for TEXT on light, swap → green `#0c5a40` (`--color-accent-ink`, exists) and gold `#8a6516` (`--color-gold-ink`, exists). Keep `#2bc08f`/`#c79a3a` for backgrounds, dots, borders, large decorative only.
Confirmed hits:
- `src/app/page.tsx:92` — hero "Full-stack engineer" green 18px
- `src/app/page.tsx:106,108,110` — "Tenacious / Analytical / Charismatic" green
- `src/app/page.tsx:107,109` — green `·` separators
- `src/app/about/page.tsx:289` — "read more" base color (hover already → #0c5a40)
- `src/app/about/page.tsx:298` — icon-circle green text
- `src/app/about/page.tsx:153` — gold index `#c79a3a` (small) → #8a6516
- Hover-to-green states (`page.tsx:121,233`, `about:317,359,436,631`) — green-on-light hover text also fails; same swap.
NOTE: the edit session already identified the gold half of this (handoff Task 1/3). The GREEN text instances above are the part to be sure isn't missed.

### 2. 🟡 Reduced-motion not global
`globals.css` has NO `@media (prefers-reduced-motion: reduce)` block (confirmed absent). The JS `Reveal` respects it, but CSS hovers (`transition-colors`, `group-hover:scale-[1.04]`, `duration-700`) run regardless.
Fix: add to globals.css:
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### 3. 🟡 Three real photos have empty alt
`src/app/about/page.tsx:332,338,344` — family / travelling / toronto use `alt=""` (= decorative). They're content → give descriptive alt (e.g. `alt="Richard with family in Peru"`). The other 5 images (`:451,536,571,603`) already have proper alt.

### 4. 🟢 Stale gray-token drift (cosmetic)
About page uses `#6B7280 / #F9FAFB / #E5E7EB` while home uses `#6e7481 / #d1d2d8`. Unify to one token set. (Edit session Task 2 already targets this.)

## FALSE ALARMS — do NOT chase (agents were wrong)
- ❌ "IntersectionObserver memory leak" — `page.tsx:273` has `return () => io.disconnect()`. Clean.
- ❌ "Missing `<html lang>`" — present at `layout.tsx:42`.
- ❌ "Missing prop types / `any`" — `tsc --noEmit` strict passes. Types fine.
- 🟢 "About `text-4xl` breaks at 375px" — 36px renders fine; only non-fluid, not broken. Low priority.

## What's GOOD (keep)
- Font system: Newsreader + Geist + JetBrains Mono. No Inter/Roboto/Arial.
- Reveal: reduced-motion-aware + observer cleanup — textbook.
- Tokens incl. accessible `accent-ink`/`gold-ink` already defined — fixes are half-built.
- Server-components-by-default; client only where needed. Palette obeys no-navy/teal rule.

---

# PART 2 — Remaining pages (projects, essays, skills) — VERIFIED

Overall: 3.1/4 (78%). Structure/semantics/responsiveness solid. Same contrast theme repeats + a stray non-token green + inline-style rule violations.

## VERIFIED — fix these

### 5. 🔴 Stray non-token green `#10B981` failing contrast (gallery + skills)
`#10B981` (emerald-500, ≈2.5:1 on white) is NOT your brand green `#2bc08f` — a third green crept in. Hits:
- `src/app/projects/page.tsx:88` — project title `group-hover:text-[#10B981]`
- `src/app/projects/page.tsx:111` — "read case study" CTA `group-hover:text-[#10B981]`
- `src/app/skills/page.tsx:68` — icon color `text-[#10B981]` (non-text, <3:1)
- `src/app/skills/page.tsx:126,127` — cert pill hover/dot `#10B981`
Fix: replace ALL `#10B981` with token `#0c5a40` (text) or `#2bc08f` (dots/decorative). NOTE: emerald-600 `#059669` ≈3.5:1 still FAILS AA — do not use it; use `#047857` or `#0c5a40`.

### 6. 🔴 White-on-green button fails (auditor missed this)
`src/app/projects/[slug]/page.tsx:188` — `bg-[#10B981] text-white` CTA. White on `#10B981` ≈2.5:1, fails even large-text 3:1.
Fix: darken button bg to `#0c5a40` (white-on-#0c5a40 ≈6:1 ✓). The existing `hover:bg-[#059669]` should also go darker.

### 7. 🟡 Skills category badge: white on green (live-edited file)
`src/app/skills/page.tsx:99` — `backgroundColor:#2bc08f; color:white` ≈2.3:1 fails. The `#8a6516` gold variant (idx 1,3) ≈4.6:1 passes.
Fix: green badge bg → `#0c5a40`. (Other session is editing this file — coordinate.)

### 8. 🟡 Inline `style={{}}` violates "Tailwind classes only" rule
Found in: `journey/page.tsx`, `page.tsx`, `projects/page.tsx`, `projects/[slug]/page.tsx`, `skills/page.tsx`, `Nav.tsx`, `ProjectCard.tsx`. Some are dynamic (colors/transforms) and legitimately awkward in pure Tailwind, but per project rule they should move to classes or CSS vars where feasible.

### 9. 🟢 Polish (low priority)
- `projects/page.tsx:33,42` header/grid padding imbalance (`pt-16 pb-12` vs `pb-24 pt-12`) — normalize.
- `essays/[slug]` "coming soon" placeholder + metric cards (`bg-stone-50`) lack emphasis — add `border-l-4` / tint.
- Skills cert hovers use raw `#F59E0B`/`#3B82F6` (off-palette) — map to tokens.

## CONFIRMED GOOD on these pages
- Case study template `projects/[slug]`: strong semantic `<article>/<header>/<section>` + aria. Problem box `amber-800` passes (6.8:1).
- `ProjectCard` + `EssayCard` components: `group-hover:text-amber-700` is AA-safe (≈4.5:1) — components are clean; only the gallery PAGE uses the bad green.
- `TechTag` `text-neutral-500` safe. Essays list/single: good mobile stacking, proper link aria.

## Color consolidation summary (the real root cause)
Greens in use: `#2bc08f` (brand token) · `#10B981` (STRAY emerald — remove) · `#0c5a40` (accent-ink, the AA-safe text green).
Golds: `#c79a3a` (token) · `#8a6516` (gold-ink, AA-safe text) · `amber-700 #b45309` (Tailwind, AA-safe).
RULE OF THUMB: brand colors (`#2bc08f`/`#c79a3a`) for backgrounds/dots/borders/large decorative ONLY; ink variants (`#0c5a40`/`#8a6516`) for any readable text on light. Delete `#10B981` entirely.

## FULL-SITE STATUS
All routes critiqued: home ✓ about ✓ projects ✓ projects/[slug] ✓ essays ✓ essays/[slug] ✓ skills ✓ (skills mid-edit). 9 verified issues total (3 contrast-critical, repeated systemically). No structural/architecture debt — fixes are nearly all 1-2 line color swaps + one reduced-motion block + alt text.

---

# PART 3 — Design-quality verdict (unique / high-end / used the references)
> Live visual review @1280 in Chrome (home, projects, about). Judges the *design*, not a11y (Parts 1–2 cover a11y).

## VERDICT: ✅ Unique + high-end + faithful to the brief. Ship-worthy after the 3 contrast fixes.

### Is it UNIQUE? — Yes
- Editorial-serif identity (Newsreader display) + line-art self-portrait on a mint panel + green starburst = a look that is clearly *his*, not a template.
- Personal signals competitors don't have: per-page rotating nav greeting ("HEY!" → "QUE ONDA!"), EN/ES toggle, scattered polaroid photos (Peru/travel/Toronto), narrative voice ("I grew up in Peru…").
- Real projects with real screenshots (Empeñalo, ScoutLane, ExamVault) — not stock placeholders.

### Is it HIGH-END? — Yes
- Zigzag alternating project rows with gold index numerals = magazine/editorial cadence.
- Brutalist section headers on About ("01 — THE PEOPLE WHO MAKE IT WORTH IT / COMMUNITIES" huge uppercase serif) = confident, gallery-grade.
- Restrained whitespace, scroll-progress bar (green→gold), Reveal fade-ins that fire correctly. Feels considered, not AI-generated. Obeys no-navy/teal + no-Inter rules.

### Did it USE the redisgn/ references? — Yes, as inspiration not copy (matches your stated direction)
- Took the editorial-serif + warm-accent DNA from Terraform (Cormorant/DM Sans, gold/cream) but reauthored it: green-primary + gold-secondary, Newsreader. Inspired, not cloned. ✓

## What holds it back from a 10/10 (design-level, beyond the a11y fixes)
1. 🟡 **Palette leak breaks "high-end" cohesion.** Projects gallery category tags render in generic **blue** (FULL STACK) + **purple** (EXCEL AUTOMATION) — raw `#3B82F6`/`#F59E0B`/`#8B5CF6`, off-brand. A high-end site holds ONE tight palette. Map all category colors to green/gold tints (or one neutral + accent). This is the single biggest "looks templated" tell on the site. (Overlaps Part 2 #9.)
2. 🟡 **The 3 contrast-critical greens (Parts 1–2) also read as "washed-out" at a design level** — the mint-on-white text isn't just an a11y fail, it looks faint/unfinished. Darkening to `#0c5a40` makes it look *more* premium, not less. Win-win.
3. 🟢 Hero right-panel: starburst + portrait is strong but the mint rounded square is a touch flat — a subtle shadow/grain or letting the portrait break the frame edge would lift it. Optional.
4. ⚠️ **Mobile (375px) NOT visually verified** — Chrome on Windows clamps window width to ~500px, so true 375 couldn't be screenshotted from this session. Verify in DevTools responsive mode (other session's Task 3). Desktop + tablet read well.

## Bottom line
Design goal is MET: unique, high-end, references used correctly. The gap between "good" and "exceptional" is **palette discipline** — kill the stray emerald `#10B981` AND the blue/purple category tags, push faint greens to `#0c5a40`. ~6 color values total. No layout/structure work needed.
