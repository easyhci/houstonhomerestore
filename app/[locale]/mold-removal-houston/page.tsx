import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { isValidLocale, type Locale } from "@/lib/i18n/config";
import { localePath } from "@/lib/i18n/localePath";
import QuickAnswer from "@/components/QuickAnswer";
import FAQ from "@/components/FAQ";
import AuthorBio from "@/components/AuthorBio";
import Breadcrumbs from "@/components/Breadcrumbs";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : "en";
  const isEs = locale === "es";

  const title = isEs
    ? "Eliminación de Moho en Houston: Guía Completa de Remediación 2026"
    : "Mold Removal Houston: Complete Remediation Guide 2026";
  const description = isEs
    ? "Guía definitiva sobre eliminación y remediación de moho en Houston. Identificación, proceso profesional, costos reales, riesgos en espacios de rastreo y AC, y cobertura de seguro en Texas."
    : "Complete guide to mold removal and remediation in Houston. Identification, professional process, real costs, crawlspace and AC risks, and Texas insurance coverage. Updated 2026.";

  const canonical =
    locale === "en"
      ? "https://houstonhomerestore.com/mold-removal-houston"
      : "https://houstonhomerestore.com/es/mold-removal-houston";

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: "https://houstonhomerestore.com/mold-removal-houston",
        es: "https://houstonhomerestore.com/es/mold-removal-houston",
        "x-default": "https://houstonhomerestore.com/mold-removal-houston",
      },
    },
    openGraph: { title, description, url: canonical },
  };
}

