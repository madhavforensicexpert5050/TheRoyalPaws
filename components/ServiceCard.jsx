import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon";

export default function ServiceCard({
  icon,
  name,
  shortDescription,
  href,
  image,
  imageAlt,
}) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-gold/15 bg-white shadow-card transition-all hover:-translate-y-1 hover:border-gold/40 hover:shadow-gold">
      {image && (
        <div className="relative aspect-[16/10] overflow-hidden bg-royal-dark">
          <Image
            src={image}
            alt={imageAlt || name}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-royal-dark/45 via-transparent to-transparent" />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
      <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-royal-gradient shadow-gold">
        <Icon name={icon} className="w-7 h-7 text-gold-light" />
      </span>
      <h3 className="font-display text-xl font-bold text-royal-dark">{name}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-royal-dark/70">
        {shortDescription}
      </p>
      <Link
        href={href}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-dark transition-colors group-hover:text-royal"
      >
        Learn More
        <Icon name="arrowRight" className="w-4 h-4" strokeOnly />
      </Link>
      </div>
    </div>
  );
}
