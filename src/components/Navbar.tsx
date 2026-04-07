"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";

import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import { handleContact } from "@/lib/contact";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const t = useTranslations("Navbar");
  const locale = useLocale();

  const navLinks = [
    { label: t("services"), href: "#services" },
    { label: t("about"), href: "#about" },
    { label: t("faq"), href: "#faq" },
    { label: t("gallery"), href: "#gallery" },
  ];

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/${locale}/${href}`;
    }
  };


  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-md border-b border-border">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href={`/${locale}`} className="shrink-0">
            <Logo />
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            <div className="flex items-center bg-bg-card/60 border border-border rounded-full px-2 py-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(link.href);
                  }}
                  className="px-4 py-1.5 text-sm text-text-muted hover:text-white transition-colors rounded-full"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact + Language Switcher */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher />
            <button
              onClick={handleContact}
              className="border border-text-muted/40 hover:border-gold/60 text-text-muted hover:text-white text-sm font-medium px-5 py-2 rounded-full transition-all duration-300 hover:bg-gold/20"
            >
              {t("contact")}
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-bg-card border-t border-border">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(link.href);
                }}
                className="block px-4 py-2 text-text-muted hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={handleContact}
              className="block text-center w-full mt-2 border border-text-muted/40 hover:border-gold/60 text-text-muted hover:text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300 hover:bg-gold/20"
            >
              {t("contact")}
            </button>
            <div className="flex justify-center mt-3">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
