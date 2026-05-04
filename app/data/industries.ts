import { Landmark, ShoppingBag, Phone, HeartPulse, Rocket, Truck, Shield, Zap, BarChart, Users } from "lucide-react";

export const industriesData = {
  "banking-finance": {
    title: "Banking & Finance",
    slug: "banking-finance",
    icon: Landmark,
    description: "Secure, compliant, and accurate financial data operations for modern banks and fintechs.",
    fullDescription: "In the high-stakes world of finance, accuracy and compliance are non-negotiable. Velantrio provides specialized BPO and KPO support tailored for banking institutions, investment firms, and fintech startups.",
    benefits: [
      { icon: Shield, title: "Regulatory Compliance", desc: "Strict adherence to KYC, AML, and GDPR standards." },
      { icon: Zap, title: "Rapid Processing", desc: "Same-day turnaround for loan applications and document verification." },
      { icon: BarChart, title: "Data Accuracy", desc: "99.9% accuracy in financial data entry and reconciliation." }
    ],
    services: [
      "KYC & AML Verification",
      "Loan Document Processing",
      "Financial Data Entry",
      "Reconciliation Services",
      "Account Opening Support"
    ]
  },
  "e-commerce": {
    title: "E-commerce",
    slug: "e-commerce",
    icon: ShoppingBag,
    description: "Scale your online store with rapid data entry, order processing, and 24/7 customer care.",
    fullDescription: "E-commerce moves fast. We help retailers and marketplaces keep up with high-volume product listings, order management, and multi-channel customer support.",
    benefits: [
      { icon: Users, title: "Customer Loyalty", desc: "Rapid response times that turn browsers into buyers." },
      { icon: Zap, title: "Catalog Management", desc: "Batch product uploads and SEO-friendly descriptions." },
      { icon: BarChart, title: "Inventory Insights", desc: "Real-time tracking and reporting across platforms." }
    ],
    services: [
      "Product Catalog Management",
      "Order Processing & Tracking",
      "Multi-channel Customer Support",
      "Review & Sentiment Analysis",
      "Inventory Data Management"
    ]
  },
  "telecom": {
    title: "Telecom",
    slug: "telecom",
    icon: Phone,
    description: "Streamlined subscriber management, data validation, and billing support.",
    fullDescription: "We support telecom providers in managing massive subscriber bases through efficient data validation, billing audits, and technical customer support.",
    benefits: [
      { icon: Zap, title: "Subscriber Scaling", desc: "Fast intake and verification for new connections." },
      { icon: Shield, title: "Data Integrity", desc: "Verification of subscriber documentation and records." },
      { icon: Users, title: "Churn Reduction", desc: "Proactive support and retention-focused communication." }
    ],
    services: [
      "Subscriber Data Validation",
      "Billing & Invoice Audits",
      "SIM Activation Support",
      "Technical Helpdesk",
      "Document Management"
    ]
  },
  "healthcare": {
    title: "Healthcare",
    slug: "healthcare",
    icon: HeartPulse,
    description: "HIPAA-compliant medical data entry, billing, and patient support services.",
    fullDescription: "Healthcare organizations trust us with sensitive patient data. We provide compliant back-office support that lets practitioners focus on care while we handle the paperwork.",
    benefits: [
      { icon: Shield, title: "HIPAA Compliance", desc: "Rigorous security protocols for patient data privacy." },
      { icon: Zap, title: "Faster Billing", desc: "Reduced claim denials through accurate medical coding." },
      { icon: BarChart, title: "Patient Data Clarity", desc: "Organized, searchable, and accurate electronic health records." }
    ],
    services: [
      "Medical Data Entry",
      "Insurance Claim Processing",
      "Patient Record Management",
      "Appointment Scheduling",
      "Medical Billing Support"
    ]
  },
  "startups": {
    title: "Startups",
    slug: "startups",
    icon: Rocket,
    description: "Agile outsourcing that scales from 5 to 500 agents as you grow.",
    fullDescription: "Startups need flexibility. We offer 'plug-and-play' teams that integrate with your tools and scale up or down based on your funding and growth cycles.",
    benefits: [
      { icon: Users, title: "Founder Focus", desc: "Offload operations so you can focus on product and strategy." },
      { icon: Zap, title: "Fast Onboarding", desc: "Dedicated teams trained and ready in under a week." },
      { icon: BarChart, title: "Cost Efficiency", desc: "Pay only for the scale you need, preserving your runway." }
    ],
    services: [
      "Lead Generation & Qualification",
      "MVP Data Enrichment",
      "Flexible Customer Support",
      "Back Office Automation",
      "Growth-Ops Support"
    ]
  },
  "logistics": {
    title: "Logistics",
    slug: "logistics",
    icon: Truck,
    description: "Global supply chain support, freight documentation, and real-time tracking.",
    fullDescription: "Moving goods globally requires mountain of documentation. We help logistics companies manage freight bills, customs docs, and dispatch coordination.",
    benefits: [
      { icon: Zap, title: "Supply Chain Speed", desc: "Reduced delays through rapid document processing." },
      { icon: Shield, title: "Audit Readiness", desc: "Perfectly organized records for customs and insurance." },
      { icon: BarChart, title: "Visibility", desc: "Real-time tracking updates and data entry for fleet mgmt." }
    ],
    services: [
      "Freight Bill Entry",
      "Customs Documentation",
      "Dispatch Coordination",
      "Tracking & Tracing Data",
      "Supply Chain Data Analytics"
    ]
  }
};
