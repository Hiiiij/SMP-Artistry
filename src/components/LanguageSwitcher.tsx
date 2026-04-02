"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const otherLocale = locale === "en" ? "de" : "en";

  function switchLocale() {
    router.replace(pathname, { locale: otherLocale });
  }

  return (
    <button
      onClick={switchLocale}
      className="text-sm text-text-muted hover:text-white transition-colors uppercase tracking-wider font-medium"
      aria-label={`Switch to ${otherLocale === "en" ? "English" : "Deutsch"}`}
    >
      {otherLocale.toUpperCase()}
    </button>
  );
}
