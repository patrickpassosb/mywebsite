# Patrick Passos - Builder OS Architecture

## Overview
This document explains the architecture of the Builder OS personal website built for Patrick Passos. The system is designed to be a "long-term personal website for a technical builder," prioritizing credibility, clarity, and maintainability over flashy visual effects.

## Tech Stack
- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (configured specifically for "The Laboratory Editorial" design system)
- **Content:** MDX (for case studies, essays, and long-form notes) - *Set up via next-mdx-remote*
- **Package Manager:** Bun (preferred local environment)

## Design System: "The Laboratory Editorial"
The visual language is defined entirely through deliberate styling, focusing on technical precision:
- **0px Border Radius:** No bubbly corners; precision means sharp edges.
- **Tonal Layering:** No drop shadows. UI depth is achieved by stacking `surface-container-lowest` on top of `surface-container-low`.
- **Typography:**
  - `Noto Serif` for authoritative, editorial headers.
  - `Inter` for clean data visualization and body text.
  - `Space Grotesk` (Monospace) for technical metadata and labels.
- **Micro-interactions:** Restrained CSS transitions only (easing functions: `cubic-bezier(0.19, 1, 0.22, 1)` for that snappy, hardware-like feel).

## Routing Structure (App Router)

The project leverages Next.js App Router for server-centric data fetching and rapid client navigation.

- `/` (`src/app/page.tsx`): The homepage featuring the hero thesis, bento grid of current focuses, and highlighted generic placeholder case studies. 
- `/projects` (`src/app/projects/page.tsx`): The index of all built infrastructure. 
- `/journey` (`src/app/journey/page.tsx`): The timeline of Patrick's evolution from self-taught roots to technical leadership and entrepreneurship.
- `/writing` (`src/app/writing/page.tsx`): The index for essays and notes.

## Adding Content

Because the framework uses Next.js, adding new content is easy:
1. Locate the specific section in `src/app/page.tsx` or `/projects/page.tsx`.
2. Replace the generic "Project Alpha / TBD" placeholders with actual copy and image links.
3. For heavy case studies, you will create subdirectories inside `/projects` (e.g. `/projects/bedside/page.tsx`).

## Deployment
Since this is a standard Next.js app, it is 100% ready to be deployed on Vercel with zero configuration. Connect the GitHub repository and Vercel will build and host it automatically.
