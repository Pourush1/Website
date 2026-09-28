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
      <Link
        href="/blog"
        className="mb-10 inline-block text-meta text-muted transition-colors duration-150 hover:text-accent"
      >
        ← All posts
      </Link>

      <header className="mb-10">
        <div className="mb-3 flex items-center gap-2.5 text-meta text-muted">
          <span>{formatDate(post.date)}</span>
          <span>·</span>
          <span>{post.readingTime}</span>
        </div>
        <h1 className="font-display text-post-title leading-heading font-semibold tracking-heading text-balance">
          {post.title}
        </h1>
      </header>

      <article className="prose">
        <MDXRemote source={post.content} />
      </article>
    </>
  );
}
