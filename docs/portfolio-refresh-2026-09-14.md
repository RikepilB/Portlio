# Portfolio evidence refresh — 14 September 2026

## Scope and source precedence

Refresh public portfolio content and local project indexes. Keep the approved hero. On September 15 Richard explicitly authorized commit, checks, merge and deployment.
Product Hunt submission and social posting remain recommendations only.
Current public behavior and upstream records outrank old handoffs. Repository evidence outranks
summary metrics in writing notes. A reachable landing page does not prove a working application.
Dates below identify checkpoints. No project has a defensible total-completion denominator,
so completion percentages are intentionally not manufactured.

## Source coverage

- Local: 35 immediate Git checkouts/worktrees inventoried under PROYECTOS, including duplicates
  and directories with no resolvable HEAD. Read the project catalog, current flagship handoffs,
  selected READMEs, Second Brain Projects Hub, reviewed Personal Profile and saved bookmarks.
  Inventory is a directory/head/source-pointer audit, not a full code audit of all 35 repositories.
- GitHub app: repository search returned 100 entries; page two was empty. Visibility checked.
  Upstream merged-PR search verifies Normal #179/#180 and voice-navigation PR #3.
  Fork visibility alone is not evidence of a contribution or sole ownership.
- Separate GitHub MCP: `Authentication Failed: Bad credentials`; app connection used instead.
- Notion: authenticated search and fetch work. AI search requires a different plan; keyword
  search was used. Read Proof Points & Achievements and Samples — Richard's Own Writing.
  These are older summaries. ExamVault team size/scale and bike-share scale conflict with
  repository-backed records; do not propagate them as newly verified achievements.
- tl;dv: found 18 meetings since July 1. Read two relevant September meeting-note records.
  One record explicitly reports an unusable transcript. Another record supports an internal
  demo-first design direction; they do not prove Richard built the other participant's projects.
  No private dialogue or participant details are copied into public site data.
- Stan and Firecrawl: no matching callable tools discovered in this session. No data claimed.
  Public reference pages were inspected with web access instead.

## Current flagship picture

| Project | Stage and usability | Domain / entry point | Remaining constraint |
|---|---|---|---|
| ScoutLane | Public Resume Match; latest delivery receipt records 544 passing tests, one skipped | https://scoutlane.net/resume-match | This audit verifies reachability; provider upload flow was not rerun |
| PeruGrid | Public map + Coworking Scout; 89 catalog organizations at delivery checkpoint | https://perugrid.com/scout/ | Dataset freshness and source coverage remain ongoing work |
| Voidscape | Public CLI, experimental portable packs | https://voidscape.club/ | Installed/provider/harness acceptance before broader release claims |
| FindLeads | Deployed pilot with work queue and acquisition monitor | Existing domain reaches `/leads` | GAPS #3: endpoint protection and rate limits not verified; do not promote self-service access |
| ExamVault | Team capstone, graded-paper redesign, protected hosted demo | https://exam-vault-five.vercel.app/ | Anonymous navigation redirects to Vercel login; use recorded demo |
| El Umbral | Deployed civic project hub | https://elumbralvzla.org → `/es` | Fresh end-to-end write-flow audit not performed |
| EMPEÑALO | Original public demo; 2.0 migration remains separate | https://empenalo.netlify.app/ | Homepage reachability does not establish billing or marketplace readiness |

Anonymous HTTP checks on September 14 local time returned these final destinations. Never count
ExamVault's final login-page HTTP 200 as application availability. DNS ownership, registrar access,
renewal dates and uptime history were not audited.

## Public content changes

- EN/ES Activity: two public releases, three upstream contributions, and one explicitly proposed
  roadmap direction. No invented contribution counts, publication dates or endorsements.
- EN/ES Reading: books suggested for exploration, one saved MIT article and three design references.
  It is explicitly not a reading history. No ratings, finished-book claims or copied book covers.
- All 17 existing projects receive explicit stage summaries. Case-study availability remains distinct
  from product maturity. Six featured cards retain screenshots, stack, details and appropriate links.
- ScoutLane test checkpoint and PeruGrid organization count corrected in both language datasets.
- FindLeads direct demo promotion removed while the protection gap remains documented.
- Activity filters have optional low-volume synthesized sound, off on every mount, with a visible
  state and failure fallback. No sound files, tracking, autoplay or external asset dependencies.

## Reference decisions

