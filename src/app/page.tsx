import type { Metadata } from "next";

import { CategoryGrid } from "@/components/sections/CategoryGrid/CategoryGrid";
import { HomeHero } from "@/components/sections/HomeHero/HomeHero";
import { investmentCategories } from "@/content/investmentCategories";
import {
  createJsonLdScriptProps,
  createMetadata,
  createWebSiteJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Invertir en Argentina",
  description:
    "Guías simples para entender instrumentos financieros, riesgos, plazos, monedas y alternativas de inversión en el mercado argentino.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={createJsonLdScriptProps(createWebSiteJsonLd())}
      />
      <HomeHero />
      <CategoryGrid
        id="categorias-principales"
        title="Categorías principales"
        description="Un punto de partida claro para explorar instrumentos y estrategias frecuentes del mercado argentino."
        categories={investmentCategories}
      />
    </>
  );
}
