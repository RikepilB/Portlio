# Build Phases — Complete Record
# Richard Pillaca — Portfolio Website v2

Full record of everything built from Phase 0 (setup) through Phase 5 (deployment).
Includes workflow, features shipped, decisions made, and tools used.

---

## Phase 0 — Project Setup & Scaffold

**Goal:** Initialize the project repository, configure the tech stack, and establish conventions before writing any UI.

### Actions Completed

**Repository & Tooling**
- Initialized Next.js 16 with TypeScript strict mode (`--typescript --app`)
- Configured `pnpm` as the package manager
- Set up `tsconfig.json` with `strict: true`, `paths` alias (`@/*` → `src/*`)
- Created `postcss.config.mjs` and configured Tailwind CSS v4
- Configured ESLint with `eslint-config-next` — zero errors required
- Created `.gitignore` (node_modules, .next, .env.local)
- Created `.env.example` documenting any future env vars

**GitHub**
- Connected GitHub MCP (repo: `rikepilb/richard-pillaca-portfolio`)
- Initial commit pushed to `master` branch

**Claude Code Setup**
- Wrote `CLAUDE.md` — project conventions, tech rules, build commands
- Created `.claude/rules/frontend.md` — Tailwind, TypeScript, a11y rules
- Created `.claude/rules/backend.md` — API, SQL, Python rules
- Created `.claude/rules/security.md` — OWASP hard rules (always loaded)
- Installed skills: `frontend-design`, `vercel-react-best-practices`, `tailwind-design-system`, `web-design-guidelines`, `fullstack-developer`, `systematic-debugging`, `requesting-code-review`, `brainstorming`
- Configured agents: `explorer`, `planner`, `code-reviewer`, `security-auditor`, `test-writer`

**Fonts**
- Selected DM Sans (body) + Manrope (headings) via `next/font/google`
- Configured CSS variables: `--font-sans`, `--font-display`

**Root Layout**
- Created `src/app/layout.tsx` with: font injection, Nav, Footer, CursorBubble, global metadata
- Created `src/app/globals.css` with Tailwind directives and custom properties

### Files Created in Phase 0
```
next.config.ts
tsconfig.json
postcss.config.mjs
eslint.config.mjs
package.json
pnpm-lock.yaml
.gitignore
.env.example
CLAUDE.md
docs/PRD.md
docs/ARCHITECTURE.md
docs/progress.txt
src/app/layout.tsx
src/app/globals.css
```

---

## Phase 1 — Data Layer

**Goal:** Build all content as typed TypeScript data before writing any UI. Data-first approach prevents having to rewrite components when content changes.

### Actions Completed

**`src/data/projects.ts`**
- Defined `Project` interface with 20+ typed fields: slug, category, catColor, title, tagline, duration, readTime, overview, problem, questions, methodology, results, keyFindings, conclusion, github, stack, image, images, demoVideo
- Defined `Methodology` interface: phase, title, detail, tech[]
- Defined `Result` interface: metric, label
- Populated all 6 project case studies with real content (no Lorem Ipsum):
  1. Bike Share Network Optimization
  2. AI Technical Debt Research
  3. Accounting Journal Entry Automation
  4. ExamVault
  5. Sublime E-Ticketing Platform
  6. Bookstore App
- Exported `getProjectBySlug(slug)` utility function

**`src/data/essays.ts`**
- Defined `Essay` interface: slug, title, date, readTime, tags[], excerpt
- Populated 3 essay stubs with real titles and excerpts
- Exported `getEssayBySlug(slug)` utility function

**`src/data/experience.ts`**
- Defined `Experience` interface: id, type, role, org, location, period, startDate, endDate, description, bullets[], skills[], highlight, logo, partnerLink
- Defined `ExperienceType` union: 'work' | 'education' | 'volunteer' | 'research'
- Populated 8 real experience entries
- Exported `getExperienceByType(type)` utility function

**`src/data/social.ts`**
- GitHub, LinkedIn, email links in a single typed object

**`src/lib/utils.ts`**
- `cn()` utility (clsx + tailwind-merge) for conditional class merging

### Files Created in Phase 1
```
src/data/projects.ts
src/data/essays.ts
src/data/experience.ts
src/data/social.ts
src/lib/utils.ts
```

---

## Phase 2 — UI Component Library

**Goal:** Build reusable, typed, accessible UI components before assembling pages. All components are Server Components unless they require browser APIs.

### Actions Completed

