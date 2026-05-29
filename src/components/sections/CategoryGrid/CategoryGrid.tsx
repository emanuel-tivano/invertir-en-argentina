import type { InvestmentCategory } from "@/types/investment";

import { CategoryCard } from "@/components/cards/CategoryCard/CategoryCard";

import styles from "./CategoryGrid.module.scss";

type CategoryGridProps = {
  id?: string;
  title: string;
  description: string;
  categories: InvestmentCategory[];
};

export function CategoryGrid({
  id,
  title,
  description,
  categories,
}: CategoryGridProps) {
  return (
    <section id={id} className={`container ${styles.section}`}>
      <div className={styles.pageIntro}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className={styles.grid}>
        {categories.map((category) => (
          <CategoryCard key={category.slug} category={category} />
        ))}
      </div>
    </section>
  );
}
