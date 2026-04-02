"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

const serviceKeys = [
  { titleKey: "alopeciaTitle", descKey: "alopeciaDesc" },
  { titleKey: "hairLossTitle", descKey: "hairLossDesc" },
  { titleKey: "scarsCamouflageTitle", descKey: "scarsCamouflageDesc" },
  { titleKey: "hairlineCreationTitle", descKey: "hairlineCreationDesc" },
  { titleKey: "densityImprovementTitle", descKey: "densityImprovementDesc" },
  { titleKey: "crownBaldnessTitle", descKey: "crownBaldnessDesc" },
] as const;

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isOpen = openIndex !== null;
  const t = useTranslations("Services");

  return (
    <section id="services" className="py-20 sm:py-28 px-12">
      <div className="max-w-6xl mx-auto">
        <div className="relative card-gradient rounded-2xl p-8 sm:p-12 md:p-16 text-center section-glow overflow-hidden">
          {/* Main content — blurs when overlay is open */}
          <div
            className={`transition-opacity duration-400 ease-out ${
              isOpen ? "opacity-30" : ""
            }`}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-regular text-cream mb-8 sm:mb-12">
              {t("heading")}
            </h2>
            <p className="text-text-muted text-base sm:text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
              {t("description")}
            </p>

            <h3 className="text-xl sm:text-2xl font-semibold text-cream mb-8">
              {t("subheading")}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {serviceKeys.map((service, index) => (
                <button
                  key={service.titleKey}
                  onClick={() => setOpenIndex(index)}
                  className="group text-left border border-border hover:border-gold/40 rounded-xl p-5 transition-colors duration-300 cursor-pointer w-full"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-body text-text-muted group-hover:text-white transition-colors">
                      {t(service.titleKey)}
                    </span>
                    <span className="text-text-muted text-lg">+</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div
            className={`absolute inset-0 pointer-events-none transition-opacity duration-400 ease-out ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backdropFilter: "blur(5px)",
              WebkitBackdropFilter: "blur(5px)",
              maskImage:
                "radial-gradient(ellipse 80% 50% at center, black 0%, black 40%, transparent 70%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 80% 50% at center, black 0%, black 40%, transparent 70%)",
            }}
          />

          {/* Overlay — dark gradient + click-to-close, no blur */}
          <div
            className={`absolute inset-0 flex items-center justify-center p-8 transition-opacity duration-400 ease-out ${
              isOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
            style={{
              background: isOpen
                ? "radial-gradient(ellipse 80% 50% at center, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)"
                : undefined,
            }}
            onClick={() => setOpenIndex(null)}
          >
            <div
              className={`relative bg-bg-card border border-gold/30 rounded-2xl p-8 sm:p-12 max-w-lg w-full text-left shadow-[0_0_60px_rgba(201,168,76,0.1)] transition-[transform,opacity] duration-400 ease-out ${
                isOpen
                  ? "scale-100 translate-y-0 opacity-100"
                  : "scale-95 translate-y-8 opacity-0"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setOpenIndex(null)}
                className="absolute top-4 right-4 text-text-muted hover:text-white transition-colors text-2xl leading-none"
              >
                &times;
              </button>
              {isOpen && (
                <>
                  <h4 className="text-xl sm:text-2xl font-semibold text-white mb-4">
                    {t(serviceKeys[openIndex].titleKey)}
                  </h4>
                  <div className="w-12 h-px bg-gold/40 mb-6" />
                  <p className="text-text-muted leading-relaxed">
                    {t(serviceKeys[openIndex].descKey)}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
