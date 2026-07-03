import LocationDetailLayout from "@/components/LocationDetailLayout";
import { getLocationBySlug } from "@/data/locations";
import { buildLocationMetadata } from "@/data/metaHelpers";

const location = getLocationBySlug("dog-boarding-bathinda");

export const metadata = buildLocationMetadata(location);

export default function Page() {
  return <LocationDetailLayout location={location} />;
}
