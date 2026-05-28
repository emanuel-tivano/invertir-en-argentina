import type { Metadata } from "next";

import { getCategoryBySlug } from "@/content/investmentCategories";
import { createCategoryMetadata } from "@/lib/seo";

import { CategoryPage } from "../categoryPage";

const category = getCategoryBySlug("renta-variable");

export const metadata: Metadata = createCategoryMetadata(category);

export default function VariableIncomePage() {
  return <CategoryPage slug="renta-variable" />;
}
