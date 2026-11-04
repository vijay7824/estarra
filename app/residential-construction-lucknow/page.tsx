import type { Metadata } from "next";
import LandingPageLayout from "@/components/landing-page-layout";
import EnquiryForm from "@/components/enquiry-form";
import FAQSection, { FAQItem } from "@/components/faq-section";
import { SEO_PAGES, SITE_CONFIG } from "@/lib/seo-config";
import {
  ShieldCheck,
  CheckCircle2,
  Clock,
  Compass,
  HardHat,
  Ruler,
  Award,
  Phone,
  Sparkles,
  MapPin,
  ArrowRight,
  Calculator,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: SEO_PAGES.residential.title,
  description: SEO_PAGES.residential.description,
  keywords: SEO_PAGES.residential.keywords,
  alternates: {
    canonical: SEO_PAGES.residential.canonical,
  },
  openGraph: {
    title: SEO_PAGES.residential.title,
    description: SEO_PAGES.residential.description,
    url: SEO_PAGES.residential.canonical,
    type: "website",
    locale: "en_IN",
    siteName: SITE_CONFIG.name,
  },
};

const RESIDENTIAL_FAQS: FAQItem[] = [
  {
    question: "What is the average house construction cost per sq ft in Lucknow?",
    answer:
      "In Lucknow, the average house construction cost ranges from ₹1,650 to ₹1,950 per sq ft for Standard to Premium specifications, and ₹2,400+ per sq ft for Luxury villas. This includes civil structure, plastering, premium flooring, electrical wiring, plumbing, and painting. Estarra provides a fixed-price BOQ contract with no mid-construction price escalations.",
  },
  {
    question: "Do you provide architectural drawings and LDA map approvals in Lucknow?",
    answer:
      "Yes. Our in-house team of licensed architects and structural engineers prepares complete 2D floor plans, 3D elevation designs, structural drawings, and facilitates LDA (Lucknow Development Authority) and Awas Vikas map approvals.",
  },
  {
    question: "How long does it take to construct a 1,500 to 2,000 sq ft home in Lucknow?",
    answer:
      "A typical 1,500 to 2,000 sq ft duplex house in Lucknow takes approximately 6 to 9 months from foundation excavation to final key handover. We commit to a contractual delivery date with delay penalty clauses for complete peace of mind.",
  },
  {
    question: "What brands of cement and steel do you use for house construction?",
    answer:
      "We strictly use Grade-A construction materials including UltraTech, ACC, or Ambuja 43/53 grade cement, and primary Fe-550 TMT steel bars (Tata Tiscon, Jindal Panther, or Kamdhenu). Quality test reports are shared at every milestone.",
  },
  {
    question: "What structural warranty does Estarra provide?",
    answer:
      "Estarra provides an industry-leading 15-year structural warranty on RCC foundation, columns, and slabs, along with a 1-year complimentary maintenance support for plumbing, electrical, and waterproofing.",
  },
];

