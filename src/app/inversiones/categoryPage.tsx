import Link from "next/link";

import { getCategoryBySlug } from "@/content/investmentCategories";
import { getInstrumentsByIds } from "@/content/instruments";
import type { InvestmentCategorySlug } from "@/types/investment";
import styles from "@/components/sections/CategoryGrid/CategoryGrid.module.scss";

type CategoryPageProps = {
  slug: InvestmentCategorySlug;
};

export function CategoryPage({ slug }: CategoryPageProps) {
  const category = getCategoryBySlug(slug);
  const instruments = getInstrumentsByIds(category.instrumentIds);

  return (
    <section className="container">
      <div className={styles.pageIntro}>
        <nav aria-label="Breadcrumb">
          <p className={styles.breadcrumbs}>
            <Link href="/">Inicio</Link> / <Link href="/inversiones">Inversiones</Link> /{" "}
            <span>{category.title}</span>
          </p>
        </nav>
        <h1>{category.title}</h1>
        <p>{category.description}</p>
      </div>

      <section className={styles.categoryDetail} aria-labelledby="instrumentos-relacionados">
        <div className={styles.detailCard}>
          <h2 id="instrumentos-relacionados">Instrumentos relacionados</h2>
          <ul className={styles.instrumentList}>
            {instruments.map((instrument) => (
              <li key={instrument.slug}>
                <h3>{instrument.name}</h3>
                <p>{instrument.summary}</p>
              </li>
            ))}
          </ul>
        </div>

        <aside className={styles.detailCard}>
          <h2>Nota aclaratoria</h2>
          <p>{category.note}</p>
        </aside>
      </section>
    </section>
  );
}
