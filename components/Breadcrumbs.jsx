import Link from "next/link";
import Icon from "./Icon";

export default function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="w-full">
      <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-4 py-3 text-xs sm:text-sm text-cream/70 sm:px-6 lg:px-8">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-2">
              {index > 0 && <span className="text-gold/50">/</span>}
              {isLast ? (
                <span className="text-gold-light font-medium">{item.label}</span>
              ) : (
                <Link href={item.href} className="hover:text-gold-light transition-colors">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
