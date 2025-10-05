export default function Section({ className = "", children, ...props }) {
  return (
    <section className={`container py-16 md:py-24 ${className}`.trim()} {...props}>
      {children}
    </section>
  );
}
