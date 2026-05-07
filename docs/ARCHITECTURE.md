# Architecture: Portfolio Website v2

## Tech Decisions
| Decision | Choice | Why |
|----------|--------|-----|
| Framework | Next.js 16 App Router | Best for Vercel + page routing + SEO |
| Styling | Tailwind CSS | Utility-first, no runtime overhead |
| Content | TypeScript data files + MDX | No CMS needed, type-safe content |
| Deployment | Vercel | Zero config, preview URLs per PR |
| Font loading | next/font | Optimized, no layout shift |
| Images | next/image | Automatic optimization + WebP |

## Site Map
```
richardpillaca.com/
├── /                          → Home
├── /projects                  → Gallery of 4 projects
│   ├── /projects/bike-share-optimization
│   ├── /projects/ai-technical-debt-research
│   ├── /projects/accounting-automation
│   └── /projects/exam-analysis-system
├── /essays                    → Blog list
│   └── /essays/[slug]         → Individual post (MDX)
├── /about                     → Personal + professional About
└── (contact is footer section on every page)
```

## Component Hierarchy
```
layout.tsx (Root)
├── <Nav />                    — Fixed top, links to all pages
├── {children}                 — Page content
└── <Footer />                 — Contact links, email, GitHub, LinkedIn

page.tsx (Home)
├── <HeroSection />            — Name, title, CTA
├── <FeaturedProjects />       — 4 <ProjectCard /> components
├── <RecentEssays />           — 2-3 <EssayCard /> components
└── <ContactCTA />

[slug]/page.tsx (Project)
├── <ProjectHeader />          — Title, tags, meta
├── <ProjectOverview />        — Summary paragraphs
├── <ProblemSection />         — Highlighted problem box
├── <MethodologySection />     — Phased breakdown
├── <MetricCards />            — Big numbers
├── <FindingsSection />        — Key insights
└── <ProjectFooter />          — Tech stack + GitHub link
```

## Data Layer
```
src/data/
├── projects.ts    — Array of ProjectData objects (all 4 projects)
├── essays.ts      — Essay metadata (title, date, slug, tags)
└── personal.ts    — Skills, certifications, experience timeline
```

## Key Patterns
- Dynamic routes use generateStaticParams() for all project slugs
- Essays are MDX files in src/content/essays/ rendered with next-mdx-remote
- All images via next/image with explicit width/height to prevent CLS
- No client components unless: form input, scroll detection, mobile menu
