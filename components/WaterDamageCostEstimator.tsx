"use client";

import { useState, useMemo } from "react";
import { costEstimatorDict } from "@/data/cost-estimator-dict";

type Lang = "en" | "es";
const dict = costEstimatorDict;

/** Per-sq-ft rate for extraction + drying by water category */
const CATEGORY_RATE: Record<string, [number, number]> = {
  clean: [3.75, 4.5],
  gray: [4.5, 7.0],
  black: [7.0, 9.5],
};

/** Time standing multiplier (captures class escalation) */
const TIME_MULTIPLIER: Record<string, [number, number]> = {
  lt24: [1.0, 1.0],
  "24to48": [1.15, 1.2],
  "48to72": [1.3, 1.4],
  gt72: [1.5, 1.8],
};

/** Equipment rental: daily rate x estimated drying days */
const EQUIPMENT_COST: Record<string, [number, number]> = {
  lt24: [450, 800],
  "24to48": [600, 1200],
  "48to72": [800, 1600],
  gt72: [1000, 2000],
};

/** Flooring replacement per sq ft */
const FLOOR_RATE: Record<string, [number, number]> = {
  carpet: [2.0, 5.0],
  hardwood: [6.0, 12.0],
  laminate: [3.0, 6.0],
  tile: [1.5, 3.0],
};

/** Mold remediation per sq ft (applied to ~35% of area) */
const MOLD_RATE: [number, number] = [10, 25];
const MOLD_AREA_FRACTION = 0.35;

/** Structural repair flat ranges */
const STRUCTURAL_COST: Record<string, [number, number]> = {
  none: [0, 0],
  drywall: [300, 1500],
  ceiling: [500, 2500],
  both: [800, 3500],
};

/** Emergency surcharge multiplier */
const EMERGENCY_MULT: [number, number] = [1.25, 1.4];

function getTips(
  inputs: {
    water: string;
    time: string;
    mold: string;
    emergency: string;
    structural: string;
    sqft: number;
  },
  lang: Lang
): string[] {
  const tips: string[] = [];
  const isEs = lang === "es";

  if (inputs.time === "lt24") {
    tips.push(
      isEs
        ? "Actuar en menos de 24 horas reduce costos hasta un 30%. La respuesta rápida es su mejor ahorro."
        : "Acting within 24 hours reduces costs by up to 30%. Fast response is your single biggest savings."
    );
  }
  if (inputs.time === "gt72" || inputs.time === "48to72") {
    tips.push(
      isEs
        ? "El agua estancada más de 48 horas frecuentemente degrada a Categoría 2 o 3, incluso si empezó como agua limpia. Esto puede duplicar los costos."
        : "Water standing over 48 hours frequently degrades to Category 2 or 3, even if it started as clean water. This can double costs."
    );
  }
  if (inputs.water === "black") {
    tips.push(
      isEs
        ? "El agua negra (Categoría 3) requiere remoción completa de todos los materiales que tocó. Nada es recuperable."
        : "Black water (Category 3) requires complete removal of all materials it touched. Nothing is salvageable."
    );
  }
  if (inputs.mold === "yes" || (inputs.mold === "unsure" && inputs.time !== "lt24")) {
    tips.push(
      isEs
        ? "La remediación de moho agrega $10–$30 por pie cuadrado. La inspección profesional de moho ($200–$600) puede confirmar la extensión antes de la restauración."
        : "Mold remediation adds $10–$30 per square foot. Professional mold inspection ($200–$600) can confirm the extent before restoration begins."
    );
  }
  if (inputs.sqft > 500) {
    tips.push(
      isEs
        ? "Áreas mayores a 500 pies² generalmente requieren múltiples equipos de secado funcionando simultáneamente, lo que aumenta el costo diario de equipos."
        : "Areas over 500 sq ft typically require multiple drying units running simultaneously, which increases daily equipment costs."
    );
  }
  tips.push(
    isEs
      ? "Los propietarios que obtienen 3 presupuestos ahorran un promedio de 15–25% en su factura total de restauración (HomeAdvisor, 2026)."
      : "Homeowners who get 3 quotes save an average of 15–25% on their total restoration bill (HomeAdvisor, 2026)."
  );
  tips.push(
    isEs
      ? "El seguro estándar de propietarios cubre daños repentinos y accidentales, pero NO fugas graduales ni inundaciones exteriores. En Houston, el seguro contra inundaciones es frecuentemente obligatorio."
      : "Standard homeowner insurance covers sudden and accidental damage, but NOT gradual leaks or outside flooding. In Houston, flood insurance is frequently required."
  );
  return tips;
}

interface Props {
  locale?: string;
}

