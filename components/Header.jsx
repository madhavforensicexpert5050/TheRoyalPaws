"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";
import { siteConfig, telHref } from "@/data/siteConfig";
import { mainNav } from "@/data/navigation";
import { withBasePath } from "@/data/basePath";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileAccordion, setMobileAccordion] = useState(null);

  return (
    <header className="sticky top-0 z-50 bg-royal-dark shadow-card">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center bg-transparent leading-none"
          aria-label={siteConfig.name}
        >
          <Image
            src={withBasePath(siteConfig.logo)}
            alt="The Royal Paws logo"
            width={252}
            height={63}
            priority
            className="block h-11 w-auto max-w-[170px] object-contain sm:h-14 sm:max-w-[220px] lg:h-16"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {mainNav.map((item) => {
            if (!item.dropdown) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-md px-4 py-2 font-body text-sm font-medium text-cream/90 transition-colors hover:text-gold-light"
                >
                  {item.label}
                </Link>
              );
            }

            const isOpen = openMenu === item.label;

            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 rounded-md px-4 py-2 font-body text-sm font-medium text-cream/90 transition-colors hover:text-gold-light"
                    onClick={() => setOpenMenu(null)}
                  >
                    {item.label}
                    <Icon
                      name="arrowRight"
                      strokeOnly
                      className={`w-3.5 h-3.5 rotate-90 transition-transform ${isOpen ? "-rotate-90" : ""}`}
                    />
                  </Link>
                ) : (
                  <button
                    type="button"
                    className="flex items-center gap-1 rounded-md px-4 py-2 font-body text-sm font-medium text-cream/90 transition-colors hover:text-gold-light"
                    onClick={() => setOpenMenu(isOpen ? null : item.label)}
                    aria-expanded={isOpen}
                  >
                    {item.label}
                    <Icon
                      name="arrowRight"
                      strokeOnly
                      className={`w-3.5 h-3.5 rotate-90 transition-transform ${isOpen ? "-rotate-90" : ""}`}
                    />
                  </button>
                )}

                {isOpen && (
                  <div className="absolute left-0 top-full w-72 pt-2">
                    <div className="overflow-hidden rounded-xl border border-gold/20 bg-royal-dark py-2 shadow-card">
                      {item.dropdown.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setOpenMenu(null)}
                          className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-cream/85 transition-colors hover:bg-royal-light/40 hover:text-gold-light"
                        >
                          <Icon name="paw" className="w-3.5 h-3.5 shrink-0 text-gold-dark" />
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={telHref}
            className="flex items-center gap-2 rounded-full bg-gold-gradient px-5 py-2.5 text-sm font-semibold text-royal-dark shadow-gold transition-transform hover:scale-105"
          >
            <Icon name="phone" className="w-4 h-4" />
            Call {siteConfig.phone}
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden flex items-center justify-center rounded-md p-2 text-gold-light"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() =>
            setOpen((v) => {
              if (v) setMobileAccordion(null);
              return !v;
            })
          }
        >
          <Icon name={open ? "close" : "menu"} className="w-7 h-7" />
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-gold/20 bg-royal-dark px-4 pb-6 pt-4 sm:px-6">
          <nav className="flex flex-col gap-1">
            {mainNav.map((item) => {
              if (!item.dropdown) {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2.5 font-body text-base font-medium text-cream/90 transition-colors hover:bg-royal-light hover:text-gold-light"
                  >
                    {item.label}
                  </Link>
                );
              }

              const isExpanded = mobileAccordion === item.label;

              return (
                <div key={item.label}>
                  <div className="flex items-center justify-between rounded-lg pr-1">
                    {item.href ? (
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="flex-1 rounded-lg px-3 py-2.5 font-body text-base font-medium text-cream/90 transition-colors hover:bg-royal-light hover:text-gold-light"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <button
                        type="button"
                        onClick={() =>
                          setMobileAccordion(isExpanded ? null : item.label)
                        }
                        className="flex-1 rounded-lg px-3 py-2.5 text-left font-body text-base font-medium text-cream/90 transition-colors hover:bg-royal-light hover:text-gold-light"
                      >
                        {item.label}
                      </button>
                    )}
                    <button
                      type="button"
                      aria-label={`Toggle ${item.label} menu`}
                      aria-expanded={isExpanded}
                      onClick={() =>
                        setMobileAccordion(isExpanded ? null : item.label)
                      }
                      className="flex items-center justify-center rounded-lg p-2.5 text-gold-light"
                    >
                      <Icon
                        name="arrowRight"
                        strokeOnly
                        className={`w-4 h-4 rotate-90 transition-transform ${isExpanded ? "-rotate-90" : ""}`}
                      />
                    </button>
                  </div>
                  {isExpanded && (
                    <div className="ml-3 flex flex-col gap-0.5 border-l border-gold/20 pl-3">
                      {item.dropdown.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className="rounded-lg px-3 py-2 text-sm font-medium text-cream/80 transition-colors hover:bg-royal-light hover:text-gold-light"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
          <a
            href={telHref}
            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-5 py-3 text-sm font-semibold text-royal-dark shadow-gold"
          >
            <Icon name="phone" className="w-4 h-4" />
            Call {siteConfig.phone}
          </a>
        </div>
      )}
    </header>
  );
}
