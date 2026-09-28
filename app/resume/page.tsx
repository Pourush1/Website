import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume — Pourush Shrestha",
};

const experience = [
  {
    title: "Senior Software Engineer",
    company: "G2o",
    period: "2021 – Present",
    desc: "Engineered 3 prototype pages using Microfrontend architecture. Led the migration of legacy components to a modern design system.",
  },
  {
    title: "Backend Software Engineer",
    company: "Uhaul",
    period: "2020 – 2021",
    desc: "Developed and maintained the authentication backend system for the ESL application.",
  },
  {
    title: "Frontend Software Developer",
    company: "Omviser LLC",
    period: "2020 – 2021",
    desc: "Modernized the JavaScript codebase and reduced technical debt across the application.",
  },
  {
    title: "Frontend Software Engineer",
    company: "Axxess",
    period: "2019 – 2020",
    desc: "Added new key features to the Hospice Dashboard and resolved critical bugs in production.",
  },
];

const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Microfrontends",
  "Module Federation",
  "SQL",
  "Docker",
  "AWS",
  "Git",
];

const sectionHeading =
  "mb-5 border-b border-border pb-2 text-label font-semibold tracking-label text-muted uppercase";

export default function Resume() {
  return (
    <>
      <div className="mb-11">
        <h1 className="mb-1.5 font-display text-title font-semibold tracking-heading">
          Pourush Shrestha
        </h1>
        <p className="text-body text-muted">Software Engineer</p>
        <a
          className="mt-5 inline-block rounded border border-border px-4.5 py-2 text-meta font-medium text-muted transition-colors duration-150 hover:border-accent hover:text-accent"
          href="/resume.pdf"
        >
          ↓ Download PDF
        </a>
      </div>

      <section className="mb-11">
        <h2 className={sectionHeading}>Experience</h2>
        {experience.map((job) => (
          <div key={job.company} className="mb-7 last:mb-0">
            <div className="mb-1 flex flex-wrap items-baseline justify-between gap-1">
              <span className="text-body font-semibold">{job.title}</span>
              <span className="text-meta text-muted tabular-nums">
                {job.period}
              </span>
            </div>
            <div className="mb-2 text-ui font-medium text-accent">
              {job.company}
            </div>
            <p className="font-serif text-body leading-[1.7] text-fg">
              {job.desc}
            </p>
          </div>
        ))}
      </section>

      <section className="mb-11">
        <h2 className={sectionHeading}>Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-[3px] bg-tag-bg px-3 py-1 text-meta font-medium text-tag-fg"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </>
  );
}
