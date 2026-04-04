import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { localePath } from "@/lib/i18n/localePath";

interface FooterProps {
  dict: {
    about: string;
    guides: string;
    waterDamage: string;
    moldRemoval: string;
    floodCleanup: string;
    insuranceClaims: string;
    siteLinks: string;
    aboutHoustonHomeRestore: string;
    blog: string;
    resources: string;
    restorationBlog: string;
    insuranceGuide: string;
    waterCostGuide: string;
    moldCostGuide: string;
    copyright: string;
    editorialNote: string;
    editorialPolicy: string;
  };
  locale: Locale;
}

export default function Footer({ dict, locale }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold mb-3">HoustonHomeRestore</h3>
            <p className="text-sm text-gray-400">{dict.about}</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">{dict.guides}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href={localePath("/water-damage-restoration-houston", locale)} className="text-gray-400 hover:text-white">{dict.waterDamage}</Link></li>
              <li><Link href={localePath("/mold-removal-houston", locale)} className="text-gray-400 hover:text-white">{dict.moldRemoval}</Link></li>
              <li><Link href={localePath("/flood-cleanup-houston", locale)} className="text-gray-400 hover:text-white">{dict.floodCleanup}</Link></li>
              <li><Link href={localePath("/insurance-claim-restoration-houston", locale)} className="text-gray-400 hover:text-white">{dict.insuranceClaims}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">{dict.siteLinks}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href={localePath("/about", locale)} className="text-gray-400 hover:text-white">{dict.aboutHoustonHomeRestore}</Link></li>
              <li><Link href={localePath("/blog", locale)} className="text-gray-400 hover:text-white">{dict.blog}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">{dict.resources}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href={localePath("/blog", locale)} className="text-gray-400 hover:text-white">{dict.restorationBlog}</Link></li>
              <li><Link href={localePath("/insurance-claim-restoration-houston", locale)} className="text-gray-400 hover:text-white">{dict.insuranceGuide}</Link></li>
              <li><Link href={localePath("/blog/water-damage-restoration-cost-houston", locale)} className="text-gray-400 hover:text-white">{dict.waterCostGuide}</Link></li>
              <li><Link href={localePath("/blog/mold-remediation-cost-houston", locale)} className="text-gray-400 hover:text-white">{dict.moldCostGuide}</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-xs text-gray-500">
          <p className="mb-2">
            {dict.copyright.replace("{year}", new Date().getFullYear().toString())}
          </p>
          <p>
            {dict.editorialNote}{" "}
            <Link href={localePath("/about", locale)} className="underline hover:text-gray-300">{dict.editorialPolicy}</Link>
          </p>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "HoustonHomeRestore",
            "url": "https://houstonhomerestore.com",
            "description": "Houston homeowner education resource for water damage, mold, and flood recovery",
            "areaServed": {
              "@type": "City",
              "name": "Houston",
              "addressRegion": "TX"
            }
          })
        }}
      />
    </footer>
  );
}
