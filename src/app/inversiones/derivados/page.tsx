import type { Metadata } from "next";

import { getCategoryBySlug } from "@/content/investmentCategories";
import { createCategoryMetadata } from "@/lib/seo";

import { CategoryPage } from "../categoryPage";

const category = getCategoryBySlug("derivados");

export const metadata: Metadata = createCategoryMetadata(category);

export default function DerivativesPage() {
  return <CategoryPage slug="derivados" />;
}
