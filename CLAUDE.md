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

## Skills — Loading Rule (READ THIS)
- A skill loads ONLY at `.claude/skills/<name>/SKILL.md` — exactly ONE level deep, with valid
  `name:` (kebab-case, no colon) + `description:` frontmatter. Category subfolders KILL discovery.
- Past bug: a full design library sat dead at `.claude/skills/deploy/01-DESIGN/...` (3 levels deep)
  — it existed but never loaded. All 25 skills are now flat and load. `deploy/**` is a dead archive.
- Organize via name prefixes + `.claude/skills/AGENTS.md` index, NOT folders. Validate:
  `for d in .claude/skills/*/SKILL.md; do echo "$d"; done; find .claude/skills -mindepth 3 -name SKILL.md`
  (anything from the `find` = buried/dead → move it up).

## Skills Available (already installed — use don't recreate)
**Design/Frontend:** `impeccable` (redesign/audit/polish — crown jewel) · `ui-ux-pro-max` (styles,
palettes, font pairings, UX rules) · `frontend-design` (LOAD FOR ALL UI WORK) · `frontend-patterns` ·
`tailwind-design-system` · `ckm-design-system` (tokens) · `ckm-ui-styling` · `shadcn` · `baseline-ui`
(UI anti-patterns/a11y) · `web-design-guidelines` · `vercel-react-best-practices`
**Process/Quality:** `brainstorming` · `subagent-driven-development` (parallel components) ·
`requesting-code-review` · `coding-standards` · `verification-loop` · `continuous-learning`
**Debug/Test:** `systematic-debugging` · `tdd-workflow`
**Backend/Deploy:** `fullstack-developer` · `backend-patterns` · `python-patterns` · `deployment-patterns`
**Security:** `security-review` · `security-scan`

## Commands
- `/redesign <target>` — full design+frontend mode: Audit (Chrome screenshots 375/768/1280) →
  Direction (ui-ux-pro-max + impeccable + tokens) → Implement (mobile-first, Tailwind-only) →
  Verify (build/lint/types + a11y + visual diff). Pauses after Audit and Direction.

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
