import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import { SITE_NAME, createMetadata } from "@/lib/seo";

import "./globals.scss";

export const metadata: Metadata = createMetadata({
  title: SITE_NAME,
  description:
    "Sitio educativo sobre instrumentos financieros, riesgos, monedas, plazos y alternativas de inversión en Argentina.",
  path: "/",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <div className="site-shell">
          <Header />
          <main className="site-main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
