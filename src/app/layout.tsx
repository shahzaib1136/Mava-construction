import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://znb-construction.example.com"),
  title: {
    default: "ZNB Construction | Local Concrete Service Experts",
    template: "%s | ZNB Construction",
  },
  description:
    "Established in 2013, ZNB Construction offer the very best in concrete expertise, labour and finishing techniques across the UK. Family run, trusted nationwide.",
  openGraph: {
    type: "website",
    siteName: "ZNB Construction",
    title: "ZNB Construction | Local Concrete Service Experts",
    description:
      "Established in 2013, ZNB Construction offer the very best in concrete expertise, labour and finishing techniques across the UK.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
