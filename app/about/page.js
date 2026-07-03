import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import OwnerSection from "@/components/OwnerSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/data/schema";

export const metadata = {
  title: "About The Royal Paws | Premium Pet Store in Bathinda",
  description:
    "Learn about The Royal Paws, a premium pet store in Bathinda founded by Abhishek Goyal, offering pet food, accessories, grooming, boarding, and home delivery.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About The Royal Paws | Premium Pet Store in Bathinda",
    description:
      "The Royal Paws is a premium, family-run pet store in Bathinda dedicated to caring for dogs and cats with love and convenience.",
    url: "/about",
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: metadata.title,
            description: metadata.description,
            path: "/about",
          }),
          breadcrumbSchema(breadcrumbs),
        ]}
      />

      <PageHero
        eyebrow="Our Story"
        title="About The Royal Paws"
        subtitle="A premium, family-run pet store in Bathinda, built for the love of pets."
        breadcrumbs={breadcrumbs}
      />

      <section className="bg-cream">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading align="left" eyebrow="Who We Are" title="For the Love of Pets" />
          <div className="space-y-5 text-royal-dark/80 leading-relaxed">
            <p>
              The Royal Paws is a premium pet care and pet store business
              based in Baba Farid Nagar, Street No. 5, Bathinda. Founded by
              Abhishek Goyal, our store was created with a simple idea in
              mind: pet parents in Bathinda deserve a place that treats
              their dogs and cats with genuine care, not just as customers.
            </p>
            <p>
              We bring together premium pet food, everyday accessories,
              grooming support, and dog boarding under one roof, along with
              home delivery options for pet parents who cannot always visit
              in person. Every part of the store — from the products on our
              shelves to the way our team interacts with pets — reflects our
              commitment to comfort, quality, and trust.
            </p>
            <p>
              As a local, family-run business, we understand the Bathinda
              pet-parent community personally. We are not a large,
              impersonal chain — we are neighbours who happen to love pets
              as much as you do, and we built The Royal Paws to be a store
              where that shows in every visit.
            </p>
            <p>
              Our name reflects how we feel about every pet that walks
              through our doors — like royalty. Whether you are here for
              daily essentials, a grooming appointment, or to book a
              boarding stay for your dog, our goal is the same: to make pet
              care in Bathinda easier, more reliable, and more loving.
            </p>
          </div>
        </div>
      </section>

      <OwnerSection />
      <WhyChooseUs />

      <section className="bg-cream">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Promise"
            title="What The Royal Paws Stands For"
          />
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-gold/20 bg-white p-6 text-center shadow-card">
              <Icon name="heart" className="mx-auto mb-4 w-9 h-9 text-gold-dark" />
              <h3 className="font-display text-lg font-bold text-royal-dark">
                Made With Love For Pets
              </h3>
              <p className="mt-2 text-sm text-royal-dark/70">
                Every decision at The Royal Paws is guided by what is best
                for the comfort and happiness of your pet.
              </p>
            </div>
            <div className="rounded-2xl border border-gold/20 bg-white p-6 text-center shadow-card">
              <Icon name="check" strokeOnly className="mx-auto mb-4 w-9 h-9 text-gold-dark" />
              <h3 className="font-display text-lg font-bold text-royal-dark">
                Quality Assured Products
              </h3>
              <p className="mt-2 text-sm text-royal-dark/70">
                We choose our range carefully, so pet parents can rely on
                consistent, trustworthy products.
              </p>
            </div>
            <div className="rounded-2xl border border-gold/20 bg-white p-6 text-center shadow-card">
              <Icon name="pin" className="mx-auto mb-4 w-9 h-9 text-gold-dark" />
              <h3 className="font-display text-lg font-bold text-royal-dark">
                Proudly Local to Bathinda
              </h3>
              <p className="mt-2 text-sm text-royal-dark/70">
                Based at Baba Farid Nagar, we are part of the Bathinda
                community we serve every day.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
