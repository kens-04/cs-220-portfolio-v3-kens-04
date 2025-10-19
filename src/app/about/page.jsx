export const metadata = {
  title: "About — Kensho Okamoto",
  description:
    "About Kensho Okamoto — a Japan-born software engineering student in Utah who loves helping people, data/AI, and live music.",
};

import Navbar from "../../components/Navbar";
import RevealMount from "../../components/RevealMount";
import Image from "next/image";

export default function About() {
  return (
    <>
      <RevealMount />
      <Navbar />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-center">
            <div className="reveal space-y-5">
              <h1 className="text-[clamp(2rem,5vw,3rem)] font-semibold tracking-tight">
                About <span className="text-[#7c5cff]">Kensho Okamoto</span>
              </h1>
              <p className="text-lg leading-relaxed text-[#171717] dark:text-white/80">
                I am a software engineering student in Utah, originally from Japan. I started programming because I want
                to build services that help many people and make their day a little happier. Studying abroad expanded my
                perspective and taught me to embrace diverse cultures and ways of thinking.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/projects"
                  className="inline-flex items-center rounded-xl bg-[#7c5cff] px-5 py-2.5 font-medium text-white shadow transition-transform hover:scale-[1.02]"
                >
                  View Projects
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center rounded-xl px-5 py-2.5 font-medium ring-1 ring-white/15 hover:ring-white/30 transition"
                >
                  Contact
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="reveal md:justify-self-end">
              <div className="aspect-square w-64 md:w-80 rounded-3xl bg-white/5 ring-1 ring-white/10 shadow-lg overflow-hidden">
                <Image
                  src="/images/progile.jpg"
                  alt="Kensho Okamoto — profile photo"
                  width={320}
                  height={320}
                  className="object-cover w-full h-full"
                  priority={true}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <h2 className="reveal text-xl font-semibold mb-6 text-[#171717] dark:text-white">Quick facts</h2>
            <div className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Fact label="From" value="Aichi, Japan" />
              <Fact label="Based in" value="Utah, USA" />
              <Fact label="Focus" value="Data analysis & AI" />
              <Fact label="Languages" value="Japanese (native), English" />
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-3 gap-10">
            <div className="reveal lg:col-span-2 space-y-4">
              <h2 className="text-xl font-semibold text-[#171717] dark:text-white">My story</h2>
              <p className="text-[#171717] dark:text-white/80 leading-relaxed">
                I decided to learn programming to gain the skills needed to create services that truly help people. I
                enjoy being a <em>giver</em>—supporting others, lending a hand, and building things that improve
                everyday life. Studying in the U.S. expanded my worldview: meeting friends from different cultures
                taught me to keep my mind open and stay curious.
              </p>
              <p className="text-[#171717] dark:text-white/80 leading-relaxed">
                Outside of code, live music is my passion—hip-hop, rock, jazz, and pop. Those moments at concerts
                recharge me and remind me why creating meaningful experiences matters.
              </p>
            </div>

            {/* Values / Principles */}
            <div className="reveal space-y-4">
              <h3 className="text-lg font-semibold text-[#171717] dark:text-white">What I value</h3>
              <ul className="space-y-3">
                <ValueCard
                  title="Pursue what you love"
                  text="Give 180% to the work that excites you—that is where my energy and growth come from."
                />
                <ValueCard
                  title="Build & ship"
                  text="Act, learn, and iterate. Shipping real projects teaches faster than theory alone."
                />
                <ValueCard
                  title="Mentorship & community"
                  text="Grow with trusted mentors and diverse friends; keep giving and keep learning."
                />
              </ul>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <h2 className="reveal text-xl font-semibold mb-8">Timeline</h2>
            <div className="reveal space-y-6">
              <TimelineItem
                period="~ HS (Aichi, Japan)"
                title="Handball Club (5 years)"
                detail="Trained and competed through junior high and high school—learned teamwork, grit, and creative problem-solving."
              />
              <TimelineItem
                period="2024/9 →2025/4"
                title="Study abroad (F-1)"
                detail="BYU ELC & life in the U.S. Broadened perspective and cultural understanding."
              />
              <TimelineItem
                period="2025/5 → present"
                title="Ensign College — A.S., Computer Science"
                detail="Web dev coursework & projects (Portfolio, Blackjack, Dessert Shop). Exploring data analysis and AI."
              />
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <h2 className="reveal text-xl font-semibold mb-6">Skills</h2>
            <div className="reveal flex flex-wrap gap-2">
              <Badge>JavaScript</Badge>
              <Badge>React / Next.js</Badge>
              <Badge>Tailwind CSS</Badge>
              <Badge>Java</Badge>
              <Badge>SQL (basics)</Badge>
              <Badge>Git / GitHub</Badge>
              <Badge>Data analysis (learning)</Badge>
              <Badge>AI / ML (exploring)</Badge>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-6 text-center reveal">
            <h3 className="text-2xl font-semibold mb-4">Want to know more?</h3>
            <p className="text-white/70 mb-6">Check out my projects or get in touch I would love to connect.</p>
            <div className="flex items-center justify-center gap-3">
              <a
                href="/projects"
                className="inline-flex items-center rounded-xl bg-[#7c5cff] px-5 py-2.5 font-medium text-white shadow transition-transform hover:scale-[1.02]"
              >
                Projects
              </a>
              <a
                href="/contact"
                className="inline-flex items-center rounded-xl px-5 py-2.5 font-medium ring-1 ring-white/15 hover:ring-white/30 transition"
              >
                Contact
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );

  /* ---------- tiny presentational components (no extra files required) ---------- */

  function Fact({ label, value }) {
    return (
      <div className="rounded-2xl ring-1 ring-white/10 bg-white/5 px-4 py-3">
        <div className="text-xs uppercase tracking-wide text-[#7c7c7c] dark:text-white/50">{label}</div>
        <div className="mt-1 font-medium text-[#171717] dark:text-white">{value}</div>
      </div>
    );
  }

  function ValueCard({ title, text }) {
    return (
      <li className="rounded-2xl ring-1 ring-white/10 bg-white/5 px-4 py-3">
        <div className="font-medium text-[#171717] dark:text-white">{title}</div>
        <p className="text-sm text-[#171717] dark:text-white/75 mt-1">{text}</p>
      </li>
    );
  }

  function TimelineItem({ period, title, detail }) {
    return (
      <div className="relative pl-5">
        <div className="absolute left-0 top-1.5 h-2 w-2 rounded-full bg-[#7c5cff]" />
        <div className="text-xs uppercase tracking-wide text-[#7c7c7c] dark:text-white/50">{period}</div>
        <div className="font-medium text-[#171717] dark:text-white">{title}</div>
        <p className="text-[#171717] dark:text-white/75 mt-1">{detail}</p>
      </div>
    );
  }

  function Badge({ children }) {
    return (
      <span className="inline-flex items-center rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1 text-sm text-[#171717] dark:text-white/85">
        {children}
      </span>
    );
  }
}
