import Image from "next/image";
import Icon from "./Icon";
import { telHref } from "@/data/siteConfig";
import { withBasePath } from "@/data/basePath";

export default function OwnerSection() {
  return (
    <section className="bg-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        <div className="order-2 lg:order-1">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-gold/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-gold-dark">
            In Abhishek&rsquo;s Words
          </span>
          <h2 className="font-display text-3xl font-bold text-royal-dark sm:text-4xl">
            Meet Abhishek Goyal
          </h2>
          <div className="mt-3 h-[3px] w-16 rounded-full bg-gold-gradient" />
          <p className="mt-6 text-lg leading-relaxed text-royal-dark/80">
            &ldquo;I started The Royal Paws with one simple thought — pets
            deserve care, comfort, and products that pet parents can
            trust.&rdquo;
          </p>
          <p className="mt-4 leading-relaxed text-royal-dark/80">
            Growing up around dogs and cats here in Bathinda, I always felt
            that pet care could be more personal — a place where you are
            recognised by name, not just by your order. That is the feeling
            I wanted to build at our store in Baba Farid Nagar.
          </p>
          <p className="mt-4 leading-relaxed text-royal-dark/80">
            Whether you are stopping by for food and accessories, booking a
            grooming visit, or trusting us with your dog for a few days of
            boarding, I want you to feel the same thing I do every day —
            that your pet is in good hands. For me, The Royal Paws isn&rsquo;t
            just a store. It is my way of showing Bathinda&rsquo;s pet parents
            what care built on trust really looks like.
          </p>
          <p className="mt-4 font-display italic text-gold-dark">
            — Abhishek Goyal, Owner, The Royal Paws
          </p>
          <a
            href={telHref}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-royal-gradient px-7 py-3.5 text-sm font-semibold text-cream shadow-card transition-transform hover:scale-105"
          >
            <Icon name="phone" className="w-4 h-4" />
            Speak With The Royal Paws
          </a>
        </div>
        <div className="order-1 lg:order-2">
          <div className="relative mx-auto w-full max-w-sm">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl2 border-2 border-gold/40 shadow-gold">
              <Image
                src={withBasePath("/images/abhishek-goyal-owner.jpg")}
                alt="Abhishek Goyal, owner of The Royal Paws in Bathinda"
                fill
                sizes="(min-width: 1024px) 384px, 80vw"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-royal-dark/40 via-transparent to-transparent" />
            </div>
            <span className="absolute -bottom-4 -right-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold-gradient shadow-gold sm:h-20 sm:w-20">
              <Icon name="crown" className="h-8 w-8 text-royal-dark sm:h-9 sm:w-9" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
