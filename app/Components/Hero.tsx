"use client";

import Link from "next/link";
import {
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  FileCheck2,
  Database,
  Lock,
  Server,
  Zap,
  Check,
  Building,
  Award,
  Clock,
  Sparkles
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-28 pb-8 sm:pt-32 sm:pb-12 lg:pt-36 lg:pb-12 overflow-hidden border-b border-border bg-gradient-to-b from-card via-background to-muted/20">

      {/* Background architectural grid */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(to right, #0f172a 1px, transparent 1px), linear-gradient(to bottom, #0f172a 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          maskImage: "radial-gradient(ellipse at 50% 20%, black 40%, transparent 80%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">

        {/* Main 12-Column Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Value Proposition & Structured Metrics */}
          <div className="lg:col-span-7 space-y-6">

            {/* Live Operational Status Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-foreground font-bold">24/7 Operations Hub</span>
              <span className="text-border">|</span>
              <span className="text-muted-foreground font-medium">Mohali & Chandigarh Delivery Center</span>
            </div>

            {/* Structured Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-foreground leading-[1.12]">
              Institutional <span className="text-primary">BPO, KPO & Software Solutions</span> Built for Scale
            </h1>

            {/* Clear, Grounded Subtitle */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              High-accuracy Tele-Data Validation, Voice & Non-Voice Support, KPO Research, and Back-Office Operations.
              We combine robust workflow automation with trained human analysts to deliver
              guaranteed 99.8% accuracy and 40–60% operational savings.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground px-6 py-3.5 text-sm font-semibold hover:bg-primary/90 transition-colors shadow-xs"
              >
                <span>Request a Custom Proposal</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card hover:bg-muted/60 text-foreground px-6 py-3.5 text-sm font-semibold transition-colors shadow-2xs"
              >
                <span>View Proven Case Studies</span>
              </Link>
            </div>

            {/* Structured Metrics Bar */}
            <div className="pt-6 border-t border-border">
              <div className="grid grid-cols-3 rounded-xl border border-border bg-card divide-x divide-border shadow-xs overflow-hidden">
                <div className="p-3.5 sm:p-4 text-center">
                  <div className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">95.4%</div>
                  <div className="text-[11px] text-muted-foreground font-medium mt-0.5">Validation Accuracy</div>
                </div>
                <div className="p-3.5 sm:p-4 text-center">
                  <div className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">40–60%</div>
                  <div className="text-[11px] text-muted-foreground font-medium mt-0.5">Direct Cost Savings</div>
                </div>
                <div className="p-3.5 sm:p-4 text-center">
                  <div className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">&lt; 2h</div>
                  <div className="text-[11px] text-muted-foreground font-medium mt-0.5">SLA Response</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Structured Enterprise Operations Console */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-border bg-card shadow-sm p-5 sm:p-6">

              {/* Console Header */}
              <div className="flex items-center justify-between pb-4 border-b border-border">
                <div className="flex items-center gap-2.5">
                  <div className="h-8 w-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                    <Server className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-foreground">Delivery Pipeline Console</div>
                    <div className="text-[10px] text-muted-foreground font-mono">Cluster SAS-01 · Active SLA</div>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                  95.4% Target Met
                </span>
              </div>

              {/* 4-Stage Structured Operational Flow */}
              <div className="mt-4 space-y-2.5">

                {/* Step 1 */}
                <div className="p-3 rounded-xl bg-muted/40 border border-border/80 flex items-start gap-3">
                  <div className="h-7 w-7 rounded-md bg-card border border-border flex items-center justify-center shrink-0 mt-0.5 text-primary">
                    <Database className="h-3.5 w-3.5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-bold text-foreground">1. Secure Ingestion</div>
                      <span className="text-[10px] text-muted-foreground font-mono">256-bit TLS</span>
                    </div>
                    <p className="text-[11px] text-muted-foreground mt-0.5">Automated intake via API/SFTP from client CRM & records</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="p-3 rounded-xl bg-muted/40 border border-border/80 flex items-start gap-3">
                  <div className="h-7 w-7 rounded-md bg-card border border-border flex items-center justify-center shrink-0 mt-0.5 text-primary">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-bold text-foreground">2. Tele-Validation & Scrubbing</div>
                      <span className="text-[10px] text-emerald-600 font-mono font-bold">99.9% Clean</span>
                    </div>
                    <p className="text-[11px] text-muted-foreground mt-0.5">Phone, contact, address & tax validation against verified databases</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="p-3 rounded-xl bg-muted/40 border border-border/80 flex items-start gap-3">
                  <div className="h-7 w-7 rounded-md bg-card border border-border flex items-center justify-center shrink-0 mt-0.5 text-primary">
                    <ShieldCheck className="h-3.5 w-3.5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-bold text-foreground">3. Dual Human QA Audit</div>
                      <span className="text-[10px] text-muted-foreground font-mono">Senior Lead QA</span>
                    </div>
                    <p className="text-[11px] text-muted-foreground mt-0.5">Statistical sampling & manual spot verification by domain experts</p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="p-3 rounded-xl bg-primary/5 border border-primary/20 flex items-start gap-3">
                  <div className="h-7 w-7 rounded-md bg-primary text-primary-foreground flex items-center justify-center shrink-0 mt-0.5">
                    <FileCheck2 className="h-3.5 w-3.5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-bold text-foreground">4. SLA Delivery & Reporting</div>
                      <span className="text-[10px] text-primary font-bold">On Schedule</span>
                    </div>
                    <p className="text-[11px] text-muted-foreground mt-0.5">Structured delivery with complete audit trail & accuracy guarantee</p>
                  </div>
                </div>

              </div>

              {/* Security Standards Footer */}
              <div className="mt-4 pt-3 border-t border-border flex items-center justify-between text-[11px] text-muted-foreground">
                <div className="flex items-center gap-1.5 font-medium text-foreground">
                  <Lock className="h-3.5 w-3.5 text-primary" />
                  <span>Enterprise Security Protocols</span>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[10px]">
                  <span className="px-1.5 py-0.5 rounded bg-muted border border-border">GDPR</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Structured 2-Column Enterprise Trust Strip */}
        <div className="mt-8 pt-6 border-t border-border grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
         
          <div className="rounded-xl border border-border bg-card p-4 shadow-2xs flex items-center gap-3.5">
            <div className="h-10 w-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
              <Building className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-foreground">Mohali Delivery Hub</div>
              <div className="text-[11px] text-muted-foreground">Dedicated Facility</div>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-4 shadow-2xs flex items-center gap-3.5">
            <div className="h-10 w-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
              <Clock className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-foreground">&lt; 2-Hour Response SLA</div>
              <div className="text-[11px] text-muted-foreground">Direct Governance</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
