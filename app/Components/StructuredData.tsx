
export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Velantrio",
    "url": "https://velantrio.com",
    "logo": "https://velantrio.com/logo.png",
    "description": "Velantrio is the best software and outsourcing company in Mohali & Chandigarh, providing high-performance solutions including Tele Data Validation, BPO, KPO, and Back Office Support.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mohali",
      "addressRegion": "Punjab",
      "addressCountry": "India"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-XXXXXXXXXX",
      "contactType": "customer service",
      "areaServed": "Worldwide",
      "availableLanguage": "en"
    },
    "sameAs": [
      "https://www.linkedin.com/company/velantrio",
      "https://twitter.com/velantrio"
    ]
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Business Process Outsourcing",
    "provider": {
      "@type": "Organization",
      "name": "Velantrio"
    },
    "description": "Best software, design, BPO, and KPO solutions in Mohali and Chandigarh. Engineered for accuracy, speed, and global scale.",
    "areaServed": ["Mohali", "Chandigarh", "India", "Worldwide"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Outsourcing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Tele Data Validation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "BPO Services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "KPO Services"
          }
        }
      ]
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What outsourcing services does Velantrio provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Velantrio provides high-performance outsourcing solutions including Tele Data Validation, BPO, KPO, Back Office Support, and Lead Generation engineered for accuracy and scale."
        }
      },
      {
        "@type": "Question",
        "name": "What is Tele Data Validation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tele Data Validation is a process where we verify and enrich your customer or lead data through tele-verification, ensuring high accuracy and conversion rates for your sales teams."
      }
      },
      {
        "@type": "Question",
        "name": "How can BPO and KPO services help my business grow?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "By outsourcing non-core processes like data management, customer support, and knowledge-based tasks to Velantrio, businesses can focus on core growth while reducing operational costs and increasing efficiency."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
