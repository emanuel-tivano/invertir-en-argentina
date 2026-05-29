import Link from "next/link";

import { ROUTES } from "@/lib/routes";

import styles from "./HomeHero.module.scss";

export function HomeHero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Educación financiera</p>
          <h1>Invertir en Argentina</h1>
          <p className={styles.description}>
            Guías simples para entender instrumentos financieros, riesgos, plazos,
            monedas y alternativas de inversión en el mercado argentino.
          </p>
          <Link href={ROUTES.homeCategories} className={styles.cta}>
            Explorar inversiones
          </Link>
        </div>
      </div>
    </section>
  );
}
