import Link from "next/link";
import { localePath } from "@/lib/i18n/localePath";
import type { Locale } from "@/lib/i18n/config";

interface Crumb {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: Crumb[];
  locale: Locale;
}

export default function Breadcrumbs({ items, locale }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
      <ol className="flex flex-wrap items-center gap-1">
        <li>
          <Link
            href={localePath("/", locale)}
            className="hover:text-amber-700 transition-colors"
          >
            {locale === "es" ? "Inicio" : "Home"}
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            <span aria-hidden="true">/</span>
            {item.href ? (
              <Link
                href={localePath(item.href, locale)}
                className="hover:text-amber-700 transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-900 font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
