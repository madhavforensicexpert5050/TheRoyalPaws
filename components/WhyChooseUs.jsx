import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import { whyChooseUs } from "@/data/facilities";

export default function WhyChooseUs() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Why Choose The Royal Paws"
          subtitle="A premium, local pet care experience built around trust, comfort, and genuine care for your pet."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item) => (
            <div
              key={item.title}
              className="flex gap-4 rounded-2xl border border-gold/15 bg-cream/60 p-6 shadow-card"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-gradient">
                <Icon name={item.icon} className="w-5 h-5 text-royal-dark" />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-royal-dark">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-royal-dark/70">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
