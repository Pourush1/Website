import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import path from "node:path";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume — Pourush Shrestha",
};

// Mirrors public/resume.pdf (Senior Frontend Engineer variant). Keep the two in sync.

// Content hash of the PDF, computed at build time. Changing the PDF changes the
// URL, so browsers that cached an older copy fetch the new one.
const pdfVersion = createHash("sha256")
  .update(readFileSync(path.join(process.cwd(), "public/resume.pdf")))
  .digest("hex")
  .slice(0, 8);

const contactLinks = [
  { name: "Email", href: "mailto:pourushshrestha29@gmail.com" },
  { name: "LinkedIn ↗", href: "https://www.linkedin.com/in/pourush-shrestha/" },
  { name: "GitHub ↗", href: "https://github.com/Pourush1" },
];

const summary =
  "Senior Frontend Engineer with nearly 7 years shipping high-traffic e-commerce features at scale. Co-lead the Product Explore area of Gap Inc.’s Product Detail Page (PDP) platform across Gap, Old Navy, Banana Republic, and Athleta, serving millions of daily users. Own frontend architecture end-to-end in React, Next.js, TypeScript, and Tailwind CSS — from server/client rendering boundaries to flag-driven rollouts.";

interface Highlight {
  lead: string;
  text: string;
}

interface Job {
  title: string;
  company: string;
  period: string;
  note?: string;
  highlights: Highlight[];
}

const experience: Job[] = [
  {
    title: "Senior Software Engineer, Frontend",
    company: "G2O · Client: Gap Inc.",
    period: "Jul 2025 – Present",
    highlights: [
      {
        lead: "Co-lead, Product Explore (PDP):",
        text: "Drive technical direction for 6 product discovery features — Recommendations, Product Grouping, Multiple Variant Grouping (MVG), Upsell/Cross-sell, FindMine, and Quick Add; shipped 4 features to production with zero missed launch dates and set architecture standards for the area.",
      },
      {
        lead: "Frontend Architecture:",
        text: "Define server/client component boundaries in Next.js, dynamically load below-the-fold client components, and parallelize and cache server-side data calls to keep high-traffic PDPs fast; gate releases with Optimizely feature flags and A/B segment cookies for safe, incremental rollouts.",
      },
      {
        lead: "Mentorship & Onboarding:",
        text: "Paired with a software engineer to ramp them up on the PDP codebase, page architecture, Optimizely feature flags, and A/B segment logic, supporting their day-to-day delivery.",
      },
      {
        lead: "Feature Lead, Loyalty Gated:",
        text: "Drove sell-outs within 24 hours for loyalty-gated products reaching 2M+ card members; led delivery from soft launch to full rollout by integrating Decision API, CAM token auth, and Optimizely, then shipped a New Relic observability dashboard post-launch.",
      },
      {
        lead: "Led Compare Similar Styles (Product Grouping & MVG v2):",
        text: "Architected and delivered the feature brand-wide in React and TypeScript, driving $1M+ in projected revenue uplift on PDPs serving millions of daily users.",
      },
      {
        lead: "Feature Lead, Multi-Brand Retheme:",
        text: "Redesigned 5 core PDP components across all four storefronts on schedule using design system tokens and cross-team code reviews, earning direct client commendation at launch.",
      },
    ],
  },
  {
    title: "Senior Software Engineer, Platform & Architecture",
    company: "G2O · Client: Abercrombie & Fitch",
    period: "Sep 2021 – Jun 2025",
    note: "Joined as Software Engineer (2021); promoted to Senior Software Engineer (2023)",
    highlights: [
      {
        lead: "Built reference Micro-Frontend (MFE) pages adopted by 4 product teams:",
        text: "Delivered Profile, Checkout, Product, and Catalog references, cutting per-team onboarding from 3 weeks to 1 and improving deployment velocity by 20%+; implemented an NGINX reverse proxy for routing and load balancing across the MFE orchestration layer.",
      },
      {
        lead: "Restored full tracking accuracy across 50,000+ daily sessions:",
        text: "Eliminated a race condition in the analytics pipeline; built an orchestration-layer test suite with 90%+ coverage, cutting integration defects by 65%.",
      },
    ],
  },
  {
    title: "Backend Software Engineer",
    company: "U-Haul Inc.",
    period: "Jan 2021 – Jul 2021",
    highlights: [
      {
        lead: "Reduced login failures by 30% for 50,000+ users:",
        text: "Built a Node.js/Express authentication system; cut new-hire ramp-up from 3 weeks to 1 by restructuring onboarding documentation.",
      },
    ],
  },
  {
    title: "Software Engineer",
    company: "Omviser LLC · Axxess Inc.",
    period: "Oct 2019 – Dec 2020",
    highlights: [
      {
        lead: "Cut technical debt by 40% and production bugs by 50%:",
        text: "Modernized a legacy JavaScript codebase to ES6+ with 85% test coverage and improved load performance by 20%; built Axxess Hospice dashboard features driving 10% revenue growth.",
      },
    ],
  },
];

