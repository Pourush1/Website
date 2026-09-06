import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, formatDateShort } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Writing — Pourush Shrestha",
};

export default function Blog() {
  const posts = getAllPosts();

  return (
    <>
      <h1 className="blog-title">Writing</h1>

      {posts.length === 0 ? (
        <p className="empty">Nothing published yet. Check back soon.</p>
      ) : (
        <ul className="post-list">
          {posts.map((post) => (
            <li key={post.slug} className="post-item">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              <span className="post-date">{formatDateShort(post.date)}</span>
            </li>
          ))}
        </ul>
      )}

      <style>{`
        .blog-title {
          font-family: var(--font-playfair), Georgia, serif;
          font-size: 30px;
          font-weight: 600;
          letter-spacing: -0.02em;
          margin-bottom: 40px;
        }
        .empty {
          color: var(--text-secondary);
          font-size: 15px;
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
