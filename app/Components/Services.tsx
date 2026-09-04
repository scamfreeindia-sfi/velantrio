"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
  Phone,
  Headphones,
  MessageSquare,
  Database,
  BarChart3,
  Banknote,
  ShieldCheck,
  Code2,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Search,
  Check,
  XCircle,
  FileCheck,
  Truck
} from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const specializedServices = [
  {
    id: "kpo-research",
    icon: BarChart3,
    title: "KPO & Market Research",
    category: "Knowledge Services",
    sla: "Analyst-Grade Output",
    desc: "Rigorous financial modeling, quantitative data aggregation, market research, competitor intelligence, and specialized industry briefs.",
    points: ["Secondary market research & intelligence", "Financial spreading & quantitative modeling", "Regulatory compliance tracking"],
  },
  {
    id: "voice-bpo",
    icon: Phone,
    title: "Inbound & Outbound Voice BPO",
    category: "Customer Operations",
    sla: "24/7/365 Active",
    desc: "Trained voice professionals managing customer inquiries, escalations, lead verification, and appointment setting.",
    points: ["Native fluency across global accents", "Omnichannel CRM integration", "100% call recording & QA scoring"],
  },
  {
    id: "non-voice-support",
    icon: MessageSquare,
    title: "Non-Voice & Chat Support",
    category: "Customer Operations",
    sla: "< 15 Min First Response",
    desc: "High-speed email, live chat, and ticketing support across Zendesk, Freshdesk, Salesforce, and custom CRM systems.",
    points: ["Multi-tier technical assistance", "High-volume ticket resolution", "Detailed CSAT & SLA metrics"],
  },
  {
    id: "loan-mortgage",
    icon: Banknote,
    title: "Loan & Mortgage Processing",
    category: "Financial Back Office",
    sla: "Fast-Track Turnaround",
    desc: "End-to-end documentation intake, identity verification, income scrubbing, and title review to speed up underwriting.",
    points: ["Document classification & OCR review", "Underwriting data preparation", "Strict PCI & financial compliance"],
  },
  {
    id: "custom-software",
    icon: Code2,
    title: "Custom Software Solutions",
    category: "Technology",
    sla: "Full-Stack Agile",
    desc: "Enterprise web platforms, internal automation workflows, portal dashboards, and API integrations built securely.",
    points: ["PHP Laravel, Node.js, Python & Django DRF", "Full-stack web & REST API development", "Automated data pipelines & enterprise security"],
  },
  {
    id: "logistics",
    icon: Truck,
    title: "Logistics Support",
    category: "Logistics & Operations",
    sla: "24/7 Tracking & Support",
    desc: "End-to-end freight tracking, dispatch management, bill of lading validation, and inventory back-office support.",
    points: [
      "Freight tracking & real-time dispatch",
      "Bill of Lading & document processing",
    ],
  },
];

export function Services() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);

  return (
    <section id="services" className="relative py-12 sm:py-16 lg:py-20 border-b border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Specialized Capabilities"
          title={<>Institutional <span className="text-primary">BPO, KPO & Data</span> Solutions</>}
          subtitle="Delivering guaranteed accuracy, SLA discipline, and transparent operational governance from our Mohali & Chandigarh delivery center."
        />

        {/* Featured Flagship Hero Card: Tele Data Validation */}
        <div id="tele-data-validation" className="mt-14 scroll-mt-28 rounded-2xl border border-primary/30 bg-muted/30 p-6 sm:p-10 shadow-xs">
          <div className="grid lg:grid-cols-12 gap-8 items-center">

            {/* Left Info */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-primary text-primary-foreground">
                  Flagship Capability
                </span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                  95.4% Accuracy SLA
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                Enterprise Tele Data Validation & BPO Solutions
              </h3>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                End-to-end voice & non-voice customer support, financial research, data validation, and back-office operations tailored for high-growth businesses and global enterprises.
                We combine domain-trained specialists with real-time QA governance to guarantee 99.8%+ SLA compliance.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                {[
                  "24/7 Voice & Omnichannel Customer Support",
                  "KPO Financial Modeling & Market Research",
                  "High-Accuracy Tele-Data Scrubbing & Validation",
                  "Seamless CRM Integration & Audit Governance",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs font-semibold text-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary text-primary-foreground px-5 py-2.5 text-xs sm:text-sm font-semibold hover:bg-primary/90 transition-colors shadow-2xs"
                >
                  <span>Explore BPO & KPO Solutions</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Interactive Mockup Console */}
            <div className="lg:col-span-5">
              <div className="rounded-xl border border-border bg-card p-4 sm:p-5 shadow-xs space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-border text-xs font-bold text-foreground">
                  <div className="flex items-center gap-2">
                    <FileCheck className="h-4 w-4 text-primary" />
                    <span>Live Scrubbing Stream</span>
                  </div>
                  <span className="text-[10px] text-emerald-600 font-mono font-bold">14,200 / hr</span>
                </div>

                {/* Sample Record 1: Cleaned */}
                <div className="p-3 rounded-lg bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/40 text-xs">
                  <div className="flex items-center justify-between font-mono text-[11px]">
                    <span className="font-bold text-foreground">+1 (415) 890-2134</span>
                    <span className="text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1">
                      <Check className="h-3 w-3" /> Validated (99.9%)
                    </span>
                  </div>
                  <div className="text-[11px] text-muted-foreground mt-1 flex items-center justify-between">
                    <span>Aarav Mehta · FinPath Ltd</span>
                    <span className="text-[10px]">Carrier: Tier-1 US</span>
                  </div>
                </div>

                {/* Sample Record 2: Invalid filtered */}
                <div className="p-3 rounded-lg bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-800/40 text-xs">
                  <div className="flex items-center justify-between font-mono text-[11px]">
                    <span className="font-bold text-foreground">+1 (555) 019-8231</span>
                    <span className="text-rose-600 dark:text-rose-400 font-bold flex items-center gap-1">
                      <XCircle className="h-3 w-3" /> Disconnected
                    </span>
                  </div>
                  <div className="text-[11px] text-muted-foreground mt-1 flex items-center justify-between">
                    <span>Auto-Filtered (Zero Cost)</span>
                    <span className="text-[10px]">Flagged Fraudulent</span>
                  </div>
                </div>

                {/* Summary bar */}
                <div className="pt-2 flex items-center justify-between text-[11px] text-muted-foreground">
                  <span>Batch Integrity: <strong className="text-foreground">99.88%</strong></span>
                  <span>Latency: <strong className="text-foreground">12 min</strong></span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 6 Specialized Capabilities Grid */}
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {specializedServices.map((service) => (
            <div
              key={service.title}
              id={service.id}
              className="scroll-mt-28 rounded-2xl border border-border bg-card p-6 sm:p-7 shadow-xs hover:border-primary/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Header line with Category & SLA */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-bold tracking-wider uppercase text-muted-foreground">
                    {service.category}
                  </span>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-muted border border-border text-foreground">
                    {service.sla}
                  </span>
                </div>

                {/* Icon & Title */}
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground tracking-tight">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mt-2">
                  {service.desc}
                </p>

                {/* Key feature points */}
                <ul className="mt-4 pt-4 border-t border-border space-y-2">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-xs text-foreground">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
