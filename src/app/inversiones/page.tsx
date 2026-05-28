import type { Metadata } from "next";

import { CategoryGrid } from "@/components/sections/CategoryGrid/CategoryGrid";
import { investmentCategories } from "@/content/investmentCategories";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Tipos de inversiones financieras en Argentina",
  description:
    "Panorama inicial de las principales categorías de inversión del mercado argentino según renta, moneda, plazo, riesgo y objetivo.",
  path: "/inversiones",
});

export default function InvestmentsPage() {
  return (
    <section className="container">
      <div className="page-intro">
        <h1>Tipos de inversiones financieras en Argentina</h1>
        <p>
          Las inversiones pueden clasificarse por tipo de renta, moneda, plazo,
          riesgo y objetivo. Esta guía organiza las categorías más frecuentes para
          que puedas comparar alternativas y entender qué función cumple cada una
          dentro de una estrategia.
        </p>
      </div>
      <CategoryGrid
        title="Explorá las categorías"
        description="Cada categoría reúne instrumentos con lógicas, riesgos y usos distintos."
        categories={investmentCategories}
      />
    </section>
  );
}
