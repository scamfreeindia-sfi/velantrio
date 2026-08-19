import { Metadata } from "next";
import { Header } from "../Components/Header";
import { Services as ServicesSection } from "../Components/Services";
import { Footer } from "../Components/Footer";

export const metadata: Metadata = {
  title: "Outsourcing Services | BPO, KPO & Data Validation",
  description: "Comprehensive outsourcing solutions including Tele Data Validation, BPO, KPO, and Back Office support designed for global scale.",
  alternates: {
    canonical: "/services/",
  },
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24">
        <div className="py-14 sm:py-18 border-b border-border bg-card">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
              Specialized <span className="text-primary">Outsourcing Services</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-3xl leading-relaxed">
              From high-accuracy Tele-Data Validation to financial KPO research, omnichannel BPO, and custom software pipelines, 
              we deliver measurable accuracy and 40–60% operational savings.
            </p>
          </div>
        </div>
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
}
