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
  return (
    <header className="bg-white border-b border-stone-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href={localePath("/", locale)} className="text-xl font-bold text-amber-800 no-underline">
          Houston<span className="text-red-700">HomeRestore</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href={localePath("/water-damage-restoration-houston", locale)} className="text-stone-600 hover:text-amber-800">{dict.waterDamage}</Link>
          <Link href={localePath("/mold-removal-houston", locale)} className="text-stone-600 hover:text-amber-800">{dict.mold}</Link>
          <Link href={localePath("/flood-cleanup-houston", locale)} className="text-stone-600 hover:text-amber-800">{dict.flood}</Link>
          <Link href={localePath("/insurance-claim-restoration-houston", locale)} className="text-stone-600 hover:text-amber-800">{dict.insurance}</Link>
          <Link href={localePath("/blog", locale)} className="text-stone-600 hover:text-amber-800">{dict.blog}</Link>
          <Link href={localePath("/about", locale)} className="text-stone-600 hover:text-amber-800">{dict.about}</Link>
          <LanguageToggle locale={locale} />
        </nav>
        <div className="md:hidden flex items-center gap-2">
          <LanguageToggle locale={locale} />
        </div>
      </div>
    </header>
  );
}
