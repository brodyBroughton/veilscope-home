import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://veilscope.com"),
  title: {
    default: "Veilscope",
    template: "%s | Veilscope",
  },
  description: "Transparent, trustworthy access to unbiased public-company fundamentals.",
  openGraph: {
    title: "Veilscope",
    description: "Transparent, trustworthy access to unbiased public-company fundamentals.",
    url: "https://veilscope.com",
    siteName: "Veilscope",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Veilscope",
    description:
    "Transparent, trustworthy access to unbiased public-company fundamentals.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: "/icons/apple-touch-icon.png",
  },
  manifest: "/icons/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
  <body className={`${geistSans.variable} ${geistMono.variable} app-shell`}>
        <div className="app-container">
          <Header />
          <main className="app-main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
