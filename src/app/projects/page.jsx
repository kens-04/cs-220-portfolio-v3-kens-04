"use client";
export const metadata = {
  title: "Projects — Kensho Okamoto",
  description: "Selected projects and experiments.",
};

import { useState, useMemo } from "react";
import { projects } from "../../lib/projects";
import ProjectCard from "../../components/ProjectCard";
import FilterBar from "../../components/FilterBar";

export default function Projects() {
  // Unique tech tags
  const techList = useMemo(() => {
    const tags = new Set();
    projects.forEach((p) => p.tech.forEach((t) => tags.add(t)));
    return Array.from(tags);
  }, []);

  // Filter state
  const [selectedTag, setSelectedTag] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

  // Filtered projects
  const filtered = useMemo(() => {
    if (selectedTag === "All") return projects;
    return projects.filter((p) => p.tech.includes(selectedTag));
  }, [selectedTag]);

  // Projects to show
  const visibleProjects = filtered.slice(0, visibleCount);

  return (
    <main className="min-h-screen">
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
        {/* Intro */}
        <h1 className="text-[clamp(1.75rem,4vw,2.5rem)] font-semibold tracking-tight mb-4">Projects</h1>
        <p className="text-lg text-gray-700 dark:text-white/80 mb-8 max-w-2xl">
          Selected projects and experiments. Filter by technology to explore more.
        </p>
        {/* Filter bar */}
        <FilterBar techList={techList} selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
        {/* Responsive grid of cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        {/* Load More stub */}
        {visibleCount < filtered.length && (
          <div className="flex justify-center mt-10">
            <button
              type="button"
              className="rounded-xl bg-[#7c5cff] px-6 py-2.5 text-white font-medium shadow hover:scale-[1.03] transition focus-visible:ring-2 focus-visible:ring-[#7c5cff] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#0b0b0d]"
              onClick={() => setVisibleCount((c) => c + 3)}
            >
              Load more
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
