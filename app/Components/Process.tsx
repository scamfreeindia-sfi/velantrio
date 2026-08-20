import { Inbox, Cpu, ShieldCheck, Send, CheckCircle2, ArrowRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const steps = [
  { 
    step: "01",
    phase: "Phase 1: Week 1",
    icon: Inbox, 
    title: "Discovery & Security Protocol", 
    desc: "We analyze your existing workflows, establish strict SLA parameters, sign mutual NDAs, and configure encrypted API/SFTP data intake channels.",
    highlights: ["SLA & KPI benchmark definition", "Encrypted 256-bit data pipelines", "Mutual NDA & compliance sign-off"]
  },
  { 
    step: "02",
    phase: "Phase 2: Week 2",
    icon: Cpu, 
    title: "Parallel Pilot & QA Calibration", 
    desc: "A controlled pilot phase is executed alongside your team to calibrate accuracy standards, benchmark turnaround, and train dedicated analysts.",
    highlights: ["100% QA audit on pilot records", "Workflow & error-rate calibration", "Zero disruption to existing ops"]
  },
  { 
    step: "03",
    phase: "Phase 3: Ongoing",
    icon: ShieldCheck, 
    title: "Full-Scale 24/7 Operations", 
    desc: "Live production shifts to our Mohali delivery hub with automated pipelines and dual-layer human verification running seamlessly around the clock.",
    highlights: ["24/7/365 active shift coverage", "Dual analyst verification loop", "Real-time ticket & lead ingestion"]
  },
  { 
    step: "04",
    phase: "Phase 4: Governance",
    icon: Send, 
    title: "SLA Delivery & Reporting", 
    desc: "Outputs are delivered on schedule with daily performance reports, statistical QA audits, and regular executive governance reviews.",
    highlights: ["Daily accuracy scorecards", "Dedicated Account Manager", "Continuous efficiency optimization"]
  },
];

export function Process() {
  return (
    <section id="process" className="relative py-12 sm:py-16 lg:py-20 border-b border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Operational Blueprint"
          title={<>A Structured, <span className="text-primary">Zero-Disruption</span> Onboarding</>}
          subtitle="How we calibrate, onboard, and execute your operations with institutional precision and zero downtime."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div
              key={s.step}
              className="rounded-2xl border border-border bg-muted/20 p-6 sm:p-7 shadow-xs flex flex-col justify-between hover:border-primary/40 hover:bg-card hover:shadow-md transition-all duration-200"
            >
              <div>
                {/* Header with step number & phase */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] font-mono font-bold text-muted-foreground">{s.phase}</span>
                    <span className="text-xs font-bold font-mono text-primary px-2 py-0.5 rounded bg-primary/10 border border-primary/20">
                      {s.step}
                    </span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-foreground tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>

                <ul className="mt-4 pt-4 border-t border-border space-y-2">
                  {s.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-xs text-foreground">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                      <span>{h}</span>
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
