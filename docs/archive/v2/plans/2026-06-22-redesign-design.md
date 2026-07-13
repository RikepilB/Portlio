# Portfolio Redesign — Design Doc
> Date: 2026-06-22 · Full redesign: new warm palette, hero, About, motion.
> Reference scratch (gitignored): `redisgn/` — terraform ref = home structure, urban-visionary ref = About structure, `new landing draw image.jpeg` = hero portrait.

## Positioning (drives all copy)
Richard Pillaca — **Full-stack software engineer, frontend specialist**, trajectory → **Forward Deployed Engineer**.
Builder. **Data-driven by default** (Power BI cert + analysis experience) — a trait, NOT the headline.
Do NOT position as "Data Analyst / BI Developer" anymore. Old PRD framing is superseded here.

## Hero hook (replaces the 3-paragraph bio)
> **Full-stack engineer, frontend at heart — I build and ship products end to end.**
> Moving toward forward-deployed engineering. Data-driven by default.
> *Tenacious · Analytical · Charismatic*

## Palette (from the warm line-art image — kills green #2bc08f + gold logo + scattered thumb hex)
```
--bg        #faf7f2   warm cream (page base — also About bg)
--bg-soft   #f3ede4   warmer panel
--surface   #ffffff
--ink       #1a1714   near-black text
--ink-2     #4a443d   secondary text
--muted     #8a8076
--rule      #e3dccf   warm border
--accent    #e8714e   coral (portrait / starburst)
--accent-2  #f0744f   bright orange (hovers, starburst)
--accent-soft #fbeae1 coral wash
```
Implement as `globals.css @theme` tokens + Tailwind classes. No hardcoded hex in components. next/font (no Google @import).

## Home landing — adapt terraform structure, recolored LIGHT/warm
- Hero: line-art portrait (one side) + hook + name + animated count-up stats (years building / projects shipped / stack breadth). Coral starburst motif. Serif display + clean sans.
- Keep motion: scroll-progress line, count-up numbers, bloom-on-scroll reveals, asymmetric alternating project rows ("rhizo"). DROP particle canvas + custom cursor (heavy; CursorBubble already exists).
- Featured projects → asymmetric alternating rows (more editorial than current uniform cards).

## About — adapt urban-visionary brutalist magazine grid, warmed
Different presentation per section: **Communities / Exploring / Beyond Work / Shelf**.
- Big kinetic uppercase section headers, bordered magazine grid cells, grayscale→warm-color image hover, horizontal snap-scroll strips.
- Warm cream bg + coral accent (NOT the ref's stark white) for cohesion with home.
- Per-area treatment: Communities = bordered cell grid · Exploring = snap-scroll strip · Beyond Work = magazine columns · Shelf = gallery.

## Image treatment
Edit `redisgn/new landing draw image.jpeg`: crop, match cream bg (ideally transparent PNG), optimize, place in `public/images/`. Used in hero.

## Technical guardrails
- Tailwind-only, no inline styles, no CSS modules. Server Components default; client only for motion/interaction.
- next/font (keep a serif display + clean sans + mono; pick warmer pairing if Newsreader/Geist don't fit coral).
- Mobile-first 375→768→1280. Semantic HTML + aria. TS strict, no `any`.
- DoD: `pnpm build` + `pnpm lint` + `npx tsc --noEmit` zero errors. Visual diff at all 3 breakpoints.

## Build order
1. Tokens in globals.css (palette + fonts) — foundation.
2. Hero image edit → home hero (recolored, hook). **Show live, get reaction.**
3. Home featured-projects rows + motion.
4. About: 4 magazine-grid sections.
5. Propagate palette to remaining pages (projects, essays, journey, skills, resume) for consistency.
6. Verify gates + visual diff each step.

## Out of scope
- Content rewrites beyond the hero hook (case-study copy unchanged this pass).
- Backend/data changes. Essays still MDX-less placeholders.
