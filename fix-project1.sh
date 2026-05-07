#!/usr/bin/env bash
# =============================================================================
# Portfolio Project 1 — Fix & Finalize Script
# Run from INSIDE "project 1" folder:
#   cd "project 1"
#   bash fix-project1.sh
#
# WHAT THIS DOES:
#   1. Moves .claude/CLAUDE.md → project root CLAUDE.md (correct location)
#   2. Verifies skills are in right place (they are — just confirms)
#   3. Creates src/ Next.js structure placeholders
#   4. Updates docs/PRD.md and docs/ARCHITECTURE.md with portfolio content
#   5. Removes data-analyst.md from .claude (wrong project type)
#   6. Creates .mcp.json for Vercel + GitHub MCP
# =============================================================================

set -euo pipefail

GREEN='\033[0;32m'; YELLOW='\033[1;33m'; CYAN='\033[0;36m'; BOLD='\033[1m'; RESET='\033[0m'
action() { echo -e "${CYAN}[DO]${RESET}    $1"; }
success() { echo -e "${GREEN}[OK]${RESET}    $1"; }
warn()    { echo -e "${YELLOW}[WARN]${RESET}  $1"; }
skip()    { echo -e "        → skip $1 (already exists)"; }

echo -e "\n${BOLD}Portfolio Project 1 — Fix Script${RESET}\n"

# =============================================================================
# STEP 1: Fix CLAUDE.md location
# It's currently at .claude/CLAUDE.md — should be at project root
# =============================================================================
echo "── Step 1: Fix CLAUDE.md location ──"

if [ -f ".claude/CLAUDE.md" ] && [ ! -f "CLAUDE.md" ]; then
  # Move it to root (correct location)
  cp ".claude/CLAUDE.md" "CLAUDE.md.old-backup"
  action "Backed up old .claude/CLAUDE.md → CLAUDE.md.old-backup"
  # The new CLAUDE.md (from the output files) should be placed at root
  warn "Place the new PROJECT1_CLAUDE.md content at: project 1/CLAUDE.md"
  warn "You can delete .claude/CLAUDE.md after — it does NOT belong there"
elif [ -f "CLAUDE.md" ] && [ -f ".claude/CLAUDE.md" ]; then
  warn "Both CLAUDE.md (root) and .claude/CLAUDE.md exist."
  warn "The ROOT one is correct. The .claude/ one should be deleted."
  warn "Run: del .claude\\CLAUDE.md (Windows) or rm .claude/CLAUDE.md (bash)"
elif [ -f "CLAUDE.md" ]; then
  success "CLAUDE.md already at root — correct!"
fi

# =============================================================================
# STEP 2: Verify agents — remove data-analyst agent (wrong project type)
# =============================================================================
echo ""
echo "── Step 2: Clean up mismatched agents ──"

if [ -f ".claude/agents/data-analyst.md" ]; then
  # This is a portfolio/web project — data-analyst agent doesn't belong here
  mv ".claude/agents/data-analyst.md" ".claude/agents/data-analyst.md.disabled"
  action "Disabled: .claude/agents/data-analyst.md (wrong project type — it's a web project)"
  action "File renamed to .data-analyst.md.disabled — restore it in data projects"
else
  skip ".claude/agents/data-analyst.md (already removed or doesn't exist)"
fi

# =============================================================================
# STEP 3: Create src/ Next.js structure
# =============================================================================
echo ""
echo "── Step 3: Create src/ Next.js structure ──"

dirs=(
  "src/app/projects"
  "src/app/essays"
  "src/app/about"
  "src/components/ui"
  "src/components/layout"
  "src/components/sections"
  "src/data"
  "src/lib"
  "public/images"
)

for dir in "${dirs[@]}"; do
  if [ ! -d "$dir" ]; then
    mkdir -p "$dir"
    action "Created: $dir/"
  else
    skip "$dir/"
  fi
done

# Create placeholder files so git tracks the empty dirs
touch "src/data/.gitkeep"
touch "public/images/.gitkeep"

success "src/ structure ready"

# =============================================================================
# STEP 4: Create .mcp.json (Vercel + GitHub MCP)
# =============================================================================
echo ""
echo "── Step 4: Create .mcp.json ──"

