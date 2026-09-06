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

export default function Resume() {
  return (
    <>
      <div className="resume-header">
        <h1>Pourush Shrestha</h1>
        <p className="subtitle">Software Engineer</p>
        <a className="download-btn" href="/resume.pdf">
          ↓ Download PDF
        </a>
      </div>

      <section className="resume-section">
        <h2>Experience</h2>
        {experience.map((job) => (
          <div key={job.company} className="job">
            <div className="job-header">
              <span className="job-title">{job.title}</span>
              <span className="job-period">{job.period}</span>
            </div>
            <div className="job-company">{job.company}</div>
            <p className="job-desc">{job.desc}</p>
          </div>
        ))}
      </section>

      <section className="resume-section">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <span key={skill} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <style>{`
        .resume-header { margin-bottom: 44px; }
        .resume-header h1 {
          font-family: var(--font-playfair), Georgia, serif;
          font-size: 30px;
          font-weight: 600;
          letter-spacing: -0.02em;
          margin-bottom: 6px;
        }
        .subtitle {
          color: var(--text-secondary);
          font-size: 15px;
        }
        .download-btn {
          display: inline-block;
          margin-top: 20px;
          padding: 8px 18px;
          border: 1px solid var(--border);
          border-radius: 4px;
          color: var(--text-secondary);
          font-size: 13px;
          font-weight: 500;
          transition: border-color 0.15s, color 0.15s;
        }
        .download-btn:hover {
          border-color: var(--accent);
          color: var(--accent);
        }
        .resume-section { margin-bottom: 44px; }
        .resume-section h2 {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--text-secondary);
          margin-bottom: 20px;
          padding-bottom: 8px;
          border-bottom: 1px solid var(--border);
        }
        .job { margin-bottom: 28px; }
        .job:last-child { margin-bottom: 0; }
        .job-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          flex-wrap: wrap;
          gap: 4px;
          margin-bottom: 4px;
        }
        .job-title {
          font-weight: 600;
          font-size: 15px;
        }
        .job-period {
          color: var(--text-secondary);
          font-size: 13px;
          font-variant-numeric: tabular-nums;
        }
        .job-company {
          color: var(--accent);
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 8px;
        }
        .job-desc {
          font-family: var(--font-lora), Georgia, serif;
          font-size: 15px;
          line-height: 1.7;
          color: var(--text);
        }
        .skills-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .skill-tag {
          background: var(--tag-bg);
          color: var(--tag-text);
          font-size: 13px;
          font-weight: 500;
          padding: 4px 12px;
          border-radius: 3px;
        }
      `}</style>
    </>
  );
}
