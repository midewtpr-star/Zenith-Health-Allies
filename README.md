# Zenith Health Allies Website

Official website for Zenith Health Allies — Nursing services, healthcare training, and staffing solutions in Maryland.

- Official domain: https://zenithhealthallies.org/
- Tech stack: Vite, React, TypeScript, Tailwind CSS, shadcn-ui

## Local Development

Prerequisites: Node.js and npm installed.

```sh
npm install
npm run dev
```

## SEO Setup

- Canonical and social meta tags set in `index.html` for `zenithhealthallies.org`.
- `public/robots.txt` allows crawling and references the sitemap.
- `public/sitemap.xml` lists core routes for better indexing.
- Optional: add route-level meta via `react-helmet-async` for per-page titles and descriptions.

## Project Structure

- `src/pages` — route components
- `src/components` — UI and layout components
- `public` — static assets (`favicon.ico`, `robots.txt`, `sitemap.xml`)

## Deployment

Build and serve the static site with any hosting that supports SPAs.

```sh
npm run build
npm run preview
```

## Notes

- Removed references to Lovable.
- Vite config no longer includes Lovable plugins.
