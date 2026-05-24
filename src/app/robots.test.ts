import { describe, expect, it } from "vitest";
import robots from "./robots";
import { SITE_URL } from "@/lib/site";

describe("robots", () => {
  const result = robots();

  it("allows all crawlers", () => {
    expect(result.rules).toEqual({ userAgent: "*", allow: "/" });
  });

  it("points to the sitemap and host", () => {
    expect(result.sitemap).toBe(`${SITE_URL}/sitemap.xml`);
    expect(result.host).toBe(SITE_URL);
  });
});
