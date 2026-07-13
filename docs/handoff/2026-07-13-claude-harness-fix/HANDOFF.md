# Session — 2026-07-13 — claude-harness-fix

> Per-session digest. Full archive: `transcript.md` (run `/export docs/handoff/2026-07-13-claude-harness-fix/transcript.md`).

## Goal
Fix the Portfolio Claude Code harness: wire `.claude/CLAUDE.md` to all project skills, rules, and agents; resolve harness drift; follow-on fixes for Cursor Agent install, GSD hooks, and a Windows script bug.

## What was done (concrete one-liners)
- Harness audit → mapped drift: 14 rules / 25 skills / 15 agents mostly unreferenced; `/redesign` command gone; `rules/agents.md` pointed at `~/.claude/agents/`
- Harness plan → `.cursor/plans/update_claude_harness_6238ea0a.plan.md` (user chose `.claude/CLAUDE.md` only — no root redirect)
- `.claude/CLAUDE.md` → tiered rules map (14), skills routing (25), agents table (15), design workflow, quality cross-refs — 163 lines
- `.claude/rules/agents.md` → project-local `.claude/agents/` paths + all 15 agents synced with CLAUDE.md
- Cursor Agent on Windows → Git Bash `curl | bash` fails (MINGW64); use PowerShell `irm 'https://cursor.com/install?win32=true' | iex`
- GSD hooks disabled (global) → stripped `gsd-*` from `~/.claude/settings.json`; added `~/.claude/remove-gsd-hooks.ps1` for post-`/gsd-update` re-run
- `embed-tokens.cjs` → `findProjectRoot` uses `path.dirname(dir) === dir` (Windows-safe); committed `91ead58`

## Files changed
- `.claude/CLAUDE.md` — canonical harness: rules tiers, skills protocol + routing, agents catalog, pipeline
- `.claude/rules/agents.md` — fixed agent paths; full 15-agent table
- `.claude/skills/ckm-design-system/scripts/embed-tokens.cjs` — cross-platform filesystem root detection
- `docs/handoff/HANDOFF.md` — father current state + session index (this bookend)
- `docs/handoff/2026-07-13-claude-harness-fix/HANDOFF.md` — this file

**Outside repo (user machine):**
- `~/.claude/settings.json` — GSD hook registrations removed
- `~/.claude/remove-gsd-hooks.ps1` — re-apply hook removal after GSD updates

## Failed attempts
- Git Bash `curl https://cursor.com/install -fsS | bash` → `Unsupported operating system: MINGW64_NT-10.0-26200`
- Root `CLAUDE.md` redirect — user chose `.claude/CLAUDE.md` only

## Next steps
- Run `/export docs/handoff/2026-07-13-claude-harness-fix/transcript.md` for full session archive
- Optional: same Windows root-walk fix in `.claude/skills/impeccable/scripts/pin.mjs`
- Optional: rewrite `Portfolio-architecture.md` TODO placeholders for static-site reality
- Commit handoff bookend if not already on branch

## Files in this folder
- `HANDOFF.md` — this file (curated digest)
- `transcript.md` — full `/export` of the session (raw archive; user must run `/export`)
