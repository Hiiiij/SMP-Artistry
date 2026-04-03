import Image from "next/image";
import { getTranslations } from "next-intl/server";

export default async function About() {
  const t = await getTranslations("About");

  return (
    <section id="about" className="pb-20 sm:pb-28">
      <div className="max-w-6xl mx-auto">
        <div className="card-gradient rounded-2xl p-6 sm:p-10 md:p-12 section-glow">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-regular text-cream mb-10 text-center">
            {t("heading")}
          </h2>

          <div className="flex flex-col gap-3 text-base sm:text-lg md:text-xl text-cream/80 font-regular leading-relaxed max-w-2xl mx-auto mb-10">
            <p>{t("p1")}&nbsp;{t("p2")}&nbsp;{t("p3")}</p>
          </div>
          <div className="flex flex-col items-center gap-10">
            {/* Photo */}
            <div className="shrink-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-2 border-gold/20">
              <Image
                src="/images/ula-portrait.jpg"
                alt={t("portraitAlt")}
                width={800}
                height={800}
                quality={85}
                sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, 384px"
                className="object-cover w-full h-full"
              />
            </div>

            {/* Bio */}
            <div className="space-y-4 text-text-muted text-body leading-relaxed max-w-2xl">
              <p>{t("bio1")}</p>
              <p>{t("bio2")}</p>
              <p>{t("bio3")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
