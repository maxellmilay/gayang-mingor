import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gayang Mingor",
  description: "Official website for Gayang Mingor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex flex-col min-h-[100dvh] scrollbar-thumb-mingor-blue-200 scrollbar-track-mingor-blue-100/70 scrollbar-thin`}
      >
        <Header />
        <main className="flex flex-col grow basis-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
