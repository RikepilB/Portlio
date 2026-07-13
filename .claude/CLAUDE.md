# Project: Richard Pillaca — Portfolio Website v2
# Stack: Next.js 16 → TypeScript → Tailwind → Vercel
# Blueprint: @docs/PRD.md | Progress: @docs/progress.txt | Arch: @docs/ARCHITECTURE.md

Rulebook, five sections: **Role → Style → Constraints → Workflow → Quality.**

## 1. Role

Claude Code is building richardpillaca.com — the personal portfolio site for Richard Pillaca Burga, Data Analyst & BI Developer — as a pure-static Next.js 16 site deployed on Vercel.

### What We're Building
Personal portfolio for Richard Pillaca Burga — Data Analyst & BI Developer.
4 case study projects + essays section + personal About page.
Design: Michelle Liu (minimal/clean) + Vipul Soni (project depth) + Noah Barbaros (essays).

### Tech Stack
- Framework: Next.js 16, App Router, TypeScript strict mode
- Styling: Tailwind CSS only — no inline styles, no CSS modules
- Content: TypeScript data objects in `src/data/` + MDX for essays
- Deploy: Vercel (push to main → auto-deploy, preview URL per PR)
- No database — pure static content

## 2. Style

Rules are documentation + guardrails; skills are executable workflows — load both when relevant.

### Rules (progressive disclosure — all 14 in `.claude/rules/`)

| Tier | When | Files |
|------|------|-------|
| **Always** | Every session | @.claude/rules/coding-rules.md · @.claude/rules/security.md · @.claude/rules/review-checklist.md |
| **Architecture** | Planning, new modules, refactors | @.claude/rules/Portfolio-architecture.md · @.claude/rules/patterns.md |
| **Context auto-load** | File-type triggered | @.claude/rules/frontend.md (*.tsx, components) · @.claude/rules/backend.md (*.py, api — rare here) |
| **Workflow** | Multi-step features, git, hooks | @.claude/rules/development-workflow.md · @.claude/rules/git-workflow.md · @.claude/rules/hooks.md |
| **Quality** | Before ship, perf-sensitive work | @.claude/rules/coding-style.md · @.claude/rules/testing.md · @.claude/rules/performance.md |
| **Orchestration** | Delegating to subagents | @.claude/rules/agents.md |

**Portfolio override:** This is a pure static Next.js site — no database, no API routes. Content lives in `src/data/`. Ignore generic DB/monolith language in Portfolio-architecture.md unless scope changes.

## 3. Constraints (never do)

- ❌ No dark navy/teal — that's the AI-generated look we're replacing
- ❌ No Inter/Roboto/Arial fonts — pick something with personality
- ❌ No hardcoded colors — Tailwind classes or CSS custom properties only
- ❌ `any` type is a lint error — TypeScript strict, always

### Content (all text ready — do NOT rewrite or invent metrics)
- All 4 project case studies: ready in existing prototype JSX
- About page personal sections: ready in docs/PRD.md
- Skills, certifications, experience: ready in prototype JSX
- Essays: NOT written yet — MDX placeholder structure only

## 4. Workflow

### Scripts
- `pnpm dev` — Dev server on port 3000
- `pnpm build` — Production build (must pass with zero errors)
- `pnpm lint` — ESLint (zero errors required)
- `npx tsc --noEmit` — Type check only

### App Router Structure
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

### Skills — Loading Rule (READ THIS)
- A skill loads ONLY at `.claude/skills/<name>/SKILL.md` — exactly ONE level deep, with valid
  `name:` (kebab-case, no colon) + `description:` frontmatter. Category subfolders KILL discovery.
- All 25 skills are flat and load. `deploy/**` is a dead archive — safe to ignore.
- Mechanics + validation: @.claude/skills/AGENTS.md

**Mandatory protocol:**
1. If task matches a skill trigger → **read that skill's `SKILL.md` first** (do not rely on memory)
2. Follow the skill's workflow exactly
3. UI default stack: `brainstorming` → `frontend-design` + `vercel-react-best-practices` → `baseline-ui` or `web-design-guidelines` for audit

### Skills — Routing (all 25 — read SKILL.md when triggered)

