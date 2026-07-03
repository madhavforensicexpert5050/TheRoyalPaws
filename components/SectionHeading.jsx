export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}) {
  const alignClass = align === "left" ? "text-left items-start" : "text-center items-center";
  return (
    <div className={`flex flex-col ${alignClass} mb-10 sm:mb-12`}>
      {eyebrow && (
        <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-gold/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-gold-dark">
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-3xl sm:text-4xl font-bold ${
          light ? "text-cream" : "text-royal-dark"
        }`}
      >
        {title}
      </h2>
      <div className="mt-3 h-[3px] w-16 rounded-full bg-gold-gradient" />
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-base sm:text-lg leading-relaxed ${
            light ? "text-cream/75" : "text-royal-dark/70"
          } ${align === "left" ? "" : "mx-auto"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