const PACKAGES = [
  {
    name: "Standard Build",
    price: "₹1,650",
    unit: "per sq. ft.",
    desc: "Robust engineering for budget-conscious families seeking durable construction.",
    features: [
      "RCC Framed Structure (IS 456 Compliant)",
      "UltraTech / ACC Cement & Fe550 TMT Steel",
      "Red Clay Bricks / First-Class AAC Blocks",
      "Vitrified Flooring (2x2 ft branded tiles)",
      "Asian Paints Tractor Emulsion (Internal)",
      "Standard Branded Bath Fittings & CPVC Pipes",
      "10-Year Structural Guarantee",
    ],
    popular: false,
  },
  {
    name: "Premium Living",
    price: "₹1,950",
    unit: "per sq. ft.",
    desc: "Our most popular package with designer aesthetics, luxury flooring, and superior finishing.",
    features: [
      "Heavy RCC Structure with Anti-Termite Treatment",
      "Tata Tiscon / Jindal Panther Fe550D Steel",
      "Large Format 4x2 ft Glazed Vitrified Tiles (GVT)",
      "Jaquar / Kohler CP & Sanitary Ware",
      "Asian Paints Royale Luxury Emulsion + Apex Exterior",
      "Modular Kitchen Carcass & Teak Frame Flush Doors",
      "Havells / Polycab Flame-Retardant Concealed Wiring",
      "15-Year Structural Warranty + 1-Yr Free Maintenance",
    ],
    popular: true,
  },
  {
    name: "Ultra Luxury Villa",
    price: "₹2,400+",
    unit: "per sq. ft.",
    desc: "Architectural masterpiece crafted with Italian marble, smart automation, and bespoke elevations.",
    features: [
      "Custom 3D Elevation with Double-Height Foyer",
      "Italian Marble / Large Slabs for Living Areas",
      "Kohler / Grohe Thermostatic Bath Showers & Vanity",
      "Burma Teakwood Main Door & UPVC Soundproof Windows",
      "False Ceiling with Ambient LED Profile Lighting",
      "Smart Home Automation Pre-Wiring & Solar Ready",
      "Dedicated Project Manager & Daily Video Drone Audits",
      "15-Year Comprehensive Structural Warranty",
    ],
    popular: false,
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Site Survey & 3D Architectural Design",
    desc: "Soil testing, Vastu-compliant 2D space planning, structural engineering, and realistic 3D elevation walkthroughs.",
  },
  {
    step: "02",
    title: "LDA Clearances & Transparent BOQ",
    desc: "Transparent itemized Bill of Quantities (BOQ) with fixed material specs and assistance with municipal approvals.",
  },
  {
    step: "03",
    title: "Civil Foundation & RCC Framing",
    desc: "Excavation, anti-termite treatment, heavy column plinth beams, and cured RCC slabs tested for compressive strength.",
  },
  {
    step: "04",
    title: "Brickwork, Concealed MEP & Plastering",
    desc: "Masonry, electrical conduit installation, concealed plumbing with pressure testing, and smooth waterproof plaster.",
  },
  {
    step: "05",
    title: "Finishing, 400+ Quality Checks & Handover",
    desc: "Flooring, paint, designer doors, sanitary installation, rigorous 400+ quality checklist, and ceremonial key handover.",
  },
];

const LOCATIONS = [
  "Gomti Nagar",
  "Gomti Nagar Extension",
  "Sushant Golf City",
  "Shaheed Path",
  "Indira Nagar",
  "Aliganj",
  "Hazratganj",
  "Faizabad Road",
  "Kanpur Road",
  "Raebareli Road",
  "Vrindavan Yojna",
  "Jankipuram",
];

