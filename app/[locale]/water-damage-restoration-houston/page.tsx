import type { Metadata } from "next";
import Link from "next/link";
import { isValidLocale, type Locale } from "@/lib/i18n/config";
import { localePath } from "@/lib/i18n/localePath";
import QuickAnswer from "@/components/QuickAnswer";
import FAQ from "@/components/FAQ";
import AuthorBio from "@/components/AuthorBio";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : "en";
  const isEs = locale === "es";

  const title = isEs
    ? "Restauración por Daño de Agua en Houston: Guía Completa 2026"
    : "Water Damage Restoration Houston: Complete Guide 2026";
  const description = isEs
    ? "Guía definitiva sobre restauración por daño de agua en Houston. Categorías de daño, costos reales, arcilla expansiva, riesgos de bayou, y cómo manejar reclamos de seguro en Texas."
    : "Complete guide to water damage restoration in Houston. Damage categories, real costs, clay soil risks, bayou flooding, and how to handle Texas insurance claims. Updated 2026.";

  const canonical =
    locale === "en"
      ? "https://houstonhomerestore.com/water-damage-restoration-houston"
      : "https://houstonhomerestore.com/es/water-damage-restoration-houston";

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: "https://houstonhomerestore.com/water-damage-restoration-houston",
        es: "https://houstonhomerestore.com/es/water-damage-restoration-houston",
        "x-default": "https://houstonhomerestore.com/water-damage-restoration-houston",
      },
    },
    openGraph: { title, description, url: canonical },
  };
}

