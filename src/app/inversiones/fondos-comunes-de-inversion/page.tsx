import type { Metadata } from "next";

import { getCategoryBySlug } from "@/content/investmentCategories";
import { createCategoryMetadata } from "@/lib/seo";

import { CategoryPage } from "../categoryPage";

const category = getCategoryBySlug("fondos-comunes-de-inversion");

export const metadata: Metadata = createCategoryMetadata(category);

export default function MutualFundsPage() {
  return <CategoryPage slug="fondos-comunes-de-inversion" />;
}
