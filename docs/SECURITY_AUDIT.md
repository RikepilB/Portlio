# Security Audit & Setup — Claude Code Environment
# Date: 2026-02-27 | Platform: Windows 11 | Claude Code: v2.1.50

---

## AUDIT RESULTS: Current State

### ✅ PASSING
- `.claudeignore` exists and blocks .env*, secrets/, SSH keys
- `.gitignore` exists
- `settings.json` has deny rules for .env*
- No hardcoded secrets found in CLAUDE.md
- MCP filesystem scoped to project folder (not full drive)

### ❌ CRITICAL FIXES NEEDED
1. MCP servers missing `cmd /c` wrapper → servers NOT running on Windows
2. 73,113 token MCP context → only ~127K tokens left before you type anything
3. Claude version 2.1.50 → latest is 2.1.62 (update NOW)
4. Canva/Supabase/Asana/Notion MCPs active but unused → pure context waste
5. GITHUB_TOKEN not verified in environment → GitHub MCP may silently fail

### ⚠️ WARNINGS
- No pre-commit secret scanner (gitleaks/trufflehog) installed
- No GITHUB_TOKEN set in Windows environment variables yet
- Vercel MCP using URL transport — requires OAuth, not configured yet

---

## FIX 1: Update Claude Code (do this first)

```cmd
npm update -g @anthropic-ai/claude-code
```

Then verify: `claude --version` should show 2.1.62

---

## FIX 2: Fix ~/.claude.json (global config)

Location: C:\Users\a2021\.claude.json

Replace the ENTIRE file with the provided claude.json output file.

KEY CHANGES:
- Added "cmd", "/c" wrapper before every npx command (Windows requirement)
- Disabled: Canva, Supabase, Asana, Notion, postgres, brave-search, puppeteer
- Kept: github, filesystem (only 2 MCPs = ~25K tokens instead of 73K)
- Added autocompact at 50% to protect context window
- Added permission deny rules for secrets

---

## FIX 3: Fix project .mcp.json (portfolio project)

Location: project 1\.mcp.json

Replace with the provided .mcp.json output file.

