import type { Metadata } from "next";

import { categoryRoute } from "@/lib/routes";
import type { InvestmentCategory } from "@/types/investment";

export const SITE_NAME = "Invertir en Argentina";
const SITE_URL = "https://invertirenargentina.com.ar";

type MetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function createMetadata({
  title,
  description,
  path,
}: MetadataInput): Metadata {
  return {
    title,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: "es_AR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function createCategoryMetadata(category: InvestmentCategory) {
  return createMetadata({
    title: `${category.title} | ${SITE_NAME}`,
    description: category.description,
    path: categoryRoute(category.slug),
  });
}
