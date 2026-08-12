import type { Metadata } from "next";
import { Archivo, Newsreader, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Basically Income PAC | The Electoral Engine for Universal Basic Income",
    template: "%s | Basically Income PAC",
  },
  description: "Basically Income PAC pressures candidates to support universal basic income, endorses serious UBI champions, and directs resources toward strategic races.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Basically Income PAC",
    description: "Money for everyone. Build the electoral engine for universal basic income.",
    images: ["/basically-income-family.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} ${sourceSans.variable} ${newsreader.variable}`}>
        {children}
      </body>
    </html>
  );
}
