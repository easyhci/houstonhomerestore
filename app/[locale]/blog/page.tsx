import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { isValidLocale, type Locale } from "@/lib/i18n/config";
import { localePath } from "@/lib/i18n/localePath";
import { getBlogPosts } from "@/lib/i18n/getBlogPosts";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : "en";
  const isEs = locale === "es";

  const title = isEs
    ? "Blog de Restauraci\u00f3n en Houston, Gu\u00edas de Da\u00f1o por Agua, Moho e Inundaciones (2026)"
    : "Houston Restoration Blog, Water Damage, Mold & Insurance Guides (2026)";
  const description = isEs
    ? "12+ gu\u00edas escritas por un sobreviviente de Harvey que perdi\u00f3 $47,000. Costos reales, errores de seguros y lo que los contratistas no le dicen. Actualizado 2026."
    : "12+ guides written by a Hurricane Harvey survivor who lost $47k. Real costs, insurance mistakes, and what contractors won't tell you. Updated 2026.";

  const canonical =
    locale === "en"
      ? "https://houstonhomerestore.com/blog"
      : "https://houstonhomerestore.com/es/blog";

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: "https://houstonhomerestore.com/blog",
        es: "https://houstonhomerestore.com/es/blog",
        "x-default": "https://houstonhomerestore.com/blog",
      },
    },
    openGraph: { title, description, url: canonical },
  };
}