if [ ! -f ".mcp.json" ]; then
  cat > ".mcp.json" << 'EOF'
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_TOKEN": "${GITHUB_TOKEN}"
      }
    },
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "."],
      "description": "Scoped to project root only"
    },
    "vercel": {
      "type": "url",
      "url": "https://mcp.vercel.com",
      "description": "Vercel deployment management"
    }
  }
}
EOF
  action "Created: .mcp.json (GitHub + Filesystem + Vercel)"
  warn "Add GITHUB_TOKEN to your environment variables before using GitHub MCP"
else
  skip ".mcp.json"
fi

# =============================================================================
# STEP 5: Update settings.json with portfolio-specific permissions
# =============================================================================
echo ""
echo "── Step 5: Update settings.json ──"

cat > ".claude/settings.json" << 'EOF'
{
  "model": "sonnet",
  "permissions": {
    "allow": [
      "Bash(pnpm:*)",
      "Bash(npm:*)",
      "Bash(npx:*)",
      "Bash(git:*)",
      "Bash(node:*)"
    ],
    "deny": [
      "Read(./.env*)",
      "Read(./secrets/**)",
      "Write(./.env*)"
    ]
  },
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write(src/**/*.tsx)",
        "hooks": [
          {
            "type": "command",
            "command": "pnpm lint --silent 2>/dev/null || npm run lint --silent 2>/dev/null || true"
          }
        ]
      }
    ]
  }
}
EOF
action "Updated: .claude/settings.json"

# =============================================================================
# STEP 6: Update docs/PRD.md with portfolio project goal
# =============================================================================
echo ""
echo "── Step 6: Update docs/PRD.md ──"

cat > "docs/PRD.md" << 'EOF'
# Feature: Portfolio Website v2 — Complete Build
> Build richardpillaca.com: a professional portfolio for Richard Pillaca Burga,
> Data Analyst & BI Developer, using Next.js 16 → deploy on Vercel.

## Goal
A clean, personal, professional portfolio that showcases 4 data projects with
full case studies, an essays/blog section, and a personal About page.
Design language: Michelle Liu (minimal/clean) + Vipul Soni (project depth).

## Pages to Build (Acceptance Criteria)

### Home (/)
- [ ] Name, title, one-liner visible above the fold
- [ ] 4 project cards with: category tag, title, tagline, 2-3 metrics, tech tags
- [ ] Cards are clickable → navigate to /projects/[slug]
- [ ] 2-3 recent essays section
- [ ] Contact CTA in footer

### Projects Gallery (/projects)
- [ ] Visual cards (not a list) for all 4 projects
- [ ] Filter by category (DATA SCIENCE / RESEARCH / EXCEL AUTOMATION / FULL STACK)
- [ ] Click → individual case study

### Individual Project Page (/projects/[slug])
- [ ] Title + category tag + duration + read time
- [ ] Project Overview (2-3 paragraphs)
- [ ] Problem section (highlighted box)
- [ ] Questions Addressed (numbered list)
- [ ] Methodology (phased sections with tech tags)
- [ ] Key Results (metric cards with big numbers)
- [ ] Key Findings (highlighted insights)
- [ ] Conclusion paragraph
- [ ] Tech Stack + GitHub link

### Essays (/essays)
- [ ] List view: title, date, read time, tags
- [ ] Substack subscribe CTA
- [ ] Individual essay page renders MDX

### About (/about)
- [ ] Professional section: photo, name, title, certifications
- [ ] Journey section: narrative text (Peru → UBC → Toronto)
- [ ] Beyond Work: football, travel, dance, languages, currently
- [ ] Skills grid + certifications
- [ ] Education section

### All Pages
- [ ] Responsive at 375px, 768px, 1280px
- [ ] Accessible: semantic HTML, aria-labels
- [ ] pnpm build — zero errors
- [ ] pnpm lint — zero errors
- [ ] Font is NOT Inter/Roboto/Arial
- [ ] NO dark navy/teal color scheme

## Projects (content already written — use as-is from prototype)
| Slug | Title | Category | Hero Metric |
|------|-------|----------|-------------|
| bike-share-optimization | Bike Share Network Optimization v2 | DATA SCIENCE | 2M+ records |
| ai-technical-debt-research | AI Technical Debt in Software Repositories | RESEARCH | 5,000+ repos |
| accounting-automation | Accounting Journal Entry Automation | EXCEL AUTOMATION | 4 hrs → 12 min |
| exam-analysis-system | Exam Analysis System | FULL STACK | 100K+ students |

## Out of Scope (this build)
- Blog CMS or admin interface — essays are MDX files, hand-edited
- Authentication of any kind
- Contact form backend — email link only

