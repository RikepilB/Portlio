# Directory Tree & File Reference
# Richard Pillaca — Portfolio Website v2

Complete map of every file and folder in the project, with descriptions.

---

## Root Level

```
project 1/
├── CLAUDE.md                    # Claude Code project instructions & rules
├── CLAUDE.md.old-backup         # Previous version of CLAUDE.md
├── package.json                 # Dependencies: next, react, tailwind, clsx, lucide-react
├── pnpm-lock.yaml               # Lockfile (committed — use pnpm, not npm/yarn)
├── tsconfig.json                # TypeScript strict mode config
├── next.config.ts               # Next.js config (image domains, etc.)
├── next-env.d.ts                # Auto-generated Next.js type declarations
├── postcss.config.mjs           # Tailwind CSS v4 PostCSS config
├── eslint.config.mjs            # ESLint flat config (next + typescript rules)
├── .gitignore                   # Ignores: node_modules, .next, .env.local, etc.
├── .env.example                 # Template for env vars (none needed currently)
├── build.log                    # Build output log (ignored in git)
├── errors.log                   # TS/lint error log (local debugging only)
├── ts_errors.log                # TypeScript error log
├── fix-project1.sh              # One-time fix script
├── nul                          # Artifact from Windows redirect (ignorable)
└── mcp.json                     # MCP server config for Claude Code
```

---

## `src/` — Application Source

### `src/app/` — Next.js App Router Pages

```
src/app/
├── layout.tsx                   # Root layout: fonts, Nav, Footer, CursorBubble, metadata
├── globals.css                  # Tailwind directives + CSS custom properties
├── page.tsx                     # Home page (/)
│
├── projects/
│   ├── page.tsx                 # Projects gallery (/projects) — filterable card grid
│   └── [slug]/
│       └── page.tsx             # Project case study (/projects/[slug]) — static params
│
├── essays/
│   ├── page.tsx                 # Essays list (/essays)
│   └── [slug]/
│       └── page.tsx             # Individual essay (/essays/[slug]) — static params
│
├── about/
│   └── page.tsx                 # About page (/about) — personal + professional
│
├── journey/
│   └── page.tsx                 # Journey timeline (/journey) — filterable experience
│
├── skills/
│   └── page.tsx                 # Skills directory (/skills)
│
└── resume/
    └── page.tsx                 # Resume viewer + download (/resume)
```

### `src/components/` — Reusable Components

```
src/components/
├── layout/
│   ├── Nav.tsx                  # Fixed top nav — links, mobile hamburger, active state
│   └── Footer.tsx               # Footer — social links, email, copyright
│
├── ui/
│   ├── ProjectCard.tsx          # Project card — image, category, title, metrics, tech tags
│   ├── EssayCard.tsx            # Essay card — title, date, read time, tags, excerpt
│   ├── MetricCard.tsx           # Big number + label — used in case study results
│   ├── TechTag.tsx              # Pill chip for tech stack tags
│   ├── SectionHeader.tsx        # Consistent section title + optional subtitle
│   └── CursorBubble.tsx         # Custom cursor glow effect (client component)
│
└── sections/                    # (empty — sections are inlined in page files)
```

### `src/data/` — All Content (TypeScript)

```
src/data/
├── projects.ts                  # 6 project case studies — interfaces + data array
│                                #   Interfaces: Project, Methodology, Result
│                                #   Export: projects[], getProjectBySlug()
│
├── essays.ts                    # 3 essay stubs — interface + data array
│                                #   Interface: Essay
│                                #   Export: essays[], getEssayBySlug()
│
├── experience.ts                # 8 experience entries — interface + data array
│                                #   Interfaces: Experience, ExperienceType
│                                #   Export: experiences[], getExperienceByType()
│
├── social.ts                    # Social links: GitHub, LinkedIn, email
│
└── .gitkeep                     # Keeps folder tracked when empty
```

### `src/lib/` — Utilities

```
src/lib/
└── utils.ts                     # cn() — clsx + tailwind-merge for class merging
```

---

## `public/` — Static Assets

