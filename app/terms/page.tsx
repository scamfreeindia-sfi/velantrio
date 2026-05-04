import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-32 pb-16 sm:pb-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-gradient">Terms of Service</h1>
          <p className="mt-4 text-muted-foreground italic">Last Updated: May 4, 2026</p>

          <div className="mt-12 space-y-10 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using velantrio.com, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Provision of Services</h2>
              <p>
                Velantrio Private Limited provides specialized BPO, KPO, and software outsourcing services. We reserve the right to modify or discontinue any service with or without notice to you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Intellectual Property</h2>
              <p>
                The Website and its original content, features, and functionality are owned by Velantrio Private Limited and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Limitation of Liability</h2>
              <p>
                In no event shall Velantrio Private Limited, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
                <br />
                <span className="text-accent">info@velantrio.com</span>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
