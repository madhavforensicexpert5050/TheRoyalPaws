import LegalLayout from "@/components/LegalLayout";
import { mailHref, telHref, siteConfig } from "@/data/siteConfig";

export const metadata = {
  title: "Refund Policy | The Royal Paws",
  description:
    "Refund and exchange policy for The Royal Paws pet store in Bathinda, covering products, grooming, and dog boarding services.",
  alternates: { canonical: "/refund-policy/" },
};

export default function RefundPolicyPage() {
  return (
    <LegalLayout
      title="Refund Policy"
      description="Our general approach to refunds and exchanges for products and services."
      path="/refund-policy/"
      updated="July 3, 2026"
    >
      <div>
        <h2>Our Approach</h2>
        <p>
          At The Royal Paws, we want every pet parent in Bathinda to feel
          confident about their purchase. Because refund and exchange
          situations can vary by product and circumstance, we handle these
          requests directly and personally rather than through a fixed
          online process.
        </p>
      </div>

      <div>
        <h2>Products</h2>
        <p>
          If you have a concern about a product purchased from The Royal
          Paws, please contact us as soon as possible with details of your
          purchase. Our team will review the situation and let you know the
          available options, which may include an exchange or refund
          depending on the product and its condition.
        </p>
      </div>

      <div>
        <h2>Grooming Services</h2>
        <p>
          For any concerns regarding a grooming visit, please speak with our
          team directly, either during your visit or by calling{" "}
          {siteConfig.phone} afterward, so we can understand and address
          your concern.
        </p>
      </div>

      <div>
        <h2>Dog Boarding</h2>
        <p>
          For questions regarding a dog boarding booking, including changes
          to travel dates or concerns during your dog&rsquo;s stay, please
          contact us directly so we can assist you as quickly as possible.
        </p>
      </div>

      <div>
        <h2>How to Request a Refund or Exchange</h2>
        <p>
          Call {siteConfig.phone} or email {siteConfig.email} with details
          of your purchase or booking. Our team will guide you through the
          next steps based on your specific situation.
        </p>
      </div>

      <div>
        <h2>Contact Us</h2>
        <p>
          For all refund, exchange, or store policy questions, please
          contact {siteConfig.name} at <a href={telHref}>{siteConfig.phone}</a>{" "}
          or <a href={mailHref}>{siteConfig.email}</a>.
        </p>
      </div>
    </LegalLayout>
  );
}
