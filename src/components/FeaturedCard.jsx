import Image from "next/image";

export default function FeaturedCard({
  image = "/featured.jpg",
  title = "Featured Project",
  description = "A short description of the featured project goes here. It highlights the main value and tech used.",
  tags = ["Next.js", "TailwindCSS", "React"],
  github,
}) {
  return (
    <div className="group rounded-2xl ring-1 ring-white/10 bg-black/30 dark:bg-white/5 overflow-hidden shadow-lg transition-transform duration-200 hover:scale-[1.02] hover:shadow-2xl flex flex-col md:flex-row">
      <div className="relative w-full md:w-1/2 h-48 md:h-auto">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold mb-2 text-accent">{title}</h3>
          <p className="mb-4 text-base text-white/80 dark:text-[#e6e6e8]/80">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View on GitHub"
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-xl font-semibold shadow hover:bg-accent/90 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M12 2C6.48 2 2 6.58 2 12.26c0 4.48 2.87 8.28 6.84 9.63.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0112 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0022 12.26C22 6.58 17.52 2 12 2z"
              />
            </svg>
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}
