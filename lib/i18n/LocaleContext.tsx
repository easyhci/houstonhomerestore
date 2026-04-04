"use client";

import { createContext, useContext, useEffect } from "react";
import type { Locale } from "./config";
import type { Dictionary } from "./getDictionary";

interface LocaleContextValue {
  locale: Locale;
  dict: Dictionary;
}

const LocaleCtx = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({
  locale,
  dict,
  children,
}: {
  locale: Locale;
  dict: Dictionary;
  children: React.ReactNode;
}) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <LocaleCtx.Provider value={{ locale, dict }}>
      {children}
    </LocaleCtx.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleCtx);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
