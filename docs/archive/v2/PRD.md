# Feature: Portfolio Website v2 — Complete Build
> Build richardpillaca.com: a professional portfolio for Richard Pillaca Burga,
> Data Analyst & BI Developer, using Next.js 16 → deploy on Vercel.

## Goal
A clean, personal, professional portfolio that showcases 4 data projects with
full case studies, an essays/blog section, and a personal About page.
Design language: Michelle Liu (minimal/clean) + Vipul Soni (project depth).

## Pages to Build (Acceptance Criteria)

### Home (/)
- [ ] Name, title, one-liner visible above the fold
- [ ] 4 project cards with: category tag, title, tagline, 2-3 metrics, tech tags
- [ ] Cards are clickable → navigate to /projects/[slug]
- [ ] 2-3 recent essays section
- [ ] Contact CTA in footer

### Projects Gallery (/projects)
- [ ] Visual cards (not a list) for all 4 projects
- [ ] Filter by category (DATA SCIENCE / RESEARCH / EXCEL AUTOMATION / FULL STACK)
- [ ] Click → individual case study

### Individual Project Page (/projects/[slug])
- [ ] Title + category tag + duration + read time
- [ ] Project Overview (2-3 paragraphs)
- [ ] Problem section (highlighted box)
- [ ] Questions Addressed (numbered list)
- [ ] Methodology (phased sections with tech tags)
- [ ] Key Results (metric cards with big numbers)
- [ ] Key Findings (highlighted insights)
- [ ] Conclusion paragraph
- [ ] Tech Stack + GitHub link

### Essays (/essays)
- [ ] List view: title, date, read time, tags
- [ ] Substack subscribe CTA
- [ ] Individual essay page renders MDX

### About (/about)
- [ ] Professional section: photo, name, title, certifications
- [ ] Journey section: narrative text (Peru → UBC → Toronto)
- [ ] Beyond Work: football, travel, dance, languages, currently
- [ ] Skills grid + certifications
- [ ] Education section

### All Pages
- [ ] Responsive at 375px, 768px, 1280px
- [ ] Accessible: semantic HTML, aria-labels
- [ ] pnpm build — zero errors
- [ ] pnpm lint — zero errors
- [ ] Font is NOT Inter/Roboto/Arial
- [ ] NO dark navy/teal color scheme

## Projects (content already written — use as-is from prototype)
| Slug | Title | Category | Hero Metric |
|------|-------|----------|-------------|
| bike-share-optimization | Bike Share Network Optimization v2 | DATA SCIENCE | 2M+ records |
| ai-technical-debt-research | AI Technical Debt in Software Repositories | RESEARCH | 5,000+ repos |
| accounting-automation | Accounting Journal Entry Automation | EXCEL AUTOMATION | 4 hrs → 12 min |
| exam-analysis-system | Exam Analysis System | FULL STACK | 100K+ students |

## Out of Scope (this build)
- Blog CMS or admin interface — essays are MDX files, hand-edited
- Authentication of any kind
- Contact form backend — email link only

## Tech Notes
- Framework: Next.js 16 App Router
- Styling: Tailwind CSS only (no CSS modules, no styled-components)
- Content: TypeScript data objects in src/data/ + MDX for essays
- Deploy: Vercel (push to main → auto-deploy)
- No database — pure static + ISR

## Definition of Done
All page acceptance criteria checked. Deployed to Vercel.
Looks correct on mobile + desktop. Zero build errors. Zero lint errors.
