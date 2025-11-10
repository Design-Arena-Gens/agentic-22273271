import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Plataforma Educacional",
  description: "Landing page com visões por professor, por turma e ferramentas de migração.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
