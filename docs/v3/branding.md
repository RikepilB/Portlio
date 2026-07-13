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

Display titles on About use silver-foil gradient text (Montserrat heavy, wide tracking).
Kickers use Cormorant italic. Soft left-side lighting. Matte satin surfaces, generous
whitespace, clean-girl accessible luxury — no neon, no clutter.

## Typography

- **Manrope** (or Montserrat for heavy display weights): tall capitals, heavy weighting, wide
  tracking (`tracking-[0.18em]`) for the name banner and core project headings.
- **Cormorant Garamond** (italic) or **Cinzel**: stamped serif labels, branding accents, small
  uppercase metadata.
- **JetBrains Mono**: compact technical tags, dates, and code-adjacent labels.

Do not use Geist, Newsreader, Inter, Roboto, Arial, Ogg, or Playfair Display for the v3 interface.

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
