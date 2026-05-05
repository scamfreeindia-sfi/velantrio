import { Metadata } from "next";
import { Header } from "../Components/Header";
import { Contact as ContactSection } from "../Components/Contact";
import { Footer } from "../Components/Footer";

export const metadata: Metadata = {
  title: "Contact Velantrio | Get a Quote for Outsourcing",
  description: "Ready to scale? Contact Velantrio today for a personalized quote on our BPO, KPO, and data validation services.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        <div className="py-12 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-gradient">
              Contact Us
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl">
              Get in touch with our experts to discuss how we can help your business scale.
            </p>
          </div>
        </div>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
