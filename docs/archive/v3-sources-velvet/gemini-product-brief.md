# Product Requirements Document (PRD) — portfolio-v2

## 1. Purpose & Vision
The objective is to overhaul richardpillaca.com from a standard minimalist layout into a highly tactile, premium editorial digital experience. The system treats software engineering and data analytics like high-end design crafts—introducing physical properties like micro-grain fabric overlays, deep light-absorbing surfaces, and interactive copper-gold foil typography to frame a highly technical project portfolio.

## 2. Core User Experience (UX) Flow
*   **The Landing View (`/`):** A single-view viewport framing a solid-color, sharp horizontal rectangular container block that floats on a deep, dark-grained canvas. It mimics structural luxury packaging, centering your core professional headline with zero clutter.
*   **The Project Workspace (`/projects`):** Shifts into an asymmetrical, multi-layered layout grid using varied container dimensions to break visual monotony. It retains full taxomony tag filtering while rendering project details via dynamic, cursor-tracking light masks.
*   **The Experience Layout (`/journey`):** Preserves the dual-layout implementation (the interactive timeline on the left, formal resume sheet on the right). It enhances depth using soft CSS drop-shadows to make the resume panel look like physical matte stock paper casting a shadow onto the workspace.

## 3. Technical Constraints & Guardrails
*   **Performance:** The physical micro-grain texture layer must execute strictly via hardware-accelerated CSS/SVG fractal noise filters to prevent scrolling latency or frame-rate drops.
*   **Data Isolation:** Presentation components must pull cleanly from existing TypeScript data files inside `src/data/`. Content models and formatting strings must never be hardcoded into the layout modules.
*   **Type Safety:** Strict mode TypeScript compatibility (no implicit `any` patterns). All component properties must be explicitly typed.