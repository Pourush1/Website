# pourushshrestha.com

Personal portfolio site for Pourush Shrestha. Intentionally minimal — inspired by overreacted.io.

## Stack

- **Next.js 15** (App Router, static export)
- **TypeScript**
- **Tailwind CSS v4** — utility classes in JSX; design tokens are CSS custom properties exposed via `@theme`
- **next-mdx-remote** — renders MDX blog posts at build time
- **gray-matter** — parses frontmatter from `.mdx` files
- Google Fonts via `next/font/google`: Playfair Display (headings), Lora (body/prose), DM Sans (UI)

## Pages

| Route          | File                       | Description                                  |
| -------------- | -------------------------- | -------------------------------------------- |
| `/`            | `app/page.tsx`             | Home: intro + recent posts                   |
| `/resume`      | `app/resume/page.tsx`      | HTML resume; update experience/skills inline |
| `/blog`        | `app/blog/page.tsx`        | Flat list of all posts                       |
| `/blog/[slug]` | `app/blog/[slug]/page.tsx` | Individual post rendered from MDX            |

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

Components style themselves with Tailwind utility classes. The tokens are registered with `@theme inline` in `globals.css`, so `text-accent`, `text-muted`, `border-border`, `bg-tag-bg` etc. follow light/dark mode automatically — don't use `dark:` variants. The site's type scale (`text-label`, `text-meta`, `text-ui`, `text-body`, `text-lede`, heading sizes) and fonts (`font-display`, `font-serif`, `font-sans`) are defined there too; add to them rather than writing `text-[13px]`.

Keep any hand-written CSS in `globals.css` inside an `@layer` — unlayered rules override every utility class. The `.prose` styles for MDX post bodies stay as CSS because MDX output can't take utility classes.

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

`pourushshrestha.com` — deployed on Vercel (connect repo, zero config needed).

## Agent skills

### Issue tracker

Issues are tracked as GitHub Issues on `Pourush1/Website`, via the `gh` CLI. See `docs/agents/issue-tracker.md`.

### Triage labels

Default label vocabulary (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`). See `docs/agents/triage-labels.md`.

### Domain docs

Single-context: `CONTEXT.md` + `docs/adr/` at the repo root. See `docs/agents/domain.md`.
