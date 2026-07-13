# Portfolio v3 — Product Requirements

## Canonical status

This PRD defines v3 product scope. [`branding.md`](./branding.md) defines identity;
[`design.md`](./design.md) defines the responsive interface contract. Live content comes from
`src/data/`. Felt/gold source drafts in [`sources/`](./sources/) cannot replace it.

## Goal

Re-skin richardpillaca.com into an immersive felt-and-gold interface that mimics premium tactile
packaging, while preserving the proven v2 page structure and all authoritative content.

## Structural rule

**v2 page composition is immutable.** v3 changes presentation (tokens, type, texture, motion,
card chrome), not information architecture or section order.

## In-scope routes

- **Home (`/`):** Center-balanced hero, image-led featured project rows, embedded Skills & Stack,
  clear paths into the portfolio.
- **Projects (`/projects`):** Filterable gallery; felt panel cards with gold-foil CTAs; images
  where `src/data` provides them, metadata fallback otherwise.
- **Journey (`/journey`):** Expandable experience timeline beside an embedded satin-paper resume.
- **About (`/about`):** Pearl-satin + rose-gold complementary theme; vision board from existing media.

## Navigation

Primary nav: Home, About, Journey, Projects + Get in touch.

- Skills content remains embedded on Home; `/skills` redirects to `/`.
- Resume remains embedded on Journey; `/resume` redirects to `/journey`.
- Essays routes remain available (`/essays`, `/essays/[slug]`) but are not primary nav tabs.
- Case studies: `/projects/[slug]`
- Redirects: `/blog` → `/essays`, `/blog/[slug]` → `/essays/[slug]`

## Allowed dependencies

- `framer-motion` — selective entrances and foil hover; CSS fallback + reduced-motion required.
- `shadcn/ui` — small set of primitives (button, card, badge, dialog) themed to felt/gold tokens.

## Content rules

- `src/data/` is authoritative for project names, descriptions, metrics, dates, tags, media, and
  experience content.
- Do not invent or revise numerical claims.
- About vision board uses only media already present in the repository.

## Acceptance criteria

1. v2 section structure remains on Home, Projects, Journey, and About.
2. Home shows image-led project rows and embedded Skills; Journey shows embedded Resume.
3. Project cards use felt/gold visual language; missing images fall back to metadata composition.
4. Nav has no Skills or Resume tabs; old URLs redirect correctly.
5. Every in-scope route works at 375px, 768px, and 1280px with full-width occupancy.
6. Keyboard navigation, visible focus, semantic landmarks, readable contrast, and
   `prefers-reduced-motion` support are present.
7. Motion and hover effects are supplementary — no required information is hover-only.