**`src/components/layout/Nav.tsx`**
- Fixed top navigation bar
- Links: Projects, Essays, Journey, Skills, About, Resume
- Active route detection via `usePathname()`
- Mobile hamburger menu (client component for state)
- Accessible: aria-label on menu button

**`src/components/layout/Footer.tsx`**
- Social icons (GitHub, LinkedIn via Lucide)
- Email `mailto:` link
- Copyright notice

**`src/components/ui/ProjectCard.tsx`**
- Category badge (color from `catColor`)
- next/image thumbnail
- Title + tagline
- Metric chips (2–3 key results)
- Tech tag chips
- Full card is a link → `/projects/[slug]`

**`src/components/ui/EssayCard.tsx`**
- Title, date, read time
- Tag pills
- Excerpt
- "Read →" link

**`src/components/ui/MetricCard.tsx`**
- Large metric number + label
- Used in project case study results sections

**`src/components/ui/TechTag.tsx`**
- Pill chip for tech stack display

**`src/components/ui/SectionHeader.tsx`**
- Consistent section title + optional subtitle

**`src/components/ui/CursorBubble.tsx`**
- Client component: custom cursor highlight effect on desktop
- Tracks mouse position, renders a subtle glow following cursor

### Files Created in Phase 2
```
src/components/layout/Nav.tsx
src/components/layout/Footer.tsx
src/components/ui/ProjectCard.tsx
src/components/ui/EssayCard.tsx
src/components/ui/MetricCard.tsx
src/components/ui/TechTag.tsx
src/components/ui/SectionHeader.tsx
src/components/ui/CursorBubble.tsx
```

---

## Phase 3 — Page Assembly

**Goal:** Build all 8 pages using the data layer and component library. Mobile-first, semantic HTML, accessible.

### Pages Built

**Home (`src/app/page.tsx`)**
- Hero with name, title, CTA buttons
- Metrics strip with personal stats
- Featured Projects section (3 ProjectCards)
- Recent Essays section (3 EssayCards)

**Projects Gallery (`src/app/projects/page.tsx`)**
- Client component for category filter state
- Filter pills: ALL / DATA SCIENCE / RESEARCH / EXCEL AUTOMATION / FULL STACK
- Responsive ProjectCard grid
- Instant client-side filtering (no API call)

**Project Case Study (`src/app/projects/[slug]/page.tsx`)**
- `generateStaticParams()` — all 6 slugs pre-rendered at build time
- `notFound()` for invalid slugs
- Sections: Header, Overview, Problem Box, Questions, Methodology, Results, Findings, Conclusion, Tech Stack, GitHub
- Image gallery for projects with multiple screenshots
- Full TypeScript typing — no `any`

**Essays List (`src/app/essays/page.tsx`)**
- Maps over `essays` array → EssayCards

**Essay Detail (`src/app/essays/[slug]/page.tsx`)**
- `generateStaticParams()` for all 3 essay slugs
- `notFound()` for invalid slugs
- Metadata per essay (title, date, tags)
- Placeholder content section

**About (`src/app/about/page.tsx`)**
- Professional hero section
- Journey narrative
- Skills grid (4 categories)
- Certifications
- Education
- Community involvement with images
- Favorites section (books, movies, travel)

**Journey (`src/app/journey/page.tsx`)**
- Client component for type filter
- Filter pills: ALL / WORK / RESEARCH / EDUCATION / VOLUNTEER
- Timeline entries from `experience.ts`
- Colored type badges

**Skills (`src/app/skills/page.tsx`)**
- Categorized skill grid
- Certifications section

**Resume (`src/app/resume/page.tsx`)**
- PDF embed
- Download button

### Static Generation Pattern
All dynamic routes use `generateStaticParams()`:
```ts
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}
```
This ensures Vercel builds all pages at deploy time — zero runtime compute.

---

## Phase 4 — Quality & Security Hardening

**Goal:** Ensure zero build errors, zero lint errors, TypeScript strict compliance, and no security vulnerabilities before deployment.

### Actions Completed

**Build Error Resolution**
- Fixed all TypeScript errors surfaced by `npx tsc --noEmit`
- Eliminated all `any` types — replaced with typed interfaces
- Fixed missing `alt` attributes on next/image components
- Resolved import path errors and circular dependencies
- Added `'use client'` directives only where required (filter components, CursorBubble)

**ESLint Zero Errors**
- Removed all `console.log` statements
- Typed all component props
- Fixed missing key props on mapped lists
- Resolved unused import warnings

