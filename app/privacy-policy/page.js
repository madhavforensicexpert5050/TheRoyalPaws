import LegalLayout from "@/components/LegalLayout";
import { mailHref, telHref, siteConfig } from "@/data/siteConfig";

export const metadata = {
  title: "Privacy Policy | The Royal Paws",
  description:
    "Read the privacy policy for The Royal Paws, a pet store in Bathinda, covering how customer information is collected and used.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      description="How The Royal Paws handles information shared by customers and website visitors."
      path="/privacy-policy"
      updated="July 3, 2026"
    >
      <div>
        <h2>Overview</h2>
        <p>
          The Royal Paws (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or
          &ldquo;our&rdquo;) operates a pet store, grooming, dog boarding, and
          home delivery business in Bathinda. This Privacy Policy explains
          how we handle information you share with us when you visit our
          store, call us, email us, or use this website.
        </p>
      </div>

      <div>
        <h2>Information We Collect</h2>
        <p>
          We may collect basic information that you choose to share with us,
          such as your name, phone number, email address, and delivery
          address, when you contact us for product availability, grooming
          bookings, dog boarding enquiries, or home delivery requests. We do
          not collect sensitive personal information through this website.
        </p>
      </div>

      <div>
        <h2>How We Use Information</h2>
        <ul>
          <li>To respond to enquiries about products, services, or availability</li>
          <li>To arrange home delivery of pet products to your address</li>
          <li>To confirm grooming appointments or dog boarding bookings</li>
          <li>To communicate with you about your order or booking</li>
        </ul>
        <p>
          We do not sell or rent customer information to third parties.
        </p>
      </div>

      <div>
        <h2>Information Sharing</h2>
        <p>
          We only use the information you provide to serve you as a
          customer of The Royal Paws. We do not share your personal
          information with third parties except where necessary to fulfil a
          delivery or as required by law.
        </p>
      </div>

      <div>
        <h2>Website Usage</h2>
        <p>
          This website is a static informational website designed to help
          pet parents in Bathinda learn about our products and services. It
          does not include an online checkout or account system at this
          time.
        </p>
      </div>

      <div>
        <h2>Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy or how your
          information is handled, please contact {siteConfig.name} at{" "}
          <a href={telHref}>{siteConfig.phone}</a> or{" "}
          <a href={mailHref}>{siteConfig.email}</a>.
        </p>
      </div>
    </LegalLayout>
  );
}
