"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { handleContact } from "@/lib/contact";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section id="hero" className="pt-8">
      {/* Large (>=1300px): horizontal layout, text left, John-2 */}
      <div className="relative hidden lg:block w-full min-h-screen">
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
            <h1 className="text-5xl xl:text-7xl p-1 font-medium tracking-tight text-center text-foreground mb-8">
              {t("headline")}
            </h1>
            <h2 className="text-2xl xl:text-4xl p-1 font-regular text-cream text-center mb-24">
              {t("subtitle")}
            </h2>
            <button
              onClick={handleContact}
              className="flex border border-text-muted/40 hover:border-gold/60 text-white text-md tracking-wider uppercase px-4 py-4 transition-all duration-300 hover:bg-gold/20"
            >
              {t("cta")}
            </button>
          </div>
        </div>
      </div>

      {/* Medium (768px–1300px): vertical layout, text bottom, John-2 */}
      <div className="relative hidden md:max-lg:block w-full h-svh">
        <Image
          src="/images/gallery-2.jpg"
          alt={t("heroAlt")}
          fill
          className="object-cover object-[50%_5%]"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-bg/30 via-transparent via-30% to-bg" />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/40 via-60% to-black/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 px-6 z-10">
          <h1 className="text-5xl font-regular tracking-tight text-foreground text-center mb-3">
            {t("headline")}
          </h1>
          <h2 className="text-2xl font-regular text-cream text-center mb-6">
            {t("subtitle")}
          </h2>
          <button
            onClick={handleContact}
            className="inline-block border border-text-muted/40 hover:border-gold/60 text-white text-base tracking-wider uppercase px-6 py-5 text-center transition-all duration-300 hover:bg-gold/20"
          >
            {t("cta")}
          </button>
        </div>
      </div>

      {/* Small (<768px): vertical layout, text bottom, gallery-2 */}
      <div className="md:hidden relative w-full h-svh">
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
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-20 px-6 z-10">
          <h1 className="text-4xl sm:text-5xl font-regular tracking-tight text-foreground text-center mb-3">
            {t("headline")}
          </h1>
          <h2 className="text-xl sm:text-2xl font-regular text-cream text-center mb-6">
            {t("subtitle")}
          </h2>
          <button
            onClick={handleContact}
            className="inline-block border border-text-muted/40 hover:border-gold/60 text-white text-sm tracking-wider uppercase px-4 py-4 text-center transition-all duration-300 hover:bg-gold/20"
          >
            {t("cta")}
          </button>
        </div>
      </div>
    </section>
  );
}
``