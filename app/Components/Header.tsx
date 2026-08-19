"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import Image from "next/image";
import { ShieldCheck, ArrowRight, Menu, X, Phone, Clock } from "lucide-react";

const links = [
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let frameId: number;
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        frameId = requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-200">
      {/* Top Operations Utility Banner */}
      <div className="bg-slate-900 text-slate-200 text-[11px] py-1.5 px-4 hidden sm:block border-b border-slate-800">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              24/7 Operations Hub: Mohali & Chandigarh, India
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">Guaranteed &lt; 2-Hour Response SLA</span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <a href="tel:+918930071652" className="flex items-center gap-1 hover:text-white transition-colors">
              <Phone className="h-3 w-3 text-primary" />
              <span>+91 8930071652</span>
            </a>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400 font-mono text-[10px]">GSTIN: 03IHZPS5878A1ZK</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-2.5 sm:py-3">
        <nav
          className={`flex items-center justify-between rounded-xl px-4 sm:px-6 py-3 transition-all duration-200 ${
            scrolled
              ? "bg-card/95 backdrop-blur-md border border-border shadow-md"
              : "bg-card/90 backdrop-blur-sm border border-border/80 shadow-xs"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-9 w-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center p-1 overflow-hidden transition-colors group-hover:border-primary/40">
              <Image
                src="/logo.png"
                alt="Velantrio"
                width={28}
                height={28}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-base tracking-tight text-foreground">
                  Velantrio
                </span>
                <span className="inline-flex items-center gap-0.5 px-1.5 py-0.2 rounded text-[10px] font-semibold bg-primary/10 text-primary border border-primary/20">
                  <ShieldCheck className="h-2.5 w-2.5" />
                  Verified
                </span>
              </div>
              <span className="text-[11px] text-muted-foreground font-medium -mt-0.5">
                BPO, KPO & Data Operations
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-150 relative py-1"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-primary text-primary-foreground px-4 py-2 text-xs sm:text-sm font-semibold hover:bg-primary/90 transition-all duration-150 shadow-xs"
            >
              <span>Request a Proposal</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>

            <button
              className="md:hidden text-foreground p-2 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden mt-2 bg-card border border-border rounded-xl p-5 flex flex-col gap-3 shadow-xl animate-fade-up">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-foreground/90 hover:text-primary font-medium py-2 px-3 rounded-lg hover:bg-muted/50 transition-colors text-sm"
              >
                {l.label}
              </Link>
            ))}

            <div className="pt-3 mt-1 border-t border-border space-y-2">
              <div className="text-xs text-muted-foreground px-3">
                Direct Desk: +91 8930071652
              </div>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="w-full flex items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground py-2.5 text-sm font-semibold text-center shadow-xs"
              >
                <span>Request a Proposal</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}