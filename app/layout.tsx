import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const BASE = "https://houstonhomerestore.com";

export const metadata: Metadata = {
  title: {
    default: "HoustonHomeRestore, Houston Water Damage Guide From a Harvey Survivor (2026)",
    template: "%s | HoustonHomeRestore",
  },
  description: "Houston water damage, mold, and flood recovery guides written by a Hurricane Harvey survivor. Real costs, insurance strategies, and lessons learned the hard way.",
  metadataBase: new URL(BASE),
  openGraph: {
    siteName: "HoustonHomeRestore",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${BASE}/images/hero-houston.jpg`,
        width: 1280,
        height: 720,
        alt: "Houston skyline along the bayou",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HoustonHomeRestore",
    description: "Houston water damage, mold, and flood recovery guides from a Harvey survivor.",
    images: [`${BASE}/images/hero-houston.jpg`],
  },
  other: {
    "geo.region": "US-TX",
    "geo.placename": "Houston",
    "geo.position": "29.7604;-95.3698",
    "ICBM": "29.7604, -95.3698",
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale?: string }>;
}>) {
  const { locale } = await params;
  const lang = locale === "es" ? "es" : "en";

  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-61H97ZSGJQ"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-61H97ZSGJQ');
          `}
        </Script>
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
