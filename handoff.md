# Goal
Fix the Portfolio Claude Code harness: reconnect and optimize `CLAUDE.md`, reorganize `.claude/rules/`, and wire references to all `.claude/skills`, `.claude/agents`, and distribution docs so every harness file has a clear use.

## Current state
- Harness fix plan ready at `.cursor/plans/fix_claude_harness_453ff0c8.plan.md` — not executed yet.
- Branch `feat/portfolio-additions` at `c5e3abf`. Site code untouched; no build/lint this session.
- Harness drift: root `CLAUDE.md` missing (buried in `.claude/CLAUDE.md`); rules/agents/skills/commands disconnected.
- Skills model: keep 25 project-local skills (user confirmed).

## Files in flight
- `.cursor/plans/fix_claude_harness_453ff0c8.plan.md` — 10-todo harness fix plan; awaiting execution approval.
- No `.claude/` harness files edited yet.

## Changed
- `handoff.md` (root) — refreshed this stop.
- `docs/handoff/HANDOFF.md` — father `## Current state` replaced.

## Failed attempts
- None this session. June 2026 `project-scaffold` partially applied then drifted (`rules/common/`, `commands/` never committed).

# Next steps
Execute the harness plan — first action: create root `CLAUDE.md` and `.claude/CLAUDE.md` redirect stub.
