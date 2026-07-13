# Agent Orchestration

## Available Agents

Located in `.claude/agents/` (project-local):

| Agent | Path | Purpose | When to Use |
|-------|------|---------|-------------|
| explorer | @.claude/agents/explorer.md | Codebase exploration | First step before edits; map structure and patterns |
| planner | @.claude/agents/planner.md | Implementation planning | Complex features, refactoring |
| architect | @.claude/agents/architect.md | System design | Architectural decisions |
| code-reviewer | @.claude/agents/code-reviewer.md | Code review | After writing code |
| build-error-resolver | @.claude/agents/build-error-resolver.md | Build/type fixes | When build or tsc fails |
| tdd-guide | @.claude/agents/tdd-guide.md | Test-driven development | New features, bug fixes |
| test-writer | @.claude/agents/test-writer.md | Test authoring | Add or improve test coverage |
| e2e-runner | @.claude/agents/e2e-runner.md | E2E testing | Critical user flows |
| security-auditor | @.claude/agents/security-auditor.md | OWASP/security audit | Pre-deploy, security-sensitive code |
| security-reviewer | @.claude/agents/security-reviewer.md | Security analysis | Auth, input, secrets, before commits |
| refactor-cleaner | @.claude/agents/refactor-cleaner.md | Dead code cleanup | Code maintenance |
| doc-updater | @.claude/agents/doc-updater.md | Documentation | Updating docs and codemaps |
| database-reviewer | @.claude/agents/database-reviewer.md | PostgreSQL/Supabase | N/A for static portfolio — skip unless scope changes |
| data-analyst | @.claude/agents/data-analyst.md | Dataset profiling | Dataset analysis — not typical for portfolio |
| chief-of-staff | @.claude/agents/chief-of-staff.md | Communication triage | Email/Slack/LINE — out of scope for site work |

## Immediate Agent Usage

No user prompt needed:
1. Research before edits — Use **explorer** agent
2. Complex feature requests — Use **planner** agent
3. Code just written/modified — Use **code-reviewer** agent
4. Bug fix or new feature — Use **tdd-guide** agent
5. Architectural decision — Use **architect** agent
6. Build or type errors — Use **build-error-resolver** agent

## Parallel Task Execution

ALWAYS use parallel Task execution for independent operations:

```markdown
# GOOD: Parallel execution
Launch 3 agents in parallel:
1. Agent 1: Security analysis of auth module
2. Agent 2: Performance review of cache system
3. Agent 3: Type checking of utilities

# BAD: Sequential when unnecessary
First agent 1, then agent 2, then agent 3
```

## Multi-Perspective Analysis

For complex problems, use split role sub-agents:
- Factual reviewer
- Senior engineer
- Security expert
- Consistency reviewer
- Redundancy checker
