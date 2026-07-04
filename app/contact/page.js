import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import LocationNAP from "@/components/LocationNAP";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import {
  siteConfig,
  telHref,
  mailHref,
  directionsHref,
} from "@/data/siteConfig";
import { breadcrumbSchema, webPageSchema } from "@/data/schema";

export const metadata = {
  title: "Contact The Royal Paws | Pet Store in Bathinda",
  description:
    "Contact The Royal Paws in Bathinda for pet food, grooming, boarding, home delivery, and product availability. Call 7791901085 or visit Baba Farid Nagar.",
  alternates: { canonical: "/contact/" },
  openGraph: {
    title: "Contact The Royal Paws | Pet Store in Bathinda",
    description:
      "Call, email, or visit The Royal Paws at Baba Farid Nagar, Street No. 5, Bathinda.",
    url: "/contact/",
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Contact", href: "/contact" },
];

const contactFaqs = [
  {
    q: "How do I check product availability before visiting?",
    a: "Call us at 7791901085 or email theroyalpaws85@gmail.com with the product you are looking for, and our team will confirm current stock.",
  },
  {
    q: "How can I ask about grooming appointment timing?",
    a: "Call 7791901085 to discuss your pet's grooming needs and check available timing at our Baba Farid Nagar store.",
  },
  {
    q: "How do I check dog boarding availability for my travel dates?",
    a: "Call or email us with your travel dates and details about your dog, and we will confirm boarding availability.",
  },
  {
    q: "Can I ask about home delivery for my area?",
    a: "Yes, share your address by phone or email and we will let you know if home delivery covers your location in Bathinda.",
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: metadata.title,
            description: metadata.description,
            path: "/contact",
          }),
          breadcrumbSchema(breadcrumbs),
        ]}
      />

      <PageHero
        eyebrow="Get In Touch"
        title="Contact The Royal Paws"
        subtitle="We're here to help with product availability, grooming details, boarding availability, delivery options, and store visits."
        breadcrumbs={breadcrumbs}
      />

      <section className="bg-cream">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How Can We Help?"
            title="Reach Out for Anything Pet-Related"
            subtitle="Whether you need to check stock, book a grooming visit, confirm dog boarding availability, or ask about home delivery — call or email us and our team will guide you."
          />
          <div className="grid gap-6 sm:grid-cols-3">
            <a
              href={telHref}
              className="flex flex-col items-center gap-3 rounded-2xl border border-gold/20 bg-white p-7 text-center shadow-card transition-transform hover:-translate-y-1 hover:shadow-gold"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-gradient">
                <Icon name="phone" className="w-6 h-6 text-royal-dark" />
              </span>
              <h3 className="font-display text-lg font-bold text-royal-dark">Call Now</h3>
              <p className="text-sm text-royal-dark/70">{siteConfig.phone}</p>
            </a>
            <a
              href={mailHref}
              className="flex flex-col items-center gap-3 rounded-2xl border border-gold/20 bg-white p-7 text-center shadow-card transition-transform hover:-translate-y-1 hover:shadow-gold"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-gradient">
                <Icon name="mail" className="w-6 h-6 text-royal-dark" />
              </span>
              <h3 className="font-display text-lg font-bold text-royal-dark">Email Us</h3>
              <p className="text-sm text-royal-dark/70 break-all">{siteConfig.email}</p>
            </a>
            <a
              href={directionsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 rounded-2xl border border-gold/20 bg-white p-7 text-center shadow-card transition-transform hover:-translate-y-1 hover:shadow-gold"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-gradient">
                <Icon name="directions" className="w-6 h-6 text-royal-dark" />
              </span>
              <h3 className="font-display text-lg font-bold text-royal-dark">Get Directions</h3>
              <p className="text-sm text-royal-dark/70">{siteConfig.address}</p>
            </a>
          </div>
        </div>
      </section>

      <LocationNAP
        title="The Royal Paws — Baba Farid Nagar, Bathinda"
        subtitle="Owned by Abhishek Goyal. Visit us, call, or send an email — we're happy to help with anything pet-related."
      />

      <FAQ faqs={contactFaqs} title="Contact FAQs" />
    </>
  );
}
