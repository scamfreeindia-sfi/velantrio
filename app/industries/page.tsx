import { Metadata } from "next";
import { industriesData } from "@/app/data/industries";
import { Header } from "@/app/Components/Header";
import { Footer } from "@/app/Components/Footer";
import { SectionHeader } from "@/app/Components/SectionHeader";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Industry Solutions | Specialized Outsourcing",
  description: "Explore how Velantrio's specialized outsourcing services empower businesses across Banking, E-commerce, Healthcare, and more.",
  alternates: {
    canonical: "/industries/",
  },
};

export default function IndustriesPage() {
  const industries = Object.values(industriesData);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-32 pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Sector Specializations"
            title={<>Tailored Solutions for <span className="text-primary">Every Industry</span></>}
            subtitle="Explore how Velantrio's dedicated operational pods empower global enterprises across specialized verticals."
          />

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <Link
                  key={industry.slug}
                  href={`/industries/${industry.slug}`}
                  className="rounded-2xl border border-border bg-card p-7 shadow-xs hover:border-primary/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    <div className="h-12 w-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground tracking-tight group-hover:text-primary transition-colors">{industry.title}</h3>
                    <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {industry.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border/60 flex items-center gap-1.5 text-xs font-semibold text-primary">
                    <span>Explore sector blueprint</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
