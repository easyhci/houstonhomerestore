import type { Locale } from "./config";
import { defaultLocale } from "./config";

export function localePath(path: string, locale: Locale): string {
  if (locale === defaultLocale) return path;
  return `/${locale}${path === "/" ? "" : path}`;
}
