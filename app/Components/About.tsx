"use client";

import React, { useEffect, useRef, useState } from "react";
import { SectionHeader } from "./SectionHeader";
import { 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  UserCheck2, 
  Building2, 
  Wifi, 
  Lock, 
  Clock, 
  MapPin,
  FileCheck
} from "lucide-react";

const stats = [
  { value: 95.4, suffix: "%", label: "Data Accuracy SLA", sub: "Multi-stage verification" },
  { value: 140, suffix: "+", label: "Global Clients", sub: "US, UK, EU & India" },
  { value: 450, suffix: "+", label: "Projects Delivered", sub: "Zero SLA breaches" },
  { value: 24, suffix: "/7", label: "Active Operations", sub: "Round-the-clock hub" },
];

const leaders = [
  {
    name: "Pardeep Singh",
    role: "Founder",
    badge: "Strategic Leadership",
    initials: "PS",
    bio: "Driving Velantrio's strategic expansion, institutional client partnerships, and delivery frameworks. Committed to high-trust governance, data security, and long-term client value across BPO and KPO verticals.",
    focus: ["Enterprise Partnerships", "Strategic Expansion", "Institutional Trust"],
    linkedin: "https://www.linkedin.com/company/143062273/admin/dashboard/"
  },
  {
    name: "Ankit Sharma",
    role: "Co-Founder & CEO",
    badge: "Operations & Delivery",
    initials: "AS",
    bio: "Spearheading day-to-day operational execution, technology integration, and client SLA compliance. Leading cross-functional teams in Mohali to maintain rigorous 99.8%+ accuracy and 24/7 delivery standards.",
    focus: ["Operational Governance", "Quality Assurance & QA", "SLA Management"],
    linkedin: "https://www.linkedin.com/company/143062273/admin/dashboard/"
  },
];

function useCounter(target: number, active: boolean) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    const dur = 1400;
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

function StatCard({ value, suffix, label, sub, active }: { value: number; suffix: string; label: string; sub: string; active: boolean }) {
  const v = useCounter(value, active);
  const display = value % 1 === 0 ? Math.round(v).toString() : v.toFixed(2);
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-xs flex flex-col justify-between">
      <div>
        <div className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
          {display}{suffix}
        </div>
        <div className="mt-1.5 text-sm font-semibold text-foreground/90">{label}</div>
        <div className="text-xs text-muted-foreground mt-0.5">{sub}</div>
      </div>
    </div>
  );
}

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setActive(true); },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className="relative py-12 sm:py-16 lg:py-20 border-b border-border bg-card">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* Top Split Section: Story + Stats */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-5">
            <SectionHeader
              eyebrow="Corporate Overview"
              align="left"
              title={<>Built for Scale. <span className="text-primary">Engineered for Trust.</span></>}
            />
            <p className="text-base text-muted-foreground leading-relaxed">
              Velantrio is an enterprise outsourcing and data operations company based in 
              Sahibzada Ajit Singh Nagar (Mohali) & Chandigarh, India. We specialize in high-accuracy 
              tele-data validation, BPO voice/non-voice workflows, and KPO research services for global organizations.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Our core operating philosophy is grounded in transparency, SLA discipline, and 
              stringent data protection. We treat every client record as our own competitive advantage.
            </p>

            <div className="pt-2 flex flex-wrap gap-2.5">
              {["ISO/IEC 27001:2022", "SOC 2 Type II Aligned", "GDPR Ready", "Strict NDA Protocols"].map((b) => (
                <span 
                  key={b} 
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-muted/60 px-3 py-1.5 text-xs font-semibold text-foreground/85 shadow-2xs"
                >
                  <ShieldCheck className="h-3.5 w-3.5 text-primary shrink-0" />
                  {b}
                </span>
              ))}
            </div>
          </div>

          <div ref={ref} className="lg:col-span-6 grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <StatCard key={s.label} {...s} active={active} />
            ))}
          </div>
        </div>

        {/* Infrastructure & Facility Showcase */}
        <div className="mt-16 sm:mt-20 rounded-2xl border border-border bg-muted/30 p-6 sm:p-8">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 space-y-3">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary">
                <Building2 className="h-4 w-4" />
                <span>Primary Delivery Hub</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                Mohali Delivery Infrastructure
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Located in Sector 83, JLPL Industrial Area, SAS Nagar (Mohali), Punjab. Built with tier-1 data security, power redundancies, and 24/7 access control.
              </p>
              <div className="text-xs font-mono text-muted-foreground">
                GSTIN: 03IHZPS5878A1ZK
              </div>
            </div>

            <div className="lg:col-span-8 grid sm:grid-cols-3 gap-4">
              <div className="rounded-xl border border-border bg-card p-4 shadow-2xs">
                <Wifi className="h-5 w-5 text-primary mb-2" />
                <div className="text-xs font-bold text-foreground">Dual Gigabit Fiber</div>
                <div className="text-[11px] text-muted-foreground mt-0.5">Redundant carrier links with 99.9% uptime SLA</div>
              </div>

              <div className="rounded-xl border border-border bg-card p-4 shadow-2xs">
                <Lock className="h-5 w-5 text-primary mb-2" />
                <div className="text-xs font-bold text-foreground">Clean-Desk & Biometrics</div>
                <div className="text-[11px] text-muted-foreground mt-0.5">Zero external recording devices allowed on the floor</div>
              </div>

              <div className="rounded-xl border border-border bg-card p-4 shadow-2xs">
                <Clock className="h-5 w-5 text-primary mb-2" />
                <div className="text-xs font-bold text-foreground">24/7/365 Production</div>
                <div className="text-[11px] text-muted-foreground mt-0.5">Continuous dual-shift supervisor coverage</div>
              </div>
            </div>
          </div>
        </div>

        {/* Executive Leadership Showcase */}
        <div className="mt-20 sm:mt-24 pt-16 border-t border-border">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1 text-xs font-semibold text-foreground/80 shadow-xs mb-3">
              <UserCheck2 className="h-3.5 w-3.5 text-primary" />
              Executive Governance
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
              Guided by <span className="text-primary">Experienced Leadership</span>
            </h3>
            <p className="mt-3 text-muted-foreground text-sm sm:text-base">
              Meet the executive leadership ensuring operational discipline, client success, and strict quality governance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {leaders.map((leader) => (
              <div
                key={leader.name}
                className="rounded-2xl border border-border bg-card p-7 sm:p-8 shadow-xs hover:border-primary/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="h-14 w-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-lg font-bold text-primary shrink-0">
                      {leader.initials}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-lg font-bold text-foreground tracking-tight">
                          {leader.name}
                        </h4>
                        <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-muted border border-border text-foreground/80">
                          {leader.badge}
                        </span>
                      </div>
                      <p className="text-xs font-medium text-primary mt-0.5">
                        {leader.role}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {leader.bio}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-border flex flex-wrap gap-2">
                  {leader.focus.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-muted/70 border border-border px-2.5 py-1 text-xs text-muted-foreground font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
