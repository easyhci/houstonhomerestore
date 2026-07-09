import type { Metadata } from "next";
import Image from "next/image";
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
    ? "Guía de Daño por Agua en Houston, De un Sobreviviente de Harvey (2026)"
    : "Houston Water Damage Guide, From a Harvey Survivor (2026)";
  const description = isEs
    ? "Lo que aprendí después de $47,000 en daños y 8 meses de peleas con el seguro. Guías de restauración, moho e inundaciones específicas para Houston de un propietario que lo vivió."
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

  const TODAY = new Date().toISOString().slice(0, 10);

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: isEs
      ? "Guía de Daño por Agua en Houston, De un Sobreviviente de Harvey"
      : "Houston Water Damage Guide, From a Harvey Survivor",
    url: isEs
      ? "https://houstonhomerestore.com/es"
      : "https://houstonhomerestore.com",
    datePublished: "2025-01-01",
    dateModified: TODAY,
    inLanguage: isEs ? "es" : "en",
    isPartOf: {
      "@type": "WebSite",
      name: "HoustonHomeRestore",
      url: "https://houstonhomerestore.com",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "HoustonHomeRestore",
    url: "https://houstonhomerestore.com",
    description:
      "Houston homeowner education resource for water damage, mold, and flood recovery. Built by a Harvey survivor so other homeowners don't navigate this blind.",
    inLanguage: isEs ? "es" : "en",
    publisher: {
      "@type": "Organization",
      name: "HoustonHomeRestore",
      url: "https://houstonhomerestore.com",
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
    sameAs: [],
  };

  const pillars = isEs
    ? [
        {
          title: "Daño por Agua",
          description:
            "Guías completas sobre restauración de daño por agua: costos, pasos de emergencia y qué esperar de los contratistas.",
          href: localePath("/water-damage-restoration-houston", locale),
          icon: "💧",
          color: "bg-blue-50 border-blue-200 hover:border-blue-400",
          labelColor: "text-blue-700",
        },
        {
          title: "Remediación de Moho",
          description:
            "Cómo detectar, remediar y prevenir el moho en el clima húmedo de Houston. Lo que los contratistas de moho no le dicen.",
          href: localePath("/mold-removal-houston", locale),
          icon: "🔬",
          color: "bg-green-50 border-green-200 hover:border-green-400",
          labelColor: "text-green-700",
        },
        {
          title: "Limpieza de Inundaciones",
          description:
            "Qué hacer inmediatamente después de una inundación. Pasos de limpieza, plazos para el moho y cómo documentar los daños.",
          href: localePath("/flood-cleanup-houston", locale),
          icon: "🏠",
          color: "bg-amber-50 border-amber-200 hover:border-amber-400",
          labelColor: "text-amber-700",
        },
        {
          title: "Reclamos de Seguro",
          description:
            "Cómo navegar los reclamos de seguro de propietarios en Texas. Sus derechos, errores comunes y cómo apelar una oferta baja.",
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
            "Houston se encuentra en el corredor de huracanes del Golfo. Harvey fue una tormenta de categoría 4 que descargó más de 60 pulgadas de lluvia. Prepararse con anticipación no es opcional.",
          accent: "bg-red-100 border-red-300",
          heading: "text-red-800",
        },
        {
          title: "Humedad Extrema Todo el Año",
          period: "Más del 90% de humedad relativa",
          description:
            "La humedad de Houston hace que el moho pueda empezar a crecer en superficies mojadas en tan solo 24 a 48 horas. Cada trabajo de daño por agua es también una carrera contra el moho.",
          accent: "bg-green-100 border-green-300",
          heading: "text-green-800",
        },
        {
          title: "Suelo Arcilloso Expansivo",
          period: "Problema de fundación único de Texas",
          description:
            "El suelo arcilloso de Houston se expande cuando se moja y se contrae cuando se seca. Esto provoca que las fundaciones se muevan, lo que puede agravar el daño por agua con grietas estructurales.",
          accent: "bg-amber-100 border-amber-300",
          heading: "text-amber-800",
        },
        {
          title: "Inundaciones de Bayou",
          period: "Zonas de inundación FEMA en toda la ciudad",
          description:
            "El sistema de bayous de Houston atraviesa barrios residenciales. La proximidad a un bayou puede cuadruplicar su riesgo de inundación, y muchos propietarios no saben que están en una zona de inundación.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* Hero */}
      <section className="relative w-full aspect-[16/9] min-h-[400px] max-h-[600px]">
        <Image
          src="/images/hero-houston.jpg"
          alt={
            isEs
              ? "Panorama de Houston a lo largo del bayou"
              : "Houston skyline along the bayou"
          }
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
              {isEs
                ? "Guía de Daño por Agua en Houston, De un Sobreviviente de Harvey"
                : "Houston Water Damage Guide, From a Harvey Survivor"}
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
              {isEs
                ? <>Lo que aprendí después de $47,000 en daños y 8 meses de <Link href={localePath("/insurance-claim-restoration-houston", locale)} className="underline hover:text-amber-200">peleas con el seguro</Link></>
                : <>What I learned after $47,000 in damage and 8 months of <Link href={localePath("/insurance-claim-restoration-houston", locale)} className="underline hover:text-amber-200">insurance fights</Link></>}
            </p>
            <Link
              href={localePath("/blog/what-to-do-when-your-house-floods-houston", locale)}
              className="inline-block bg-amber-600 hover:bg-amber-500 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors shadow-lg"
            >
              {isEs
                ? "Leer la Guía de Emergencia por Inundación"
                : "Read the Emergency Flood Guide"}
            </Link>
          </div>
        </div>
      </section>

      {/* Marcus Chen Origin Story */}
      <section className="bg-stone-50 border-b border-stone-200 py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-start gap-6">
            <Image
              src="/images/marcus-chen.jpg"
              alt="Marcus Chen"
              width={64}
              height={64}
              className="w-16 h-16 rounded-full object-cover flex-shrink-0"
            />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                {isEs ? "Por qué construí este sitio" : "Why I built this site"}
              </h2>
              {isEs ? (
                <>
                  <p className="text-gray-700 mb-3">
                    Soy Marcus Chen, ingeniero de software. En 2015 compré un bungaló de los años 60 en The Heights, uno de los barrios más antiguos y queridos de Houston. Dos años después, el{" "}
                    <Link href={localePath("/flood-cleanup-houston", locale)} className="text-amber-700 font-medium hover:underline">Huracán Harvey</Link>{" "}
                    llegó con 3 pies de agua.
                  </p>
                  <p className="text-gray-700 mb-3">
                    El{" "}
                    <Link href={localePath("/water-damage-restoration-houston", locale)} className="text-amber-700 font-medium hover:underline">daño por agua</Link>{" "}
                    total fue de $47,000. El{" "}
                    <Link href={localePath("/insurance-claim-restoration-houston", locale)} className="text-amber-700 font-medium hover:underline">seguro</Link>{" "}
                    cubrió $19,000, después de 8 meses de pelea. Contraté contratistas que no estaban calificados, firmé contratos que no entendía, y pasé noches leyendo foros sobre reclamos de seguro para entender mis derechos.
                  </p>
                  <p className="text-gray-700">
                    Este sitio existe para que usted no tenga que pasar por lo mismo. No es un directorio de contratistas. No vendemos datos de contacto. Es lo que hubiera querido tener en agosto de 2017.
                  </p>
                </>
              ) : (
                <>
                  <p className="text-gray-700 mb-3">
                    I&apos;m Marcus Chen, a software engineer. In 2015 I bought a 1960s bungalow in The Heights, one of Houston&apos;s oldest and most beloved neighborhoods. Two years later,{" "}
                    <Link href={localePath("/flood-cleanup-houston", locale)} className="text-amber-700 font-medium hover:underline">Hurricane Harvey</Link>{" "}
                    arrived with 3 feet of water.
                  </p>
                  <p className="text-gray-700 mb-3">
                    The total{" "}
                    <Link href={localePath("/water-damage-restoration-houston", locale)} className="text-amber-700 font-medium hover:underline">water damage</Link>{" "}
                    came to $47,000.{" "}
                    <Link href={localePath("/insurance-claim-restoration-houston", locale)} className="text-amber-700 font-medium hover:underline">Insurance</Link>{" "}
                    covered $19,000, after 8 months of fighting. I hired contractors who weren&apos;t qualified, signed contracts I didn&apos;t understand, and spent nights reading insurance claim forums trying to understand my rights.
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
                {isEs ? "Leer la historia completa →" : "Read the full story →"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar Pages Card Grid */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2 text-center">
            {isEs ? "Guías Principales" : "Core Guides"}
          </h2>
          <p className="text-gray-500 text-center mb-10">
            {isEs
              ? "Todo lo que necesita saber sobre restauración de propiedades en Houston"
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
                  {isEs ? "Leer la guía →" : "Read the guide →"}
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
            {isEs ? "Artículos Destacados" : "Featured Articles"}
          </h2>
          <p className="text-gray-500 mb-8">
            {isEs
              ? "Los artículos más importantes para propietarios de Houston"
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
                  {isEs ? "Leer artículo →" : "Read article →"}
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href={localePath("/blog", locale)}
              className="inline-block border border-amber-700 text-amber-700 font-semibold px-6 py-3 rounded-xl hover:bg-amber-50 transition-colors"
            >
              {isEs ? "Ver todos los artículos →" : "View all articles →"}
            </Link>
          </div>
        </div>
      </section>

      {/* Houston-Specific Risks */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
            {isEs
              ? "Por Qué Houston Es Diferente"
              : "Why Houston Is Different"}
          </h2>
          <p className="text-gray-500 mb-10">
            {isEs
              ? "Cuatro factores que hacen que el daño por agua en Houston sea más complicado que en cualquier otra ciudad"
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
