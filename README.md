# pourush.com

Personal portfolio site for [Pourush Shrestha](https://pourushshrestha.com). Intentionally minimal.

## Stack

- **Next.js 15** (App Router, fully static)
- **TypeScript**
- **Tailwind CSS v4** (used minimally — mostly CSS custom properties)
- **next-mdx-remote** — renders MDX blog posts at build time
- **gray-matter** — parses frontmatter from `.mdx` files
- Google Fonts: Playfair Display, Lora, DM Sans

## Pages

| Route | Description |
|---|---|
| `/` | Home: intro + recent posts |
| `/resume` | HTML resume with work experience and skills |
| `/blog` | Flat list of all blog posts |
| `/blog/[slug]` | Individual post rendered from MDX |

## Writing a blog post

Create a file in `content/blog/`:

```md
---
title: "Post title"
date: "2025-09-10"
description: "One sentence summary."
---

Write in Markdown here.
```

Push to main and it appears automatically. No CMS, no database.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Resume PDF

Drop a PDF at `public/resume.pdf` to activate the Download PDF button on `/resume`.

## Deployment

Deployed on Vercel. Connect the repo — zero config needed, Next.js is detected automatically.
