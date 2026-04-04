export const costEstimatorDict = {
  en: {
    title: "Water Damage Restoration Cost Estimator",
    subtitle:
      "Answer a few questions about your situation and get a personalized cost range based on Houston pricing data from 25+ industry sources.",
    areaLabel: "Affected Area (square feet)",
    areaHelp:
      "Standard bedroom: 120\u2013150 sq ft. Living room: 200\u2013350 sq ft. First floor: 800\u20131,500 sq ft. Measure length \u00d7 width of the wet area.",
    waterLabel: "Water Source Type",
    waterHelp:
      "This is the single biggest cost driver. Contaminated water requires removal of everything it touched.",
    waterOptions: [
      {
        value: "clean",
        label: "Clean Water (Category 1)",
        desc: "Broken supply line, water heater, appliance overflow, rain leak",
      },
      {
        value: "gray",
        label: "Gray Water (Category 2)",
        desc: "Washing machine, dishwasher, AC condensate, toilet overflow (no solids)",
      },
      {
        value: "black",
        label: "Black Water (Category 3)",
        desc: "Sewage backup, bayou flooding, storm surge, standing water 72+ hours",
      },
    ],
    timeLabel: "How Long Has the Water Been Sitting?",
    timeHelp:
      "Every hour matters. Water left beyond 24 hours begins degrading materials and can trigger mold within 24 to 48 hours in Houston's humidity.",
    timeOptions: [
      { value: "lt24", label: "Less than 24 hours" },
      { value: "24to48", label: "24 to 48 hours" },
      { value: "48to72", label: "48 to 72 hours" },
      { value: "gt72", label: "More than 72 hours" },
    ],
    floorLabel: "Primary Flooring in Affected Area",
    floorHelp:
      "Hardwood is the most expensive to replace. Carpet may be salvageable if dried within 24 hours with clean water.",
    floorOptions: [
      { value: "carpet", label: "Carpet" },
      { value: "hardwood", label: "Hardwood" },
      { value: "laminate", label: "Laminate / Vinyl" },
      { value: "tile", label: "Tile / Concrete" },
    ],
    moldLabel: "Do You See or Smell Mold?",
    moldHelp:
      "Musty odor, visible dark spots, or fuzzy growth on walls/baseboards. Mold remediation adds $10\u2013$30 per square foot to the total.",
    moldYes: "Yes, mold is visible or I smell it",
    moldNo: "No signs of mold",
    moldUnsure: "Not sure",
    emergencyLabel: "Is This an After-Hours or Weekend Call?",
    emergencyHelp:
      "Emergency calls outside business hours typically add 25\u201350% to labor costs. Hurricane season may see additional surge pricing.",
    emergencyYes: "Yes, evenings/weekends/holidays",
    emergencyNo: "No, during business hours",
    structuralLabel: "Does Drywall or Ceiling Need Replacing?",
    structuralHelp:
      "If drywall is soft, sagging, or crumbling, or if the ceiling shows water stains and is bowing, it needs replacement. Average: $2\u2013$3.50 per sq ft for drywall, $45\u2013$55 per sq ft for ceilings.",
    structuralOptions: [
      { value: "none", label: "No structural damage" },
      { value: "drywall", label: "Drywall needs replacing" },
      { value: "ceiling", label: "Ceiling needs repair" },
      { value: "both", label: "Both drywall and ceiling" },
    ],
    resultTitle: "Your Estimated Cost Range",
    resultDisclaimer:
      "This estimate is based on published pricing data from 25+ sources including Angi, HomeAdvisor, Xactimate line items, and Houston restoration companies. Actual costs may vary, especially during hurricane season when demand spikes. Always get 2\u20133 written estimates before committing.",
    breakdownTitle: "Cost Breakdown",
    extractionDrying: "Water extraction + drying",
    equipmentRental: "Equipment rental",
    flooringRepair: "Flooring repair/replacement",
    moldRemediation: "Mold remediation",
    structuralRepair: "Structural repairs",
    emergencySurcharge: "Emergency surcharge",
    total: "Estimated Total",
    lowLabel: "Low",
    highLabel: "High",
    tipsTitle: "Key Factors Affecting Your Cost",
    calculateBtn: "Calculate Estimate",
    resetBtn: "Reset",
    ctaText:
      "Get multiple quotes from licensed, IICRC-certified restoration companies. Compare estimates carefully before committing to any contractor.",
    ctaButton: "Learn How to Choose a Contractor",
    source: "Based on data from Angi, HomeAdvisor, HomeGuide, RSI Companies, Xactimate, and 20+ other industry sources (2025\u20132026).",
  },
  es: {
    title: "Estimador de Costos de Restauraci\u00f3n por Da\u00f1o de Agua",
    subtitle:
      "Responda algunas preguntas sobre su situaci\u00f3n y obtenga un rango de costos personalizado basado en datos de precios de Houston de m\u00e1s de 25 fuentes de la industria.",
    areaLabel: "\u00c1rea Afectada (pies cuadrados)",
    areaHelp:
      "Dormitorio est\u00e1ndar: 120\u2013150 pies\u00b2. Sala: 200\u2013350 pies\u00b2. Primer piso: 800\u20131,500 pies\u00b2. Mida largo \u00d7 ancho del \u00e1rea mojada.",
    waterLabel: "Tipo de Fuente de Agua",
    waterHelp:
      "Este es el factor de costo m\u00e1s importante. El agua contaminada requiere la remoci\u00f3n de todo lo que toc\u00f3.",
    waterOptions: [
      {
        value: "clean",
        label: "Agua Limpia (Categor\u00eda 1)",
        desc: "L\u00ednea de suministro rota, calentador de agua, desbordamiento de electrodom\u00e9stico, filtraci\u00f3n de lluvia",
      },
      {
        value: "gray",
        label: "Agua Gris (Categor\u00eda 2)",
        desc: "Lavadora, lavavajillas, condensado del AC, desbordamiento del inodoro (sin s\u00f3lidos)",
      },
      {
        value: "black",
        label: "Agua Negra (Categor\u00eda 3)",
        desc: "Respaldo de alcantarilla, inundaci\u00f3n de bayou, marejada ciclonica, agua estancada 72+ horas",
      },
    ],
    timeLabel: "\u00bfCu\u00e1nto Tiempo Ha Estado el Agua?",
    timeHelp:
      "Cada hora cuenta. El agua que permanece m\u00e1s de 24 horas comienza a degradar los materiales y puede generar moho en 24 a 48 horas en la humedad de Houston.",
    timeOptions: [
      { value: "lt24", label: "Menos de 24 horas" },
      { value: "24to48", label: "24 a 48 horas" },
      { value: "48to72", label: "48 a 72 horas" },
      { value: "gt72", label: "M\u00e1s de 72 horas" },
    ],
    floorLabel: "Piso Principal en el \u00c1rea Afectada",
    floorHelp:
      "La madera es la m\u00e1s cara de reemplazar. La alfombra puede ser salvable si se seca dentro de las 24 horas con agua limpia.",
    floorOptions: [
      { value: "carpet", label: "Alfombra" },
      { value: "hardwood", label: "Madera" },
      { value: "laminate", label: "Laminado / Vinilo" },
      { value: "tile", label: "Cer\u00e1mica / Concreto" },
    ],
    moldLabel: "\u00bfVe o Huele Moho?",
    moldHelp:
      "Olor a humedad, manchas oscuras visibles o crecimiento difuso en paredes/z\u00f3calos. La remediaci\u00f3n de moho agrega $10\u2013$30 por pie cuadrado al total.",
    moldYes: "S\u00ed, el moho es visible o lo huelo",
    moldNo: "No hay se\u00f1ales de moho",
    moldUnsure: "No estoy seguro/a",
    emergencyLabel: "\u00bfEs una Llamada Fuera de Horario o Fin de Semana?",
    emergencyHelp:
      "Las llamadas de emergencia fuera del horario laboral normalmente agregan un 25\u201350% a los costos de mano de obra. La temporada de huracanes puede ver sobreprecios adicionales.",
    emergencyYes: "S\u00ed, noches/fines de semana/feriados",
    emergencyNo: "No, durante horario laboral",
    structuralLabel: "\u00bfSe Necesita Reemplazar Panel de Yeso o Techo?",
    structuralHelp:
      "Si el panel de yeso est\u00e1 blando, hundido o desmoron\u00e1ndose, o si el techo muestra manchas de agua y se est\u00e1 combando, necesita reemplazo. Promedio: $2\u2013$3.50 por pie\u00b2 para panel de yeso, $45\u2013$55 por pie\u00b2 para techos.",
    structuralOptions: [
      { value: "none", label: "Sin da\u00f1o estructural" },
      { value: "drywall", label: "Panel de yeso necesita reemplazo" },
      { value: "ceiling", label: "Techo necesita reparaci\u00f3n" },
      { value: "both", label: "Ambos: panel de yeso y techo" },
    ],
    resultTitle: "Su Rango de Costo Estimado",
    resultDisclaimer:
      "Esta estimaci\u00f3n se basa en datos de precios publicados de m\u00e1s de 25 fuentes, incluyendo Angi, HomeAdvisor, tarifas Xactimate y empresas de restauraci\u00f3n de Houston. Los costos reales pueden variar, especialmente durante la temporada de huracanes cuando la demanda aumenta. Siempre obtenga 2\u20133 presupuestos escritos antes de comprometerse.",
    breakdownTitle: "Desglose de Costos",
    extractionDrying: "Extracci\u00f3n de agua + secado",
    equipmentRental: "Alquiler de equipos",
    flooringRepair: "Reparaci\u00f3n/reemplazo de pisos",
    moldRemediation: "Remediaci\u00f3n de moho",
    structuralRepair: "Reparaciones estructurales",
    emergencySurcharge: "Recargo de emergencia",
    total: "Total Estimado",
    lowLabel: "M\u00ednimo",
    highLabel: "M\u00e1ximo",
    tipsTitle: "Factores Clave que Afectan Su Costo",
    calculateBtn: "Calcular Estimaci\u00f3n",
    resetBtn: "Reiniciar",
    ctaText:
      "Obtenga m\u00faltiples presupuestos de empresas de restauraci\u00f3n con licencia y certificaci\u00f3n IICRC. Compare las estimaciones cuidadosamente antes de comprometerse con alg\u00fan contratista.",
    ctaButton: "Aprenda c\u00f3mo elegir un contratista",
    source: "Basado en datos de Angi, HomeAdvisor, HomeGuide, RSI Companies, Xactimate y m\u00e1s de 20 fuentes de la industria (2025\u20132026).",
  },
} as const;

export type CostEstimatorLang = keyof typeof costEstimatorDict;
