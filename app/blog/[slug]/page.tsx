import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPost, formatDate } from "@/lib/posts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Pourush Shrestha`,
    description: post.description,
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <Link href="/blog" className="back-link">
        ← All posts
      </Link>

      <header className="post-header">
        <div className="post-meta">
          <span>{formatDate(post.date)}</span>
          <span>·</span>
          <span>{post.readingTime}</span>
        </div>
        <h1>{post.title}</h1>
      </header>

      <article className="prose">
        <MDXRemote source={post.content} />
      </article>

      <style>{`
        .back-link {
          display: inline-block;
          color: var(--text-secondary);
          font-size: 13px;
          margin-bottom: 40px;
          transition: color 0.15s;
        }
        .back-link:hover { color: var(--accent); }
        .post-header { margin-bottom: 40px; }
        .post-meta {
          display: flex;
          gap: 10px;
          color: var(--text-secondary);
          font-size: 13px;
          margin-bottom: 12px;
          align-items: center;
        }
        .post-header h1 {
          font-family: var(--font-playfair), Georgia, serif;
          font-size: 32px;
          font-weight: 600;
          line-height: 1.2;
          letter-spacing: -0.02em;
          text-wrap: balance;
        }
      `}</style>
    </>
  );
}
