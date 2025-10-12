// src/components/FilterBar.jsx
// Tag filter bar for projects
import { useState } from "react";

export default function FilterBar({ techList, selectedTag, setSelectedTag }) {
  return (
    <nav aria-label="Project filters" className="mb-8 flex flex-wrap gap-3">
      {/* All pill */}
      <button
        type="button"
        className={`rounded-full px-3 py-1 text-sm ring-1 focus-visible:ring-2 focus-visible:ring-[#7c5cff] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#0b0b0d] transition
          ${
            selectedTag === "All"
              ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900 ring-gray-200 dark:ring-white/10"
              : "bg-white text-gray-900 dark:bg-white/5 dark:text-white ring-gray-200 dark:ring-white/10"
          }
        `}
        onClick={() => setSelectedTag("All")}
        aria-pressed={selectedTag === "All"}
      >
        All
      </button>
      {/* Tech pills */}
      {techList.map((tech) => (
        <button
          key={tech}
          type="button"
          className={`rounded-full px-3 py-1 text-sm ring-1 focus-visible:ring-2 focus-visible:ring-[#7c5cff] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#0b0b0d] transition
            ${
              selectedTag === tech
                ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900 ring-gray-200 dark:ring-white/10"
                : "bg-white text-gray-900 dark:bg-white/5 dark:text-white ring-gray-200 dark:ring-white/10"
            }
          `}
          onClick={() => setSelectedTag(tech)}
          aria-pressed={selectedTag === tech}
        >
          {tech}
        </button>
      ))}
    </nav>
  );
}
