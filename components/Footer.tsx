const links = [
  { name: "GitHub", href: "https://github.com/Pourush1" },
  { name: "Twitter", href: "https://x.com/pourush29" },
  { name: "LinkedIn", href: "https://linkedin.com/in/pourush-shrestha" },
];

export default function Footer() {
  return (
    <>
      <footer>
        <span>Pourush Shrestha</span>
        <div className="footer-links">
          {links.map((l) => (
            <a key={l.name} href={l.href} target="_blank" rel="noopener noreferrer">
              {l.name}
            </a>
          ))}
        </div>
      </footer>

      <style>{`
        footer {
          border-top: 1px solid var(--border);
          padding: 32px 0 48px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: var(--text-secondary);
          font-size: 13px;
          gap: 16px;
          flex-wrap: wrap;
          margin-top: 64px;
        }
        footer a {
          color: var(--text-secondary);
          transition: color 0.15s;
        }
        footer a:hover {
          color: var(--accent);
        }
        .footer-links {
          display: flex;
          gap: 20px;
        }
      `}</style>
    </>
  );
}
