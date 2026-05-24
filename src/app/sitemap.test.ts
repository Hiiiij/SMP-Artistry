import { describe, expect, it } from "vitest";
import sitemap from "./sitemap";
import { SITE_URL } from "@/lib/site";

describe("sitemap", () => {
  const entries = sitemap();

  it("lists home, privacy and impressum", () => {
    expect(entries.map((e) => e.url)).toEqual([
      `${SITE_URL}/`,
      `${SITE_URL}/privacy`,
      `${SITE_URL}/impressum`,
    ]);
  });

  it("gives the homepage the highest priority", () => {
    expect(entries[0].priority).toBe(1);
    expect(entries[1].priority).toBe(0.5);
  });

  it("includes de and en hreflang alternates with correct prefixes", () => {
    expect(entries[0].alternates?.languages).toEqual({
      de: `${SITE_URL}/`,
      en: `${SITE_URL}/en`,
    });
    expect(entries[1].alternates?.languages).toEqual({
      de: `${SITE_URL}/privacy`,
      en: `${SITE_URL}/en/privacy`,
    });
  });
});
