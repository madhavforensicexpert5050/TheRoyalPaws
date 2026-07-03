import LegalLayout from "@/components/LegalLayout";
import { mailHref, telHref, siteConfig } from "@/data/siteConfig";

export const metadata = {
  title: "Terms and Conditions | The Royal Paws",
  description:
    "Terms and conditions for using the website and services of The Royal Paws, a pet store in Bathinda.",
  alternates: { canonical: "/terms-and-conditions" },
};

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms and Conditions"
      description="Please read these terms carefully before using our website or visiting our store."
      path="/terms-and-conditions"
      updated="July 3, 2026"
    >
      <div>
        <h2>Acceptance of Terms</h2>
        <p>
          By using this website or visiting The Royal Paws store in
          Bathinda, you agree to these terms and conditions. If you do not
          agree, please discontinue use of the website and contact us
          directly with any questions.
        </p>
      </div>

      <div>
        <h2>About Our Services</h2>
        <p>
          The Royal Paws offers pet food, pet accessories, grooming
          services, dog boarding, and home delivery in Bathinda. Product
          availability, service timing, and delivery options may change from
          time to time. We recommend calling {siteConfig.phone} to confirm
          details before visiting or placing an order.
        </p>
      </div>

      <div>
        <h2>Use of Website</h2>
        <p>
          This website is provided for informational purposes to help pet
          parents learn about our store, products, and services. You agree
          to use this website only for lawful purposes and not to misuse any
          content, images, or information published here.
        </p>
      </div>

      <div>
        <h2>Product and Service Information</h2>
        <p>
          We aim to keep information on this website accurate, but stock,
          pricing, and availability of products and services can change.
          Please contact us directly to confirm current details before
          visiting, ordering, or booking.
        </p>
      </div>

      <div>
        <h2>Bookings and Orders</h2>
        <p>
          Grooming appointments, dog boarding stays, and home delivery
          orders are confirmed directly through a phone call or email with
          our team. Please contact us for the most accurate and current
          information regarding availability.
        </p>
      </div>

      <div>
        <h2>Limitation of Liability</h2>
        <p>
          While we take care in selecting products and delivering services,
          The Royal Paws is not liable for indirect or incidental issues
          arising from the use of this website. For any concerns about a
          product or service, please contact us directly so we can assist
          you.
        </p>
      </div>

      <div>
        <h2>Changes to These Terms</h2>
        <p>
          We may update these terms and conditions from time to time. Any
          changes will be reflected on this page.
        </p>
      </div>

      <div>
        <h2>Contact Us</h2>
        <p>
          For any questions regarding these terms, please contact{" "}
          {siteConfig.name} at <a href={telHref}>{siteConfig.phone}</a> or{" "}
          <a href={mailHref}>{siteConfig.email}</a>.
        </p>
      </div>
    </LegalLayout>
  );
}
