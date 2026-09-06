# pourush.com

Personal portfolio site for Pourush Shrestha. Intentionally minimal — inspired by overreacted.io.

## Stack

- **Next.js 15** (App Router, static export)
- **TypeScript**
- **Tailwind CSS v4** (used minimally — mostly CSS custom properties)
- **next-mdx-remote** — renders MDX blog posts at build time
- **gray-matter** — parses frontmatter from `.mdx` files
- Google Fonts via `next/font/google`: Playfair Display (headings), Lora (body/prose), DM Sans (UI)

## Pages

| Route | File | Description |
|---|---|---|
| `/` | `app/page.tsx` | Home: intro + recent posts |
| `/resume` | `app/resume/page.tsx` | HTML resume; update experience/skills inline |
| `/blog` | `app/blog/page.tsx` | Flat list of all posts |
| `/blog/[slug]` | `app/blog/[slug]/page.tsx` | Individual post rendered from MDX |

## Writing a new blog post

1. Create `content/blog/my-post-slug.mdx`
2. Add frontmatter:
   ```
   ---
   title: "Post title"
   date: "2025-09-10"
   description: "One sentence summary."
   ---
   ```
3. Write in Markdown below the frontmatter
4. Commit and push — post appears automatically

Posts are sorted by `date` descending. The home page shows the 5 most recent.

## Theming

Colors are CSS custom properties on `:root` in `app/globals.css`. Light and dark mode are both defined there. To change the accent color, update `--accent` and `--accent-hover` in both the light and dark blocks.

## Key files

- `lib/posts.ts` — reads and sorts MDX files, exports `getAllPosts()` and `getPost(slug)`
- `app/globals.css` — design tokens + prose styles for blog posts
- `components/Header.tsx` — site name + nav (Resume, Blog)
- `components/Footer.tsx` — social links (GitHub, Twitter, LinkedIn)
- `data/` — removed; all content lives in `content/blog/` or inline in page files

## Resume PDF

The Download PDF button on `/resume` links to `/public/resume.pdf`. Drop a PDF there to activate it.

## What was removed

The original site used Three.js, Framer Motion, Sentry, react-lottie, and react-three-fiber. All of that is gone. Do not re-add heavy animation or 3D libraries — the design intent is minimal and fast.

## Domain

`pourush.com` — deployed on Vercel (connect repo, zero config needed).