export default function WaterDamageCostEstimator({ locale = "en" }: Props) {
  const lang: Lang = locale === "es" ? "es" : "en";
  const t = dict[lang];

  const [sqft, setSqft] = useState(200);
  const [water, setWater] = useState("clean");
  const [time, setTime] = useState("lt24");
  const [floor, setFloor] = useState("carpet");
  const [mold, setMold] = useState("no");
  const [emergency, setEmergency] = useState("no");
  const [structural, setStructural] = useState("none");
  const [calculated, setCalculated] = useState(false);

  const result = useMemo(() => {
    const area = Math.max(50, Math.min(5000, sqft));

    const [catLo, catHi] = CATEGORY_RATE[water];
    const [timeLo, timeHi] = TIME_MULTIPLIER[time];
    const extractLow = area * catLo * timeLo;
    const extractHigh = area * catHi * timeHi;

    const [eqLo, eqHi] = EQUIPMENT_COST[time];
    const eqScale = area > 300 ? 1 + (area - 300) / 1000 : 1;
    const equipLow = Math.round(eqLo * eqScale);
    const equipHigh = Math.round(eqHi * eqScale);

    const [flLo, flHi] = FLOOR_RATE[floor];
    const floorSalvage =
      water === "clean" && time === "lt24" && (floor === "carpet" || floor === "tile")
        ? 0.3
        : 1.0;
    const floorLow = Math.round(area * flLo * floorSalvage);
    const floorHigh = Math.round(area * flHi * floorSalvage);

    let moldLow = 0;
    let moldHigh = 0;
    if (mold === "yes") {
      moldLow = Math.round(area * MOLD_AREA_FRACTION * MOLD_RATE[0]);
      moldHigh = Math.round(area * MOLD_AREA_FRACTION * MOLD_RATE[1]);
    } else if (mold === "unsure" && time !== "lt24") {
      moldLow = Math.round(area * 0.15 * MOLD_RATE[0]);
      moldHigh = Math.round(area * 0.25 * MOLD_RATE[1]);
    }

    const [strLo, strHi] = STRUCTURAL_COST[structural];
    const strScale = structural !== "none" ? Math.max(1, area / 200) : 1;
    const structLow = Math.round(strLo * Math.min(strScale, 3));
    const structHigh = Math.round(strHi * Math.min(strScale, 3));

    const subLow = extractLow + equipLow + floorLow + moldLow + structLow;
    const subHigh = extractHigh + equipHigh + floorHigh + moldHigh + structHigh;

    let emergLow = 0;
    let emergHigh = 0;
    if (emergency === "yes") {
      emergLow = Math.round(extractLow * (EMERGENCY_MULT[0] - 1));
      emergHigh = Math.round(extractHigh * (EMERGENCY_MULT[1] - 1));
    }

    const totalLow = Math.round(subLow + emergLow);
    const totalHigh = Math.round(subHigh + emergHigh);

    return {
      extractLow: Math.round(extractLow),
      extractHigh: Math.round(extractHigh),
      equipLow,
      equipHigh,
      floorLow,
      floorHigh,
      moldLow,
      moldHigh,
      structLow,
      structHigh,
      emergLow,
      emergHigh,
      totalLow,
      totalHigh,
    };
  }, [sqft, water, time, floor, mold, emergency, structural]);

  const tips = useMemo(
    () => getTips({ water, time, mold, emergency, structural, sqft }, lang),
    [water, time, mold, emergency, structural, sqft, lang]
  );

  function fmt(n: number) {
    return "$" + n.toLocaleString("en-US");
  }

  function handleReset() {
    setSqft(200);
    setWater("clean");
    setTime("lt24");
    setFloor("carpet");
    setMold("no");
    setEmergency("no");
    setStructural("none");
    setCalculated(false);
  }

  const inputCls =
    "w-full border border-gray-300 rounded-lg px-3 py-2.5 text-gray-800 bg-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors";
  const labelCls = "block text-sm font-semibold text-gray-900 mb-1";
  const helpCls = "text-xs text-gray-500 mb-2";

  return (
    <div
      id="cost-estimator"
      className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-300 rounded-2xl p-6 md:p-8 my-10"
    >
      <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-1">
        {t.title}
      </h2>
      <p className="text-sm text-gray-600 mb-6">{t.subtitle}</p>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className={labelCls}>{t.areaLabel}</label>
          <p className={helpCls}>{t.areaHelp}</p>
          <div className="flex items-center gap-3">
            <input
              type="range"
              min={50}
              max={3000}
              step={10}
              value={sqft}
              onChange={(e) => setSqft(Number(e.target.value))}
              className="flex-1 accent-amber-600"
            />
            <input
              type="number"
              min={50}
              max={5000}
              value={sqft}
              onChange={(e) => setSqft(Number(e.target.value) || 50)}
              className="w-20 border border-gray-300 rounded-lg px-2 py-2 text-center text-gray-800 focus:ring-2 focus:ring-amber-500 outline-none"
            />
            <span className="text-xs text-gray-500">ft&sup2;</span>
          </div>
        </div>

        <div>
          <label className={labelCls}>{t.waterLabel}</label>
          <p className={helpCls}>{t.waterHelp}</p>
          <select value={water} onChange={(e) => setWater(e.target.value)} className={inputCls}>
            {t.waterOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
          <p className="text-xs text-gray-400 mt-1">
            {t.waterOptions.find((o) => o.value === water)?.desc}
          </p>
        </div>

        <div>
          <label className={labelCls}>{t.timeLabel}</label>
          <p className={helpCls}>{t.timeHelp}</p>
          <select value={time} onChange={(e) => setTime(e.target.value)} className={inputCls}>
            {t.timeOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelCls}>{t.floorLabel}</label>
          <p className={helpCls}>{t.floorHelp}</p>
          <select value={floor} onChange={(e) => setFloor(e.target.value)} className={inputCls}>
            {t.floorOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelCls}>{t.moldLabel}</label>
          <p className={helpCls}>{t.moldHelp}</p>
          <select value={mold} onChange={(e) => setMold(e.target.value)} className={inputCls}>
            <option value="no">{t.moldNo}</option>
            <option value="yes">{t.moldYes}</option>
            <option value="unsure">{t.moldUnsure}</option>
          </select>
        </div>

        <div>
          <label className={labelCls}>{t.emergencyLabel}</label>
          <p className={helpCls}>{t.emergencyHelp}</p>
          <select value={emergency} onChange={(e) => setEmergency(e.target.value)} className={inputCls}>
            <option value="no">{t.emergencyNo}</option>
            <option value="yes">{t.emergencyYes}</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className={labelCls}>{t.structuralLabel}</label>
          <p className={helpCls}>{t.structuralHelp}</p>
          <select value={structural} onChange={(e) => setStructural(e.target.value)} className={inputCls + " md:w-1/2"}>
            {t.structuralOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex gap-3 mt-6">
        <button
          onClick={() => setCalculated(true)}
          className="bg-amber-700 hover:bg-amber-800 text-white font-bold px-8 py-3 rounded-xl transition-colors text-lg shadow-lg"
        >
          {t.calculateBtn}
        </button>
        {calculated && (
          <button
            onClick={handleReset}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium px-6 py-3 rounded-xl transition-colors"
          >
            {t.resetBtn}
          </button>
        )}
      </div>

      {calculated && (
        <div className="mt-8 space-y-6">
          <div className="bg-white rounded-xl border border-amber-200 p-6 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-4">{t.resultTitle}</h3>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="text-center">
                <div className="text-xs text-gray-500 uppercase tracking-wide">{t.lowLabel}</div>
                <div className="text-3xl font-extrabold text-green-700">{fmt(result.totalLow)}</div>
              </div>
              <div className="text-2xl text-gray-300 font-light">{"–"}</div>
              <div className="text-center">
                <div className="text-xs text-gray-500 uppercase tracking-wide">{t.highLabel}</div>
                <div className="text-3xl font-extrabold text-red-700">{fmt(result.totalHigh)}</div>
              </div>
            </div>
            <p className="text-xs text-gray-500 text-center">{t.resultDisclaimer}</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <h3 className="text-sm font-bold text-gray-900 px-4 py-3 bg-gray-50 border-b border-gray-200">{t.breakdownTitle}</h3>
            <div className="divide-y divide-gray-100">
              {[
                { label: t.extractionDrying, low: result.extractLow, high: result.extractHigh },
                { label: t.equipmentRental, low: result.equipLow, high: result.equipHigh },
                { label: t.flooringRepair, low: result.floorLow, high: result.floorHigh },
                ...(result.moldLow > 0 || result.moldHigh > 0 ? [{ label: t.moldRemediation, low: result.moldLow, high: result.moldHigh }] : []),
                ...(result.structLow > 0 || result.structHigh > 0 ? [{ label: t.structuralRepair, low: result.structLow, high: result.structHigh }] : []),
                ...(result.emergLow > 0 || result.emergHigh > 0 ? [{ label: t.emergencySurcharge, low: result.emergLow, high: result.emergHigh }] : []),
              ].map((row) => (
                <div key={row.label} className="flex items-center justify-between px-4 py-3">
                  <span className="text-sm text-gray-700">{row.label}</span>
                  <span className="text-sm font-medium text-gray-900">{fmt(row.low)} {"–"} {fmt(row.high)}</span>
                </div>
              ))}
              <div className="flex items-center justify-between px-4 py-3 bg-gray-900 text-white font-bold">
                <span>{t.total}</span>
                <span>{fmt(result.totalLow)} {"–"} {fmt(result.totalHigh)}</span>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
            <h3 className="text-sm font-bold text-blue-900 mb-3">{t.tipsTitle}</h3>
            <ul className="space-y-2">
              {tips.map((tip, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-blue-800">
                  <span className="mt-0.5 flex-shrink-0 font-bold text-blue-600">&bull;</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 text-center">
            <p className="text-gray-700 text-sm mb-3">{t.ctaText}</p>
            <span className="inline-block bg-amber-700 text-white font-bold px-5 py-2.5 rounded-lg">
              {t.ctaButton}
            </span>
          </div>

          <p className="text-xs text-gray-400 text-center">{t.source}</p>
        </div>
      )}
    </div>
  );
}
