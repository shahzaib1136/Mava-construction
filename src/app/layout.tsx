import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// The reference site self-hosts this 2019 build of Inter (OFL); its metrics differ
// slightly from the current Google Fonts build, which changes where text wraps.
const inter = localFont({
  variable: "--font-inter",
  src: [
    { path: "./fonts/Inter-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Inter-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Inter-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "./fonts/Inter-Bold.woff2", weight: "700", style: "normal" },
    { path: "./fonts/Inter-ExtraBold.woff2", weight: "800", style: "normal" },
  ],
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
