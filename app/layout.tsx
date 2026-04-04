import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "HoustonHomeRestore, Houston Water Damage Guide From a Harvey Survivor (2026)",
    template: "%s | HoustonHomeRestore",
  },
  description: "Houston water damage, mold, and flood recovery guides written by a Hurricane Harvey survivor. Real costs, insurance strategies, and lessons learned the hard way.",
  metadataBase: new URL("https://houstonhomerestore.com"),
  openGraph: {
    siteName: "HoustonHomeRestore",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  other: {
    "geo.region": "US-TX",
    "geo.placename": "Houston",
    "geo.position": "29.7604;-95.3698",
    "ICBM": "29.7604, -95.3698",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
