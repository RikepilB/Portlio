# Portfolio v3 — Interface Contract

## September 2026 content expansion

Richard explicitly authorizes restructuring outside the existing hero. Preserve the hero markup,
portrait, type, colors and layout. Keep the existing felt/gold tokens and three font families.
Recruiters need evidence of ownership; collaborators need current entry points and release limits.
Home remains work-first, followed by recent activity, writing and capabilities. Activity separates
public releases, contributed work and proposed ideas. Reading is a small annotated resource shelf,
not a claim that Richard has read every book. Add Activity and Reading to the footer; Activity to
main navigation. Project status reports distinguish public release, research, prototype and unknown
availability. Do not manufacture project completion percentages from tests, commits or age.

Use compact editorial rows with dates and real links instead of contribution heatmaps or vanity
counters. Reuse existing Reveal/motion facilities, respect reduced motion, and make sound off by
default with an explicit control and visual state. No decorative 3D model without a product role,
licensed asset and static fallback. No new animation dependency is needed for this expansion.

Verify EN/ES routes, mobile overflow, keyboard controls, sound failure recovery and hero preservation.
Run lint, typecheck, build and the relevant content tests. Capture representative desktop/mobile
renders and record the visual verdict here before completion.

### Rendered review — 2026-09-14

September 15 extension: Activity must surface Richard's own projects alongside contributions.
The library groups authored essays/posts separately from suggested reading. Beyond Code uses
the user-supplied football, travel, dance, French and journaling details. Learning labels follow
the current profile source; in-progress credentials must not appear earned. Spotify requires an
actual profile/playlist URL; do not invent a player, favorites or listening history.

Pass for the scoped expansion: Activity reviewed at desktop and 390px mobile, Spanish Reading
reviewed at 390px, and navigation checked at 768px. Felt/gold hierarchy and restrained editorial
rows remain coherent with the approved site. No horizontal overflow in those checks. Activity
filters returned three contributions and two releases; Enter activates filters. Sound defaults
off, toggles on/off visibly and remains optional. Browser error log was empty in the checked
routes. Mobile menu opens Activity; Home still shows the approved hero. Heading levels corrected
so standalone Activity entries use h2, with h3 only inside the Home section. Sound error fallback
and reduced-motion handling were reviewed in code; forced unsupported-audio behavior was not
browser-tested. No new movement animation was introduced. No user visual approval is implied.

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

1. Editorial split hero: name and kicker left, portrait right, primary CTA View work.
2. Selected work — six featured image-first project cards; full catalog on `/projects`.
3. Writing — essays in reach from Home and primary nav.
4. Skills & Stack — three area cards embedded on the page.
5. Supporting CTAs and footer.

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
- Manrope for body/UI; Cormorant Garamond for headings and italic kickers;
  JetBrains Mono for compact metadata. Do not use Montserrat.

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


## September 15 expanded-profile review

The user explicitly approved content reorganization outside the hero. Activity foregrounds seven own-project links, keeps three upstream contributions distinct, and labels the supplied GitHub count as a dated snapshot. Library leads with existing essays and real author channels before suggested reading. Beyond Code uses a simple readable definition list rather than more decorative cards; the scrapbook remains available below. Certification preparation is not represented as an earned credential.

Rendered review: desktop Activity project filter shows seven linked entries; Contributions shows three. Spanish Library at 390px shows nine writing/reference entries without horizontal overflow. English Beyond Code at 390px retains comfortable wrapping and visible links. Spanish Activity sound toggles on/off only by action; no errors in browser console. Preserved felt/gold type hierarchy, restrained borders, no decorative progress bars or fabricated heatmap. Native browser had one transient click transport timeout; reinspection and retry succeeded. Lint, typecheck, production build (62 pages) and 14 tests pass. Existing middleware deprecation remains outside scope.

Production verification: PR #38 (`dc1ae5a`) deployed successfully; desktop Activity filters and mobile Spanish Library/About verified live with no overflow. Fresh production console had no errors. Final test suite: 15 passed. See the September 15 publication receipt.
