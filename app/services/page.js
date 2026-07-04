import ServiceCard from "@/components/ServiceCard";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { services } from "@/data/services";
import { homeFaqs } from "@/data/homeFaqs";
import { breadcrumbSchema, webPageSchema } from "@/data/schema";

export const metadata = {
  title: "Pet Care Services in Bathinda | The Royal Paws",
  description:
    "Explore all pet care services from The Royal Paws in Bathinda — premium pet food, accessories, grooming, dog boarding, home delivery, and more.",
  alternates: { canonical: "/services/" },
  openGraph: {
    title: "Pet Care Services in Bathinda | The Royal Paws",
    description:
      "Premium pet food, accessories, grooming, boarding, home delivery, and offers — all available at The Royal Paws in Bathinda.",
    url: "/services/",
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: metadata.title,
            description: metadata.description,
            path: "/services",
          }),
          breadcrumbSchema(breadcrumbs),
        ]}
      />

      <PageHero
        eyebrow="What We Offer"
        title="Pet Care Services in Bathinda"
        subtitle="Everything your dog or cat needs — premium food, accessories, grooming, boarding, home delivery, and more — all in one trusted Bathinda pet store."
        breadcrumbs={breadcrumbs}
      />

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Full Range"
            title="Explore Our Services"
            subtitle="Tap any service below to learn more about how The Royal Paws supports pet parents across Bathinda."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                icon={service.icon}
                name={service.name}
                shortDescription={service.shortDescription}
                href={`/${service.slug}`}
                image={service.image}
                imageAlt={service.imageAlt}
              />
            ))}
          </div>
        </div>
      </section>

      <FAQ faqs={homeFaqs} />

      <CTASection />
    </>
  );
}