const projects = [
  {
    name: "Personal Portfolio",
    href: "https://pourushshrestha.com",
    linkText: "pourushshrestha.com",
    stack: "Next.js · TypeScript · MDX · Tailwind CSS",
    highlight: {
      lead: "Scored 100 desktop / 99 mobile across Performance, Accessibility, Best Practices, and SEO:",
      text: "Built a database-free site with an all-Server-Component architecture and MDX/Markdown-driven content for about, resume, and blog sections, shipping minimal client JavaScript with zero backend overhead.",
    },
  },
];

const skillGroups = [
  {
    label: "Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "GraphQL", "SQL", "Python"],
  },
  {
    label: "Frameworks & Libraries",
    skills: [
      "React",
      "Next.js (App Router, Server Components)",
      "Zustand",
      "Redux",
      "RTK Query",
      "Node.js",
      "Express",
      "Tailwind CSS",
      "Sass",
      "Storybook",
    ],
  },
  {
    label: "Testing & Tooling",
    skills: [
      "Jest",
      "Playwright",
      "React Testing Library",
      "Webpack",
      "Vite",
      "Docker",
      "CI/CD",
      "New Relic",
      "Optimizely",
      "NGINX",
    ],
  },
  {
    label: "AI-Assisted Development",
    skills: ["Claude Code", "Claude", "OpenAI Codex", "ChatGPT"],
  },
];

const sectionHeading =
  "mb-5 border-b border-border pb-2 text-label font-semibold tracking-label text-muted uppercase";

const entryHeader = "mb-1 flex flex-wrap items-baseline justify-between gap-1";

const entryMeta = "text-meta text-muted tabular-nums";

const highlightList =
  "list-disc space-y-2 pl-5 font-serif text-body leading-[1.7] text-fg marker:text-muted";

function HighlightItem({ lead, text }: Highlight) {
  return (
    <li>
      <span className="font-semibold">{lead}</span> {text}
    </li>
  );
}

export default function Resume() {
  return (
    <>
      <div className="mb-11">
        <h1 className="mb-1.5 font-display text-title font-semibold tracking-heading">
          Pourush Shrestha
        </h1>
        <p className="text-body text-muted">
          Senior Frontend Engineer · Dallas–Fort Worth, TX
        </p>
        <div className="mt-3 flex flex-wrap gap-5">
          {contactLinks.map((l) => (
            <a
              key={l.name}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-ui font-medium text-accent transition-colors duration-150 hover:text-accent-hover hover:underline hover:underline-offset-3"
            >
              {l.name}
            </a>
          ))}
        </div>
        <a
          className="mt-5 inline-block rounded border border-border px-4.5 py-2 text-meta font-medium text-muted transition-colors duration-150 hover:border-accent hover:text-accent"
          href={`/resume.pdf?v=${pdfVersion}`}
          download="Pourush-Shrestha-Resume.pdf"
        >
          ↓ Download PDF
        </a>
      </div>

      <p className="mb-11 font-serif text-body leading-[1.7] text-fg">
        {summary}
      </p>

      <section className="mb-11">
        <h2 className={sectionHeading}>Experience</h2>
        {experience.map((job) => (
          <div key={`${job.company}-${job.period}`} className="mb-8 last:mb-0">
            <div className={entryHeader}>
              <span className="text-body font-semibold">{job.title}</span>
              <span className={entryMeta}>{job.period}</span>
            </div>
            <div className="mb-2 text-ui font-medium text-accent">
              {job.company}
            </div>
            {job.note && (
              <p className="mb-2 text-meta text-muted italic">{job.note}</p>
            )}
            <ul className={highlightList}>
              {job.highlights.map((h) => (
                <HighlightItem key={h.lead} {...h} />
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mb-11">
        <h2 className={sectionHeading}>Projects</h2>
        {projects.map((p) => (
          <div key={p.name} className="mb-8 last:mb-0">
            <div className={entryHeader}>
              <span className="text-body font-semibold">
                {p.name} ·{" "}
                <a
                  href={p.href}
                  className="text-accent transition-colors duration-150 hover:text-accent-hover"
                >
                  {p.linkText}
                </a>
              </span>
              <span className={entryMeta}>{p.stack}</span>
            </div>
            <ul className={highlightList}>
              <HighlightItem {...p.highlight} />
            </ul>
          </div>
        ))}
      </section>

      <section className="mb-11">
        <h2 className={sectionHeading}>Skills</h2>
        <div className="space-y-5">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h3 className="mb-2 text-ui font-semibold">{group.label}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-[3px] bg-tag-bg px-3 py-1 text-meta font-medium text-tag-fg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-11">
        <h2 className={sectionHeading}>Education</h2>
        <div className={entryHeader}>
          <span className="text-body font-semibold">
            M.Sc. Software Engineering
          </span>
          <span className={entryMeta}>May 2020</span>
        </div>
        <div className="text-ui text-muted">
          Villanova University · GPA 3.76/4.0
        </div>
      </section>
    </>
  );
}
