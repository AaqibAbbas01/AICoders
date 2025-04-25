import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "primeicons/primeicons.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/shared/FloatingCTA";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Coders Hub - Playwright Automation & AI Integration",
  description: "Learn Playwright automation and AI integration to supercharge your testing skills",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-900 text-gray-200`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <FloatingCTA />
        </div>
      </body>
    </html>
  );
}
