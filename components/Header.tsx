import Link from "next/link";

const navLinks = [
  { name: "Resume", href: "/resume" },
  { name: "Blog", href: "/blog" },
];

export default function Header() {
  return (
    <header className="flex flex-wrap items-baseline justify-between gap-3 pt-10 pb-16">
      <Link
        href="/"
        className="font-display text-logo font-semibold tracking-[-0.01em] text-fg"
      >
        Pourush Shrestha
      </Link>
      <nav className="flex gap-7">
        {navLinks.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="text-ui font-medium tracking-[0.01em] text-muted transition-colors duration-150 hover:text-accent"
          >
            {l.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
