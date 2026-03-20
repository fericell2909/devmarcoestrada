# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio site for Marco Estrada López (Full Stack Developer). Single-page React app with a dark editorial aesthetic. Content is in Spanish.

## Commands

- `npm run dev` — Start Vite dev server with HMR
- `npm run build` — Type-check with `tsc -b` then build with Vite
- `npm run lint` — Run ESLint across the project
- `npm run preview` — Preview the production build locally

## Tech Stack

- React 19 + TypeScript, bundled with Vite 8
- Framer Motion for animations
- Lucide React for icons
- No routing library — currently a single-page app with anchor-based navigation
- No CSS framework — vanilla CSS with BEM naming in `src/index.css`

## Architecture

- **`src/index.css`** — Single CSS file containing the entire design system. Uses CSS custom properties on `:root` (accent `#c8602a`, dark backgrounds `#0d0d0f`/`#121215`/`#1a1a1e`, serif font `Instrument Serif`, sans font `DM Sans`). BEM class naming convention throughout.
- **`src/data/index.ts`** — All static content (nav items, skills, experience, education, certifications, projects, contact info). Components import data from here rather than hardcoding.
- **`src/types/index.ts`** — TypeScript interfaces for all data structures.
- **`src/components/`** — Section components (`Hero`, `About`, `Resume`, `Portfolio`, `Contact`, `Navbar`, `WhatsAppButton`). Each maps to a `<section>` with an anchor id.
- **`src/hooks/useInView.ts`** — Custom hook for scroll-based section visibility and active nav tracking.
- **`src/App.tsx`** — Composes all section components in order. No routing.

## Style Conventions

- All CSS lives in `src/index.css` (the `App.css` file is intentionally empty)
- BEM naming: `.block__element--modifier`
- CSS variables for all colors, fonts, radii, and transitions
- Responsive breakpoints at 900px and 600px
