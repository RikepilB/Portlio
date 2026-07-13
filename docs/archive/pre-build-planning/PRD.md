# Product Requirements Document
# Richard Pillaca — Portfolio Website v2

**Owner:** Richard Pillaca Burga
**Stack:** Next.js 16 · TypeScript · Tailwind CSS · Vercel
**Status:** Production — deployed at richardpillaca.com
**Last Updated:** 2026-03-02

---

## 1. Overview

A clean, personal, professional portfolio for Richard Pillaca Burga — Data Analyst & BI Developer based in Toronto, Canada. The site showcases project case studies, an essays/blog section, a personal About page, a Journey timeline, a Skills directory, and a Resume.

**Design reference:** Michelle Liu (minimal/clean) + Vipul Soni (project depth) + Noah Barbaros (essays).
**Target audience:** Hiring managers, technical recruiters, potential collaborators.

---

## 2. Goals

| Goal | Success Metric |
|------|----------------|
| Present 6 project case studies with depth | All 6 slugs render full case study pages |
| Establish personal brand (not generic AI look) | No dark navy/teal, no Inter/Roboto/Arial |
| Mobile-first, accessible | Passes at 375px, 768px, 1280px |
| Zero build errors | `pnpm build` exits 0 |
| SEO-ready | OpenGraph metadata on all pages |

---

## 3. Pages & Acceptance Criteria

### 3.1 Home (`/`)
- [x] Name, title, one-liner visible above the fold
- [x] Metrics strip (key personal stats)
- [x] Featured Projects section — 3 highlighted project cards
- [x] Cards are clickable → `/projects/[slug]`
- [x] Recent Essays section (2–3 essays)
- [x] Contact CTA in footer

### 3.2 Projects Gallery (`/projects`)
- [x] Visual cards (not a list) for all 6 projects
- [x] Filter by category: ALL / DATA SCIENCE / RESEARCH / EXCEL AUTOMATION / FULL STACK
- [x] Click → individual case study

### 3.3 Individual Project Page (`/projects/[slug]`)
- [x] Title, category tag, duration, read time
- [x] Project Overview (2–3 paragraphs)
- [x] Problem section (highlighted box)
- [x] Questions Addressed (numbered list)
- [x] Methodology (phased sections with tech tags)
- [x] Key Results (metric cards with big numbers)
- [x] Key Findings (highlighted insights)
- [x] Conclusion paragraph
- [x] Tech Stack + GitHub link
- [x] Image gallery for applicable projects

### 3.4 Essays (`/essays`)
- [x] List view: title, date, read time, tags
- [x] Individual essay page renders (placeholder content)
- [ ] Substack subscribe CTA (deferred)

### 3.5 About (`/about`)
- [x] Professional photo, name, title, certifications
- [x] Journey narrative (Peru → UBC → Toronto)
- [x] Beyond Work: football, travel, dance, languages, currently
- [x] Skills grid + certifications
- [x] Education section
- [x] Community involvement

### 3.6 Journey (`/journey`)
- [x] Interactive timeline of all experiences
- [x] Filter by type: ALL / WORK / RESEARCH / EDUCATION / VOLUNTEER
- [x] Each entry: role, org, period, description, bullet highlights

### 3.7 Skills (`/skills`)
- [x] Categorized skill grid (Data & BI, Development, Languages, Tools)
- [x] Certifications section

### 3.8 Resume (`/resume`)
- [x] Embedded PDF resume viewer
- [x] Download button

### 3.9 All Pages
- [x] Responsive at 375px, 768px, 1280px
- [x] Semantic HTML + aria-labels
- [x] `pnpm build` — zero errors
- [x] `pnpm lint` — zero errors
- [x] Font: DM Sans (body) + Manrope (headings)
- [x] No dark navy/teal color scheme
- [x] OpenGraph metadata

---

## 4. Projects

| # | Slug | Title | Category | Hero Metric |
|---|------|-------|----------|-------------|
| 1 | `bike-share-optimization` | Bike Share Network Optimization | DATA SCIENCE | 2M+ records |
| 2 | `ai-technical-debt-research` | AI Technical Debt in Software Repositories | RESEARCH | 5,000+ repos |
| 3 | `accounting-automation` | Accounting Journal Entry Automation | EXCEL AUTOMATION | 4 hrs → 12 min |
| 4 | `exam-analysis-system` | ExamVault — Automated Exam Generation & Analysis | FULL STACK | 100K+ students |
| 5 | `sublime-event-ticketing` | Sublime — E-Ticketing Platform | FULL STACK | 90%+ test coverage |
| 6 | `bookstore-app` | Bookstore | FULL STACK | 95% user approval |

---

## 5. Out of Scope

- Blog CMS or admin interface (essays are MDX files, hand-edited)
- Authentication of any kind
- Contact form backend (email link only)
- Dark mode toggle
- i18n / multilingual support

---

## 6. Non-Functional Requirements

| Category | Requirement |
|----------|-------------|
| Performance | next/image for all images (WebP + lazy load) |
| Fonts | next/font (no layout shift) |
| Hosting | Vercel (auto-deploy on push to main) |
| SEO | OpenGraph + metadata on every page |
| Security | No hardcoded secrets, no API keys |
| Accessibility | WCAG AA — semantic HTML, aria-labels on all interactive elements |

---

## 7. Definition of Done

- All page acceptance criteria checked
- Deployed to Vercel (production URL live)
- Correct on mobile + desktop
- `pnpm build` → zero errors
- `pnpm lint` → zero errors
- `npx tsc --noEmit` → zero errors
