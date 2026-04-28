
export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Velantrio",
    "url": "https://velantrio.com",
    "logo": "https://velantrio.com/logo.png",
    "description": "Velantrio provides high-performance outsourcing solutions including Tele Data Validation, BPO, KPO, and Back Office Support.",
    "address": {
      "@type": "PostalAddress",
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
    "description": "Smart outsourcing solutions including Data Validation, BPO, and KPO services for global enterprises.",
    "areaServed": "Worldwide",
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
    </>
  );
}
