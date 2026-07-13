# Portfolio v3 Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Deliver a premium, accessible Portfolio v3 visual system and redesign the Home, Projects, Journey, and About routes without changing the portfolio’s authoritative project, experience, or social content.

**Architecture:** First consolidate the approved v3 inputs into immutable source references and three canonical v3 documents, then make the harness point to that canon. Replace the global design foundation (fonts, tokens, texture, motion, navigation, and footer) before composing page-specific views from existing `src/data` records. Keep interaction islands small and client-only: project filtering, timeline disclosure, and the vision-board lightbox; all other page composition stays server-rendered.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript strict, Tailwind CSS v4, `next/font/google` (Playfair Display, Manrope, JetBrains Mono), `next/image`, existing `lucide-react`; native CSS and browser APIs only.

## Global Constraints

- Use the approved velvet-charcoal/copper direction: `#1C1A19` canvas, `#262221` dark surface, `#E1E8E9` light-paper surface, `#C58E7F` copper base, `#FAECE9` copper highlight, `#735147` copper shadow, `#F4F4F3` chalk text, and `#8C8380` muted text.
- Use Playfair Display for display headings, Manrope for UI/body copy, and JetBrains Mono for technical labels and metadata. Do not use Geist, Newsreader, Ogg, Inter, Roboto, or Arial.
- Add no package or configuration dependency. Do not use Framer Motion or any animation library.
- Use Tailwind classes and CSS custom properties only; remove inline `style` props from every touched component.
- `src/data/projects.ts`, `src/data/experience.ts`, and `src/data/social.ts` remain the source of truth. Do not rewrite copy, alter metrics, add projects, or invent image assets.
- Use repository assets only. A project with no `image` must render a metadata-led fallback rather than a broken or fabricated screenshot.
- Preserve all routes, redirects, case-study routes, and existing external links. This redesign changes presentation, not the information architecture.
- Make every interactive control keyboard-operable, labeled, focus-visible, and semantically correct. Escape closes dialogs; dialogs restore focus to their opener.
- Honor `prefers-reduced-motion: reduce`: no reveal, hover, progress, parallax, auto-scroll, or modal transition may be required to understand or operate the site.
- Verify the redesigned routes at 375px, 768px, and 1280px. Design mobile-first.
- Completion gate for implementation is `pnpm lint`, `pnpm typecheck`, then `pnpm build`, each with zero errors. This planning task does not run those commands.

---

## File Structure

| Path | Responsibility |
| --- | --- |
| `docs/v3/sources/*` | Immutable, renamed Gemini input files; never edited after `git mv`. |
| `docs/v3/branding.md` | Canonical v3 identity: positioning, approved tokens, typography, texture, motion, and accessibility rules. |
| `docs/v3/PRD.md` | Canonical v3 scope, route acceptance criteria, content boundaries, and definition of done. |
| `docs/v3/design.md` | Canonical page and component design contract at 375/768/1280. |
| `.claude/CLAUDE.md` | Agent harness pointing at the v3 canonical documentation instead of stale v2 direction. |
| `src/app/globals.css` | CSS-first Tailwind v4 token layer, grain treatment, common primitives, responsive shell, and reduced-motion override. |
| `src/app/layout.tsx` | Font registration, document-level theme class, and stable global chrome. |
| `src/components/layout/Nav.tsx` / `Footer.tsx` | Copper/charcoal global navigation and consistent footer on every route. |
| `src/components/ui/GrainOverlay.tsx` / `Reveal.tsx` | Reusable decorative grain and optional native reveal behavior. |
| `src/components/ui/ProjectCard.tsx` | Shared metadata-first project card with image and no-image variants. |
| `src/data/about.ts` | Existing About page narrative, labels, and existing asset paths moved into typed data records. |
| `src/components/about/VisionBoard.tsx` | Accessible client interaction for image selection, dialog viewing, and keyboard controls. |
| `src/app/page.tsx`, `projects/page.tsx`, `journey/page.tsx`, `about/page.tsx` | Redesigned approved v3 routes. |

## Task 1: Consolidate v3 canon and update the agent harness

**Files:**

