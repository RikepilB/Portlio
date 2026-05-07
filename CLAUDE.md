# Project: Richard Pillaca — Portfolio Website v2
# Stack: Next.js 16 → TypeScript → Tailwind → Vercel
# Blueprint: @docs/PRD.md | Progress: @docs/progress.txt | Arch: @docs/ARCHITECTURE.md

## What We're Building
Personal portfolio for Richard Pillaca Burga — Data Analyst & BI Developer.
4 case study projects + essays section + personal About page.
Design: Michelle Liu (minimal/clean) + Vipul Soni (project depth) + Noah Barbaros (essays).

## Tech Stack
- Framework: Next.js 16, App Router, TypeScript strict mode
- Styling: Tailwind CSS only — no inline styles, no CSS modules
- Content: TypeScript data objects in `src/data/` + MDX for essays
- Deploy: Vercel (push to main → auto-deploy, preview URL per PR)
- No database — pure static content

## Scripts
- `pnpm dev` — Dev server on port 3000
- `pnpm build` — Production build (must pass with zero errors)
- `pnpm lint` — ESLint (zero errors required)
- `npx tsc --noEmit` — Type check only

## App Router Structure
```
src/app/
├── page.tsx                  — Home (/)
├── projects/page.tsx         — Gallery (/projects)
├── projects/[slug]/page.tsx  — Case study (/projects/bike-share-optimization etc.)
├── essays/page.tsx           — Essays list (/essays)
├── essays/[slug]/page.tsx    — Individual post (MDX)
├── about/page.tsx            — About (/about)
└── layout.tsx                — Root layout with Nav + Footer

src/components/layout/       — Nav, Footer
src/components/ui/            — ProjectCard, EssayCard, MetricCard, SkillTag
src/data/                     — projects.ts, essays.ts, personal.ts (all content here)
src/lib/                      — Utilities, MDX helpers
public/images/                — Photos, screenshots
```

## Rules (progressive disclosure)
- Frontend/UI: @.claude/rules/frontend.md
- Backend/API: @.claude/rules/backend.md
- Security (always): @.claude/rules/security.md

## Skills Available (already installed — use don't recreate)
- `frontend-design` — Production UI, avoids generic AI look — LOAD FOR ALL UI WORK
- `vercel-react-best-practices` — Next.js/Vercel optimization (54 rules)
- `tailwind-design-system` — Tailwind token patterns
- `web-design-guidelines` — Design principles
- `fullstack-developer` — Full-stack patterns
- `systematic-debugging` — When something breaks
- `subagent-driven-development` — Parallel component work
- `requesting-code-review` — Before marking any page done
- `brainstorming` — Planning new sections

## Agents (use for specialized tasks)
- `explorer` — Run FIRST before touching any file
- `planner` — Architecture decisions before coding
- `code-reviewer` — Before marking any component done
- `security-auditor` — Before deploying to Vercel
- `test-writer` — After building each page

## Workflow for Each Page
1. `explorer` agent → map what exists
2. Load `frontend-design` + `vercel-react-best-practices` skills
3. Plan → confirm with me → build mobile-first (375→768→1280)
4. `pnpm build && pnpm lint && npx tsc --noEmit` — all must pass
5. `requesting-code-review` skill before marking done

## Content (all text ready — do NOT rewrite or invent metrics)
- All 4 project case studies: ready in existing prototype JSX
- About page personal sections: ready in docs/PRD.md
- Skills, certifications, experience: ready in prototype JSX
- Essays: NOT written yet — MDX placeholder structure only

## Project Slugs
- `bike-share-optimization` | `ai-technical-debt-research`
- `accounting-automation` | `exam-analysis-system`

## Hard Rules for This Project
- ✅ Mobile-first on every component
- ✅ Semantic HTML + aria-labels on all interactive elements
- ✅ `pnpm build` zero errors = definition of done
- ✅ Real content only — no Lorem Ipsum, no invented metrics
- ❌ No dark navy/teal — that's the AI-generated look we're replacing
- ❌ No Inter/Roboto/Arial fonts — pick something with personality
- ❌ No hardcoded colors — Tailwind classes or CSS custom properties only
- ❌ `any` type is a lint error — TypeScript strict, always
