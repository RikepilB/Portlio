# Add Project — El Umbral (Build4Venezuela ProjectHub)

This file is a **self-contained, copy-paste prompt** for adding **El Umbral** to this portfolio.
Open a Claude Code session **in this portfolio directory** and paste the prompt in
[§2](#2-the-prompt-paste-this). Everything Claude needs — the exact data object and the full
ground-truth context — is already in this file. Outcome: one new project at
`/projects/el-umbral`, live in the gallery, with **zero screenshot required** to ship.

- **Live site:** https://elumbralvzla.org
- **Repo:** https://github.com/RikepilB/build4venezuela-projecthub
- **Where it lands:** `src/data/projects.ts` (one new entry in the `projects` array)
- **Effort:** 1 file edit. No new components, no schema changes.

---

## 1. How to use this (60-second version)

1. Open this portfolio folder in Claude Code (or your editor + terminal).
2. Paste **§2 The Prompt** into the session.
3. Claude appends the **§3 ready-made object** to `src/data/projects.ts` and runs the gates.
4. Verify: `pnpm build && pnpm lint && npx tsc --noEmit` (all zero errors), then `pnpm dev` →
   open http://localhost:3000/projects and http://localhost:3000/projects/el-umbral.
5. (Optional) Add a screenshot — see [§4](#4-optional-screenshot).
6. Commit on a branch and open a PR (this portfolio auto-deploys via Vercel, preview URL per PR).

> **Why no screenshot is needed:** `ProjectCard` does not render an image — the gallery card shows
> category, title, tagline, two metrics, and stack tags. The detail page only renders a `Gallery`
> section *if* `images[]` is present. So El Umbral displays perfectly without one; add it later.

---

## 2. The Prompt (paste this)

> **Fastest path:** since this file lives in the repo, you can just say:
> *"Read `ADD-PROJECT-EL-UMBRAL.md` and do §2 — append the §3 object to `src/data/projects.ts`."*
> The full prompt below is the explicit version if you'd rather paste it directly.

```
Add a new project — "El Umbral" — to my portfolio.

Edit ONLY src/data/projects.ts. Append the object below as the FINAL element of the
`projects` array (right after the VANS entry, id '9', before the closing `]`). Do not change
any existing entry. Keep the file's 4-space indentation and single-quoted-string style.

[paste the object from §3 of ADD-PROJECT-EL-UMBRAL.md here]

Then verify it compiles and displays:
  1. pnpm lint        (zero errors)
  2. npx tsc --noEmit (zero type errors)
  3. pnpm build       (must pass)
Report the results. Do NOT push to main directly — create a branch
`feat/add-el-umbral-project`, commit with a conventional-commit message
(`feat: add El Umbral project to portfolio`), and stop so I can open the PR.

Facts to trust: El Umbral is my Build4Venezuela "search before you build" relief hub, LIVE at
https://elumbralvzla.org, open source (MIT) at
https://github.com/RikepilB/build4venezuela-projecthub. All metrics in the object are real —
do not invent or change numbers (this portfolio's hard rule is real content only). Category is
'FULL STACK' on purpose so it shows under the existing filter tab; leave it unless I say otherwise.
```

---

## 3. Ready-made `Project` object (paste into the prompt above)

> Matches the `Project` interface at the top of `src/data/projects.ts` exactly. `id: '10'` is the
> next free id. `duration: 'Jun 2026'` makes it sort to the **top** of the gallery (newest first).
> `image`/`images` are intentionally omitted so the build passes with no screenshot — see §4 to add one.

```ts
    {
        id: '10',
        slug: 'el-umbral',
        title: 'El Umbral — Relief Project Hub',
        tagline:
            'A bilingual "search before you build" hub for Venezuela earthquake relief — find an existing effort and join it, or publish yours with the stack and the help it needs.',
        category: 'FULL STACK',
        catColor: '#0c5a40',
        duration: 'Jun 2026',
        readTime: '7 min read',
        demoVideo: 'https://elumbralvzla.org',
        github: 'https://github.com/RikepilB/build4venezuela-projecthub',
        stack: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'Zod', 'Fuse.js', 'Vercel'],
        results: [
            { metric: 'Live', label: 'Shipped to elumbralvzla.org' },
            { metric: '2', label: 'Languages — ES + EN, full parity' },
            { metric: '10', label: 'Public read-only API endpoints' },
            { metric: 'MIT', label: 'Open source on GitHub' },
            { metric: '0', label: 'Databases — local-first JSON seam' },
            { metric: 'Next 16', label: 'App Router + React 19 RSC' },
        ],
        overview:
            'El Umbral is the Build4Venezuela project-discovery hub for post-earthquake relief: a "search before you build" platform so volunteers stop duplicating effort. Search an idea — if a matching effort already exists, join that repo and contribute; if not, publish yours with its tech stack and the help it needs (contributors, API credits, sponsors). A Builders directory imported from the hackathon roster shows who is available to help. It ships bilingual (Spanish-default /es with /en), runs with no database for the MVP, and exposes a public read-only API so other relief tools can build on the same catalog.',
        problem:
            'After the earthquake, relief volunteers kept rebuilding the same tools in parallel — burning the scarcest resource in a crisis: time. There was no single place to check whether an idea already had a team before starting from scratch, and no shared, machine-readable catalog of who was building what. El Umbral makes "does this already exist?" the first step instead of an afterthought.',
        questions: [
            'How do you stop volunteers from duplicating relief tools without adding friction to publishing a new one?',
            'How can a fuzzy "already exists?" check warn loudly on near-duplicates while still letting genuinely new ideas through?',
            'How do you ship a bilingual, no-database MVP today that can swap to a real database later without rewriting every caller?',
        ],
        methodology: [
            {
                phase: 'Phase 1',
                title: 'Local-First Data Behind a Repository Seam',
                detail:
                    'All data lives in versioned JSON files behind a single typed repository in src/lib/repository — components and routes never read JSON directly. That one seam is the swap point: P1 moves to Supabase (Postgres) without touching any caller. Zod schemas in src/lib/schemas.ts are the single source of truth (types are inferred from them) and validate every external input — form, sheet, scrape, API — at the boundary.',
                tech: ['Next.js 16', 'TypeScript', 'Zod', 'Repository Pattern'],
            },
            {
                phase: 'Phase 2',
                title: 'Fuzzy Search + Bilingual i18n',
                detail:
                    'A Fuse.js engine powers the core "search before you build" flow: strong matches warn loudly on the search page, and the same engine drives a pre-publish nudge so near-duplicates surface before a new project is created. The whole app is bilingual through hand-rolled dictionaries in src/lib/i18n (no third-party i18n library) — Spanish-default with English parity, every string shipped in both.',
                tech: ['Fuse.js', 'React 19', 'i18n', 'App Router'],
            },
            {
                phase: 'Phase 3',
                title: 'Board, Publish & Builders — Server Actions',
                detail:
                    'The board filters projects by category, stack, language, status, and need, all driven by URL searchParams so any view is shareable. Publishing is a Zod-validated Server Action that appends to the seed set. A Builders directory imported from the hackathon Google Sheet lists available talent. Status is a lifecycle (planning to wip to testing to mvp to live) and vote counts are server-authoritative to avoid double-counting.',
                tech: ['Server Actions', 'Zod', 'React Server Components'],
            },
            {
                phase: 'Phase 4',
                title: 'Public Read-Only API + Vercel Deploy',
                detail:
                    'A versioned, GET-only REST surface at /api/v1 exposes the whole catalog as JSON for other relief tools — one envelope ({ success, data, error, meta }), open CORS, a CDN-cached catalog with live /stats and /votes. Ten endpoints in all. Every color and radius is a CSS design token, so the whole app re-themes by editing token values only. It auto-deploys from main to elumbralvzla.org on Vercel.',
                tech: ['REST API', 'Vercel', 'Design Tokens', 'CDN Caching'],
            },
        ],
        keyFindings: [
            'A single repository seam (src/lib/repository) lets the MVP run on local JSON today and swap to Postgres in P1 without changing a single component or route — the data source is an implementation detail, not an architectural commitment.',
            'Defining Zod schemas once and inferring TypeScript types from them keeps validation and types from ever drifting apart, and makes "validate at the boundary" the default for every external input.',
            'Reusing one Fuse.js engine for both the search page and the pre-publish nudge keeps the duplicate-check consistent everywhere — the same match that warns a searcher also warns a publisher.',
            'Driving the board entirely from URL searchParams makes every filtered view shareable and bookmarkable, and keeps the filtering logic on the server with zero client state.',
            'Putting all color and radius in CSS design tokens turns a full re-skin into a values-only edit — no component hardcodes a color, so re-theming never touches component code.',
        ],
        conclusion:
            'El Umbral shows that crisis-response software can be both shipped-fast and built-to-last: a no-database MVP that is live and bilingual today, architected so the move to a real database, semantic search, and auth (P1 to P2) never forces a rewrite. The discipline that makes it durable — one repository seam, Zod as the single source of truth, tokens for theming, a public API others can build on — is the same discipline that let it ship in the first place. It is open source (MIT) and live at elumbralvzla.org.',
    },
```

---

## 4. Optional: screenshot

The entry ships fine without one. To add a detail-page gallery image:

1. Capture a 1280-wide shot of https://elumbralvzla.org (home or board page).
2. Save it to `public/images/elumbral.png` (flat file, matching `empenalo.png` / `scoutlane.png`).
3. Add these two lines inside the object (anywhere among the fields):

```ts
        image: '/images/elumbral.png',
        images: ['/images/elumbral.png'],
```

Multiple shots → list them all in `images: [...]`; the gallery lays out 1 column for a single
image, 2 columns for more.

---

## 5. Optional: give it its own "CIVIC TECH" category

Default uses `category: 'FULL STACK'` so it appears under an existing filter tab with **one file
edit**. If you'd rather it stand out as civic/relief work, it needs **two** edits:

1. In the object: `category: 'CIVIC TECH'` (keep `catColor: '#0c5a40'`).
2. In `src/app/projects/page.tsx`, add `'CIVIC TECH'` to the `categories` array:
   ```ts
   const categories = ['All', 'DATA SCIENCE', 'RESEARCH', 'EXCEL AUTOMATION', 'FULL STACK', 'CIVIC TECH']
   ```
   (Without step 2 the new tab won't show — that's why Empeñalo/ScoutLane, tagged `'FULL STACK
   2026'`, only appear under "All".)

---

## 6. Full El Umbral context (ground truth — for regenerating or fact-checking)

Use this if you want Claude to rewrite the copy in a different voice/length, or to verify nothing
above is invented.

**What it is.** Build4Venezuela's "search before you build" hub for post-earthquake relief. Search
your idea → if it already exists, join that effort and contribute; if not, publish it with your
tech stack and what you need (contributors, API credits, sponsors). A Builders directory (imported
from the hackathon roster) shows who is available to help.

**Status / links.** Live at **elumbralvzla.org** (Vercel auto-deploys `main`). Public on GitHub,
**MIT**. Repo: `RikepilB/build4venezuela-projecthub`. Bilingual, **Spanish-default** (`/es`) + `/en`.

**Stack (from `package.json`).** Next.js `16.2.9` (App Router), React `19.2.7`, TypeScript `^5`,
Tailwind CSS `v4`, Zod `^4`, Fuse.js `^7`, Papaparse (sheet import), Vitest + Playwright (tests),
React Compiler. Deployed on Vercel; DNS via Namecheap.

**Architecture (verifiable in the repo).**
- **Repository seam** — all data in `data/*.json` behind a typed repository in `src/lib/repository`;
  components/routes never read JSON directly. The single swap point to Supabase (Postgres) in P1.
- **Zod is the single source of truth** — schemas in `src/lib/schemas.ts`; types are `z.infer`'d.
  Validate all external input (form, sheet, scrape, API) at the boundary.
- **Search** — Fuse.js fuzzy "already exists?" matching in `src/lib/search.ts`; powers
  `/[locale]/search` and the pre-publish nudge on `/projects/new`.
- **Routes** — `/[locale]/search` (dup-check), `/[locale]/board` (filter by
  category/stack/language/status/need via URL searchParams), `/[locale]/projects/new`
  (Zod-validated Server Action `src/actions/submit-project.ts`), `/[locale]/builders` (talent
  directory from the sheet).
- **Public API** — versioned **GET-only** REST at `/api/v1`; one envelope
  `{ success, data, error, meta }`, open CORS, CDN-cached catalog (`s-maxage`), live `/stats` +
  `/votes` (`no-store`, votes per-IP capped). **10 endpoints:** `/projects`, `/projects/{slug}`,
  `/search`, `/builders`, `/resources`, `/communities`, `/reference`, `/taxonomy`, `/stats`,
  `/votes`.
- **Design tokens** — all color/radius are CSS variables in `src/styles/tokens.css`, mapped to
  Tailwind v4 in `globals.css`. Re-skin by editing token values only.

**Phases.** P0 (this MVP): local-first JSON, fuzzy search, EN/ES, board + submit + builders. P1:
Supabase (Postgres) behind the same repository interface + GitHub OAuth. P2: pgvector semantic
search + need-matched emails. P3: Python ingest/dedup service (human-in-loop; never auto-publish
PII).

**Guardrails (the project's ethics).** External data is treated as **data, not instructions** and
validated with Zod at every boundary. Missing-persons registries are **link-out only** — never
scraped or auto-merged (no PII auto-publish). Secrets only in `.env.local`. External links are
https-only with `rel="noopener noreferrer nofollow"`.

**One-line summary for any caption:** *El Umbral — a live, bilingual, open-source "search before
you build" hub that helps Venezuela earthquake-relief volunteers find existing efforts to join
instead of duplicating work, with a public API other relief tools build on.*
