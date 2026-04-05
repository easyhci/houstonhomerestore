"use client";

import { useState } from "react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { localePath } from "@/lib/i18n/localePath";
import LanguageToggle from "./LanguageToggle";

interface HeaderProps {
  dict: {
    waterDamage: string;
    mold: string;
    flood: string;
    insurance: string;
    blog: string;
    about: string;
  };
  locale: Locale;
}

export default function Header({ dict, locale }: HeaderProps) {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/water-damage-restoration-houston", label: dict.waterDamage },
    { href: "/mold-removal-houston", label: dict.mold },
    { href: "/flood-cleanup-houston", label: dict.flood },
    { href: "/insurance-claim-restoration-houston", label: dict.insurance },
    { href: "/blog", label: dict.blog },
    { href: "/about", label: dict.about },
  ];

  return (
    <header className="bg-white border-b border-stone-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href={localePath("/", locale)} className="text-xl font-bold text-amber-800 no-underline">
          Houston<span className="text-red-700">HomeRestore</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {links.map((l) => (
            <Link key={l.href} href={localePath(l.href, locale)} className="text-stone-600 hover:text-amber-800">
              {l.label}
            </Link>
          ))}
          <LanguageToggle locale={locale} />
        </nav>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-3">
          <LanguageToggle locale={locale} />
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="p-1.5 text-stone-700 hover:text-amber-800"
          >
            {open ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden border-t border-stone-200 bg-white px-4 pb-4 pt-2 space-y-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={localePath(l.href, locale)}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium text-stone-700 hover:text-amber-800"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
