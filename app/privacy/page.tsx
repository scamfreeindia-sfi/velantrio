import { Metadata } from "next";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Velantrio",
  description: "Our commitment to protecting your data and privacy. Learn how Velantrio handles information in compliance with global standards.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-32 pb-16 sm:pb-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-gradient">Privacy Policy</h1>
          <p className="mt-4 text-muted-foreground italic">Last Updated: May 4, 2026</p>

          <div className="mt-12 space-y-10 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
              <p>
                At Velantrio Private Limited ("Velantrio", "we", "us", or "our"), we respect your privacy and are committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit the website velantrio.com and our practices for collecting, using, maintaining, protecting, and disclosing that information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
              <p>We collect several types of information from and about users of our Website, including:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Personal identifiers such as name, email address, and phone number when provided via contact forms.</li>
                <li>Information about your internet connection, the equipment you use to access our Website, and usage details.</li>
                <li>Business information related to outsourcing requirements you share with us.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
              <p>We use information that we collect about you or that you provide to us, including any personal information:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>To present our Website and its contents to you.</li>
                <li>To provide you with information, products, or services that you request from us.</li>
                <li>To fulfill any other purpose for which you provide it.</li>
                <li>To carry out our obligations and enforce our rights arising from any contracts entered into between you and us.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Data Security</h2>
              <p>
                We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on our secure servers behind firewalls.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Contact Information</h2>
              <p>
                To ask questions or comment about this privacy policy and our privacy practices, contact us at:
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
