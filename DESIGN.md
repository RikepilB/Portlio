# DESIGN.md — Felt & Gold

## Canonical positioning

**Tagline:** "Full-stack engineer with a frontend and AI focus." (source: About page bio — the
most specific and most recently authored framing on-site.) Other surfaces have drifted from this:
`README.md` said "Data Analyst & BI Developer" (fixed), `layout.tsx` metadata says "Software &
Data Engineer" (needs the same fix), the Journey résumé card says "Software Engineer & Data
Analyst." Treat this file's tagline as the source of truth when reconciling copy — don't introduce
a fifth variant.

## Color strategy

Committed: sage felt carries primary surfaces; gold foil is the accent system (~10–20% of
interactive emphasis). About flips to pearl satin + rose gold.

### Primary (Home / Projects / Journey)
- Felt `#607466` / Felt soft `#708275`
- Gold `#D4AF37` · Highlight `#F2E3C6` · Shadow `#AA7C11`
- Matte white `#FFFFFF` on felt

### Complementary (About — Dewy Set mist + silver)
- Mist `#D0D7DE` / Mist soft `#E4E9EE` / Mist ice `#F0F3F6`
- Silver `#A8B0BA` · Bright `#F4F6F8` · Shadow `#5C6570`
- Anthracite `#2F3542` body ink
- Silver-foil display titles; soft left lighting; matte satin; clean-girl whitespace

## Typography
- Body/UI: Manrope
- Display headings + italic kickers: Cormorant Garamond
- Mono: JetBrains Mono for tags and dates
- Do not use Montserrat

## Texture & light
- 3–5% SVG linen overlay on felt panels
- Soft top-left radial ambient lighting

## Motion
- Selective framer-motion entrances + gold-foil cursor tracking
- CSS fallbacks; `prefers-reduced-motion` disables decorative motion

## Components
- FeltProjectCard: felt panel, stamped serif label, white title, gold-foil CTA
- ResumePaper: satin pearl sheet with rose-gold accents
- Nav: Work / About / Essays / Resume (Journey lives behind Resume; Get in touch stays in the bar)

## Explicit overrides vs baseline-ui
Allowed: gradient foil text, wide tracking, linen texture overlays.
