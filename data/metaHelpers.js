export function buildServiceMetadata(service) {
  return {
    title: service.seoTitle,
    description: service.metaDescription,
    alternates: { canonical: `/${service.slug}` },
    openGraph: {
      title: service.seoTitle,
      description: service.metaDescription,
      url: `/${service.slug}`,
    },
  };
}

export function buildLocationMetadata(location) {
  return {
    title: location.seoTitle,
    description: location.metaDescription,
    alternates: { canonical: `/${location.slug}` },
    openGraph: {
      title: location.seoTitle,
      description: location.metaDescription,
      url: `/${location.slug}`,
    },
  };
}
