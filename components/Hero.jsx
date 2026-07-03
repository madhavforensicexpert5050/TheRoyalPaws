import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";
import { siteConfig, telHref } from "@/data/siteConfig";
import { withBasePath } from "@/data/basePath";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-royal-gradient">
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <Icon name="paw" className="absolute -left-8 top-16 w-40 h-40 text-gold rotate-12" />
        <Icon name="paw" className="absolute right-0 bottom-0 w-56 h-56 text-gold -rotate-12" />
        <Icon name="crown" className="absolute left-1/2 top-4 w-24 h-24 text-gold" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-28">
        <div>
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold-light">
            <Icon name="crown" className="w-4 h-4" />
            Bathinda&rsquo;s Premium Pet Store
          </span>
          <h1 className="font-display text-4xl font-bold leading-tight text-cream sm:text-5xl lg:text-[3.25rem]">
            The Royal Paws — Premium Pet Store &amp; Grooming Services in Bathinda
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg">
            From quality pet food and accessories to grooming, boarding, and
            home delivery, The Royal Paws helps pet parents care for their
            dogs and cats with love, comfort, and convenience.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={telHref}
              className="flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-7 py-3.5 text-sm font-semibold text-royal-dark shadow-gold transition-transform hover:scale-105"
            >
              <Icon name="phone" className="w-4 h-4" />
              Call {siteConfig.phone}
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 rounded-full border-2 border-gold/60 px-7 py-3.5 text-sm font-semibold text-gold-light transition-colors hover:bg-gold/10"
            >
              Visit Our Store
              <Icon name="arrowRight" className="w-4 h-4" strokeOnly />
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl2 border border-gold/25 bg-royal-dark shadow-gold">
            <Image
              src={withBasePath("/images/brand/home-hero.webp")}
              alt="Premium pet store, grooming, and pet care experience at The Royal Paws in Bathinda"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-royal-dark/30 via-transparent to-transparent" />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { icon: "food", label: "Premium Food" },
              { icon: "grooming", label: "Grooming" },
              { icon: "boarding", label: "Boarding" },
              { icon: "delivery", label: "Delivery" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-center gap-2 rounded-lg border border-gold/25 bg-royal-dark/55 px-3 py-3 text-center backdrop-blur-sm"
              >
                <Icon name={item.icon} className="h-4 w-4 shrink-0 text-gold-light" />
                <span className="text-xs font-semibold text-cream/90">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
