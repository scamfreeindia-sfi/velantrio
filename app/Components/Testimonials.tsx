"use client";

import { SectionHeader } from "./SectionHeader";
import { Star, CheckCircle2 } from "lucide-react";

const testimonials = [
  {
    quote: "Velantrio transformed our lead ingestion pipeline. Their tele-validation team filtered out invalid entries and reduced our underwriting cycle time by 48% within the first 60 days.",
    metric: "48% Faster Cycle Time",
    name: "Aarav Mehta",
    role: "Head of Operations",
    company: "FinPath Financial Solutions",
    location: "London, UK",
    category: "Fintech & Lending"
  },
  {
    quote: "Onboarding was remarkably structured. Their KPO team provides equity research briefs and financial data scrubbing that consistently meet institutional accuracy standards.",
    metric: "99.9% Data Accuracy",
    name: "Sophia Chen",
    role: "VP of Strategic Operations",
    company: "NorthBay Capital Group",
    location: "San Francisco, CA",
    category: "KPO & Capital Markets"
  },
  {
    quote: "Reliable, transparent, and proactive. Their 24/7 omnichannel customer support team improved our first-contact resolution by 22% with zero downtime during seasonal spikes.",
    metric: "+22% FCR & 24/7 Uptime",
    name: "Daniel Okafor",
    role: "Chief Operating Officer",
    company: "Brightcart Global Logistics",
    location: "Toronto, Canada",
    category: "E-Commerce & Logistics"
  },
];

export function Testimonials() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 border-b border-border bg-card">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Client Endorsements"
          title={<>Proven Impact for <span className="text-primary">Global Enterprises</span></>}
          subtitle="How enterprise operations leaders scale capacity and reduce overhead with Velantrio."
        />

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-border bg-muted/20 p-6 sm:p-7 shadow-xs flex flex-col justify-between hover:border-primary/40 hover:bg-card hover:shadow-md transition-all duration-200"
            >
              <div>
                {/* Metric Badge & Stars */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20">
                    <CheckCircle2 className="h-3 w-3" />
                    {t.metric}
                  </span>
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Client Info */}
              <div className="mt-6 pt-4 border-t border-border flex items-center gap-3.5">
                <div className="h-10 w-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-bold text-sm text-primary shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <div className="font-bold text-sm text-foreground tracking-tight truncate">
                    {t.name}
                  </div>
                  <div className="text-xs text-muted-foreground truncate">
                    {t.role}, {t.company}
                  </div>
                  <div className="text-[11px] text-muted-foreground/80 font-mono mt-0.5">
                    {t.location} · {t.category}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
