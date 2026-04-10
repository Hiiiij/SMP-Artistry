"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { handleContact } from "@/lib/contact";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section id="hero" className="pt-8">
      {/* Desktop: image with overlaid text */}
      <div className="relative hidden xl:block w-full min-h-screen">
        <Image
          src="/images/John-2.jpg"
          alt={t("heroAlt")}
          fill
          className="object-cover object-top"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-bg/20 via-transparent to-bg" />
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex items-center z-10 px-8">
          <div className="w-1/2 flex flex-col items-center">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl p-1font-medium tracking-tight text-foreground mb-8">
              {t("headline")}
            </h1>
            <h2 className="text-2xl lg:text-3xl xl:text-4xl p-1 font-regular text-cream mb-24">
              {t("subtitle")}
            </h2>
            <button
              onClick={handleContact}
              className="flex border border-text-muted/40 hover:border-gold/60 text-white text-md uppercase px-4 py-4 transition-all duration-300 hover:bg-gold/20"
            >
              {t("cta")}
            </button>
            
          </div>
        </div>
      </div>

      {/* Tablet & mobile: full viewport, text overlaid at bottom */}
      <div className="xl:hidden relative w-full h-svh">
        <Image
          src="/images/gallery-2.jpg"
          alt={t("heroAlt")}
          fill
          className="object-cover object-[30%_10%]"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-bg/30 via-transparent via-30% to-bg" />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/40 via-60% to-black/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-24 px-6 z-10">
          <h1 className="text-4xl sm:text-5xl font-regular tracking-tight text-foreground text-center mb-3">
            {t("headline")}
          </h1>
          <h2 className="text-xl sm:text-2xl font-regular text-cream text-center mb-6">
            {t("subtitle")}
          </h2>
          <button
            onClick={handleContact}
            className="inline-block border border-text-muted/40 hover:border-gold/60 text-white text-sm uppercase px-4 py-4 text-center transition-all duration-300 hover:bg-gold/20"
          >
            {t("cta")}
          </button>
        </div>
      </div>
    </section>
  );
}
