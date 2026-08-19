import { Metadata } from "next";
import { Header } from "../Components/Header";
import { Contact as ContactSection } from "../Components/Contact";
import { Footer } from "../Components/Footer";

export const metadata: Metadata = {
  title: "Contact Velantrio | Get a Quote for Outsourcing",
  description: "Ready to scale? Contact Velantrio today for a personalized quote on our BPO, KPO, and data validation services.",
  alternates: {
    canonical: "/contact/",
  },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24">
        <div className="py-14 sm:py-18 border-b border-border bg-card">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
              Contact <span className="text-primary">Our Delivery Center</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-3xl leading-relaxed">
              Connect directly with our operations team in Mohali to discuss your project requirements, 
              request SLA specs, or schedule an operational discovery session.
            </p>
          </div>
        </div>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
