# hiddefokkema.nl — personal website

Hidde Fokkema's personal website: about, projects, and research. Built with
[Astro](https://astro.build), static output, **zero shipped JavaScript** — the
whole design lives in one CSS file (`src/styles/theme.css`) and all content in
typed data files.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
```

No environment variables, no config. That's it.

## Build

```bash
npm run build    # static site → dist/
npm run preview  # serve the build locally
```

## Content

All content lives in `src/data/` as typed TypeScript files. Adding a
publication is one object in `src/data/publications.ts`; adding news is one
object in `src/data/news.ts`; a project is one object in
`src/data/projects.ts` (blurb + one or two lines on what was hard + repo link).
Internal links to PDFs under `/talks`, `/posters`, and `/files` must be
root-relative (`/talks/foo.pdf`, not `talks/foo.pdf`), since pages are served
from nested paths like `/research/`.

Pages are `src/pages/*.astro`, components in `src/components/*.astro`, and the
shared layout in `src/layouts/Base.astro`.

## Deploy

GitHub Actions (`Dockerfile.prod`) builds a node:24 image, runs `astro build`,
and serves `dist/` from nginx. On push to `main`, a self-hosted runner
rebuilds the image and restarts the container (`docker-compose up -d`).
The nginx/certificate setup lives on the server itself.

The old `/teaching` URL redirects to `/research/#teaching` via
`astro.config.mjs`.
