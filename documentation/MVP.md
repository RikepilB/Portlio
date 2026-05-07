# MVP Definition
# Richard Pillaca — Portfolio Website v2

**Status:** MVP shipped and deployed to Vercel.

---

## What Is the MVP?

The MVP is the smallest set of pages and features that make the portfolio **hireable** — professional enough for a hiring manager to evaluate Richard's work and reach out.

---

## MVP Scope (shipped)

### Core Pages

| Page | Why It's in MVP | Status |
|------|-----------------|--------|
| Home `/` | First impression — name, title, key metrics, featured projects | ✅ Done |
| Projects Gallery `/projects` | Browse all work in one place | ✅ Done |
| Project Case Studies `/projects/[slug]` | Deep-dive on each project — proves analytical depth | ✅ Done |
| About `/about` | Human context — who Richard is beyond the résumé | ✅ Done |
| Essays `/essays` | Demonstrates communication and thinking style | ✅ Done |
| Navigation + Footer | Consistent UX scaffolding on all pages | ✅ Done |

### Content Minimum
- All 6 project case studies with: overview, problem, methodology, results, findings, conclusion
- 3 essay stubs (content deferred to Substack cross-post)
- About page with: professional info, journey, skills, certifications, communities
- Resume download link

### Technical Minimum
- `pnpm build` passes — zero errors
- Deployed to Vercel with a live URL
- Responsive at 375px (mobile), 768px (tablet), 1280px (desktop)
- OpenGraph metadata (title + description) for social sharing

---

## What Was Deferred (Post-MVP)

| Feature | Reason Deferred |
|---------|----------------|
| Full MDX essay content | Writing takes time; stubs are enough for launch |
| Substack subscribe widget | Third-party integration, not blocking |
| Dark mode toggle | Scope creep; adds complexity |
| Contact form with backend | Out of scope by design — email link suffices |
| CMS / admin panel | Over-engineering for a personal portfolio |
| Animations beyond cursor bubble | Performance risk; adds little hiring value |
| `demoVideo` live links | Video hosting setup (Google Drive links) deferred |

---

## MVP Quality Gates

Every page must pass before marking it done:

```
pnpm build       → exit 0  (zero build errors)
pnpm lint        → exit 0  (zero ESLint errors)
npx tsc --noEmit → exit 0  (TypeScript strict mode)
```

- Mobile layout correct at 375px
- All links functional (no 404s on valid slugs)
- `pnpm build` output shows no warnings in page generation

---

## What Makes This More Than a Typical Portfolio MVP

Most portfolio MVPs are single-page "About Me" sites. This MVP includes:

1. **6 full case studies** — each with methodology, metrics, and findings
2. **Dynamic routing** — `/projects/[slug]` with `generateStaticParams()`
3. **Filterable gallery** — client-side category filtering with no external library
4. **Journey timeline** — filterable by experience type
5. **E2E test suite** — 16 Testsprite tests covering all critical paths
6. **SEO metadata** — OpenGraph on every page, not just home

This scope was chosen because the audience (technical hiring managers) will click through to case studies and judge depth — not just visual polish.
