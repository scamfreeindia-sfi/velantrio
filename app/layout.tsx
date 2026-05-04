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
    default: "Velantrio | Best BPO, KPO & Software Solutions in Mohali & Chandigarh",
    template: "%s | Velantrio Outsourcing Mohali"
  },
  description: "Velantrio is the best software and outsourcing company in Mohali & Chandigarh. We provide high-accuracy Tele Data Validation, BPO, KPO, and Back Office Support globally.",
  keywords: [
    "Best Software Company Mohali",
    "Top Design Agency Chandigarh",
    "BPO Services Mohali",
    "KPO Company Chandigarh",
    "Tele Data Validation Mohali",
    "Software Development Chandigarh",
    "Velantrio Outsourcing India",
    "IT Services Mohali",
    "Business Process Outsourcing Chandigarh",
    "Knowledge Process Outsourcing Mohali",
    "Back Office Support Chandigarh",
    "Lead Generation Mohali"
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