```
public/
├── resume.pdf                   # Downloadable resume PDF
│
└── images/
    ├── .gitkeep
    ├── README.md                # Image folder documentation
    ├── mainpage.jpg             # Generic main page image
    │
    ├── About_hero/              # About page hero images
    │   ├── family.jpeg
    │   ├── toronto.jpeg
    │   └── travelling.jpeg
    │
    ├── bike network/            # Bike share project images
    │   └── bike_network.png
    │
    ├── research/                # AI research project images
    │   └── ai_research.png
    │
    ├── ExamVault/               # ExamVault project screenshots
    │   ├── Screenshot 2026-01-28 231019.png   (hero)
    │   ├── Screenshot 2026-01-28 231230.png
    │   ├── Screenshot 2026-01-28 231258.png
    │   ├── Screenshot 2026-01-28 231310.png
    │   ├── Screenshot 2026-01-28 231356.png
    │   ├── Screenshot 2026-01-28 231412.png
    │   ├── Screenshot 2026-01-28 231420.png
    │   ├── ExamVaultDemoVideo.mp4
    │   └── unnamed.png
    │
    ├── ticketing platform/      # Sublime e-ticketing images
    │   ├── Ticket_platform.png
    │   └── Vídeo sin título ‐ Hecho con Clipchamp (8).mp4
    │
    ├── Bookstore/               # Bookstore app images
    │   ├── Screenshot 2026-01-29 000328.png
    │   └── Vídeo sin título ‐ Hecho con Clipchamp (5).mp4
    │
    ├── Football club/           # Football club community images
    │   ├── 461827045_555132037043693_7012341984978904395_n.jpg
    │   ├── Screenshot 2026-03-01 005939.png
    │   └── WhatsApp Image 2026-03-02 at 1.14.12 PM.jpeg
    │
    ├── Hispanotech/             # HispanoTech community images
    │   ├── 1764659307193.jpg
    │   ├── Gemini_Generated_Image_m7mrirm7mrirm7mr.png
    │   ├── Picture8.jpg
    │   └── WhatsApp Image 2025-12-04 at 10.46.21 AM.jpeg
    │
    ├── Alianza latina/          # Alianza Latina community images
    │   ├── 1772322136233.jpg
    │   ├── 1772322136288.jpg
    │   ├── 1772322139207.jpg
    │   └── Screenshot 2026-02-08 134128.png
    │
    ├── scale_withoutborders/    # Scale Without Borders community images
    │   ├── WhatsApp Image 2025-10-16 at 23.17.46_2a277869.jpg
    │   ├── WhatsApp Image 2025-10-20 at 00.54.10_a32dae99.jpg
    │   ├── WhatsApp Image 2025-10-22 at 20.19.28_bc4046fd.jpg
    │   └── WhatsApp Image 2025-10-22 at 20.19.29_c2e8688d.jpg
    │
    ├── cursor community/        # Cursor Community images
    │   ├── 1772147856117.jpg
    │   ├── 1772147856129.jpg
    │   └── Screenshot 2025-10-15 163747.png
    │
    ├── Latin american student Organization/
    │   ├── LASOPIC.png
    │   └── WhatsApp Image 2025-09-22 at 20.53.18_17a5ac8d.jpg
    │
    ├── Canadian Cancer society/
    │   └── images.png
    │
    ├── Okanagan tech industry night/
    │   └── 1730065718844.jpg
    │
    ├── wealthsimple foundation/
    │   ├── wealthsimpl4.jpeg
    │   └── WhatsApp Image 2025-12-04 at 10.12.57 AM.jpeg
    │
    ├── Running club/
    │   ├── download.jpeg
    │   ├── download (1).jpeg
    │   └── Screenshot 2025-10-15 143144.png
    │
    ├── Braintrainer/            # BrainTrainr work experience images
    │   ├── Screenshot 2026-02-08 134600.png
    │   ├── Screenshot 2026-02-08 135030.png
    │   └── Screenshot 2026-02-08 135115.png
    │
    ├── clubino/
    │   └── unnamed (1).png
    │
    ├── trips/                   # Personal travel photos
    │   ├── greece.JPG
    │   ├── Peru.jpeg
    │   ├── pictures.jpeg
    │   ├── toronto.jpeg
    │   └── UK.jpeg
    │
    └── Favorites/               # Personal favorites (books, movies)
        ├── 61LsXpUgxdL.jpg
        ├── 81FYASoyw0L._AC_UF894,1000_QL80_.jpg
        ├── IMG_2852.jpeg
        ├── MV5BZWNjZjQwZmItMWU1ZS00YTJhLWExYjUtYjk3YjcxMjJlOTdmXkEyXkFqcGc@._V1_.jpg
        ├── Screenshot 2025-10-25 004623.png
        ├── Screenshot 2025-10-25 005945.png
        ├── Screenshot 2025-10-25 011042.png
        └── Tintin_movie_poster_01.webp
```

---

## `docs/` — Original Project Docs

```
docs/
├── PRD.md                       # Original product requirements document
├── ARCHITECTURE.md              # Architecture decisions and component hierarchy
├── progress.txt                 # Session progress log
└── SECURITY_AUDIT.md            # Security audit findings + resolutions
```

---

## `documentation/` — This Folder

```
documentation/
├── PRD.md                       # Full product requirements (this build)
├── MVP.md                       # MVP definition and scope
├── CONTEXT.md                   # Project background, design decisions, constraints
├── WALKTHROUGH.md               # Page-by-page UI walkthrough
├── PHASES.md                    # Complete build log: Phase 0 → Phase 5
└── DIRECTORY_TREE.md            # This file — full project map
```

---

## `testsprite_tests/` — E2E Test Suite

