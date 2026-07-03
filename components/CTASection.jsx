import Icon from "./Icon";
import { siteConfig, telHref } from "@/data/siteConfig";

export default function CTASection({
  title = "Give Your Pet the Royal Care They Deserve",
  subtitle = "Call us today or visit The Royal Paws in Bathinda for premium pet food, accessories, grooming, and boarding.",
  primaryLabel = `Call ${siteConfig.phone}`,
  primaryHref = telHref,
  secondaryLabel = "Visit The Royal Paws in Bathinda",
  secondaryHref = "/contact",
}) {
  return (
    <section className="relative overflow-hidden bg-royal-gradient">
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <Icon name="crown" className="absolute left-10 -top-6 w-28 h-28 text-gold" />
        <Icon name="paw" className="absolute right-10 bottom-0 w-32 h-32 text-gold rotate-12" />
      </div>
      <div className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-bold text-cream sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg">
          {subtitle}
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href={primaryHref}
            className="flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-7 py-3.5 text-sm font-semibold text-royal-dark shadow-gold transition-transform hover:scale-105"
          >
            <Icon name="phone" className="w-4 h-4" />
            {primaryLabel}
          </a>
          <a
            href={secondaryHref}
            className="flex items-center justify-center gap-2 rounded-full border-2 border-gold/60 px-7 py-3.5 text-sm font-semibold text-gold-light transition-colors hover:bg-gold/10"
          >
            {secondaryLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
