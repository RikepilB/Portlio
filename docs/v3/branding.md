# Portfolio v3 — Brand Identity

## Canonical status

This is the canonical v3 identity document. It supersedes the rejected velvet-charcoal/copper
direction and the exploratory files in [`sources/`](./sources/) and
`docs/archive/v3-sources-velvet/`. Source inputs are reference material only: their project
names, claims, and implementation suggestions do not override `src/data/`.

## Positioning

Richard Pillaca Burga’s portfolio presents data and engineering work with the tactile restraint
of premium packaging — matte sage felt, metallic gold foil, and balanced whitespace. The
experience should feel composed and material, not neon-terminal or generic SaaS.

## Approved palette

### Primary canvas (Home, Projects, Journey)

| Token | Value | Role |
| --- | --- | --- |
| Felt | `#607466` | Sage green-grey felt casing (primary panels) |
| Felt soft | `#708275` | Lighter felt variant for elevated surfaces |
| Gold | `#D4AF37` | Metallic yellow gold foil base |
| Gold highlight | `#F2E3C6` | Foil reflection highlight |
| Gold shadow | `#AA7C11` | Foil depth |
| Matte white | `#FFFFFF` | Primary text on felt surfaces |
| Ink muted | `#EAECEB` | Secondary text on felt |

Gold foil interactive reflection uses:
`linear-gradient(135deg, #F2E3C6, #D4AF37, #AA7C11)`.

### Complementary theme (About — Dewy Set packaging)

Inspired by Anastasia Beverly Hills Dewy Set packaging, adapted to a cool mist + silver
editorial system:

| Token | Value | Role |
| --- | --- | --- |
| Mist | `#D0D7DE` | Light blue-grey satin page ground |
| Mist soft | `#E4E9EE` | Elevated ice surfaces |
| Mist ice | `#F0F3F6` | Brightest card / polaroid paper |
| Mist deep | `#B8C2CC` | Soft depth / image placeholders |
| Silver | `#A8B0BA` | Rendered silver foil base |
| Silver bright | `#F4F6F8` | Chrome highlight |
| Silver shadow | `#5C6570` | Graphite fold / secondary accents |
| Anthracite | `#2F3542` | Body and UI ink on mist |

Display titles on About use Cormorant Garamond, not wide-tracked sans.
Kickers use Cormorant italic. Soft left-side lighting. Matte satin surfaces, generous
whitespace, clean-girl accessible luxury — no neon, no clutter.

## Typography

- **Manrope**: body copy and UI chrome.
- **Cormorant Garamond**: page titles, section headings, and italic kickers.
- **JetBrains Mono**: compact technical tags, dates, and code-adjacent labels.

Do not use Montserrat, Geist, Newsreader, Inter, Roboto, Arial, Ogg, or Playfair Display for the v3 interface.

## Texture and lighting

- Solid panels sit under an SVG linen/canvas texture at 3–5% opacity (suede felt simulation).
- Soft side lighting: off-center radial ambient from top-left toward bottom-right.
- Texture must not obscure content, capture pointer input, or introduce scroll jank.

## Motion

- Prefer opacity and transform transitions; selective `framer-motion` for card entrances and
  foil hover moments is allowed.
- Cursor-tracked gold foil on interactive links is allowed; it must degrade to a static gold
  treatment with `prefers-reduced-motion` and without JavaScript.
- Motion clarifies hierarchy — it is never required to discover content.

## Implementation guardrails

- `src/data/` remains the source of truth for project, experience, and other site content.
- Components consume semantic design tokens; they do not hardcode project copy, metrics, or
  one-off hex values in presentation components.
- Structural rule: v2 page composition is preserved; this identity is a re-skin.

## Approved design — Tideglass Felt (2026-09-11)

Richard approved this direction after reviewing the rendered site locally. It keeps the existing
felt/gold identity while applying the Tideglass background, typography, and editorial cleanup.

- **Audience and job:** recruiters get the clearest path through current work; collaborators can
  still inspect technical depth. Primary navigation exposes Work directly and the work section
  follows the hero without an extra closing pitch.
- **Story:** the user-selected hero opens with Richard’s portrait, Toronto location, gold foil name,
  personal traits, and social links. Project evidence, writing, and capabilities follow.
- **Visual direction:** deepen the existing sage felt into a nocturnal green ground, retain warm
  gold as the interaction accent, and adapt the supplied Tideglass teal light as one restrained
  atmospheric band in the hero. A small green cast from Neon Sludge ties the aura back to felt;
  neither source recipe is copied as a full-page blur stack.
