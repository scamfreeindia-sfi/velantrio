import { Metadata } from "next";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import { ShieldCheck, Lock, Eye, Database } from "lucide-react";

export const metadata: Metadata = {
  title: "Security & Compliance | Velantrio",
  description: "Learn about our rigorous security protocols, ISO certifications, and GDPR compliance measures.",
  alternates: {
    canonical: "/security/",
  },
};

export default function SecurityPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-32 pb-16 sm:pb-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="border-b border-border pb-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">Security & Data Governance</h1>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Information security is the foundational pillar of Velantrio. We implement enterprise-grade protocols to ensure all client data remains strictly confidential, tamper-proof, and fully compliant with global standards.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            <SecurityCard 
              icon={ShieldCheck} 
              title="ISO/IEC 27001 Standard" 
              desc="We follow ISO/IEC 27001 information security management protocols with regular vulnerability assessments and audits." 
            />
            <SecurityCard 
              icon={Lock} 
              title="AES-256 Encryption" 
              desc="All data in transit (TLS 1.3) and at rest is secured using military-grade 256-bit encryption with key rotation." 
            />
            <SecurityCard 
              icon={Eye} 
              title="Role-Based Access Control" 
              desc="Strict Least-Privilege access principles ensure only designated analysts can view authorized project partitions." 
            />
            <SecurityCard 
              icon={Database} 
              title="Hardened Delivery Infrastructure" 
              desc="Delivery nodes are hosted in SOC 2 Type II compliant environments with 24/7 physical access controls." 
            />
          </div>

          <div className="mt-16 space-y-8 text-muted-foreground leading-relaxed text-sm">
            <section className="rounded-2xl border border-border bg-card p-6 sm:p-7 shadow-xs">
              <h2 className="text-lg font-bold text-foreground mb-2">Regulatory Compliance</h2>
              <p>
                Velantrio maintains compliance with international data protection frameworks, including GDPR for European clients and HIPAA guidelines for healthcare operations. We conduct regular compliance reviews to maintain institutional audit readiness.
              </p>
            </section>

            <section className="rounded-2xl border border-border bg-card p-6 sm:p-7 shadow-xs">
              <h2 className="text-lg font-bold text-foreground mb-2">Personnel Screening & Training</h2>
              <p>
                Every employee undergoes background verification and mandatory confidentiality training before accessing any operational system. Clean-desk policies and zero-recording rules are strictly enforced across our delivery floor.
              </p>
            </section>

            <section className="rounded-2xl border border-border bg-card p-6 sm:p-7 shadow-xs">
              <h2 className="text-lg font-bold text-foreground mb-2">Security Point of Contact</h2>
              <p>
                For security inquiries, audit requests, or vulnerability disclosures, contact our security officer directly at:
                <br />
                <a href="mailto:security@velantrio.com" className="text-primary font-semibold hover:underline mt-1 inline-block">security@velantrio.com</a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function SecurityCard({ icon: Icon, title, desc }: { icon: React.ComponentType<{ className?: string }>, title: string, desc: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-xs hover:border-primary/40 transition-all duration-200">
      <div className="h-10 w-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-base font-bold text-foreground mb-1.5">{title}</h3>
      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
}
