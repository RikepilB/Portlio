# Documentation audit — post felt/gold cleanup

> Updated 2026-07-13 after Phase 0 reorganization. Ground truth = **code** + **v3 canon**.

## Live authority

| Topic | Canonical source |
|-------|------------------|
| Identity / tokens / type | `docs/v3/branding.md` |
| Scope / AC / routes | `docs/v3/PRD.md` |
| Responsive / motion | `docs/v3/design.md` |
| Content (projects, metrics) | `src/data/*` |
| Tech stack | `docs/ARCHITECTURE.md` |
| Decisions | `docs/decisions.md` |
| Session state | `docs/handoff/HANDOFF.md`, `docs/v3/HANDOFF.md` |

## Active vs archived

| Location | Status |
|----------|--------|
| `docs/v3/{branding,PRD,design}.md` | **Canonical** — felt/gold |
| `docs/v3/sources/gemini-felt-*` | Active immutable inputs |
| `docs/archive/v3-sources-velvet/` | Velvet-era Gemini drafts — provenance only |
| `docs/archive/v3-plans/` | Rejected velvet implementation plan |
| `docs/archive/v2/` | v2 PRD, plans, branding stub, security audit |
| `docs/archive/pre-build-planning/` | v1 scaffold era — ignore |

## Supersession rule

1. Felt/gold Gemini sources inform the rewrite of branding/PRD/design.
2. Velvet sources and the rejected velvet plan must not direct implementation.
3. `src/data/` always wins for project names, metrics, and media paths.
