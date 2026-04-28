import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

import StructuredData from "./Components/StructuredData";

export const metadata: Metadata = {
  metadataBase: new URL("https://velantrio.com"),
  title: {
    default: "Velantrio | Smart Outsourcing Solutions (BPO, KPO, Data Validation)",
    template: "%s | Velantrio"
  },
  description: "Velantrio provides high-performance outsourcing solutions including Tele Data Validation, BPO, KPO, and Back Office Support. Engineered for accuracy, speed, and scale.",
  keywords: [
    "Outsourcing",
    "BPO",
    "KPO",
    "Data Validation",
    "Back Office Support",
    "Business Process Outsourcing",
    "Velantrio",
    "Tele Data Validation",
    "Lead Generation",
    "Data Enrichment",
    "Customer Support Outsourcing",
    "India BPO"
  ],
  authors: [{ name: "Velantrio Team" }],
  creator: "Velantrio",
  publisher: "Velantrio",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Velantrio | Smart Outsourcing Solutions",
    description: "High-performance BPO and KPO solutions for growing businesses. Accuracy, speed, and scale.",
    url: "https://velantrio.com",
    siteName: "Velantrio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Velantrio | Smart Outsourcing Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Velantrio | Smart Outsourcing Solutions",
    description: "High-performance BPO and KPO solutions for growing businesses.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
