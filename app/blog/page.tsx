import type { Metadata } from "next";
import PostList from "@/components/PostList";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Writing — Pourush Shrestha",
};

export default function Blog() {
  const posts = getAllPosts();

  return (
    <>
      <h1 className="mb-10 font-display text-title font-semibold tracking-heading">
        Writing
      </h1>

      {posts.length === 0 ? (
        <p className="text-body text-muted">
          Nothing published yet. Check back soon.
        </p>
      ) : (
        <PostList posts={posts} />
      )}
    </>
  );
}
