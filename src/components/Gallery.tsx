"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Gallery() {
  const t = useTranslations("Gallery");

  return (
    <section id="gallery" className="pt-20 sm:pt-28 px-0 sm:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-regular text-center text-cream mb-12 sm:mb-24">
          {t("title")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-12">
          <div className="sm:rounded-2xl overflow-hidden border border-border">
            <Image
              src="/images/gallery-1.jpg"
              alt={t("alt1")}
              width={800}
              height={600}
              sizes="(max-width: 640px) 100vw, 50vw"
              className="w-full h-auto hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="sm:rounded-3xl overflow-hidden border border-border">
            <Image
              src="/images/gallery-2.jpg"
              alt={t("alt2")}
              width={800}
              height={800}
              sizes="(max-width: 640px) 100vw, 50vw"
              className="w-full h-auto hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="sm:col-span-2 sm:rounded-2xl overflow-hidden border border-border">
            <Image
              src="/images/studio.jpg"
              alt={t("alt3")}
              width={1600}
              height={1068}
              sizes="100vw"
              className="w-full h-auto hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
