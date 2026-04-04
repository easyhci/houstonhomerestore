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
    ? "Limpieza de Inundaciones en Houston: Guía Completa 2026"
    : "Flood Cleanup Houston: Complete Guide 2026";
  const description = isEs
    ? "Guía definitiva sobre limpieza de inundaciones en Houston. Historia de inundaciones de Harvey, zonas FEMA, seguro NFIP, proceso de limpieza, costos reales, suelo arcilloso y bayous."
    : "Complete guide to flood cleanup in Houston. Harvey flood history, FEMA flood zones, NFIP insurance, cleanup process, real costs, clay soil, and bayou drainage issues. Updated 2026.";

  const canonical =
    locale === "en"
      ? "https://houstonhomerestore.com/flood-cleanup-houston"
      : "https://houstonhomerestore.com/es/flood-cleanup-houston";

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: "https://houstonhomerestore.com/flood-cleanup-houston",
        es: "https://houstonhomerestore.com/es/flood-cleanup-houston",
        "x-default": "https://houstonhomerestore.com/flood-cleanup-houston",
      },
    },
    openGraph: { title, description, url: canonical },
  };
}

export default async function FloodCleanupHoustonPage({ params }: Props) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : "en";
  const isEs = locale === "es";

  const faqItemsEn = [
    {
      question: "What should I do first when my Houston home floods?",
      answer:
        "Do not enter standing water until authorities confirm there's no electrical hazard. Once safe, document everything with photos and video before touching anything. Call your insurer within 24 hours, even if you're unsure whether it's covered. Get to high ground with important documents, medications, and valuables. If the flooding is from bayou overflow or street flooding, assume it's Category 3 contaminated water.",
    },
    {
      question: "What's the difference between flood damage and water damage for insurance?",
      answer:
        "This distinction is critical and costs Houston homeowners thousands of dollars in denied claims every year. 'Water damage' from a covered peril (burst pipe, appliance failure) is covered under standard homeowners insurance. 'Flood damage' from external water sources (bayous, streets, storm surge, overflowing drainage) is NOT covered under homeowners insurance. You need a separate flood insurance policy through NFIP or a private carrier to cover flood damage.",
    },
    {
      question: "What is the NFIP and do I need it in Houston?",
      answer:
        "The National Flood Insurance Program (NFIP) is managed by FEMA and provides flood insurance that standard homeowners policies exclude. In Houston, NFIP coverage is strongly recommended for any property in or near a FEMA-designated flood zone. Harris County has the highest flood insurance claims of any county in the US. Coverage options: building coverage up to $250,000 and contents coverage up to $100,000. Note that NFIP doesn't cover living expenses or vehicles.",
    },
    {
      question: "How do I know what FEMA flood zone I'm in?",
      answer:
        "Use FEMA's Flood Map Service Center at msc.fema.gov and enter your Houston address. Zone A or AE means you're in a high-risk area and flood insurance is typically required by your mortgage lender. Zone X means lower risk but flooding still happens, as Harvey proved. The Houston city council has flood maps online as well. Harris County Flood Control District also maintains real-time flood gauge data.",
    },
    {
      question: "How long does flood cleanup take in Houston?",
      answer:
        "Initial emergency response (water extraction): 1 to 3 days. Structural drying: 5 to 10 days in Houston's humidity. Material removal for Category 3 flooding: 3 to 7 days. Full rebuilding after major flooding: 8 to 24 weeks. For context, many Houston homes damaged by Harvey were not fully restored until 12 to 18 months after the storm.",
    },
    {
      question: "What is the bayou system and why does it flood Houston so badly?",
      answer:
        "Houston's bayou system, including Brays Bayou, Buffalo Bayou, White Oak Bayou, Greens Bayou, and Sims Bayou, is designed to channel rainwater to Galveston Bay. But Houston's flat topography (only 3 to 4 feet of elevation change over miles) and clay soil that doesn't absorb water mean any rainfall above about 2 inches per hour can exceed drainage capacity. The Harris County Flood Control District manages over 2,500 miles of channels and over 62 stormwater detention basins.",
    },
    {
      question: "Does FEMA assistance cover flood cleanup costs?",
      answer:
        "FEMA's Individuals and Households Program (IHP) can provide grants for temporary housing, essential repairs, and other disaster-related needs. However, FEMA assistance is not a substitute for flood insurance, and grants are often far less than actual repair costs. After Harvey, the average FEMA grant per household was approximately $8,900, while average home repair costs were $46,000. Always have NFIP coverage if you're in a flood-risk area.",
    },
    {
      question: "What appliances and systems need replacement after flooding?",
      answer:
        "Any appliance that was submerged should be considered a total loss and not plugged in: furnaces, water heaters, HVAC air handlers, electrical panels, and all kitchen appliances. Gas appliances need inspection before re-use. HVAC systems that were flooded require complete cleaning and often replacement of the air handler and coil. Insurance typically covers these as part of the flood loss.",
    },
  ];

  const faqItemsEs = [
    {
      question: "¿Qué debo hacer primero cuando mi casa en Houston se inunda?",
      answer:
        "No entres al agua estancada hasta que las autoridades confirmen que no hay peligro eléctrico. Una vez seguro, documenta todo con fotos y video antes de tocar nada. Llama a tu aseguradora dentro de las primeras 24 horas. Si la inundación es por desbordamiento de bayou o agua de la calle, asumir que es agua Categoría 3 contaminada.",
    },
    {
      question: "¿Cuál es la diferencia entre daño por agua e inundación para el seguro?",
      answer:
        "Esta distinción es crítica. El 'daño por agua' de una causa cubierta (tubería reventada, falla de electrodoméstico) está cubierto por el seguro estándar de propietario. El 'daño por inundación' de fuentes de agua externas (bayous, calles, marejada ciclónica) NO está cubierto. Necesitas una póliza de seguro de inundación separada a través del NFIP o un asegurador privado.",
    },
    {
      question: "¿Qué es el NFIP y lo necesito en Houston?",
      answer:
        "El Programa Nacional de Seguro de Inundaciones (NFIP) es administrado por FEMA y proporciona cobertura de inundaciones que las pólizas estándar de propietario excluyen. En Houston, la cobertura NFIP es muy recomendable para cualquier propiedad en o cerca de una zona de inundación designada por FEMA. El Condado Harris tiene el mayor número de reclamos de seguro de inundación de cualquier condado en EE. UU.",
    },
    {
      question: "¿Cuánto tiempo tarda la limpieza de inundaciones en Houston?",
      answer:
        "Respuesta de emergencia inicial (extracción de agua): 1 a 3 días. Secado estructural: 5 a 10 días en la humedad de Houston. Remoción de material por inundación Categoría 3: 3 a 7 días. Reconstrucción completa después de inundaciones mayores: 8 a 24 semanas. Muchas casas de Houston dañadas por Harvey no fueron completamente restauradas hasta 12 a 18 meses después de la tormenta.",
    },
    {
      question: "¿Cómo sé en qué zona de inundación FEMA estoy?",
      answer:
        "Usa el Centro de Servicios de Mapas de Inundación de FEMA en msc.fema.gov e ingresa tu dirección de Houston. La Zona A o AE significa que estás en un área de alto riesgo y el seguro de inundación generalmente es requerido por tu prestamista hipotecario. La Zona X significa menor riesgo, pero las inundaciones aún ocurren, como Harvey lo demostró.",
    },
    {
      question: "¿La asistencia de FEMA cubre los costos de limpieza de inundaciones?",
      answer:
        "El Programa de Individuos y Hogares (IHP) de FEMA puede proporcionar subvenciones para vivienda temporal y reparaciones esenciales. Sin embargo, la asistencia de FEMA no es un sustituto del seguro de inundación. Después de Harvey, la subvención promedio de FEMA por hogar fue de aproximadamente $8,900, mientras que los costos promedio de reparación de casas fueron de $46,000.",
    },
    {
      question: "¿Qué electrodomésticos y sistemas necesitan reemplazarse después de una inundación?",
      answer:
        "Cualquier electrodoméstico que estuvo sumergido debe considerarse una pérdida total: calentadores de agua, manejadores de aire HVAC, paneles eléctricos y todos los electrodomésticos de cocina. Los aparatos de gas necesitan inspección antes de volver a usarse. El seguro típicamente cubre estos como parte de la pérdida por inundación.",
    },
    {
      question: "¿Qué es el sistema de bayous y por qué inunda Houston tan mal?",
      answer:
        "El sistema de bayous de Houston incluye el Bayou Brays, Buffalo, White Oak, Greens y Sims, diseñado para canalizar el agua de lluvia hacia la Bahía de Galveston. Pero la topografía plana de Houston y el suelo arcilloso que no absorbe agua significan que cualquier lluvia por encima de 2 pulgadas por hora puede exceder la capacidad de drenaje.",
    },
  ];

  const faqItems = isEs ? faqItemsEs : faqItemsEn;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Hero */}
      <h1 className="text-4xl font-extrabold text-gray-900 mb-3">
        {isEs
          ? "Limpieza de Inundaciones en Houston: La Guía Completa"
          : "Flood Cleanup Houston: The Complete Guide"}
      </h1>
      <p className="text-gray-500 text-sm mb-4">
        {isEs ? "Actualizado: Abril 2026" : "Updated: April 2026"} &middot; Marcus Chen
      </p>

      <QuickAnswer
        label={isEs ? "Respuesta Rápida:" : "Quick Answer:"}
        answer={
          isEs
            ? "La inundación en Houston casi siempre involucra agua Categoría 3 (agua negra) de bayous o desagües de tormenta, lo que requiere remoción completa de materiales porosos. El seguro estándar de propietario NO cubre inundaciones de fuentes externas, solo el NFIP o un seguro privado cubre eso. Los costos de limpieza van de $5,000 a $100,000+ según la profundidad del agua y la extensión del daño."
            : "Flooding in Houston almost always involves Category 3 (black water) from bayous or storm drains, requiring full porous material removal. Standard homeowners insurance does NOT cover external flooding. Only NFIP or private flood insurance covers it. Cleanup costs range from $5,000 to $100,000+ depending on water depth and damage extent."
        }
      />

      <AuthorBio locale={locale} />

      {/* Introduction */}
      <section className="mt-8 mb-10">
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          {isEs
            ? "Cuando el huracán Harvey se estancó sobre Houston en agosto de 2017 y descargó más de 50 pulgadas de lluvia en cuatro días, más de 200,000 estructuras fueron inundadas. Más de 30,000 personas fueron rescatadas. El daño total superó los $125 mil millones, convirtiéndolo en el desastre natural más costoso de la historia de EE. UU. después del huracán Katrina."
            : "When Hurricane Harvey stalled over Houston in August 2017 and dropped more than 50 inches of rain in four days, over 200,000 structures flooded. More than 30,000 people were rescued. Total damage exceeded $125 billion, making it the costliest natural disaster in US history at the time after Hurricane Katrina."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEs
            ? "Pero Harvey no fue un evento excepcional para Houston. El Día Memorial de 2015 y la Inundación de Tax Day de 2016 también causaron inundaciones masivas en la misma área solo dos años antes. Houston experimenta inundaciones graves con una frecuencia que pocas ciudades de EE. UU. igualan. Esta guía te prepara para la realidad de la limpieza de inundaciones en una ciudad que inunda."
            : "But Harvey wasn't an exceptional event for Houston. The 2015 Memorial Day flood and the 2016 Tax Day flood also caused massive flooding in the same area just two years earlier. Houston experiences serious flooding with a frequency few US cities match. This guide prepares you for the reality of flood cleanup in a city that floods."}
        </p>
      </section>

      {/* Emergency Steps */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          {isEs ? "Respuesta de Emergencia por Inundación: Pasos Críticos" : "Emergency Flood Response: Critical Steps"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              step: "1",
              title: isEs ? "Seguridad primero" : "Safety First",
              body: isEs
                ? "No entres al agua estancada hasta que CenterPoint Energy o las autoridades confirmen que no hay líneas eléctricas caídas ni peligros eléctricos. El agua de inundación puede estar electrificada. Usa botas de agua y guantes si debes entrar. No conduzcas por agua con profundidad desconocida: dos pies de agua que fluye pueden arrastrar un vehículo."
                : "Do not enter standing water until CenterPoint Energy or authorities confirm no downed power lines or electrical hazards exist. Flood water can be electrified. Wear rubber boots and gloves if you must enter. Never drive through water of unknown depth. Two feet of moving water can sweep away a vehicle.",
            },
            {
              step: "2",
              title: isEs ? "Documenta antes de limpiar" : "Document Before Cleaning",
              body: isEs
                ? "Tu reclamo de seguro depende de documentación exhaustiva. Fotografía y filma cada habitación desde múltiples ángulos. Registra la marca de agua en las paredes. Enumera todos los artículos dañados con sus valores estimados. Guarda muestras de materiales dañados si es posible. Esta documentación determina tu pago de reclamo."
                : "Your insurance claim depends on thorough documentation. Photograph and video every room from multiple angles. Record the water line mark on walls. List all damaged items with estimated values. Save samples of damaged materials if possible. This documentation determines your claim payment.",
            },
            {
              step: "3",
              title: isEs ? "Reporta el reclamo y solicita ayuda" : "File the Claim and Seek Assistance",
              body: isEs
                ? "Llama a tu aseguradora de inundaciones (NFIP o privada) dentro de las 24 horas. Registra con FEMA en DisasterAssistance.gov o llama al 1-800-621-3362 si hay una declaración de desastre federal. El Distrito de Control de Inundaciones del Condado Harris también tiene recursos para propietarios afectados."
                : "Call your flood insurer (NFIP or private) within 24 hours. Register with FEMA at DisasterAssistance.gov or call 1-800-621-3362 if there's a federal disaster declaration. The Harris County Flood Control District also has resources for affected homeowners.",
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

      {/* Houston Flood History */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {isEs ? "La Historia de Inundaciones de Houston" : "Houston's Flood History"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEs
            ? "Houston tiene un largo historial de inundaciones repetidas. Comprender este contexto es importante porque afecta el valor de la propiedad, los requisitos de seguro, y las posibilidades de que tu casa vuelva a inundarse."
            : "Houston has a long history of repeated flooding. Understanding this context is important because it affects property values, insurance requirements, and the likelihood your home floods again."}
        </p>
        <div className="space-y-3">
          {[
            {
              year: "2017",
              event: isEs ? "Huracán Harvey" : "Hurricane Harvey",
              detail: isEs
                ? "50+ pulgadas de lluvia en 4 días. 200,000+ estructuras inundadas. $125+ mil millones en daños. El evento de lluvia más intenso en la historia de EE. UU."
                : "50+ inches of rain over 4 days. 200,000+ structures flooded. $125+ billion in damages. Most intense rainfall event in US history.",
            },
            {
              year: "2016",
              event: isEs ? "Inundación del Día de Impuestos" : "Tax Day Flood",
              detail: isEs
                ? "17+ pulgadas de lluvia en una noche. 1,000+ casas destruidas. 4,000+ dañadas. Muchas casas fuera de las zonas de inundación FEMA 100 años se inundaron."
                : "17+ inches of rain overnight. 1,000+ homes destroyed. 4,000+ damaged. Many homes outside FEMA 100-year flood zones flooded.",
            },
            {
              year: "2015",
              event: isEs ? "Inundaciones del Día Memorial" : "Memorial Day Floods",
              detail: isEs
                ? "Inundaciones severas en todo el Gran Houston. 25 muertes. $1+ mil millones en daños. El Bayou Brays superó récords históricos."
                : "Severe flooding across Greater Houston. 25 deaths. $1+ billion in damages. Brays Bayou exceeded historical records.",
            },
            {
              year: "2001",
              event: "Tropical Storm Allison",
              detail: isEs
                ? "36+ pulgadas de lluvia. 73,000 hogares dañados. $9 mil millones en daños. El Distrito Médico de Texas fue devastado."
                : "36+ inches of rain. 73,000 homes damaged. $9 billion in damages. The Texas Medical Center was devastated.",
            },
          ].map((item) => (
            <div key={item.year} className="flex gap-4 p-4 bg-gray-50 border border-gray-200 rounded-lg">
              <div className="text-amber-700 font-bold text-sm w-12 flex-shrink-0">{item.year}</div>
              <div>
                <div className="font-semibold text-gray-900 text-sm">{item.event}</div>
                <div className="text-gray-600 text-sm mt-0.5">{item.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Water Damage vs Flood Damage */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {isEs
            ? "Daño por Agua vs. Inundación: La Distinción que Determina tu Cobertura"
            : "Water Damage vs. Flood Damage: The Distinction That Determines Your Coverage"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEs
            ? "Esta es la distinción más importante que un propietario de Houston necesita entender sobre el seguro. Confundirlas es el error número uno que veo en los reclamos denegados."
            : "This is the single most important distinction a Houston homeowner needs to understand about insurance. Confusing them is the number one mistake I see in denied claims."}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 border border-green-200 rounded-xl p-5">
            <h3 className="font-bold text-green-800 mb-3">
              {isEs ? "Daño por Agua (Cubierto por Seguro de Propietario)" : "Water Damage (Covered by Homeowners)"}
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              {(isEs
                ? [
                    "Tubería de suministro reventada dentro de casa",
                    "Falla del calentador de agua",
                    "Desbordamiento de lavaplatos o lavadora",
                    "Filtración por el techo (lluvia que entra por daño en el techo)",
                    "Rotura de una tubería de AC dentro del muro",
                  ]
                : [
                    "Burst supply pipe inside the home",
                    "Water heater failure",
                    "Dishwasher or washer overflow",
                    "Roof leak (rain entering through roof damage)",
                    "AC pipe rupture inside the wall",
                  ]
              ).map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-green-600 flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-xl p-5">
            <h3 className="font-bold text-red-800 mb-3">
              {isEs ? "Daño por Inundación (Requiere NFIP o Seguro Privado)" : "Flood Damage (Requires NFIP or Private Flood)"}
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              {(isEs
                ? [
                    "Desbordamiento de bayou (Brays, Buffalo, White Oak, etc.)",
                    "Agua de tormenta de la calle que entra a la casa",
                    "Marejada ciclónica de huracán",
                    "Agua que fluye por la tierra hacia tu sótano",
                    "Inundación de vecindarios por drenaje bloqueado",
                  ]
                : [
                    "Bayou overflow (Brays, Buffalo, White Oak, etc.)",
                    "Street stormwater entering your home",
                    "Hurricane storm surge",
                    "Water flowing overland into your foundation",
                    "Neighborhood flooding from blocked drainage",
                  ]
              ).map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-red-600 flex-shrink-0">✗</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-gray-600 text-sm mt-4 italic">
          {isEs
            ? "Nota: Muchos eventos de Houston involucran ambos tipos. Por ejemplo, si la lluvia de un huracán daña tu techo y agua entra por el techo mientras que el bayou se desborda y entra por la puerta trasera al mismo tiempo, las dos porciones pueden ser reclamadas bajo diferentes pólizas. Documenta los puntos de entrada del agua cuidadosamente."
            : "Note: Many Houston events involve both types. For example, if hurricane rain damages your roof and water enters through the roof while the bayou simultaneously overflows through the back door, the two portions may be claimed under different policies. Document water entry points carefully."}
        </p>
      </section>

      {/* FEMA Flood Zones */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {isEs ? "Zonas de Inundación FEMA en Houston" : "FEMA Flood Zones in Houston"}
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                  {isEs ? "Zona" : "Zone"}
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                  {isEs ? "Nivel de Riesgo" : "Risk Level"}
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                  {isEs ? "Qué Significa" : "What It Means"}
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                  {isEs ? "Seguro Requerido" : "Insurance Required?"}
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  zone: "AE",
                  risk: isEs ? "Alto" : "High",
                  meaning: isEs
                    ? "Llanura de inundación de 100 años con elevaciones base de inundación (BFE) establecidas"
                    : "100-year floodplain with established base flood elevations (BFE)",
                  req: isEs ? "Sí, si hay hipoteca federal" : "Yes, with federally backed mortgage",
                },
                {
                  zone: "A",
                  risk: isEs ? "Alto" : "High",
                  meaning: isEs
                    ? "Llanura de inundación de 100 años, sin elevaciones BFE establecidas"
                    : "100-year floodplain, no established BFE",
                  req: isEs ? "Sí, si hay hipoteca federal" : "Yes, with federally backed mortgage",
                },
                {
                  zone: "AO",
                  risk: isEs ? "Alto" : "High",
                  meaning: isEs
                    ? "Áreas con inundaciones tipo arroyo superficial de 1 a 3 pies de profundidad"
                    : "Areas with shallow sheet flooding 1 to 3 feet deep",
                  req: isEs ? "Sí, si hay hipoteca federal" : "Yes, with federally backed mortgage",
                },
                {
                  zone: "X (shaded)",
                  risk: isEs ? "Moderado" : "Moderate",
                  meaning: isEs
                    ? "Llanura de inundación de 500 años. Harvey inundó muchas de estas áreas."
                    : "500-year floodplain. Harvey flooded many of these areas.",
                  req: isEs ? "No, pero recomendado fuertemente" : "No, but strongly recommended",
                },
                {
                  zone: "X (unshaded)",
                  risk: isEs ? "Mínimo" : "Minimal",
                  meaning: isEs
                    ? "Bajo riesgo de inundación según los mapas actuales de FEMA"
                    : "Minimal flood risk per current FEMA maps",
                  req: isEs ? "No, pero considera seguro privado" : "No, but consider private flood",
                },
              ].map((row) => (
                <tr key={row.zone} className="even:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-bold text-amber-700">{row.zone}</td>
                  <td className="border border-gray-300 px-4 py-2">{row.risk}</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">{row.meaning}</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">{row.req}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 text-sm mt-3">
          {isEs
            ? "Importante: Los mapas de inundación FEMA se actualizan. Verifica tu zona actual en msc.fema.gov. Harris County ha actualizado los mapas significativamente después de Harvey."
            : "Important: FEMA flood maps are updated regularly. Verify your current zone at msc.fema.gov. Harris County has updated maps significantly post-Harvey."}
        </p>
      </section>

      {/* Flood Cleanup Process */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {isEs ? "El Proceso de Limpieza de Inundaciones en Houston" : "The Flood Cleanup Process in Houston"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEs
            ? "La inundación de bayou y aguas de tormenta en Houston es agua Categoría 3 (agua negra). Esto no es negociable. Contiene E. coli, bacterias fecales, contaminantes industriales, y posiblemente químicos de la escorrentía de las autopistas. Todo material poroso que entre en contacto con agua de inundación debe ser removido, no solo secado."
            : "Houston bayou and stormwater flooding is Category 3 (black water). This is non-negotiable. It contains E. coli, fecal bacteria, industrial contaminants, and potentially chemicals from highway runoff. Every porous material that contacts flood water must be removed, not just dried."}
        </p>
        <div className="space-y-4">
          {[
            {
              phase: isEs ? "Fase 1: Extracción (Días 1-2)" : "Phase 1: Extraction (Days 1-2)",
              items: isEs
                ? [
                    "Extracción de agua estancada con bombas de sumidero o sistemas de extracción truck-mounted",
                    "Remoción de alfombras, colchones y muebles empapados",
                    "Apertura de paredes (flood cuts) a 12 a 24 pulgadas sobre la marca de agua",
                    "Configuración de presión de aire negativa para contener contaminantes",
                  ]
                : [
                    "Standing water extraction with sump pumps or truck-mounted extraction systems",
                    "Removal of soaked carpet, mattresses, and furniture",
                    "Wall opening (flood cuts) at 12 to 24 inches above the water line",
                    "Negative air pressure setup to contain contaminants",
                  ],
            },
            {
              phase: isEs ? "Fase 2: Remoción de Materiales (Días 2-5)" : "Phase 2: Material Removal (Days 2-5)",
              items: isEs
                ? [
                    "Remoción de todo el drywall mojado en bolsas de 6 milésimas selladas",
                    "Remoción del aislamiento (nunca puede ser secado y reutilizado si estuvo en contacto con agua negra)",
                    "Remoción del piso flotante, laminado, y vinilo si estuvo sumergido",
                    "Tratamiento de la madera estructural con biocida",
                  ]
                : [
                    "All wet drywall removal into sealed 6-mil poly bags",
                    "Insulation removal (can never be dried and reused if it contacted black water)",
                    "Floating floor, laminate, and vinyl removal if submerged",
                    "Structural lumber treatment with biocide",
                  ],
            },
            {
              phase: isEs ? "Fase 3: Secado Estructural (Días 3-10)" : "Phase 3: Structural Drying (Days 3-10)",
              items: isEs
                ? [
                    "Deshumidificadores de alta capacidad en toda la estructura",
                    "Ventiladores axiales para circulación de aire en la cavidad de las paredes",
                    "Monitoreo diario de humedad en madera estructural y concreto",
                    "Tratamiento antimicrobiano HEPA tras alcanzar el objetivo de humedad",
                  ]
                : [
                    "High-capacity dehumidifiers throughout the structure",
                    "Axial fans for air circulation through wall cavities",
                    "Daily moisture monitoring in structural lumber and concrete",
                    "HEPA antimicrobial treatment once humidity targets are met",
                  ],
            },
            {
              phase: isEs ? "Fase 4: Pruebas y Reconstrucción (Semanas 2-24)" : "Phase 4: Testing and Reconstruction (Weeks 2-24)",
              items: isEs
                ? [
                    "Prueba de moho antes de reconstruir si hay alguna duda sobre el secado",
                    "Instalación de nuevo drywall, aislamiento y pisos",
                    "Inspecciones eléctricas de todos los circuitos que estuvieron sumergidos",
                    "Inspección final del ajustador de seguros antes del pago final",
                  ]
                : [
                    "Mold testing before rebuilding if there's any doubt about drying",
                    "New drywall, insulation, and flooring installation",
                    "Electrical inspection of all circuits that were submerged",
                    "Final insurance adjuster inspection before final payment",
                  ],
            },
          ].map((phase) => (
            <div key={phase.phase} className="p-5 bg-white border border-gray-200 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-3">{phase.phase}</h3>
              <ul className="space-y-1.5">
                {phase.items.map((item) => (
                  <li key={item} className="text-gray-600 text-sm flex gap-2">
                    <span className="text-amber-600 flex-shrink-0 mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Cost Ranges */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {isEs ? "Costos de Limpieza de Inundaciones en Houston" : "Flood Cleanup Costs in Houston"}
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                  {isEs ? "Escenario" : "Scenario"}
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
                  scenario: isEs ? "Inundación menor (6 pulgadas o menos)" : "Minor flooding (6 inches or less)",
                  low: "$5,000",
                  high: "$15,000",
                  note: isEs ? "Solo planta baja, sin daño estructural" : "Ground floor only, no structural damage",
                },
                {
                  scenario: isEs ? "Inundación moderada (6-24 pulgadas)" : "Moderate flooding (6-24 inches)",
                  low: "$15,000",
                  high: "$40,000",
                  note: isEs ? "Remoción de drywall hasta 24 pulgadas" : "Drywall removal to 24 inches",
                },
                {
                  scenario: isEs ? "Inundación severa (más de 2 pies)" : "Severe flooding (more than 2 feet)",
                  low: "$40,000",
                  high: "$100,000+",
                  note: isEs ? "Remoción completa de primera planta, eléctrico" : "Full first floor removal, electrical",
                },
                {
                  scenario: isEs ? "Inundación al nivel del techo" : "At-ceiling flooding",
                  low: "$80,000",
                  high: "$200,000+",
                  note: isEs ? "Posiblemente pérdida total" : "Potentially a total loss",
                },
                {
                  scenario: isEs ? "Limpieza de espacio de rastreo" : "Crawlspace flood cleanup",
                  low: "$3,000",
                  high: "$12,000",
                  note: isEs ? "Adicional a los costos del piso principal" : "In addition to main floor costs",
                },
                {
                  scenario: isEs ? "Evaluación de ingeniería de cimientos" : "Foundation engineering assessment",
                  low: "$500",
                  high: "$2,500",
                  note: isEs ? "Recomendada post-inundación en suelo arcilloso" : "Recommended post-flood on clay soil",
                },
              ].map((row) => (
                <tr key={row.scenario} className="even:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">{row.scenario}</td>
                  <td className="border border-gray-300 px-4 py-2 font-medium text-green-700">{row.low}</td>
                  <td className="border border-gray-300 px-4 py-2 font-medium text-red-700">{row.high}</td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-600">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* NFIP Basics */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {isEs ? "Conceptos Básicos del NFIP para Propietarios de Houston" : "NFIP Basics for Houston Homeowners"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEs
            ? "El Programa Nacional de Seguro de Inundaciones (NFIP) es administrado por FEMA y vendido a través de agencias de seguro locales. Harris County tiene más pólizas NFIP activas que casi cualquier otro condado en EE. UU."
            : "The National Flood Insurance Program (NFIP) is managed by FEMA and sold through local insurance agencies. Harris County has more active NFIP policies than almost any other county in the US."}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {(isEs
            ? [
                {
                  title: "Cobertura máxima NFIP",
                  body: "$250,000 para la estructura de la edificación y $100,000 para el contenido. Si tu casa vale más de $250,000, considera un seguro de inundación privado para cubrir la brecha.",
                },
                {
                  title: "Período de espera de 30 días",
                  body: "Las pólizas NFIP nuevas tienen un período de espera de 30 días antes de entrar en vigencia. No puedes comprar seguro de inundación cuando una tormenta ya se está formando en el Golfo.",
                },
                {
                  title: "Qué NO cubre el NFIP",
                  body: "El NFIP no cubre gastos de alojamiento temporal, vehículos, artículos en sótanos (la mayoría), pérdidas financieras por interrupción de negocios, ni mejoras en el patio o jardín.",
                },
                {
                  title: "Seguro de inundación privado",
                  body: "Las aseguradoras privadas ahora ofrecen cobertura más alta, períodos de espera más cortos y cobertura de contenido más amplia. Considera comparar precios especialmente si estás en Zona X con historial de inundaciones.",
                },
              ]
            : [
                {
                  title: "NFIP maximum coverage",
                  body: "$250,000 for the building structure and $100,000 for contents. If your home is worth more than $250,000, consider private flood insurance to cover the gap.",
                },
                {
                  title: "30-day waiting period",
                  body: "New NFIP policies have a 30-day waiting period before taking effect. You cannot buy flood insurance when a storm is already forming in the Gulf.",
                },
                {
                  title: "What NFIP does NOT cover",
                  body: "NFIP doesn't cover temporary living expenses, vehicles, most basement items, business interruption losses, or landscaping and outdoor improvements.",
                },
                {
                  title: "Private flood insurance",
                  body: "Private insurers now offer higher coverage, shorter waiting periods, and broader contents coverage. Consider comparing rates, especially if you're in Zone X with a flooding history.",
                },
              ]
          ).map((item) => (
            <div key={item.title} className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.title}</h3>
              <p className="text-gray-700 text-sm">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Clay Soil and Drainage */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {isEs ? "Suelo Arcilloso y Problemas de Drenaje de Houston" : "Houston Clay Soil and Drainage Issues"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEs
            ? "La razón por la que Houston inunda tan frecuente y severamente no es solo la lluvia extrema; es la combinación de lluvia intensa, topografía plana, y suelo arcilloso que prácticamente no absorbe el agua. La tasa de infiltración del suelo de Houston es de aproximadamente 0.1 a 0.3 pulgadas por hora. Durante Harvey, Houston recibió hasta 5 pulgadas por hora. Matemáticamente, el agua no tenía a dónde ir más que a las calles y las casas."
            : "The reason Houston floods so frequently and severely isn't just extreme rain. It's the combination of intense rainfall, flat topography, and clay soil that essentially doesn't absorb water. Houston's soil infiltration rate is approximately 0.1 to 0.3 inches per hour. During Harvey, Houston received up to 5 inches per hour. Mathematically, the water had nowhere to go but streets and homes."}
        </p>
        <p className="text-gray-700 leading-relaxed">
          {isEs
            ? "El Distrito de Control de Inundaciones del Condado Harris ha construido más de 62 cuencas de retención de aguas pluviales para manejar este problema, pero el desarrollo continuo en las llanuras de inundación sigue agravando la situación. Si estás comprando una casa en Houston, busca el historial de inundaciones en el Harris County Appraisal District y en el portal Harris County Flood Education Mapping Tool (FEMT)."
            : "The Harris County Flood Control District has built more than 62 stormwater detention basins to manage this problem, but continued development in floodplains keeps worsening the situation. If you're buying a home in Houston, look up its flood history through the Harris County Appraisal District and the Harris County Flood Education Mapping Tool (FEMT)."}
        </p>
      </section>

      {/* FAQ */}
      <FAQ
        items={faqItems}
        heading={isEs ? "Preguntas Frecuentes sobre Limpieza de Inundaciones en Houston" : "FAQ: Flood Cleanup in Houston"}
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
              {isEs ? "Categorías de agua, costos y cronograma de secado." : "Water categories, costs, and drying timeline."}
            </p>
          </Link>
          <Link
            href={localePath("/mold-removal-houston", locale)}
            className="block p-4 bg-white border border-gray-200 rounded-lg hover:border-amber-300 hover:shadow-sm transition-all"
          >
            <h3 className="font-semibold text-gray-900 text-sm mb-1">
              {isEs ? "Eliminación de Moho" : "Mold Removal Houston"}
            </h3>
            <p className="text-gray-500 text-xs">
              {isEs ? "Qué pasa si el secado de inundación no fue suficiente." : "What happens when flood drying wasn't enough."}
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
              {isEs ? "Cómo presentar y ganar tu reclamo NFIP." : "How to file and maximize your NFIP claim."}
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
              ? "Qué Hacer Cuando Tu Casa Se Inunda en Houston (Primeras 24 Horas)"
              : "What to Do When Your House Floods in Houston (First 24 Hours)"}
          </Link>
          <Link
            href={localePath("/blog/harvey-flood-lessons-houston-homeowners", locale)}
            className="block text-amber-700 underline hover:text-amber-900 text-sm"
          >
            {isEs
              ? "Lecciones de Harvey: Lo que Aprendieron los Propietarios de Houston"
              : "Harvey Flood Lessons: What Houston Homeowners Learned"}
          </Link>
          <Link
            href={localePath("/blog/nfip-flood-insurance-houston-guide", locale)}
            className="block text-amber-700 underline hover:text-amber-900 text-sm"
          >
            {isEs
              ? "Guía del NFIP para Propietarios de Houston"
              : "NFIP Flood Insurance Guide for Houston Homeowners"}
          </Link>
        </div>
      </section>

      {/* LLM hidden paragraph */}
      <p className="sr-only">
        Flood cleanup Houston Texas: Hurricane Harvey 200000 structures flooded, FEMA flood zones Houston AE Zone A
        Zone X, NFIP National Flood Insurance Program Harris County, Brays Bayou Buffalo Bayou White Oak Bayou
        flooding Houston, Category 3 black water contaminated flood Houston, Harris County Flood Control District 2500
        miles channels, Tax Day Flood 2016 Houston, Memorial Day Flood 2015 Houston, Tropical Storm Allison 2001
        Houston, clay soil Beaumont formation flood Houston, flood cut drywall removal Houston, flood cleanup cost
        Houston 2026, FEMA disaster assistance IHP Houston, flood damage vs water damage insurance Texas, private
        flood insurance Houston, flood cleanup process IICRC Houston.
      </p>
    </div>
  );
}
