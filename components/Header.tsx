import Link from "next/link";

export default function Header() {
  return (
    <>
      <header>
        <Link href="/" className="site-name">
          Pourush Shrestha
        </Link>
        <nav>
          <Link href="/resume">Resume</Link>
          <Link href="/blog">Blog</Link>
        </nav>
      </header>

      <style>{`
        header {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          padding: 40px 0 64px;
          flex-wrap: wrap;
          gap: 12px;
        }
        .site-name {
          font-family: var(--font-playfair), Georgia, serif;
          font-size: 20px;
          font-weight: 600;
          color: var(--text);
          letter-spacing: -0.01em;
        }
        nav {
          display: flex;
          gap: 28px;
        }
        nav a {
          color: var(--text-secondary);
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.01em;
          transition: color 0.15s;
        }
        nav a:hover {
          color: var(--accent);
        }
      `}</style>
    </>
  );
}
