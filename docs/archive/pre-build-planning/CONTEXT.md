# Context & Background
# Richard Pillaca — Portfolio Website v2

---

## Who Is This For?

**Richard Pillaca Burga** — Data Analyst & BI Developer, based in Toronto, Canada.
Originally from Peru, studied Computer Science at UBC Okanagan (Kelowna, BC), now job-seeking in Toronto.

Background spans:
- Data science (graph theory, network analysis, Python)
- Business intelligence (Power BI, DAX, SQL)
- Full-stack development (Django, React, Docker)
- Research (Mining Software Repositories, empirical CS)
- Excel automation (Power Query, M Language, VBA)

**Primary audience for the portfolio:** Technical hiring managers, recruiters at data/BI/software companies in Toronto and remotely.

---

## Why Build a Custom Portfolio?

Most portfolio builders (Wix, Squarespace, Carrd) produce generic-looking sites that don't convey technical depth. The goal was a portfolio that:

1. **Shows methodology, not just outcomes** — each project case study explains the *how*, not just "I built X"
2. **Has personality** — no dark navy/teal "AI-generated aesthetic", no Inter/Roboto fonts
3. **Is itself a technical artifact** — a Next.js + TypeScript app shows frontend capability
4. **Is maintainable** — all content in TypeScript data objects, easy to update

---

## Design Language

| Reference | Influence |
|-----------|-----------|
| Michelle Liu | Minimal layout, lots of whitespace, clean typography |
| Vipul Soni | Project case study depth — methodology sections, metric cards |
| Noah Barbaros | Essay/writing section presentation |

**Color decisions:**
- Background: white (`#FFFFFF`)
- Primary text: near-black (`#1A1A1A`)
- Accent: emerald (`#10B981`) — selection highlight, hover states
- Category-specific colors per project (teal, red, amber, purple, sky, green)
- No hardcoded hex in components — Tailwind classes only

**Typography:**
- Body: DM Sans — clean, friendly, modern (not the clichéd Inter)
- Headings: Manrope — geometric, distinctive
- Both loaded via `next/font` (no layout shift)

---

## Technical Context

### Why Next.js 16 App Router?

- Server Components by default → better SEO, faster initial load
- `generateStaticParams()` for project slugs → fully static, no runtime DB
- Vercel-native: zero-config deployment, preview URLs per PR
- `next/image` and `next/font` for automatic optimization

### Why TypeScript Strict Mode?

- `no any` enforced via ESLint
- All data shapes are typed interfaces (`Project`, `Essay`, `Experience`)
- Catches content typos at build time, not at runtime

### Why Tailwind CSS Only?

- No CSS modules, no styled-components, no inline styles
- Utility classes keep components self-documenting
- Tailwind v4 with PostCSS — no config file needed

### Why No Database?

The portfolio content is stable, curated, and authored by one person. A CMS would add:
- Infrastructure cost
- Deployment complexity
- Attack surface

TypeScript data files in `src/data/` are versioned, type-safe, and trivially editable.

### Why No MDX Runtime for Essays?

Essays are placeholder stubs for now. When real essays are written, they'll be cross-posted from Substack. The MDX infrastructure exists (`/essays/[slug]/page.tsx`) but content is not yet live.

---

## Key Constraints

| Constraint | Implication |
|------------|-------------|
| No backend | All content is static TypeScript data |
| No DB | `generateStaticParams()` for all dynamic routes |
| No auth | Public site only |
| No CMS | Content updates = code changes + redeploy |
| Windows development environment | bash via Git Bash / WSL; paths use forward slashes |
| pnpm as package manager | Not npm or yarn — commands use `pnpm` |

---

## Development Environment

- **OS:** Windows 11 Home
- **Shell:** bash (Git Bash)
- **Node:** via pnpm
- **Package manager:** pnpm
- **IDE support:** Claude Code (CLI)
- **Deploy target:** Vercel (org: `team_wsJ2j8hrLhFyUrrtYLbhHBwP`, project: `richard-pillaca-portfolio`)
- **Vercel project ID:** `prj_qnI1VVYDYwLoJwramc1h4crbhR8v`
- **GitHub:** `github.com/rikepilb`

---

## Files That Store All Real Content

| File | What It Contains |
|------|------------------|
| `src/data/projects.ts` | All 6 project case studies (full text, metrics, methodology, findings) |
| `src/data/essays.ts` | 3 essay stubs (title, date, tags, excerpt) |
| `src/data/experience.ts` | Full career timeline (8 entries: work, research, volunteer, education) |
| `src/data/social.ts` | Social links (GitHub, LinkedIn, email) |
| `public/resume.pdf` | Downloadable resume |
| `public/images/` | All project screenshots, about photos, community images |

---

## AI Tooling Used

This project was built with **Claude Code** (Anthropic CLI, model: claude-sonnet-4-6) as the primary coding assistant.

**Skills loaded during development:**
- `frontend-design` — production UI, avoids generic AI look
- `vercel-react-best-practices` — 54 Next.js optimization rules
- `tailwind-design-system` — Tailwind token patterns
- `web-design-guidelines` — design principles
- `systematic-debugging` — used when build errors arose
- `requesting-code-review` — before marking pages done

**Agents used:**
- `explorer` — mapped codebase before each editing session
- `planner` — architecture decisions
- `security-auditor` — before deploying, resolved all OWASP findings
- `test-writer` — wrote Testsprite e2e tests

**E2E testing:** Testsprite (16 test cases covering all critical user paths)
