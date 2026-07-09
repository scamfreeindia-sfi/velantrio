import { Metadata } from "next";
import { Header } from "@/app/Components/Header";
import { Footer } from "@/app/Components/Footer";
import { SectionHeader } from "@/app/Components/SectionHeader";
import { ArrowRight, Briefcase, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies | Velantrio",
  description: "Read how Velantrio solves complex back-office and data challenges across various industries.",
};

const caseStudies = [
  {
    title: "Scaling Customer Support for a Global Fintech",
    industry: "Banking & Finance",
    challenge: "The client faced a 300% surge in support tickets during a product launch, causing SLA breaches and customer dissatisfaction.",
    solution: "Deployed a trained team of 50 omnichannel support agents within 14 days, implementing our proprietary AI-assisted ticketing triage.",
    results: [
      "Reduced average response time from 4 hours to 15 minutes.",
      "Achieved 98% CSAT score within the first month.",
      "Zero SLA breaches after week 2."
    ]
  },
  {
    title: "Streamlining Medical Billing for a Regional Hospital Network",
    industry: "Healthcare",
    challenge: "High claim denial rates (18%) and a backlog of 45 days in medical coding, severely impacting cash flow.",
    solution: "Integrated a dedicated team of certified medical coders and implemented a rigorous 3-tier quality assurance process for all outgoing claims.",
    results: [
      "Reduced claim denial rate to 2.1%.",
      "Cleared the 45-day backlog in 3 weeks.",
      "Improved monthly cash flow by 32%."
    ]
  },
  {
    title: "Accelerating Catalog Management for an E-commerce Giant",
    industry: "Ecommerce",
    challenge: "The client needed to onboard 100,000 new SKUs with localized descriptions across 5 regions ahead of the holiday season.",
    solution: "Mobilized a multi-lingual catalog management team working 24/7. Utilized automated data scraping combined with human-in-the-loop QA.",
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
            title={<>Proven results across <span className="text-gradient">industries</span></>}
            subtitle="Explore how we partner with leading organizations to solve complex operational challenges and drive growth."
          />

          <div className="mt-16 space-y-12">
            {caseStudies.map((study, i) => (
              <div
                key={study.title}
                style={{ animationDelay: `${i * 100}ms` }}
                className="group glass rounded-3xl p-8 lg:p-12 animate-fade-up border border-white/5 relative overflow-hidden"
              >
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
                  {/* Left Column: Title & Industry */}
                  <div className="lg:w-1/3 flex flex-col justify-between">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary-foreground text-xs font-medium mb-4">
                        <Briefcase className="h-3 w-3" />
                        {study.industry}
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">{study.title}</h3>
                    </div>
                  </div>

                  {/* Right Column: Details */}
                  <div className="lg:w-2/3 space-y-8">
                    <div>
                      <h4 className="text-accent font-semibold mb-2 flex items-center gap-2">
                         Challenge
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-accent font-semibold mb-2 flex items-center gap-2">
                         Solution
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">{study.solution}</p>
                    </div>

                    <div className="bg-black/20 rounded-2xl p-6 border border-white/5">
                      <h4 className="text-foreground font-semibold mb-4 flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-green-400" />
                        Results
                      </h4>
                      <ul className="space-y-3">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                            <span className="h-1.5 w-1.5 rounded-full bg-green-400 mt-2 shrink-0" />
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
