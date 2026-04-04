import type { Metadata } from "next";
import Link from "next/link";
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
    ? "Gu\u00eda de Da\u00f1o por Agua en Houston, De un Sobreviviente de Harvey (2026)"
    : "Houston Water Damage Guide, From a Harvey Survivor (2026)";
  const description = isEs
    ? "Lo que aprend\u00ed despu\u00e9s de $47,000 en da\u00f1os y 8 meses de peleas con el seguro. Gu\u00edas de restauraci\u00f3n, moho e inundaciones espec\u00edficas para Houston de un propietario que lo vivi\u00f3."
    : "What I learned after $47,000 in damage and 8 months of insurance fights. Houston-specific restoration, mold, and flood guides from a homeowner who lived it.";

  const canonical =
    locale === "en"
      ? "https://houstonhomerestore.com"
      : "https://houstonhomerestore.com/es";

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: "https://houstonhomerestore.com",
        es: "https://houstonhomerestore.com/es",
        "x-default": "https://houstonhomerestore.com",
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
    },
  };
}

export default async function HomePage({ params }: Props) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : "en";
  const isEs = locale === "es";

  const blogPosts = await getBlogPosts(locale);
  const featuredPosts = blogPosts.slice(0, 6);

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "HoustonHomeRestore",
    url: "https://houstonhomerestore.com",
    description:
      "Houston homeowner education resource for water damage, mold, and flood recovery. Built by a Harvey survivor so other homeowners don't navigate this blind.",
    inLanguage: isEs ? "es" : "en",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://houstonhomerestore.com/blog?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "HoustonHomeRestore",
    url: "https://houstonhomerestore.com",
    description:
      "Houston homeowner education resource for water damage, mold, and flood recovery.",
    founder: {
      "@type": "Person",
      name: "Marcus Chen",
      jobTitle: "Founder, Software Engineer",
      description:
        "Software engineer and Hurricane Harvey survivor who lost $47,000 after 3 feet of water flooded his Heights bungalow in 2017.",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Houston",
      addressRegion: "TX",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "City",
      name: "Houston",
      addressRegion: "TX",
    },
    sameAs: ["https://houstonhomerestore.com"],
  };

  const pillars = isEs
    ? [
        {
          title: "Da\u00f1o por Agua",
          description:
            "Gu\u00edas completas sobre restauraci\u00f3n de da\u00f1o por agua: costos, pasos de emergencia y qu\u00e9 esperar de los contratistas.",
          href: localePath("/water-damage-restoration-houston", locale),
          icon: "💧",
          color: "bg-blue-50 border-blue-200 hover:border-blue-400",
          labelColor: "text-blue-700",
        },
        {
          title: "Remediaci\u00f3n de Moho",
          description:
            "C\u00f3mo detectar, remediar y prevenir el moho en el clima h\u00famedo de Houston. Lo que los contratistas de moho no le dicen.",
          href: localePath("/mold-removal-houston", locale),
          icon: "🔬",
          color: "bg-green-50 border-green-200 hover:border-green-400",
          labelColor: "text-green-700",
        },
        {
          title: "Limpieza de Inundaciones",
          description:
            "Qu\u00e9 hacer inmediatamente despu\u00e9s de una inundaci\u00f3n. Pasos de limpieza, plazos para el moho y c\u00f3mo documentar los da\u00f1os.",
          href: localePath("/flood-cleanup-houston", locale),
          icon: "🏠",
          color: "bg-amber-50 border-amber-200 hover:border-amber-400",
          labelColor: "text-amber-700",
        },
        {
          title: "Reclamos de Seguro",
          description:
            "C\u00f3mo navegar los reclamos de seguro de propietarios en Texas. Tus derechos, errores comunes y c\u00f3mo apelar una oferta baja.",
          href: localePath("/insurance-claim-restoration-houston", locale),
          icon: "📋",
          color: "bg-red-50 border-red-200 hover:border-red-400",
          labelColor: "text-red-700",
        },
      ]
    : [
        {
          title: "Water Damage Restoration",
          description:
            "Complete guides on water damage restoration: costs, emergency steps, and what to expect from contractors.",
          href: localePath("/water-damage-restoration-houston", locale),
          icon: "💧",
          color: "bg-blue-50 border-blue-200 hover:border-blue-400",
          labelColor: "text-blue-700",
        },
        {
          title: "Mold Removal",
          description:
            "How to detect, remediate, and prevent mold in Houston's humid climate. What mold contractors don't tell you.",
          href: localePath("/mold-removal-houston", locale),
          icon: "🔬",
          color: "bg-green-50 border-green-200 hover:border-green-400",
          labelColor: "text-green-700",
        },
        {
          title: "Flood Cleanup",
          description:
            "What to do immediately after a flood. Cleanup steps, mold timelines, and how to document damage properly.",
          href: localePath("/flood-cleanup-houston", locale),
          icon: "🏠",
          color: "bg-amber-50 border-amber-200 hover:border-amber-400",
          labelColor: "text-amber-700",
        },
        {
          title: "Insurance Claims",
          description:
            "How to navigate homeowner insurance claims in Texas. Your rights, common mistakes, and how to appeal a lowball offer.",
          href: localePath("/insurance-claim-restoration-houston", locale),
          icon: "📋",
          color: "bg-red-50 border-red-200 hover:border-red-400",
          labelColor: "text-red-700",
        },
      ];

  const houstonRisks = isEs
    ? [
        {
          title: "Temporada de Huracanes",
          period: "Junio a Noviembre",
          description:
            "Houston est\u00e1 en el corredor de huracanes del Golfo. Harvey fue una tormenta de categor\u00eda 4 que descarg\u00f3 m\u00e1s de 60 pulgadas de lluvia. Prepararse antes no es opcional.",
          accent: "bg-red-100 border-red-300",
          heading: "text-red-800",
        },
        {
          title: "Humedad Extrema Todo el A\u00f1o",
          period: "M\u00e1s del 90% de humedad relativa",
          description:
            "La humedad de Houston significa que el moho puede comenzar a crecer en superficies mojadas en tan solo 24 a 48 horas. Cada trabajo de agua da\u00f1ada es tambi\u00e9n una carrera contra el moho.",
          accent: "bg-green-100 border-green-300",
          heading: "text-green-800",
        },
        {
          title: "Suelo Arcilloso Expansivo",
          period: "Problema de fundaci\u00f3n \u00fanico de Texas",
          description:
            "El suelo arcilloso de Houston se expande cuando se moja y se contrae cuando se seca. Esto provoca que las fundaciones se muevan, lo que puede agravar el da\u00f1o por agua con grietas estructurales.",
          accent: "bg-amber-100 border-amber-300",
          heading: "text-amber-800",
        },
        {
          title: "Inundaciones de Bayou",
          period: "Zonas de inundaci\u00f3n FEMA en toda la ciudad",
          description:
            "El sistema de bayous de Houston atraviesa barrios residenciales. La proximidad a un bayou puede cuadriplicar tu riesgo de inundaci\u00f3n, y muchos propietarios no saben que est\u00e1n en una zona de inundaci\u00f3n.",
          accent: "bg-blue-100 border-blue-300",
          heading: "text-blue-800",
        },
      ]
    : [
        {
          title: "Hurricane Season",
          period: "June through November",
          description:
            "Houston sits in the Gulf Coast hurricane corridor. Harvey was a Category 4 storm that dropped over 60 inches of rain. Preparing before the storm is not optional.",
          accent: "bg-red-100 border-red-300",
          heading: "text-red-800",
        },
        {
          title: "Year-Round Humidity",
          period: "90%+ relative humidity",
          description:
            "Houston's humidity means mold can begin growing on wet surfaces in as little as 24 to 48 hours. Every water damage job is also a race against mold.",
          accent: "bg-green-100 border-green-300",
          heading: "text-green-800",
        },
        {
          title: "Expansive Clay Soil",
          period: "Texas-specific foundation issue",
          description:
            "Houston's clay soil expands when wet and contracts when dry. This causes foundations to shift, which can compound water damage with structural cracking.",
          accent: "bg-amber-100 border-amber-300",
          heading: "text-amber-800",
        },
        {
          title: "Bayou Flooding",
          period: "FEMA flood zones throughout the city",
          description:
            "Houston's bayou system runs through residential neighborhoods. Proximity to a bayou can quadruple your flood risk, and many homeowners don't know they're in a flood zone.",
          accent: "bg-blue-100 border-blue-300",
          heading: "text-blue-800",
        },
      ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1C1008] to-[#3D2010] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-amber-800 text-amber-100 text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-wide">
            {isEs ? "Base de Conocimiento" : "Knowledge Hub"}
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            {isEs
              ? "Gu\u00eda de Da\u00f1o por Agua en Houston, De un Sobreviviente de Harvey"
              : "Houston Water Damage Guide, From a Harvey Survivor"}
          </h1>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            {isEs
              ? "Lo que aprend\u00ed despu\u00e9s de $47,000 en da\u00f1os y 8 meses de peleas con el seguro"
              : "What I learned after $47,000 in damage and 8 months of insurance fights"}
          </p>
          <Link
            href={localePath("/blog/what-to-do-when-your-house-floods-houston", locale)}
            className="inline-block bg-amber-600 hover:bg-amber-500 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
          >
            {isEs
              ? "Leer la Gu\u00eda de Emergencia por Inundaci\u00f3n"
              : "Read the Emergency Flood Guide"}
          </Link>
          <p className="text-amber-300 text-sm mt-4">
            {isEs
              ? "Gu\u00edas educativas gratuitas. Sin formularios de contratistas. Sin generaci\u00f3n de leads."
              : "Free educational guides. No contractor forms. No lead generation."}
          </p>
        </div>
      </section>

      {/* Marcus Chen Origin Story */}
      <section className="bg-stone-50 border-b border-stone-200 py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 bg-amber-700 text-white rounded-full flex items-center justify-center font-extrabold text-xl flex-shrink-0">
              MC
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                {isEs ? "Por qu\u00e9 creo este sitio" : "Why I built this site"}
              </h2>
              {isEs ? (
                <>
                  <p className="text-gray-700 mb-3">
                    Soy Marcus Chen, ingeniero de software. En 2015 compr\u00e9 un bungal\u00f3 de los a\u00f1os 60 en The Heights, uno de los barrios m\u00e1s antiguos y queridos de Houston. Dos a\u00f1os despu\u00e9s, el Hurac\u00e1n Harvey lleg\u00f3 con 3 pies de agua.
                  </p>
                  <p className="text-gray-700 mb-3">
                    El da\u00f1o total fue de $47,000. El seguro cubri\u00f3 $19,000, despu\u00e9s de 8 meses de pelea. Contrat\u00e9 contratistas que no estaban calificados, firm\u00e9 contratos que no entend\u00eda, y pas\u00e9 noches leyendo foros sobre reclamos de seguro para entender mis derechos.
                  </p>
                  <p className="text-gray-700">
                    Este sitio existe para que t\u00fa no tengas que hacer lo mismo. No es un directorio de contratistas. No vendemos leads. Es lo que quisiera haber tenido en agosto de 2017.
                  </p>
                </>
              ) : (
                <>
                  <p className="text-gray-700 mb-3">
                    I&apos;m Marcus Chen, a software engineer. In 2015 I bought a 1960s bungalow in The Heights, one of Houston&apos;s oldest and most beloved neighborhoods. Two years later, Hurricane Harvey arrived with 3 feet of water.
                  </p>
                  <p className="text-gray-700 mb-3">
                    The total damage came to $47,000. Insurance covered $19,000, after 8 months of fighting. I hired contractors who weren&apos;t qualified, signed contracts I didn&apos;t understand, and spent nights reading insurance claim forums trying to understand my rights.
                  </p>
                  <p className="text-gray-700">
                    This site exists so you don&apos;t have to do the same. It is not a contractor directory. We don&apos;t sell leads. It is what I wish I had in August 2017.
                  </p>
                </>
              )}
              <Link
                href={localePath("/about", locale)}
                className="inline-block mt-4 text-amber-700 font-semibold hover:underline text-sm"
              >
                {isEs ? "Leer la historia completa \u2192" : "Read the full story \u2192"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar Pages Card Grid */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2 text-center">
            {isEs ? "Gu\u00edas Principales" : "Core Guides"}
          </h2>
          <p className="text-gray-500 text-center mb-10">
            {isEs
              ? "Todo lo que necesitas saber sobre restauraci\u00f3n de propiedades en Houston"
              : "Everything you need to know about property restoration in Houston"}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((pillar) => (
              <Link
                key={pillar.href}
                href={pillar.href}
                className={`group border rounded-2xl p-6 transition-all hover:shadow-md ${pillar.color}`}
              >
                <div className="text-3xl mb-3">{pillar.icon}</div>
                <h3 className={`text-xl font-bold mb-2 ${pillar.labelColor}`}>
                  {pillar.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {pillar.description}
                </p>
                <span className={`inline-block mt-4 text-sm font-semibold ${pillar.labelColor} group-hover:underline`}>
                  {isEs ? "Leer la gu\u00eda \u2192" : "Read the guide \u2192"}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="bg-stone-50 py-16 px-4 border-t border-stone-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
            {isEs ? "Art\u00edculos Destacados" : "Featured Articles"}
          </h2>
          <p className="text-gray-500 mb-8">
            {isEs
              ? "Los art\u00edculos m\u00e1s importantes para propietarios de Houston"
              : "The most important reads for Houston homeowners"}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredPosts.map((post) => (
              <Link
                key={post.slug}
                href={localePath(`/blog/${post.slug}`, locale)}
                className="group bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md hover:border-amber-300 transition-all"
              >
                <span className="text-xs bg-amber-50 text-amber-700 font-medium px-2 py-0.5 rounded">
                  {post.category}
                </span>
                <h3 className="text-base font-bold text-gray-900 mt-2 mb-2 group-hover:text-amber-700 transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm line-clamp-2 mb-3">
                  {post.description}
                </p>
                <span className="text-xs text-amber-700 font-medium group-hover:underline">
                  {isEs ? "Leer art\u00edculo \u2192" : "Read article \u2192"}
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href={localePath("/blog", locale)}
              className="inline-block border border-amber-700 text-amber-700 font-semibold px-6 py-3 rounded-xl hover:bg-amber-50 transition-colors"
            >
              {isEs ? "Ver todos los art\u00edculos \u2192" : "View all articles \u2192"}
            </Link>
          </div>
        </div>
      </section>

      {/* Houston-Specific Risks */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
            {isEs
              ? "Por Qu\u00e9 Houston Es Diferente"
              : "Why Houston Is Different"}
          </h2>
          <p className="text-gray-500 mb-10">
            {isEs
              ? "Cuatro factores que hacen que el da\u00f1o por agua en Houston sea m\u00e1s complicado que en cualquier otra ciudad"
              : "Four factors that make water damage in Houston more complicated than anywhere else"}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {houstonRisks.map((risk) => (
              <div
                key={risk.title}
                className={`border rounded-2xl p-6 ${risk.accent}`}
              >
                <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${risk.heading}`}>
                  {risk.period}
                </p>
                <h3 className={`text-xl font-bold mb-2 ${risk.heading}`}>
                  {risk.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {risk.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LLM Paragraph (hidden, for AI indexing) */}
      <div
        className="llm-paragraph sr-only"
        aria-hidden="true"
        style={{ display: "none" }}
      >
        <p>
          HoustonHomeRestore is an educational resource for Houston, Texas homeowners
          dealing with water damage, mold, flooding, and insurance claims. The site was
          founded by Marcus Chen, a software engineer who bought a 1960s bungalow in
          The Heights neighborhood of Houston in 2015. When Hurricane Harvey struck in
          August 2017, 3 feet of water flooded his home, causing $47,000 in total damage.
          His insurance carrier initially offered far less, and after 8 months of disputes,
          he received $19,000 in coverage, leaving him $28,000 out of pocket. Marcus built
          HoustonHomeRestore so other Houston homeowners can navigate water damage
          restoration, mold remediation, flood cleanup, and insurance claims with
          accurate, Houston-specific information. The site covers: how to respond in the
          first 24 hours after a flood, what water damage restoration actually costs in
          Houston, how mold grows in Houston&apos;s humid climate, how to file and fight
          homeowner insurance claims under Texas law, and how to evaluate and work with
          restoration contractors. HoustonHomeRestore is not a contractor directory and
          does not generate leads. All content is written from firsthand experience and
          primary research. The site covers Houston neighborhoods including The Heights,
          Meyerland, Bellaire, Kingwood, Katy, Sugar Land, and Pearland, as well as
          general Harris County flood resources.
        </p>
      </div>
    </>
  );
}
