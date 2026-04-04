import type { Metadata } from "next";
import Link from "next/link";
import { isValidLocale, type Locale } from "@/lib/i18n/config";
import { localePath } from "@/lib/i18n/localePath";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : "en";
  const isEs = locale === "es";

  const title = isEs
    ? "Acerca de HoustonHomeRestore, Historia de Marcus Chen y Harvey"
    : "About HoustonHomeRestore, Marcus Chen's Harvey Story";
  const description = isEs
    ? "Marcus Chen es un ingeniero de software que perdi\u00f3 $47,000 en el Hurac\u00e1n Harvey. Este sitio es su recurso educativo sobre da\u00f1o por agua, moho y seguros en Houston."
    : "Marcus Chen is a software engineer who lost $47,000 in Hurricane Harvey. This site is his educational resource on water damage, mold, and insurance in Houston.";

  const canonical =
    locale === "en"
      ? "https://houstonhomerestore.com/about"
      : "https://houstonhomerestore.com/es/about";

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: "https://houstonhomerestore.com/about",
        es: "https://houstonhomerestore.com/es/about",
        "x-default": "https://houstonhomerestore.com/about",
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "profile",
    },
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : "en";
  const isEs = locale === "es";

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Marcus Chen",
    jobTitle: "Founder, Software Engineer",
    url: "https://houstonhomerestore.com/about",
    description:
      "Software engineer and Hurricane Harvey survivor who built HoustonHomeRestore after losing $47,000 in flood damage to his Heights bungalow in 2017.",
    worksFor: {
      "@type": "Organization",
      name: "HoustonHomeRestore",
      url: "https://houstonhomerestore.com",
    },
    homeLocation: {
      "@type": "City",
      name: "Houston",
      addressRegion: "TX",
    },
  };

  const relatedResources = isEs
    ? [
        { label: "Da\u00f1o por Agua", href: localePath("/water-damage-restoration-houston", locale) },
        { label: "Remediaci\u00f3n de Moho", href: localePath("/mold-removal-houston", locale) },
        { label: "Limpieza de Inundaciones", href: localePath("/flood-cleanup-houston", locale) },
        { label: "Reclamos de Seguro", href: localePath("/insurance-claim-restoration-houston", locale) },
        { label: "Blog", href: localePath("/blog", locale) },
      ]
    : [
        { label: "Water Damage Restoration", href: localePath("/water-damage-restoration-houston", locale) },
        { label: "Mold Removal", href: localePath("/mold-removal-houston", locale) },
        { label: "Flood Cleanup", href: localePath("/flood-cleanup-houston", locale) },
        { label: "Insurance Claims", href: localePath("/insurance-claim-restoration-houston", locale) },
        { label: "Blog", href: localePath("/blog", locale) },
      ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1C1008] to-[#3D2010] text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-amber-700 text-white rounded-full flex items-center justify-center font-extrabold text-2xl flex-shrink-0">
              MC
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
                {isEs ? "Marcus Chen" : "Marcus Chen"}
              </h1>
              <p className="text-amber-200 text-sm mt-1">
                {isEs
                  ? "Fundador, HoustonHomeRestore. Sobreviviente del Hurac\u00e1n Harvey."
                  : "Founder, HoustonHomeRestore. Hurricane Harvey survivor."}
              </p>
            </div>
          </div>
          <p className="text-amber-100 text-lg">
            {isEs
              ? "Ingeniero de software. Propietario de una casa en The Heights. Sobreviviente del Hurac\u00e1n Harvey. $47,000 en da\u00f1os. $19,000 del seguro. 8 meses de pelea."
              : "Software engineer. Heights homeowner. Hurricane Harvey survivor. $47,000 in damage. $19,000 from insurance. 8 months of fighting."}
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-12">

        {/* Full Harvey Story */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {isEs ? "La Historia Completa" : "The Full Story"}
          </h2>

          {isEs ? (
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                En 2015 compr\u00e9 un bungal\u00f3 de los a\u00f1os 60 en The Heights, uno de los barrios hist\u00f3ricos m\u00e1s queridos de Houston. Era una casa con car\u00e1cter: pisos de madera original, techos altos, un porche delantero que realmente se usaba. Soy ingeniero de software; llevaba a\u00f1os trabajando y quer\u00eda echar ra\u00edces en Houston.
              </p>
              <p>
                No ten\u00eda experiencia en mantenimiento de casas. Nunca hab\u00eda enfrentado un da\u00f1o por agua grave. No entend\u00eda las zonas de inundaci\u00f3n de FEMA ni el seguro contra inundaciones. Simplemente asum\u00ed que mi p\u00f3liza de propietario cubrir\u00eda cualquier cosa que ocurriera.
              </p>
              <p>
                El Hurac\u00e1n Harvey lleg\u00f3 en agosto de 2017. En las primeras 36 horas, cayeron casi tres pies de lluvia sobre Houston. El Bayou Buffalo se desbord\u00f3. El agua entr\u00f3 por las puertas. Para cuando pude regresar a mi casa, hab\u00eda casi un pie de agua estancada que llevaba horas acumulada.
              </p>
              <p>
                El da\u00f1o fue devastador. Drywall da\u00f1ado hasta 4 pies de altura en todas las habitaciones. Pisos de madera destruidos. El sistema HVAC arruinado. La cocina completa destrozada. El moho empieza a crecer en 48 horas con el clima de Houston. El da\u00f1o total fue de $47,000.
              </p>
              <p>
                Llam\u00e9 a mi compa\u00f1\u00eda de seguros. Enviaron un ajustador. La primera oferta fue de $9,200. Nueve mil doscientos d\u00f3lares para un da\u00f1o de $47,000. Comenc\u00e9 a investigar. Aprend\u00ed sobre el proceso de p\u00e9rdida total. Contrat\u00e9 un ajustador p\u00fablico. Apel\u00e9. Disput\u00e9 cada l\u00ednea del estimado. Despu\u00e9s de 8 meses, el seguro pag\u00f3 $19,000. Todav\u00eda $28,000 de mi bolsillo.
              </p>
              <p>
                Tambi\u00e9n contrat\u00e9 al contratista equivocado para la restauraci\u00f3n inicial. Prometi\u00f3 entregas r\u00e1pidas, cobr\u00f3 por adelantado y desapareci\u00f3 con el trabajo a medias. Tuve que encontrar un segundo contratista. Aprend\u00ed qu\u00e9 preguntas hacer, qu\u00e9 contratos firmar y c\u00f3mo documentar todo.
              </p>
              <p>
                Este sitio es el manual que quisiera haber tenido en agosto de 2017.
              </p>
            </div>
          ) : (
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                In 2015, I bought a 1960s bungalow in The Heights, one of Houston&apos;s most beloved historic neighborhoods. It was a house with character: original hardwood floors, high ceilings, a front porch that actually got used. I was a software engineer who had worked for years and wanted to put down roots in Houston.
              </p>
              <p>
                I had no experience with home maintenance. I had never dealt with serious water damage. I didn&apos;t understand FEMA flood zones or flood insurance. I simply assumed my homeowner&apos;s policy would cover anything that happened.
              </p>
              <p>
                Hurricane Harvey arrived in August 2017. In the first 36 hours, nearly three feet of rain fell on Houston. Buffalo Bayou overflowed. Water came in through the doors. By the time I could return to my house, there had been nearly a foot of standing water inside for hours.
              </p>
              <p>
                The damage was devastating. Drywall to 4 feet in every room. Hardwood floors destroyed. HVAC system ruined. Entire kitchen gutted. Mold begins growing within 48 hours in Houston&apos;s climate. The total damage came to $47,000.
              </p>
              <p>
                I called my insurance company. They sent an adjuster. The first offer was $9,200. Nine thousand two hundred dollars for $47,000 in damage. I started researching. I learned about the total loss process. I hired a public adjuster. I appealed. I disputed every line of the estimate. After 8 months, insurance paid $19,000. Still $28,000 out of my own pocket.
              </p>
              <p>
                I also hired the wrong contractor for the initial restoration. He promised fast timelines, charged upfront, and disappeared with the work half done. I had to find a second contractor. I learned what to ask, what contracts to sign, how to document everything.
              </p>
              <p>
                This site is the manual I wish I had in August 2017.
              </p>
            </div>
          )}
        </section>

        {/* What This Site Is */}
        <section className="mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-green-800 mb-4">
                {isEs ? "Qu\u00e9 Es Este Sitio" : "What This Site Is"}
              </h2>
              <ul className="space-y-3 text-gray-700 text-sm">
                {(isEs ? [
                  "Un recurso educativo gratuito para propietarios de Houston",
                  "Gu\u00edas escritas desde la experiencia directa de un sobreviviente de Harvey",
                  "Informaci\u00f3n espec\u00edfica de Texas: costos reales, leyes de seguros estatales, riesgos clim\u00e1ticos locales",
                  "Un lugar para entender el proceso antes de contratar a alguien",
                  "Contenido actualizado con datos actuales del mercado de Houston",
                ] : [
                  "A free educational resource for Houston homeowners",
                  "Guides written from the firsthand experience of a Harvey survivor",
                  "Texas-specific information: real costs, state insurance law, local climate risks",
                  "A place to understand the process before you hire anyone",
                  "Content updated with current Houston market data",
                ]).map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-green-600 font-bold mt-0.5 flex-shrink-0">&#10003;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-red-800 mb-4">
                {isEs ? "Qu\u00e9 No Es Este Sitio" : "What This Site Is Not"}
              </h2>
              <ul className="space-y-3 text-gray-700 text-sm">
                {(isEs ? [
                  "No es un directorio de contratistas",
                  "No vendemos datos de contacto ni referencias de contratistas",
                  "No somos afiliados de ninguna empresa de restauraci\u00f3n",
                  "No garantizamos la calidad de ning\u00fan contratista externo",
                  "No somos abogados, ajustadores de seguros ni inspectores de moho",
                ] : [
                  "Not a contractor directory",
                  "We do not sell leads or contractor referrals",
                  "We are not affiliated with any restoration company",
                  "We do not guarantee the quality of any outside contractor",
                  "We are not lawyers, insurance adjusters, or mold inspectors",
                ]).map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-red-600 font-bold mt-0.5 flex-shrink-0">&#10005;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Editorial note */}
        <section className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-14">
          <h2 className="text-lg font-bold text-amber-800 mb-2">
            {isEs ? "Pol\u00edtica Editorial" : "Editorial Policy"}
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            {isEs
              ? "Todos los contenidos son escritos o revisados por Marcus Chen. Los costos se basan en datos reales del \u00e1rea de Houston, incluyendo precios Xactimate de Texas y entrevistas con propietarios locales. Ninguna empresa paga por aparecer o ser mencionada en este sitio. Si eso cambia alguna vez, se divulgar\u00e1 claramente."
              : "All content is written or reviewed by Marcus Chen. Costs are based on real Houston-area data, including Texas Xactimate pricing and interviews with local homeowners. No company pays to be featured or mentioned on this site. If that ever changes, it will be clearly disclosed."}
          </p>
        </section>

        {/* Contact Form */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {isEs ? "Contacto" : "Contact"}
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            {isEs
              ? "Preguntas, correcciones o su propia historia de Harvey. No ofrezco recomendaciones de contratistas."
              : "Questions, corrections, or your own Harvey story. I don't offer contractor recommendations."}
          </p>
          <form
            action="/api/contact"
            method="POST"
            className="space-y-4 bg-stone-50 border border-stone-200 rounded-2xl p-6"
          >
            <div>
              <label
                htmlFor="contact-name"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                {isEs ? "Nombre" : "Name"}
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                placeholder={isEs ? "Su nombre" : "Your name"}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>
            <div>
              <label
                htmlFor="contact-email"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                {isEs ? "Correo Electr\u00f3nico" : "Email"}
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                placeholder={isEs ? "tu@correo.com" : "you@email.com"}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>
            <div>
              <label
                htmlFor="contact-message"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                {isEs ? "Mensaje" : "Message"}
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                placeholder={
                  isEs
                    ? "Su pregunta o mensaje..."
                    : "Your question or message..."
                }
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
              />
            </div>
            <button
              type="submit"
              className="bg-amber-700 hover:bg-amber-800 text-white font-bold px-6 py-3 rounded-lg text-sm transition-colors"
            >
              {isEs ? "Enviar Mensaje" : "Send Message"}
            </button>
          </form>
        </section>

        {/* Related Resources */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            {isEs ? "Recursos Relacionados" : "Related Resources"}
          </h2>
          <div className="flex flex-wrap gap-3">
            {relatedResources.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="bg-amber-50 border border-amber-200 text-amber-700 text-sm px-4 py-2 rounded-lg hover:bg-amber-100 transition-colors font-medium"
              >
                {label} &rarr;
              </Link>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
