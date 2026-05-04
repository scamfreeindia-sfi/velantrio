"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";


export function Hero() {
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frameId: number;
    let ticking = false;

    const onMove = (e: MouseEvent) => {
      if (!ticking) {
        frameId = requestAnimationFrame(() => {
          if (orbRef.current) {
            const x = (e.clientX / window.innerWidth - 0.5) * 30;
            const y = (e.clientY / window.innerHeight - 0.5) * 30;
            orbRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pt-48 lg:pb-32 overflow-hidden hero-bg">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      {/* Floating orbs */}
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-primary/30 blur-[80px] animate-float will-change-transform" />
      <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-accent/20 blur-[100px] animate-float-slow will-change-transform" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-muted-foreground mb-6">
            <span className="h-2 w-2 rounded-full bg-accent animate-glow-pulse" />
            Trusted by global enterprises & startups
          </div>
          <h1 className="text-[2.5rem] leading-[1.05] sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
            Smart Outsourcing{" "}
            <span className="text-gradient">Solutions</span> for Growing Businesses
          </h1>
          <p className="mt-5 sm:mt-6 text-base sm:text-lg text-muted-foreground max-w-xl">
            Tele Data Validation · BPO · KPO · Back Office Support — engineered
            for accuracy, speed, and scale.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground px-6 py-3.5 font-medium shadow-[var(--shadow-glow)] hover:scale-[1.03] transition-transform"
            >
              Get Started
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 glass rounded-xl px-6 py-3.5 font-medium hover:border-accent/40 transition-colors"
            >
              Request a Quote
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 sm:gap-6 max-w-md">
            {[
              { v: "99.5%", l: "Accuracy" },
              { v: "120+", l: "Clients" },
              { v: "24/7", l: "Support" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-xl sm:text-2xl font-bold text-gradient">{s.v}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 3D illustration */}
        <div className="relative h-[500px] hidden lg:block will-change-transform" ref={orbRef}>
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

import { memo } from "react";

const HeroVisual = memo(function HeroVisual() {
  return (
    <div className="relative w-full h-full">
      {/* Center sphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative h-72 w-72">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-deep-blue to-background animate-glow-pulse shadow-[var(--shadow-glow)]" />
          <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-accent/40 via-transparent to-primary/40 blur-md" />
          <div className="absolute inset-0 rounded-full border border-white/20" />
          <div className="absolute inset-8 rounded-full border border-accent/30" />
          {/* orbital rings */}
          <div className="absolute -inset-12 rounded-full border border-white/10 animate-spin-slow" />
          <div className="absolute -inset-24 rounded-full border border-accent/20 animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "25s" }} />
        </div>
      </div>

      {/* Floating cards */}
      <FloatingChip className="top-4 left-4 animate-float" icon="📊" label="Data Validation" value="99.8%" />
      <FloatingChip className="top-10 right-2 animate-float-slow" icon="🎧" label="Voice Process" value="24/7" />
      <FloatingChip className="bottom-20 left-0 animate-float" icon="🔒" label="Secure" value="ISO 27001" />
      <FloatingChip className="bottom-4 right-8 animate-float-slow" icon="⚡" label="Turnaround" value="< 2h" />

      {/* Connecting lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 500" fill="none">
        <defs>
          <linearGradient id="line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.85 0.16 200)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="oklch(0.62 0.22 295)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M80,80 Q200,250 80,420" stroke="url(#line)" strokeWidth="1" />
        <path d="M320,80 Q200,250 320,420" stroke="url(#line)" strokeWidth="1" />
      </svg>
    </div>
  );
});

const FloatingChip = memo(function FloatingChip({ className, icon, label, value }: { className?: string; icon: string; label: string; value: string }) {
  return (
    <div className={`absolute glass rounded-2xl p-3 pr-4 flex items-center gap-3 shadow-[var(--shadow-card)] ${className}`}>
      <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center text-lg">
        {icon}
      </div>
      <div>
        <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="text-sm font-semibold">{value}</div>
      </div>
    </div>
  );
});
