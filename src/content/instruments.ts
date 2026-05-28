import type { Instrument } from "@/types/investment";

const instruments: Instrument[] = [
  {
    slug: "bonos",
    name: "Bonos",
    summary: "Títulos de deuda emitidos por estados o empresas con pagos de renta y devolución de capital según sus condiciones.",
  },
  {
    slug: "letras",
    name: "Letras",
    summary: "Instrumentos de deuda de plazo corto o intermedio, usualmente usados para administrar liquidez o tomar tasa.",
  },
  {
    slug: "obligaciones-negociables",
    name: "Obligaciones Negociables",
    summary: "Deuda corporativa emitida por empresas privadas, con exposición al riesgo crediticio del emisor.",
  },
  {
    slug: "cauciones",
    name: "Cauciones",
    summary: "Operaciones de corto plazo utilizadas para colocar o tomar fondos con garantía bursátil.",
  },
  {
    slug: "plazos-fijos",
    name: "Plazos fijos",
    summary: "Colocaciones bancarias tradicionales con tasa pactada y permanencia definida.",
  },
  {
    slug: "fci-money-market",
    name: "FCI money market",
    summary: "Fondos de muy baja duración orientados a liquidez diaria y preservación nominal de corto plazo.",
  },
  {
    slug: "instrumentos-cer",
    name: "Instrumentos CER",
    summary: "Activos ajustados por inflación local, usados para defender poder adquisitivo en pesos.",
  },
  {
    slug: "instrumentos-dolar-linked",
    name: "Instrumentos dólar linked",
    summary: "Instrumentos en pesos cuyo capital o rendimiento sigue la evolución del tipo de cambio oficial.",
  },
  {
    slug: "acciones-argentinas",
    name: "Acciones argentinas",
    summary: "Participaciones en empresas locales cuyo precio refleja expectativas de ganancias, riesgo y contexto económico.",
  },
  {
    slug: "cedears",
    name: "CEDEARs",
    summary: "Certificados que permiten invertir desde Argentina en acciones del exterior con cotización local.",
  },
  {
    slug: "cedears-de-etfs",
    name: "CEDEARs de ETFs",
    summary: "Vehículos listados que replican índices o estrategias y se negocian localmente como CEDEARs.",
  },
  {
    slug: "fci-renta-variable",
    name: "FCI de renta variable",
    summary: "Fondos que concentran su cartera en acciones y otros instrumentos de riesgo de mercado elevado.",
  },
  {
    slug: "money-market",
    name: "Money market",
    summary: "Estrategia conservadora enfocada en liquidez diaria mediante instrumentos de corto plazo.",
  },
  {
    slug: "fci-renta-fija",
    name: "FCI de renta fija",
    summary: "Fondos orientados a deuda soberana, corporativa o instrumentos de tasa.",
  },
  {
    slug: "fci-mixtos",
    name: "FCI mixtos",
    summary: "Fondos que combinan renta fija y variable para balancear riesgo, rendimiento y diversificación.",
  },
  {
    slug: "fci-cer",
    name: "FCI CER",
    summary: "Fondos con foco en activos indexados por inflación local.",
  },
  {
    slug: "fci-dolar-linked",
    name: "FCI dólar linked",
    summary: "Fondos que buscan cobertura frente a movimientos del tipo de cambio oficial.",
  },
  {
    slug: "bitcoin",
    name: "Bitcoin",
    summary: "Activo digital descentralizado, de oferta limitada y alta volatilidad, usado como reserva especulativa o temática.",
  },
  {
    slug: "ethereum",
    name: "Ethereum",
    summary: "Red y activo digital vinculado al ecosistema de contratos inteligentes y aplicaciones descentralizadas.",
  },
  {
    slug: "stablecoins",
    name: "Stablecoins",
    summary: "Tokens que buscan mantener paridad con monedas fiat, frecuentes para dolarización digital y liquidez.",
  },
  {
    slug: "tokens",
    name: "Tokens",
    summary: "Activos digitales con usos y riesgos diversos según la red, la emisión y la utilidad del proyecto.",
  },
  {
    slug: "staking",
    name: "Staking",
    summary: "Mecanismo para inmovilizar ciertos criptoactivos y obtener rendimiento dentro de redes proof of stake.",
  },
  {
    slug: "defi",
    name: "DeFi",
    summary: "Servicios financieros descentralizados que permiten prestar, tomar liquidez o generar rendimiento sobre criptoactivos.",
  },
  {
    slug: "futuros-de-dolar",
    name: "Futuros de dólar",
    summary: "Contratos derivados usados para cobertura cambiaria o toma de posición sobre el tipo de cambio futuro.",
  },
  {
    slug: "futuros-de-tasas",
    name: "Futuros de tasas",
    summary: "Derivados vinculados a expectativas de tasas de interés, utilizados para cobertura o estrategia táctica.",
  },
  {
    slug: "opciones",
    name: "Opciones",
    summary: "Contratos que otorgan derecho, pero no obligación, a comprar o vender un activo bajo condiciones definidas.",
  },
  {
    slug: "futuros-sobre-acciones",
    name: "Futuros sobre acciones",
    summary: "Derivados sobre acciones individuales para cobertura, arbitraje o especulación apalancada.",
  },
  {
    slug: "dolar-mep",
    name: "Dólar MEP",
    summary: "Forma bursátil de dolarización mediante compra y venta de bonos en el mercado local.",
  },
  {
    slug: "dolar-ccl",
    name: "Dólar CCL",
    summary: "Mecanismo bursátil para obtener divisas con posibilidad de girarlas o valuarlas fuera de Argentina.",
  },
  {
    slug: "bonos-en-dolares",
    name: "Bonos en dólares",
    summary: "Títulos con flujo o denominación en moneda dura, usados para renta y exposición cambiaria.",
  },
  {
    slug: "ons-en-dolares",
    name: "ONs en dólares",
    summary: "Deuda corporativa emitida en moneda dura, habitual para combinar renta y dolarización.",
  },
];

export function getInstrumentsByIds(ids: string[]) {
  return ids.map((id) => {
    const instrument = instruments.find((item) => item.name === id);

    if (!instrument) {
      throw new Error(`Instrument not found: ${id}`);
    }

    return instrument;
  });
}

export { instruments };
