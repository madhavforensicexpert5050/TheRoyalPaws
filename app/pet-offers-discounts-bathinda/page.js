import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { getServiceBySlug } from "@/data/services";
import { buildServiceMetadata } from "@/data/metaHelpers";

const service = getServiceBySlug("pet-offers-discounts-bathinda");

export const metadata = buildServiceMetadata(service);

export default function Page() {
  return <ServiceDetailLayout service={service} />;
}
