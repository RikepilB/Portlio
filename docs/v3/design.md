# Portfolio v3 — Interface Contract

## Canonical status

This document defines responsive and interaction behavior for the felt/gold re-skin. Pair with
[`branding.md`](./branding.md) and [`PRD.md`](./PRD.md). Content remains owned by `src/data/`.

## Responsive contract

| Viewport | Layout expectation |
| --- | --- |
| **375px** | One primary column, touch-safe controls (≥44px), no horizontal overflow, full-width shell occupancy. |
| **768px** | Deliberate two-column or split layouts where content benefits; filters usable without hover. |
| **1280px** | Center-balanced heroes, editorial whitespace, broader project rhythm without unreadable line lengths. |

Layouts are mobile-first. Reading order, keyboard order, and complete content must hold at every width.

## Route anatomy

### Home

1. Center-balanced hero with portrait, gold-foil name treatment, soft top-left radial lighting.
2. My Work — image-led project rows (v2 `ProjectRow` structure preserved).
3. Skills & Stack — three area cards embedded on the page.
4. Supporting CTAs and footer.

### Projects

1. Page heading and category filters.
2. Felt panel gallery cards (`FeltProjectCard` language): stamped Cormorant label, white bold
   title, gold-foil CTA with optional cursor-tracked gradient.
3. Use project images from `src/data` when present; otherwise metadata-led fallback.
4. Each card exposes its case-study destination without requiring hover.

### Journey

1. Clear page introduction + external résumé link.
2. Two-column layout: expandable timeline (felt surfaces) + embedded `ResumePaper` (satin pearl).
3. Accessible disclosure controls for timeline entries.

### About

1. Narrative introduction on mist blue-grey (`#D0D7DE`) satin canvas with soft left lighting.
2. Silver-foil display titles; anthracite body copy; Cormorant italic kickers.
3. Existing-media vision board (Communities, Exploring, Beyond Work, Shelf) — static-image motion
   only; no new video files.
4. Meaningful alternative text on all images.
5. Clean-girl / accessible-luxury whitespace; matte surfaces; polaroids as tactile photo frames.

## Surface, spacing, and type

- Primary routes use sage felt casing; About uses pearl satin.
- Gold foil (or rose gold on About) is reserved for meaningful emphasis and interactive CTAs.
- Preserve v2 shell utilities (`--spacing-gutter`, `--spacing-shell`) so pages fill the viewport.
- Manrope/Montserrat for display and body; Cormorant Garamond italic / Cinzel for stamped labels;
  JetBrains Mono for compact metadata.

## Motion and interaction

- Selective `framer-motion` for entrances and foil hover; CSS fallbacks required.
- Decorative linen texture is static (3–5% opacity) and never blocks input.
- Hover can add polish, but titles, descriptions, links, metadata, and controls are visible and
  operable by default and by keyboard.
- With `prefers-reduced-motion`, remove nonessential entrance, cursor-tracking, and continuous
  motion while preserving all information and interaction.

## Baseline-ui overrides (explicit)

The cinematic felt/gold treatment intentionally allows:

- Gradient text for gold-foil treatments
- Wide letter-spacing on display banners
- Linen/felt texture overlays at low opacity

These override baseline-ui bans only where branded foil/texture is specified.
