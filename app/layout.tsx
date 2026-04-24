import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Velantrio | Smart Outsourcing Solutions (BPO, KPO, Data Validation)",
  description: "Velantrio provides high-performance outsourcing solutions including Tele Data Validation, BPO, KPO, and Back Office Support. Engineered for accuracy, speed, and scale.",
  keywords: ["Outsourcing", "BPO", "KPO", "Data Validation", "Back Office Support", "Business Process Outsourcing", "Velantrio"],
  authors: [{ name: "Velantrio Team" }],
  openGraph: {
    title: "Velantrio | Smart Outsourcing Solutions",
    description: "High-performance BPO and KPO solutions for growing businesses.",
    url: "https://velantrio.com",
    siteName: "Velantrio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Velantrio | Smart Outsourcing Solutions",
    description: "High-performance BPO and KPO solutions for growing businesses.",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
