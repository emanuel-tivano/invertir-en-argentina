import type { InvestmentCategorySlug } from "@/types/investment";

export const ROUTES = {
  home: "/",
  investments: "/inversiones",
} as const;

export function categoryRoute(slug: InvestmentCategorySlug) {
  return `${ROUTES.investments}/${slug}`;
}