```
testsprite_tests/
├── testsprite_frontend_test_plan.json    # Generated test plan
├── standard_prd.json                     # Standardized PRD for Testsprite
│
├── TC001_Homepage_hero_content_is_visible_on_initial_load.py
├── TC002_Homepage_metrics_strip_renders_with_labeled_metric_values.py
├── TC003_Featured_Projects_section_shows_exactly_3_project_cards.py
├── TC006_Projects_page_loads_and_shows_all_projects_by_default.py
├── TC007_All_filter_shows_the_full_set_of_projects.py
├── TC008_DATA_SCIENCE_filter_narrows_the_gallery_results.py
├── TC014_Project_detail_page_renders_core_case_study_sections_for_a_valid_project_slug.py
├── TC016_Methodology_section_displays_multiple_phasessteps.py
├── TC017_Key_metrics_and_findings_section_displays_summarized_metrics.py
├── TC021_Non_existent_project_slug_shows_a_not_found_state_with_a_path_back_to_projects_gallery.py
├── TC022_Essays_list_page_loads_and_displays_core_essay_metadata.py
├── TC023_Open_an_essay_detail_page_from_the_essays_list.py
├── TC030_About_page_displays_communities_beyond_work_interests_and_skills_summary.py
├── TC031_Footer_shows_social_links_and_contact_info_on_About_page.py
├── TC032_View_Journey_timeline_default_state_shows_all_entries.py
│
└── tmp/
    ├── config.json              # Testsprite runtime config
    ├── test_results.json        # Latest test run results
    ├── execution.lock           # Lock file (auto-managed)
    ├── code_summary.yaml        # Codebase summary for test gen
    └── prd_files/
        └── prd.md               # PRD copy for Testsprite context
```

---

## `.claude/` — Claude Code Configuration

```
.claude/
├── settings.json                # Claude Code settings
├── package-manager.json         # Declares pnpm as package manager
├── .claudeignore                # Files Claude should not read
│
├── rules/
│   ├── frontend.md              # TypeScript, Tailwind, a11y rules (auto-loaded for .tsx)
│   ├── backend.md               # API, SQL, Python rules
│   └── security.md              # OWASP hard rules — ALWAYS loaded
│
├── agents/
│   ├── explorer.md              # Fast codebase exploration agent
│   ├── planner.md               # Architecture planning agent
│   ├── code-reviewer.md         # Code quality review agent
│   ├── security-auditor.md      # OWASP security review agent
│   └── test-writer.md           # Test writing agent
│
├── commands/                    # Slash command definitions
│   ├── build-fix.md
│   ├── checkpoint.md
│   ├── code-review.md
│   ├── e2e.md
│   ├── plan.md
│   └── ... (30+ commands)
│
├── skills/                      # Loaded skills
│   ├── frontend-design/         # Production UI patterns
│   ├── vercel-react-best-practices/   # 54 Next.js rules
│   ├── tailwind-design-system/  # Tailwind token patterns
│   ├── web-design-guidelines/   # Design principles
│   ├── fullstack-developer/     # Full-stack patterns
│   ├── systematic-debugging/    # Debugging methodology
│   ├── requesting-code-review/  # Code review workflow
│   ├── brainstorming/           # Planning new features
│   └── subagent-driven-development/  # Parallel agent work
│
└── contexts/
    ├── Portfolio_Blueprint_Final.md   # Original design blueprint
    ├── Portfolio_Website_v2.jsx       # Original prototype JSX
    ├── dev.md                         # Dev context notes
    ├── research.md                    # Research context
    ├── review.md                      # Review notes
    ├── Richard Pillaca_Resume_v2.pdf  # Resume for content reference
    ├── COSC 421 Final Report.pdf      # Bike share research paper
    ├── Final Design and Analysis Report.pdf   # ExamVault report
    ├── Final_Report___MSR.pdf         # AI technical debt paper
    ├── my_portfolio_presenattion.pdf  # Portfolio presentation slides
    └── Post linkedin.pdf              # LinkedIn post reference
```

---

## `.vercel/` — Vercel Config

```
.vercel/
├── project.json                 # projectId, orgId, projectName
└── README.txt                   # Vercel CLI instructions
```

---

## Key File Relationships

```
layout.tsx
  └── imports: Nav.tsx, Footer.tsx, CursorBubble.tsx, globals.css

page.tsx (home)
  └── imports: ProjectCard.tsx, EssayCard.tsx
  └── data from: projects.ts, essays.ts

projects/page.tsx
  └── imports: ProjectCard.tsx
  └── data from: projects.ts

projects/[slug]/page.tsx
  └── imports: MetricCard.tsx, TechTag.tsx
  └── data from: projects.ts (getProjectBySlug)

essays/page.tsx
  └── imports: EssayCard.tsx
  └── data from: essays.ts

about/page.tsx
  └── imports: TechTag.tsx, SectionHeader.tsx
  └── images from: public/images/

journey/page.tsx
  └── data from: experience.ts

All components
  └── utility: src/lib/utils.ts (cn function)
```
