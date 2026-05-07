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
      <main className="flex-grow pt-20">
        <div className="py-12 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-gradient">
              Our Services
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl">
              From Tele Data Validation to KPO and Back Office support, we offer a comprehensive suite of outsourcing solutions.
            </p>
          </div>
        </div>
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
}
