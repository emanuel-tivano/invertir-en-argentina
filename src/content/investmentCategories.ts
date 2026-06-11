import { categoryRoute } from '@/lib/routes';
import type {
  InvestmentCategory,
  InvestmentCategorySlug,
} from '@/types/investment';

export const investmentCategories: InvestmentCategory[] = [
  {
    slug: 'renta-variable',
    title: 'Renta variable',
    description:
      'Instrumentos cuyo resultado depende principalmente de la evolución del precio de mercado del activo.',
    instrumentIds: [
      'acciones-argentinas',
      'cedears',
      'cedears-de-etfs',
      'fci-renta-variable',
    ],
    note: 'Suele implicar mayor volatilidad que la renta fija y requiere evaluar horizonte de inversión, diversificación, liquidez y tolerancia a fluctuaciones de precio.',
    path: categoryRoute('renta-variable'),
    img: {
      src: '/images/categories/renta-variable.jpg',
      alt: 'Instrumentos de renta variable',
    },
  },
  {
    slug: 'renta-fija',
    title: 'Renta fija',
    description:
      'Instrumentos asociados a deuda, tasa, plazo o flujos de pago definidos o estimados.',
    instrumentIds: [
      'bonos',
      'letras',
      'obligaciones-negociables',
      'cauciones',
      'plazos-fijos',
      'fci-money-market',
      'instrumentos-cer',
      'instrumentos-dolar-linked',
    ],
    note: 'No toda la renta fija tiene el mismo riesgo: pueden variar el emisor, la moneda, el plazo, la liquidez, la duración y la sensibilidad a inflación o tipo de cambio.',
    path: categoryRoute('renta-fija'),
    img: {
      src: '/images/categories/renta-fija.jpg',
      alt: 'Instrumentos de renta fija',
    },
  },
  {
    slug: 'fondos-comunes-de-inversion',
    title: 'Fondos comunes de inversión',
    description:
      'Vehículos de inversión colectiva administrados profesionalmente, donde los inversores participan mediante cuotapartes.',
    instrumentIds: [
      'money-market',
      'fci-renta-fija',
      'fci-renta-variable',
      'fci-mixtos',
      'fci-cer',
      'fci-dolar-linked',
    ],
    note: 'Cada fondo tiene una política de inversión, cartera, plazo de rescate, moneda, nivel de riesgo y costos propios; por eso conviene comparar más que solo el rendimiento reciente.',
    path: categoryRoute('fondos-comunes-de-inversion'),
    img: {
      src: '/images/categories/fondos-comunes-de-inversion.jpg',
      alt: 'Fondos comunes de inversión y estrategias administradas',
    },
  },
  {
    slug: 'criptoactivos',
    title: 'Criptoactivos',
    description:
      'Activos digitales como Bitcoin, Ethereum, stablecoins y otros tokens negociados en redes o plataformas especializadas.',
    instrumentIds: [
      'bitcoin',
      'ethereum',
      'stablecoins',
      'tokens',
      'staking',
      'defi',
    ],
    note: 'Combinan riesgo de mercado, tecnológico, regulatorio, operativo y de contraparte; incluso las stablecoins pueden tener riesgos de liquidez, custodia o respaldo.',
    path: categoryRoute('criptoactivos'),
    img: {
      src: '/images/categories/criptoactivos.jpg',
      alt: 'Criptoactivos y activos digitales',
    },
  },
  {
    slug: 'derivados',
    title: 'Derivados',
    description:
      'Contratos cuyo valor depende de un activo, tasa, índice, moneda u otra variable de referencia.',
    instrumentIds: [
      'futuros-de-dolar',
      'futuros-de-tasas',
      'opciones',
      'futuros-sobre-acciones',
    ],
    note: 'Pueden usarse para cobertura o especulación, pero requieren entender garantías, márgenes, vencimientos, apalancamiento y escenarios de pérdida.',
    path: categoryRoute('derivados'),
    img: {
      src: '/images/categories/derivados.jpg',
      alt: 'Derivados para cobertura o gestión de riesgo',
    },
  },
  {
    slug: 'divisas',
    title: 'Divisas',
    description:
      'Categoría transversal para instrumentos vinculados a monedas, dolarización o cobertura cambiaria.',
    instrumentIds: [
      'dolar-mep',
      'dolar-ccl',
      'bonos-en-dolares',
      'ons-en-dolares',
      'cedears',
      'stablecoins',
      'instrumentos-dolar-linked',
      'fci-dolar-linked',
      'futuros-de-dolar',
    ],
    note: 'No es una clase de activo pura: agrupa alternativas con exposición directa o indirecta al tipo de cambio, cada una con riesgos, costos, liquidez y regulación diferentes.',
    path: categoryRoute('divisas'),
    img: {
      src: '/images/categories/divisas.jpg',
      alt: 'Divisas e instrumentos vinculados al dólar y otras monedas',
    },
  },
];

export function getCategoryBySlug(slug: InvestmentCategorySlug) {
  const category = investmentCategories.find((item) => item.slug === slug);

  if (!category) {
    throw new Error(`Category not found: ${slug}`);
  }

  return category;
}
