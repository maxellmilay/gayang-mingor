import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../components/Header";
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
<<<<<<< HEAD
      <body
        className={`${inter.className} scrollbar-thumb-mingor-blue scrollbar-track-mingor-blue/70 scrollbar-thin`}
      >
=======
      <body className={`${inter.className} flex flex-col min-h-screen`}>
>>>>>>> main
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
