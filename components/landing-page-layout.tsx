"use client";

import LandingHeader from "@/components/landing-header";
import Footer from "@/components/footer";
import { SITE_CONFIG } from "@/lib/seo-config";

interface LandingPageLayoutProps {
  children: React.ReactNode;
  pageName: string;
}

export default function LandingPageLayout({
  children,
  pageName,
}: LandingPageLayoutProps) {
  // Schema.org LocalBusiness / GeneralContractor
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["HomeAndConstructionBusiness", "GeneralContractor"],
    name: SITE_CONFIG.companyName,
    alternateName: "Estarra",
    url: SITE_CONFIG.siteUrl,
    logo: `${SITE_CONFIG.siteUrl}/assets/logo-transparent.png`,
    image: `${SITE_CONFIG.siteUrl}/assets/logo-transparent.png`,
    telephone: SITE_CONFIG.phoneTel,
    email: SITE_CONFIG.email,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.state,
      postalCode: SITE_CONFIG.address.postalCode,
      addressCountry: SITE_CONFIG.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "26.8467",
      longitude: "80.9462",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "19:00",
      },
    ],
    areaServed: [
      "Lucknow",
      "Gomti Nagar",
      "Shaheed Path",
      "Sushant Golf City",
      "Indira Nagar",
      "Aliganj",
      "Hazratganj",
      "Vrindavan Yojna",
      "Faizabad Road",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Residential & Turnkey Construction Services Lucknow",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Residential Construction in Lucknow",
            description: "High-quality house construction with 15-year structural warranty.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Turnkey House Construction Lucknow",
            description: "End-to-end design, approvals, civil work, and interior handover.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "House Construction Cost Estimation",
            description: "Transparent per-sqft cost estimation for Lucknow home builders.",
          },
        },
      ],
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans selection:bg-primary-100 selection:text-primary-900">
      {/* Schema.org Local Business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <LandingHeader />

      <main className="flex-1 pt-16 md:pt-20">
        {children}
      </main>

      <Footer />
    </div>
  );
}
