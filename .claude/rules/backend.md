# Backend Rules
> Auto-load when working on: *.py, src/api/**, routes/**, server/**

## TypeScript (Node.js)
- Strict types always — no `any`
- Zod schemas for all request body validation
- Return typed response objects — never raw `any`

## Python
- Type hints on all functions
- Google-style docstrings
- snake_case naming
- No bare `except` — always catch specific exception types
- Prefer Pydantic over raw dicts

## Database
- CTEs over subqueries in SQL
- Explicit JOINs only — no implicit joins
- Run `EXPLAIN ANALYZE` on performance-critical queries
- Never construct SQL with string concatenation (injection risk)

## API Design
- RESTful conventions
- Always validate input before touching the database
- Return consistent error shapes: `{ error: string, code: string }`
- Rate limit any public endpoint

## Before you finish
- [ ] All inputs validated with Zod/Pydantic
- [ ] Error cases handled with specific types
- [ ] No hardcoded secrets or connection strings

