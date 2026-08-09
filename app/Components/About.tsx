"use client";
import React, { useEffect, useRef, useState } from "react";
import { SectionHeader } from "./SectionHeader";
import { Sparkles, Award, ShieldCheck, Mail } from "lucide-react";

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const stats = [
  { value: 99.5, suffix: "%", label: "Data Accuracy" },
  { value: 120, suffix: "+", label: "Global Clients" },
  { value: 850, suffix: "+", label: "Projects Delivered" },
  { value: 24, suffix: "/7", label: "Operations" },
];

const leaders = [
  {
    name: "Pardeep Singh",
    role: "Founder",
    badge: "Founder & Visionary",
    initials: "PS",
    accentGradient: "from-accent via-cyan-400 to-primary",
    bio: "Pioneering Velantrio's strategic vision and global expansion. Dedicated to building institutional trust, client-centric delivery frameworks, and next-generation outsourcing solutions across BPO and KPO verticals.",
    focus: ["Strategic Vision", "Enterprise Partnerships", "Global Scale"],
  },
  {
    name: "Ankit Sharma",
    role: "Chief Executive Officer (CEO)",
    badge: "Chief Executive Officer",
    initials: "AS",
    accentGradient: "from-primary via-purple-400 to-accent",
    bio: "Driving day-to-day operational execution, technology adoption, and client success. Leading cross-functional teams to deliver 24/7 high-accuracy operations, stringent SLA performance, and scalable service infrastructure.",
    focus: ["Operational Excellence", "Technology & Delivery", "Process Optimization"],

  },
];

function useCounter(target: number, active: boolean) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    const dur = 1600;
    let raf: number;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, active]);
  return v;
}

function Stat({ value, suffix, label, active }: { value: number; suffix: string; label: string; active: boolean }) {
  const v = useCounter(value, active);
  const display = value % 1 === 0 ? Math.round(v).toString() : v.toFixed(1);
  return (
    <div className="glass rounded-2xl p-6 text-center">
      <div className="text-4xl sm:text-5xl font-bold text-gradient">
        {display}
        {suffix}
      </div>
      <div className="mt-2 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setActive(true); },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className="relative py-16 sm:py-24 lg:py-32 overflow-hidden section-optimize">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-96 w-[600px] rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl animate-float" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              eyebrow="About Velantrio"
              align="left"
              title={<>Built for <span className="text-gradient">scale</span>, designed for trust.</>}
            />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Velantrio Group is a modern outsourcing partner combining BPO and KPO
              expertise with technology-driven workflows. We help fast-growing
              businesses and global enterprises offload critical operations
              without compromising quality, security, or speed.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              From tele-data validation to advanced research, our trained teams
              integrate seamlessly with your stack, becoming an extension of your
              in-house operation.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["ISO 27001", "GDPR Ready", "SOC 2", "PCI Aware"].map((b) => (
                <span key={b} className="glass rounded-full px-4 py-1.5 text-xs text-muted-foreground">
                  {b}
                </span>
              ))}
            </div>
          </div>

          <div ref={ref} className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <Stat key={s.label} {...s} active={active} />
            ))}
          </div>
        </div>

        {/* Leadership Team Showcase */}
        <div className="mt-20 sm:mt-28">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs text-muted-foreground mb-3">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              Executive Leadership
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
              Guided by <span className="text-gradient">Visionary Leaders</span>
            </h3>
            <p className="mt-3 text-muted-foreground text-sm sm:text-base">
              Meet the leadership driving Velantrio&apos;s commitment to operational excellence, client growth, and global trust.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {leaders.map((leader) => (
              <div
                key={leader.name}
                className="group relative glass rounded-3xl p-8 hover:border-accent/40 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-6">
                  {/* Initials Avatar */}
                  <div className={`relative h-16 w-16 rounded-2xl bg-gradient-to-br ${leader.accentGradient} p-0.5 shadow-lg shrink-0`}>
                    <div className="h-full w-full rounded-2xl bg-card/90 flex items-center justify-center backdrop-blur-md">
                      <span className="text-xl font-extrabold text-foreground tracking-tight">
                        {leader.initials}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="text-xl font-bold text-foreground tracking-tight">
                        {leader.name}
                      </h4>
                      <span className="glass rounded-full px-2.5 py-0.5 text-xs font-semibold text-accent border-accent/30">
                        {leader.badge}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-accent/90 mt-0.5">
                      {leader.role}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {leader.bio}
                </p>

                <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {leader.focus.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg bg-white/5 border border-white/10 px-2.5 py-1 text-xs text-muted-foreground font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
