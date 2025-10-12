// src/components/ProjectCard.jsx
// Card UI for portfolio projects
import Image from "next/image";

export default function ProjectCard({ project }) {
  return (
    <article
      className="reveal rounded-2xl ring-1 shadow-sm transition hover:scale-[1.02] hover:shadow-md focus-within:scale-[1.02] focus-within:shadow-md
        bg-white dark:bg-white/5 ring-gray-200 dark:ring-white/10 p-5 flex flex-col gap-4"
      tabIndex={0}
      aria-label={project.title}
    >
      {/* Project image */}
      <div className="aspect-video w-full rounded-xl overflow-hidden bg-white/10 dark:bg-white/10 ring-1 ring-gray-100 dark:ring-white/10 mb-2">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title + " screenshot"}
            width={600}
            height={340}
            className="object-cover w-full h-full"
            priority={false}
          />
        ) : (
          <span className="flex items-center justify-center h-full text-gray-400">No image</span>
        )}
      </div>
      {/* Title */}
      <h2 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white mb-1">{project.title}</h2>
      {/* Description */}
      <p className="text-sm text-gray-700 dark:text-white/80 mb-2">{project.description}</p>
      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 mb-2">
        {project.tech.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center rounded-full px-3 py-1 text-xs md:text-sm ring-1 ring-gray-200 dark:ring-white/10 bg-gray-100 dark:bg-white text-gray-900 dark:text-gray-900"
          >
            {tag}
          </span>
        ))}
      </div>
      {/* GitHub button */}
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${project.title} on GitHub`}
        className="mt-auto inline-flex items-center gap-2 rounded-xl bg-[#7c5cff] px-4 py-2 text-white font-medium shadow hover:scale-[1.03] transition focus-visible:ring-2 focus-visible:ring-[#7c5cff] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#0b0b0d]"
      >
        <svg width="20" height="20" fill="currentColor" aria-hidden="true" className="mr-1">
          <path d="M10 .3a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-2c-2.8.6-3.4-1.2-3.4-1.2-.4-1-1-1.3-1-1.3-.8-.6.1-.6.1-.6.9.1 1.4.9 1.4.9.8 1.4 2.1 1 2.6.8.1-.6.3-1 .6-1.2-2.2-.2-4.5-1.1-4.5-5A3.9 3.9 0 0 1 4.5 7c-.1-.4-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.2 9.2 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.3.1 2.7a3.9 3.9 0 0 1 1 2.7c0 3.9-2.3 4.8-4.5 5 .3.3.6.8.6 1.6v2.4c0 .3.2.6.7.5A10 10 0 0 0 10 .3" />
        </svg>
        GitHub
      </a>
    </article>
  );
}
