import Link from "next/link";
import { formatDateShort, type PostMeta } from "@/lib/posts";

export default function PostList({ posts }: { posts: PostMeta[] }) {
  return (
    <ul>
      {posts.map((post) => (
        <li
          key={post.slug}
          className="flex items-baseline justify-between gap-4 border-b border-border py-3.25 first:border-t"
        >
          <Link
            href={`/blog/${post.slug}`}
            className="flex-1 text-body font-medium text-fg transition-colors duration-150 hover:text-accent"
          >
            {post.title}
          </Link>
          <span className="whitespace-nowrap text-meta text-muted tabular-nums">
            {formatDateShort(post.date)}
          </span>
        </li>
      ))}
    </ul>
  );
}
