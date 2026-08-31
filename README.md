# johnseyi.github.io

Personal portfolio of John Oluwaseyi, full-stack engineer based in Kampala, Uganda.

**Live:** https://johnseyi.github.io

A case-study-led portfolio rather than a project gallery. Each of the four featured systems is
written up as a constraint, what was built, and the single engineering decision behind it, with
hand-drawn SVG architecture diagrams for the offline sync, multi-tenancy and on-device clinical
pipelines.

## Features

- Four long-form case studies (Okelcor GmbH, Okelcor Partner, Century Cinemax, WellaPath)
- Inline SVG architecture diagrams, theme-aware via CSS custom properties and readable at any width
- Light theme by default, with dark as an opt-in choice remembered per browser and applied before
  first paint so there is no flash on reload
- Reduced-motion support, so all animation is disabled under `prefers-reduced-motion`
- Person JSON-LD, Open Graph and canonical tags for link previews and search
- All content in one typed module (`src/data/work.ts`), so copy changes never touch a component

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

Deployed to GitHub Pages by GitHub Actions (`.github/workflows/deploy.yml`): every push to `main`
runs `npm ci && npm run build` and publishes `dist/` with `actions/deploy-pages`. No manual deploy
steps.

## Offering the CV as a download

Drop the PDF at `public/John-Oluwaseyi-CV.pdf` and set `CV_URL` in `src/components/Contact.tsx` to
`"/John-Oluwaseyi-CV.pdf"`. The button is hidden while that value is `null` so the link can never
404 in front of an employer.

## Project structure

```
src/
  components/   # Header, Hero, Clients, CaseStudies, Diagrams, Principles,
                # AlsoShipped, Stack, About, Contact, Footer, Reveal
  data/         # work.ts: case studies, principles, shipped list, stack groups
  hooks/        # useTheme (light/dark)
  App.tsx
  main.tsx
  index.css     # design tokens for both themes
```
