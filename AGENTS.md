# AGENTS.md — Richard Pillaca Portfolio

## Stack
- Next.js 16 (App Router), React 19, TypeScript strict, Tailwind CSS v4, pnpm
- Pure static site — no database, no API routes
- Deployed on Vercel (push to `main` → auto-deploy, preview URL per PR)

## Commands
```bash
pnpm install          # node-linker=hoisted (see .npmrc)
pnpm dev              # http://localhost:3000
pnpm build            # must pass zero errors — definition of done
pnpm lint             # eslint src/ (flat config)
npx tsc --noEmit      # type check only (separate from build)
```

## Verification order: `pnpm lint` → `npx tsc --noEmit` → `pnpm build`
All three must pass before marking work complete.

## Architecture
```
src/
├── app/                      # App Router pages
│   ├── page.tsx              # Home — hero, image-led work, embedded Skills
│   ├── layout.tsx            # Root layout (Nav + Footer)
│   ├── projects/page.tsx     # Gallery — felt/gold filterable cards
│   ├── projects/[slug]/page.tsx  # Case study detail
│   ├── essays/page.tsx       # Essays list (preserved, not primary nav)
│   ├── essays/[slug]/page.tsx    # Individual essay
│   ├── about/page.tsx        # About — pearl satin + rose-gold vision board
│   ├── journey/page.tsx      # Journey — timeline + embedded Resume
│   ├── skills/page.tsx       # Redirects to /
│   └── resume/page.tsx       # Redirects to /journey
├── components/
│   ├── layout/               # Nav.tsx, Footer.tsx
│   └── ui/                   # ProjectCard, EssayCard, MetricCard, TechTag, etc.
├── data/                     # projects.ts, essays.ts, experience.ts, social.ts
└── lib/                      # cn helper, utilities
```

`@/*` import alias maps to `./src/*`.

Primary nav: Home, About, Journey, Projects (+ Get in touch).

## Tailwind v4 specifics
- Uses `@tailwindcss/postcss` plugin (not the v3 Tailwind plugin)
- Tailwind CSS v4 + `tailwind-merge` + `clsx` for class composition
- No CSS modules, no inline styles — Tailwind classes only
- Felt/gold tokens live in `src/app/globals.css` `@theme`

## Content rules
- `src/data/` is authoritative for project scope, names, content, metrics, dates, tags, and media;
  do NOT rewrite or invent metrics.
- Essays use the current TypeScript-data placeholder model; do not introduce an MDX architecture
  or dependency without an explicit scope change.
- Redirects: `/blog` → `/essays`, `/skills` → `/`, `/resume` → `/journey`
- No Lorem Ipsum, no invented numbers
- Structural rule: v2 page composition is immutable; v3 is a re-skin

## Design conventions
- Semantic HTML + aria-labels on all interactive elements
- `any` type is a lint error — TypeScript strict throughout
- Selective framer-motion + shadcn/ui allowed; CSS fallback + reduced-motion required

## V3 contracts

For branding, fonts, project scope, content-model facts, responsive design requirements, and
motion/accessibility behavior, defer to:

- `docs/v3/branding.md` — sage felt + gold foil identity
- `docs/v3/PRD.md` — v2 structure preserved, felt/gold scope
- `docs/v3/design.md` — responsive + motion contract

These contracts supersede legacy product and planning documentation for v3 work. The immutable
felt inputs in `docs/v3/sources/` do not override them or `src/data/`. Velvet-era drafts in
`docs/archive/v3-sources-velvet/` are provenance only.

## Reference docs
- `docs/v3/branding.md` — canonical v3 identity contract
- `docs/v3/PRD.md` — canonical v3 product contract
- `docs/v3/design.md` — canonical v3 responsive design contract
- `docs/ARCHITECTURE.md` — architecture decisions
- `docs/decisions.md` — supersession ADRs
- `PRODUCT.md` / `DESIGN.md` — impeccable context mirrors of the v3 canon
