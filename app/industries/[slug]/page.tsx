import { Metadata } from "next";
import { industriesData } from "@/app/data/industries";
import { Header } from "@/app/Components/Header";
import { Footer } from "@/app/Components/Footer";
import { SectionHeader } from "@/app/Components/SectionHeader";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react";

export function generateStaticParams() {
  return Object.keys(industriesData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const industry = industriesData[slug as keyof typeof industriesData];
  
  if (!industry) return { title: "Industry Not Found" };

  return {
    title: `${industry.title} Outsourcing Solutions | Velantrio`,
    description: industry.description,
    alternates: {
      canonical: `/industries/${slug}/`,
    },
    openGraph: {
      title: `${industry.title} Outsourcing`,
      description: industry.description,
    },
  };
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = industriesData[slug as keyof typeof industriesData];

  if (!industry) {
    notFound();
  }

  const Icon = industry.icon;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-32 pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Link 
            href="/industries" 
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors mb-8 group"
          >
            <ArrowLeft className="h-3.5 w-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to all industries</span>
          </Link>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 rounded-xl border border-border bg-card p-3 shadow-xs">
                <div className="h-10 w-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Industry Blueprint</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
                <span className="text-primary">{industry.title}</span> Outsourcing Solutions
              </h1>
              
              <p className="text-base text-muted-foreground leading-relaxed">
                {industry.fullDescription}
              </p>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:bg-primary/90 transition-colors shadow-sm"
                >
                  <span>Request Custom Sector SLA</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-3.5">
              {industry.benefits.map((benefit, i) => (
                <div key={i} className="rounded-2xl border border-border bg-card p-5 shadow-xs flex gap-4 items-start">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 text-primary mt-0.5">
                    <benefit.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground">{benefit.title}</h3>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <section className="mt-20 pt-14 border-t border-border">
            <SectionHeader
              eyebrow="Specialized Capabilities"
              align="left"
              title={<>Core Operational <span className="text-primary">Deliverables</span></>}
            />
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {industry.services.map((service, i) => (
                <div key={i} className="rounded-xl border border-border bg-card p-4 flex items-center gap-3 shadow-2xs">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-foreground">{service}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
