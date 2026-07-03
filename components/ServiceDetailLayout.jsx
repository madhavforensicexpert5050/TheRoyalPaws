import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";
import PageHero from "./PageHero";
import SectionHeading from "./SectionHeading";
import FAQ from "./FAQ";
import CTASection from "./CTASection";
import JsonLd from "./JsonLd";
import { services, getServiceBySlug } from "@/data/services";
import { siteConfig } from "@/data/siteConfig";
import {
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
  webPageSchema,
} from "@/data/schema";

export default function ServiceDetailLayout({ service }) {
  const related = service.relatedServices
    .map((slug) => getServiceBySlug(slug))
    .filter(Boolean);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: service.name, href: `/${service.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: service.seoTitle,
            description: service.metaDescription,
            path: `/${service.slug}`,
          }),
          breadcrumbSchema(breadcrumbs),
          serviceSchema({
            name: service.name,
            description: service.metaDescription,
            path: `/${service.slug}`,
          }),
          faqSchema(service.faqs),
        ]}
      />

      <PageHero
        eyebrow="Bathinda Service"
        title={service.h1}
        subtitle={service.heroSubtext}
        breadcrumbs={breadcrumbs}
        image={service.image}
        imageAlt={service.imageAlt}
        imagePriority
      />

      <section className="bg-cream">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-gold/25 bg-white p-6 shadow-card sm:p-8">
            <p className="flex items-start gap-3 text-base leading-relaxed text-royal-dark/80">
              <Icon name="paw" className="mt-1 w-5 h-5 shrink-0 text-gold-dark" />
              <span>{service.answerBlock}</span>
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-4xl px-4 pb-14 sm:px-6 lg:px-8">
          <div className="space-y-5">
            {service.explanation.map((para, i) => (
              <p key={i} className="text-base leading-relaxed text-royal-dark/80">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Benefits"
                title="Why Pet Parents Choose This Service"
              />
              <ul className="space-y-3">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-gradient">
                      <Icon name="check" strokeOnly className="w-3.5 h-3.5 text-royal-dark" />
                    </span>
                    <span className="text-royal-dark/80">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeading
                align="left"
                eyebrow="What To Expect"
                title="Your Visit at The Royal Paws"
              />
              <ul className="space-y-3">
                {service.expect.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-royal-gradient">
                      <Icon name="paw" className="w-3.5 h-3.5 text-gold-light" />
                    </span>
                    <span className="text-royal-dark/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-cream">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Explore More"
              title="Related Services in Bathinda"
            />
            <div className="grid gap-6 sm:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/${item.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-gold/15 bg-white shadow-card transition-all hover:-translate-y-1 hover:shadow-gold"
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

      <FAQ faqs={service.faqs} title={`${service.name} — Frequently Asked Questions`} />

      <CTASection />
    </>
  );
}
