import { Metadata } from "next";
import { Header } from "@/app/Components/Header";
import { Footer } from "@/app/Components/Footer";
import { SectionHeader } from "@/app/Components/SectionHeader";
import { Briefcase, TrendingUp, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies | Velantrio",
  description: "Read how Velantrio solves complex back-office and data challenges across various industries.",
};

const caseStudies = [
  {
    title: "Scaling Customer Support for a Global Fintech",
    industry: "Banking & Finance",
    challenge: "The client faced a 300% surge in support tickets during a product launch, causing SLA breaches and customer dissatisfaction.",
    solution: "Deployed a trained team of 50 omnichannel support agents within 14 days, implementing our proprietary multi-tier triage protocol.",
    results: [
      "Reduced average response time from 4 hours to 15 minutes.",
      "Achieved 98% CSAT score within the first month.",
      "Zero SLA breaches maintained after week 2."
    ]
  },
  {
    title: "Streamlining Medical Billing for a Healthcare Network",
    industry: "Healthcare",
    challenge: "High claim denial rates (18%) and a backlog of 45 days in medical coding, severely impacting cash flow.",
    solution: "Integrated a dedicated team of certified medical coders and implemented a rigorous 3-tier quality assurance process for all outgoing claims.",
    results: [
      "Reduced claim denial rate from 18% to 2.1%.",
      "Cleared the 45-day backlog in 3 weeks.",
      "Improved monthly cash flow by 32%."
    ]
  },
  {
    title: "Accelerating Catalog Management for an E-Commerce Giant",
    industry: "E-Commerce",
    challenge: "The client needed to onboard 100,000 new SKUs with localized descriptions across 5 regions ahead of the holiday season.",
    solution: "Mobilized a catalog management team working 24/7. Utilized automated data scraping combined with human-in-the-loop QA.",
    results: [
      "100,000 SKUs successfully published 10 days ahead of schedule.",
      "Maintained 99.8% data accuracy across all languages.",
      "Contributed to a record 40% YoY increase in holiday sales."
    ]
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-32 pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Case Studies"
            title={<>Proven Impact for <span className="text-primary">Global Enterprises</span></>}
            subtitle="Explore how we partner with leading organizations to solve complex operational challenges and drive growth."
          />

          <div className="mt-14 space-y-8">
            {caseStudies.map((study) => (
              <div
                key={study.title}
                className="rounded-2xl border border-border bg-card p-7 sm:p-10 shadow-xs hover:border-primary/40 transition-all duration-200"
              >
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                  {/* Left Column: Title & Industry */}
                  <div className="lg:w-1/3 flex flex-col justify-between">
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-4">
                        <Briefcase className="h-3.5 w-3.5" />
                        {study.industry}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">{study.title}</h3>
                    </div>
                  </div>

                  {/* Right Column: Details */}
                  <div className="lg:w-2/3 space-y-6">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-1.5">
                        The Challenge
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-1.5">
                        Our Solution
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{study.solution}</p>
                    </div>

                    <div className="bg-muted/40 rounded-xl p-5 border border-border">
                      <h4 className="text-sm font-bold text-foreground mb-3 flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                        Measurable Results
                      </h4>
                      <ul className="space-y-2">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/85">
                            <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
