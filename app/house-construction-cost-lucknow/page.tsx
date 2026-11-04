import type { Metadata } from "next";
import LandingPageLayout from "@/components/landing-page-layout";
import CostCalculator from "@/components/cost-calculator";
import EnquiryForm from "@/components/enquiry-form";
import FAQSection, { FAQItem } from "@/components/faq-section";
import { SEO_PAGES, SITE_CONFIG } from "@/lib/seo-config";
import {
  Calculator,
  CheckCircle2,
  FileSpreadsheet,
  AlertCircle,
  TrendingDown,
  Building2,
  ShieldAlert,
  Phone,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: SEO_PAGES.calculator.title,
  description: SEO_PAGES.calculator.description,
  keywords: SEO_PAGES.calculator.keywords,
  alternates: {
    canonical: SEO_PAGES.calculator.canonical,
  },
  openGraph: {
    title: SEO_PAGES.calculator.title,
    description: SEO_PAGES.calculator.description,
    url: SEO_PAGES.calculator.canonical,
    type: "website",
    locale: "en_IN",
    siteName: SITE_CONFIG.name,
  },
};

const CALCULATOR_FAQS: FAQItem[] = [
  {
    question: "What is the cost of constructing a 1000 sq ft house in Lucknow?",
    answer:
      "For a single-floor (Ground Floor) 1,000 sq ft house in Lucknow, the cost is approximately ₹16.5 Lakhs for Standard specification (₹1,650/sq ft) and ₹19.5 Lakhs for Premium specification (₹1,950/sq ft). If building Ground + 1 (total 2,000 sq ft built-up area), the total cost is approximately ₹33 Lakhs (Standard) to ₹39 Lakhs (Premium).",
  },
  {
    question: "What factors influence house construction cost in Lucknow?",
    answer:
      "Major factors include: 1. Soil quality (clayey soil along Gomti Nagar requires deeper plinth beams & pile foundations), 2. Steel & cement market prices, 3. Quality of interior finishes (vitrified tiles vs Italian marble), 4. LDA approval and boundary wall costs, and 5. Number of floors (slab economy improves with multiple floors).",
  },
  {
    question: "Are labor and architectural design charges included in the per sq ft rate?",
    answer:
      "Yes. Estarra's per sq ft construction packages are all-inclusive: covering 2D architectural space planning, 3D elevation drawings, structural engineering, raw materials, skilled mason & labor charges, supervision, and post-construction cleaning.",
  },
  {
    question: "How does Estarra guarantee no cost escalation?",
    answer:
      "Before starting civil work, we furnish a detailed, itemized Bill of Quantities (BOQ) with specific brand mentions for cement, steel, tiles, and fittings. We sign a legal contract locking this price throughout the project duration, shielding you from inflation.",
  },
  {
    question: "How do I get a custom BOQ quotation for my plot in Lucknow?",
    answer:
      "Simply input your plot dimensions into our calculator above and submit the enquiry form or call +91 7392861099. Our senior civil engineer will visit your plot in Lucknow for free soil assessment and provide an exact BOQ quotation.",
  },
];

const SPEC_COMPARISON = [
  {
    category: "Structural Foundation",
    standard: "Column & Plinth beam with ACC / UltraTech Cement",
    premium: "Heavy RCC earthquake-resistant frame with UltraTech Super",
    luxury: "Heavy RCC with Raft / Deep Pile Foundation + Termite Proofing",
  },
  {
    category: "Steel Reinforcement",
    standard: "Primary Fe-550 TMT Bars (Kamdhenu / Jindal)",
    premium: "Tata Tiscon / Jindal Panther Fe-550D Corrosion Resistant",
    luxury: "Tata Tiscon Super Ductile Fe-550D + Epoxy Coated Rebars",
  },
  {
    category: "Flooring & Tiling",
    standard: "2x2 ft Polished Vitrified Tiles (₹45-55/sqft)",
    premium: "4x2 ft Glazed Vitrified Tiles (GVT) (₹75-95/sqft)",
    luxury: "Italian Marble / High-end Spanish large slabs (₹200+/sqft)",
  },
  {
    category: "Bath & Sanitary",
    standard: "Cera / Hindware Branded Standard CP & Sanitary",
    premium: "Jaquar / Kohler Concealed Diverters & Wall-Hung EWCs",
    luxury: "Grohe / Kohler Thermostatic Showers, Vanities & Glass Partitions",
  },
  {
    category: "Electrical Wiring",
    standard: "Anchor / Finolex Concealed Flame Retardant Wiring",
    premium: "Havells / Polycab FR-LSH Fire-Proof Concealed Cables",
    luxury: "Schneider / Legrand Smart Automation & Profile Lighting",
  },
  {
    category: "Doors & Windows",
    standard: "Hardwood frames with standard flush doors & aluminum windows",
    premium: "Teakwood frames, laminated flush doors & 3-track UPVC windows",
    luxury: "Burma Teak entrance door, veneer designer doors & soundproof UPVC",
  },
  {
    category: "Internal & External Paint",
    standard: "Asian Paints Tractor Emulsion (Internal) + Ace (External)",
    premium: "Asian Paints Royale Luxury (Internal) + Apex Ultima (External)",
    luxury: "PU Polish, textured designer walls + Asian Paints Apex Weathertech",
  },
];

