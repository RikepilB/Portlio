# Architecture: Portfolio Website

## Tech Decisions
| Decision | Choice | Why |
|----------|--------|-----|
| Framework | Next.js 16 App Router | Best for Vercel + page routing + SEO |
| Styling | Tailwind CSS v4 | Utility-first, no runtime overhead |
| Content | TypeScript data files in `src/data/` | No CMS needed, type-safe content |
| Deployment | Vercel | Zero config, preview URLs per PR |
| Font loading | next/font | Optimized, no layout shift |
| Images | next/image | Automatic optimization + WebP |

## Site Map
```
richardpillaca.com/
├── /                          → Home (hero, featured work, embedded skills)
├── /about                     → Personal narrative + vision board
├── /journey                   → Experience timeline + embedded resume
├── /projects                  → Filterable project gallery
│   └── /projects/[slug]       → Case study detail
├── /essays                    → Essays list (preserved route)
│   └── /essays/[slug]         → Individual essay
├── /skills                    → Redirects to /
└── /resume                    → Redirects to /journey
```

Primary nav: Home, About, Journey, Projects (+ Get in touch CTA).

## Component Hierarchy
```
layout.tsx (Root)
├── <Nav />
├── {children}
└── <Footer />

src/
├── app/                 # App Router pages
├── components/
│   ├── layout/          # Nav, Footer
│   └── ui/              # Cards, tags, overlays
├── data/                # projects, essays, experience, social (authoritative)
└── lib/                 # cn helper, utilities
```

## Data Layer
```
src/data/
├── projects.ts      — All portfolio projects (authoritative)
├── essays.ts        — Essay metadata
├── experience.ts    — Journey timeline
└── social.ts        — Contact / social links
```

## Key Patterns
- Dynamic routes use `generateStaticParams()` for project and essay slugs
- Essays use the TypeScript data placeholder model (no MDX architecture unless explicitly scoped)
- All images via `next/image` with explicit dimensions where possible
- Client components only for interaction islands (filters, mobile menu, motion)
- Design contracts live in `docs/v3/` (branding, PRD, design)
