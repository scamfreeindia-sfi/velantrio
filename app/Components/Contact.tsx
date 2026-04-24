"use client";
import { useState } from "react";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { SectionHeader } from "./Services";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/4 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Get in touch"
          title={<>Let's <span className="text-gradient">build</span> something together</>}
          subtitle="Tell us about your project. We'll respond within 24 hours."
        />

        <div className="mt-16 grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2 glass rounded-3xl p-7 space-y-6">
            <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-4 bg-gradient-to-br from-primary/10 to-accent/10">
              <img 
                src="/contact-img.png" 
                alt="Contact Us" 
                className="w-full h-full object-cover opacity-80"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-accent/40 text-4xl">✨</div>
              </div>
            </div>
            <ContactItem icon={Mail} label="Email" value="hello@velantrio.com" />
            <ContactItem icon={Phone} label="Phone" value="+91 89300 71652" />
            <ContactItem icon={MapPin} label="Office" value="Bengaluru · Mumbai · Remote-first" />
            

            <div className="pt-4 border-t border-white/10">
              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Hours</div>
              <div className="text-sm">24/7 operations · Sales: Mon–Sat 9am–7pm IST</div>
            </div>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="lg:col-span-3 glass rounded-3xl p-7 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Name" name="name" placeholder="Your full name" />
              <Field label="Email" name="email" type="email" placeholder="you@company.com" />
            </div>
            <Field label="Phone" name="phone" placeholder="+1 555 000 0000" />
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Message</label>
              <textarea
                required
                rows={5}
                placeholder="Tell us about your project, volume, and timeline…"
                className="mt-1.5 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition placeholder:text-muted-foreground/60 resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground py-3.5 font-medium shadow-[var(--shadow-glow)] hover:scale-[1.01] transition-transform"
            >
              {sent ? "Thanks — we'll be in touch ✓" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs uppercase tracking-wider text-muted-foreground">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition placeholder:text-muted-foreground/60"
      />
    </div>
  );
}

function ContactItem({ icon: Icon, label, value }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-white/10 flex items-center justify-center shrink-0">
        <Icon className="h-5 w-5 text-accent" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="text-sm mt-0.5">{value}</div>
      </div>
    </div>
  );
}
