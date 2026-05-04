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
    <footer className="relative border-t border-white/10 mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-accent via-primary to-deep-blue flex items-center justify-center">
                <span className="font-bold text-background">V</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-lg tracking-tight">
                  Velantrio
                </span>
                <span className="text-[10px] text-accent/80 font-semibold uppercase tracking-widest -mt-0.5">
                  Private Limited
                </span>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
              Smart outsourcing solutions for growing businesses. BPO, KPO, and
              back office support — engineered for scale.
            </p>
            <div className="mt-5 flex gap-3">
              {[
                { Icon: LinkedinIcon, label: "LinkedIn", href: "https://www.linkedin.com/in/pardeep-singh-343b02406" },
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
                  className="h-9 w-9 rounded-lg glass flex items-center justify-center hover:border-accent/40 hover:text-accent transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol 
            title="Services" 
            links={[
              { name: "Tele Data Validation", href: "/services" },
              { name: "Voice Process", href: "/services" },
              { name: "Non-Voice Support", href: "/services" },
              { name: "KPO Services", href: "/services" },
              { name: "Loan Processing", href: "/services" }
            ]} 
          />
          <FooterCol 
            title="Company" 
            links={[
              { name: "About", href: "/about" },
              { name: "Industries", href: "/#industries" },
              { name: "Process", href: "/#process" },
              { name: "Contact", href: "/contact" },
              { name: "Careers", href: "/contact" }
            ]} 
          />
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Velantrio Group. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="/contact" className="hover:text-foreground">Privacy</a>
            <a href="/contact" className="hover:text-foreground">Terms</a>
            <a href="/contact" className="hover:text-foreground">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { name: string; href: string }[] }) {
  return (
    <div>
      <div className="text-sm font-semibold mb-4">{title}</div>
      <ul className="space-y-2.5 text-sm text-muted-foreground">
        {links.map((l) => (
          <li key={l.name}>
            <a href={l.href} className="hover:text-accent transition-colors">{l.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
