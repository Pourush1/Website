import Link from "next/link";
import { getAllPosts, formatDateShort } from "@/lib/posts";

const socialLinks = [
  { name: "GitHub ↗", href: "https://github.com/Pourush1" },
  { name: "LinkedIn ↗", href: "https://linkedin.com/in/pourush-shrestha" },
  { name: "Twitter ↗", href: "https://x.com/pourush29" },
];

export default function Home() {
  const posts = getAllPosts().slice(0, 5);

  return (
    <>
      <section className="intro">
        <h1>Software engineer who builds things that matter.</h1>
        <p>
          I&apos;m a senior software engineer at G2o, working across frontend
          and backend systems. I care about clean architecture, fast feedback
          loops, and teams that communicate well.
        </p>
        <p>
          Previously at Uhaul, Omviser, and Axxess. Currently building an LLM
          agentic app on the side.
        </p>
        <div className="home-links">
          {socialLinks.map((l) => (
            <a key={l.name} href={l.href} target="_blank" rel="noopener noreferrer">
              {l.name}
            </a>
          ))}
          <Link href="/resume">Resume →</Link>
        </div>
      </section>

      {posts.length > 0 && (
        <>
          <hr className="divider" />
          <p className="section-label">Recent writing</p>
          <ul className="post-list">
            {posts.map((post) => (
              <li key={post.slug} className="post-item">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                <span className="post-date">{formatDateShort(post.date)}</span>
              </li>
            ))}
          </ul>
        </>
      )}

      <style>{`
        .intro { margin-bottom: 56px; }
        .intro h1 {
          font-family: var(--font-playfair), Georgia, serif;
          font-size: 34px;
          font-weight: 600;
          line-height: 1.2;
          letter-spacing: -0.02em;
          text-wrap: balance;
          margin-bottom: 20px;
        }
        .intro p {
          font-family: var(--font-lora), Georgia, serif;
          font-size: 17px;
          line-height: 1.75;
          color: var(--text);
          max-width: 580px;
        }
        .intro p + p { margin-top: 14px; }
        .home-links {
          display: flex;
          gap: 20px;
          margin-top: 28px;
          flex-wrap: wrap;
        }
        .home-links a {
          color: var(--accent);
          font-size: 14px;
          font-weight: 500;
          transition: color 0.15s;
        }
        .home-links a:hover {
          color: var(--accent-hover);
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .divider {
          border: none;
          border-top: 1px solid var(--border);
          margin: 48px 0;
        }
        .section-label {
          color: var(--text-secondary);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 20px;
        }
        .post-list { list-style: none; }
        .post-item {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          padding: 13px 0;
          border-bottom: 1px solid var(--border);
          gap: 16px;
        }
        .post-item:first-child { border-top: 1px solid var(--border); }
        .post-item a {
          color: var(--text);
          font-size: 15px;
          font-weight: 500;
          flex: 1;
          transition: color 0.15s;
        }
        .post-item a:hover { color: var(--accent); }
        .post-date {
          color: var(--text-secondary);
          font-size: 13px;
          font-variant-numeric: tabular-nums;
          white-space: nowrap;
        }
      `}</style>
    </>
  );
}
