# Decisions (ADR log)

> One entry per significant decision. Newest on top. Append-only.

### 2026-07-13 — Adopt felt/gold re-skin; reject velvet/copper
- **Context:** The uncommitted velvet-charcoal/copper v3 rewrite failed local review
  (layout regressions, wrong visual direction). New Gemini inputs define sage felt + gold foil.
- **Decision:** Felt/gold is the approved v3 visual direction. Velvet/copper canon and its
  uncommitted implementation are rejected. **Structural rule:** v2 page composition is
  immutable — Home keeps embedded Skills, Journey keeps embedded Resume, project rows stay
  image-led, nav is Home/About/Journey/Projects only. Skills and Resume are not nav tabs;
  `/skills → /` and `/resume → /journey`. `framer-motion` (selective, CSS fallback) and
  `shadcn/ui` primitives are allowed. Velvet Gemini drafts move to
  `docs/archive/v3-sources-velvet/`; active inputs are `docs/v3/sources/gemini-felt-*`.
- **Alternatives:** Shipping velvet as-is, or inventing a third visual system without sources,
  were rejected.
- **Consequences:** Rewrite `docs/v3/{branding,PRD,design}.md` and harness before re-skinning
  app code. Restore v2 structure from git before applying tokens.

### 2026-07-13 — Clarify v3 document authority
- **Context:** The initial v3 source migration left historical audit references that could be
  mistaken for active Gemini paths or for specifications.
- **Decision:** `docs/v3/sources/*` are immutable reference inputs. `docs/v3/branding.md`,
  `docs/v3/PRD.md`, and `docs/v3/design.md` are the canonical v3 contracts. For v3 work,
  `docs/PRD.md` and `docs/plans/*` are historical-only.
- **Alternatives:** Treating source inputs or prior planning documents as active specifications was
  rejected because it creates conflicting content and design authority.
- **Consequences:** New v3 work cites the canonical contracts; historical documents retain
  provenance but do not direct implementation.

### 2026-07-13 — Establish v3 portfolio documentation canon
- **Context:** The shipped v2 documentation and exploratory Gemini inputs describe conflicting
  visual directions, font choices, project sets, and implementation ideas.
- **Decision:** `docs/v3/branding.md`, `docs/v3/PRD.md`, and `docs/v3/design.md` are the
  canonical v3 documents. V3 uses the approved velvet-charcoal and copper palette with Playfair
  Display, Manrope, and JetBrains Mono. `src/data/` remains authoritative for live content.
  Gemini inputs are preserved unchanged in `docs/v3/sources/` as non-canonical references.
- **Alternatives:** Keeping v2 documents or treating Gemini drafts as specifications was rejected
  because both can conflict with current content and the approved v3 direction.
- **Consequences:** New v3 implementation work must follow the v3 canonical documents. Existing
  v2 guidance is historical unless explicitly superseded again.

## Template
```
### <YYYY-MM-DD> — <decision title>
- **Context:** why this came up
- **Decision:** what we chose
- **Alternatives:** what we rejected and why
- **Consequences:** what this commits us to
```