KEY POINTS:
- filesystem MCP scoped to "project 1" folder ONLY (not your whole machine)
- github MCP with cmd /c wrapper (Windows-fixed)
- vercel MCP via URL transport (no cmd /c needed — it's not npx)

---

## FIX 4: Set GITHUB_TOKEN in Windows

The GitHub MCP will silently fail if this isn't set.

Step 1 — Create a GitHub Personal Access Token:
- Go to: github.com → Settings → Developer settings → Personal access tokens → Tokens (classic)
- Click "Generate new token (classic)"
- Name: "Claude Code MCP"
- Scopes to check:
  ✅ repo (full control of private repos)
  ✅ read:org
  ✅ read:user
- Copy the token (ghp_xxxx...)

Step 2 — Set it as a Windows environment variable permanently:
```cmd
:: Run this in CMD as Administrator:
setx GITHUB_TOKEN "ghp_your_token_here" /M

:: Or set it for your user only (no admin needed):
setx GITHUB_TOKEN "ghp_your_token_here"
```

Step 3 — Restart your terminal, then verify:
```cmd
echo %GITHUB_TOKEN%
```
Should print your token, not blank.

Step 4 — Test in Claude Code:
```
claude
/mcp
```
Should show github as connected.

---

## FIX 5: Verify MCP context after changes

After applying fixes, run /doctor again. Target:
- Zero warnings about cmd /c
- MCP context UNDER 25,000 tokens (was 73,113)
- Only github + filesystem + vercel active

Expected after fix:
  github:     26 tools (~12,038 tokens)
  filesystem: ~5 tools (~2,000 tokens)
  vercel:     varies  (~5,000 tokens est.)
  TOTAL:      ~19,000 tokens ✅

---

## FIX 6: Add project-level security rules

Your .claude/rules/security.md should contain these rules.
If it's currently generic, replace with the content below.

---

## Security Rules for Portfolio Project (.claude/rules/security.md)

```markdown
# Security Rules — Always Loaded

## Secrets
- NEVER read, print, or include the contents of .env files
- NEVER hardcode API keys, tokens, or credentials in any file
- NEVER commit files matching: .env, .env.*, *.pem, *.key, secrets.json
- When you need an env var value, reference it by name only: `process.env.VAR_NAME`
- Always check .env.example is updated when adding new env vars

## File Access
- Do not read files outside the project root
- Do not access: ~/.ssh/, ~/.aws/, C:\Users\*\AppData\, system files
- Never output file contents that contain tokens or credentials

## Dependencies
- Flag any npm package with < 100 weekly downloads as potentially unsafe
- Never install packages with post-install scripts that make network calls
  without explicit approval
- Keep package.json devDependencies separate from dependencies

## Authentication (for future features)
- Never store passwords in plain text
- Always use next-auth or similar for auth — no homebrew auth
- Validate and sanitize all user inputs before processing

## Deployment
- Run `pnpm build` before declaring any feature done
- Run `pnpm lint` — zero errors before committing
- Never expose .env variables in client-side code (`NEXT_PUBLIC_` prefix only
  for values that are safe to be public)
```

---

## Environment Audit Checklist

Run this checklist after applying all fixes:

### Version Check
- [ ] claude --version shows 2.1.62 (or latest)
- [ ] node --version shows 18+ (required for MCP)
- [ ] pnpm --version shows 8+ (for portfolio project)

### MCP Health
- [ ] /doctor shows zero warnings
- [ ] MCP context under 25,000 tokens
- [ ] /mcp shows github as "connected" (not "error")
- [ ] /mcp shows filesystem as "connected"

### Secrets
- [ ] GITHUB_TOKEN set in Windows environment (echo %GITHUB_TOKEN% not blank)
- [ ] .gitignore blocks .env* in project 1
- [ ] .claudeignore blocks .env*, secrets/, .ssh/ in project 1
- [ ] No API keys in any .claude/ file or CLAUDE.md

### Permissions
- [ ] settings.json deny rules block Read(.env*), Write(.env*)
- [ ] settings.json allow list is explicit (not wildcard *)
- [ ] MCP filesystem path is scoped to project 1 folder only

---

## Context Budget After Fixes

BEFORE fix:
  Total MCP context: 73,113 tokens
  Usable context:    ~127K of 200K

AFTER fix:
  Total MCP context: ~19,000 tokens
  Usable context:    ~181K of 200K

That's 54,000 more tokens for your actual work — roughly 40 extra pages of
code Claude can hold in mind simultaneously. For a Next.js project, this
difference matters when Claude needs to understand the full app to make
consistent changes.

---

## Re-enabling MCPs Later (Per Project)

When you start a data project that needs Supabase or postgres:

In that project's .mcp.json:
```json
{
  "mcpServers": {
    "supabase": {
      "command": "cmd",
      "args": ["/c", "npx", "-y", "@supabase/mcp-server-supabase@latest",
               "--supabase-url", "${SUPABASE_URL}",
               "--supabase-key", "${SUPABASE_SERVICE_ROLE_KEY}"]
    }
  }
}
```

Rule: only enable MCPs that project actually uses. Never enable globally
unless you use that tool in literally every project.

---

## Quick Reference: All Your MCP Servers

| Server | Keep Global? | Enable Per-Project | Token Cost |
|--------|-------------|-------------------|------------|
| github | ✅ YES | Always for code projects | ~12K |
| filesystem | ✅ YES | Scope to project path | ~2K |
| vercel | Project only | Portfolio project | ~5K |
| Supabase | ❌ NO | Data projects only | ~13K |
| Canva | ❌ NO | Design tasks only | ~14K |
| Asana | ❌ NO | When managing tasks | ~9K |
| Notion | ❌ NO | When docs needed | ~6K |
| postgres | ❌ NO | Data projects only | ~? |
| brave-search | ❌ NO | Research tasks only | ~? |
| puppeteer | ❌ NO | Browser automation only | ~? |
