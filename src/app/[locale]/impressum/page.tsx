import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Impressum" });
  return { title: t("metaTitle") };
}

export default async function Impressum() {
  const t = await getTranslations("Impressum");

  return (
    <main className="py-28 px-12">
      <div className="max-w-3xl mx-auto text-text-muted text-body leading-relaxed">
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-regular text-cream">
            {t("title")}
          </h1>
          <Link href="/" className="shrink-0 text-text-muted hover:text-white transition-colors text-2xl leading-none" aria-label="Close">
            &times;
          </Link>
        </div>

        <div className="space-y-8">
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">{t("legalBasisTitle")}</h2>
          <p className="whitespace-pre-line">{t("legalBasisContent")}</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">{t("contactTitle")}</h2>
          <p className="whitespace-pre-line">{t("contactContent")}</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">{t("taxTitle")}</h2>
          <p>{t("taxContent")}</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">{t("responsibleTitle")}</h2>
          <p className="whitespace-pre-line">{t("responsibleContent")}</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">{t("disputeTitle")}</h2>
          <p>
            {t("disputeContent")}{" "}
            <a
              href="https://ec.europa.eu/consumers/odr"
              className="text-gold hover:text-gold-light transition-colors underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("disputeLink")}
            </a>
          </p>
          <p>{t("disputeNote")}</p>
        </section>
        </div>
      </div>
    </main>
  );
}