export default async function BlogIndexPage({ params }: Props) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : "en";

  const blogPosts = await getBlogPosts(locale);
  const isEs = locale === "es";

  const ui = {
    h1: isEs ? "Blog de Restauraci\u00f3n en Houston" : "Houston Restoration Blog",
    intro: isEs
      ? "Gu\u00edas para propietarios de Houston sobre da\u00f1o por agua, moho, inundaciones y reclamos de seguro."
      : "Expert guides for Houston homeowners on water damage, mold, flood cleanup, and insurance claims.",
    editorialIntro: isEs
      ? "Cada art\u00edculo est\u00e1 escrito desde la experiencia directa de un sobreviviente del Hurac\u00e1n Harvey. Cubrimos desde emergencias por tuber\u00edas rotas hasta el proceso de reclamos de seguro, todo con datos espec\u00edficos de Texas, precios locales de Houston y las lecciones aprendidas de propietarios reales."
      : "Every article is written from the firsthand experience of a Hurricane Harvey survivor. We cover everything from burst pipe emergencies to navigating insurance claims, all with Texas-specific data, local Houston pricing, and lessons learned from real homeowners who have been through the process.",
    featuredHeading: isEs ? "Gu\u00edas M\u00e1s Importantes" : "Most Important Guides",
    allArticlesHeading: isEs ? "Todos los Art\u00edculos" : "All Articles",
    ctaHeading: isEs ? "\u00bfNecesita M\u00e1s Ayuda?" : "Need More Help?",
    ctaText: isEs
      ? "Si est\u00e1 enfrentando una emergencia por da\u00f1o de agua, moho o inundaci\u00f3n, comience con nuestra gu\u00eda de emergencia paso a paso."
      : "If you're dealing with a water damage, mold, or flood emergency, start with our step-by-step emergency guide.",
    ctaButton: isEs ? "Gu\u00eda de Emergencia por Inundaci\u00f3n" : "Emergency Flood Guide",
    ctaButtonHref: localePath("/blog/what-to-do-when-your-house-floods-houston", locale),
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-2">{ui.h1}</h1>
      <p className="text-xl text-gray-600 mb-4">{ui.intro}</p>
      <p className="text-gray-600 mb-10 max-w-3xl">{ui.editorialIntro}</p>

      {/* Featured Posts */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{ui.featuredHeading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.slice(0, 4).map((post) => (
            <Link
              key={post.slug}
              href={localePath(`/blog/${post.slug}`, locale)}
              className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md hover:border-amber-300 transition-all"
            >
              {post.image && (
                <Image
                  src={post.image}
                  alt={post.title}
                  width={640}
                  height={360}
                  className="w-full rounded-lg mb-3 object-cover aspect-video"
                />
              )}
              <span className="text-xs bg-amber-50 text-amber-700 font-medium px-2 py-0.5 rounded">
                {post.category}
              </span>
              <h3 className="text-lg font-bold text-gray-900 mt-2 mb-2 group-hover:text-amber-700 transition-colors leading-snug">
                {post.title}
              </h3>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">{post.description}</p>
              <div className="flex items-center justify-between text-xs text-gray-400">
                <span>
                  {new Date(post.publishDate).toLocaleDateString(
                    locale === "es" ? "es-US" : "en-US",
                    { month: "long", day: "numeric", year: "numeric" }
                  )}
                </span>
                <span>{post.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* All Posts */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{ui.allArticlesHeading}</h2>
        <div className="space-y-3">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={localePath(`/blog/${post.slug}`, locale)}
              className="group flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-xl hover:shadow-sm hover:border-amber-300 transition-all"
            >
              <div className="flex-1 min-w-0">
                <span className="text-xs bg-gray-100 text-gray-600 font-medium px-2 py-0.5 rounded">
                  {post.category}
                </span>
                <h3 className="text-base font-semibold text-gray-900 mt-1 mb-1 group-hover:text-amber-700 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm truncate">{post.description}</p>
              </div>
              {post.image && (
                <Image
                  src={post.image}
                  alt={post.title}
                  width={120}
                  height={68}
                  className="rounded-lg object-cover w-[120px] h-[68px] flex-shrink-0"
                />
              )}
            </Link>
          ))}
        </div>
      </section>

      {/* Editorial Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {isEs ? "Por Qu\u00e9 Escribimos Estas Gu\u00edas" : "Why We Write These Guides"}
        </h2>
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6">
          {isEs ? (
            <>
              <p className="text-gray-700 mb-3">Houston no es como cualquier otra ciudad en lo que respecta a la restauraci\u00f3n de propiedades. Nuestra humedad extrema, la temporada de huracanes, el suelo arcilloso expansivo y la cercan\u00eda a los bayous crean un conjunto de desaf\u00edos que los recursos gen\u00e9ricos de restauraci\u00f3n simplemente no abordan.</p>
              <p className="text-gray-700 mb-3">Cada gu\u00eda aqu\u00ed est\u00e1 escrita con datos espec\u00edficos de Texas: leyes estatales de seguros, precios de Xactimate del \u00e1rea de Houston, patrones de da\u00f1o comunes en nuestra regi\u00f3n, y las lecciones que los propietarios locales han aprendido.</p>
              <p className="text-gray-700">Ya sea que est\u00e9 enfrentando una emergencia en este momento o investigando para estar preparado, estas gu\u00edas le proporcionan la informaci\u00f3n que necesita para tomar decisiones acertadas y proteger su propiedad.</p>
            </>
          ) : (
            <>
              <p className="text-gray-700 mb-3">Houston isn&apos;t like any other city when it comes to property restoration. Our extreme humidity, hurricane season, expansive clay soil, and bayou proximity create a unique set of challenges that generic restoration resources simply don&apos;t cover.</p>
              <p className="text-gray-700 mb-3">Every guide here is written with Texas-specific data: state insurance laws, Houston-area Xactimate pricing, common damage patterns across our region, and the lessons local homeowners have learned.</p>
              <p className="text-gray-700">Whether you&apos;re dealing with an emergency right now or researching to be prepared, these guides give you the information you need to make smart decisions and protect your property.</p>
            </>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {(isEs ? [
            { topic: "Da\u00f1o por Agua", desc: "Tuber\u00edas rotas, inundaciones, limpieza de emergencia" },
            { topic: "Moho", desc: "Detecci\u00f3n, remediaci\u00f3n, prevenci\u00f3n" },
            { topic: "Seguros", desc: "Reclamos, ajustadores, derechos de Texas" },
            { topic: "Prevenci\u00f3n", desc: "Mantenimiento, preparaci\u00f3n para huracanes" },
          ] : [
            { topic: "Water Damage", desc: "Burst pipes, flooding, emergency cleanup" },
            { topic: "Mold", desc: "Detection, remediation, prevention" },
            { topic: "Insurance", desc: "Claims, adjusters, Texas rights" },
            { topic: "Prevention", desc: "Maintenance, hurricane preparedness" },
          ]).map(({ topic, desc }) => (
            <div key={topic} className="bg-white border border-gray-200 rounded-lg p-3 text-center">
              <h3 className="font-bold text-gray-900 text-sm">{topic}</h3>
              <p className="text-xs text-gray-500 mt-1">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{ui.ctaHeading}</h3>
        <p className="text-gray-700 mb-4">{ui.ctaText}</p>
        <Link
          href={ui.ctaButtonHref}
          className="inline-block bg-amber-700 text-white font-bold px-6 py-3 rounded-lg hover:bg-amber-800"
        >
          {ui.ctaButton}
        </Link>
      </div>
    </div>
  );
}