**Security Audit**
- Used `security-auditor` agent — scanned for OWASP Top-10
- No SQL injection risk (no database)
- No XSS risk (no dangerouslySetInnerHTML, no user input rendered)
- No hardcoded secrets found
- No exposed API keys
- All external links use `rel="noopener noreferrer"`
- Created `docs/SECURITY_AUDIT.md` documenting findings

**Image Organization**
- Reorganized `public/images/` into semantic subfolders:
  - `About_hero/`, `bike network/`, `ExamVault/`, `research/`, etc.
- Fixed all broken image paths in `projects.ts`
- Added video demo link placeholders (`demoVideo` field) for ExamVault, Sublime, Bookstore

**About Page Enhancement**
- Added community involvement section with real images
- Added football club photos, Hispanotech, Scale Without Borders, Cursor Community
- Improved section layout and responsive behavior

### Build Validation Commands
```bash
pnpm build       # must exit 0
pnpm lint        # must exit 0
npx tsc --noEmit # must exit 0
```

---

## Phase 5 — Testing & Deployment

**Goal:** Write and run an E2E test suite covering all critical paths, then deploy to Vercel production.

### E2E Test Suite (Testsprite)

**16 test cases written and executed covering:**

| TC | Description |
|----|-------------|
| TC001 | Homepage hero content visible on initial load |
| TC002 | Homepage metrics strip renders with labeled metric values |
| TC003 | Featured Projects section shows exactly 3 project cards |
| TC006 | Projects page loads and shows all projects by default |
| TC007 | ALL filter shows the full set of projects |
| TC008 | DATA SCIENCE filter narrows the gallery results |
| TC014 | Project detail page renders core case study sections for a valid slug |
| TC016 | Methodology section displays multiple phases/steps |
| TC017 | Key metrics and findings section displays summarized metrics |
| TC021 | Non-existent project slug shows a not-found state with path back to gallery |
| TC022 | Essays list page loads and displays core essay metadata |
| TC023 | Open an essay detail page from the essays list |
| TC030 | About page displays communities, beyond work interests, skills summary |
| TC031 | Footer shows social links and contact info on About page |
| TC032 | Journey timeline default state shows all entries |

**Test files location:** `testsprite_tests/TC0XX_*.py`
**Config:** `testsprite_tests/tmp/config.json`
**Results:** `testsprite_tests/tmp/test_results.json`

### Vercel Deployment

**Setup:**
- Vercel CLI authenticated as `rikepilb`
- Project created: `richard-pillaca-portfolio`
- Project ID: `prj_qnI1VVYDYwLoJwramc1h4crbhR8v`
- Org: `team_wsJ2j8hrLhFyUrrtYLbhHBwP`
- Config stored in `.vercel/project.json`

**Deploy workflow:**
```bash
npx vercel --prod   # deploy to production
# or: git push origin master (auto-deploy via Vercel Git integration)
```

**Build settings on Vercel:**
- Framework: Next.js (auto-detected)
- Build command: `pnpm build`
- Output directory: `.next`
- Install command: `pnpm install`

**Every push to `master` triggers:**
1. Vercel detects push via GitHub webhook
2. Runs `pnpm install` + `pnpm build`
3. If build passes → promotes to production URL
4. If build fails → previous deployment stays live

---

## Commit History Summary

| Commit | Description |
|--------|-------------|
| `1ed2c3d` | feat: add Next.js project scaffold with all pages, components, and data layer |
| `851dd7f` | fix: resolve all security audit and lint issues |
| `412043a` | feat: update portfolio pages, add images, and e2e test suite |
| `0ed694f` | project3 |
| `092fb2e` | feat: reorganize images into subfolders, fix broken paths, add video links |
| `971497c` | feat: update about page and testsprite test suite |

---

## Current State (Post Phase 5)

| Item | Status |
|------|--------|
| Build | ✅ Zero errors |
| Lint | ✅ Zero errors |
| TypeScript | ✅ Strict mode, no `any` |
| Responsive | ✅ 375px, 768px, 1280px |
| SEO | ✅ OpenGraph metadata on all pages |
| Security | ✅ Audited — no vulnerabilities |
| E2E Tests | ✅ 16 test cases |
| Deployed | ✅ Vercel production |
| Content | ✅ 6 projects, 3 essays, full about, journey, skills |
| Images | ✅ All organized in subfolders |
| Resume | ✅ PDF available at `/resume` |
