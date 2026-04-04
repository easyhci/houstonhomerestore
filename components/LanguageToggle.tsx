"use client";

import { usePathname, useRouter } from "next/navigation";
import type { Locale } from "@/lib/i18n/config";

interface LanguageToggleProps {
  locale: Locale;
}

export default function LanguageToggle({ locale }: LanguageToggleProps) {
  const pathname = usePathname();
  const router = useRouter();

  const isSpanish = locale === "es";

  function switchTo(target: Locale) {
    if (target === locale) return;

    let newPath: string;
    if (target === "en") {
      newPath = pathname.replace(/^\/es(\/|$)/, "/") || "/";
    } else {
      newPath = `/es${pathname === "/" ? "" : pathname}`;
    }

    document.cookie = `NEXT_LOCALE=${target};path=/;max-age=31536000;SameSite=Lax`;
    router.push(newPath);
  }

  return (
    <div
      className="relative flex items-center bg-stone-200 rounded-full p-0.5 cursor-pointer select-none"
      role="radiogroup"
      aria-label="Language selector"
    >
      <div
        className={`absolute top-0.5 bottom-0.5 w-[calc(50%)] rounded-full bg-white shadow-sm transition-transform duration-200 ease-in-out ${
          isSpanish ? "translate-x-full" : "translate-x-0"
        }`}
        style={{ left: "2px", width: "calc(50% - 2px)" }}
      />

      <button
        onClick={() => switchTo("en")}
        role="radio"
        aria-checked={!isSpanish}
        className={`relative z-10 flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold transition-colors duration-200 ${
          !isSpanish ? "text-stone-800" : "text-stone-400 hover:text-stone-600"
        }`}
      >
        <svg viewBox="0 0 36 36" className="w-4 h-4 shrink-0" aria-hidden="true">
          <rect width="36" height="36" rx="4" fill="#B22234" />
          <rect y="2.77" width="36" height="2.77" fill="white" />
          <rect y="8.31" width="36" height="2.77" fill="white" />
          <rect y="13.85" width="36" height="2.77" fill="white" />
          <rect y="19.38" width="36" height="2.77" fill="white" />
          <rect y="24.92" width="36" height="2.77" fill="white" />
          <rect y="30.46" width="36" height="2.77" fill="white" />
          <rect width="14.4" height="19.38" fill="#3C3B6E" />
          <rect x="1.5" y="1" width="11.5" height="16.4" fill="url(#stars)" />
          <defs>
            <pattern id="stars" width="4.8" height="3.6" patternUnits="userSpaceOnUse">
              <circle cx="1.2" cy="1" r="0.8" fill="white" />
              <circle cx="3.6" cy="2.8" r="0.8" fill="white" />
            </pattern>
          </defs>
        </svg>
        <span>EN</span>
      </button>

      <button
        onClick={() => switchTo("es")}
        role="radio"
        aria-checked={isSpanish}
        className={`relative z-10 flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold transition-colors duration-200 ${
          isSpanish ? "text-stone-800" : "text-stone-400 hover:text-stone-600"
        }`}
      >
        <svg viewBox="0 0 36 36" className="w-4 h-4 shrink-0" aria-hidden="true">
          <rect width="36" height="12" fill="#006847" rx="4" />
          <rect y="12" width="36" height="12" fill="white" />
          <rect y="24" width="36" height="12" fill="#CE1126" rx="4" />
          <circle cx="18" cy="18" r="3.5" fill="#6D3A1F" />
          <circle cx="18" cy="18" r="2.8" fill="#A8D08D" />
        </svg>
        <span>ES</span>
      </button>
    </div>
  );
}
