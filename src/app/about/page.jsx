import Image from "next/image";
import Link from "next/link";
import Section from "../../components/Section";
import SkillBadge from "../../components/SkillBadge";
import TimelineItem from "../../components/TimelineItem";

export const metadata = {
  title: "About Kensho Okamoto",
  description: "About page for Kensho Okamoto, software engineer. Skills, experience, and values.",
};

const quickFacts = [
  { label: "Location", value: "Tokyo, Japan" },
  { label: "Role", value: "Software Engineer" },
  { label: "Interests", value: "Web, AI, Design, Music" },
  { label: "Currently learning", value: "TypeScript, Cloud, D3.js" },
];

const skills = ["JavaScript", "React", "Next.js", "TailwindCSS", "Java", "SQL", "Node.js", "Python", "Git", "Figma"];

const timeline = [
  {
    title: "Software Engineer",
    org: "Tech Startup",
    period: "2023–Present",
    desc: "Developed scalable web apps, led UI modernization, mentored junior devs.",
  },
  {
    title: "B.S. Computer Science",
    org: "Ensign College",
    period: "2020–2023",
    desc: "Graduated with honors. Focused on full-stack web and project-based learning.",
  },
];

const values = [
  {
    title: "Pursue what you love",
    desc: "I put 180% into the work I genuinely care about.",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
        <path d="M16 29s-9-7.434-9-13.5A6.5 6.5 0 0116 9a6.5 6.5 0 019 6.5C25 21.566 16 29 16 29z" fill="#7c5cff" />
      </svg>
    ),
  },
  {
    title: "Build & ship",
    desc: "Learning through action—shipping is the best teacher.",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
        <rect x="6" y="14" width="20" height="12" rx="2" fill="#7c5cff" />
        <path d="M16 6v8" stroke="#7c5cff" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Mentorship & community",
    desc: "Grow with trusted mentors and diverse peers.",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
        <circle cx="16" cy="12" r="6" fill="#7c5cff" />
        <rect x="6" y="22" width="20" height="6" rx="3" fill="#7c5cff" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <Section id="about-hero" className="reveal">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: Heading, paragraph, CTA */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-accent mb-4">About Kensho Okamoto</h1>
            <p className="mb-6 text-lg text-white/80 dark:text-[#e6e6e8]/80">
              I’m a software engineer focused on building clean, performant web apps. I care about real-world impact,
              clarity, and craftsmanship.
            </p>
            <div className="flex flex-wrap gap-4 mb-4">
              <a
                href="/resume.pdf"
                className="px-6 py-3 bg-accent text-white font-semibold rounded-xl shadow hover:bg-accent/90 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label="Download Résumé"
                download
              >
                Download Résumé
              </a>
              <Link
                href="/contact"
                className="px-6 py-3 bg-transparent border border-accent text-accent font-semibold rounded-xl shadow hover:bg-accent/10 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label="Contact"
              >
                Contact
              </Link>
            </div>
          </div>
          {/* Right: Profile image */}
          <div className="flex justify-center md:justify-end">
            <div className="rounded-full ring-4 ring-accent/30 shadow-lg overflow-hidden w-40 h-40 md:w-56 md:h-56 bg-white/10 flex items-center justify-center">
              {/* Use next/image if profile.jpg exists, else fallback to <img> */}
              <Image
                src="/profile.jpg"
                alt="Kensho Okamoto profile photo"
                width={224}
                height={224}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Quick Facts Grid */}
      <Section id="about-facts" title="Quick Facts" className="reveal">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickFacts.map((fact) => (
            <div
              key={fact.label}
              className="rounded-2xl ring-1 ring-white/10 bg-white/5 dark:bg-white/5 p-6 text-center shadow"
            >
              <div className="text-sm text-white/60 dark:text-[#e6e6e8]/60 mb-1">{fact.label}</div>
              <div className="text-lg font-semibold text-accent">{fact.value}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="about-skills" title="Core Skills" className="reveal">
        <div className="flex flex-wrap gap-3 justify-center">
          {skills.map((skill) => (
            <SkillBadge key={skill}>{skill}</SkillBadge>
          ))}
        </div>
      </Section>

      {/* Timeline Section */}
      <Section id="about-timeline" title="Experience & Education" className="reveal">
        <div className="flex flex-col gap-8 max-w-2xl mx-auto">
          {timeline.map((item) => (
            <TimelineItem key={item.title} title={item.title} org={item.org} period={item.period}>
              {item.desc}
            </TimelineItem>
          ))}
        </div>
      </Section>

      {/* Values / Principles */}
      <Section id="about-values" title="Values & Principles" className="reveal">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((val) => (
            <div
              key={val.title}
              className="rounded-2xl ring-1 ring-white/10 bg-white/5 dark:bg-white/5 p-8 flex flex-col items-center text-center shadow"
            >
              <div className="mb-4">{val.icon}</div>
              <h3 className="text-xl font-bold text-accent mb-2">{val.title}</h3>
              <p className="text-base text-white/80 dark:text-[#e6e6e8]/80">{val.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Footer */}
      <Section id="about-cta" className="reveal text-center">
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://github.com/kens-04"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-accent text-white font-semibold rounded-xl shadow hover:bg-accent/90 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="GitHub"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/kensho-okamoto"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-transparent border border-accent text-accent font-semibold rounded-xl shadow hover:bg-accent/10 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
          <Link
            href="/projects"
            className="px-6 py-3 bg-white text-accent font-semibold rounded-xl shadow hover:bg-accent/10 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent border border-accent"
            aria-label="View Projects"
          >
            View Projects
          </Link>
        </div>
      </Section>
    </main>
  );
}
