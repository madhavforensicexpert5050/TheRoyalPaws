import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";
import Breadcrumbs from "./Breadcrumbs";
import { siteConfig, telHref } from "@/data/siteConfig";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  breadcrumbs,
  image,
  imageAlt,
  imagePriority = false,
}) {
  return (
    <section className="relative overflow-hidden bg-royal-gradient">
      {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <Icon name="paw" className="absolute -right-6 top-6 w-32 h-32 text-gold rotate-12" />
      </div>
      <div
        className={
          image
            ? "relative mx-auto grid max-w-7xl gap-10 px-4 py-12 text-center sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.9fr)] lg:items-center lg:px-8 lg:text-left"
            : "relative mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 sm:py-16 lg:px-8"
        }
      >
        <div>
          {eyebrow && (
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold-light">
              <Icon name="paw" className="w-3.5 h-3.5" />
              {eyebrow}
            </span>
          )}
          <h1 className="font-display text-3xl font-bold leading-tight text-cream sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p
              className={`mt-5 max-w-2xl text-base leading-relaxed text-cream/80 sm:text-lg ${
                image ? "mx-auto lg:mx-0" : "mx-auto"
              }`}
            >
              {subtitle}
            </p>
          )}
          <div
            className={`mt-8 flex flex-col gap-4 sm:flex-row ${
              image ? "justify-center lg:justify-start" : "justify-center"
            }`}
          >
            <a
              href={telHref}
              className="flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-6 py-3 text-sm font-semibold text-royal-dark shadow-gold transition-transform hover:scale-105"
            >
              <Icon name="phone" className="w-4 h-4" />
              Call {siteConfig.phone}
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 rounded-full border-2 border-gold/60 px-6 py-3 text-sm font-semibold text-gold-light transition-colors hover:bg-gold/10"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {image && (
          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl2 border border-gold/25 bg-royal-dark shadow-gold">
              <Image
                src={image}
                alt={imageAlt || title}
                fill
                priority={imagePriority}
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-royal-dark/25 via-transparent to-transparent" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
