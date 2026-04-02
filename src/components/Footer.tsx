"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Logo from "./Logo";

const EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2426.5!2d13.3493!3d52.5465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8515e5e6b7c8d%3A0x0!2sBr%C3%BCsseler%20Str.%2011%2C%2013353%20Berlin!5e0!3m2!1sde!2sde!4v1";

export default function Footer() {
  const [showMap, setShowMap] = useState(false);
  const t = useTranslations("Footer");

  return (
    <footer className="border-t border-border py-10 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* 1. Logo */}
        <Logo small />

        {/* 2. Social / Location */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="text-text-muted hover:text-white transition-colors"
            aria-label="Instagram"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
          <button
            onClick={() => setShowMap(!showMap)}
            className="text-sm text-text-muted font-medium hover:text-white transition-colors flex items-center gap-1.5"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {t("location")}
          </button>
        </div>

        {/* 3. Links */}
        <div className="flex gap-4 text-xs text-text-muted">
          <Link href="/privacy" className="hover:text-white transition-colors">{t("privacy")}</Link>
          <Link href="/impressum" className="hover:text-white transition-colors">{t("Impressum")}</Link>
        </div>
      </div>

      {/* Blur overlay — bottom 20% of viewport */}
      {showMap && (
        <div
          className="fixed bottom-0 left-0 right-0 z-50 h-[40vh] backdrop-blur-sm bg-black/40 flex items-center justify-center"
          onClick={() => setShowMap(false)}
        >
          <div
            className="relative bg-bg-card border border-gold/30 rounded-2xl p-6 w-full max-w-2xl mx-4 shadow-[0_0_60px_rgba(201,168,76,0.1)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowMap(false)}
              className="absolute top-4 right-4 text-text-muted hover:text-white transition-colors text-2xl leading-none"
            >
              &times;
            </button>
            <p className="text-sm text-text-muted mb-4">{t("address")}</p>
            <div className="rounded-xl overflow-hidden border border-border">
              <iframe
                src={EMBED_URL}
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location"
              />
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
