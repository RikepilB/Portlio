# Project: Richard Pillaca — Portfolio Website v3 (Felt & Gold)
# Stack: Next.js 16 → TypeScript → Tailwind → Vercel
# Blueprint: @docs/v3/PRD.md | Brand: @docs/v3/branding.md | Design: @docs/v3/design.md
# Decisions: @docs/decisions.md | Arch: @docs/ARCHITECTURE.md

Rulebook, five sections: **Role → Style → Constraints → Workflow → Quality.**

## 1. Role

Claude Code is building richardpillaca.com — the personal portfolio site for Richard Pillaca Burga, Software & Data Engineer — as a pure-static Next.js 16 site deployed on Vercel.

### What We're Building
Personal portfolio for Richard Pillaca Burga — Software & Data Engineer.
The project collection, essays, skills, journey, resume, case studies, and personal About page
are all data-led. `src/data/` is authoritative for project count, names, content, metrics, dates,
tags, and existing media.
Design: sage felt + gold foil re-skin on the proven v2 page structure. Follow the v3 blueprint
above; do not derive the design from velvet archive sources or legacy documentation.

### Tech Stack
- Framework: Next.js 16, App Router, TypeScript strict mode
- Styling: Tailwind CSS only — no inline styles, no CSS modules
- Content: TypeScript data objects in `src/data/`, including the current essay placeholder model
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

- ❌ No velvet-charcoal/copper direction (rejected); no dark navy/teal legacy palette
- ❌ No Geist, Newsreader, Inter, Roboto, Arial, Ogg, or Playfair Display
- ✅ Use Manrope/Montserrat for display + UI, Cormorant Garamond italic / Cinzel for stamped
  accents, JetBrains Mono for technical metadata
- ❌ No hardcoded colors — Tailwind classes or CSS custom properties only
- ❌ No inline styles or hardcoded project content in presentation components
- ❌ Do not change v2 page composition (section order, embedded Skills/Resume, nav IA)
- ❌ Skills/Resume are not primary nav tabs — redirect `/skills → /`, `/resume → /journey`
- ❌ `any` type is a lint error — TypeScript strict, always
- ✅ Selective `framer-motion` + `shadcn/ui` allowed; CSS fallback + reduced-motion required

### Content (all text ready — do NOT rewrite or invent metrics)
- All project, experience, and personal content is in `src/data/`; use that data as-is
- About page personal sections and the vision board must use existing data and media
- Skills stay embedded on Home; Resume stays embedded on Journey
- Essays: NOT written yet — current TypeScript-data placeholder model only; do not add MDX

## 4. Workflow

### Scripts
- `pnpm dev` — Dev server on port 3000
- `pnpm build` — Production build (must pass with zero errors)
- `pnpm lint` — ESLint (zero errors required)
- `npx tsc --noEmit` — Type check only

### App Router Structure
```
src/app/
├── page.tsx                  — Home (/) — hero, image-led work, embedded Skills
├── projects/page.tsx         — Gallery (/projects) — felt cards
├── projects/[slug]/page.tsx  — Case study detail
├── essays/page.tsx           — Essays list (preserved, not primary nav)
├── essays/[slug]/page.tsx    — Individual essay
├── about/page.tsx            — About (/about) — pearl + rose-gold vision board
├── journey/page.tsx          — Journey (/journey) — timeline + embedded Resume
├── skills/page.tsx           — Redirects to /
├── resume/page.tsx           — Redirects to /journey
└── layout.tsx                — Root layout with Nav + Footer

Primary nav: Home, About, Journey, Projects (+ Get in touch)

src/components/layout/       — Nav, Footer
src/components/ui/           — ProjectCard, EssayCard, MetricCard, TechTag, GrainOverlay, Reveal
src/data/                    — Authoritative site content
src/lib/                      — Utilities
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
Read v3 blueprint → Audit (375/768/1280) → Implement (frontend-design, mobile-first) → Verify (lint/tsc/build + web-design-guidelines)
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

### Project scope

`src/data/projects.ts` is authoritative for project slugs, names, content, metrics, dates, tags,
and media. Do not maintain a fixed project list here.

## 5. Quality (before delivering)

- ✅ Run @.claude/rules/review-checklist.md
- ✅ Load `requesting-code-review` skill OR invoke `code-reviewer` agent
- ✅ Verification order: `pnpm lint` → `npx tsc --noEmit` → `pnpm build` (all must pass)
- ✅ Mobile-first on every component
- ✅ Semantic HTML + aria-labels on all interactive elements
- ✅ Real content only — no Lorem Ipsum, no invented metrics
