import { Metadata } from "next";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Velantrio",
  description: "Our commitment to protecting your data and privacy. Learn how Velantrio handles information in compliance with global standards.",
  alternates: {
    canonical: "/privacy/",
  },
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-32 pb-16 sm:pb-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="border-b border-border pb-6">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">Privacy Policy</h1>
            <p className="mt-2 text-xs text-muted-foreground">Effective Date: May 4, 2026</p>
          </div>

          <div className="mt-10 space-y-8 text-sm text-muted-foreground leading-relaxed">
            <section className="rounded-2xl border border-border bg-card p-6 sm:p-7 shadow-xs">
              <h2 className="text-base font-bold text-foreground mb-3">1. Introduction</h2>
              <p>
                At Velantrio Ventures ("Velantrio", "we", "us", or "our"), we respect your privacy and are committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you when you visit velantrio.com and our practices for collecting, using, and safeguarding that data.
              </p>
            </section>

            <section className="rounded-2xl border border-border bg-card p-6 sm:p-7 shadow-xs">
              <h2 className="text-base font-bold text-foreground mb-3">2. Information We Collect</h2>
              <p>We collect information you explicitly provide when submitting inquiries or requesting SLA proposals:</p>
              <ul className="list-disc pl-5 mt-3 space-y-1.5 text-xs sm:text-sm">
                <li>Contact details (name, corporate email address, phone number, company name).</li>
                <li>Project requirements, record volume estimates, and operational specifications.</li>
                <li>Technical logs and standard analytics regarding website traffic and performance.</li>
              </ul>
            </section>

            <section className="rounded-2xl border border-border bg-card p-6 sm:p-7 shadow-xs">
              <h2 className="text-base font-bold text-foreground mb-3">3. Use of Information</h2>
              <p>Information gathered is utilized exclusively to evaluate service requirements, provide customized proposals, manage active client workflows, and fulfill contractual SLA commitments. We never sell, lease, or monetize your contact or business information.</p>
            </section>

            <section className="rounded-2xl border border-border bg-card p-6 sm:p-7 shadow-xs">
              <h2 className="text-base font-bold text-foreground mb-3">4. Security & Data Protection</h2>
              <p>
                We employ industry-standard administrative, physical, and technical safeguards (including TLS 1.3 encryption and access-controlled databases) to protect against unauthorized disclosure or loss of information.
              </p>
            </section>

            <section className="rounded-2xl border border-border bg-card p-6 sm:p-7 shadow-xs">
              <h2 className="text-base font-bold text-foreground mb-3">5. Inquiries & Data Rights</h2>
              <p>
                To request data deletion, review collected information, or ask questions regarding our privacy practices, please contact our data governance team at:
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