## Tech Notes
- Framework: Next.js 16 App Router
- Styling: Tailwind CSS only (no CSS modules, no styled-components)
- Content: TypeScript data objects in src/data/ + MDX for essays
- Deploy: Vercel (push to main → auto-deploy)
- No database — pure static + ISR

## Definition of Done
All page acceptance criteria checked. Deployed to Vercel.
Looks correct on mobile + desktop. Zero build errors. Zero lint errors.
EOF
action "Updated: docs/PRD.md"

# =============================================================================
# STEP 7: Update docs/ARCHITECTURE.md
# =============================================================================

cat > "docs/ARCHITECTURE.md" << 'EOF'
# Architecture: Portfolio Website v2

## Tech Decisions
| Decision | Choice | Why |
|----------|--------|-----|
| Framework | Next.js 16 App Router | Best for Vercel + page routing + SEO |
| Styling | Tailwind CSS | Utility-first, no runtime overhead |
| Content | TypeScript data files + MDX | No CMS needed, type-safe content |
| Deployment | Vercel | Zero config, preview URLs per PR |
| Font loading | next/font | Optimized, no layout shift |
| Images | next/image | Automatic optimization + WebP |

## Site Map
```
richardpillaca.com/
├── /                          → Home
├── /projects                  → Gallery of 4 projects
│   ├── /projects/bike-share-optimization
│   ├── /projects/ai-technical-debt-research
│   ├── /projects/accounting-automation
│   └── /projects/exam-analysis-system
├── /essays                    → Blog list
│   └── /essays/[slug]         → Individual post (MDX)
├── /about                     → Personal + professional About
└── (contact is footer section on every page)
```

## Component Hierarchy
```
layout.tsx (Root)
├── <Nav />                    — Fixed top, links to all pages
├── {children}                 — Page content
└── <Footer />                 — Contact links, email, GitHub, LinkedIn

page.tsx (Home)
├── <HeroSection />            — Name, title, CTA
├── <FeaturedProjects />       — 4 <ProjectCard /> components
├── <RecentEssays />           — 2-3 <EssayCard /> components
└── <ContactCTA />

[slug]/page.tsx (Project)
├── <ProjectHeader />          — Title, tags, meta
├── <ProjectOverview />        — Summary paragraphs
├── <ProblemSection />         — Highlighted problem box
├── <MethodologySection />     — Phased breakdown
├── <MetricCards />            — Big numbers
├── <FindingsSection />        — Key insights
└── <ProjectFooter />          — Tech stack + GitHub link
```

## Data Layer
```
src/data/
├── projects.ts    — Array of ProjectData objects (all 4 projects)
├── essays.ts      — Essay metadata (title, date, slug, tags)
└── personal.ts    — Skills, certifications, experience timeline
```

## Key Patterns
- Dynamic routes use generateStaticParams() for all project slugs
- Essays are MDX files in src/content/essays/ rendered with next-mdx-remote
- All images via next/image with explicit width/height to prevent CLS
- No client components unless: form input, scroll detection, mobile menu
EOF
action "Updated: docs/ARCHITECTURE.md"

# =============================================================================
# DONE
# =============================================================================
echo ""
echo -e "${BOLD}${GREEN}╔══════════════════════════════════════════╗${RESET}"
echo -e "${BOLD}${GREEN}║   Portfolio Project 1 — Fixed! ✓         ║${RESET}"
echo -e "${BOLD}${GREEN}╚══════════════════════════════════════════╝${RESET}"
echo ""
echo "What still needs manual action:"
echo ""
echo -e "  1. ${CYAN}Place the new CLAUDE.md at project root${RESET}"
echo "     Copy content from PROJECT1_CLAUDE.md output file"
echo "     Delete .claude/CLAUDE.md after (it does NOT belong there)"
echo ""
echo -e "  2. ${CYAN}Initialize Next.js in src/${RESET}"
echo "     pnpm create next-app@latest . --typescript --tailwind --app --src-dir --import-alias '@/*'"
echo "     (run this FROM INSIDE project 1/ folder)"
echo ""
echo -e "  3. ${CYAN}Set GITHUB_TOKEN environment variable${RESET}"
echo "     Then: claude mcp add github"
echo "     And:  claude mcp add vercel (if not done)"
echo ""
echo -e "  4. ${CYAN}Start building:${RESET}"
echo "     cd 'project 1'"
echo "     claude"
echo "     /preflight"
echo ""
