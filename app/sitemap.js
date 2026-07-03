import { siteConfig } from "@/data/siteConfig";
import { services } from "@/data/services";
import { locations } from "@/data/locations";

export default function sitemap() {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions",
    "/disclaimer",
    "/refund-policy",
    "/shipping-policy",
  ];

  const serviceRoutes = services.map((s) => `/${s.slug}`);
  const locationRoutes = locations.map((l) => `/${l.slug}`);

  const allRoutes = [...staticRoutes, ...serviceRoutes, ...locationRoutes];

  return allRoutes.map((route) => ({
    url: `${siteConfig.siteUrl}${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
