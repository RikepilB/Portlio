# Portfolio — Architecture & Workflow

## Shape: Monolith

Single deployable, single codebase, single database. No network boundaries between modules
— everything calls shared code directly.

## Module boundaries
- Domain logic lives in `src/<domain>/` (e.g. `orders/`, `users/`) — _TODO: name this
  project's actual domains._
- Shared infrastructure (DB client, auth, email, storage) lives in `src/lib/`.
- A domain module must not reach into another domain module's internals — go through its
  `index` export or a shared `src/lib/` utility.
- API/route handlers stay thin: validate input, delegate to the domain layer, no business
  logic inline.

## Git workflow

| When | Action |
|---|---|
| Starting a feature | Branch: `feat/<name>` or `fix/<name>` |
| Before merging | `lint && typecheck && test` must pass |
| Schema changes | Own commit, additive migrations only — never edit/delete a shipped one |

## Key reminders
- **No circular dependencies** between modules — barrel exports (`index.ts`/`__init__.py`)
  make this easy to check.
- **Server/business logic by default; client/UI only where interactivity requires it.**
- Update this file (not just `docs/architecture.md`) the moment module boundaries change —
  this is the file an agent actually reads to plan a change.