export default function ResidentialConstructionPage() {
  return (
    <LandingPageLayout pageName="Residential Construction Lucknow">
      {/* Hero Section */}
      <section className="relative bg-white text-gray-900 pt-8 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs sm:text-sm font-semibold tracking-wide">
                <Sparkles className="w-4 h-4 text-amber-600" />
                Trusted by 350+ Homeowners in Lucknow | 15+ Years Experience
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif leading-tight text-gray-900">
                Leading <span className="text-amber-500">Residential Construction</span> Company in Lucknow
              </h1>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                Turn your dream home into reality with Estarra. Engineered civil construction, transparent per-sqft pricing from <strong className="text-gray-900 font-semibold">₹1,650/sqft</strong>, zero cost overruns, and guaranteed timely handover.
              </p>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-3 pt-2 max-w-lg mx-auto lg:mx-0 text-left">
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 shadow-xs">
                  <div className="text-amber-600 font-bold text-lg">15 Years</div>
                  <div className="text-xs text-gray-700 font-medium">Structural Warranty</div>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 shadow-xs">
                  <div className="text-amber-600 font-bold text-lg">400+</div>
                  <div className="text-xs text-gray-700 font-medium">Quality Checks</div>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 shadow-xs">
                  <div className="text-amber-600 font-bold text-lg">0%</div>
                  <div className="text-xs text-gray-700 font-medium">Cost Escalation</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="#lead-form-section"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-500 text-white font-semibold px-7 py-3.5 rounded-full shadow-lg shadow-primary-600/30 transition-all hover:scale-105"
                >
                  Book Free Site Consultation
                  <ArrowRight className="w-4 h-4" />
                </a>

                <Link
                  href="/house-construction-cost-lucknow"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium px-6 py-3.5 rounded-full border border-gray-300 transition-all hover:scale-105"
                >
                  <Calculator className="w-4 h-4 text-amber-600" />
                  Calculate Cost Online
                </Link>
              </div>
            </div>

            {/* Right Lead Capture Box */}
            <div id="lead-form-section" className="lg:col-span-5 scroll-mt-24">
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl text-gray-900 border border-gray-200">
                <div className="mb-5 text-center">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                    Instant Estimate
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold font-serif text-gray-900 mt-2">
                    Request Free Site Inspection
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    Get an engineer&apos;s BOQ quotation within 24 hours.
                  </p>
                </div>

                <EnquiryForm
                  sourcePage="Residential Construction Lucknow - Hero Form"
                  defaultService="Residential Home Construction"
                  buttonText="Get Free Quotation & Site Visit"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-700 bg-primary-50 px-3.5 py-1.5 rounded-full">
              Transparent Per Sq Ft Rates
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-gray-900 mt-3">
              Residential Construction Packages in Lucknow
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-3">
              Clear, all-inclusive pricing with certified materials. No hidden fees or surprise revisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PACKAGES.map((pkg, idx) => (
              <div
                key={pkg.name}
                className={`relative rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between ${
                  pkg.popular
                    ? "bg-white border-2 border-primary-600 shadow-2xl shadow-primary-900/10 scale-105 z-10"
                    : "bg-white border border-gray-200 shadow-sm hover:shadow-md"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary-600 text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-md">
                    Most Popular Choice
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold text-gray-900 font-serif">{pkg.name}</h3>
                  <p className="text-xs text-gray-500 mt-1 min-h-[32px]">{pkg.desc}</p>

                  <div className="mt-5 pb-5 border-b border-gray-100">
                    <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
                    <span className="text-gray-500 text-xs ml-2 font-medium">{pkg.unit}</span>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {pkg.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <a
                    href="#lead-form-section"
                    className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold transition-all ${
                      pkg.popular
                        ? "bg-primary-600 hover:bg-primary-700 text-white shadow-md shadow-primary-600/20"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                    }`}
                  >
                    Select {pkg.name}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5-Step Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-700 bg-primary-50 px-3.5 py-1.5 rounded-full">
              Seamless Execution
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-gray-900 mt-3">
              Our 5-Step Engineering & Construction Process
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-3">
              From soil excavation to your Gruha Pravesh — we ensure rigorous civil engineering at every stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="bg-gray-50 hover:bg-primary-50/40 border border-gray-200/80 rounded-2xl p-6 transition-all hover:scale-[1.02]"
              >
                <div className="text-3xl font-extrabold text-primary-600 font-serif">
                  {step.step}
                </div>
                <h3 className="text-base font-bold text-gray-900 mt-3 font-serif">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lucknow Locations Served */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif">
              Constructing Premium Homes Across All Prime Locations in Lucknow
            </h2>
            <p className="text-primary-200 text-sm mt-2">
              Our civil engineers supervise active construction sites across major residential hubs.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {LOCATIONS.map((loc) => (
              <div
                key={loc}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/15 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>{loc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <FAQSection
        title="Residential House Construction FAQs — Lucknow"
        subtitle="Got questions before building your house in Lucknow? Here are verified answers from our senior engineers."
        faqs={RESIDENTIAL_FAQS}
      />

      {/* Bottom CTA Banner */}
      <section className="py-14 bg-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif">
            Ready to Build Your Home in Lucknow with Complete Peace of Mind?
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Speak directly with our Chief Civil Engineer today or visit our ongoing site in Gomti Nagar.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${SITE_CONFIG.phoneTel}`}
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-500 text-white font-semibold px-6 py-3 rounded-full text-sm shadow-lg transition-transform hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              Call Directly: {SITE_CONFIG.phoneDisplay}
            </a>
            <a
              href="#lead-form-section"
              className="inline-flex items-center gap-2 bg-white text-gray-900 hover:bg-gray-100 font-semibold px-6 py-3 rounded-full text-sm transition-transform hover:scale-105"
            >
              Fill Quick Enquiry Form
            </a>
          </div>
        </div>
      </section>
    </LandingPageLayout>
  );
}

