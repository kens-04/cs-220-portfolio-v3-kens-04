export default function Section({ id, title, className = "", children, ...props }) {
  return (
    <section id={id} className={`container py-16 md:py-24 ${className}`.trim()} {...props}>
      {title && <h2 className="text-2xl md:text-3xl font-bold text-accent mb-8 text-center">{title}</h2>}
      {children}
    </section>
  );
}
