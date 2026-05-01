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
    default: "Velantrio | Expert BPO, KPO & Tele Data Validation Services",
    template: "%s | Velantrio Outsourcing"
  },
  description: "Velantrio is a premium outsourcing partner providing high-accuracy Tele Data Validation, BPO, KPO, and Back Office Support globally. Scale your business with our data-driven solutions.",
  keywords: [
    "Business Process Outsourcing India",
    "Knowledge Process Outsourcing",
    "Tele Data Validation experts",
    "Back Office Support services",
    "Lead Generation solutions",
    "Data Enrichment services",
    "Velantrio Outsourcing",
    "Global BPO partner",
    "Data Validation for sales",
    "Cost-effective outsourcing",
    "Enterprise data solutions",
    "Outsourced customer support"
  ],
  authors: [{ name: "Velantrio" }],
  creator: "Velantrio",
  publisher: "Velantrio",
  alternates: {
    canonical: "https://velantrio.com",
  },
  openGraph: {
    title: "Velantrio | Smart Outsourcing & Data Validation Solutions",
    description: "High-performance BPO and KPO solutions. Engineered for accuracy, speed, and global scale.",
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
    title: "Velantrio | Global Outsourcing & Data Validation",
    description: "Scale your business with high-performance BPO and KPO solutions.",
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
  verification: {
    google: "your-google-verification-code", // Replace when available
    // bing: "your-bing-verification-code", // Replace when available
  }
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
