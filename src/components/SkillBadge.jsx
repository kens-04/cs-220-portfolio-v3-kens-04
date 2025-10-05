export default function SkillBadge({ children }) {
  return (
    <span
      className="inline-block rounded-full bg-accent/10 text-accent px-3 py-1 text-xs font-semibold mr-2 mb-2 transition-transform duration-150 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      tabIndex={0}
    >
      {children}
    </span>
  );
}
