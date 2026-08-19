import { Metadata } from "next";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | Velantrio",
  description: "Read the terms and conditions for using Velantrio's services and website.",
  alternates: {
    canonical: "/terms/",
  },
};

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-32 pb-16 sm:pb-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="border-b border-border pb-6">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">Terms of Service</h1>
            <p className="mt-2 text-xs text-muted-foreground">Effective Date: May 4, 2026</p>
          </div>

          <div className="mt-10 space-y-8 text-sm text-muted-foreground leading-relaxed">
            <section className="rounded-2xl border border-border bg-card p-6 sm:p-7 shadow-xs">
              <h2 className="text-base font-bold text-foreground mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing and using velantrio.com, you agree to be bound by these Terms of Service. If you are entering into a commercial Master Services Agreement (MSA) or Statement of Work (SOW) with Velantrio, the terms of that agreement govern the specific operational deliverables and SLAs.
              </p>
            </section>

            <section className="rounded-2xl border border-border bg-card p-6 sm:p-7 shadow-xs">
              <h2 className="text-base font-bold text-foreground mb-3">2. Service Delivery & Statements of Work</h2>
              <p>
                Velantrio Ventures provides institutional BPO, KPO, tele-data validation, and software development services. Commercial engagements are defined by written agreements specifying accuracy benchmarks, escalation paths, and delivery schedules.
              </p>
            </section>

            <section className="rounded-2xl border border-border bg-card p-6 sm:p-7 shadow-xs">
              <h2 className="text-base font-bold text-foreground mb-3">3. Confidentiality & IP Ownership</h2>
              <p>
                All client proprietary data, customer records, and custom workflows remain the exclusive intellectual property of the client. Velantrio retains ownership of its underlying platform code, proprietary training methodologies, and delivery architectures.
              </p>
            </section>

            <section className="rounded-2xl border border-border bg-card p-6 sm:p-7 shadow-xs">
              <h2 className="text-base font-bold text-foreground mb-3">4. Governing Jurisdiction</h2>
              <p>
                These Terms are governed by the laws of India. Any disputes arising in connection with website usage or general inquiries are subject to the exclusive jurisdiction of the competent courts in Sahibzada Ajit Singh Nagar (Mohali) / Chandigarh, India.
              </p>
            </section>

            <section className="rounded-2xl border border-border bg-card p-6 sm:p-7 shadow-xs">
              <h2 className="text-base font-bold text-foreground mb-3">5. Legal Contact</h2>
              <p>
                For legal inquiries or notices, contact our compliance counsel at:
                <br />
                <a href="mailto:info@velantrio.com" className="text-primary font-semibold hover:underline mt-1 inline-block">info@velantrio.com</a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
