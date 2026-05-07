# Site Walkthrough
# Richard Pillaca — Portfolio Website v2

A page-by-page walkthrough of the site's UI, content, and behavior.

---

## Navigation

Every page has a fixed top navigation bar (`src/components/layout/Nav.tsx`):

```
Richard Pillaca    Projects    Essays    Journey    Skills    About    Resume
```

- Logo/name links back to `/`
- On mobile: hamburger menu collapses links
- Active route is highlighted
- CursorBubble (`src/components/ui/CursorBubble.tsx`): a custom cursor highlight effect on desktop

---

## Page 1 — Home (`/`)

**File:** `src/app/page.tsx`

### Hero Section
- Large heading: "Richard Pillaca Burga"
- Subtitle: "Data Analyst & BI Developer"
- One-liner: context about location/focus
- Two CTA buttons: "View Projects" → `/projects` and "Read Essays" → `/essays`

### Metrics Strip
A horizontal band showing personal stats with icons and labels:
- Years of experience
- Projects shipped
- Data points analyzed
- etc.

### Featured Projects
Three `<ProjectCard />` components — the top three projects:
1. Bike Share Network Optimization (DATA SCIENCE)
2. AI Technical Debt Research (RESEARCH)
3. ExamVault (FULL STACK)

Each card shows: category badge, title, tagline, 2–3 key metric chips, tech stack tags, and links to `/projects/[slug]`.

### Recent Essays
Three `<EssayCard />` components showing the most recent essays with: title, date, read time, tags, excerpt.

### Footer
Social links: GitHub, LinkedIn, email. Copyright notice.

---

## Page 2 — Projects Gallery (`/projects`)

**File:** `src/app/projects/page.tsx`

### Filter Bar
Category pills at the top:
- `ALL` (default) — shows all 6 projects
- `DATA SCIENCE`
- `RESEARCH`
- `EXCEL AUTOMATION`
- `FULL STACK`

Filter state is managed client-side (`'use client'`). Clicking a pill instantly filters the grid — no page reload.

### Project Grid
Responsive card grid: 1 column mobile → 2 columns tablet → 3 columns desktop.

Each `<ProjectCard />` contains:
- Thumbnail image (next/image)
- Category badge (color-coded per category)
- Title
- Tagline
- 2–3 metric chips (e.g., "2M+ records")
- Tech stack tags
- "Read case study →" link

---

## Page 3 — Project Case Study (`/projects/[slug]`)

**File:** `src/app/projects/[slug]/page.tsx`

Slugs: `bike-share-optimization`, `ai-technical-debt-research`, `accounting-automation`, `exam-analysis-system`, `sublime-event-ticketing`, `bookstore-app`

### Layout (top to bottom)

**Header:**
- Category badge + title
- Duration + read time
- Hero image (if available)

**Overview:**
2–3 paragraph prose summary of the project.

**Problem Box:**
A highlighted callout section (amber/warm background) stating the specific problem being solved.

**Questions Addressed:**
Numbered list of the research/design questions the project answered.

**Methodology:**
Phase-by-phase breakdown. Each phase card contains:
- Phase label (e.g., "Phase 1")
- Phase title (e.g., "Data Engineering")
- Detailed paragraph of what was done
- Tech tag chips for tools used in that phase

**Key Results:**
Grid of `<MetricCard />` components — large number + label:
- Example: "2M+" / "Ridership records processed"
- Example: "95%" / "Time saved per month"

**Key Findings:**
Bulleted list of the main insights discovered.

**Conclusion:**
One paragraph wrapping up the impact and portability of the approach.

**Footer:**
- Tech stack: all tools used, displayed as `<TechTag />` chips
- GitHub link button (opens external repo)
- Image gallery (for projects with multiple screenshots)

---

## Page 4 — Essays (`/essays`)

**File:** `src/app/essays/page.tsx`

### Essay List
Three essay cards, each showing:
- Title
- Date (formatted: "January 15, 2025")
- Read time
- Tags (SQL, Data Analysis, etc.)
- Excerpt (1–2 sentence preview)
- "Read →" link

### Individual Essay (`/essays/[slug]`)
**File:** `src/app/essays/[slug]/page.tsx`

