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
│   ├── page.tsx              # Home — hero, featured projects, essays, CTA
│   ├── layout.tsx            # Root layout (Nav + Footer)
│   ├── projects/page.tsx     # Gallery — filterable project cards
│   ├── projects/[slug]/page.tsx  # Case study detail
│   ├── essays/page.tsx       # Essays list
│   ├── essays/[slug]/page.tsx    # Individual essay
│   ├── about/page.tsx        # About page
│   ├── journey/page.tsx      # Experience timeline
│   ├── skills/page.tsx       # Skills directory
│   └── resume/page.tsx       # Resume viewer + download
├── components/
│   ├── layout/               # Nav.tsx, Footer.tsx
│   └── ui/                   # ProjectCard, EssayCard, MetricCard, TechTag, etc.
├── data/                     # projects.ts, essays.ts, experience.ts, social.ts
└── lib/                      # cn helper, utilities
```

`@/*` import alias maps to `./src/*`.

## Tailwind v4 specifics
- Uses `@tailwindcss/postcss` plugin (not the v3 Tailwind plugin)
- Tailwind CSS v4 + `tailwind-merge` + `clsx` for class composition
- No CSS modules, no inline styles — Tailwind classes only
- Colors: white background, near-black text, emerald accent — NOT dark navy/teal

## Content rules
- All text lives in `src/data/*.ts` — do NOT rewrite or invent metrics
- Four project slugs: `bike-share-optimization`, `ai-technical-debt-research`, `accounting-automation`, `exam-analysis-system`
- Essays are NOT written yet — MDX placeholder structure only
- Redirect: `/blog` and `/blog/:slug` → `/essays` (configured in next.config.ts)
- No Lorem Ipsum, no invented numbers

## Design conventions
- Mobile-first: 375 → 768 → 1280
- Semantic HTML + aria-labels on all interactive elements
- No Inter/Roboto/Arial fonts — DM Sans + Manrope via next/font
- `any` type is a lint error — TypeScript strict throughout

## Reference docs
- `docs/PRD.md` — full product spec
- `docs/ARCHITECTURE.md` — architecture decisions
- `docs/progress.txt` — current progress tracker
- `CLAUDE.md` — previous instruction file (some details may be outdated)
