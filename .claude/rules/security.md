# Security Rules
> ALWAYS LOADED — applies to all code in this project

## Hard Rules (never break these)
- Never use string concatenation to build SQL queries
- Never hardcode API keys, tokens, or passwords
- Never disable SSL/TLS verification
- Never use wildcard CORS in production
- Never store secrets in CLAUDE.md or any .claude/ file

## Input Handling
- Validate all user input before processing
- Escape all output that will be rendered as HTML
- Use parameterized queries for all database operations
- Sanitize file paths — check for directory traversal

## Auth
- Use constant-time comparison for tokens/secrets
- Check authorization on every protected route
- Never log passwords, tokens, or PII

## Dependencies
- Flag any new npm/pip package for review
- Check for known vulnerabilities before adding dependencies

## Before finalizing any API endpoint
- [ ] Input validated
- [ ] Auth checked
- [ ] No secrets in response
- [ ] Rate limiting in place
- [ ] Error messages do not leak internal details

