import PageHero from "./PageHero";
import JsonLd from "./JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/data/schema";

export default function LegalLayout({ title, description, path, updated, children }) {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: title, href: path },
  ];

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ title, description, path }),
          breadcrumbSchema(breadcrumbs),
        ]}
      />
      <PageHero title={title} subtitle={description} breadcrumbs={breadcrumbs} />
      <section className="bg-cream">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
          {updated && (
            <p className="mb-8 text-sm font-medium text-royal-dark/60">
              Last updated: {updated}
            </p>
          )}
          <div className="space-y-8 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-royal-dark [&_h2]:mb-3 [&_p]:text-royal-dark/80 [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1.5 [&_ul]:text-royal-dark/80 [&_li]:leading-relaxed [&_a]:text-gold-dark [&_a]:font-medium hover:[&_a]:text-royal">
            {children}
          </div>
        </div>
      </section>
    </>
  );
}
