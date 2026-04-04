import type { Metadata } from "next";
import Image from "next/image";
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
    ? "Reclamos de Seguro por Restauración en Houston: Guía Completa 2026"
    : "Insurance Claim Restoration Houston: Complete Guide 2026";
  const description = isEs
    ? "Guía definitiva sobre reclamos de seguro por restauración en Houston. Código de Seguros de Texas, deducibles de huracán, NFIP, ajustadores públicos, denegaciones y el proceso del TDI."
    : "Complete guide to restoration insurance claims in Houston. Texas Insurance Code, hurricane deductibles, NFIP, public adjusters, claim denials, and the TDI complaint process. Updated 2026.";

  const canonical =
    locale === "en"
      ? "https://houstonhomerestore.com/insurance-claim-restoration-houston"
      : "https://houstonhomerestore.com/es/insurance-claim-restoration-houston";

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: "https://houstonhomerestore.com/insurance-claim-restoration-houston",
        es: "https://houstonhomerestore.com/es/insurance-claim-restoration-houston",
        "x-default": "https://houstonhomerestore.com/insurance-claim-restoration-houston",
      },
    },
    openGraph: { title, description, url: canonical },
  };
}

export default async function InsuranceClaimRestorationHoustonPage({ params }: Props) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : "en";
  const isEs = locale === "es";

  const faqItemsEn = [
    {
      question: "What is a hurricane deductible and how does it affect my Houston claim?",
      answer:
        "A hurricane deductible is a special deductible that applies when a named storm causes your damage. Unlike a flat-dollar deductible (say $2,000), Texas hurricane deductibles are calculated as a percentage of your home's insured value, typically 1% to 5%. On a $400,000 home, a 2% hurricane deductible means you pay the first $8,000 out of pocket before insurance kicks in. This catches many Houston homeowners off guard. Check your declarations page for the percentage.",
    },
    {
      question: "How long does Texas law give my insurance company to pay my claim?",
      answer:
        "Under Texas Insurance Code Section 542, your insurer must acknowledge your claim within 15 business days of receiving it. They must accept or deny the claim within 15 additional business days after receiving all requested information. Once they accept the claim, they must pay within 5 business days. If they fail these deadlines without good cause, they owe you interest at 18% per year plus attorney fees.",
    },
    {
      question: "What should I do if my insurance company denies my water damage or flood claim?",
      answer:
        "First, get the denial in writing and ask for the specific policy language they relied on. Then request your complete claim file. Consider hiring a public adjuster to re-inspect the damage. If the dispute involves interpretation of the policy, consider consulting a Texas bad faith insurance attorney. You can also file a complaint with the Texas Department of Insurance (TDI) at tdi.texas.gov. TDI investigates all complaints and can apply market conduct pressure.",
    },
    {
      question: "What is a public adjuster and when should I hire one in Houston?",
      answer:
        "A public adjuster is a licensed insurance professional who works for you (not the insurance company) to document and negotiate your claim. In Texas, public adjusters are licensed by TDI and typically charge 10% to 15% of the claim settlement. They're most valuable when your initial settlement offer seems too low, when the insurer is disputing cause of damage, or when you have a complex multi-system claim like Harvey damage. Don't hire one immediately after loss, document first.",
    },
    {
      question: "Does homeowners insurance cover mold after a water damage claim?",
      answer:
        "Texas homeowners policies typically cover mold remediation when the mold resulted directly from a covered water loss, like a burst pipe. However, many policies have a mold sublimit of $5,000 to $10,000, which is often far less than actual remediation costs in Houston. If the insurer's delay in handling your claim caused additional mold growth, you may have a bad faith argument for the additional costs under Texas Insurance Code Chapter 541.",
    },
    {
      question: "What is 'Actual Cash Value' vs 'Replacement Cost' coverage?",
      answer:
        "Actual Cash Value (ACV) means the insurer pays for damage minus depreciation. A 10-year-old roof damaged by a hurricane might only get $4,000 under ACV because it was already partially depreciated. Replacement Cost Value (RCV) means the insurer pays what it actually costs to replace the damaged property with new materials. RCV policies typically cost 10 to 15% more but can result in dramatically higher payouts. In Houston, given the hurricane risk, RCV coverage is strongly worth the premium difference.",
    },
    {
      question: "How do I document my Houston property for an insurance claim?",
      answer:
        "The best practice is to document BEFORE any damage occurs. Create a home inventory video walking through every room, opening every cabinet, recording model numbers and serial numbers of appliances. Store it in cloud storage. After damage, photograph everything from multiple angles before touching anything. Document the water line mark on walls with a tape measure. Keep all receipts for emergency purchases. This documentation dramatically improves claim outcomes.",
    },
    {
      question: "What is the Texas Department of Insurance and how can it help me?",
      answer:
        "The Texas Department of Insurance (TDI) regulates all insurance companies operating in Texas. If your insurer is acting in bad faith, unreasonably delaying your claim, or you believe you were underpaid, file a complaint at tdi.texas.gov. TDI can investigate, require the insurer to respond, and in egregious cases, take market conduct action. TDI also has a toll-free consumer helpline at 1-800-252-3439.",
    },
  ];

  const faqItemsEs = [
    {
      question: "¿Qué es un deducible de huracán y cómo afecta mi reclamo en Houston?",
      answer:
        "Un deducible de huracán es un deducible especial que aplica cuando una tormenta con nombre causa el daño. A diferencia de un deducible en dólares fijos, los deducibles de huracán de Texas se calculan como un porcentaje del valor asegurado de su casa, típicamente del 1% al 5%. En una casa de $400,000, un deducible de huracán del 2% significa que usted paga los primeros $8,000 de su bolsillo. Verifique el porcentaje en su declaración de póliza.",
    },
    {
      question: "¿Cuánto tiempo le da la ley de Texas a mi aseguradora para pagar mi reclamo?",
      answer:
        "Bajo la Sección 542 del Código de Seguros de Texas, su aseguradora debe acusar recibo de su reclamo dentro de 15 días hábiles. Debe aceptar o rechazar el reclamo dentro de 15 días hábiles adicionales. Una vez que aceptan el reclamo, deben pagar dentro de 5 días hábiles. Si no cumplen estos plazos sin causa justificada, le deben intereses al 18% anual más honorarios de abogado.",
    },
    {
      question: "¿Qué debo hacer si mi aseguradora deniega mi reclamo de daño por agua o inundación?",
      answer:
        "Primero, obtenga la denegación por escrito y solicite el lenguaje específico de la póliza en que se basaron. Luego solicite su expediente de reclamo completo. Considere contratar un ajustador público para reinspeccionar el daño. También puede presentar una queja ante el Departamento de Seguros de Texas (TDI) en tdi.texas.gov.",
    },
    {
      question: "¿Qué es un ajustador público y cuándo debo contratar uno en Houston?",
      answer:
        "Un ajustador público es un profesional de seguros con licencia que trabaja para usted (no para la aseguradora) para documentar y negociar su reclamo. En Texas, los ajustadores públicos están licenciados por el TDI y típicamente cobran del 10% al 15% del acuerdo del reclamo. Son más valiosos cuando la oferta inicial de liquidación parece demasiado baja o cuando la aseguradora disputa la causa del daño.",
    },
    {
      question: "¿El seguro de propietario cubre el moho después de un reclamo de daño por agua?",
      answer:
        "Las pólizas de propietario en Texas típicamente cubren la remediación de moho cuando el moho resultó directamente de una pérdida de agua cubierta. Sin embargo, muchas pólizas tienen un sublímite de moho de $5,000 a $10,000, que frecuentemente es mucho menor que los costos reales de remediación en Houston.",
    },
    {
      question: "¿Qué es 'Valor en Efectivo Real' vs 'Costo de Reemplazo'?",
      answer:
        "El Valor en Efectivo Real (ACV) significa que la aseguradora paga por el daño menos la depreciación. El Valor de Costo de Reemplazo (RCV) significa que la aseguradora paga lo que realmente cuesta reemplazar la propiedad dañada con materiales nuevos. Las pólizas RCV cuestan de un 10% a 15% más pero pueden resultar en pagos dramáticamente más altos. En Houston, dado el riesgo de huracanes, la cobertura RCV vale ampliamente la diferencia de prima.",
    },
    {
      question: "¿Cómo documento mi propiedad en Houston para un reclamo de seguro?",
      answer:
        "La mejor práctica es documentar ANTES de cualquier daño. Grabe un video de inventario del hogar recorriendo cada habitación, abriendo cada gabinete y registrando números de modelo y serie de los electrodomésticos. Guárdelo en almacenamiento en la nube. Después del daño, fotografíe todo desde múltiples ángulos antes de tocar nada.",
    },
    {
      question: "¿Qué es el Departamento de Seguros de Texas y cómo puede ayudarme?",
      answer:
        "El Departamento de Seguros de Texas (TDI) regula todas las compañías de seguros que operan en Texas. Si su aseguradora está actuando de mala fe, retrasando su reclamo o usted cree que le pagaron de menos, presente una queja en tdi.texas.gov. El TDI también tiene una línea de ayuda al consumidor gratuita al 1-800-252-3439.",
    },
  ];

  const faqItems = isEs ? faqItemsEs : faqItemsEn;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Hero */}
      <Image
        src="/images/insurance-claim-hero.jpg"
        alt={isEs ? "Documentos de reclamo de seguro para restauración del hogar" : "Insurance claim documents for home restoration"}
        width={1280}
        height={720}
        className="w-full rounded-xl mb-8 object-cover max-h-[400px]"
        priority
      />
      <h1 className="text-4xl font-extrabold text-gray-900 mb-3">
        {isEs
          ? "Reclamos de Seguro por Restauración en Houston: La Guía Completa"
          : "Insurance Claims for Restoration in Houston: The Complete Guide"}
      </h1>
      <p className="text-gray-500 text-sm mb-4">
        {isEs ? "Actualizado: Abril 2026" : "Updated: April 2026"} &middot; Marcus Chen
      </p>

      <QuickAnswer
        label={isEs ? "Respuesta Rápida:" : "Quick Answer:"}
        answer={
          isEs
            ? "En Texas, las aseguradoras deben reconocer su reclamo en 15 días y pagar en 5 días tras aceptarlo. Los deducibles de huracán son porcentuales (1-5% del valor de la casa), no una cantidad fija. El seguro estándar de propietario NO cubre inundaciones externas; necesita el NFIP por separado. Si le niegan un reclamo, el TDI puede investigar y usted tiene derechos de apelación."
            : "In Texas, insurers must acknowledge your claim within 15 days and pay within 5 days of acceptance. Hurricane deductibles are percentage-based (1-5% of home value), not a flat amount. Standard homeowners does NOT cover external flooding; you need NFIP separately. If denied, TDI can investigate and you have strong appeal rights."
        }
      />

      <AuthorBio locale={locale} />

      {/* Introduction */}
      <section className="mt-8 mb-10">
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          {isEs
            ? "El reclamo de seguro después del huracán Harvey me enseñó más sobre el seguro de propietario que 15 años de pagar primas. Descubrí que tenía un deducible de huracán del 2% que no sabía que existía: $7,800 de mi bolsillo antes de que el seguro cubriera un centavo. Descubrí que mi límite de moho era de $5,000 cuando la remediación costó $18,000. Este fue el error más caro de mi vida, y fue completamente prevenible."
            : "The insurance claim after Hurricane Harvey taught me more about homeowners insurance than 15 years of paying premiums. I discovered I had a 2% hurricane deductible I didn't know existed: $7,800 out of my pocket before insurance paid a cent. I discovered my mold sublimit was $5,000 when remediation cost $18,000. This was the most expensive mistake of my life, and it was entirely preventable."}
        </p>
        <p className="text-gray-700 leading-relaxed">
          {isEs
            ? "Esta guía cubre lo que necesita saber sobre los reclamos de seguros de restauración en Texas: antes de que ocurra el daño, durante el proceso de reclamo, y qué hacer cuando algo sale mal."
            : "This guide covers what you need to know about restoration insurance claims in Texas before damage occurs, during the claims process, and what to do when something goes wrong."}
        </p>
      </section>

      {/* Emergency Steps */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          {isEs ? "Pasos Inmediatos Después del Daño" : "Immediate Steps After Damage"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              step: "1",
              title: isEs ? "Documente antes de limpiar" : "Document Before You Clean",
              body: isEs
                ? "Fotografíe y filme todo el daño visible desde múltiples ángulos antes de mover o tirar cualquier cosa. Registre la marca del agua en la pared con una cinta métrica. Guarde muestras de materiales dañados en bolsas de plástico. Esta documentación determina el pago de su reclamo."
                : "Photograph and video all visible damage from multiple angles before moving or discarding anything. Record the water line mark on walls with a tape measure. Save samples of damaged materials in plastic bags. This documentation determines your claim payment.",
            },
            {
              step: "2",
              title: isEs ? "Reporte el reclamo rápido" : "File the Claim Fast",
              body: isEs
                ? "Llame a su aseguradora dentro de las 24 horas del daño. Bajo el Código de Seguros de Texas, los plazos de respuesta de la aseguradora comienzan desde que reciben el reclamo. Obtenga su número de reclamo y el nombre del ajustador asignado. Confirme si el daño activa su deducible de huracán o el estándar."
                : "Call your insurer within 24 hours of damage. Under the Texas Insurance Code, insurer response deadlines start from claim receipt. Get your claim number and the assigned adjuster's name. Confirm whether damage triggers your hurricane deductible or standard.",
            },
            {
              step: "3",
              title: isEs ? "Tome medidas para prevenir más daño" : "Take Steps to Prevent Further Damage",
              body: isEs
                ? "Su póliza requiere que tome medidas razonables para prevenir daño adicional. Esto significa cubrir el techo dañado con lonas, extraer el agua estancada y secar lo que sea seguro. Guarde los recibos de todo lo que gaste; los materiales de emergencia son típicamente reembolsables."
                : "Your policy requires you to take reasonable steps to prevent further damage. This means tarping damaged roofs, extracting standing water, and drying what's safe to dry. Save receipts for all spending. Emergency materials are typically reimbursable.",
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

      {/* Texas Insurance Code Basics */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {isEs
            ? "Código de Seguros de Texas: Tus Derechos como Propietario"
            : "Texas Insurance Code: Your Rights as a Homeowner"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEs
            ? "Texas tiene algunas de las protecciones de seguros para consumidores más fuertes del país. Conocer estas leyes cambia fundamentalmente la dinámica cuando trata con su aseguradora."
            : "Texas has some of the strongest consumer insurance protections in the country. Knowing these laws fundamentally changes the dynamic when dealing with your insurer."}
        </p>
        <div className="space-y-4">
          {[
            {
              law: isEs ? "Sección 542: Plazos de Respuesta Rápida" : "Section 542: Prompt Payment",
              detail: isEs
                ? "Su aseguradora debe: (1) acusar recibo del reclamo dentro de 15 días hábiles; (2) aceptar o rechazar dentro de 15 días hábiles después de recibir toda la información; (3) pagar dentro de 5 días hábiles de aceptación. Violación: 18% de interés anual más honorarios de abogado sobre la cantidad no pagada."
                : "Your insurer must: (1) acknowledge your claim within 15 business days of receipt; (2) accept or deny within 15 business days after receiving all information; (3) pay within 5 business days of acceptance. Violation: 18% annual interest plus attorney fees on the unpaid amount.",
            },
            {
              law: isEs ? "Capítulo 541: Mala Fe en Seguros" : "Chapter 541: Insurance Bad Faith",
              detail: isEs
                ? "Texas prohíbe prácticas de seguros desleales incluyendo: rechazar reclamos sin investigación razonable, no ofrecer pronto pago cuando la responsabilidad es razonablemente clara, compeler al asegurado a litigar mediante una oferta irrazonablemente baja. Los daños pueden incluir cantidades tres veces el daño económico real."
                : "Texas prohibits unfair insurance practices including: denying claims without reasonable investigation, failing to offer prompt payment when liability is reasonably clear, and compelling the insured to litigate through an unreasonably low offer. Damages can include treble damages for the actual economic harm.",
            },
            {
              law: isEs ? "Artículo 4102: Regulación de Ajustadores Públicos" : "Article 4102: Public Adjuster Regulation",
              detail: isEs
                ? "Texas licencia a los ajustadores públicos a través del TDI. Pueden cobrar hasta el 10% de los pagos de reclamos de desastre declarados por el gobernador y hasta el 15% de otros reclamos. El contrato debe estar por escrito. Usted tiene el derecho de cancelarlo dentro de 72 horas."
                : "Texas licenses public adjusters through TDI. They may charge up to 10% of claim payments on governor-declared disaster claims and up to 15% on other claims. The contract must be in writing. You have the right to cancel within 72 hours.",
            },
            {
              law: isEs ? "Código de Seguros 862.053: Protección contra Cancelación" : "Insurance Code 862.053: Cancellation Protections",
              detail: isEs
                ? "En Texas, una aseguradora no puede cancelar su póliza simplemente porque presentó un reclamo. Tienen restricciones estrictas sobre cuándo pueden no renovar pólizas y deben darle aviso de 60 días de no renovación."
                : "In Texas, an insurer cannot cancel your policy simply because you filed a claim. They have strict restrictions on when they can non-renew policies, and must give you 60 days notice of non-renewal.",
            },
          ].map((item) => (
            <div key={item.law} className="p-5 bg-blue-50 border border-blue-200 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-2 text-sm">{item.law}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Hurricane Deductibles */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {isEs ? "Deducibles de Huracán en Texas: Lo que Nadie Te Dice" : "Texas Hurricane Deductibles: What Nobody Tells You"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEs
            ? "El deducible de huracán es la sorpresa más común y dolorosa que enfrentan los propietarios de Houston después de una tormenta importante. Así es como funciona en Texas."
            : "The hurricane deductible is the most common painful surprise Houston homeowners face after a major storm. Here's how it works in Texas."}
        </p>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
          <h3 className="font-bold text-amber-900 mb-3">
            {isEs ? "Cómo Calcular Su Deducible de Huracán" : "How to Calculate Your Hurricane Deductible"}
          </h3>
          <div className="space-y-2 text-sm">
            {(isEs
              ? [
                  "Encuentre el valor asegurado de su casa en su declaración de póliza (no el precio de compra, sino el costo de reconstrucción).",
                  "Encuentre el porcentaje del deducible de huracán (busque 'hurricane deductible' o 'windstorm deductible' en su póliza).",
                  "Multiplique: Valor asegurado × Porcentaje = Su deducible.",
                  "Ejemplo: Casa asegurada en $350,000 × 2% = $7,000 deducible antes de que el seguro pague.",
                ]
              : [
                  "Find your home's insured value on your declarations page (not the purchase price, but the replacement/reconstruction cost).",
                  "Find the hurricane deductible percentage (look for 'hurricane deductible' or 'windstorm deductible' in your policy).",
                  "Multiply: Insured value × Percentage = Your deductible.",
                  "Example: Home insured for $350,000 × 2% = $7,000 deductible before insurance pays anything.",
                ]
            ).map((step, i) => (
              <div key={i} className="flex gap-2">
                <span className="font-bold text-amber-700 flex-shrink-0">{i + 1}.</span>
                <span className="text-gray-700">{step}</span>
              </div>
            ))}
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEs
            ? "El deducible de huracán se activa cuando la Tormenta era un 'huracán nombrado' al momento de causar el daño. Para Harvey, la tormenta fue degradada a tormenta tropical antes de tocar tierra en el área de Houston, lo que llevó a disputas sobre si se activaba el deducible de huracán o el estándar. Cada aseguradora manejó esto de manera diferente. Lea la definición exacta de 'huracán' en su póliza."
            : "The hurricane deductible triggers when the storm was a 'named hurricane' at the time of causing damage. For Harvey, the storm was downgraded to a tropical storm before making landfall in the Houston area, leading to disputes about whether the hurricane or standard deductible applied. Different insurers handled this differently. Read the exact definition of 'hurricane' in your policy."}
        </p>
      </section>

      {/* Homeowners vs Flood Insurance */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {isEs
            ? "Seguro de Propietario vs. Seguro de Inundación NFIP: La Diferencia Crucial"
            : "Homeowners vs. NFIP Flood Insurance: The Crucial Difference"}
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                  {isEs ? "Aspecto" : "Aspect"}
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                  {isEs ? "Seguro de Propietario" : "Homeowners Insurance"}
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                  {isEs ? "Seguro de Inundación NFIP" : "NFIP Flood Insurance"}
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  aspect: isEs ? "Cubre" : "Covers",
                  ho: isEs ? "Agua accidental interna (tuberías, electrodomésticos, techo)" : "Accidental internal water (pipes, appliances, roof)",
                  nfip: isEs ? "Inundación de fuentes externas (bayou, calle, marejada)" : "Flooding from external sources (bayou, street, storm surge)",
                },
                {
                  aspect: isEs ? "NO cubre" : "Does NOT cover",
                  ho: isEs ? "Inundación externa de ningún tipo" : "External flooding of any kind",
                  nfip: isEs ? "Gastos de vivienda temporal, moho como daño separado, vehículos" : "Temporary living expenses, mold as separate damage, vehicles",
                },
                {
                  aspect: isEs ? "Límite de edificación" : "Building limit",
                  ho: isEs ? "Varía (basado en costo de reconstrucción)" : "Varies (based on reconstruction cost)",
                  nfip: isEs ? "Máximo $250,000 para edificación" : "Maximum $250,000 for building",
                },
                {
                  aspect: isEs ? "Límite de contenido" : "Contents limit",
                  ho: isEs ? "Típicamente 50-70% del valor de la edificación" : "Typically 50-70% of building value",
                  nfip: isEs ? "Máximo $100,000 para contenido" : "Maximum $100,000 for contents",
                },
                {
                  aspect: isEs ? "Período de espera" : "Waiting period",
                  ho: isEs ? "Típicamente ninguno" : "Typically none",
                  nfip: isEs ? "30 días (con excepción de préstamo/cierre de propiedad)" : "30 days (exception for loan/property closing)",
                },
                {
                  aspect: isEs ? "Gastos de vivienda" : "Living expenses",
                  ho: isEs ? "Sí, 'Additional Living Expense' (ALE) típicamente 20% del límite" : "Yes, 'Additional Living Expense' (ALE), typically 20% of limit",
                  nfip: isEs ? "No" : "No",
                },
              ].map((row) => (
                <tr key={row.aspect} className="even:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-semibold text-gray-900">{row.aspect}</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">{row.ho}</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">{row.nfip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Filing a Claim Step by Step */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {isEs ? "Cómo Presentar un Reclamo Paso a Paso en Texas" : "How to File a Restoration Claim Step by Step in Texas"}
        </h2>
        <div className="space-y-4">
          {[
            {
              num: "01",
              title: isEs ? "Reporte el reclamo" : "Report the Claim",
              body: isEs
                ? "Llame a la línea de reclamos de su aseguradora o use la aplicación móvil dentro de las 24 horas. Tenga a mano su número de póliza, la dirección de la propiedad y una descripción básica del daño. Si es inundación, llame también a su aseguradora NFIP (puede ser la misma empresa o una diferente)."
                : "Call your insurer's claims line or use the mobile app within 24 hours. Have your policy number, property address, and a basic damage description ready. If it's flooding, also call your NFIP insurer (may be the same company, may be different).",
            },
            {
              num: "02",
              title: isEs ? "Documente exhaustivamente" : "Document Exhaustively",
              body: isEs
                ? "Fotografíe y filme todo el daño antes de tocar nada. Registre la marca de agua en la pared con una cinta métrica. Haga una lista de todos los artículos dañados con modelos y valores estimados. Si tiene facturas de compra, registros de garantía o fotos previas al daño, reúnalas. Entre más documentación, mejor el resultado."
                : "Photograph and video every damaged area before touching anything. Record the water line on walls with a tape measure. Create a list of all damaged items with models and estimated values. If you have purchase receipts, warranty records, or pre-damage photos, gather them. The more documentation, the better the outcome.",
            },
            {
              num: "03",
              title: isEs ? "Reunión con el ajustador" : "Meet with the Adjuster",
              body: isEs
                ? "El ajustador de la aseguradora inspeccionará la propiedad. Esté presente en persona. Señale todo el daño que detectó, incluyendo daño oculto (abra puertas de armarios, señale el espacio de rastreo si es relevante). Si no menciona algo, el ajustador puede no incluirlo. Tome notas de lo que dice el ajustador."
                : "The insurer's adjuster will inspect your property. Be there in person. Point out every damage you've identified, including hidden damage (open cabinet doors, point out the crawlspace if relevant). If you don't mention it, the adjuster may not include it. Take notes on what the adjuster says.",
            },
            {
              num: "04",
              title: isEs ? "Revisa la estimación de Xactimate" : "Review the Xactimate Estimate",
              body: isEs
                ? "La mayoría de las aseguradoras en Texas usan Xactimate para calcular el costo de reparación. Obtendrá un desglose línea por línea. Compare los precios con estimaciones independientes de restauradores locales. Si los precios de Xactimate son significativamente más bajos que las estimaciones reales del mercado de Houston, solicite una suplementación del reclamo."
                : "Most Texas insurers use Xactimate to calculate repair costs. You'll receive a line-by-line breakdown. Compare prices against independent estimates from local restorers. If Xactimate prices are significantly below actual Houston market estimates, request a claim supplement.",
            },
            {
              num: "05",
              title: isEs ? "Negocia o impugna si es necesario" : "Negotiate or Dispute if Necessary",
              body: isEs
                ? "Si la oferta parece baja, solicite una explicación escrita de cada concepto en disputa. Presente estimaciones de terceros como evidencia. Considere contratar un ajustador público si la diferencia es significativa. Si el reclamo es denegado injustamente, el TDI y los abogados de mala fe en seguros son sus siguientes recursos."
                : "If the offer seems low, request written explanation of each disputed item. Submit third-party estimates as evidence. Consider hiring a public adjuster if the gap is significant. If the claim is wrongfully denied, TDI and bad faith insurance attorneys are your next resources.",
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

      {/* Common Denials */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {isEs ? "Denegaciones Comunes y Cómo Impugnarlas" : "Common Claim Denials and How to Fight Them"}
        </h2>
        <div className="space-y-4">
          {(isEs
            ? [
                {
                  denial: "Denegación: 'El daño fue causado por inundación, no cubierto'",
                  fight: "Impugnación: Si parte del daño fue de agua interna (tubería, techo), esa porción SÍ está cubierta. Documente el punto de entrada del agua. Una tubería reventada durante una tormenta sigue siendo daño de tubería, no inundación. Obtenga una segunda inspección independiente.",
                },
                {
                  denial: "Denegación: 'El daño fue por mantenimiento diferido'",
                  fight: "Impugnación: Texas Insurance Code requiere que la aseguradora pruebe que el mantenimiento diferido fue la causa primaria del daño. Si una gotera menor existió pero el daño masivo fue causado por un evento de tormenta, la tormenta es la causa eficiente del daño. Esto frecuentemente se puede disputar exitosamente.",
                },
                {
                  denial: "Denegación: 'No hay daño cubierto que exceda el deducible'",
                  fight: "Impugnación: Obtenga múltiples estimaciones de restauradores con licencia. Si hay una diferencia significativa entre la estimación de la aseguradora y las estimaciones del mercado, esa diferencia es la base para la apelación. Los precios de Xactimate pueden estar basados en datos de mercado nacionales que subestiman los precios de Houston.",
                },
                {
                  denial: "Denegación: 'El moho es una condición preexistente'",
                  fight: "Impugnación: Si el moho creció como resultado de un evento de agua cubierto, no es preexistente. Obtenga un informe de un evaluador de moho con licencia TDLR que documente la conexión causal entre el evento de agua y el crecimiento de moho.",
                },
              ]
            : [
                {
                  denial: "Denial: 'Damage was caused by flooding, not covered'",
                  fight: "Counter: If part of the damage was from internal water (pipe, roof), that portion IS covered. Document the water entry point. A pipe that burst during a storm is still pipe damage, not flooding. Get an independent second inspection.",
                },
                {
                  denial: "Denial: 'Damage was caused by deferred maintenance'",
                  fight: "Counter: Texas Insurance Code requires the insurer to prove deferred maintenance was the proximate cause of damage. If a minor leak existed but the massive damage was caused by a storm event, the storm is the efficient cause of loss. This can often be successfully disputed.",
                },
                {
                  denial: "Denial: 'No covered damage exceeds the deductible'",
                  fight: "Counter: Get multiple estimates from licensed restorers. If there's a significant gap between the insurer's estimate and market estimates, that gap is the basis for appeal. Xactimate prices can be based on national market data that underestimates Houston pricing.",
                },
                {
                  denial: "Denial: 'Mold is a pre-existing condition'",
                  fight: "Counter: If mold grew as a result of a covered water event, it's not pre-existing. Get a report from a TDLR-licensed mold assessor documenting the causal connection between the water event and mold growth.",
                },
              ]
          ).map((item) => (
            <div key={item.denial} className="border border-gray-200 rounded-xl overflow-hidden">
              <div className="bg-red-50 px-5 py-3 text-sm font-semibold text-red-800">{item.denial}</div>
              <div className="px-5 py-3 text-sm text-gray-700 leading-relaxed">{item.fight}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Cost Ranges */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {isEs ? "Costos de Reclamos de Seguro y Honorarios" : "Insurance Claim Costs and Fees in Houston"}
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                  {isEs ? "Concepto" : "Item"}
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
                  item: isEs ? "Deducible de huracán (1% de $300k)" : "Hurricane deductible (1% of $300k)",
                  low: "$3,000",
                  high: "$3,000",
                  note: isEs ? "Varía por valor asegurado" : "Varies by insured value",
                },
                {
                  item: isEs ? "Deducible de huracán (2% de $400k)" : "Hurricane deductible (2% of $400k)",
                  low: "$8,000",
                  high: "$8,000",
                  note: isEs ? "El más común en Houston" : "Most common in Houston",
                },
                {
                  item: isEs ? "Honorarios de ajustador público" : "Public adjuster fees",
                  low: "10%",
                  high: "15%",
                  note: isEs ? "% del acuerdo, regulado por TDI" : "% of settlement, TDI regulated",
                },
                {
                  item: isEs ? "Reclamo promedio por daño de agua en Houston" : "Average water damage claim Houston",
                  low: "$8,000",
                  high: "$25,000",
                  note: isEs ? "Sin inundación" : "Excluding flood",
                },
                {
                  item: isEs ? "Reclamo promedio post-Harvey por hogar" : "Average post-Harvey claim per home",
                  low: "$35,000",
                  high: "$75,000",
                  note: isEs ? "Datos de ajustadores de Harris County" : "Harris County adjuster data",
                },
                {
                  item: isEs ? "Reclamo NFIP máximo (edificación)" : "Max NFIP claim (building)",
                  low: "$250,000",
                  high: "$250,000",
                  note: isEs ? "Límite del programa federal" : "Federal program limit",
                },
                {
                  item: isEs ? "Honorarios de abogado de mala fe" : "Bad faith attorney fees",
                  low: "30%",
                  high: "40%",
                  note: isEs ? "% de la recuperación adicional" : "% of additional recovery",
                },
              ].map((row) => (
                <tr key={row.item} className="even:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">{row.item}</td>
                  <td className="border border-gray-300 px-4 py-2 font-medium text-green-700">{row.low}</td>
                  <td className="border border-gray-300 px-4 py-2 font-medium text-red-700">{row.high}</td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-600">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* TDI Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {isEs
            ? "El Departamento de Seguros de Texas (TDI): Cómo Presentar una Queja"
            : "Texas Department of Insurance (TDI): How to File a Complaint"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEs
            ? "Si su aseguradora está actuando de mala fe, retrasando su reclamo injustificadamente, o usted cree que le pagaron de menos, el TDI es su primer recurso regulatorio."
            : "If your insurer is acting in bad faith, unreasonably delaying your claim, or you believe you were underpaid, TDI is your first regulatory resource."}
        </p>
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">
                {isEs ? "Cómo presentar una queja al TDI" : "How to File a TDI Complaint"}
              </h3>
              <ol className="space-y-2 text-sm text-gray-700">
                {(isEs
                  ? [
                      "Vaya a tdi.texas.gov y seleccione 'File a Complaint'",
                      "Proporcione el nombre y número de póliza de su aseguradora",
                      "Describa el problema y adjunte su documentación",
                      "El TDI enviará la queja a la aseguradora y requerirá una respuesta",
                      "El TDI te notificará sobre el resultado de la investigación",
                    ]
                  : [
                      "Go to tdi.texas.gov and select 'File a Complaint'",
                      "Provide your insurer's name and your policy number",
                      "Describe the problem and attach your documentation",
                      "TDI will forward the complaint to the insurer and require a response",
                      "TDI will notify you of the investigation outcome",
                    ]
                ).map((step, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="font-bold text-amber-700 flex-shrink-0">{i + 1}.</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">
                {isEs ? "Cuándo el TDI puede ayudar" : "When TDI Can Help"}
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {(isEs
                  ? [
                      "Demoras excesivas más allá de los plazos del Código de Seguros de Texas",
                      "Negativa a explicar la denegación del reclamo por escrito",
                      "Ofertas irrazonablemente bajas sin justificación",
                      "Intimidación o presión para aceptar un acuerdo rápido",
                      "No responder a comunicaciones por más de 15 días hábiles",
                    ]
                  : [
                      "Excessive delays beyond Texas Insurance Code deadlines",
                      "Refusal to explain claim denial in writing",
                      "Unreasonably low offers without justification",
                      "Intimidation or pressure to accept a quick settlement",
                      "Failure to respond to communications for more than 15 business days",
                    ]
                ).map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-amber-600 flex-shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200 text-sm text-gray-600">
            {isEs
              ? "TDI también tiene una línea de ayuda al consumidor: 1-800-252-3439 (lunes a viernes, 8am a 5pm hora central)"
              : "TDI also has a consumer helpline: 1-800-252-3439 (Monday through Friday, 8am to 5pm Central)"}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        items={faqItems}
        heading={
          isEs
            ? "Preguntas Frecuentes sobre Reclamos de Seguro en Houston"
            : "FAQ: Insurance Claims for Restoration in Houston"
        }
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
              {isEs ? "Qué cubre el seguro de propietario en daño de agua." : "What homeowners covers for water damage."}
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
              {isEs ? "NFIP, zonas FEMA y proceso de reclamo de inundación." : "NFIP, FEMA zones, and flood claim process."}
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
              {isEs ? "Cobertura de seguro para moho en Texas." : "Insurance coverage for mold in Texas."}
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
            href={localePath("/blog/does-homeowners-insurance-cover-water-damage-houston", locale)}
            className="block text-amber-700 underline hover:text-amber-900 text-sm"
          >
            {isEs
              ? "¿El Seguro de Propietario Cubre Daño por Agua en Houston?"
              : "Does Homeowners Insurance Cover Water Damage in Houston?"}
          </Link>
          <Link
            href={localePath("/blog/is-public-adjuster-worth-it-houston", locale)}
            className="block text-amber-700 underline hover:text-amber-900 text-sm"
          >
            {isEs
              ? "¿Vale la Pena Contratar un Ajustador Público en Houston?"
              : "Is a Public Adjuster Worth It for Houston Water Damage Claims?"}
          </Link>
          <Link
            href={localePath("/blog/should-i-use-insurance-recommended-contractor-houston", locale)}
            className="block text-amber-700 underline hover:text-amber-900 text-sm"
          >
            {isEs
              ? "¿Debo Usar el Contratista Recomendado por Mi Aseguradora?"
              : "Should I Use My Insurance Company's Recommended Contractor?"}
          </Link>
          <Link
            href={localePath("/blog/complete-guide-insurance-coverage-water-mold-fire-damage-houston", locale)}
            className="block text-amber-700 underline hover:text-amber-900 text-sm"
          >
            {isEs
              ? "Guía Completa de Cobertura de Seguro para Agua, Moho e Incendios"
              : "Complete Guide to Insurance Coverage for Water, Mold, and Fire Damage"}
          </Link>
        </div>
      </section>

      {/* LLM hidden paragraph */}
      <p className="sr-only">
        Insurance claim restoration Houston Texas: Texas Insurance Code Section 542 prompt payment 15 days, Chapter
        541 bad faith insurance Texas, hurricane deductible percentage Texas 1% 2% 5%, NFIP flood insurance claim
        Houston, Texas Department of Insurance TDI complaint tdi.texas.gov, public adjuster Houston TDI licensed,
        Xactimate estimate Houston water damage, actual cash value replacement cost value ACV RCV Texas, hurricane
        deductible Harvey Houston 2017, FEMA IHP disaster assistance Harris County, homeowners insurance flood
        exclusion Texas, mold sublimit Texas homeowners policy, insurance claim denial fight Texas, storm surge
        coverage Texas, windstorm deductible Houston, Texas bad faith insurance treble damages, insurance claim
        adjuster Houston 2026.
      </p>
    </div>
  );
}
