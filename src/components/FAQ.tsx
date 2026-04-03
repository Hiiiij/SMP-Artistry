"use client";

import { handleContact } from "@/lib/contact";
import { useState } from "react";
import { useTranslations } from "next-intl";

const faqKeys = ["1", "2", "3", "4", "5", "6", "7"] as const;

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const t = useTranslations("FAQ");

  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-regular text-center text-cream mb-8 ">
          {t("title")}
        </h2>

        <div className="flex flex-col items-center gap-20">
          <div className="space-y-2 w-full">
            {faqKeys.map((key, index) => (
              <div key={key} className="border-b border-border">
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex items-center gap-4 py-5 text-left group"
                >
                  <span className="text-text-muted text-xl leading-none flex-shrink-0">
                    {openIndex === index ? "−" : "+"}
                  </span>
                  <span className="text-body text-text-muted group-hover:text-white transition-colors">
                    {t(`q${key}`)}
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pb-5 pl-10 pr-4">
                      <p className="text-body text-text-muted/80 leading-relaxed">
                        {t(`a${key}`)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={handleContact}
            className="inline-block border border-text-muted/40 hover:border-gold/60 text-white text-sm tracking-[0.2em] uppercase px-8 py-4 transition-all duration-300 hover:bg-gold/20"
          >
            {t("cta")}
          </button>
        </div>
      </div>
    </section>
  );
}
