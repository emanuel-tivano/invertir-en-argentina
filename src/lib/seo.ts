import type { Metadata } from "next";

import { categoryRoute } from "@/lib/routes";
import type { Instrument, InvestmentCategory } from "@/types/investment";

export const SITE_NAME = "Invertir en Argentina";
export const SITE_URL = "https://invertirenargentina.com.ar";

type JsonLdValue =
  | string
  | number
  | boolean
  | null
  | JsonLdValue[]
  | { [key: string]: JsonLdValue };

type MetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}

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

export function createJsonLdScriptProps(jsonLd: JsonLdValue) {
  return {
    __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
  };
}

export function createWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: absoluteUrl("/"),
    inLanguage: "es-AR",
  };
}

export function createBreadcrumbListJsonLd(
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function createCategoryCollectionPageJsonLd(
  category: InvestmentCategory,
  instruments: Instrument[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${category.title} | ${SITE_NAME}`,
    description: category.description,
    url: absoluteUrl(categoryRoute(category.slug)),
    inLanguage: "es-AR",
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: absoluteUrl("/"),
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: instruments.map((instrument, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Thing",
          name: instrument.name,
          description: instrument.summary,
        },
      })),
    },
  };
}
