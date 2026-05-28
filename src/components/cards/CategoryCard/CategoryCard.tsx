import Link from 'next/link';
import Image from 'next/image';

import type { InvestmentCategory } from '@/types/investment';

import styles from './CategoryCard.module.scss';

type CategoryCardProps = {
  category: InvestmentCategory;
};

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.content}>
        {category.img ? (
          <div className={styles.imageWrap}>
            <Image
              src={category.img.src}
              alt={category.img.alt}
              width={640}
              height={360}
              className={styles.image}
            />
          </div>
        ) : null}
        <div className={styles.textContent}>
          <h3>
            <Link href={category.path} className={styles.link}>
              {category.title}
            </Link>
          </h3>
          <p className={styles.description}>{category.description}</p>
        </div>
      </div>
    </article>
  );
}