- Move without content edits: `docs/v3/gemini-code-1783929122836.md` → `docs/v3/sources/gemini-brand-identity.md`
- Move without content edits: `docs/v3/gemini-code-1783929106564.md` → `docs/v3/sources/gemini-product-brief.md`
- Move without content edits: `docs/v3/gemini-code-1783928342276.md` → `docs/v3/sources/gemini-visual-tokens.md`
- Move without content edits: `docs/v3/gemini-code-1783928432570.md` → `docs/v3/sources/gemini-typography-texture-notes.md`
- Move without content edits: `docs/v3/gemini-code-1783929138289.md` → `docs/v3/sources/gemini-visual-token-variant.md`
- Move without content edits: `docs/v3/gemini-code-1783928377752.ts` → `docs/v3/sources/gemini-project-grid-card.draft.tsx`
- Move without content edits: `docs/v3/gemini-code-1783928385220.ts` → `docs/v3/sources/gemini-grain-overlay.draft.tsx`
- Create: `docs/v3/branding.md`
- Create: `docs/v3/PRD.md`
- Create: `docs/v3/design.md`
- Modify: `docs/v3/HANDOFF.md`
- Modify: `docs/decisions.md`
- Modify: `.claude/CLAUDE.md`

**Interfaces:**

- Consumes: the seven Gemini files exactly as received, `docs/v3/DOC-AUDIT.md`, and the current repository structure.
- Produces: three authoritative v3 documents referenced by all later tasks; source drafts remain traceable but are not implementation contracts.

- [ ] **Step 1: Rename the immutable Gemini inputs with `git mv`.**

```powershell
New-Item -ItemType Directory -Force docs/v3/sources
git mv docs/v3/gemini-code-1783929122836.md docs/v3/sources/gemini-brand-identity.md
git mv docs/v3/gemini-code-1783929106564.md docs/v3/sources/gemini-product-brief.md
git mv docs/v3/gemini-code-1783928342276.md docs/v3/sources/gemini-visual-tokens.md
git mv docs/v3/gemini-code-1783928432570.md docs/v3/sources/gemini-typography-texture-notes.md
git mv docs/v3/gemini-code-1783929138289.md docs/v3/sources/gemini-visual-token-variant.md
git mv docs/v3/gemini-code-1783928377752.ts docs/v3/sources/gemini-project-grid-card.draft.tsx
git mv docs/v3/gemini-code-1783928385220.ts docs/v3/sources/gemini-grain-overlay.draft.tsx
```

- [ ] **Step 2: Write `docs/v3/branding.md` as the resolved identity contract.**

Include this exact decision table and rules; do not copy Gemini claims about projects that are absent from `src/data/projects.ts`.

```markdown
# Portfolio v3 branding

## Positioning
Richard Pillaca Burga is a Toronto-based Software Engineer and Data Analyst who combines full-stack engineering, data systems, and AI-native automation.

## Palette
| Token | Value | Use |
| --- | --- | --- |
| `canvas` | `#1C1A19` | Site background |
| `surface` | `#262221` | Dark cards and navigation |
| `paper` | `#E1E8E9` | High-contrast editorial surfaces |
| `copper` | `#C58E7F` | Links, active states, and foil accents |
| `copper-highlight` | `#FAECE9` | Copper hover highlight |
| `copper-shadow` | `#735147` | Copper depth |
| `chalk` | `#F4F4F3` | Primary text on dark surfaces |
| `muted` | `#8C8380` | Secondary text and metadata |

## Typography
- Playfair Display: page titles, project titles, and editorial pull quotes.
- Manrope: body copy, buttons, navigation, and descriptions.
- JetBrains Mono: dates, categories, metrics, tags, and system labels.