- **Typography:** Cormorant Garamond owns display copy, Manrope owns body and controls, and
  JetBrains Mono is limited to dates, categories, and technical metadata. No fourth family.
- **Anti-slop rules:** no decorative pre-heading labels, duplicate project CTA, giant ornamental
  numbers, icon-card trio, tag-cloud filler, glass panels, or hover-lift on every surface. The four
  circular social controls remain because they are part of Richard’s explicitly selected hero;
  their old scale and shadow effects do not. Status labels remain only when they communicate state.
- **Composition:** preserve the v2 section order. Let the hero carry the atmosphere; projects and
  essays use flatter editorial rows with solid, readable media surfaces.
- **Motion:** quiet opacity/reveal and link feedback only. The aura is static and reduced-motion
  safe.
- **Review gate:** `/en` was inspected at 1440px and 390px; project media stays horizontal and
  contained; lint, typecheck, tests, and the production build pass.

### Anti-slop review — local candidate

- **Verdict:** pass after restoring the user-selected centered foil hero and reinspecting it at
  1440×1000 and 390×844. The remaining Home and Projects surfaces still move through real work,
  writing, and capabilities without a feature-card wall or invented proof.
- The aura reads as low-contrast environmental light, not a decorative gradient blob. It is confined
  to the hero while project images sit on solid dark surfaces.
- The hero portrait uses a locally generated sea-glass treatment with the previous upper-right mark
  removed. The original asset remains unchanged as a rollback source; the replacement keeps the
  mint card, black line portrait, teal depth, and one restrained gold reflection.
- Desktop (1440×1000) and mobile (390×844) keep a clear hierarchy. English and Spanish show no page
  overflow; the mobile menu remains usable.
- Featured and gallery screenshots stay inside horizontal 16:10 frames with `object-contain`, so
  product UI is not cropped to fill a decorative shape.
- A review finding was fixed: the old pill-shaped Back to top control covered project metadata and
  skills copy on mobile. The local candidate uses a compact 44px square control on small screens.
- No decorative pre-heading labels, duplicate work CTA, ornamental skill numbers, icon-card trio,
  tag-cloud surfaces, or universal hover lift remain on Home. The hero’s social circles and italic
  traits are intentional identity elements chosen from Richard’s supplied reference.
- **2026-09-11 project-media refresh:** pass at 1440×1000 after replacing the six featured covers
  with current product evidence. Home cards render every image in a horizontal 16:10 frame with
  `object-contain`; case-study galleries now use the same containment rule instead of cropping UI.
  The added media earns its space by showing the actual product, workflow, or architecture map;
  no decorative mockups or fabricated metrics were introduced. Direct Details, Demo, Code, and
  Codebase map links restore the previously approved Home utility in one compact, functional row.

### Landing audit — pre-merge

| Check | Status | Evidence |
| --- | --- | --- |
| Crawl and redirects | Pass | `/` redirects to `/en`; `robots.txt` allows crawling; `sitemap.xml` loads; locale routes return 200. |
| Metadata and assets | Pass with follow-up | Local render has useful title/description, Open Graph and Twitter cards, favicon, and social image. Explicit per-route canonical links are not yet emitted. |
| Trust and contact | Pass | The primary contact action is visible in navigation and footer and resolves to the configured `mailto:` address. |
| Layout and navigation | Pass | Home and Projects were rendered at 1440×1000 and 390×844 in English and Spanish with no horizontal overflow or browser errors. |
| Measurement | Pass | Vercel Analytics is enabled only for production deployments; no custom PII-bearing events are emitted by this site. |

### Production readiness — advisory

| Item | Status | Recommendation |
| --- | --- | --- |
| Analytics | Present | Vercel Analytics is production-only; review the Vercel project’s retention/privacy settings when convenient. |
| Bot protection | N/A | The portfolio has no submitted public form; contact uses `mailto:`. |
| Privacy/legal | Review | The site has no accounts or database, but analytics is present; decide whether a short privacy notice is appropriate. This is not a launch blocker. |
| Operations | Present | GitHub Actions runs lint, types, tests, and build; Vercel deploys `main`. Roll back by promoting the prior Vercel deployment or reverting the merge commit. |

The advisory privacy decision and explicit per-route canonical links do not block this visual release.
