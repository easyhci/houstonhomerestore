import { notFound } from "next/navigation";
import { locales, type Locale, isValidLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { LocaleProvider } from "@/lib/i18n/LocaleContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EmergencyBar from "@/components/EmergencyBar";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const dict = await getDictionary(locale as Locale);

  return (
    <LocaleProvider locale={locale as Locale} dict={dict}>
      <EmergencyBar dict={dict.emergencyBar} />
      <Header dict={dict.header} locale={locale as Locale} />
      <main>{children}</main>
      <Footer dict={dict.footer} locale={locale as Locale} />
    </LocaleProvider>
  );
}
