import type { InvestmentCategorySlug } from "@/types/investment";

export const ROUTES = {
  home: "/",
  homeCategories: "/#categorias-principales",
} as const;

export function categoryRoute(slug: InvestmentCategorySlug) {
  return `/inversiones/${slug}`;
}
