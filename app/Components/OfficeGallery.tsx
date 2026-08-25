"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { 
  Building2, 
  Expand, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck, 
  MapPin, 
  Sparkles,
  CheckCircle2
} from "lucide-react";
import { SectionHeader } from "./SectionHeader";

export interface OfficeImage {
  id: number;
  src: string;
  alt: string;
  title: string;
  tag: string;
  description: string;
  highlights: string[];
}

export const officeImages: OfficeImage[] = [
  {
    id: 1,
    src: "/image1.png",
    alt: "Velantrio Mohali Delivery Floor & Workstations",
    title: "Main Operations & Production Floor",
    tag: "Workstations & Global Ops",
    description: "Spacious, ergonomic workstation bays equipped with multi-monitor capability, dual gigabit fiber connections, and acoustic partitions for maximum focus and throughput.",
    highlights: ["Clean-Desk Certified", "Dual Gigabit Fiber", "24/7 Operations"]
  },
  {
    id: 2,
    src: "/image2.png",
    alt: "Velantrio Modern Office Hub & Ceiling Lighting",
    title: "High-Velocity Operational Hub",
    tag: "Tier-1 Facility",
    description: "Custom architectural hexagon lighting, inspiring wall art, and open-plan seating designed for seamless team collaboration and continuous quality calibration.",
    highlights: ["Acoustic Design", "Power Backup", "Biometric Access"]
  },
  {
    id: 3,
    src: "/image3.png",
    alt: "Velantrio Executive Cabins & Meeting Rooms",
    title: "Glass Cabins & Governance Suites",
    tag: "Executive & QA Suites",
    description: "Sound-insulated glass conference cabins used for daily QA standups, client SLA reviews, and executive governance meetings.",
    highlights: ["Secure Enclosures", "Executive Briefing", "Isolated QA Pods"]
  }
];

interface OfficeGalleryProps {
  showHeader?: boolean;
  eyebrow?: string;
  title?: React.ReactNode;
  subtitle?: string;
  className?: string;
}

export function OfficeGallery({
  showHeader = true,
  eyebrow = "Physical Infrastructure Showcase",
  title = <>Inside Our <span className="text-primary">Mohali Delivery Hub</span></>,
  subtitle = "Explore our state-of-the-art 24/7 delivery facility located in JLPL Industrial Area, Sector 83, SAS Nagar (Mohali), Punjab.",
  className = ""
}: OfficeGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Close modal on Escape key press, navigate with Left/Right arrows
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) => (prev !== null ? (prev - 1 + officeImages.length) % officeImages.length : 0));
      }
      if (e.key === "ArrowRight") {
        setSelectedIndex((prev) => (prev !== null ? (prev + 1) % officeImages.length : 0));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  return (
    <div className={`w-full ${className}`}>
      {showHeader && (
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
        />
      )}

      {/* 3-Column Office Image Cards */}
      <div className={`${showHeader ? "mt-12 sm:mt-14" : ""} grid md:grid-cols-3 gap-6 sm:gap-8`}>
        {officeImages.map((image, index) => (
          <div
            key={image.id}
            onClick={() => setSelectedIndex(index)}
            className="group cursor-pointer rounded-2xl border border-border bg-card overflow-hidden shadow-xs hover:border-primary/50 hover:shadow-lg transition-all duration-300 flex flex-col"
          >
            {/* Image Container */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Dark Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

              {/* Tag Badge */}
              <div className="absolute top-3 left-3 z-10">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-background/90 text-foreground backdrop-blur-md border border-border shadow-xs">
                  <Building2 className="h-3 w-3 text-primary" />
                  {image.tag}
                </span>
              </div>

              {/* Expand Hover Button */}
              <div className="absolute bottom-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="h-9 w-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-md hover:scale-110 transition-transform">
                  <Expand className="h-4 w-4" />
                </div>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-5 flex-grow flex flex-col justify-between space-y-3">
              <div>
                <h3 className="text-base font-bold text-foreground tracking-tight group-hover:text-primary transition-colors">
                  {image.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed line-clamp-2">
                  {image.description}
                </p>
              </div>

              {/* Highlight Badges */}
              <div className="pt-3 border-t border-border/60 flex flex-wrap gap-1.5">
                {image.highlights.map((h) => (
                  <span
                    key={h}
                    className="inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded bg-muted/80 border border-border text-foreground/80"
                  >
                    <CheckCircle2 className="h-2.5 w-2.5 text-primary" />
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Facility Footer Location Callout */}
      <div className="mt-8 rounded-xl border border-border/80 bg-muted/30 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
            <MapPin className="h-5 w-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-foreground">
              Mohali Operations & Delivery Hub
            </div>
            <div className="text-xs text-muted-foreground">
              Plot No. I-36, Sector 83, JLPL Industrial Area, SAS Nagar (Mohali), Punjab 140306, India
            </div>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-lg shrink-0">
          <ShieldCheck className="h-4 w-4" />
          <span>Biometric Access & Clean-Desk Policy Active</span>
        </div>
      </div>

      {/* Lightbox Fullscreen Modal */}
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Modal Container */}
          <div 
            className="relative max-w-5xl w-full bg-card rounded-2xl border border-border overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 sm:px-6 border-b border-border bg-muted/40">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-primary px-2.5 py-0.5 rounded bg-primary/10 border border-primary/20">
                  {officeImages[selectedIndex].tag}
                </span>
                <span className="text-xs text-muted-foreground hidden sm:inline">
                  Photo {selectedIndex + 1} of {officeImages.length}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSelectedIndex(null)}
                  className="h-8 w-8 rounded-lg border border-border bg-background hover:bg-muted flex items-center justify-center text-foreground transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Image Box */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black flex items-center justify-center overflow-hidden">
              <Image
                src={officeImages[selectedIndex].src}
                alt={officeImages[selectedIndex].alt}
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-contain"
                priority
              />

              {/* Prev / Next Navigation Controls */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIndex((selectedIndex - 1 + officeImages.length) % officeImages.length);
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-background/80 hover:bg-background backdrop-blur-md border border-border text-foreground flex items-center justify-center shadow-lg transition-transform hover:scale-110 cursor-pointer z-10"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIndex((selectedIndex + 1) % officeImages.length);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-background/80 hover:bg-background backdrop-blur-md border border-border text-foreground flex items-center justify-center shadow-lg transition-transform hover:scale-110 cursor-pointer z-10"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Footer Information */}
            <div className="p-4 sm:p-6 bg-card border-t border-border space-y-2">
              <h3 className="text-lg font-bold text-foreground">
                {officeImages[selectedIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {officeImages[selectedIndex].description}
              </p>
              <div className="pt-2 flex flex-wrap gap-2">
                {officeImages[selectedIndex].highlights.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md bg-muted text-foreground border border-border"
                  >
                    <Sparkles className="h-3 w-3 text-primary" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
