const links = [
  { name: "GitHub", href: "https://github.com/Pourush1" },
  { name: "Twitter", href: "https://x.com/pourush29" },
  { name: "LinkedIn", href: "https://linkedin.com/in/pourush-shrestha" },
];

export default function Footer() {
  return (
    <footer className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8 pb-12 text-meta text-muted">
      <span>Pourush Shrestha</span>
      <div className="flex gap-5">
        {links.map((l) => (
          <a
            key={l.name}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors duration-150 hover:text-accent"
          >
            {l.name}
          </a>
        ))}
      </div>
    </footer>
  );
}
