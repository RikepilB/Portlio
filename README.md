# Richard Pillaca — Portfolio Website

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-06B6D4?logo=tailwindcss)](https://tailwindcss.com)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?logo=vercel)](https://vercel.com)

Personal portfolio for **Richard Pillaca Burga** — a full-stack engineer with a frontend and AI focus, based in Toronto, Canada. Originally from Peru, Computer Science graduate from UBC Okanagan.

**Live site:** [richardpillaca.com](https://richardpillaca.com)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript (strict mode, no `any`) |
| Styling | Tailwind CSS v4 (utility-only, no CSS modules) |
| Fonts | Manrope, Cormorant Garamond, JetBrains Mono via `next/font` |
| Deployment | Vercel (push to main → auto-deploy) |
| Content | TypeScript data objects in `src/data/` |

---

## Pages

| Route | Page |
|-------|------|
| `/` | Home — editorial hero, six featured project cards, essays, skills |
| `/projects` | Gallery — filterable image-first project cards |
| `/projects/[slug]` | Case study — images first, then overview, problem, methodology, metrics |
| `/essays` | Essays list — title, date, read time, tags |
| `/essays/[slug]` | Individual essay (placeholder body) |
| `/about` | About — bio and vision board |
| `/journey` | Timeline + embedded résumé (Resume nav target) |
| `/skills` | Redirects to Home |
| `/resume` | Redirects to Journey |

---

## Projects

17 case studies spanning full-stack products, data science research, AI engineering tooling, and
open-source infrastructure — see them live at
[richardpillaca.com/projects](https://richardpillaca.com/projects), or browse the source of truth
at [`src/data/projects.ts`](./src/data/projects.ts).

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

- **Identity:** Felt & Gold — matte sage-green surfaces with metallic gold-foil accents, tactile
  and premium rather than neon-terminal or generic SaaS. Full spec in [`DESIGN.md`](./DESIGN.md).
- **Case studies:** Deep methodology sections with metric cards.
- **Colors:** Sage felt (`#607466`) primary canvas, gold foil (`#D4AF37`) accents, white/near-white
  ink on felt. About uses a complementary mist/silver palette — see `DESIGN.md`.

---

## Built With

- [Claude Code](https://claude.ai) (claude-sonnet-4-6) — primary coding assistant
- [Testsprite](https://testsprite.com) — E2E test suite (16 test cases)
- Skills: frontend-design, vercel-react-best-practices, tailwind-design-system, web-design-guidelines

---

## Deployment

Push to `main` → Vercel auto-deploys. Preview URLs generated per PR.
