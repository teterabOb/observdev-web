import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ObservDev Labs - Desarrollo Web3, Consultoría, Gestión de Proyectos",
  description: "¿Quieres aprovechar las ventajas de la nueva era de internet? En [Nombre de empresa], nuestro equipo de expertos te ayudará a desarrollar aplicaciones Web3 innovadoras y escalables, a definir una estrategia efectiva para tu proyecto Web3 y a gestionar su implementación de forma profesional"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