Displays essay metadata (title, date, read time, tags) and placeholder content. Full MDX rendering infrastructure exists for when real essays are written.

---

## Page 5 — About (`/about`)

**File:** `src/app/about/page.tsx`

A personal page covering:

**Hero:**
- Photo + name + title + short bio
- Location: Toronto, Canada
- Key credentials highlighted

**Journey:**
Narrative text covering: growing up in Peru, studying Computer Science at UBC Okanagan, moving to Toronto.

**Professional Section:**
- Current role/status
- Education: BSc Computer Science, UBC Okanagan (2021–2025)
- Certifications: listed with issuing org and year

**Skills Grid:**
Categorized by:
- Data & BI: Python, SQL, Power BI, DAX, Power Query, R, Excel, SonarQube
- Development: React.js, Django, Next.js, Docker, GitHub Actions, REST API, PostgreSQL
- Languages: Spanish (native), English (professional), French (intermediate)
- Tools: Figma, Webflow, Jira, Agile/Scrum

**Beyond Work:**
Community involvement cards with images:
- Football Club (Founder & President — campus club)
- Okanagan Tech Industry Night (Co-organizer — 200+ attendees)
- Latin American Student Association (VP Internal)
- Alianza Latina
- HispanoTech
- Scale Without Borders
- Cursor Community
- Canadian Cancer Society volunteer

**Favorites:**
Books, movies, travel photos — personal touches that make the about page human.

---

## Page 6 — Journey (`/journey`)

**File:** `src/app/journey/page.tsx`

### Filter Bar
Pills: ALL / WORK / RESEARCH / EDUCATION / VOLUNTEER

### Timeline
Chronological list of experience entries from `src/data/experience.ts`, each showing:
- Type badge (color-coded)
- Role title
- Organization name + location
- Period (e.g., "Jan 2026 – Present")
- Description paragraph
- Bullet highlights
- Skill tags
- Optional: partner link button

**Timeline entries (newest to oldest):**
1. Web Content & UX Lead — BrainTrainr (Jan 2026 – Present)
2. Frontend Developer — Karac, Switzerland (Sep–Dec 2025)
3. Full-Stack Developer — UBC Faculty of Science / ExamVault (May–Aug 2025)
4. Research Assistant — UBC / AI Technical Debt (Jan–May 2025)
5. VP Internal — Latin American Student Association (Sep 2024 – Apr 2025)
6. Business Development Representative — UBC Okanagan (Aug 2023 – Sep 2025)
7. Founder & President — Football Enthusiast Club (Aug 2023 – Apr 2025)
8. Co-founder — Okanagan Tech Industry Night (Nov 2023 – Feb 2024)

---

## Page 7 — Skills (`/skills`)

**File:** `src/app/skills/page.tsx`

Displays the full skills inventory in a clean grid, organized by category. Also shows certifications with issuing organization and year.

---

## Page 8 — Resume (`/resume`)

**File:** `src/app/resume/page.tsx`

Embeds `public/resume.pdf` in an `<iframe>` or PDF viewer. Includes a "Download PDF" button.

---

## Footer

**File:** `src/components/layout/Footer.tsx`

Present on every page. Contains:
- Name + title
- Social icons: GitHub, LinkedIn
- Email link (`mailto:`)
- Copyright line

---

## UI Components Summary

| Component | File | Purpose |
|-----------|------|---------|
| `Nav` | `layout/Nav.tsx` | Fixed top navigation, mobile hamburger |
| `Footer` | `layout/Footer.tsx` | Social links, email, copyright |
| `ProjectCard` | `ui/ProjectCard.tsx` | Project thumbnail + meta for gallery |
| `EssayCard` | `ui/EssayCard.tsx` | Essay preview card |
| `MetricCard` | `ui/MetricCard.tsx` | Big number + label card for results |
| `TechTag` | `ui/TechTag.tsx` | Pill chip for tech stack display |
| `SectionHeader` | `ui/SectionHeader.tsx` | Consistent section title component |
| `CursorBubble` | `ui/CursorBubble.tsx` | Custom cursor highlight effect |
