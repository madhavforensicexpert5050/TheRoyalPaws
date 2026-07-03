import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import ServiceCard from "@/components/ServiceCard";
import SectionHeading from "@/components/SectionHeading";
import OwnerSection from "@/components/OwnerSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import LocationNAP from "@/components/LocationNAP";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Icon from "@/components/Icon";
import JsonLd from "@/components/JsonLd";
import { services } from "@/data/services";
import { homeFaqs } from "@/data/homeFaqs";
import { webPageSchema } from "@/data/schema";
import { withBasePath } from "@/data/basePath";

export const metadata = {
  title: "Premium Pet Store & Grooming Services in Bathinda",
  description:
    "The Royal Paws is a premium pet store in Bathinda offering pet food, accessories, grooming, dog boarding, and home delivery. Visit Baba Farid Nagar or call 7791901085.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "The Royal Paws — Premium Pet Store & Grooming Services in Bathinda",
    description:
      "Premium pet food, accessories, grooming, boarding, and home delivery for dogs and cats in Bathinda.",
    url: "/",
  },
};

function HomeFeatureImage({ src, alt }) {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl2 border border-gold/25 bg-royal-dark shadow-card">
        <Image
          src={withBasePath(src)}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 448px, 100vw"
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-royal-dark/20 via-transparent to-transparent" />
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          title: metadata.title,
          description: metadata.description,
          path: "/",
        })}
      />

      <Hero />
      <TrustStrip />

      <section className="bg-cream" id="services">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Services"
            title="Everything Your Pet Needs, In One Place"
            subtitle="From premium food to grooming, boarding, and delivery — explore how The Royal Paws cares for dogs and cats across Bathinda."
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

      <OwnerSection />
      <WhyChooseUs />

      <section className="bg-cream">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Grooming"
              title="Pet Grooming Services in Bathinda"
            />
            <p className="text-royal-dark/80 leading-relaxed">
              Our grooming service focuses on bathing, coat care, and hygiene
              support, delivered with comfort-focused pet handling. We take a
              calm, patient approach so your dog feels at ease throughout the
              visit.
            </p>
            <Link
              href="/pet-grooming-bathinda"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-gold-dark hover:text-royal"
            >
              Explore Grooming Services
              <Icon name="arrowRight" strokeOnly className="w-4 h-4" />
            </Link>
          </div>
          <HomeFeatureImage
            src="/images/brand/home-grooming.webp"
            alt="Premium pet grooming care at The Royal Paws in Bathinda"
          />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
          <div className="order-2 lg:order-1">
            <HomeFeatureImage
              src="/images/brand/home-boarding.webp"
              alt="Comfortable dog boarding room at The Royal Paws in Bathinda"
            />
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeading
              align="left"
              eyebrow="Dog Boarding"
              title="Dog Boarding & Dog Hostel in Bathinda"
            />
            <p className="text-royal-dark/80 leading-relaxed">
              A safe, comfortable, clean, and pet-friendly stay environment
              for your dog whenever you are travelling. Call us to check
              availability before your travel dates.
            </p>
            <Link
              href="/dog-boarding-hostel-bathinda"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-gold-dark hover:text-royal"
            >
              Explore Dog Boarding
              <Icon name="arrowRight" strokeOnly className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Food & Accessories"
              title="Premium Pet Food & Accessories"
            />
            <p className="text-royal-dark/80 leading-relaxed">
              Explore quality-assured food, toys, grooming products,
              accessories, and daily care items for your dog or cat — all
              chosen with everyday reliability in mind.
            </p>
            <Link
              href="/premium-pet-food-bathinda"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-gold-dark hover:text-royal"
            >
              Explore Pet Food & Accessories
              <Icon name="arrowRight" strokeOnly className="w-4 h-4" />
            </Link>
          </div>
          <HomeFeatureImage
            src="/images/brand/home-products.webp"
            alt="Premium pet food, toys, collars, bowls, and accessories at The Royal Paws"
          />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
          <div className="order-2 lg:order-1">
            <HomeFeatureImage
              src="/images/brand/home-delivery.webp"
              alt="Pet food and accessory home delivery from The Royal Paws in Bathinda"
            />
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeading
              align="left"
              eyebrow="Home Delivery"
              title="Pet Product Home Delivery Available in Bathinda"
            />
            <p className="text-royal-dark/80 leading-relaxed">
              Call us to check product availability and delivery options for
              your address. We aim to make routine pet care essentials easy
              to access, even on your busiest days.
            </p>
            <Link
              href="/home-delivery-pet-products-bathinda"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-gold-dark hover:text-royal"
            >
              Explore Home Delivery
              <Icon name="arrowRight" strokeOnly className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <LocationNAP />

      <FAQ faqs={homeFaqs} />

      <CTASection />
    </>
  );
}
