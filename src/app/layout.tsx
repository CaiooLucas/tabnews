import type { Metadata } from "next";
import {
  Inter as Geist,
  Roboto_Mono as Geist_Mono,
  Poppins,
} from "next/font/google";
import "@/app/globals.css";
import { Providers } from "@/components/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const display = Poppins({
  variable: "--font-display",
  weight: ["600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Vanep — O sistema operacional do transporte escolar",
    template: "%s | Vanep",
  },
  description:
    "Vanep conecta responsáveis a transportadores escolares verificados: contratos digitais, rastreamento em tempo real, notificações a cada etapa e gestão completa para o motorista.",
  openGraph: {
    title: "Vanep — O sistema operacional do transporte escolar",
    description:
      "Encontre motoristas verificados, acompanhe a van em tempo real e tenha contratos digitais. Tudo em um só lugar.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${display.variable} h-full`}
    >
      <body className="min-h-full flex flex-col text-foreground antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
