import Icon from "./Icon";
import { siteConfig, telHref, mailHref } from "@/data/siteConfig";

export default function StickyCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex lg:hidden border-t border-gold/30 bg-royal-dark shadow-[0_-6px_20px_rgba(0,0,0,0.25)]">
      <a
        href={telHref}
        className="flex flex-1 items-center justify-center gap-2 bg-gold-gradient py-3.5 text-sm font-semibold text-royal-dark"
      >
        <Icon name="phone" className="w-4 h-4" />
        Call {siteConfig.phone}
      </a>
      <a
        href={mailHref}
        className="flex items-center justify-center gap-2 px-5 text-sm font-semibold text-gold-light"
        aria-label="Email The Royal Paws"
      >
        <Icon name="mail" className="w-5 h-5" />
      </a>
    </div>
  );
}
