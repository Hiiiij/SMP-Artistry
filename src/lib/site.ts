import { defaultLocale } from "@/i18n/config";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://smp-artistry.de";

// Path for a locale under `localePrefix: "as-needed"`: default locale has no
// prefix, others are prefixed with `/<locale>`.
export function localizedPath(locale: string, path = "/"): string {
  const clean = path === "/" ? "" : path;
  if (locale === defaultLocale) return clean || "/";
  return `/${locale}${clean}`;
}

export const business = {
  name: "SMP Artistry — Kopfhautpigmentierung",
  legalName: "Urszula Bors",
  phone: "+491706955578",
  email: "ulla.rocco007@gmail.com",
  street: "Brüsseler Str. 11",
  postalCode: "13353",
  city: "Berlin",
  region: "Berlin",
  country: "DE",
  latitude: 52.5465,
  longitude: 13.3493,
  priceRange: "€€",
  ogImage: "/images/og-image.jpg",
} as const;
