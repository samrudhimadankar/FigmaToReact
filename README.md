<<<<<<< HEAD
# FigmaToReact - GDG RBU Chapter

A pixel-accurate, responsive replica of the provided design built with React, Vite, Tailwind CSS, and Framer Motion. Includes dark/light mode, smooth animations, and production deployment config for Vercel.

## Tech Stack
- React 18 + TypeScript
- Vite 5
- Tailwind CSS 3 + tailwindcss-animate
- Framer Motion
- Wouter (routing)

## Getting Started
```bash
# install
npm i

# dev
npm run dev

# typecheck
npm run check

# build
npm run build

# serve production build (requires Node for server)
npm run start
```

## Project Structure
- `client/` React app (Tailwind, components, pages)
- `server/` Express server (serves built files in production)
- `attached_assets/` Image assets from the design

## Theming
Dark/Light mode is controlled by `ThemeProvider` via a class on `<html>`. Preference is saved to `localStorage`.

## Animations
- Hero, Statistics, Technologies, FAQ, and Footer sections use Framer Motion for reveal/entrance transitions.

## Deployment (Vercel)
1. Push the repo to GitHub
2. Import the repo in Vercel
3. Build command: `npm run build`
4. Output directory: `dist/public`
5. Root directory: project root (Vite root is configured to `client/`)

The provided `vercel.json` sets sensible defaults.

### Netlify (alternative)
- Build command: `npm run build`
- Publish directory: `dist/public`

## Environment
No environment variables are required for the static site.

## License
MIT
=======
# GDG-Task
>>>>>>> c7c1962894484a8cf44684ed106a31893038697f