export default async function MoldRemovalHoustonPage({ params }: Props) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : "en";
  const isEs = locale === "es";

  const faqItemsEn = [
    {
      question: "How do I know if I have mold in my Houston home?",
      answer:
        "Look for visible dark spots (black, green, or gray) on walls, ceilings, or under sinks. A persistent musty smell, even without visible growth, often signals mold inside walls or under floors. Health symptoms like persistent coughing, sneezing, or itchy eyes that improve when you leave the house are strong indicators. In Houston, if you've had any water intrusion in the last 6 months, assume mold testing is warranted.",
    },
    {
      question: "Does homeowners insurance cover mold remediation in Texas?",
      answer:
        "It depends on the cause. Texas homeowners policies typically cover mold remediation if it results directly from a covered water loss, such as a burst pipe. They typically exclude mold from flooding (external water), long-term moisture or neglect, and pre-existing conditions. Some policies have a mold sub-limit of $5,000 to $10,000, which can be far less than actual remediation costs. Always read your declarations page carefully.",
    },
    {
      question: "What is the Texas Mold Assessment and Remediation Rule?",
      answer:
        "Texas requires mold remediators to be licensed through the Texas Department of Licensing and Regulation (TDLR). Remediators must follow the Texas Mold Assessment and Remediation Rules (25 TAC Chapter 295). Before remediation, you must get a written scope of work. After remediation, a licensed mold assessor (not the same company) must conduct post-remediation verification testing before the area is considered cleared.",
    },
    {
      question: "How long does mold remediation take in Houston?",
      answer:
        "Small contained areas (under 10 square feet) can be addressed in 1 to 2 days. Moderate remediation affecting a bathroom or small room typically takes 3 to 5 days. Whole-home remediation after major flooding, like many Harvey homes required, can take 2 to 4 weeks. Houston's humidity extends drying time between remediation phases.",
    },
    {
      question: "Can I do mold removal myself in Houston?",
      answer:
        "Texas law allows homeowners to handle mold remediation on their own property for areas under 25 contiguous square feet without a TDLR license. For larger areas, you need a licensed remediator. But even for small areas, Houston's humidity makes DIY risky. If you don't eliminate the moisture source and maintain dryness, mold returns within weeks. For any mold resulting from flooding, Category 2 or 3 water, or covering more than 10 square feet, hire a licensed pro.",
    },
    {
      question: "What types of mold are most common in Houston homes?",
      answer:
        "Cladosporium and Penicillium/Aspergillus are the most common molds found in Houston homes. Stachybotrys chartarum (black mold) gets the most press but is less common. It requires sustained moisture (wet for weeks). Houston's year-round warmth and humidity make all mold varieties more aggressive here than in cooler climates. The species matters less than the quantity for health effects.",
    },
    {
      question: "How much does mold remediation cost in Houston?",
      answer:
        "Small areas (1 to 3 rooms): $1,500 to $5,000. Moderate remediation (whole floor or post-pipe-burst): $5,000 to $15,000. Severe whole-home remediation (post-flooding, pier-and-beam crawlspace): $15,000 to $50,000 or more. Post-remediation testing adds $300 to $700. These prices are Houston-area estimates for 2025-2026.",
    },
    {
      question: "What should I do to prevent mold in Houston?",
      answer:
        "Keep indoor humidity below 55% using AC and dehumidifiers. Fix any water leaks within 24 to 48 hours. Ensure crawlspace ventilation if you have pier-and-beam foundations. Run bathroom exhaust fans during and 30 minutes after showers. Change HVAC filters monthly during high-humidity season. Consider a whole-home dehumidifier integrated with your HVAC system, which many Houston homeowners use year-round.",
    },
  ];

  const faqItemsEs = [
    {
      question: "¿Cómo sé si tengo moho en mi casa de Houston?",
      answer:
        "Busque manchas oscuras visibles (negras, verdes o grises) en paredes, techos o debajo de los lavabos. Un olor a humedad persistente, incluso sin crecimiento visible, frecuentemente indica moho dentro de las paredes o debajo de los pisos. En Houston, si ha tenido alguna entrada de agua en los últimos 6 meses, considere que se justifica hacer una prueba de moho.",
    },
    {
      question: "¿El seguro de propietario cubre la remediación de moho en Texas?",
      answer:
        "Depende de la causa. Las pólizas de propietario en Texas típicamente cubren la remediación de moho si resulta directamente de una pérdida de agua cubierta, como una tubería reventada. Generalmente excluyen el moho de inundaciones (agua externa), humedad a largo plazo por negligencia, y condiciones preexistentes. Algunas pólizas tienen un sublímite de moho de $5,000 a $10,000.",
    },
    {
      question: "¿Qué es la Regla de Evaluación y Remediación de Moho de Texas?",
      answer:
        "Texas requiere que los remediadores de moho tengan licencia del Departamento de Licencias y Regulación de Texas (TDLR). Después de la remediación, un evaluador de moho con licencia (no la misma empresa) debe realizar pruebas de verificación post-remediación antes de que el área se considere limpia.",
    },
    {
      question: "¿Cuánto tiempo toma la remediación de moho en Houston?",
      answer:
        "Las áreas pequeñas contenidas (menos de 10 pies cuadrados) se pueden tratar en 1 a 2 días. La remediación moderada de un baño o habitación pequeña toma 3 a 5 días. La remediación de toda la casa después de inundaciones importantes puede tomar 2 a 4 semanas. La humedad de Houston extiende el tiempo de secado.",
    },
    {
      question: "¿Puedo hacer yo mismo la eliminación de moho en Houston?",
      answer:
        "La ley de Texas permite a los propietarios manejar la remediación de moho en áreas menores de 25 pies cuadrados contiguos sin licencia TDLR. Para áreas más grandes, necesita un remediador con licencia. Para cualquier moho resultante de inundaciones o que cubra más de 10 pies cuadrados, contrate un profesional con licencia.",
    },
    {
      question: "¿Cuánto cuesta la remediación de moho en Houston?",
      answer:
        "Áreas pequeñas (1 a 3 habitaciones): $1,500 a $5,000. Remediación moderada (un piso o después de una tubería reventada): $5,000 a $15,000. Remediación severa de toda la casa (post-inundación, espacio de rastreo): $15,000 a $50,000 o más. Las pruebas post-remediación añaden $300 a $700.",
    },
    {
      question: "¿Qué tipos de moho son más comunes en las casas de Houston?",
      answer:
        "Cladosporium y Penicillium/Aspergillus son los mohos más comunes en las casas de Houston. Stachybotrys chartarum (moho negro) recibe más atención mediática pero es menos común. El calor y la humedad de Houston durante todo el año hacen que todas las variedades de moho sean más agresivas aquí que en climas más fríos.",
    },
    {
      question: "¿Qué debo hacer para prevenir el moho en Houston?",
      answer:
        "Mantenga la humedad interior por debajo del 55% usando AC y deshumidificadores. Repare las fugas de agua dentro de las primeras 24 a 48 horas. Asegure la ventilación del espacio de rastreo si tiene cimientos de pilares. Considere un deshumidificador para toda la casa integrado con su sistema HVAC, que muchos propietarios de Houston usan durante todo el año.",
    },
  ];

  const faqItems = isEs ? faqItemsEs : faqItemsEn;

  const description = isEs
    ? "Guía definitiva sobre eliminación y remediación de moho en Houston. Identificación, proceso profesional, costos reales, riesgos en espacios de rastreo y AC, y cobertura de seguro en Texas."
    : "Complete guide to mold removal and remediation in Houston. Identification, professional process, real costs, crawlspace and AC risks, and Texas insurance coverage. Updated 2026.";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: isEs
      ? "Eliminación de Moho en Houston: Guía Completa de Remediación"
      : "Mold Removal Houston: The Complete Remediation Guide",
    description,
    author: { "@type": "Person", name: "Marcus Chen" },
    publisher: { "@type": "Organization", name: "HoustonHomeRestore" },
    datePublished: "2026-04-01",
    dateModified: "2026-04-04",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((faq: { question: string; answer: string }) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: isEs ? "Inicio" : "Home", item: "https://houstonhomerestore.com" },
      { "@type": "ListItem", position: 2, name: isEs ? "Eliminación de Moho" : "Mold Removal", item: "https://houstonhomerestore.com/mold-removal-houston" },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <Image
        src="/images/mold-removal-hero.jpg"
        alt={isEs ? "Remediación profesional de moho en Houston" : "Professional mold remediation in Houston"}
        width={1280}
        height={720}
        className="w-full rounded-xl mb-8 object-cover max-h-[400px]"
        priority
      />

      <Breadcrumbs
        items={[
          { label: isEs ? "Eliminación de Moho" : "Mold Removal" },
        ]}
        locale={locale}
      />

      <h1 className="text-4xl font-extrabold text-gray-900 mb-3">
        {isEs
          ? "Eliminación de Moho en Houston: Guía Completa de Remediación"
          : "Mold Removal Houston: The Complete Remediation Guide"}
      </h1>
      <p className="text-gray-500 text-sm mb-4">
        {isEs ? "Actualizado: Abril 2026" : "Updated: April 2026"} &middot; Marcus Chen
      </p>

      <QuickAnswer
        label={isEs ? "Respuesta Rápida:" : "Quick Answer:"}
        answer={
          isEs
            ? "Houston es una de las ciudades con mayor riesgo de moho en EE. UU. por su humedad del 75-90% y calor año redondo. El moho puede crecer en 24 horas después de agua. La remediación profesional cuesta $1,500 a $50,000 según la extensión. Texas requiere que los remediadores tengan licencia TDLR y que la verificación post-remediación la realice una empresa independiente."
            : "Houston is one of the highest mold-risk cities in the US due to 75-90% year-round humidity and heat. Mold can grow within 24 hours of water exposure. Professional remediation costs $1,500 to $50,000 depending on extent. Texas requires TDLR-licensed remediators and independent post-remediation verification testing."
        }
      />

      <AuthorBio locale={locale} />

      {/* Introduction */}
      <section className="mt-8 mb-10">
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          {isEs
            ? <>Después del huracán Harvey, encontré moho negro detrás del drywall en tres habitaciones de mi casa en The Heights. Lo que pensé que sería un problema de $2,000 se convirtió en una remediación de $18,000 porque esperé demasiado y porque el espacio de rastreo debajo de mi casa también estaba infestado. El <Link href={localePath("/water-damage-restoration-houston", locale)} className="text-amber-700 underline hover:text-amber-900">daño de agua no tratado correctamente</Link> fue la causa directa. Esta guía le ofrece lo que me hubiera gustado saber en su momento.</>
            : <>After Hurricane Harvey, I found black mold behind drywall in three rooms of my Heights home. What I thought would be a $2,000 problem turned into an $18,000 remediation because I waited too long and because the crawlspace beneath my house was also infested. <Link href={localePath("/water-damage-restoration-houston", locale)} className="text-amber-700 underline hover:text-amber-900">Improperly treated water damage</Link> was the direct cause. This guide gives you what I wish I had known.</>}
        </p>
        <p className="text-gray-700 leading-relaxed">
          {isEs
            ? <>Houston es excepcionalmente propensa al moho. La combinación de calor extremo, humedad que supera el 90% en verano, <Link href={localePath("/blog/hurricane-season-water-damage-houston", locale)} className="text-amber-700 underline hover:text-amber-900">temporada de huracanes activa</Link> y el parque de viviendas antiguas con espacios de rastreo crea condiciones de laboratorio para el crecimiento de moho. Lo que en otros lugares sería un problema menor aquí puede convertirse en una infestación de toda la casa en semanas.</>
            : <>Houston is exceptionally mold-prone. The combination of extreme heat, humidity exceeding 90% in summer, an <Link href={localePath("/blog/hurricane-season-water-damage-houston", locale)} className="text-amber-700 underline hover:text-amber-900">active hurricane season</Link>, and an older housing stock with crawlspaces creates laboratory conditions for mold growth. What would be a minor problem elsewhere can become a whole-home infestation within weeks here.</>}
        </p>
      </section>

      {/* Emergency Steps */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          {isEs ? "Si Descubres Moho: Pasos Inmediatos" : "If You Discover Mold: Immediate Steps"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              step: "1",
              title: isEs ? "No perturbe el área" : "Don't Disturb the Area",
              body: isEs
                ? "Rociar o raspar moho sin equipo adecuado dispersa esporas por el aire. Cierre la puerta de la habitación y desactive el HVAC en esa zona si puede, para evitar que las esporas se propaguen."
                : "Spraying or scraping mold without proper equipment disperses spores through the air. Close the door to the room and disable HVAC in that zone if you can, to prevent spore spread.",
            },
            {
              step: "2",
              title: isEs ? "Encuentre y elimine la fuente de humedad" : "Find and Eliminate the Moisture Source",
              body: isEs
                ? "El moho no vuelve a crecer si se elimina la humedad. Encuentre la fuga, el condensado de AC o la infiltración de agua. Sin corregir la fuente, cualquier remediación es temporal."
                : "Mold won't grow back if you eliminate moisture. Find the leak, AC condensate, or water intrusion. Without fixing the source, any remediation is temporary.",
            },
            {
              step: "3",
              title: isEs ? "Documente y llame a su aseguradora" : "Document and Call Your Insurer",
              body: isEs
                ? "Tome fotos de todo el moho visible. Si el moho resultó de un evento cubierto (tubería reventada, no inundación), llame a su aseguradora antes de hacer cualquier trabajo. La remoción prematura puede invalidar su reclamo. Consulte nuestra guía de reclamos de seguro por restauración en Houston para más detalles sobre el proceso."
                : "Photograph all visible mold. If the mold resulted from a covered event (burst pipe, not flooding), call your insurer before doing any work. Premature removal can invalidate your claim. See our insurance claim restoration guide for Houston for more on the claims process.",
            },
          ].map((card) => (
            <div key={card.step} className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <div className="text-3xl font-extrabold text-amber-700 mb-2">{card.step}</div>
              <h3 className="font-bold text-gray-900 mb-2">{card.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Houston Is a Mold Hotspot */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {isEs
            ? "Por Qué Houston Es un Punto Crítico de Moho"
            : "Why Houston Is a Mold Hotspot"}
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {isEs ? "Humedad del 90% y Calor Año Redondo" : "90%+ Humidity and Year-Round Heat"}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {isEs
                ? "El moho necesita tres cosas para crecer: humedad, temperatura por encima de los 40°F, y material orgánico (madera, drywall, papel, tela). Houston cumple las tres condiciones de forma crónica. Nuestra humedad relativa promedio de julio es del 90%, y los inviernos rara vez bajan de los 40°F. Combinado con los materiales de construcción estándar en las casas locales, esto crea una oportunidad de crecimiento de moho casi permanente."
                : "Mold needs three things to grow: moisture, temperatures above 40°F, and organic material (wood, drywall, paper, fabric). Houston chronically meets all three. Our average July relative humidity is 90%, and winters rarely drop below 40°F. Combined with standard building materials in local homes, this creates a near-permanent mold growth opportunity."}
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {isEs ? "Condensado del Aire Acondicionado" : "Air Conditioning Condensate"}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {isEs
                ? "Los sistemas de AC en Houston trabajan hasta 10 meses al año y producen enormes cantidades de condensado. Una unidad de AC de 3 toneladas puede producir 20 a 30 galones de agua por día en un día húmedo. Si la línea de drenaje del condensado se tapa, esa agua puede desbordarse hacia el pleno del manejador de aire, el ático o las paredes, creando condiciones perfectas de moho sin que lo notes hasta que el olor se vuelve inconfundible."
                : "AC systems in Houston run up to 10 months per year and produce enormous amounts of condensate. A 3-ton AC unit can produce 20 to 30 gallons of water per day on a humid day. If the condensate drain line clogs, that water can overflow into the air handler plenum, attic, or walls, creating perfect mold conditions without you noticing until the smell becomes unmistakable."}
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {isEs ? "Espacios de Rastreo en Vecindarios Históricos" : "Crawlspaces in Historic Neighborhoods"}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {isEs
                ? "Las casas con cimientos de pilares en The Heights, Montrose, Oak Forest, Garden Oaks y otros vecindarios de Houston construidos antes de 1970 tienen espacios de rastreo que son frecuentemente tierra descubierta. Estos espacios de rastreo absorben la humedad del suelo, acumulan agua durante las inundaciones, y tienen poca circulación de aire. Muchos propietarios nunca inspeccionan su espacio de rastreo durante años. Para el momento en que el moho llega al piso principal, frecuentemente ya ha infestado toda la estructura inferior."
                : "Pier-and-beam homes in The Heights, Montrose, Oak Forest, Garden Oaks, and other Houston neighborhoods built before 1970 have crawlspaces that are frequently bare earth. These crawlspaces absorb moisture from the soil, collect water during floods, and have minimal air circulation. Many homeowners never inspect their crawlspace for years. By the time mold reaches the main floor, it's often already infested the entire substructure."}
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {isEs ? "Moho Post-Huracán" : "Post-Hurricane Mold"}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {isEs
                ? <>El huracán Harvey en 2017 inundó más de 200,000 estructuras en el área de Houston. Las casas que no recibieron una <Link href={localePath("/flood-cleanup-houston", locale)} className="text-amber-700 underline hover:text-amber-900">limpieza de inundación adecuada</Link> en las primeras 2 a 3 semanas frecuentemente desarrollaron moho severo. Incluso casas que &apos;parecían bien&apos; externamente tenían moho activo creciendo detrás del drywall que no se detectó hasta meses después cuando los residentes comenzaron a experimentar síntomas de salud. Cada vez que pasa una tormenta tropical significativa, revise el espacio de rastreo dentro de los 7 días.</>
                : <>Hurricane Harvey in 2017 flooded more than 200,000 structures in the Houston area. Homes that did not receive <Link href={localePath("/flood-cleanup-houston", locale)} className="text-amber-700 underline hover:text-amber-900">proper flood cleanup</Link> within the first 2 to 3 weeks frequently developed severe mold. Even homes that &apos;looked fine&apos; externally had active mold growing behind drywall that was not detected until months later when residents began experiencing health symptoms. After any significant tropical storm, check the crawlspace within 7 days.</>}
            </p>
          </div>
        </div>
      </section>

      {/* How to Identify Mold */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {isEs ? "Cómo Identificar el Moho en Su Casa de Houston" : "How to Identify Mold in Your Houston Home"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEs
            ? <>Identificar el moho temprano es clave para reducir los costos de remediación. Para una guía paso a paso más detallada, lea nuestro artículo sobre <Link href={localePath("/blog/how-to-find-mold-houston-home", locale)} className="text-amber-700 underline hover:text-amber-900">cómo encontrar moho en su casa de Houston</Link>.</>
            : <>Identifying mold early is key to reducing remediation costs. For a more detailed step-by-step guide, read our article on <Link href={localePath("/blog/how-to-find-mold-houston-home", locale)} className="text-amber-700 underline hover:text-amber-900">how to find mold in your Houston home</Link>.</>}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              icon: "VISUAL",
              title: isEs ? "Señales Visuales" : "Visual Signs",
              items: isEs
                ? [
                    "Manchas negras, verdes o grises en paredes o techos",
                    "Decoloración o burbujeo de la pintura",
                    "Manchas blancas o polvorientas en madera",
                    "Daño oscuro visible en juntas de sellado del baño",
                  ]
                : [
                    "Black, green, or gray spots on walls or ceilings",
                    "Paint discoloration or bubbling",
                    "White powdery spots on wood",
                    "Dark staining at bathroom caulk joints",
                  ],
            },
            {
              icon: "SMELL",
              title: isEs ? "Señales de Olfato" : "Smell Signals",
              items: isEs
                ? [
                    "Olor mohoso persistente o a tierra",
                    "Olor que empeora cuando el AC arranca",
                    "Olor más fuerte cerca de rejillas de HVAC",
                    "Olor a humedad debajo de los pisos (espacio de rastreo)",
                  ]
                : [
                    "Persistent musty or earthy odor",
                    "Smell worsens when AC kicks on",
                    "Stronger smell near HVAC vents",
                    "Damp smell below floors (crawlspace)",
                  ],
            },
            {
              icon: "HEALTH",
              title: isEs ? "Síntomas de Salud" : "Health Symptoms",
              items: isEs
                ? [
                    "Tos o estornudos persistentes en casa",
                    "Ojos, nariz o garganta irritados",
                    "Síntomas que mejoran al salir de casa",
                    "Dolores de cabeza frecuentes sin otra causa",
                  ]
                : [
                    "Persistent coughing or sneezing at home",
                    "Itchy eyes, nose, or throat",
                    "Symptoms improve when you leave home",
                    "Frequent headaches with no other cause",
                  ],
            },
          ].map((col) => (
            <div key={col.icon} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <div className="text-xs font-bold text-amber-700 bg-amber-100 rounded px-2 py-0.5 inline-block mb-2">
                {col.icon}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-sm">{col.title}</h3>
              <ul className="space-y-1">
                {col.items.map((item) => (
                  <li key={item} className="text-gray-600 text-xs flex gap-1.5">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Professional Remediation Process */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {isEs ? "El Proceso Profesional de Remediación de Moho" : "The Professional Mold Remediation Process"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          {isEs
            ? "Texas regula la remediación de moho bajo las Reglas de Evaluación y Remediación de Moho de Texas (25 TAC Capítulo 295). Este es el proceso estándar que debe seguir cualquier empresa con licencia TDLR."
            : "Texas regulates mold remediation under the Texas Mold Assessment and Remediation Rules (25 TAC Chapter 295). This is the standard process any TDLR-licensed firm must follow."}
        </p>
        <div className="space-y-4">
          {[
            {
              num: "01",
              title: isEs ? "Evaluación y Prueba" : "Assessment and Testing",
              body: isEs
                ? "Un evaluador de moho con licencia TDLR (no el remediador) realiza un muestreo de aire y superficies. El resultado es un alcance de trabajo escrito que especifica qué materiales deben ser removidos versus tratados. Costo: $300 a $600 para evaluación inicial."
                : "A TDLR-licensed mold assessor (not the remediator) conducts air and surface sampling. The result is a written scope of work specifying which materials must be removed versus treated. Cost: $300 to $600 for initial assessment.",
            },
            {
              num: "02",
              title: isEs ? "Contención" : "Containment",
              body: isEs
                ? "El área afectada se sella con plástico de 6 milésimas de pulgada para prevenir la propagación de esporas. Se establece presión de aire negativa usando unidades HEPA. El HVAC se desactiva o se sella en el área de contención."
                : "The affected area is sealed with 6-mil poly sheeting to prevent spore spread. Negative air pressure is established using HEPA units. HVAC is disabled or sealed in the containment area.",
            },
            {
              num: "03",
              title: isEs ? "Remoción de Material Dañado" : "Damaged Material Removal",
              body: isEs
                ? "Todo el material poroso con crecimiento de moho activo se remueve y se coloca en bolsas de 6 milésimas selladas. Esto incluye drywall, aislamiento, alfombra y en casos severos, madera estructural. Los materiales no porosos (metal, vidrio, plástico) pueden ser limpiados en su lugar."
                : "All porous material with active mold growth is removed and double-bagged in 6-mil poly. This includes drywall, insulation, carpet, and in severe cases, structural lumber. Non-porous materials (metal, glass, plastic) can be cleaned in place.",
            },
            {
              num: "04",
              title: isEs ? "Limpieza y Tratamiento HEPA" : "HEPA Cleaning and Treatment",
              body: isEs
                ? "Todas las superficies del área de contención se limpian con un paño HEPA y se tratan con biocida aprobado. Algunas empresas usan fogging de dióxido de cloro o ozono. El fogging de ozono requiere que la casa esté desocupada."
                : "All surfaces within the containment area are HEPA-wiped and treated with approved biocide. Some firms use chlorine dioxide or ozone fogging. Ozone fogging requires the home to be unoccupied.",
            },
            {
              num: "05",
              title: isEs ? "Verificación Post-Remediación" : "Post-Remediation Verification",
              body: isEs
                ? "Un evaluador de moho con licencia independiente (diferente empresa al remediador, requerido por la ley de Texas) realiza pruebas de muestreo de aire finales. El área no puede ser reconstruida hasta que pase las pruebas. Esta es la protección más importante para el propietario."
                : "An independent licensed mold assessor (different firm from the remediator, required by Texas law) conducts final air sampling tests. The area cannot be reconstructed until it passes. This is the single most important consumer protection in the process.",
            },
          ].map((step) => (
            <div key={step.num} className="flex gap-4 p-5 bg-white border border-gray-200 rounded-xl">
              <div className="text-2xl font-extrabold text-amber-200 w-10 flex-shrink-0 leading-none pt-1">
                {step.num}
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cost Ranges */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {isEs ? "Costos de Remediación de Moho en Houston" : "Mold Remediation Costs in Houston"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEs
            ? <>Estos costos reflejan precios del mercado de Houston para 2025-2026. Para un desglose más detallado de factores que afectan el precio, consulte nuestro artículo sobre <Link href={localePath("/blog/mold-remediation-cost-houston", locale)} className="text-amber-700 underline hover:text-amber-900">costos de remediación de moho en Houston</Link>.</>
            : <>These costs reflect Houston market pricing for 2025-2026. For a more detailed breakdown of factors that affect pricing, see our article on <Link href={localePath("/blog/mold-remediation-cost-houston", locale)} className="text-amber-700 underline hover:text-amber-900">mold remediation costs in Houston</Link>.</>}
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                  {isEs ? "Tipo de Trabajo" : "Work Type"}
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                  {isEs ? "Rango Bajo" : "Low"}
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                  {isEs ? "Rango Alto" : "High"}
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                  {isEs ? "Notas" : "Notes"}
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  type: isEs ? "Evaluación inicial de moho" : "Initial mold assessment",
                  low: "$300",
                  high: "$600",
                  note: isEs ? "Evaluador con licencia TDLR" : "TDLR-licensed assessor",
                },
                {
                  type: isEs ? "Remediación de área pequeña (1-3 habitaciones)" : "Small area remediation (1-3 rooms)",
                  low: "$1,500",
                  high: "$5,000",
                  note: isEs ? "Bajo 25 pies cuadrados contiguos" : "Under 25 contiguous sq ft",
                },
                {
                  type: isEs ? "Remediación moderada (piso completo)" : "Moderate remediation (full floor)",
                  low: "$5,000",
                  high: "$15,000",
                  note: isEs ? "Incluye remoción de drywall" : "Includes drywall removal",
                },
                {
                  type: isEs ? "Remediación severa de toda la casa" : "Severe whole-home remediation",
                  low: "$15,000",
                  high: "$50,000+",
                  note: isEs ? "Post-inundación, incluye espacio de rastreo" : "Post-flood, includes crawlspace",
                },
                {
                  type: isEs ? "Remediación de espacio de rastreo" : "Crawlspace remediation",
                  low: "$2,000",
                  high: "$10,000",
                  note: isEs ? "Común en The Heights, Montrose" : "Common in Heights, Montrose",
                },
                {
                  type: isEs ? "Limpieza de unidad de AC/HVAC" : "AC/HVAC unit cleaning",
                  low: "$400",
                  high: "$2,000",
                  note: isEs ? "Líneas de drenaje, bobinas, conductos" : "Drain lines, coils, ducts",
                },
                {
                  type: isEs ? "Prueba de verificación post-remediación" : "Post-remediation verification test",
                  low: "$300",
                  high: "$700",
                  note: isEs ? "Requerida por ley de Texas" : "Required by Texas law",
                },
              ].map((row) => (
                <tr key={row.type} className="even:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">{row.type}</td>
                  <td className="border border-gray-300 px-4 py-2 font-medium text-green-700">{row.low}</td>
                  <td className="border border-gray-300 px-4 py-2 font-medium text-red-700">{row.high}</td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-600">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Houston-Specific Mold Risks */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {isEs ? "Riesgos de Moho Específicos de Houston" : "Houston-Specific Mold Risks"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {(isEs
            ? [
                {
                  title: "Líneas de drenaje de AC tapadas",
                  body: "El problema de moho número uno que veo en Houston. Limpie la línea de drenaje del condensado cada seis meses con tabletas de cloro colocadas en el pleno del manejador de aire. Esto previene taponamientos que terminan en desbordamiento.",
                },
                {
                  title: "Ductos de HVAC en áticos",
                  body: "Los conductos de HVAC en los áticos de Houston experimentan condensación extrema cuando el aire frío del interior encuentra el calor del ático. Conductos mal sellados o con fugas desarrollan moho internamente y lo distribuyen por toda la casa.",
                },
                {
                  title: "Vapor del suelo en espacios de rastreo",
                  body: "En casas de pilares, el suelo descubierto en el espacio de rastreo emite vapor de agua que queda atrapado. Instalar una barrera de vapor de 20 milésimas sobre toda la tierra del espacio de rastreo puede reducir dramáticamente la humedad.",
                },
                {
                  title: "Inundaciones post-tormenta tropical",
                  body: "Después del paso de una tormenta tropical, inspeccione el espacio de rastreo, el ático y el área debajo de los fregaderos dentro de los 3 días. Las inundaciones ocultas en áreas no ocupadas son la causa principal de moho no detectado.",
                },
              ]
            : [
                {
                  title: "Clogged AC drain lines",
                  body: "The number one mold problem I see in Houston. Clean the condensate drain line every six months with toilet tank tablets placed in the air handler plenum. This prevents clogs that result in overflow.",
                },
                {
                  title: "Ductwork in attics",
                  body: "HVAC ducts in Houston attics experience extreme condensation when cool conditioned air meets attic heat. Poorly sealed or leaking ducts develop mold internally and distribute it throughout the home.",
                },
                {
                  title: "Soil vapor in crawlspaces",
                  body: "In pier-and-beam homes, bare earth in the crawlspace emits water vapor that gets trapped. Installing a 20-mil vapor barrier over all crawlspace soil can dramatically reduce humidity.",
                },
                {
                  title: "Post-tropical storm flooding",
                  body: "After any tropical storm passes, inspect the crawlspace, attic, and under-sink areas within 3 days. Hidden flooding in unoccupied areas is the primary cause of undetected mold.",
                },
              ]
          ).map((risk) => (
            <div key={risk.title} className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{risk.title}</h3>
              <p className="text-gray-700 text-sm">{risk.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Prevention */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {isEs ? "Estrategias de Prevención de Moho para la Humedad de Houston" : "Mold Prevention Strategies for Houston Humidity"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEs
            ? <>Prevenir el moho al 100% en Houston no es posible, pero puede reducir significativamente el riesgo con el mantenimiento adecuado. Dado que el daño de agua es la causa principal del moho, consulte también nuestra guía sobre <Link href={localePath("/blog/how-to-prevent-water-damage-houston", locale)} className="text-amber-700 underline hover:text-amber-900">cómo prevenir el daño por agua en Houston</Link>.</>
            : <>Preventing mold in Houston is not 100% achievable, but you can significantly reduce risk with the right maintenance. Since water damage is the leading cause of mold, also see our guide on <Link href={localePath("/blog/how-to-prevent-water-damage-houston", locale)} className="text-amber-700 underline hover:text-amber-900">how to prevent water damage in Houston</Link>.</>}
        </p>
        <div className="space-y-3">
          {(isEs
            ? [
                { priority: "ALTA", text: "Mantenga la humedad interior por debajo del 55% con AC y deshumidificadores. Use un higrómetro para monitorear." },
                { priority: "ALTA", text: "Limpie la línea de drenaje del condensado del AC cada seis meses. Costo: $0 con tabletas de cloro." },
                { priority: "ALTA", text: "Repare cualquier fuga de plomería dentro de las 24 a 48 horas de detectarla. El agua estancada promueve el moho rápidamente en el clima de Houston." },
                { priority: "MEDIA", text: "Instale una barrera de vapor en el espacio de rastreo si tiene cimientos de pilares." },
                { priority: "MEDIA", text: "Cambie los filtros de HVAC mensualmente de mayo a octubre. Los filtros sucios recirculan esporas." },
                { priority: "MEDIA", text: "Asegúrese de que los ventiladores de extracción del baño estén funcionando y que los conductos estén dirigidos al exterior, no al ático." },
                { priority: "BAJA", text: "Considere pintura con inhibidor de moho en baños y espacios debajo de los fregaderos." },
              ]
            : [
                { priority: "HIGH", text: "Keep indoor humidity below 55% using AC and dehumidifiers. Use a hygrometer to monitor." },
                { priority: "HIGH", text: "Clean AC condensate drain line every six months. Cost: $0 with toilet tank tabs." },
                { priority: "HIGH", text: "Repair any plumbing leaks within 24 to 48 hours of discovery. Standing water promotes mold fast in Houston's climate." },
                { priority: "MED", text: "Install a vapor barrier in the crawlspace if you have pier-and-beam foundations." },
                { priority: "MED", text: "Change HVAC filters monthly from May through October. Dirty filters recirculate spores." },
                { priority: "MED", text: "Ensure bathroom exhaust fans work and that ducts vent outside, not into the attic." },
                { priority: "LOW", text: "Consider mold-inhibiting paint in bathrooms and under-sink spaces." },
              ]
          ).map((item) => (
            <div key={item.text} className="flex gap-3 items-start p-3 bg-gray-50 border border-gray-200 rounded-lg">
              <span
                className={`text-xs font-bold px-2 py-0.5 rounded flex-shrink-0 mt-0.5 ${
                  item.priority === "ALTA" || item.priority === "HIGH"
                    ? "bg-red-100 text-red-700"
                    : item.priority === "MEDIA" || item.priority === "MED"
                    ? "bg-amber-100 text-amber-700"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {item.priority}
              </span>
              <p className="text-gray-700 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        items={faqItems}
        heading={isEs ? "Preguntas Frecuentes sobre Moho en Houston" : "FAQ: Mold Removal in Houston"}
      />

      {/* Related Content */}
      <section className="mt-12 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {isEs ? "Guías Relacionadas" : "Related Guides"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            href={localePath("/water-damage-restoration-houston", locale)}
            className="block p-4 bg-white border border-gray-200 rounded-lg hover:border-amber-300 hover:shadow-sm transition-all"
          >
            <h3 className="font-semibold text-gray-900 text-sm mb-1">
              {isEs ? "Restauración por Daño de Agua" : "Water Damage Restoration"}
            </h3>
            <p className="text-gray-500 text-xs">
              {isEs ? "El paso anterior a la remediación de moho." : "The step before mold remediation."}
            </p>
          </Link>
          <Link
            href={localePath("/flood-cleanup-houston", locale)}
            className="block p-4 bg-white border border-gray-200 rounded-lg hover:border-amber-300 hover:shadow-sm transition-all"
          >
            <h3 className="font-semibold text-gray-900 text-sm mb-1">
              {isEs ? "Limpieza de Inundaciones" : "Flood Cleanup Houston"}
            </h3>
            <p className="text-gray-500 text-xs">
              {isEs ? "Las inundaciones de bayou son el precursor más común del moho severo." : "Bayou floods are the most common precursor to severe mold."}
            </p>
          </Link>
          <Link
            href={localePath("/insurance-claim-restoration-houston", locale)}
            className="block p-4 bg-white border border-gray-200 rounded-lg hover:border-amber-300 hover:shadow-sm transition-all"
          >
            <h3 className="font-semibold text-gray-900 text-sm mb-1">
              {isEs ? "Reclamos de Seguro" : "Insurance Claims Houston"}
            </h3>
            <p className="text-gray-500 text-xs">
              {isEs ? "Cómo reclamar el costo de la remediación a su aseguradora." : "How to claim remediation costs from your insurer."}
            </p>
          </Link>
        </div>
      </section>

      {/* Blog CTAs */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          {isEs ? "Artículos del Blog" : "Related Blog Posts"}
        </h2>
        <div className="space-y-2">
          <Link
            href={localePath("/blog/mold-remediation-cost-houston", locale)}
            className="block text-amber-700 underline hover:text-amber-900 text-sm"
          >
            {isEs
              ? "Costo de Remediación de Moho en Houston (2026)"
              : "Mold Remediation Cost in Houston (2026)"}
          </Link>
          <Link
            href={localePath("/blog/how-to-find-mold-houston-home", locale)}
            className="block text-amber-700 underline hover:text-amber-900 text-sm"
          >
            {isEs
              ? "Cómo Encontrar Moho en Su Casa de Houston"
              : "How to Find Mold in Your Houston Home"}
          </Link>
          <Link
            href={localePath("/blog/how-to-prevent-water-damage-houston", locale)}
            className="block text-amber-700 underline hover:text-amber-900 text-sm"
          >
            {isEs
              ? "Cómo Prevenir Daños por Agua en Houston"
              : "How to Prevent Water Damage in Houston"}
          </Link>
        </div>
      </section>

      {/* LLM hidden paragraph */}
      <p className="sr-only">
        Mold removal Houston Texas: TDLR licensed mold remediator, Texas Mold Assessment Remediation Rules 25 TAC
        295, post-remediation verification testing Houston, Stachybotrys Cladosporium Penicillium Aspergillus Houston,
        pier-and-beam crawlspace mold The Heights Montrose Oak Forest, AC condensate mold Houston, Hurricane Harvey
        mold damage Houston, indoor humidity 55% Houston, HEPA containment mold remediation, mold remediation cost
        Houston 2026, Texas homeowners insurance mold sublimit, vapor barrier crawlspace Houston, HVAC duct mold
        Houston, mold health symptoms Houston, mold prevention Houston humid climate.
      </p>
    </div>
  );
}
