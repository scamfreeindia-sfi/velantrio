import { Metadata } from "next";
import { Header } from "@/app/Components/Header";
import { Footer } from "@/app/Components/Footer";
import { SectionHeader } from "@/app/Components/SectionHeader";
import { ShieldCheck, Lock, Activity, Globe, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Compliance Center | Velantrio",
  description: "Learn about Velantrio's commitment to Information Security, Data Privacy, Business Continuity, GDPR readiness, and Quality management.",
};

const complianceFeatures = [
  {
    icon: ShieldCheck,
    title: "Security-First Operating Model",
    description: "Enterprise-grade security protocols designed to protect your sensitive data at all times. We utilize 256-bit encryption for data at rest and in transit.",
  },
  {
    icon: Lock,
    title: "Data Privacy & NDA Enforcement",
    description: "Strict adherence to international data privacy standards. Zero-trust architecture ensures only authorized personnel access dedicated client partitions.",
  },
  {
    icon: Activity,
    title: "Business Continuity & High Availability",
    description: "Dual internet feeds, redundant power backups, and failover protocols guarantee 99.9% uptime for continuous 24/7 delivery operations.",
  },
  {
    icon: Globe,
    title: "GDPR & International Data Standards",
    description: "Full compliance with GDPR principles, standard contractual clauses (SCCs), and data subject access protocols for European and global clients.",
  },
  {
    icon: CheckCircle2,
    title: "ISO/IEC 27001 & ISO 9001 Alignment",
    description: "Systematic information security management and multi-stage QA processes ensuring all deliverables meet rigorous accuracy benchmarks.",
  },
];

export default function CompliancePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-32 pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Compliance & Governance"
            title={<>Enterprise Security & <span className="text-primary">Compliance</span></>}
            subtitle="Giving risk-averse procurement and operations teams complete confidence through transparent governance and verifiable protocols."
          />

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-border bg-card p-7 shadow-xs hover:border-primary/40 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="h-12 w-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-5">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground tracking-tight mb-2">{feature.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
