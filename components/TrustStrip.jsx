import Icon from "./Icon";
import { trustStrip } from "@/data/facilities";

export default function TrustStrip() {
  return (
    <section className="bg-cream border-b border-gold/10">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-10 sm:grid-cols-3 sm:px-6 lg:grid-cols-6 lg:px-8">
        {trustStrip.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center gap-3 rounded-xl px-3 py-5 text-center transition-colors hover:bg-white hover:shadow-card"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-royal-gradient">
              <Icon name={item.icon} className="w-6 h-6 text-gold-light" />
            </span>
            <span className="font-body text-sm font-semibold text-royal-dark">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
