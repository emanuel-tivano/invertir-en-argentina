"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { investmentCategories } from "@/content/investmentCategories";
import { ROUTES } from "@/lib/routes";

import styles from "./Header.module.scss";

export function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href={ROUTES.home} className={styles.brand}>
          Invertir en Argentina
        </Link>
        <nav aria-label="Principal">
          <ul className={styles.navList}>
            <li>
              <Link
                href={ROUTES.home}
                className={pathname === ROUTES.home ? styles.activeLink : undefined}
                aria-current={pathname === ROUTES.home ? "page" : undefined}
              >
                Inicio
              </Link>
            </li>
            {investmentCategories.map((category) => (
              <li key={category.slug}>
                <Link
                  href={category.path}
                  className={pathname === category.path ? styles.activeLink : undefined}
                  aria-current={pathname === category.path ? "page" : undefined}
                >
                  {category.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