export default function ConstructionCostCalculatorPage() {
  return (
    <LandingPageLayout pageName="House Construction Cost Lucknow">
      {/* Hero Section */}
      <section className="relative bg-white text-gray-900 pt-8 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs sm:text-sm font-semibold tracking-wide">
              <Calculator className="w-4 h-4 text-amber-600" />
              Lucknow 2025-2026 Construction Cost Guide
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif leading-tight text-gray-900">
              House Construction Cost in Lucknow — <span className="text-amber-500">Per Sq Ft Calculator</span>
            </h1>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-normal max-w-2xl mx-auto">
              Estimate your complete home construction budget in seconds with transparent material specifications, live breakdown, and instant WhatsApp quotes.
            </p>
          </div>

          {/* Interactive Calculator Component */}
          <div className="mt-10 max-w-5xl mx-auto">
            <CostCalculator />
          </div>
        </div>
      </section>

      {/* Lucknow Cost Drivers & Guide */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-700 bg-primary-50 px-3.5 py-1.5 rounded-full">
              Engineering Insights
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-gray-900 mt-3">
              Key Factors Influencing House Construction Costs in Lucknow
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-3">
              Understanding these critical cost drivers ensures you plan realistically without unbudgeted surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-700">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 font-serif">
                1. Local Soil & Foundation Depth
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Areas near the Gomti River basin (Gomti Nagar Extension, Shaheed Path) have high clay content requiring deeper excavation, plinth beams, and robust anti-termite treatment to prevent settlement cracks.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-700">
                <FileSpreadsheet className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 font-serif">
                2. Raw Material Fluctuations
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                TMT steel (Tata Tiscon / Jindal) and grade 53 cement constitute ~35% of total civil budget. Working with Estarra locks your price under a fixed contract regardless of market price spikes.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 font-serif">
                3. LDA & Municipal Clearances
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                LDA (Lucknow Development Authority) sanction fees, compoundable area calculations, and structural vetting must be budgeted early to avoid construction halts or municipal notices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Material Specification Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-700 bg-primary-50 px-3.5 py-1.5 rounded-full">
              Material Quality Specifications
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-gray-900 mt-3">
              Specification Comparison Matrix by Quality Tier
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-3">
              Compare exact material brands and standards included in each construction tier.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="py-4 px-6 text-sm font-semibold font-serif">Construction Aspect</th>
                  <th className="py-4 px-6 text-sm font-semibold font-serif text-gray-200">
                    Standard (₹1,650/sqft)
                  </th>
                  <th className="py-4 px-6 text-sm font-semibold font-serif text-amber-300 bg-gray-800">
                    Premium (₹1,950/sqft)
                  </th>
                  <th className="py-4 px-6 text-sm font-semibold font-serif text-emerald-300">
                    Ultra-Luxury (₹2,400+/sqft)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-xs sm:text-sm">
                {SPEC_COMPARISON.map((row, idx) => (
                  <tr key={row.category} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                    <td className="py-4 px-6 font-bold text-gray-900">{row.category}</td>
                    <td className="py-4 px-6 text-gray-700">{row.standard}</td>
                    <td className="py-4 px-6 text-gray-900 font-medium bg-amber-50/40">
                      {row.premium}
                    </td>
                    <td className="py-4 px-6 text-gray-800">{row.luxury}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Custom BOQ Request Form */}
      <section id="lead-form-section" className="py-20 bg-primary-950 text-white scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl text-gray-900">
            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                Custom Engineering Quotation
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-gray-900 mt-3">
                Request an Itemized Bill of Quantities (BOQ)
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-2">
                Have specific plot dimensions or architectural drawings? Get an engineer-certified cost quote tailored to your exact Lucknow location.
              </p>
            </div>

            <EnquiryForm
              sourcePage="House Construction Cost Calculator - Custom BOQ Form"
              defaultService="Site Inspection & Cost Estimation"
              buttonText="Request Free Itemized BOQ Quote"
            />
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <FAQSection
        title="Construction Cost FAQs — Lucknow Market"
        subtitle="Common questions regarding cost per square foot, material prices, and payment structures in Lucknow."
        faqs={CALCULATOR_FAQS}
      />

      {/* Bottom CTA Banner */}
      <section className="py-14 bg-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif">
            Want to Discuss Your Plot and Construction Budget?
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Call our senior civil engineering desk in Lucknow directly or connect over WhatsApp.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${SITE_CONFIG.phoneTel}`}
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-500 text-white font-semibold px-6 py-3 rounded-full text-sm shadow-lg transition-transform hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              Call: {SITE_CONFIG.phoneDisplay}
            </a>
            <a
              href={`https://wa.me/917392861099?text=${encodeURIComponent(
                "Hi Estarra, I want to discuss construction cost for my plot in Lucknow."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold px-6 py-3 rounded-full text-sm shadow-lg transition-transform hover:scale-105"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </LandingPageLayout>
  );
}

