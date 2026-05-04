import { Inbox, Cpu, ShieldCheck, Send } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const steps = [
  { icon: Inbox, title: "Data Collection", desc: "Secure intake from your systems via API, SFTP, or portal." },
  { icon: Cpu, title: "Validation & Processing", desc: "Automated + human-in-the-loop processing pipelines." },
  { icon: ShieldCheck, title: "Quality Check", desc: "Multi-stage QA with statistical sampling and audits." },
  { icon: Send, title: "Delivery", desc: "On-time delivery in your preferred format with reporting." },
];

export function Process() {
  return (
    <section id="process" className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent -translate-y-1/2" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="How it works"
          title={<>A <span className="text-gradient">workflow</span> built for clarity</>}
          subtitle="Predictable, transparent, and continuously optimized."
        />

        <div className="mt-16 relative">
          {/* connecting line desktop */}
          <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-px bg-gradient-to-r from-primary/40 via-accent/60 to-primary/40" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div
                key={s.title}
                style={{ animationDelay: `${i * 120}ms` }}
                className="relative animate-fade-up text-center"
              >
                <div className="relative mx-auto h-24 w-24">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent blur-2xl opacity-40 animate-glow-pulse" />
                  <div className="relative h-24 w-24 rounded-full glass flex items-center justify-center border border-accent/30">
                    <s.icon className="h-9 w-9 text-accent" />
                    <div className="absolute -top-2 -right-2 h-7 w-7 rounded-full bg-gradient-to-br from-primary to-accent text-background text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </div>
                  </div>
                </div>
                <h3 className="mt-6 font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
