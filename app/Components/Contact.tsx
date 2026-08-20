"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, FileText, Clock, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [service, setService] = useState("tele-validation");

  return (
    <section id="contact" className="relative py-12 sm:py-16 lg:py-20 border-b border-border bg-card">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Direct Operations Intake"
          title={<>Request a <span className="text-primary">Custom SLA Proposal</span></>}
          subtitle="Connect directly with our delivery center in Mohali. We respond with a customized proposal and SLA feasibility breakdown within 2 hours."
        />

        <div className="mt-14 grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Corporate Office & Verification Credentials */}
          <div className="lg:col-span-5 rounded-2xl border border-border bg-muted/30 p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <div className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-primary mb-1">
                <span>Verified Delivery Facility</span>
              </div>
              <h3 className="text-xl font-bold text-foreground tracking-tight">
                Velantrio Operations Hub
              </h3>
              <p className="text-xs text-muted-foreground mt-0.5">
                Sahibzada Ajit Singh Nagar (Mohali), Punjab Delivery Center
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <ContactInfoRow 
                icon={Mail} 
                label="Direct Operations Email" 
                value="info@velantrio.com" 
                href="mailto:info@velantrio.com"
              />
              <ContactInfoRow 
                icon={Phone} 
                label="Direct Desk Phone" 
                value="+91 8930071652" 
                href="tel:+918930071652"
              />
              <ContactInfoRow 
                icon={MapPin} 
                label="Registered Facility Address" 
                value="Plot No. I-36, Sector 83, JLPL Industrial Area, SAS Nagar (Mohali), Punjab 140306, India" 
              />
              <ContactInfoRow 
                icon={FileText} 
                label="Government Tax ID (GSTIN)" 
                value="03IHZPS5878A1ZK" 
              />
            </div>

            <div className="pt-4 border-t border-border space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-foreground">
                <Clock className="h-4 w-4 text-primary shrink-0" />
                <span>24/7/365 Continuous Production Hub</span>
              </div>
              <p className="text-xs text-muted-foreground pl-6 leading-relaxed">
                Sales & Solution Architects: Mon–Sat, 9:00 AM – 7:00 PM IST. Global production operations active 24 hours a day.
              </p>
            </div>

            <div className="pt-4 border-t border-border flex items-center gap-2 text-xs text-emerald-700 dark:text-emerald-400 font-medium">
              <ShieldCheck className="h-4 w-4 shrink-0" />
              <span>Standard Mutual NDA executed upon inquiry</span>
            </div>
          </div>

          {/* Structured Intake Form */}
          <div className="lg:col-span-7 rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs">
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="space-y-5"
            >
              <div>
                <label className="block text-xs font-bold text-foreground mb-2">
                  Select Primary Service of Interest
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    { id: "tele-validation", label: "Tele Data Validation" },
                    { id: "voice-bpo", label: "Voice Operations" },
                    { id: "non-voice", label: "Non-Voice & Chat" },
                    { id: "kpo-research", label: "KPO & Research" },
                    { id: "back-office", label: "Back Office & Loans" },
                    { id: "custom", label: "Custom Solution" },
                  ].map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setService(s.id)}
                      className={`text-left px-3 py-2.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                        service === s.id
                          ? "border-primary bg-primary/10 text-primary font-bold shadow-2xs"
                          : "border-border bg-card text-muted-foreground hover:bg-muted"
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <FormField label="Full Name" name="name" placeholder="Velantrio Ventures" required />
                <FormField label="Corporate Work Email" name="email" type="email" placeholder="info@velantrio.com" required />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <FormField label="Direct Phone Number" name="phone" placeholder="Enter Phone Number" required />
                <FormField label="Estimated Monthly Volume" name="volume" placeholder="e.g. 50,000 records / 15 seats" />
              </div>

              <div>
                <label className="block text-xs font-bold text-foreground mb-1.5">
                  Project Scope & Specific Accuracy Requirements
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe your current bottlenecks, target turnaround, required systems (Salesforce, Zendesk, etc.), and timeline…"
                  className="w-full rounded-lg border border-border bg-muted/30 px-3.5 py-2.5 text-xs sm:text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition resize-none placeholder:text-muted-foreground/60"
                />
              </div>

              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>All shared data is protected under strict mutual confidentiality protocols.</span>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground py-3.5 px-6 text-sm font-semibold hover:bg-primary/90 transition-colors shadow-xs cursor-pointer"
              >
                {sent ? (
                  <span className="flex items-center gap-2 text-emerald-100 font-bold">
                    <CheckCircle2 className="h-4 w-4" />
                    Inquiry Received — Delivery Team will respond within 2 hours
                  </span>
                ) : (
                  <>
                    <span>Submit Inquiry & Request Proposal</span>
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

function FormField({ 
  label, 
  name, 
  type = "text", 
  placeholder,
  required = false
}: { 
  label: string; 
  name: string; 
  type?: string; 
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs font-bold text-foreground mb-1.5">
        {label} {required && <span className="text-primary">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-border bg-muted/30 px-3.5 py-2 text-xs sm:text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition placeholder:text-muted-foreground/60"
      />
    </div>
  );
}

function ContactInfoRow({ 
  icon: Icon, 
  label, 
  value, 
  href 
}: { 
  icon: React.ComponentType<{ className?: string }>; 
  label: string; 
  value: string; 
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-3">
      <div className="h-8 w-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 mt-0.5">
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0">
        <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">{label}</div>
        <div className="text-xs font-medium text-foreground mt-0.5 break-words leading-relaxed">{value}</div>
      </div>
    </div>
  );

  return href ? (
    <a href={href} className="block hover:opacity-80 transition-opacity">
      {content}
    </a>
  ) : (
    content
  );
}
