import LocationDetailLayout from "@/components/LocationDetailLayout";
import { getLocationBySlug } from "@/data/locations";
import { buildLocationMetadata } from "@/data/metaHelpers";

const location = getLocationBySlug("pet-grooming-baba-farid-nagar-bathinda");

export const metadata = buildLocationMetadata(location);

export default function Page() {
  return <LocationDetailLayout location={location} />;
}
