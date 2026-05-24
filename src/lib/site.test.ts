import { describe, expect, it } from "vitest";
import { localizedPath } from "./site";

describe("localizedPath", () => {
  it("serves the default locale (de) at the root with no prefix", () => {
    expect(localizedPath("de")).toBe("/");
    expect(localizedPath("de", "/")).toBe("/");
  });

  it("keeps subpaths unprefixed for the default locale", () => {
    expect(localizedPath("de", "/privacy")).toBe("/privacy");
    expect(localizedPath("de", "/impressum")).toBe("/impressum");
  });

  it("prefixes non-default locales", () => {
    expect(localizedPath("en")).toBe("/en");
    expect(localizedPath("en", "/")).toBe("/en");
  });

  it("prefixes non-default locale subpaths", () => {
    expect(localizedPath("en", "/privacy")).toBe("/en/privacy");
    expect(localizedPath("en", "/impressum")).toBe("/en/impressum");
  });
});