- [Cris](https://www.cris.fast/): make contributions findable, but use actual upstream work instead
  of a decorative commit heatmap.
- [Railly](https://www.railly.dev/): separate projects, writing and resources; link each to its own
  evidence. Do not copy awards, organizations or endorsements.
- [Siddhant](https://www.siddubey.com/): simple reading/favorites structure. Exact `/log` retrieval
  failed, so no claim is made about that page's content.
- [Cueva](https://www.cueva.io/): Activity is visible in indexed navigation; exact `/activity`
  retrieval failed. Its detailed page design was not inspected.
- [The Next Craft](https://thenextcraft.org/en): borrow the discipline of a coherent visual motif
  and clear action; do not import its terminal theme into the felt/gold portfolio.
- [GSAP Core](https://gsap.com/core/) and [resources](https://gsap.com/resources/): reserve timeline
  orchestration for a real multi-step product demonstration, not basic link hover effects.
- [Motion UI](https://motion.dev/ui): useful reference for shared transition settings and reduced
  motion. It is a Motion+ offering; no paid component code was copied or installed.
- [Geist](https://vercel.com/geist/introduction) and [brand assets](https://vercel.com/geist/brands):
  borrow consistent control states and information hierarchy. Preserve this site's fonts and identity;
  brand logos must not suggest partnerships.

## Product design recommendations — proposed, not implemented in sibling repositories

| Product | Most useful next design change | Motion / sound / 3D decision | Verification |
|---|---|---|---|
| ScoutLane | Make the resume → evidence → improvement loop the primary public demo; keep limitations next to the result | Short result transitions; optional completion cue; no 3D in a reading task | Measure first successful comparison and recovery from invalid files |
| PeruGrid | Keep selected map location, filters and source freshness visibly connected; make Scout an obvious next action | Reuse existing map modes; reduced-motion fly-to fallback; no decorative scene | Mobile selection/filter state, keyboard route, stale source behavior |
| Voidscape | Show inspect → preview → read with one synthetic input and a reviewable output | Reuse terminal/demo components; sound only for explicit completion; no character mascot | Fresh install, supported input, stop/recovery, evidence navigation |
| FindLeads | Prioritize the next lead action and make run failures recoverable | Preserve queue context during detail transitions; sound off by default | Endpoint protection first, then keyboard queue and failed-run recovery |
| ExamVault | Carry graded-paper identity through course creation and exam review | Reuse OMR motif; subtle state changes; avoid effects over dense exam data | Anonymous access gate, instructor journey, mobile form errors |
| El Umbral | Make need, owner and next action clear in project rows | Brief status transition, no compulsory animation | EN/ES parity, accessible filtering and submission feedback |
| EMPEÑALO | Separate client and business journeys, demo and real transaction states | Clear offer/acceptance feedback; optional confirmation sound | Auth, proposal limits and payment mode validated before broad promotion |

Remixing is appropriate for existing owned components and licensed assets. A 3D object should
explain a spatial/product relationship; none is needed for the current portfolio expansion.
Any later asset needs provenance, lazy loading, a static fallback and a mobile performance check.

## Top three to share

1. **PeruGrid + Coworking Scout — share now in a focused community demo.** A visual, bilingual,
   low-friction use case with a reachable public entry point. Launch story: find the technology
   ecosystem and a place to work. Before Product Hunt, repeat mobile discovery and verify source
   freshness. Best immediate general-public sharing candidate.
2. **ScoutLane Resume Match — focused Product Hunt candidate.** Lead with one understandable
   comparison workflow rather than the whole recruiter platform. The public route and production
   receipt are strong evidence. Repeat one consented synthetic upload and error-recovery run,
   confirm public usage budget/cost behavior, and record a concise demo before launch.
3. **Voidscape — developer preview first.** Distinct media-to-evidence workflow and public code/docs.
   Share a synthetic inspect/preview/read demonstration with an exact supported-platform list.
   Complete clean-install and independent acceptance gates before a broad launch claim.

Ranking is an editorial judgment based on public access, clarity of first use, differentiation and
remaining operational work; it is not a measured market-demand score. [Product Hunt](https://www.producthunt.com/)
was inspected for platform context. Nothing was submitted. FindLeads is held behind its protection
gap; private products remain excluded.

## Verification

Initial lint, TypeScript and production build passed (62 routes); initial suite: 14 tests passed.
Final verification and rendered review are recorded in the session handoff and design contract.

## September 15 expansion

Richard supplied his profile snapshot and requested his own projects, writing and personal interests alongside contributions. Activity now exposes six flagship case studies and the public Canada Research Path PE guide. The 2,268-contribution figure is explicitly a user-supplied September 15 snapshot, not a live counter. Recordly was not relabeled as original work based on fork activity. Library links existing portfolio essays and the known Substack/X profiles, without inventing posts or completed readings. Beyond Code includes Football Hub leadership, 14+ countries, Machu Picchu, salsa/bachata, French and journaling. The current public profile README corroborates these details and describes AI certifications as in progress; completed-credential wording was corrected. No verified Spotify URL was found; no player or listening history was invented.

Launch hygiene: new Library/Activity pages have localized titles, descriptions, canonical/hreflang links and sitemap entries; existing robots, contact and social metadata retained. Static build adds no backend, account system, asset service or data collection. Sound is local and opt-in. Existing Vercel analytics and rollback process remain unchanged. No additional consent flow or legal service is needed for these content-only changes. Production smoke evidence is recorded in the September 15 handoff.

## Publication receipt

Merged through [PR #38](https://github.com/RikepilB/Portlio/pull/38), commit `dc1ae5a`. Production deployment and merged-main CI passed. Final implementation: lint, typecheck, build (62 pages), 15 tests. Live EN/ES Activity, Library, About, project case study, robots and sitemap return HTTP 200. Desktop filters, mobile wrapping, hero preservation and opt-in sound verified. Exact scope and review coverage are recorded in [the publication handoff](handoff/2026-09-15-portfolio-publication/HANDOFF.md).
