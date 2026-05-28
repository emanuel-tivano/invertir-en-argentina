import Link from "next/link";

import { ROUTES } from "@/lib/routes";

import styles from "./Header.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href={ROUTES.home} className={styles.brand}>
          Invertir en Argentina
        </Link>
        <nav aria-label="Principal">
          <ul className={styles.navList}>
            <li>
              <Link href={ROUTES.home}>Inicio</Link>
            </li>
            <li>
              <Link href={ROUTES.investments}>Inversiones</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
