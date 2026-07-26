import type { Metadata } from "next";
import {
  Inter as Geist,
  Roboto_Mono as Geist_Mono,
  Poppins,
} from "next/font/google";
import "@/app/globals.css";
import { Providers } from "@/components/providers";
import { InteractiveBackground } from "@/components/interactive-background";

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
    default: "Caio Lucas",
    template: "%s | Caio Lucas",
  },
  description:
    "Caio Lucas — Software Developer",
  openGraph: {
    title: "Caio Lucas",
    description:
      "Caio Lucas — Software Developer",
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
      <body className="relative min-h-full flex flex-col text-foreground antialiased">
        <InteractiveBackground />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
