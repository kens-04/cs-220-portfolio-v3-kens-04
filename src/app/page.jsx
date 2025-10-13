"use client";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import FeaturedCard from "../components/FeaturedCard";
import Link from "next/link";

// IntersectionObserver for .reveal-in
function useReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("reveal-in"));
      return;
    }
    const io = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function Home() {
  useReveal();
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <Section className="flex flex-col items-center justify-center min-h-[60vh] text-center gap-6 reveal">
        <h1 className="font-bold text-[clamp(1.75rem,4vw,3rem)] leading-tight text-accent">Kensho Okamoto</h1>
        <h2 className="text-lg md:text-2xl font-semibold text-[#171717] dark:text-[#e6e6e8]/80 mb-2">
          Software Engineer
        </h2>
        <p className="max-w-xl mx-auto text-base md:text-lg text-[#171717] dark:text-[#e6e6e8]/70 mb-6">
          I build robust, accessible web apps with a focus on performance, design, and user experience. Let&apos;s
          create something impactful together.
        </p>
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
            href="https://www.linkedin.com/in/kensho-okamoto-02891235a/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-transparent border border-accent text-accent font-semibold rounded-xl shadow hover:bg-accent/10 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
        </div>
      </Section>

      {/* Quick Links / Highlights */}
      <Section className="reveal">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            href="/projects"
            className="group block rounded-2xl ring-1 ring-white/10 bg-black/30 dark:bg-white/5 p-8 text-center shadow transition-transform duration-200 hover:scale-[1.02] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <span className="text-2xl font-bold text-accent mb-2 block">Projects</span>
            <span className="text-base text-white/80 dark:text-[#e6e6e8]/80">See my latest work and case studies.</span>
          </Link>
          <Link
            href="/about"
            className="group block rounded-2xl ring-1 ring-white/10 bg-black/30 dark:bg-white/5 p-8 text-center shadow transition-transform duration-200 hover:scale-[1.02] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <span className="text-2xl font-bold text-accent mb-2 block">About</span>
            <span className="text-base text-white/80 dark:text-[#e6e6e8]/80">
              Learn more about my background and skills.
            </span>
          </Link>
          <Link
            href="/contact"
            className="group block rounded-2xl ring-1 ring-white/10 bg-black/30 dark:bg-white/5 p-8 text-center shadow transition-transform duration-200 hover:scale-[1.02] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <span className="text-2xl font-bold text-accent mb-2 block">Contact</span>
            <span className="text-base text-white/80 dark:text-[#e6e6e8]/80">
              Get in touch for collaboration or questions.
            </span>
          </Link>
        </div>
      </Section>

      {/* Featured Project */}
      <Section className="reveal">
        <h2 className="text-2xl md:text-3xl font-bold text-accent mb-8 text-center">Featured Project</h2>
        <FeaturedCard
            image="/cs-220-portfolio-v3-kens-04/featured.jpg"
            title="Portfolio Platform"
            description="A modern, responsive portfolio platform built with Next.js and TailwindCSS. Features dark mode, project showcases, and blazing fast performance."
            tags={["Next.js", "TailwindCSS", "Vercel"]}
            github="https://github.com/kens-04/portfolio"
          />
      </Section>
    </>
  );
}
