import type { MetadataRoute } from "next";
import { SITE_URL, localizedPath } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", "/privacy", "/impressum"];

  return paths.map((path) => ({
    url: `${SITE_URL}${localizedPath("de", path)}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.5,
    alternates: {
      languages: {
        de: `${SITE_URL}${localizedPath("de", path)}`,
        en: `${SITE_URL}${localizedPath("en", path)}`,
      },
    },
  }));
}
