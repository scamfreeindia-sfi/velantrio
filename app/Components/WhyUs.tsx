import { Workflow, Database, TrendingDown, ShieldCheck, Landmark, CheckCircle } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const features = [
  { icon: Workflow, title: "Zero-Disruption Transition Plan", desc: "From Discovery and Pilot to Go-Live, our seamless migration protocol guarantees zero downtime for your critical workflows." },
  { icon: Database, title: "Tele Data Validation", desc: "High-accuracy, multi-point data verification to eliminate friction, prevent fraud, and accelerate underwriting pipelines." },
  { icon: TrendingDown, title: "40–60% Cost Reduction", desc: "Dramatically lower your operational overhead instantly, while you retain final decision authority and claims approval strictly in-house." },
  { icon: ShieldCheck, title: "Ironclad Security Compliance", desc: "Built on ISO 27001, SOC 2, and GDPR-ready frameworks. We treat your data security as our primary competitive advantage." },
  { icon: Landmark, title: "Enterprise Governance", desc: "Robust oversight structures, SLA-driven accountability, and dedicated account managers who act as a direct extension of your operations." },
  { icon: CheckCircle, title: "99%+ Quality Assurance", desc: "Multi-stage quality control loops and rigorous continuous monitoring designed to protect and elevate your brand reputation." },
];

export function WhyUs() {
  return (
    <section id="why" className="relative py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="The Velantrio Advantage"
          title={<>Scale operations. <span className="text-gradient">Eliminate risk.</span></>}
          subtitle="Why risk-averse COOs and Operations Directors trust Velantrio as their enterprise growth partner."
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
