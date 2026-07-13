# Vision Board About Page

## Context
The user wants an "About" page styled as an interactive **vision board / mood board**, organized into four labelled sections: **Communities, Exploring, Beyond Work, Shelf**. Three references were provided:
- `src/imports/image.png` — the **aesthetic target**: a warm cream/beige scrapbook mood board of scattered polaroids and handwritten quotes.
- `src/imports/pasted_text/about-page.tsx` — the **interaction pattern**: draggable `motion.div` "vision nodes" (polaroids + handwritten quote cards) with spring animations.
- `src/imports/Screenshot_...Richard_Pillaca.png` — the **content source**: the real About-page copy for each section (Richard Pillaca, from Peru, UBC Okanagan alumnus, Toronto-based analytics/frontend engineer; community involvements; countries explored; football/travel/nature; reading & languages).

**Decisions (confirmed with user):** Warm cream mood-board aesthetic; pieces are **draggable & rearrangeable**.

Currently `src/app/App.tsx` is an empty placeholder. No `@make-kits` design system is installed — only shadcn-style `ui/` components and `ImageWithFallback` exist.

## Approach
Build a warm, draggable vision-board About page in `App.tsx`, composed of small reusable board components. Use `motion/react` (NOT `framer-motion`, which is not installed — the pasted code's `framer-motion` import must be swapped). Do not edit anything in `imports/` (read-only). Seed content from the screenshot; source photos from Unsplash to match the warm mood-board vibe.

### Files to create/modify
- **`src/styles/fonts.css`** — add font imports at top: a serif/handwritten display for headings/quotes (e.g. `Playfair Display` + a script like `Caveat`) and a clean sans (e.g. `Inter`). Fonts only go here.
- **`src/app/App.tsx`** — main page; default export. Renders the four sections stacked vertically, each a "board" region with a big section title and scattered draggable pieces.
- **`src/app/components/vision-board.tsx`** — reusable primitives:
  - `BoardCanvas` — a `relative` positioned canvas region that holds scattered pieces (per section).
  - `DraggablePiece` — wraps `motion.div` with `drag`, `dragMomentum={false}`, `dragConstraints`, entrance animation (`whileInView`), initial rotation, hover shadow lift, `cursor-grab`. Adapted from the pasted `VisionNode` but on the cream palette.
  - `PolaroidCard` — image (via `ImageWithFallback`) + caption, white matte frame, drop shadow.
  - `QuoteCard` — handwritten/script italic quote on paper.
  - `TagChip` / `FlagChip` — small pills for the Exploring countries.
- **`src/app/components/sections/`** — one component per section: `communities.tsx`, `exploring.tsx`, `beyond-work.tsx`, `shelf.tsx`, each laying out its pieces on a `BoardCanvas`.

### Design tokens (warm cream palette)
Define shared palette values once (CSS custom properties in a scoped block in `globals.css` OR a tokens object referenced across components — pick CSS vars). Approx: background `#F2EBE1`/`#EDE4D6` warm cream gradient; paper `#FDFBF7`; ink `#3A342C`; muted `#8A8072`; soft accent terracotta `#C08457`. No raw hex scattered — reference tokens.

### Section content (from screenshot)
- **Hero**: "Hi, I'm Richard!" intro line — from Peru, UBC Okanagan alumnus, Toronto analytics + frontend engineer. Small handwritten quote.
- **Communities**: polaroid/cards for Latin American Student Assoc, Registration.io, WorkDough Volunteers, Manager Tech Advisory, BookFever, Ottawa Latino Canada, French/CS Immersion, Canadian Career Mentor, Anti-Villain Mentor.
- **Exploring**: intro line + flag/tag chips: Canada, Peru, Switzerland, France, Ecuador, USA, San Ramón.
- **Beyond Work**: Football, Travel, Nature pieces (icon + short blurb; use `lucide-react` icons).
- **Shelf**: Reading + Languages pieces; a "currently reading" note.

### Images
Source ~6–10 warm-toned photos via the Unsplash MCP tool (`mcp__plugin_make_unsplash__search_photos`) matching the mood board (workspace, travel, football, books, nature, coffee). Render with `ImageWithFallback`, importing bindings correctly. Where a real photo isn't needed, use the paper-placeholder style from the reference.

### Interactivity & responsiveness
- Draggable pieces via `motion/react`; `dragConstraints` set to each section's canvas ref so pieces stay in-bounds.
- Subtle entrance stagger with `whileInView` + `viewport={{ once: true }}`.
- Absolute scatter positioning is desktop-first; at narrow widths collapse each `BoardCanvas` to a stacked/relative flow (drag still allowed) so nothing clips. Use `clamp()`/relative units for type.

## Verification
- Run the app via the `run` skill / preview surface (dev server already running — do not start it) and confirm: four labelled sections render, pieces are draggable and stay in bounds, images load, warm cream palette applied, and layout holds on mobile and desktop widths.
- Confirm no `framer-motion` import remains (use `motion/react`); confirm `App.tsx` has a default export and nothing in `imports/` was modified.
