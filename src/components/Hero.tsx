"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { handleContact } from "@/lib/contact";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section id="hero" className="pt-16">
      {/* Desktop: image with overlaid text */}
      <div className="relative hidden md:block w-full min-h-screen">
        <Image
          src="/images/hero-bg.jpg"
          alt={t("heroAlt")}
          fill
          className="object-cover object-top"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-bg/20 via-transparent to-bg" />
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex items-center z-10">
          <div className="w-1/2 px-8 flex flex-col items-center">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tight text-foreground mb-8">
              {t("headline")}
            </h1>
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-regular text-cream mb-24">
              {t("subtitle")}
            </h2>
            <button
              onClick={handleContact}
              className="inline-block border border-text-muted/40 hover:border-gold/60 text-white text-sm tracking-[0.2em] uppercase px-8 py-4 transition-all duration-300 hover:bg-gold/20"
            >
              {t("cta")}
            </button>
          </div>
        </div>
      </div>

      {/* Tablet & mobile: image on top, text below */}
      <div className="md:hidden">
        <div className="relative w-full aspect-[3/4] sm:aspect-[4/3]">
          <Image
            src="/images/hero-bg.jpg"
            alt={t("heroAlt")}
            fill
            className="object-cover object-top"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-bg" />
        </div>
        <div className="flex flex-col items-center gap-8 px-6 pb-12 -mt-16 relative z-10">
          <h1 className="text-4xl sm:text-5xl font-regular tracking-tight text-foreground mb-4">
            {t("headline")}
          </h1>
          <h2 className="text-xl sm:text-2xl font-regular text-cream mb-8">
            {t("subtitle")}
          </h2>
          <button
            onClick={handleContact}
            className="inline-block border border-text-muted/40 hover:border-gold/60 text-white text-sm tracking-[0.2em] uppercase px-8 py-4 transition-all duration-300 hover:bg-gold/20"
          >
            {t("cta")}
          </button>
        </div>
      </div>
    </section>
  );
}
