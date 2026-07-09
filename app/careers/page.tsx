import { Metadata } from "next";
import { Header } from "@/app/Components/Header";
import { Footer } from "@/app/Components/Footer";
import { SectionHeader } from "@/app/Components/SectionHeader";
import { Users, Heart, Zap, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers | Velantrio",
  description: "Join the Velantrio team. We are looking for passionate individuals to help us scale and deliver exceptional outsourcing solutions.",
};

const benefits = [
  { icon: Heart, title: "Health & Wellness", desc: "Comprehensive health insurance and wellness programs for you and your family." },
  { icon: Zap, title: "Fast-Paced Growth", desc: "Clear career progression paths and continuous learning opportunities." },
  { icon: Users, title: "Inclusive Culture", desc: "A diverse and inclusive environment where every voice is heard and valued." },
];

const openRoles = [
  {
    title: "Senior Customer Success Manager",
    department: "Operations",
    location: "Mohali, India (Hybrid)",
    type: "Full-time"
  },
  {
    title: "Data Quality Analyst",
    department: "Quality Assurance",
    location: "Chandigarh, India (On-site)",
    type: "Full-time"
  },
  {
    title: "Medical Billing Specialist",
    department: "Healthcare Ops",
    location: "Remote (India)",
    type: "Full-time"
  },
  {
    title: "B2B Sales Executive",
    department: "Sales & Marketing",
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
            title={<>Build your future with <span className="text-gradient">us</span></>}
            subtitle="We are always looking for driven, talented individuals to join our growing team and help us redefine global outsourcing."
          />

          {/* Benefits Section */}
          <div className="mt-16 grid sm:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <div key={i} className="glass rounded-3xl p-8 flex flex-col items-center text-center border border-white/5">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Open Roles Section */}
          <div className="mt-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight">Open Roles</h2>
              <p className="mt-4 text-muted-foreground">Don't see a fit? Send your resume to careers@velantrio.com</p>
            </div>

            <div className="space-y-4 max-w-4xl mx-auto">
              {openRoles.map((role, i) => (
                <div key={i} className="group glass rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:border-accent/40 transition-all">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">{role.title}</h3>
                    <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5"><BriefcaseIcon className="h-4 w-4" /> {role.department}</span>
                      <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> {role.location}</span>
                      <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs">{role.type}</span>
                    </div>
                  </div>
                  <Link href="/contact" className="shrink-0 inline-flex items-center justify-center gap-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 px-5 py-2.5 text-sm font-medium transition-colors">
                    Apply Now
                    <ArrowRight className="h-4 w-4" />
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

function BriefcaseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}
