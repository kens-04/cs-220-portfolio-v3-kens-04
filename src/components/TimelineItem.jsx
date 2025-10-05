export default function TimelineItem({ title, org, period, children }) {
  return (
    <div className="flex items-start gap-4 relative">
      {/* Timeline vertical line */}
      <div className="flex flex-col items-center">
        <span className="w-3 h-3 rounded-full bg-accent ring-2 ring-white/80 dark:ring-white/20 mt-1" />
        <span className="block w-px h-full bg-white/10 dark:bg-white/20" aria-hidden="true" />
      </div>
      <div className="pb-8">
        <h3 className="text-lg font-bold text-accent mb-1">{title}</h3>
        <div className="text-sm text-white/70 dark:text-[#e6e6e8]/70 mb-1">
          {org} ・ {period}
        </div>
        <div className="text-base text-white/90 dark:text-[#e6e6e8]/90">{children}</div>
      </div>
    </div>
  );
}
