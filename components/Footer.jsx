import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";
import { siteConfig, telHref, mailHref } from "@/data/siteConfig";
import {
  footerQuickLinks,
  footerServiceLinks,
  footerLegalLinks,
} from "@/data/navigation";
import { withBasePath } from "@/data/basePath";

export default function Footer() {
  return (
    <footer className="bg-royal-dark text-cream/80">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="mb-4 flex items-center bg-transparent leading-none">
              <Image
                src={withBasePath(siteConfig.logo)}
                alt="The Royal Paws logo"
                width={252}
                height={63}
                className="block h-12 w-auto max-w-[200px] object-contain sm:h-14"
              />
            </span>
            <p className="font-display text-gold-light text-lg italic mb-3">
              {siteConfig.tagline}
            </p>
            <p className="text-sm leading-relaxed text-cream/70">
              Premium pet food, accessories, grooming, boarding, and home
              delivery for dogs and cats in Bathinda.
            </p>
          </div>

          <div>
            <h3 className="font-display text-gold text-base font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerQuickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/70 transition-colors hover:text-gold-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-gold text-base font-semibold mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {footerServiceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/70 transition-colors hover:text-gold-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-gold text-base font-semibold mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-cream/70">
              <li className="flex items-start gap-2">
                <Icon name="pin" className="w-4 h-4 mt-0.5 shrink-0 text-gold" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="phone" className="w-4 h-4 shrink-0 text-gold" />
                <a href={telHref} className="hover:text-gold-light">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="mail" className="w-4 h-4 shrink-0 text-gold" />
                <a href={mailHref} className="hover:text-gold-light break-all">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gold/15 pt-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-cream/60">
              &copy; {new Date().getFullYear()} The Royal Paws. All rights
              reserved. Owned by {siteConfig.owner}.
            </p>
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {footerLegalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-cream/60 transition-colors hover:text-gold-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
