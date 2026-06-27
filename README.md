# cassia-almeida.com

Personal site of Cássia Almeida — about, writing, projects, reading, and tools/templates.

Built with [Next.js](https://nextjs.org) (App Router) and React, statically exported and deployed to GitHub Pages at the custom domain [cassia-almeida.com](https://cassia-almeida.com).

## Stack

- Next.js (`output: 'export'` — static HTML)
- React + TypeScript
- Tailwind CSS v4 (via `@tailwindcss/postcss`)
- Fonts: Outfit + JetBrains Mono (`next/font`)

## Develop

```bash
npm install
npm run dev    # http://localhost:3000
```

Other scripts:

```bash
npm run build  # static export to ./out
npm run lint
```

## Data

Content lives in `data/` (`articles.ts`, `books.ts`, `projects.ts`, `templates.ts`).
Project metadata (language, creation year, live URL) is fetched from the GitHub API
at build time in `lib/github.ts`.

## Deploy

`.github/workflows/deploy.yml` builds on every push to `master` and publishes `./out`
to GitHub Pages. The build reads `GITHUB_TOKEN` to raise the GitHub API rate limit
when enriching the projects page.
