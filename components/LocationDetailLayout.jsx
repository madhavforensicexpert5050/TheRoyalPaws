import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";
import PageHero from "./PageHero";
import SectionHeading from "./SectionHeading";
import FAQ from "./FAQ";
import CTASection from "./CTASection";
import LocationNAP from "./LocationNAP";
import JsonLd from "./JsonLd";
import { getServiceBySlug } from "@/data/services";
import {
  breadcrumbSchema,
  faqSchema,
  webPageSchema,
} from "@/data/schema";

export default function LocationDetailLayout({ location }) {
  const related = location.relatedServices
    .map((slug) => getServiceBySlug(slug))
    .filter(Boolean);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: location.h1, href: `/${location.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: location.seoTitle,
            description: location.metaDescription,
            path: `/${location.slug}`,
          }),
          breadcrumbSchema(breadcrumbs),
          faqSchema(location.faqs),
        ]}
      />

      <PageHero
        eyebrow="Bathinda Location Guide"
        title={location.h1}
        subtitle={location.intro}
        breadcrumbs={breadcrumbs}
        image={location.image}
        imageAlt={location.imageAlt}
        imagePriority
      />

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Available Here"
                title="Services Available"
              />
              <ul className="space-y-3">
                {location.servicesAvailable.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group flex items-center justify-between gap-3 rounded-xl border border-gold/15 bg-cream/50 px-5 py-3.5 transition-colors hover:border-gold/40 hover:bg-cream"
                    >
                      <span className="flex items-center gap-3 text-royal-dark font-medium">
                        <Icon name="paw" className="w-4 h-4 text-gold-dark" />
                        {item.label}
                      </span>
                      <Icon
                        name="arrowRight"
                        strokeOnly
                        className="w-4 h-4 text-gold-dark transition-transform group-hover:translate-x-1"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeading
                align="left"
                eyebrow="Why Choose Us"
                title="Why Choose The Royal Paws"
              />
              <ul className="space-y-3">
                {location.whyChoose.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-gradient">
                      <Icon name="check" strokeOnly className="w-3.5 h-3.5 text-royal-dark" />
                    </span>
                    <span className="text-royal-dark/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <LocationNAP />

      {related.length > 0 && (
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Explore More" title="Related Services" />
            <div className="grid gap-6 sm:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/${item.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-gold/15 bg-cream/50 shadow-card transition-all hover:-translate-y-1 hover:shadow-gold"
                >
                  {item.image && (
                    <div className="relative aspect-[16/10] overflow-hidden bg-royal-dark">
                      <Image
                        src={item.image}
                        alt={item.imageAlt || item.name}
                        fill
                        sizes="(min-width: 640px) 33vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-royal-dark/35 via-transparent to-transparent" />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-royal-gradient">
                      <Icon name={item.icon} className="w-5 h-5 text-gold-light" />
                    </span>
                    <h3 className="font-display text-lg font-bold text-royal-dark">
                      {item.name}
                    </h3>
                    <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-gold-dark">
                      Learn More
                      <Icon name="arrowRight" strokeOnly className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <FAQ faqs={location.faqs} title="Frequently Asked Questions" />

      <CTASection />
    </>
  );
}
