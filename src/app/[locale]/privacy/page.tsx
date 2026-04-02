import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Privacy" });
  return { title: t("metaTitle") };
}

export default async function Privacy() {
  const t = await getTranslations("Privacy");

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
          <h2 className="text-xl font-semibold text-white">{t("s1Title")}</h2>
          <p>{t("s1Content")}</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">{t("s2Title")}</h2>
          <p>
            {t("s2Content")}{" "}
            <a
              href="https://vercel.com/legal/privacy-policy"
              className="text-gold hover:text-gold-light transition-colors underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("s2Link")}
            </a>
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">{t("s3Title")}</h2>
          <p>
            {t("s3Content")}{" "}
            <a
              href="https://www.whatsapp.com/legal/privacy-policy"
              className="text-gold hover:text-gold-light transition-colors underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("s3Link")}
            </a>
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">{t("s4Title")}</h2>
          <p>
            {t("s4Content")}{" "}
            <a
              href="https://privacycenter.instagram.com/policy"
              className="text-gold hover:text-gold-light transition-colors underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("s4Link")}
            </a>
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">{t("s5Title")}</h2>
          <p>
            {t("s5Content")}{" "}
            <a
              href="https://policies.google.com/privacy"
              className="text-gold hover:text-gold-light transition-colors underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("s5Link")}
            </a>
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">{t("s6Title")}</h2>
          <p>{t("s6Intro")}</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>{t("s6r1")}</li>
            <li>{t("s6r2")}</li>
            <li>{t("s6r3")}</li>
            <li>{t("s6r4")}</li>
            <li>{t("s6r5")}</li>
            <li>{t("s6r6")}</li>
          </ul>
          <p>{t("s6Contact")}</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">{t("s7Title")}</h2>
          <p>
            {t("s7Content")}{" "}
            <a
              href="https://www.bfdi.bund.de"
              className="text-gold hover:text-gold-light transition-colors underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("s7Link")}
            </a>
          </p>
        </section>

        <p className="text-sm text-text-muted/60">{t("lastUpdated")}</p>
        </div>
      </div>
    </main>
  );
}
