import { Target, Zap, DollarSign, Users, ShieldCheck, Globe2 } from "lucide-react";
import { SectionHeader } from "./Services";

const features = [
  { icon: Target, title: "High Accuracy", desc: "Multi-stage QC ensures 99%+ accuracy across deliverables." },
  { icon: Zap, title: "Fast Turnaround", desc: "Optimized workflows for same-day and 24h SLAs." },
  { icon: DollarSign, title: "Cost Effective", desc: "Up to 60% savings vs in-house teams without quality loss." },
  { icon: Users, title: "Scalable Team", desc: "Ramp from 5 to 500 agents in days, not months." },
  { icon: ShieldCheck, title: "Data Security", desc: "Enterprise-grade compliance, encryption, and access control." },
  { icon: Globe2, title: "Global Coverage", desc: "Multi-shore delivery across timezones and languages." },
];

export function WhyUs() {
  return (
    <section id="why" className="relative py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Why choose us"
          title={<>An operating partner that <span className="text-gradient">moves like you</span></>}
          subtitle="Six reasons leading teams pick Velantrio over traditional vendors."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div
              key={f.title}
              style={{ animationDelay: `${i * 70}ms` }}
              className="group glass rounded-2xl p-6 animate-fade-up hover:-translate-y-1 hover:border-accent/40 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <f.icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold tracking-tight">{f.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
