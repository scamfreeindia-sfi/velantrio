import { Metadata } from "next";
import { Header } from "@/app/Components/Header";
import { Footer } from "@/app/Components/Footer";
import { SectionHeader } from "@/app/Components/SectionHeader";
import { ShieldCheck, Lock, Activity, Globe, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Compliance Center | Velantrio",
  description: "Learn about Velantrio's commitment to Information Security, Data Privacy, Business Continuity, GDPR readiness, and Quality management.",
};

const complianceFeatures = [
  {
    icon: ShieldCheck,
    title: "Security-First Operating Model",
    description: "Enterprise-grade security protocols designed to protect your sensitive data at all times. We utilize advanced encryption (AES-256) for data at rest and in transit.",
  },
  {
    icon: Lock,
    title: "Data Privacy",
    description: "Strict adherence to international data privacy standards. Our zero-trust architecture ensures that only authorized personnel have access to the data they need.",
  },
  {
    icon: Activity,
    title: "Business Continuity",
    description: "Robust disaster recovery and business continuity plans guarantee 99.9% uptime, ensuring your operations never miss a beat.",
  },
  {
    icon: Globe,
    title: "GDPR-Aware Operations",
    description: "Operations aligned with the principles of the General Data Protection Regulation (GDPR). We respect data subject rights and maintain transparent data processing records.",
  },
  {
    icon: CheckCircle,
    title: "ISO 9001 Aligned (Roadmap)",
    description: "Quality management systems aligned with ISO 9001 principles. Our multi-stage QA processes ensure deliverables meet the highest accuracy standards.",
  },
];

export default function CompliancePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-32 pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Compliance Center"
            title={<>Security you can <span className="text-gradient">trust</span></>}
            subtitle="Giving procurement teams complete confidence through rigorous standards and transparent practices."
          />

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceFeatures.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  style={{ animationDelay: `${i * 100}ms` }}
                  className="group glass rounded-3xl p-8 animate-fade-up hover:border-accent/40 transition-all flex flex-col h-full"
                >
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-white/10 flex items-center justify-center mb-6">
                    <Icon className="h-6 w-6 text-accent group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed flex-grow">
                    {feature.description}
                  </p>
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
