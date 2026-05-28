import Link from "next/link";

import { ROUTES } from "@/lib/routes";

import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div>
          <p className={styles.title}>Invertir en Argentina</p>
          <p className={styles.text}>
            Contenido educativo para entender instrumentos, riesgos, plazos y monedas
            del mercado argentino.
          </p>
        </div>
        <nav aria-label="Secundaria">
          <ul className={styles.links}>
            <li>
              <Link href={ROUTES.home}>Inicio</Link>
            </li>
            <li>
              <Link href={ROUTES.investments}>Inversiones</Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