## Motion and texture
- Use a fixed, pointer-events-none SVG `feTurbulence` grain overlay at low opacity.
- Use opacity and transform transitions of 160–500ms; do not animate layout properties.
- All nonessential movement is disabled by `prefers-reduced-motion: reduce`.
```

- [ ] **Step 3: Write `docs/v3/PRD.md` with explicit in-scope routes and acceptance criteria.**

State that Home, Projects, Journey, and About are in scope; essays, skills, resume, project case studies, and `/blog` redirects retain their current route/content behavior. Include the following route-level criteria:

```markdown
## Acceptance criteria
- `/`: an above-the-fold editorial introduction, a selected-work section sourced from `projects`, and an existing-content contact path.
- `/projects`: all `projects` records filter by existing `category`; each card links to `/projects/[slug]`; image-less records use category, duration, title, tagline, stack, and existing results instead of a screenshot.
- `/journey`: every `experiences` record is reachable by a semantic disclosure control; the existing résumé link and `ResumePaper` remain available.
- `/about`: existing biography, community, travel, activity, and favourite content is presented as one accessible vision board that uses only current `/public/images` paths.
- All redesigned routes operate at 375px, 768px, and 1280px and respect reduced motion.
```

- [ ] **Step 4: Write `docs/v3/design.md` as the implementation-level design contract.**

Document the page anatomy and responsive behavior: full-bleed canvas; a 375px single-column stack; a 768px two-column editorial grid where content permits; a 1280px twelve-column shell with a maximum content width; copper only as a controlled accent; metadata-first cards; dark cards separated by low-contrast rules; and paper surfaces only for résumé and selected vision-board artefacts. Specify that hover effects enhance but do not hide content, and that no card has cursor-tracking light masks.

- [ ] **Step 5: Point the handoff, decision log, and harness at v3 canon.**

Append a dated handoff entry and an ADR that declares `docs/v3/branding.md`, `docs/v3/PRD.md`, and `docs/v3/design.md` canonical for v3 presentation work; `docs/v3/sources/*` is immutable reference input; `docs/PRD.md` and old plan files are historical only. In `.claude/CLAUDE.md`, replace the v2 blueprint/progress line and the stale light/green/no-dark rule with:

```markdown
# Blueprint: @docs/v3/PRD.md | Brand: @docs/v3/branding.md | Design: @docs/v3/design.md
```

Also update its project count statement to defer to `src/data/projects.ts`, its font rule to Playfair Display + Manrope + JetBrains Mono, and its page-quality checklist to require the three target widths and reduced-motion review.

- [ ] **Step 6: Validate the documentation graph.**

Run:

```powershell
rg "gemini-code-|docs/PRD.md|green \+ gold|Geist|Newsreader" docs/v3 .claude/CLAUDE.md
git diff --check
```

Expected: no old `gemini-code-*` paths in `docs/v3`; no v2 canon link in the first three lines of `.claude/CLAUDE.md`; no whitespace errors. References to old documents are allowed only when explicitly labelled historical/superseded.

- [ ] **Step 7: Commit the documentation boundary.**

```powershell
git add docs/v3 .claude/CLAUDE.md docs/decisions.md
git commit -m "docs: establish portfolio v3 canon"
```

## Task 2: Replace the global visual foundation and chrome

**Files:**

- Modify: `src/app/globals.css`
- Modify: `src/app/layout.tsx`
- Modify: `src/components/layout/Nav.tsx`
- Modify: `src/components/layout/Footer.tsx`
- Create: `src/components/ui/GrainOverlay.tsx`
- Create: `src/components/ui/Reveal.tsx`

**Interfaces:**

- Produces: `GrainOverlay(): JSX.Element` and `Reveal({ children, delayMs? }: { children: React.ReactNode; delayMs?: number }): JSX.Element`.
- Consumes: v3 tokens in `globals.css`; all routes use `font-display`, `font-sans`, `font-mono`, `shell`, `surface-card`, `eyebrow`, and `copper-link` utility classes.

- [ ] **Step 1: Replace the old token block in `globals.css`.**

Define the v3 colors as Tailwind v4 `@theme` values, plus shell/rule/shadow variables. The core must include:

```css
@theme {
  --font-sans: var(--font-manrope), ui-sans-serif, system-ui, sans-serif;
  --font-display: var(--font-playfair), ui-serif, Georgia, serif;
  --font-mono: var(--font-jetbrains-mono), ui-monospace, monospace;
  --color-canvas: #1c1a19;
  --color-surface: #262221;
  --color-paper: #e1e8e9;
  --color-copper: #c58e7f;
  --color-copper-highlight: #faece9;
  --color-copper-shadow: #735147;
  --color-chalk: #f4f4f3;
  --color-muted: #8c8380;
}
```

Replace green/light-v2 utility classes with semantic v3 utilities. Add a `grain-overlay` rule using the SVG component rather than a raster asset. Retain one reduced-motion media query that sets duration to `0.01ms`, one iteration, automatic scrolling, and no transform movement.

- [ ] **Step 2: Change root fonts and add the grain overlay.**

In `layout.tsx`, replace `Geist` and `Newsreader` imports/configuration with `Manrope` and `Playfair_Display`; keep `JetBrains_Mono`; add `<GrainOverlay />` directly inside `<body>`. Use this document class composition:

```tsx
<html
  lang="en"
  className={`${manrope.variable} ${playfairDisplay.variable} ${jetbrainsMono.variable}`}
>
  <body className="min-h-screen bg-canvas font-sans text-chalk antialiased">
    <GrainOverlay />
    <Nav />
    <main>{children}</main>
    <Footer />
  </body>
</html>
```

- [ ] **Step 3: Implement the two shared UI primitives with native APIs only.**

`GrainOverlay` must render the existing fractal-noise SVG pattern with `aria-hidden="true"` and no React state. `Reveal` must use `IntersectionObserver`, only add its `is-revealed` class after intersection, disconnect after the first reveal, and render already visible when reduced motion is requested. Do not write DOM styles directly; CSS controls the initial and revealed state.

- [ ] **Step 4: Rebuild navigation and footer for the shared dark system.**

Keep the current route list and mail link. Replace random greeting text and inline styles with a stable wordmark, text navigation, an `aria-expanded` mobile button, and CSS-only open/closed state. Footer must render on every route, preserve existing menu/contact links, use the same semantic tokens, and remove the random fun-fact effect.

- [ ] **Step 5: Validate global chrome before page work.**

Run:

```powershell
pnpm lint
pnpm typecheck
```

Expected: both commands exit `0`; no `style=` JSX props or `Geist`/`Newsreader` imports remain under `src/app` or `src/components`.

- [ ] **Step 6: Commit the visual foundation.**

```powershell
git add src/app/globals.css src/app/layout.tsx src/components/layout src/components/ui/GrainOverlay.tsx src/components/ui/Reveal.tsx
git commit -m "feat: add portfolio v3 visual foundation"
```

## Task 3: Build a reusable metadata-first project card

**Files:**

- Modify: `src/components/ui/ProjectCard.tsx`
- Modify: `src/app/projects/page.tsx`

**Interfaces:**

- Consumes: `Project` from `@/data/projects`.
- Produces: `ProjectCard({ project, index }: { project: Project; index: number }): JSX.Element`; no optional asset prop and no duplicated project metadata model.

- [ ] **Step 1: Replace `ProjectCard` with image and metadata fallback variants.**

Make the entire card one `next/link`. When `project.image` exists, use `Image` with an informative alt of `${project.title} project preview` and responsive `sizes`. When it is absent, render a fixed aspect-ratio `div` with category, zero-padded index, duration, and the first existing `results` metric. In both paths render `category`, `title`, `tagline`, up to four `stack` values, and “Read case study”. Do not use `project.catColor`; the new palette is global and the existing field remains data compatibility only.

- [ ] **Step 2: Refactor `/projects` to compose its grid from the shared card.**

Keep category derivation from `projects`, retain buttons with `aria-pressed`, calculate `filtered` during render, and use a non-mutating `toSorted` ordering derived from `duration`. Replace the in-page card markup with:

```tsx
<div className="project-grid" role="list" aria-live="polite">
  {visibleProjects.map((project, index) => (
    <ProjectCard key={project.id} project={project} index={index} />
  ))}
</div>
```

Add a visually clear heading and filter label. On filter changes, keep focus on the selected filter; do not animate the whole grid with JavaScript.

- [ ] **Step 3: Verify the fallback behavior against actual data.**

Run:

```powershell
rg "image:" src/data/projects.ts
pnpm lint
pnpm typecheck
```

Then manually open `/projects`, select every existing category, and confirm cards with missing `image` show category/date/metric metadata rather than an empty box.

- [ ] **Step 4: Commit the project card system.**

```powershell
git add src/components/ui/ProjectCard.tsx src/app/projects/page.tsx
git commit -m "feat: redesign metadata-led project gallery"
```

## Task 4: Redesign the Home route

**Files:**

- Modify: `src/app/page.tsx`

**Interfaces:**

- Consumes: `projects`, `socialLinks`, `ProjectCard`, and `Reveal`.
- Produces: a server-first `HomePage`; only isolate a small `BackToTopButton` client component if the existing control is retained.

- [ ] **Step 1: Remove the page-level client directive and effect-driven helpers.**

Delete `ScrollProgress`, the existing local `Reveal`, the cursor/inline-gradient treatments, and the hardcoded `areas` content. Preserve the existing selected-work slug order only where matching records exist; use `projects.filter` with a `Set` so source data remains unchanged.

- [ ] **Step 2: Compose the v3 home sequence.**

Implement: (1) a full-viewport editorial hero with a copper eyebrow, name, existing positioning copy, portrait, location, and existing social links; (2) selected work using the shared `ProjectCard`; (3) a concise route CTA to `/projects`; and (4) a mail CTA using `contactInfo.email`. Use `Reveal` only around noncritical sections. Do not duplicate project metrics or create a new skills taxonomy.

- [ ] **Step 3: Apply the responsive contract.**

At 375px, portrait and content stack with the text first in DOM order. At 768px, selected work becomes two columns. At 1280px, the hero uses an editorial 7/5 split and the selected-work grid is three columns where card width remains readable.

- [ ] **Step 4: Validate semantic landmarks and route links.**

Run:

```powershell
pnpm lint
pnpm typecheck
```

Manually confirm one hero `h1`, ordered heading levels, descriptive external-link labels, `/projects` navigation, and no horizontal overflow at 375px.

- [ ] **Step 5: Commit the Home redesign.**

```powershell
git add src/app/page.tsx
git commit -m "feat: redesign portfolio home"
```

## Task 5: Redesign the Journey route

**Files:**

- Modify: `src/app/journey/page.tsx`
- Modify: `src/components/ResumePaper.tsx`

**Interfaces:**

- Consumes: `experiences: Experience[]`, `ResumePaper`.
- Produces: `JourneyTimeline` disclosure behavior using `openId: string | null`; each trigger has `aria-expanded` and `aria-controls`.

- [ ] **Step 1: Replace clickable articles with disclosure buttons.**

For each experience, render the role/organisation/period in a `<button type="button">`, then a paired `<div id={`experience-${exp.id}`} hidden={!isOpen}>`. Toggle only from the button; external partner links remain actual anchors inside the panel. This removes mouse-only article clicks and makes the control operable with Enter and Space.

- [ ] **Step 2: Apply the v3 editorial layout.**

Use a chalk-on-canvas timeline with copper nodes and thin muted rules; retain the résumé as a light `paper` surface. At 375px the résumé follows the timeline; at 768px it remains stacked until room is sufficient; at 1280px use the existing two-column composition with a sticky résumé panel.

- [ ] **Step 3: Restyle `ResumePaper` without editing its content constants.**

Replace v2 green, white, and neutral hardcoded styling with semantic `paper`, `canvas`, `chalk`, `copper`, and muted classes. Keep the exact summary, skills, contact, experience, education, and certification strings.

- [ ] **Step 4: Validate disclosure behavior.**

Run:

```powershell
pnpm lint
pnpm typecheck
```

Manual acceptance: tab reaches each timeline control in order; Enter and Space open/close it; the control’s `aria-expanded` value changes; links inside an open panel remain independently tabbable; desktop shows no clipped résumé.

- [ ] **Step 5: Commit the Journey redesign.**

```powershell
git add src/app/journey/page.tsx src/components/ResumePaper.tsx
git commit -m "feat: redesign editorial career journey"
```

## Task 6: Convert About into an accessible repository-asset vision board

**Files:**

- Create: `src/data/about.ts`
- Create: `src/components/about/VisionBoard.tsx`
- Modify: `src/app/about/page.tsx`

**Interfaces:**

- `VisionBoardItem` is `{ id: string; src: string; alt: string; label: string; span: 'portrait' | 'landscape' | 'square' }`.
- `VisionBoard({ items }: { items: VisionBoardItem[] }): JSX.Element` is a client component.
- `aboutProfile`, `aboutSections`, and `visionBoardItems` live in `src/data/about.ts`; their strings and `/images/...` paths are moved verbatim from the current page.

- [ ] **Step 1: Move existing About content into typed data without wording changes.**

Create `src/data/about.ts` by moving the bilingual biography, education, communities, beyond-work records, trip/activity/favourites image entries, and their existing labels/paths from `about/page.tsx`. Give each image an accurate, non-empty alt derived only from its existing label. Do not add stock imagery, replacement pictures, new countries, new claims, or edited metrics.

- [ ] **Step 2: Implement `VisionBoard` as a keyboard-accessible dialog experience.**

Render each item as a `<button>` containing `next/image`; it opens a native-like `role="dialog" aria-modal="true"` overlay. On open, store `document.activeElement`; on close via Escape, close button, or backdrop, return focus to the opener. Include previous/next buttons only when more than one item exists, each with an `aria-label` containing the destination label. Keep focus trapped between the dialog controls while open. Use CSS classes for all transitions and honor reduced motion.

- [ ] **Step 3: Recompose `/about` as a single editorial vision board.**

Make the page server-rendered by removing `'use client'`. Render existing narrative and education alongside `VisionBoard`, with semantic sections for communities, exploration, beyond work, and shelf. Replace independent client state for language, active section, per-community carousel, and touch gestures with accessible content sections and the one vision-board dialog interaction. The board must use CSS grid spans: one column at 375px, two at 768px, and asymmetric twelve-column placement at 1280px.

- [ ] **Step 4: Verify all assets and dialog behavior.**

Run:

```powershell
rg "src: '/images/" src/data/about.ts
pnpm lint
pnpm typecheck
```

Manually at 375px and 1280px: open a board item by keyboard, move to the next/previous item, press Escape, and confirm focus returns to the originating tile. Confirm every image resolves and no modal is required to read the page narrative.

- [ ] **Step 5: Commit the About redesign.**

```powershell
git add src/data/about.ts src/components/about/VisionBoard.tsx src/app/about/page.tsx
git commit -m "feat: add accessible about vision board"
```

## Task 7: Run the final responsive, accessibility, and release validations

**Files:**

- Modify only if verification exposes a defect: files changed in Tasks 2–6.
- Modify: `docs/v3/HANDOFF.md` to append the completed implementation and verification record.

**Interfaces:**

- Consumes: completed v3 routes and global motion system.
- Produces: a verified release candidate; no changes to data content, dependencies, configuration, or immutable `docs/v3/sources/*`.

- [ ] **Step 1: Run the required static checks in order.**

```powershell
pnpm lint
pnpm typecheck
pnpm build
```

Expected: all commands exit `0` with zero ESLint errors, zero TypeScript errors, and a successful Next.js production build.

- [ ] **Step 2: Perform route and viewport checks.**

Run `pnpm dev`, then inspect `/`, `/projects`, `/journey`, and `/about` at 375px, 768px, and 1280px. Confirm: no horizontal scrolling; no overlapping fixed navigation; visible focus indicators; usable mobile navigation; no image distortion; no missing project fallback; readable chalk/muted text over its surface; and no layout shift caused by the grain overlay.

- [ ] **Step 3: Perform motion and keyboard checks.**

In browser emulation with reduced motion enabled, confirm reveal content is immediately visible, scrolling is not smooth, cards do not translate on hover/focus, and the About dialog opens/closes without a transition dependency. With standard motion, confirm decorative transitions are limited to opacity/transform and do not prevent interaction.

- [ ] **Step 4: Update the v3 handoff with evidence.**

Append the exact commands and pass results, list the four redesigned routes, note the tested widths, and state that `docs/v3/sources/*` remained unchanged after the rename commit.

- [ ] **Step 5: Commit verification evidence.**

```powershell
git add docs/v3/HANDOFF.md src
git commit -m "docs: record portfolio v3 verification"
```

## Final Coverage Check

- Canonical documents and immutable source renames: Task 1.
- v3 harness pointers: Task 1.
- Velvet-charcoal/copper, approved fonts, native motion, and reduced motion: Task 2 and Task 7.
- Metadata-led project fallback cards: Task 3.
- Home, Projects, Journey, and About redesign: Tasks 3–6.
- Repository-only About vision board: Task 6.
- 375px, 768px, 1280px, keyboard, and build gates: Task 7.
- Data authority and no invented content: global constraints and every route task.
