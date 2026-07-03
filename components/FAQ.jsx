import Icon from "./Icon";
import SectionHeading from "./SectionHeading";

export default function FAQ({
  faqs,
  title = "Frequently Asked Questions",
  eyebrow = "FAQ",
  subtitle,
}) {
  if (!faqs || faqs.length === 0) return null;
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
        <div className="flex flex-col gap-4">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-xl border border-gold/20 bg-white px-5 py-4 shadow-card open:border-gold/50"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-semibold text-royal-dark sm:text-lg">
                {faq.q}
                <Icon
                  name="arrowRight"
                  strokeOnly
                  className="w-5 h-5 shrink-0 rotate-90 text-gold-dark transition-transform group-open:rotate-[270deg]"
                />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-royal-dark/75 sm:text-base">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
