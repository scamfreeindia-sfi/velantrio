import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import { ShieldCheck, Lock, Eye, Database, Globe } from "lucide-react";

export default function SecurityPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-32 pb-16 sm:pb-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-gradient">Security & Compliance</h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Data security is at the core of everything we do at Velantrio. We implement enterprise-grade security protocols to ensure your sensitive information remains protected, private, and compliant.
          </p>

          <div className="mt-16 grid sm:grid-cols-2 gap-6">
            <SecurityCard 
              icon={ShieldCheck} 
              title="ISO 27001 Standard" 
              desc="We follow the ISO/IEC 27001 information security management system standards to manage risks." 
            />
            <SecurityCard 
              icon={Lock} 
              title="End-to-End Encryption" 
              desc="All data in transit and at rest is protected using industry-standard AES-256 encryption." 
            />
            <SecurityCard 
              icon={Eye} 
              title="Access Control" 
              desc="Strict Role-Based Access Control (RBAC) ensures only authorized personnel can access specific data." 
            />
            <SecurityCard 
              icon={Database} 
              title="Secure Infrastructure" 
              desc="Our servers are hosted in SOC 2 Type II compliant data centers with 24/7 physical security." 
            />
          </div>

          <div className="mt-20 space-y-10 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Regulatory Compliance</h2>
              <p>
                Velantrio maintains compliance with global data protection regulations, including GDPR for European data and HIPAA guidelines for healthcare-related operations. We regularly conduct internal audits to ensure our processes meet or exceed these standards.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Employee Training</h2>
              <p>
                Every member of the Velantrio team undergoes rigorous security awareness training. We foster a culture of security where every employee understands their role in maintaining data integrity.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Reporting a Vulnerability</h2>
              <p>
                If you believe you have discovered a security vulnerability on our Website or Services, please report it to our security team immediately at:
                <br />
                <span className="text-accent font-semibold">security@velantrio.com</span>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function SecurityCard({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="glass rounded-3xl p-7 border border-white/5 group hover:border-accent/30 transition-all">
      <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
        <Icon className="h-6 w-6 text-accent" />
      </div>
      <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
}
