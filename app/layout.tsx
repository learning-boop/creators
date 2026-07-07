import type { Metadata } from "next";
import { Familjen_Grotesk, Martian_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { defaultMetadata } from "@/lib/metadata";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const familjenGrotesk = Familjen_Grotesk({
  variable: "--font-primary",
  subsets: ["latin"],
  display: "swap",
});

const martianMono = Martian_Mono({
  variable: "--font-tertiary",
  subsets: ["latin"],
  display: "swap",
});

const neueHaas = localFont({
  src: [
    {
      path: "../public/fonts/neuehaas/NeueHaasGrotText-55Roman-Trial.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/neuehaas/NeueHaasGrotText-65Medium-Trial.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/neuehaas/NeueHaasGrotText-75Bold-Trial.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-secondary",
  display: "swap",
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${familjenGrotesk.variable} ${martianMono.variable} ${neueHaas.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#050505] text-[#F2F2F2]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
