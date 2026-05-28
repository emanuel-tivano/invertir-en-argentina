export type InvestmentCategorySlug =
  | "renta-fija"
  | "renta-variable"
  | "fondos-comunes-de-inversion"
  | "criptoactivos"
  | "derivados"
  | "divisas";

export type ContentImage = {
  src: string;
  alt: string;
};

export type Instrument = {
  slug: string;
  name: string;
  summary: string;
};

export type InvestmentCategory = {
  slug: InvestmentCategorySlug;
  title: string;
  description: string;
  instrumentIds: string[];
  note: string;
  path: string;
  img?: ContentImage;
};
