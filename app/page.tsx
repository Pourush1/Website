import Link from "next/link";
import PostList from "@/components/PostList";
import { getAllPosts } from "@/lib/posts";

const socialLinks = [
  { name: "GitHub ↗", href: "https://github.com/Pourush1" },
  { name: "LinkedIn ↗", href: "https://linkedin.com/in/pourush-shrestha" },
  { name: "Twitter ↗", href: "https://x.com/pourush29" },
];

const introText = "max-w-[580px] font-serif text-lede leading-[1.75] text-fg";

const homeLink =
  "text-ui font-medium text-accent transition-colors duration-150 hover:text-accent-hover hover:underline hover:underline-offset-3";

export default function Home() {
  const posts = getAllPosts().slice(0, 5);

  return (
    <>
      <section className="mb-14">
        <h1 className="mb-5 font-display text-hero leading-heading font-semibold tracking-heading text-balance">
          Software engineer who builds things that matter.
        </h1>
        <p className={introText}>
          I&apos;m a senior software engineer at G2o, working across frontend
          and backend systems. I care about clean architecture, fast feedback
          loops, and teams that communicate well.
        </p>
        <p className={`${introText} mt-3.5`}>
          Previously at Uhaul, Omviser, and Axxess. Currently building an LLM
          agentic app on the side.
        </p>
        <div className="mt-7 flex flex-wrap gap-5">
          {socialLinks.map((l) => (
            <a
              key={l.name}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className={homeLink}
            >
              {l.name}
            </a>
          ))}
          <Link href="/resume" className={homeLink}>
            Resume →
          </Link>
        </div>
      </section>

      {posts.length > 0 && (
        <>
          <hr className="my-12 border-t border-border" />
          <p className="mb-5 text-label font-semibold tracking-label text-muted uppercase">
            Recent writing
          </p>
          <PostList posts={posts} />
        </>
      )}
    </>
  );
}