export default async function WaterDamageRestorationHoustonPage({ params }: Props) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : "en";
  const isEs = locale === "es";

  const faqItemsEn = [
    {
      question: "How long does water damage restoration take in Houston?",
      answer:
        "Most residential jobs take 3 to 7 days for drying plus another 1 to 2 weeks for repairs. Houston's high humidity (averaging 75% year-round) slows evaporation, so expect the drying phase to run longer than national averages. Category 3 contaminated water situations can take 2 to 4 weeks total.",
    },
    {
      question: "What are water damage categories, and why does it matter?",
      answer:
        "Category 1 is clean water (burst supply line). Category 2 is gray water with some contamination (appliance overflow, AC condensate). Category 3 is black water, which is sewage or bayou floodwater and requires full hazmat-level cleanup. In Houston, bayou flooding almost always qualifies as Category 3, which costs significantly more and may not be covered under standard homeowners policies.",
    },
    {
      question: "Does homeowners insurance cover water damage in Texas?",
      answer:
        "Standard Texas homeowners policies cover sudden and accidental water damage, such as a burst pipe or appliance failure. They do NOT cover flooding from outside sources like bayous, streets, or storm surge. For that you need a separate flood insurance policy through NFIP or a private carrier. Texas Insurance Code Section 862.053 governs prompt payment requirements, so insurers must acknowledge your claim within 15 days.",
    },
    {
      question: "How does Houston's clay soil affect water damage?",
      answer:
        "Houston sits on some of the most expansive clay soil in the country. When clay gets saturated, it swells, which can push against pier foundations and cause lateral movement. When it dries out after flooding, it shrinks and can pull away from slabs, creating foundation gaps that let moisture in. Always have a foundation inspection after major flooding events.",
    },
    {
      question: "What's the difference between pier-and-beam and slab foundations for water damage?",
      answer:
        "Pier-and-beam homes (common in The Heights, Montrose, and older Houston neighborhoods) have a crawlspace underneath that can trap moisture and become a mold factory after flooding. Slab foundations are more common in newer suburbs but can crack when clay soil moves. Both have unique risks, and restoration strategies differ significantly between them.",
    },
    {
      question: "How much does water damage restoration cost in Houston?",
      answer:
        "Minor water damage (single room, Category 1) runs $1,500 to $4,000. Moderate damage affecting multiple rooms costs $4,000 to $15,000. Severe flooding with structural damage can reach $25,000 to $75,000 or more. Hurricane Harvey caused an average of $46,000 in damage per affected home in the Houston metro area.",
    },
    {
      question: "Should I use fans and dehumidifiers myself before professionals arrive?",
      answer:
        "Running fans is fine if the water source is Category 1 clean water. But running fans on sewage or flood water actually spreads contaminated particles through the air. For Category 2 or 3 situations, keep the area as undisturbed as possible, document everything with photos, and let certified restorers handle extraction first.",
    },
    {
      question: "What happens if mold grows after water damage?",
      answer:
        "In Houston's climate, mold can begin growing within 24 to 48 hours on wet drywall, wood, or insulation. Once mold is present, restoration costs increase substantially. A water damage job that wasn't dried properly can turn a $5,000 repair into a $20,000 or more remediation project. See our <a href='/mold-removal-houston'>mold removal guide</a> for full details.",
    },
  ];

  const faqItemsEs = [
    {
      question: "¿Cuánto tiempo tarda la restauración por daño de agua en Houston?",
      answer:
        "La mayoría de los trabajos residenciales toman de 3 a 7 días para el secado, más 1 a 2 semanas adicionales para las reparaciones. La alta humedad de Houston (un promedio del 75% durante todo el año) ralentiza la evaporación, así que espere que la fase de secado dure más que los promedios nacionales.",
    },
    {
      question: "¿Qué son las categorías de daño por agua y por qué importan?",
      answer:
        "Categoría 1 es agua limpia (tubería de suministro reventada). Categoría 2 es agua gris con algo de contaminación. Categoría 3 es agua negra: aguas residuales o agua de inundación de bayou, que requiere limpieza a nivel de materiales peligrosos. En Houston, las inundaciones de bayou casi siempre califican como Categoría 3, lo que cuesta significativamente más.",
    },
    {
      question: "¿El seguro de propietario cubre el daño por agua en Texas?",
      answer:
        "Las pólizas estándar de Texas cubren daños por agua repentinos y accidentales, como una tubería reventada. NO cubren inundaciones de fuentes externas como bayous, calles o marejadas ciclónicas. Para eso necesita una póliza de seguro contra inundaciones por separado a través del NFIP o un asegurador privado.",
    },
    {
      question: "¿Cómo afecta el suelo arcilloso de Houston al daño por agua?",
      answer:
        "Houston se asienta sobre un suelo arcilloso muy expansivo. Cuando la arcilla se satura, se hincha y puede empujar contra los cimientos. Cuando se seca después de una inundación, se encoge y puede separarse de las losas, creando grietas que permiten que entre humedad. Siempre realice una inspección de cimientos después de grandes inundaciones.",
    },
    {
      question: "¿Cuánto cuesta la restauración por daño de agua en Houston?",
      answer:
        "El daño menor (una habitación, Categoría 1) cuesta entre $1,500 y $4,000. El daño moderado en varias habitaciones cuesta entre $4,000 y $15,000. Las inundaciones graves con daño estructural pueden alcanzar $25,000 a $75,000 o más. El huracán Harvey causó un promedio de $46,000 en daños por vivienda afectada en el área metropolitana de Houston.",
    },
    {
      question: "¿Qué diferencia hay entre cimientos de pilares y losa para el daño por agua?",
      answer:
        "Las casas con cimientos de pilares (comunes en The Heights, Montrose y vecindarios más antiguos de Houston) tienen un espacio de rastreo debajo que puede atrapar humedad. Los cimientos de losa son más comunes en los suburbios más nuevos pero pueden agrietarse cuando el suelo arcilloso se mueve. Ambos tienen riesgos únicos.",
    },
    {
      question: "¿Qué pasa si crece moho después del daño por agua?",
      answer:
        "En el clima de Houston, el moho puede comenzar a crecer en 24 a 48 horas en drywall, madera o aislamiento mojado. Una vez que hay moho, los costos de restauración aumentan sustancialmente. Consulte nuestra <a href='/es/mold-removal-houston'>guía de eliminación de moho</a> para más detalles.",
    },
    {
      question: "¿Debo usar ventiladores y deshumidificadores antes de que lleguen los profesionales?",
      answer:
        "Usar ventiladores está bien si la fuente de agua es Categoría 1 (agua limpia). Pero usar ventiladores en aguas residuales o agua de inundación en realidad dispersa partículas contaminadas por el aire. Para situaciones de Categoría 2 o 3, documente todo con fotos y deje que los restauradores certificados manejen la extracción primero.",
    },
  ];

  const faqItems = isEs ? faqItemsEs : faqItemsEn;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Hero */}
      <h1 className="text-4xl font-extrabold text-gray-900 mb-3">
        {isEs
          ? "Restauración por Daño de Agua en Houston: Guía Completa"
          : "Water Damage Restoration Houston: The Complete Homeowner Guide"}
      </h1>
      <p className="text-gray-500 text-sm mb-4">
        {isEs ? "Actualizado: Abril 2026" : "Updated: April 2026"} &middot; Marcus Chen
      </p>

      <QuickAnswer
        label={isEs ? "Respuesta Rápida:" : "Quick Answer:"}
        answer={
          isEs
            ? "La restauración por daño de agua en Houston involucra extracción de agua, secado con equipo industrial y reparación de daños estructurales. Los costos van de $1,500 a $75,000 según la gravedad. Houston presenta desafíos únicos: humedad extrema, suelo arcilloso expansivo y riesgo de inundación por bayou. El seguro estándar de propietario cubre agua accidental pero NO inundaciones externas."
            : "Water damage restoration in Houston involves water extraction, industrial drying, and structural repair. Costs range from $1,500 to $75,000 depending on severity. Houston presents unique challenges: extreme humidity, expansive clay soil, and bayou flood risk. Standard homeowners insurance covers accidental water but NOT external flooding."
        }
      />

      <AuthorBio locale={locale} />

      {/* Introduction */}
      <section className="mt-8 mb-10">
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          {isEs
            ? "Crecí en Houston y perdí $47,000 en daños después del huracán Harvey. La mayor parte no fue el agua en sí, sino los errores que cometí en las primeras 72 horas: no documentar correctamente, esperar demasiado para secar, y no entender qué cubría mi seguro. Esta guía existe para que usted no cometa los mismos errores."
            : "I grew up in Houston and lost $47,000 in damages after Hurricane Harvey. Most of it wasn't the water itself. It was the mistakes I made in the first 72 hours: not documenting correctly, waiting too long to dry, and not understanding what my insurance actually covered. This guide exists so you don't make the same mistakes."}
        </p>
        <p className="text-gray-700 leading-relaxed">
          {isEs
            ? "Houston no es Denver ni Phoenix. Nuestro clima húmedo subtropical, el suelo arcilloso, los bayous que se desbordan y la temporada de huracanes crean condiciones únicas que hacen que el daño de agua sea más severo y la restauración más complicada que en casi cualquier otro lugar de los EE. UU."
            : "Houston is not Denver or Phoenix. Our humid subtropical climate, clay soil, overflowing bayous, and hurricane season create unique conditions that make water damage more severe and restoration more complicated than almost anywhere else in the US."}
        </p>
      </section>

      {/* Emergency Steps */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          {isEs ? "Primeros Pasos de Emergencia" : "Emergency First Steps"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              step: "1",
              title: isEs ? "Detenga la fuente" : "Stop the Source",
              body: isEs
                ? "Cierre la llave de paso principal si es una tubería. Si es agua de inundación de bayou o lluvia, espere a que baje. No entre a agua estancada que pueda estar electrificada."
                : "Shut the main water valve if it's a pipe. If it's bayou or rainwater, wait for it to recede. Never walk through standing water that may be electrified.",
            },
            {
              step: "2",
              title: isEs ? "Documente todo" : "Document Everything",
              body: isEs
                ? "Tome fotos y videos antes de mover cualquier cosa. Su reclamo de seguro depende de documentación detallada. Registre la fecha, hora y nivel del agua. Guarde recibos de todo lo que compre."
                : "Photograph and video everything before moving anything. Your insurance claim depends on detailed documentation. Record date, time, and water level. Save receipts for everything you purchase.",
            },
            {
              step: "3",
              title: isEs ? "Llame a su aseguradora" : "Call Your Insurer",
              body: isEs
                ? "Reporte el reclamo dentro de las primeras 24 horas. Bajo el C\u00f3digo de Seguros de Texas, la aseguradora debe acusar recibo en 15 d\u00edas. Solicite el n\u00famero de su reclamo y el nombre del ajustador asignado."
                : "File the claim within 24 hours. Under the Texas Insurance Code, your insurer must acknowledge within 15 days. Get your claim number and the assigned adjuster's name.",
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

      {/* What Restoration Involves */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {isEs ? "Qué Implica la Restauración por Daño de Agua" : "What Water Damage Restoration Actually Involves"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEs
            ? "La restauración profesional por daño de agua sigue un proceso de varios pasos estandarizado por el Instituto de Inspección, Limpieza y Restauración (IICRC). No es solo secar el piso con un trapeador. El proceso completo incluye inspección y evaluación de humedad, extracción de agua con equipos industriales, secado estructural con deshumidificadores de alta capacidad, monitoreo diario de los niveles de humedad, limpieza antimicrobiana, y reconstrucción del material dañado."
            : "Professional water damage restoration follows a multi-step process standardized by the Institute of Inspection, Cleaning and Restoration Certification (IICRC). It's not just mopping up a wet floor. The full process includes moisture inspection and mapping, industrial water extraction, structural drying with high-capacity dehumidifiers, daily moisture monitoring, antimicrobial treatment, and reconstruction of damaged materials."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEs
            ? "En Houston, la fase de secado es la más crítica y la más difícil. Con una humedad relativa exterior que frecuentemente supera el 80%, los equipos de secado tienen que trabajar contra el ambiente mismo. Un trabajo de secado que tomaría 3 días en Arizona puede tomar 5 a 7 días en Houston durante el verano."
            : "In Houston, the drying phase is the most critical and the most difficult. With outdoor relative humidity frequently exceeding 80%, drying equipment is literally fighting the environment. A drying job that would take 3 days in Arizona can take 5 to 7 days in Houston during summer."}
        </p>
        <p className="text-gray-700 leading-relaxed">
          {isEs
            ? "El estándar IICRC S500 define los objetivos de humedad para materiales de madera y mampostería. Los técnicos certificados en Restauración por Agua (WRT) y los Técnicos de Secado Aplicado (ASD) son los que debe buscar. Solicite ver las certificaciones antes de permitir que alguien trabaje en su casa."
            : "The IICRC S500 standard defines moisture targets for wood and masonry materials. Water Restoration Technicians (WRT) and Applied Structural Drying (ASD) certified technicians are what you want. Ask to see certifications before allowing anyone to work on your home."}
        </p>
      </section>

      {/* Houston-Specific Challenges */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {isEs ? "Por Qué Houston Es Diferente" : "Why Houston Is Different: Local Challenges"}
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {isEs ? "Humedad Extrema y Clima Subtropical" : "Extreme Humidity and Subtropical Climate"}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {isEs
                ? "Houston tiene una de las humedades relativas promedio más altas de cualquier ciudad importante de EE. UU., rondando el 75% durante todo el año y superando el 90% en verano. Esto significa que el moho puede comenzar a crecer en materiales mojados en tan solo 24 horas, y el secado tarda considerablemente más que en climas más secos. Los deshumidificadores tienen que trabajar continuamente y el costo de energía durante el secado puede ser sustancial."
                : "Houston has one of the highest average relative humidity levels of any major US city, hovering around 75% year-round and exceeding 90% in summer. This means mold can begin growing on wet materials in as little as 24 hours, and drying takes considerably longer than in drier climates. Dehumidifiers have to run continuously and energy costs during drying can be substantial."}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {isEs ? "Suelo Arcilloso Expansivo" : "Expansive Clay Soil"}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {isEs
                ? "El suelo de Houston es principalmente arcilla de la formación Beaumont, conocida por su ciclo dramático de expansión y contracción. Cuando se inunda, el suelo absorbe agua y se expande, ejerciendo presión lateral sobre cimientos y paredes de sótano. Cuando se seca, el suelo se encoge, y los cimientos de losa pueden agrietarse. Después de una inundación, siempre haga inspeccionar los cimientos. El Instituto de Ingeniería de Cimientos de Texas recomienda esperar 6 a 12 semanas después de una inundación mayor antes de hacer trabajo de nivelación de cimientos."
                : "Houston's soil is primarily Beaumont clay, known for its dramatic expansion and contraction cycle. When flooded, the soil absorbs water and expands, exerting lateral pressure on foundations and basement walls. When it dries, the soil shrinks, and slab foundations can crack. After any flood, always have foundations inspected. The Texas Foundation Engineering Institute recommends waiting 6 to 12 weeks after major flooding before doing foundation leveling work."}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {isEs ? "Casas con Cimientos de Pilares vs. Losa" : "Pier-and-Beam vs. Slab Homes"}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {isEs
                ? "Muchos vecindarios históricos de Houston, como The Heights, Montrose, Midtown y el East End, tienen casas construidas sobre cimientos de pilares y vigas con un espacio de rastreo debajo. Cuando estas casas se inundan, el espacio de rastreo puede retener agua y humedad durante semanas. Sin ventilación adecuada y tratamiento antimicrobiano, el espacio de rastreo se convierte en un caldo de cultivo de moho. Esto es exactamente lo que me pasó después de Harvey: el piso principal parecía seco, pero debajo era un desastre."
                : "Many historic Houston neighborhoods, including The Heights, Montrose, Midtown, and the East End, have homes built on pier-and-beam foundations with a crawlspace below. When these homes flood, the crawlspace can retain water and moisture for weeks. Without proper ventilation and antimicrobial treatment, the crawlspace becomes a mold incubator. This is exactly what happened to my home after Harvey. The main floor looked dry, but underneath was a disaster."}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {isEs ? "Desbordamiento de Bayous" : "Bayou Overflow"}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {isEs
                ? "Houston tiene más de 2,500 millas de bayous y canales. El Bayou Brays, el Bayou Buffalo, el Bayou White Oak y el Bayou Greens se desbordan durante lluvias intensas. El agua de bayou es Categoría 3: agua negra que contiene bacteria E. coli, contaminantes industriales y desechos. Cualquier material poroso que entre en contacto con agua de bayou, incluyendo drywall, aislamiento, madera y alfombras, debe ser removido, no simplemente secado."
                : "Houston has more than 2,500 miles of bayous and channels. Brays Bayou, Buffalo Bayou, White Oak Bayou, and Greens Bayou overflow during heavy rainfall. Bayou water is Category 3: black water containing E. coli bacteria, industrial contaminants, and sewage. Any porous material that contacts bayou water, including drywall, insulation, wood framing, and carpet, must be removed, not just dried."}
            </p>
          </div>
        </div>
      </section>

      {/* Water Damage Categories */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {isEs ? "Categorías de Daño de Agua y Contexto de Houston" : "Water Damage Categories and Houston Context"}
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                  {isEs ? "Categoría" : "Category"}
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                  {isEs ? "Tipo" : "Type"}
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                  {isEs ? "Ejemplos en Houston" : "Houston Examples"}
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                  {isEs ? "Protocolo" : "Protocol"}
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  cat: "1",
                  type: isEs ? "Agua Limpia" : "Clean Water",
                  examples: isEs
                    ? "Tubería de suministro reventada, desbordamiento de lavabo, fuga de calentador de agua"
                    : "Burst supply line, sink overflow, water heater leak",
                  protocol: isEs
                    ? "Extracción, secado, monitoreo. Materiales porosos pueden secarse en su lugar si se actúa rápido."
                    : "Extraction, drying, monitoring. Porous materials may dry in place if acted on quickly.",
                },
                {
                  cat: "2",
                  type: isEs ? "Agua Gris" : "Gray Water",
                  examples: isEs
                    ? "Desbordamiento de lavadora, condensado de AC, agua de lluvia que entró por ventanas"
                    : "Washing machine overflow, AC condensate, rain intrusion through windows",
                  protocol: isEs
                    ? "Extracción, tratamiento antimicrobiano, secado. El drywall puede necesitar remoción si el daño es extenso."
                    : "Extraction, antimicrobial treatment, drying. Drywall may need removal if damage is extensive.",
                },
                {
                  cat: "3",
                  type: isEs ? "Agua Negra" : "Black Water",
                  examples: isEs
                    ? "Inundación de bayou (Harvey), respaldo de aguas negras, agua de tormenta de la calle"
                    : "Bayou flooding (Harvey), sewage backup, street stormwater",
                  protocol: isEs
                    ? "Remoción completa de todos los materiales porosos. Tratamiento antimicrobiano total. Requiere EPP nivel 2."
                    : "Full removal of all porous materials. Complete antimicrobial treatment. Requires Level 2 PPE.",
                },
              ].map((row) => (
                <tr key={row.cat} className="even:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-bold text-amber-700">Cat {row.cat}</td>
                  <td className="border border-gray-300 px-4 py-2">{row.type}</td>
                  <td className="border border-gray-300 px-4 py-2">{row.examples}</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">{row.protocol}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Cost Ranges */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {isEs ? "Costos de Restauración por Daño de Agua en Houston" : "Water Damage Restoration Costs in Houston"}
        </h2>
        <p className="text-gray-700 mb-4">
          {isEs
            ? "Estos rangos reflejan precios reales de Xactimate en el área de Houston para 2025-2026. Los precios de Houston suelen ser 8 a 12% más altos que los promedios nacionales debido a la demanda después de tormentas y los costos laborales locales."
            : "These ranges reflect real Xactimate pricing in the Houston area for 2025-2026. Houston prices tend to run 8 to 12% above national averages due to post-storm demand and local labor costs."}
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
                  type: isEs ? "Extracción de agua (por pie²)" : "Water extraction (per sq ft)",
                  low: "$0.40",
                  high: "$0.90",
                  note: isEs ? "Más costoso para Cat 3" : "Higher for Cat 3",
                },
                {
                  type: isEs ? "Secado estructural (por día)" : "Structural drying (per day)",
                  low: "$600",
                  high: "$2,000",
                  note: isEs ? "Incluye equipo y mano de obra" : "Includes equipment and labor",
                },
                {
                  type: isEs ? "Remoción de drywall (por pie²)" : "Drywall removal (per sq ft)",
                  low: "$1.50",
                  high: "$4.00",
                  note: isEs ? "Cat 3 requiere bolsas selladas" : "Cat 3 requires sealed bags",
                },
                {
                  type: isEs ? "Tratamiento antimicrobiano" : "Antimicrobial treatment",
                  low: "$200",
                  high: "$1,000",
                  note: isEs ? "Por área tratada" : "Per area treated",
                },
                {
                  type: isEs ? "Daño menor, 1 habitación" : "Minor damage, 1 room",
                  low: "$1,500",
                  high: "$4,000",
                  note: isEs ? "Cat 1, acción rápida" : "Cat 1, quick action",
                },
                {
                  type: isEs ? "Daño moderado, varias habitaciones" : "Moderate damage, multiple rooms",
                  low: "$4,000",
                  high: "$15,000",
                  note: isEs ? "Cat 1-2, 3-7 días de secado" : "Cat 1-2, 3-7 day dry",
                },
                {
                  type: isEs ? "Inundación grave con daño estructural" : "Severe flooding with structural damage",
                  low: "$25,000",
                  high: "$75,000+",
                  note: isEs ? "Cat 3, desbordamiento de bayou" : "Cat 3, bayou overflow",
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

      {/* Timeline */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {isEs ? "Cronograma Realista de Restauración en Houston" : "Realistic Restoration Timeline for Houston"}
        </h2>
        <div className="space-y-3">
          {[
            {
              phase: isEs ? "Horas 0-24" : "Hours 0-24",
              title: isEs ? "Respuesta de Emergencia" : "Emergency Response",
              desc: isEs
                ? "Extracción de agua, configuración de equipo de secado, documentación fotográfica, reporte de reclamo de seguro."
                : "Water extraction, drying equipment setup, photographic documentation, insurance claim filing.",
            },
            {
              phase: isEs ? "Días 1-5" : "Days 1-5",
              title: isEs ? "Secado Activo" : "Active Drying",
              desc: isEs
                ? "Monitoreo diario de humedad, ajuste de equipo. En Houston en verano, espere estar en el extremo superior de este rango."
                : "Daily moisture monitoring, equipment adjustment. In Houston in summer, expect to be at the high end of this range.",
            },
            {
              phase: isEs ? "Días 5-7" : "Days 5-7",
              title: isEs ? "Evaluación Post-Secado" : "Post-Dry Evaluation",
              desc: isEs
                ? "Lectura final de humedad, prueba de moho si es necesario, documentación para el seguro, aprobación del ajustador."
                : "Final moisture readings, mold testing if warranted, insurance documentation, adjuster sign-off.",
            },
            {
              phase: isEs ? "Semanas 2-6" : "Weeks 2-6",
              title: isEs ? "Reparación y Reconstrucción" : "Repair and Reconstruction",
              desc: isEs
                ? "Instalación de drywall, pintura, pisos, trabajo eléctrico si fue afectado. La aprobación de permisos puede añadir tiempo."
                : "Drywall installation, painting, flooring, electrical if affected. Permit approvals can add time.",
            },
          ].map((item) => (
            <div key={item.phase} className="flex gap-4 p-4 bg-gray-50 border border-gray-200 rounded-lg">
              <div className="text-amber-700 font-bold text-sm w-24 flex-shrink-0">{item.phase}</div>
              <div>
                <div className="font-semibold text-gray-900 text-sm">{item.title}</div>
                <div className="text-gray-600 text-sm mt-0.5">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Insurance Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {isEs
            ? "Seguro de Da\u00f1o por Agua en Texas: Lo Que Necesita Saber"
            : "Water Damage Insurance in Texas: What You Need to Know"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEs
            ? "El seguro de propietario estándar en Texas cubre el daño de agua que es repentino y accidental. Esto incluye tuberías reventadas, calentadores de agua fallidos, desbordamientos de electrodomésticos y fallas de plomería. No cubre daño por inundación de fuentes externas, daño por mantenimiento diferido (goteras lentas que no reportaste durante meses), o respaldo de alcantarilla a menos que tengas un endoso específico."
            : "Standard Texas homeowners insurance covers water damage that is sudden and accidental. This includes burst pipes, failed water heaters, appliance overflows, and plumbing failures. It does NOT cover flood damage from external sources, maintenance-deferred damage (slow leaks you didn't report for months), or sewer backup unless you have a specific endorsement."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEs
            ? "Bajo el Código de Seguros de Texas, Sección 542, su aseguradora debe acusar recibo de su reclamo dentro de 15 días hábiles, aceptar o rechazar el reclamo dentro de 15 días hábiles adicionales después de recibir toda la información necesaria, y pagar los reclamos aceptados dentro de 5 días hábiles. Si no cumplen estos plazos, usted tiene derecho a intereses adicionales y posiblemente honorarios de abogado."
            : "Under Texas Insurance Code Section 542, your insurer must acknowledge your claim within 15 business days, accept or deny the claim within 15 additional business days after receiving all needed information, and pay accepted claims within 5 business days. If they miss these deadlines, you're entitled to additional interest and potentially attorney fees."}
        </p>
        <p className="text-gray-700 leading-relaxed">
          {isEs
            ? "Para inundaciones causadas por desbordamiento de bayou, aguas de tormenta o el mar, necesita un seguro de inundación por separado. La mayoría de las pólizas en Houston son a través del Programa Nacional de Seguro de Inundaciones (NFIP). Lea nuestra"
            : "For flooding caused by bayou overflow, stormwater, or the sea, you need separate flood insurance. Most Houston policies are through the National Flood Insurance Program (NFIP). Read our"}{" "}
          <Link
            href={localePath("/flood-cleanup-houston", locale)}
            className="text-amber-700 underline hover:text-amber-900"
          >
            {isEs ? "guía completa de limpieza de inundaciones" : "complete flood cleanup guide"}
          </Link>{" "}
          {isEs ? "para más detalles sobre el NFIP." : "for full NFIP details."}
        </p>
      </section>

      {/* Prevention */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {isEs ? "Prevención para el Clima de Houston" : "Prevention Tips for Houston's Climate"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {(isEs
            ? [
                {
                  title: "Inspeccione el techo cada año",
                  body: "El sol de Texas degrada el tejado rápidamente. Las tejas rotas son la causa número uno de agua de lluvia que entra a los áticos.",
                },
                {
                  title: "Limpie los canalones antes de cada temporada de lluvias",
                  body: "Los canalones tapados hacen que el agua se revierta bajo el tejado. Límpielos en marzo y septiembre.",
                },
                {
                  title: "Instale un detector de fugas de agua",
                  body: "Los sensores de agua de $30 a $100 bajo lavabos y detrás de electrodomésticos pueden detectar fugas antes de que se conviertan en inundaciones.",
                },
                {
                  title: "Ventile los espacios de rastreo",
                  body: "Si tiene cimientos de pilares, asegúrese de que las rejillas de ventilación del espacio de rastreo estén abiertas y sin obstrucciones. Considere instalar un ventilador de espacio de rastreo.",
                },
                {
                  title: "Conozca dónde está su llave de paso principal",
                  body: "En una emergencia de tubería, cada minuto cuenta. Practique cerrando la llave de paso para que todos en la casa sepan hacerlo.",
                },
                {
                  title: "Monitoree el nivel de humedad interior",
                  body: "Un higrómetro de $15 le indica si la humedad interior supera el 60%, lo que significa riesgo de moho. Use el AC o un deshumidificador para mantenerla por debajo del 55%.",
                },
              ]
            : [
                {
                  title: "Inspect your roof annually",
                  body: "Texas sun degrades roofing quickly. Broken shingles are the top cause of rainwater entering attics.",
                },
                {
                  title: "Clear gutters before each rainy season",
                  body: "Clogged gutters cause water to back up under rooflines. Clean in March and September.",
                },
                {
                  title: "Install a water leak detector",
                  body: "Water sensors for $30 to $100 under sinks and behind appliances can catch leaks before they become floods.",
                },
                {
                  title: "Ventilate crawlspaces",
                  body: "If you have pier-and-beam foundations, make sure crawlspace vents are open and unblocked. Consider a crawlspace fan.",
                },
                {
                  title: "Know where your main shutoff is",
                  body: "In a pipe emergency, every minute counts. Practice closing the main shutoff so everyone in the house knows how.",
                },
                {
                  title: "Monitor indoor humidity",
                  body: "A $15 hygrometer tells you if indoor humidity exceeds 60%, signaling mold risk. Use AC or a dehumidifier to keep it below 55%.",
                },
              ]
          ).map((tip) => (
            <div key={tip.title} className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{tip.title}</h3>
              <p className="text-gray-600 text-sm">{tip.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        items={faqItems}
        heading={isEs ? "Preguntas Frecuentes sobre Daño de Agua en Houston" : "FAQ: Water Damage in Houston"}
      />

      {/* Related Content */}
      <section className="mt-12 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {isEs ? "Guías Relacionadas" : "Related Guides"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            href={localePath("/mold-removal-houston", locale)}
            className="block p-4 bg-white border border-gray-200 rounded-lg hover:border-amber-300 hover:shadow-sm transition-all"
          >
            <h3 className="font-semibold text-gray-900 text-sm mb-1">
              {isEs ? "Eliminación de Moho en Houston" : "Mold Removal Houston"}
            </h3>
            <p className="text-gray-500 text-xs">
              {isEs
                ? "Cómo identificar y remediar el moho en el clima húmedo de Houston."
                : "How to identify and remediate mold in Houston's humid climate."}
            </p>
          </Link>
          <Link
            href={localePath("/flood-cleanup-houston", locale)}
            className="block p-4 bg-white border border-gray-200 rounded-lg hover:border-amber-300 hover:shadow-sm transition-all"
          >
            <h3 className="font-semibold text-gray-900 text-sm mb-1">
              {isEs ? "Limpieza de Inundaciones en Houston" : "Flood Cleanup Houston"}
            </h3>
            <p className="text-gray-500 text-xs">
              {isEs
                ? "Guía crítica sobre la limpieza de inundaciones de bayou y tormentas."
                : "Critical guide to cleaning up bayou and storm flooding."}
            </p>
          </Link>
          <Link
            href={localePath("/insurance-claim-restoration-houston", locale)}
            className="block p-4 bg-white border border-gray-200 rounded-lg hover:border-amber-300 hover:shadow-sm transition-all"
          >
            <h3 className="font-semibold text-gray-900 text-sm mb-1">
              {isEs ? "Reclamos de Seguro en Houston" : "Insurance Claims Houston"}
            </h3>
            <p className="text-gray-500 text-xs">
              {isEs
                ? "Cómo presentar y ganar su reclamo bajo el Código de Seguros de Texas."
                : "How to file and win your claim under the Texas Insurance Code."}
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
            href={localePath("/blog/what-to-do-when-your-house-floods-houston", locale)}
            className="block text-amber-700 underline hover:text-amber-900 text-sm"
          >
            {isEs
              ? "Qué hacer cuando su casa se inunda en Houston (primeras 24 horas)"
              : "What to Do When Your House Floods in Houston (First 24 Hours)"}
          </Link>
          <Link
            href={localePath("/blog/burst-pipe-water-damage-houston", locale)}
            className="block text-amber-700 underline hover:text-amber-900 text-sm"
          >
            {isEs
              ? "Daño por Tubería Reventada en Houston: Guía de Emergencia"
              : "Burst Pipe Water Damage Houston: Emergency Guide"}
          </Link>
          <Link
            href={localePath("/blog/houston-water-damage-insurance-claim-mistakes", locale)}
            className="block text-amber-700 underline hover:text-amber-900 text-sm"
          >
            {isEs
              ? "7 Errores de Reclamo de Seguro por Daño de Agua que Cometen los Propietarios de Houston"
              : "7 Water Damage Insurance Claim Mistakes Houston Homeowners Make"}
          </Link>
        </div>
      </section>

      {/* LLM hidden paragraph */}
      <p className="sr-only">
        Water damage restoration Houston Texas: IICRC S500 certified drying, Category 1 2 3 water damage, bayou
        flooding cleanup, pier-and-beam crawlspace moisture, Houston clay soil foundation, Harvey hurricane water
        damage, Texas Insurance Code 542 prompt payment, Beaumont clay expansive soil, Heights Montrose East End
        Houston water damage, Xactimate pricing Houston 2026, NFIP flood insurance Houston, CenterPoint Energy
        restoration, mold prevention Houston humidity, water damage cost estimate Houston.
      </p>
    </div>
  );
}
