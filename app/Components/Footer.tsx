import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, MapPin, Mail, Phone, Lock } from "lucide-react";

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-16">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Company Brief Column */}
          <div className="md:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative h-9 w-9 rounded-xl overflow-hidden shrink-0 border border-border/80 shadow-2xs group-hover:border-primary/50 transition-colors">
                <Image
                  src="/logo.png"
                  alt="Velantrio"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-base tracking-tight text-foreground">
                  Velantrio
                </span>
                <span className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider -mt-0.5">
                  Ventures
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Institutional-grade BPO, KPO, and Tele-Data Validation services engineered for high accuracy, SLA discipline, and scalable back-office growth.
            </p>

            <div className="pt-1 space-y-2 text-xs text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                <span>Plot No. I-36, Sector 83, JLPL Industrial Area, SAS Nagar (Mohali), Punjab 140306</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-primary shrink-0" />
                <a href="mailto:info@velantrio.com" className="hover:text-foreground">info@velantrio.com</a>
              </div>
            </div>

            <div className="pt-2 flex gap-2">
              {[
                { Icon: LinkedinIcon, label: "LinkedIn", href: "https://www.linkedin.com/company/143062273/admin/dashboard/" },
                { Icon: XIcon, label: "X", href: "https://x.com/Pardeepsin68085" },
                { Icon: FacebookIcon, label: "Facebook", href: "#" },
                { Icon: InstagramIcon, label: "Instagram", href: "#" }
              ].map(({ Icon, label, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="h-8 w-8 rounded-lg border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav Columns */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <FooterCol
              title="Specialized Services"
              links={[
                { name: "Tele Data Validation", href: "/services#tele-data-validation" },
                { name: "Voice Operations (BPO)", href: "/services#voice-bpo" },
                { name: "Non-Voice & Chat Support", href: "/services#non-voice-support" },
                { name: "KPO & Market Research", href: "/services#kpo-research" },
                { name: "Loan & Mortgage Processing", href: "/services#loan-mortgage" },
                { name: "Custom Software Solutions", href: "/services#custom-software" }
              ]}
            />
            <FooterCol
              title="Company & Trust"
              links={[
                { name: "About Velantrio", href: "/about" },
                { name: "Target Industries", href: "/industries" },
                { name: "Executive Leadership", href: "/about#leadership" },
                { name: "Careers & Openings", href: "/careers" },
                { name: "Contact Delivery Hub", href: "/contact" }
              ]}
            />
            <FooterCol
              title="Resources & Governance"
              links={[
                { name: "Client Case Studies", href: "/case-studies" },
                { name: "Compliance & Security", href: "/compliance" },
                { name: "Operational Insights Hub", href: "/resources" },
                { name: "Industry Blog", href: "/blog" },
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms of Service", href: "/terms" }
              ]}
            />
          </div>

        </div>

        {/* Bottom Verification Strip */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <div className="flex flex-wrap gap-x-4 gap-y-1 items-center">
            <span>© {new Date().getFullYear()} Velantrio Group. All rights reserved.</span>
            <span className="text-border">|</span>
            <span>GSTIN: 03IHZPS5878A1ZK</span>
            <span className="text-border">|</span>
            <span>Delivery Hub: Mohali & Chandigarh, Punjab</span>
          </div>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link>
            <Link href="/security" className="hover:text-foreground transition-colors">Security</Link>
            <Link href="/compliance" className="hover:text-foreground transition-colors">Compliance</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { name: string; href: string }[] }) {
  return (
    <div>
      <div className="text-xs font-bold uppercase tracking-wider text-foreground mb-4">
        {title}
      </div>
      <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
        {links.map((l) => (
          <li key={l.name}>
            <Link href={l.href} className="hover:text-foreground transition-colors">
              {l.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
