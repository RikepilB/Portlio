# Portfolio — Handoff (father)

**Read this first.** Whole-project handoff. Freshest state on top, then an append-only
index of every session folder. Nothing here is ever deleted — full prose lives in each
session's own `HANDOFF.md`; this file is the map.

## How this works (tree of context)

```
docs/handoff/
  HANDOFF.md                  ← this file (father): rolling current state + session index
  .current-session            ← pointer: active session folder name (used by the hooks)
  _meta/TEMPLATE.md           ← per-session template
  <YYYY-MM-DD>-<name>/        ← one immutable folder per session
    HANDOFF.md                ← session digest: goal · done · files · failed · next
    transcript.md             ← optional full /export archive
```

**Rules:** append, never overwrite. Only the father's `## Current state` is replaced each
session. Solved tasks → one concrete one-liner (file / PR / command).

---

## Current state — 2026-07-13

**Claude harness fixed on `feat/portfolio-additions` @ `91ead58`.** [`.claude/CLAUDE.md`](../../.claude/CLAUDE.md) is the single canonical harness — tiered map of all 14 rules, routing for 25 skills, catalog of 15 project-local agents, design workflow (replaces deleted `/redesign`), quality cross-refs. [`.claude/rules/agents.md`](../../.claude/rules/agents.md) synced to `.claude/agents/`. Windows fix: `embed-tokens.cjs` `findProjectRoot` no longer infinite-loops on `C:\`. **User machine (not in repo):** GSD hooks removed from `~/.claude/settings.json`; re-run `~/.claude/remove-gsd-hooks.ps1` after `/gsd-update`. **Next:** `/export` session transcript; optional `pin.mjs` same root-walk fix.

---

## Session index (append-only, newest first)

- [2026-07-13-claude-harness-fix](2026-07-13-claude-harness-fix/HANDOFF.md) — executed harness plan: `.claude/CLAUDE.md` + `rules/agents.md` wired to all skills/rules/agents; GSD hooks disabled globally; Cursor Agent Windows install documented; `embed-tokens.cjs` Windows root-walk fix (`91ead58`)
- [2026-06-30-scaffold-and-handoff-migration](2026-06-30-scaffold-and-handoff-migration/HANDOFF.md) — ran `project-scaffold` + migrated legacy `handoff.md`; deep-catch-up roadmap briefing; added El Umbral project (`7259831`) and updated résumé PDF + journey/embedded data (`0e48ad9`); mirrored next-steps to GitHub issues #11–#15; tested + pushed both branches and opened PR #16, PR #17; reordered home "My Work" to 5 newest projects + gave El Umbral an image (`602a52a`, `44125e0`, not pushed)

<!-- compact-handoff:auto-snapshot -->
<!-- Latest auto-snapshot: docs/handoff/2026-07-02-98bb9341/snapshot-002022.md -->
## Latest auto snapshot — 2026-07-02T00:20:22.015Z
- Session folder: `docs/handoff/2026-07-02-98bb9341/`
- Snapshot file: `docs/handoff/2026-07-02-98bb9341/snapshot-002022.md`
- Branch: main
