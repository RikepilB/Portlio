# DESIGN.md — Felt & Gold

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
- Display/UI: Manrope (+ Montserrat heavy display), wide tracking on banners
- Accents: Cormorant Garamond italic / Cinzel stamped labels
- Mono: JetBrains Mono for tags and dates

## Texture & light
- 3–5% SVG linen overlay on felt panels
- Soft top-left radial ambient lighting

## Motion
- Selective framer-motion entrances + gold-foil cursor tracking
- CSS fallbacks; `prefers-reduced-motion` disables decorative motion

## Components
- FeltProjectCard: felt panel, stamped serif label, white title, gold-foil CTA
- ResumePaper: satin pearl sheet with rose-gold accents
- Nav: Home / About / Journey / Projects only

## Explicit overrides vs baseline-ui
Allowed: gradient foil text, wide tracking, linen texture overlays.
