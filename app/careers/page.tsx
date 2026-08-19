import { Metadata } from "next";
import { Header } from "@/app/Components/Header";
import { Footer } from "@/app/Components/Footer";
import { SectionHeader } from "@/app/Components/SectionHeader";
import { Users, Heart, Zap, MapPin, ArrowRight, Briefcase } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers | Velantrio",
  description: "Join the Velantrio team. We are looking for passionate individuals to help us scale and deliver exceptional outsourcing solutions.",
};

const benefits = [
  { icon: Heart, title: "Health & Wellness", desc: "Comprehensive health coverage, wellness stipends, and work-life balance initiatives." },
  { icon: Zap, title: "Fast-Paced Growth", desc: "Clear career progression ladders, leadership training, and skill-building programs." },
  { icon: Users, title: "Inclusive Culture", desc: "A meritocratic, supportive environment where operational excellence is recognized and rewarded." },
];

const openRoles = [
  {
    title: "Senior Operations Delivery Manager",
    department: "Operations",
    location: "Mohali, India (On-site)",
    type: "Full-time"
  },
  {
    title: "Tele Data Quality Analyst",
    department: "Quality Assurance",
    location: "Mohali / Chandigarh (On-site)",
    type: "Full-time"
  },
  {
    title: "KPO Financial Research Analyst",
    department: "Knowledge Services",
    location: "Mohali, India (Hybrid)",
    type: "Full-time"
  },
  {
    title: "Enterprise Client Account Manager",
    department: "Client Success",
    location: "Mohali, India (Hybrid)",
    type: "Full-time"
  }
];

export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-32 pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Careers at Velantrio"
            title={<>Build Your Career with <span className="text-primary">Velantrio</span></>}
            subtitle="Join our fast-growing delivery hub in Mohali. Work with global enterprise clients on high-impact data and outsourcing operations."
          />

          {/* Benefits Section */}
          <div className="mt-14 grid sm:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <div key={i} className="rounded-2xl border border-border bg-card p-7 text-center shadow-xs">
                  <div className="mx-auto h-12 w-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{benefit.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Open Roles Section */}
          <div className="mt-20">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">Current Open Positions</h2>
              <p className="mt-2 text-sm text-muted-foreground">Don&apos;t see an exact match? Send your CV directly to <a href="mailto:careers@velantrio.com" className="text-primary font-semibold hover:underline">careers@velantrio.com</a></p>
            </div>

            <div className="space-y-4 max-w-4xl mx-auto">
              {openRoles.map((role, i) => (
                <div key={i} className="rounded-2xl border border-border bg-card p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-5 shadow-xs hover:border-primary/40 transition-all duration-200">
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{role.title}</h3>
                    <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5"><Briefcase className="h-3.5 w-3.5 text-primary" /> {role.department}</span>
                      <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-primary" /> {role.location}</span>
                      <span className="px-2 py-0.5 rounded bg-muted border border-border text-foreground/80 font-medium">{role.type}</span>
                    </div>
                  </div>
                  <Link 
                    href="/contact" 
                    className="shrink-0 inline-flex items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground px-4 py-2.5 text-xs font-semibold hover:bg-primary/90 transition-colors shadow-2xs"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
