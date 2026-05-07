# Richard Pillaca — Portfolio Website

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-06B6D4?logo=tailwindcss)](https://tailwindcss.com)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?logo=vercel)](https://vercel.com)

Personal portfolio for **Richard Pillaca Burga** — Data Analyst & BI Developer based in Toronto, Canada. Originally from Peru, Computer Science graduate from UBC Okanagan.

**Live site:** [richardpillaca.com](https://richardpillaca.com)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript (strict mode, no `any`) |
| Styling | Tailwind CSS v4 (utility-only, no CSS modules) |
| Fonts | DM Sans (body) + Manrope (headings) via `next/font` |
| Deployment | Vercel (push to main → auto-deploy) |
| Content | TypeScript data objects in `src/data/` |

---

## Pages

| Route | Page |
|-------|------|
| `/` | Home — hero, featured projects, recent essays, CTA |
| `/projects` | Gallery — filterable project cards (category + tech tags) |
| `/projects/[slug]` | Case study — overview, problem, methodology, metrics, findings |
| `/essays` | Essays list — title, date, read time, tags |
| `/essays/[slug]` | Individual essay (MDX) |
| `/about` | About — journey, skills, certifications, communities, education |
| `/journey` | Timeline — filterable work/research/volunteer experience |
| `/skills` | Skills directory |
| `/resume` | Resume viewer + download |

---

## Projects

| Project | Category | Scope |
|---------|----------|-------|
| **Bike Share Network Optimization v2** | Data Science | 2M+ records, graph theory, network analysis |
| **AI Technical Debt in Software Repositories** | Research | 5,000+ repos, MSR empirical study |
| **Accounting Journal Entry Automation** | Excel Automation | 4 hrs → 12 min, Power Query, M Language |
| **Exam Analysis System** | Full Stack | 100K+ students, Django + React |

---

## Getting Started

```bash
pnpm install        # Install dependencies
pnpm dev            # Start dev server → http://localhost:3000
pnpm build          # Production build (must pass zero errors)
pnpm lint           # ESLint (zero errors required)
npx tsc --noEmit    # TypeScript type check
```

---

## Project Structure

```
src/
├── app/             # Next.js App Router pages
│   ├── layout.tsx   # Root layout (Nav + Footer)
│   ├── page.tsx     # Home page
│   ├── projects/    # Gallery + case studies
│   ├── essays/      # Essays list + detail
│   ├── about/       # About page
│   ├── journey/     # Experience timeline
│   ├── skills/      # Skills directory
│   └── resume/      # Resume page
├── components/
│   ├── layout/      # Nav, Footer
│   └── ui/          # ProjectCard, EssayCard, MetricCard, TechTag, etc.
├── data/            # All content (projects.ts, essays.ts, experience.ts, social.ts)
└── lib/             # Utilities (cn helper)
```

---

## Design

- **Layout:** Minimal, clean, lots of whitespace (inspired by Michelle Liu)
- **Case studies:** Deep methodology sections with metric cards (inspired by Vipul Soni)
- **Essays:** Clean reading experience (inspired by Noah Barbaros)
- **Colors:** White background, near-black text, emerald accent — no dark navy/teal

---

## Built With

- [Claude Code](https://claude.ai) (claude-sonnet-4-6) — primary coding assistant
- [Testsprite](https://testsprite.com) — E2E test suite (16 test cases)
- Skills: frontend-design, vercel-react-best-practices, tailwind-design-system, web-design-guidelines

---

## Deployment

Push to `main` → Vercel auto-deploys. Preview URLs generated per PR.
