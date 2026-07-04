import LegalLayout from "@/components/LegalLayout";
import { mailHref, telHref, siteConfig } from "@/data/siteConfig";

export const metadata = {
  title: "Disclaimer | The Royal Paws",
  description:
    "Disclaimer for The Royal Paws pet store in Bathinda regarding product, grooming, and boarding information shared on this website.",
  alternates: { canonical: "/disclaimer/" },
};

export default function DisclaimerPage() {
  return (
    <LegalLayout
      title="Disclaimer"
      description="Important information about how to interpret the content on this website."
      path="/disclaimer/"
      updated="July 3, 2026"
    >
      <div>
        <h2>General Information Only</h2>
        <p>
          The content on this website is provided by The Royal Paws for
          general informational purposes about our pet store, grooming,
          boarding, and home delivery services in Bathinda. It is not
          intended as professional, medical, or veterinary advice of any
          kind.
        </p>
      </div>

      <div>
        <h2>No Veterinary or Medical Advice</h2>
        <p>
          The Royal Paws is a pet store and pet care business, not a
          veterinary clinic. Nothing on this website should be taken as
          medical or veterinary advice. For any health-related concerns
          regarding your pet, please consult a licensed veterinarian.
        </p>
      </div>

      <div>
        <h2>Grooming and Boarding Services</h2>
        <p>
          Our grooming service covers general bathing, coat care, and
          hygiene support. Our dog boarding and hostel service provides a
          safe, clean, pet-friendly stay environment. Neither service
          includes medical treatment. Availability of both services should
          be confirmed directly with our team by phone.
        </p>
      </div>

      <div>
        <h2>Product Availability</h2>
        <p>
          Product listings, descriptions, and categories described on this
          website reflect our general range and may not always match
          current in-store stock. Please call {siteConfig.phone} to confirm
          availability of a specific product before visiting or ordering.
        </p>
      </div>

      <div>
        <h2>External Links</h2>
        <p>
          This website may contain links to external services, such as
          Google Maps, for your convenience. We are not responsible for the
          content or practices of external websites or services.
        </p>
      </div>

      <div>
        <h2>Contact Us</h2>
        <p>
          If you have any questions about this disclaimer, please contact{" "}
          {siteConfig.name} at <a href={telHref}>{siteConfig.phone}</a> or{" "}
          <a href={mailHref}>{siteConfig.email}</a>.
        </p>
      </div>
    </LegalLayout>
  );
}
