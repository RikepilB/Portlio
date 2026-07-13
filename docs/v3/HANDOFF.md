# Portfolio v3 — Handoff (father)

**Read this first for v3.** Rolling current state + append-only session index. Full prose lives in
each session folder under `docs/v3/<date>-<name>/`.

## Canonical v3 document stack

| File | Role |
|------|------|
| [`branding.md`](./branding.md) | Canonical identity — felt/gold palette, typography, texture, motion |
| [`PRD.md`](./PRD.md) | Canonical scope — v2 structure preserved, felt/gold re-skin |
| [`design.md`](./design.md) | Canonical responsive route anatomy and interaction contract |
| [`sources/`](./sources/) | Active felt/gold Gemini inputs (immutable, non-canonical) |
| `docs/ARCHITECTURE.md` | Tech only — update when stack changes |
| `docs/decisions.md` | Supersession ADR and future architectural decisions |
| `docs/v3/DOC-AUDIT.md` | Overlap map — reference, not spec |

`docs/v3/branding.md`, `docs/v3/PRD.md`, and `docs/v3/design.md` are the canonical v3
contracts. `docs/v3/sources/*` are immutable reference inputs and cannot override those contracts
or `src/data/`. Velvet-era sources live in `docs/archive/v3-sources-velvet/` (provenance only).
For v3 work, `docs/archive/v2/*` is historical-only.

---

## Current state — 2026-07-13

**Felt/gold re-skin implemented on restored v2 structure.** Canon rewritten; sources cleaned;
Home / Projects / Journey / About re-skinned. `pnpm lint` → `tsc` → `pnpm build` pass.
Review locally at http://localhost:3000.

---

## Session index (append-only, newest first)

- [2026-07-13-harness-and-doc-audit](2026-07-13-harness-and-doc-audit/HANDOFF.md) — CLAUDE harness executed; GSD hooks disabled (global); embed-tokens Windows fix; Cursor Agent Windows install; v3 doc overlap audit + target stack

## Source index (active felt/gold)

- [`sources/gemini-felt-layout-architecture.md`](./sources/gemini-felt-layout-architecture.md)
- [`sources/gemini-felt-styling-tokens.md`](./sources/gemini-felt-styling-tokens.md)
- [`sources/gemini-felt-prd.md`](./sources/gemini-felt-prd.md)
- [`sources/assets/felt-texture-reference.webp`](./sources/assets/felt-texture-reference.webp)

These inputs are immutable and reference-only. They do not override the canonical v3 contracts
or current `src/data/`.