| Category | Skill | Load when |
|----------|-------|-----------|
| Design | `impeccable` | Redesign, audit, polish, UX critique |
| Design | `ui-ux-pro-max` | Palettes, font pairings, style direction |
| Design | `frontend-design` | **Any UI build** (default for components/pages) |
| Design | `frontend-patterns` | React/Next.js UI patterns, state, performance |
| Design | `tailwind-design-system` | Design tokens, component libraries, Tailwind v4 |
| Design | `ckm-design-system` | Token architecture, component specs, slides |
| Design | `ckm-ui-styling` | shadcn/ui, Tailwind styling, responsive layouts |
| Design | `shadcn` | shadcn/ui components, registries, components.json |
| Design | `baseline-ui` | a11y, typography scale, animation, anti-patterns |
| Design | `web-design-guidelines` | UI/UX audit, accessibility review |
| Perf | `vercel-react-best-practices` | React/Next.js components, data fetching, bundles |
| Process | `brainstorming` | Before creative/feature work |
| Process | `subagent-driven-development` | Parallel independent tasks |
| Process | `requesting-code-review` | Pre-merge, task completion |
| Process | `verification-loop` | Session verification before delivering |
| Process | `coding-standards` | TypeScript/React/Node standards |
| Process | `continuous-learning` | Extract patterns from sessions |
| Debug/Test | `systematic-debugging` | Bugs, test failures, unexpected behavior |
| Debug/Test | `tdd-workflow` | New features, fixes, refactors with tests |
| Backend/Deploy | `fullstack-developer` | Full-stack patterns (rare — static site) |
| Backend/Deploy | `backend-patterns` | API design (rare here) |
| Backend/Deploy | `python-patterns` | Python scripts (rare here) |
| Backend/Deploy | `deployment-patterns` | Vercel deploy, CI/CD, production readiness |
| Security | `security-review` | Auth, user input, secrets, sensitive features |
| Security | `security-scan` | Audit `.claude/` harness for misconfigurations |

### Design Workflow (replaces deleted `/redesign` command)
```
Audit (375/768/1280) → Direction (ui-ux-pro-max + impeccable) → Implement (frontend-design, mobile-first) → Verify (lint/tsc/build + web-design-guidelines)
```

### Agents (project-local — all 15 in `.claude/agents/`)

| Agent | Path | When to invoke |
|-------|------|----------------|
| `explorer` | @.claude/agents/explorer.md | First step: map codebase before edits |
| `planner` | @.claude/agents/planner.md | Non-trivial features, refactors |
| `architect` | @.claude/agents/architect.md | System/design decisions |
| `code-reviewer` | @.claude/agents/code-reviewer.md | After implementation |
| `build-error-resolver` | @.claude/agents/build-error-resolver.md | When `pnpm build` or `tsc` fails |
| `tdd-guide` | @.claude/agents/tdd-guide.md | Test-first features/fixes |
| `test-writer` | @.claude/agents/test-writer.md | Add/improve tests post-build |
| `e2e-runner` | @.claude/agents/e2e-runner.md | Critical user flows |
| `security-auditor` | @.claude/agents/security-auditor.md | Pre-deploy security pass |
| `security-reviewer` | @.claude/agents/security-reviewer.md | Auth, input, API, secrets |
| `refactor-cleaner` | @.claude/agents/refactor-cleaner.md | Dead code, consolidation |
| `doc-updater` | @.claude/agents/doc-updater.md | Docs/codemaps after behavior changes |
| `database-reviewer` | @.claude/agents/database-reviewer.md | N/A (static site) — skip unless scope changes |
| `data-analyst` | @.claude/agents/data-analyst.md | Dataset analysis — not typical for portfolio |
| `chief-of-staff` | @.claude/agents/chief-of-staff.md | Communication triage — out of scope for site work |

**Parallel execution:** Independent reviews (e.g. security-reviewer + code-reviewer + performance check) can run in parallel. See @.claude/rules/agents.md.

### Portfolio Default Pipeline (each page/feature)
```
explorer → load frontend-design + vercel-react-best-practices → build mobile-first (375→768→1280) → build-error-resolver (if red) → code-reviewer → verification-loop skill
```

### Project Slugs
- `bike-share-optimization` | `ai-technical-debt-research`
- `accounting-automation` | `exam-analysis-system`

## 5. Quality (before delivering)

- ✅ Run @.claude/rules/review-checklist.md
- ✅ Load `requesting-code-review` skill OR invoke `code-reviewer` agent
- ✅ Verification order: `pnpm lint` → `npx tsc --noEmit` → `pnpm build` (all must pass)
- ✅ Mobile-first on every component
- ✅ Semantic HTML + aria-labels on all interactive elements
- ✅ Real content only — no Lorem Ipsum, no invented metrics
