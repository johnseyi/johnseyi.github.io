# johnseyi.github.io

Personal portfolio of John Oluwaseyi — full-stack developer based in Kampala, Uganda.

**Live:** https://johnseyi.github.io

A single-page portfolio covering who I am, the projects I've shipped, the stack I work with, and how to reach me. Built as a fast, static React app with light/dark theming and scroll-driven animation.

## Features

- Hero, About, Skills, Work (featured project + project cards), Stats, and Contact sections
- Light/dark theme toggle that respects `prefers-color-scheme` and persists the choice in `localStorage`
- Animated stat counters via a custom `useCountUp` hook
- Motion and reveal animations with Framer Motion
- Project data kept in a single typed module (`src/data/projects.ts`)

## Tech stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- Framer Motion

## Getting started

```bash
npm install
npm run dev       # start the Vite dev server
npm run build     # production build to dist/
npm run preview   # preview the production build locally
```

## Deployment

Deployed to GitHub Pages by GitHub Actions (`.github/workflows/deploy.yml`): every push to `main` runs `npm ci && npm run build` and publishes `dist/` with `actions/deploy-pages`. No manual deploy steps.

## Project structure

```
src/
  components/   # Header, Hero, About, Skills, Work, Stats, Contact, Footer, ...
  data/         # projects.ts — typed project listing
  hooks/        # useTheme (dark mode), useCountUp (animated stats)
  App.tsx
  main.tsx
  index.css
```
