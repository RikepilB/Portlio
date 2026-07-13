# Skills — Organization & Loading Rules

> ⚠️ READ FIRST. This file is documentation only. It does **not** affect what loads.
> A skill is discovered by Claude Code **only** at `.claude/skills/<skill-name>/SKILL.md` —
> exactly **one directory deep**, with valid frontmatter. Nothing else loads.

---

## The one rule that keeps skills alive

```
.claude/skills/
  <skill-name>/
    SKILL.md        ← must exist here, ONE level under skills/
```

A skill loads **iff** all of these are true:
1. It lives at `.claude/skills/<name>/SKILL.md` — **not** nested in a category folder.
2. `SKILL.md` starts with valid YAML frontmatter: `name:` + `description:`.
3. `name:` is kebab-case, no colon (`my-skill`, never `pkg:my-skill` for a local skill).

### What KILLS a skill (makes it invisible despite existing)
- ❌ Nesting: `.claude/skills/deploy/01-DESIGN/impeccable/SKILL.md` → **2+ levels deep = never scanned.**
  *(This is exactly what had happened here — a whole design library sat dead.)*
- ❌ Category folders between `skills/` and the skill dir.
- ❌ Missing/blank `SKILL.md`, missing `name:` or `description:`.
- ❌ Colon in `name:` for a non-plugin skill.
- ❌ A folder with only support files (no `SKILL.md`) — e.g. an empty `deploy-config.md` marker.

---

## How to organize WITHOUT killing skills

Folders break loading, so organize with these instead:

1. **Naming prefixes** (flat, but grouped visually):
   `design-impeccable/`, `design-tokens/`, `sec-review/`, `be-patterns/`.
   They sort together in the flat list and still load.
2. **This index file** for human grouping — categories live in the doc, the dirs stay flat.
3. **`description:` keywords** drive auto-loading. Put trigger words there, not in folder names.

---

## Validate any project in 3 seconds

Run from the project root. Lists what actually loads vs. what's dead:

```bash
# loadable skills (correct depth)
for d in .claude/skills/*/SKILL.md; do
  echo "LOAD  $(awk -F': ' '/^name:/{print $2; exit}' "$d")  <- $d"
done
# DEAD skills (buried too deep — exist but never load)
find .claude/skills -mindepth 3 -name SKILL.md | sed 's/^/DEAD  /'
```

If anything prints `DEAD`, move that skill dir up to `.claude/skills/<name>/`.

---

## Current skills (flat — all 25 load)

**Design & Frontend**
`impeccable` · `ui-ux-pro-max` · `frontend-design` · `frontend-patterns` ·
`tailwind-design-system` · `ckm-design-system` · `ckm-ui-styling` · `shadcn` ·
`baseline-ui` · `web-design-guidelines` · `vercel-react-best-practices`

**Process**
`brainstorming` · `subagent-driven-development` · `requesting-code-review` ·
`coding-standards` · `continuous-learning` · `verification-loop`

**Debug & Test**
`systematic-debugging` · `tdd-workflow`

**Backend & Deploy**
`fullstack-developer` · `backend-patterns` · `python-patterns` · `deployment-patterns`

**Security**
`security-review` · `security-scan`

---

## `deploy/` folder — legacy archive, safe to delete

`.claude/skills/deploy/**` holds the **old nested copies** that never loaded. Every skill in it has
been promoted to top level (verified duplicated). It is dead weight; deleting it changes nothing that loads.

## Related commands
- `/redesign <target>` — full design + frontend implementation mode (uses the whole design stack).
- `/skill-create` — scaffold a new skill at the correct depth.
