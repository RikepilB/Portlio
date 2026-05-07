# Frontend Rules
> Auto-load when working on: *.tsx, *.jsx, *.css, *.html, components/**

## Framework
- Next.js 16 App Router — use Server Components by default
- Client Components only when: browser APIs, event handlers, useState/useEffect

## TypeScript
- Strict mode always on — no `any` ever
- `interface` for data shapes
- Zod for runtime validation on all external/AI data

## Styling
- Tailwind utility classes only — no inline styles
- Accessibility (a11y): all interactive elements need aria labels
- Mobile-first responsive design

## Patterns
- Functional components + hooks only (no class components)
- Co-locate component styles and tests with the component file
- Import order: React → Next → third-party → internal → styles

## Before you finish
- [ ] No console.log left in code
- [ ] All props are typed
- [ ] Component has error boundary or error state

