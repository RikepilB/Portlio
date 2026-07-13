# Session — 2026-07-13 — claude-harness-fix

> Per-session digest. Full archive: `transcript.md` (run `/export docs/handoff/2026-07-13-claude-harness-fix/transcript.md`).

## Goal
Fix the Portfolio Claude Code harness: reconnect and optimize `CLAUDE.md`, reorganize `.claude/rules/`, and wire references to all `.claude/skills`, `.claude/agents`, and distribution docs so every harness file has a clear use.

## What was done (concrete one-liners)
- Harness audit → mapped drift: `CLAUDE.md` buried at `.claude/CLAUDE.md`, 14 flat rules (3 referenced), `rules/agents.md` points to `~/.claude/agents/`, `.claude/commands/` missing
- Fix plan → `.cursor/plans/fix_claude_harness_453ff0c8.plan.md` (reorg rules `common/`/`project/`/`workflow/`, agents index, skills README, commands, HARNESS.md)
- Skills model → user confirmed keep all 25 project-local skills (not global hybrid)
- Root handoff → `handoff.md` refreshed at repo root
- Handoff tree → father `docs/handoff/HANDOFF.md` current state + session index updated

## Files changed
- `handoff.md` — root session handoff (replaced stale June roadmap entry)
- `.cursor/plans/fix_claude_harness_453ff0c8.plan.md` — harness fix plan created; `handoff-md` bookend todo added
- `docs/handoff/HANDOFF.md` — father current state replaced; session index line appended
- `docs/handoff/2026-07-13-claude-harness-fix/HANDOFF.md` — this file
- `docs/handoff/.current-session` — pointer set to `2026-07-13-claude-harness-fix`

## Failed attempts
- None this session. Prior `project-scaffold` (June 2026) partially applied then drifted — `rules/common/`, `commands/redesign.md` scaffolded but never committed; planned reorg addresses this.

## Next steps
- Approve and execute the harness plan — first action: create root `CLAUDE.md` and `.claude/CLAUDE.md` redirect stub

## Files in this folder
- `HANDOFF.md` — this file (curated digest)
- `transcript.md` — full `/export` of the session (raw archive; user must run `/export`)
