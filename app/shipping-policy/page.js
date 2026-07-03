import LegalLayout from "@/components/LegalLayout";
import { mailHref, telHref, siteConfig } from "@/data/siteConfig";

export const metadata = {
  title: "Shipping Policy | The Royal Paws",
  description:
    "Shipping and home delivery policy for The Royal Paws pet store in Bathinda. Call 7791901085 to check delivery options for your address.",
  alternates: { canonical: "/shipping-policy" },
};

export default function ShippingPolicyPage() {
  return (
    <LegalLayout
      title="Shipping Policy"
      description="How home delivery works for pet food and accessories ordered from The Royal Paws."
      path="/shipping-policy"
      updated="July 3, 2026"
    >
      <div>
        <h2>Home Delivery Availability</h2>
        <p>
          The Royal Paws offers home delivery for pet food and accessories
          in parts of Bathinda. Delivery coverage can vary by area, so we
          recommend confirming availability for your specific address
          before placing an order.
        </p>
      </div>

      <div>
        <h2>How to Place a Delivery Order</h2>
        <p>
          Call {siteConfig.phone} or email {siteConfig.email} with the
          products you would like to order and your delivery address. Our
          team will confirm whether delivery is available for your
          location and share the next steps.
        </p>
      </div>

      <div>
        <h2>Delivery Timing</h2>
        <p>
          Delivery timing is confirmed directly with you at the time of
          your order, based on product availability and your location
          within Bathinda. If you need your order urgently, please mention
          this when placing your request.
        </p>
      </div>

      <div>
        <h2>Order Accuracy</h2>
        <p>
          Please confirm your address and contact details clearly when
          placing a delivery order so we can ensure your products reach you
          without delay.
        </p>
      </div>

      <div>
        <h2>Areas Outside Delivery Coverage</h2>
        <p>
          If your address falls outside our current delivery coverage, you
          are welcome to visit our store at Baba Farid Nagar, Street No. 5,
          Bathinda to purchase products in person.
        </p>
      </div>

      <div>
        <h2>Contact Us</h2>
        <p>
          For any questions about home delivery, please contact{" "}
          {siteConfig.name} at <a href={telHref}>{siteConfig.phone}</a> or{" "}
          <a href={mailHref}>{siteConfig.email}</a>.
        </p>
      </div>
    </LegalLayout>
  );
}
