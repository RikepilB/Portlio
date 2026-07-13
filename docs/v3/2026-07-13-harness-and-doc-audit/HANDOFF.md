# Session — 2026-07-13 — harness-and-doc-audit

> Full archive: `transcript.md` — run `/export docs/v3/2026-07-13-harness-and-doc-audit/transcript.md`

## Goal

Fix Claude harness (skills/rules/agents), resolve tooling friction (Cursor Agent, GSD hooks), and
audit overlapping v2 documentation before starting **Portfolio v3** (new design, style, branding).

## What was done (concrete one-liners)

- Cursor Agent on Windows → Git Bash `curl | bash` fails (MINGW64); use PowerShell `irm 'https://cursor.com/install?win32=true' | iex`
- `.claude/CLAUDE.md` → tiered rules (14), skills routing (25), agents (15), design workflow, quality cross-refs — canonical harness at `.claude/CLAUDE.md` only (no root redirect)
- `.claude/rules/agents.md` → fixed `~/.claude/agents/` → `.claude/agents/`; all 15 agents listed
- GSD hooks disabled globally → stripped `gsd-*` from `~/.claude/settings.json`; added `~/.claude/remove-gsd-hooks.ps1` (re-run after `/gsd-update`)
- `embed-tokens.cjs` → `findProjectRoot` uses `path.dirname(dir) === dir` (Windows-safe); commit `91ead58`
- v3 doc audit → mapped overlap: PRD says 4 projects / live has ~18; green palette live vs coral redesign doc vs Gemini velvet/copper source inputs (now immutable references in `docs/v3/sources/`); `progress.txt` frozen Feb 2026; `branding.md` was empty at the time of this audit
- v3 handoff tree → `docs/v3/HANDOFF.md` + `docs/v3/DOC-AUDIT.md` + this session folder

## Files changed (repo)

- `.claude/CLAUDE.md` — harness hub
- `.claude/rules/agents.md` — project-local agent paths
- `.claude/skills/ckm-design-system/scripts/embed-tokens.cjs` — cross-platform root walk
- `docs/handoff/HANDOFF.md` — father handoff bookend (harness session)
- `docs/handoff/2026-07-13-claude-harness-fix/HANDOFF.md` — harness session digest
- `docs/v3/HANDOFF.md` — v3 father handoff (new)
- `docs/v3/DOC-AUDIT.md` — overlap matrix (new)
- `docs/v3/2026-07-13-harness-and-doc-audit/HANDOFF.md` — this file

**Outside repo (user machine):**

- `~/.claude/settings.json` — GSD hooks removed
- `~/.claude/remove-gsd-hooks.ps1` — hook removal script

## Failed attempts

- Git Bash Cursor Agent install → `Unsupported operating system: MINGW64_NT-10.0-26200`
- Root `CLAUDE.md` redirect — user chose `.claude/CLAUDE.md` only

## Next steps (v3, historical at time of audit)

1. **Choose branding direction:** (A) coral/warm `docs/plans/2026-06-22-redesign-design.md`, (B) evolve live green/gold, (C) Gemini velvet/copper source inputs now at `docs/v3/sources/`, or (D) new brief
2. Write `docs/v3/branding.md` — positioning, palette, fonts, voice (single source of truth)
3. Write `docs/v3/PRD.md` — v3 scope: which pages redesign, featured vs full gallery, essays status
4. ADR in `docs/decisions.md` — "v3 supersedes v2 PRD and 2026-06 plans"
5. Archive `docs/plans/*` → `docs/archive/v2/`; refresh `.claude/CLAUDE.md` pointers to `@docs/v3/PRD.md`
6. Run `/export docs/v3/2026-07-13-harness-and-doc-audit/transcript.md`

The current v3 contracts are `docs/v3/branding.md`, `docs/v3/PRD.md`, and
`docs/v3/design.md`; this historical record does not supersede them.

## Files in this folder

- `HANDOFF.md` — this file
- `transcript.md` — optional full `/export` archive
