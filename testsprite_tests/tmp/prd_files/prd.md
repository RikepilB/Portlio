# Portfolio Website v2 — Product Requirements

## Overview
Personal portfolio for Richard Pillaca Burga, Data Analyst & BI Developer.
Built with Next.js 16, TypeScript, Tailwind CSS. Deployed on Vercel.

## Pages & Features

### Home (/)
- Hero section with name, title, bio
- Metric strip (2M+ records, 5K+ repos, etc.)
- Featured projects grid (3 project cards)
- Recent experience section
- Available for work CTA

### Projects Gallery (/projects)
- Visual cards for all 4 projects
- Category filter: All, DATA SCIENCE, RESEARCH, EXCEL AUTOMATION, FULL STACK
- Click navigates to individual case study

### Project Detail (/projects/[slug])
- Slugs: bike-share-optimization, ai-technical-debt-research, accounting-automation, exam-analysis-system
- Title, category tag, duration, read time
- Overview, problem statement, questions addressed
- Methodology (phased sections)
- Key results metric cards
- Key findings, conclusion
- Tech stack badges + GitHub link

### Essays (/essays)
- List view: title, date, read time, tags
- Substack subscribe CTA

### About (/about)
- Communities section (Product Space, Figma @ UCLA, Sundays in LA)
- Beyond Work: Football, Travel, Dance, Languages
- Skills grid + certifications

### Journey (/journey)
- Career timeline with filtering
- Filter tabs: All, Work, Research, Volunteer
- Timeline cards with role, org, period, description

### Skills (/skills)
- Skills grid organized by 3 categories
- Data & Analytics, Software Engineering, Modeling & Research

### Resume (/resume)
- Summary, core competencies, experience, education
- Download PDF button

## Navigation
- Fixed top navbar with: Work, About, Journey, Skills, Resume
- Mobile hamburger menu
- Footer with social links (LinkedIn, GitHub, Instagram, X, Substack)

## Interactive Elements
- Navigation links
- Mobile menu toggle
- Project category filter buttons
- Journey type filter tabs
- Clickable project cards
- Clickable essay cards
- External links (GitHub, LinkedIn, Substack, email)
- Resume PDF download button

## Design
- Mobile-first responsive (375px, 768px, 1280px)
- DM Sans + Manrope fonts
- Minimalist design with emerald accents
- Custom cursor bubble effect
- Fade-up scroll animations
- Polaroid card style with mesh gradients
