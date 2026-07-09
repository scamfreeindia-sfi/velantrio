import { Landmark, ShieldCheck, Home, HeartPulse, Phone, ShoppingBag, Cloud, Scale, Shield, Zap, BarChart, Users } from "lucide-react";

export const industriesData = {
  "banking": {
    title: "Banking",
    slug: "banking",
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
  "insurance": {
    title: "Insurance",
    slug: "insurance",
    icon: ShieldCheck,
    description: "Accelerate claim processing and improve policyholder experiences with accurate data management.",
    fullDescription: "The insurance sector demands speed and precision. We help insurance providers streamline their back-office operations, from policy administration to rapid claims processing and customer support.",
    benefits: [
      { icon: Zap, title: "Faster Claims", desc: "Reduced turnaround times for claim adjudication and processing." },
      { icon: Shield, title: "Fraud Detection", desc: "Meticulous data verification to minimize fraudulent claims." },
      { icon: Users, title: "Better CX", desc: "Responsive policyholder support and inquiry resolution." }
    ],
    services: [
      "Claims Processing",
      "Policy Administration",
      "Data Verification",
      "Customer Support",
      "Document Digitization"
    ]
  },
  "mortgage": {
    title: "Mortgage",
    slug: "mortgage",
    icon: Home,
    description: "End-to-end mortgage processing support, from origination to post-closing audits.",
    fullDescription: "Navigating mortgage workflows requires meticulous attention to detail. We support lenders with comprehensive data processing, document management, and compliance checks to accelerate loan cycles.",
    benefits: [
      { icon: Zap, title: "Faster Closings", desc: "Streamlined workflows to accelerate the loan origination process." },
      { icon: Shield, title: "Compliance", desc: "Adherence to all regulatory standards and strict QA processes." },
      { icon: BarChart, title: "Scalability", desc: "Easily scale your processing team during volume spikes." }
    ],
    services: [
      "Loan Origination Support",
      "Underwriting Assistance",
      "Document Indexing",
      "Post-Closing Audits",
      "Title Search Support"
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
  "ecommerce": {
    title: "Ecommerce",
    slug: "ecommerce",
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
  "saas": {
    title: "SaaS",
    slug: "saas",
    icon: Cloud,
    description: "Technical support, lead enrichment, and customer success operations for software companies.",
    fullDescription: "SaaS companies need agile support. We offer 'plug-and-play' teams that integrate with your tools, providing technical helpdesk, data enrichment, and back-office ops to fuel your growth.",
    benefits: [
      { icon: Users, title: "Core Focus", desc: "Offload operations so your team can focus on product development." },
      { icon: Zap, title: "Fast Onboarding", desc: "Dedicated teams trained on your software in under a week." },
      { icon: BarChart, title: "Cost Efficiency", desc: "Pay only for the scale you need, preserving your runway." }
    ],
    services: [
      "Tier 1 & 2 Technical Support",
      "Lead Generation & Enrichment",
      "Customer Onboarding",
      "Data Migration Assistance",
      "Billing & Subscription Management"
    ]
  },
  "legal-services": {
    title: "Legal Services",
    slug: "legal-services",
    icon: Scale,
    description: "Secure legal document processing, contract review, and transcription services.",
    fullDescription: "Law firms and corporate legal departments require utmost confidentiality and accuracy. We provide specialized legal process outsourcing to manage high-volume documentation efficiently.",
    benefits: [
      { icon: Shield, title: "Confidentiality", desc: "Strict NDAs and secure infrastructure for sensitive data." },
      { icon: BarChart, title: "High Accuracy", desc: "Meticulous attention to detail in document preparation." },
      { icon: Zap, title: "Time Savings", desc: "Free up attorneys' time by offloading administrative tasks." }
    ],
    services: [
      "Legal Document Formatting",
      "Contract Abstraction",
      "Legal Transcription",
      "Case Management Support",
      "Compliance Reporting"
    ]
  }
};
