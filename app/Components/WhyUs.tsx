import {
  Workflow,
  Database,
  TrendingDown,
  ShieldCheck,
  Landmark,
  CheckCircle2,
  Users2,
  Check,
  X
} from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const features = [
  {
    icon: Workflow,
    badge: "Transition Protocol",
    title: "Zero-Disruption Migration Blueprint",
    desc: "A proven 4-stage migration protocol (Discovery, Parallel Pilot, Quality Calibration, Full Go-Live) guaranteeing zero downtime for critical workflows."
  },
  {
    icon: TrendingDown,
    badge: "Cost Reduction",
    title: "40–60% Direct Operational Savings",
    desc: "Significantly lower your overhead while retaining final decision authority, audit rights, and real-time SLA transparency."
  },
  {
    icon: ShieldCheck,
    badge: "Information Security",
    title: "Governance",
    desc: "Strict data confidentiality, clean-desk policy, role-based access control, and complete alignment with GDPR and international data standards."
  },
  {
    icon: Database,
    badge: "Quality Benchmark",
    title: "95.4% Data Accuracy SLA",
    desc: "Dual-layer human validation combined with verification algorithms ensures invalid records and fraudulent entries are filtered out."
  },
  {
    icon: Landmark,
    badge: "Accountability",
    title: "Dedicated Operational Pods",
    desc: "Named Account Directors and daily QA reporting ensure consistent alignment with your operational KPIs and organizational milestones."
  },
  {
    icon: Users2,
    badge: "Delivery Facility",
    title: "Skilled Domain Talent in Mohali",
    desc: "Direct access to educated, fluent professionals trained specifically in international BPO, financial analysis, and customer care."
  },
];

const comparisons = [
  {
    metric: "Onboarding & Ramp-Up Time",
    inHouse: "2 to 4 months (recruiting, training, hardware)",
    velantrio: "5 to 14 business days (pre-trained dedicated pods)",
  },
  {
    metric: "Data Accuracy & QA SLA",
    inHouse: "Variable (dependent on internal turnover)",
    velantrio: "Contractually guaranteed 95.4% multi-stage QA",
  },
  {
    metric: "Cost & Overhead Structure",
    inHouse: "High fixed salaries, real estate, hardware & benefits",
    velantrio: "40–60% lower all-inclusive scalable monthly rate",
  },
  {
    metric: "Operational Coverage",
    inHouse: "Standard 8-hour single shift",
    velantrio: "24/7/365 continuous multi-shift production",
  },
 
  {
    metric: "Scale Elasticity",
    inHouse: "Slow, expensive hiring or painful layoffs",
    velantrio: "Scale up or down in 48 hours without friction",
  },
];

export function WhyUs() {
  return (
    <section id="why" className="relative py-12 sm:py-16 lg:py-20 border-b border-border bg-muted/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="The Velantrio Advantage"
          title={<>Institutional Reliability. <span className="text-primary">Measurable ROI.</span></>}
          subtitle="Why COOs, Operations Directors, and Founders choose Velantrio over expensive in-house overhead or generic agencies."
        />

        {/* 6 Key Pillars Grid */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-border bg-card p-6 sm:p-7 shadow-xs hover:border-primary/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-muted border border-border text-muted-foreground">
                    {f.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-foreground tracking-tight">
                  {f.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Side-by-Side Comparison Table */}
        <div className="mt-16 sm:mt-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-bold tracking-tight text-foreground">
              In-House Operations vs. <span className="text-primary">Velantrio Managed Pods</span>
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
              A transparent breakdown of how our delivery model eliminates infrastructure drag and operational risk.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card shadow-xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="py-4 px-5 sm:px-6 font-bold text-foreground w-1/3">Operational Dimension</th>
                    <th className="py-4 px-5 sm:px-6 font-semibold text-muted-foreground w-1/3">Traditional In-House Ops</th>
                    <th className="py-4 px-5 sm:px-6 font-bold text-primary bg-primary/5 w-1/3">Velantrio Managed Pods</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {comparisons.map((row) => (
                    <tr key={row.metric} className="hover:bg-muted/20 transition-colors">
                      <td className="py-4 px-5 sm:px-6 font-semibold text-foreground">
                        {row.metric}
                      </td>
                      <td className="py-4 px-5 sm:px-6 text-muted-foreground flex items-center gap-2">
                        <X className="h-4 w-4 text-rose-500 shrink-0" />
                        <span>{row.inHouse}</span>
                      </td>
                      <td className="py-4 px-5 sm:px-6 text-foreground font-medium bg-primary/5">
                        <div className="flex items-center gap-2 text-primary font-semibold">
                          <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                          <span>{row.velantrio}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
