import Icon from "./Icon";
import MapEmbed from "./MapEmbed";
import SectionHeading from "./SectionHeading";
import {
  siteConfig,
  telHref,
  mailHref,
  directionsHref,
} from "@/data/siteConfig";

export default function LocationNAP({
  title = "Visit The Royal Paws in Bathinda",
  subtitle = "Stop by our store, call ahead, or drop us an email — we're happy to help.",
}) {
  return (
    <section className="bg-royal-gradient">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Find Us" title={title} subtitle={subtitle} light />
        <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch">
          <div className="flex flex-col justify-between rounded-2xl border border-gold/20 bg-royal-light/30 p-7 sm:p-8">
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold-gradient">
                  <Icon name="pin" className="w-4 h-4 text-royal-dark" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gold-light/80">
                    Business Name
                  </p>
                  <p className="font-display text-lg font-semibold text-cream">
                    {siteConfig.name}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold-gradient">
                  <Icon name="crown" className="w-4 h-4 text-royal-dark" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gold-light/80">
                    Owner
                  </p>
                  <p className="text-cream/90">{siteConfig.owner}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold-gradient">
                  <Icon name="mapPin" className="w-4 h-4 text-royal-dark" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gold-light/80">
                    Address
                  </p>
                  <p className="text-cream/90">{siteConfig.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold-gradient">
                  <Icon name="phone" className="w-4 h-4 text-royal-dark" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gold-light/80">
                    Phone
                  </p>
                  <a href={telHref} className="text-cream/90 hover:text-gold-light">
                    {siteConfig.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold-gradient">
                  <Icon name="mail" className="w-4 h-4 text-royal-dark" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gold-light/80">
                    Email
                  </p>
                  <a href={mailHref} className="text-cream/90 hover:text-gold-light break-all">
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={directionsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-gold-gradient px-5 py-2.5 text-sm font-semibold text-royal-dark shadow-gold transition-transform hover:scale-105"
              >
                <Icon name="directions" className="w-4 h-4" />
                Get Directions
              </a>
              <a
                href={telHref}
                className="flex items-center gap-2 rounded-full border-2 border-gold/50 px-5 py-2.5 text-sm font-semibold text-gold-light transition-colors hover:bg-gold/10"
              >
                <Icon name="phone" className="w-4 h-4" />
                Call Now
              </a>
              <a
                href={mailHref}
                className="flex items-center gap-2 rounded-full border-2 border-gold/50 px-5 py-2.5 text-sm font-semibold text-gold-light transition-colors hover:bg-gold/10"
              >
                <Icon name="mail" className="w-4 h-4" />
                Email Us
              </a>
            </div>
          </div>

          <MapEmbed />
        </div>
      </div>
    </section>
  );
}
