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

const RESIDENTIAL_GALLERY = [
  {
    title: "Seismic Zone III Foundation and RCC Columns",
    desc: "Heavy plinth beams, anti-termite plinth protection, and cured RCC columns engineered strictly to IS:456 standards.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800",
    tag: "Civil and Structural",
  },
  {
    title: "Signature Contemporary Elevation and Glass Balconies",
    desc: "Modern front facades with exterior weather-proof coatings, timber-finish rafters, and toughened glass railings.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800",
    tag: "Elevation Design",
  },
  {
    title: "Premium Living Room Finishing and Vitrified Flooring",
    desc: "Large-format 4x2 ft vitrified tile flooring, concealed Havells conduit wiring, and smooth Asian Paints Royale emulsion.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800",
    tag: "Interior Finishing",
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
      "UltraTech / ACC Cement and Fe550 TMT Steel",
      "Red Clay Bricks / First-Class AAC Blocks",
      "Vitrified Flooring (2x2 ft branded tiles)",
      "Asian Paints Tractor Emulsion (Internal)",
      "Standard Branded Bath Fittings and CPVC Pipes",
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
      "Jaquar / Kohler CP and Sanitary Ware",
      "Asian Paints Royale Luxury Emulsion + Apex Exterior",
      "Modular Kitchen Carcass and Teak Frame Flush Doors",
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
      "Kohler / Grohe Thermostatic Bath Showers and Vanity",
      "Burma Teakwood Main Door and UPVC Soundproof Windows",
      "False Ceiling with Ambient LED Profile Lighting",
      "Smart Home Automation Pre-Wiring and Solar Ready",
      "Dedicated Project Manager and Daily Video Drone Audits",
      "15-Year Comprehensive Structural Warranty",
    ],
    popular: false,
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Site Survey and 3D Architectural Design",
    desc: "Soil testing, Vastu-compliant 2D space planning, structural engineering, and realistic 3D elevation walkthroughs.",
  },
  {
    step: "02",
    title: "LDA Clearances and Transparent BOQ",
    desc: "Transparent itemized Bill of Quantities (BOQ) with fixed material specs and assistance with municipal approvals.",
  },
  {
    step: "03",
    title: "Civil Foundation and RCC Framing",
    desc: "Excavation, anti-termite treatment, heavy column plinth beams, and cured RCC slabs tested for compressive strength.",
  },
  {
    step: "04",
    title: "Brickwork, Concealed MEP and Plastering",
    desc: "Masonry, electrical conduit installation, concealed plumbing with pressure testing, and smooth waterproof plaster.",
  },
  {
    step: "05",
    title: "Finishing, 400+ Quality Checks and Handover",
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
      <section className="relative bg-white text-gray-900 pt-8 pb-16 overflow-hidden border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs sm:text-sm font-semibold tracking-wide">
                <Sparkles className="w-4 h-4 text-amber-600" />
                Trusted by 350+ Homeowners in Lucknow | 15+ Years Experience
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
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

            {/* Right Lead Capture Box with Visual */}
            <div id="lead-form-section" className="lg:col-span-5 space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 group">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200"
                  alt="Modern House Construction Lucknow"
                  className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex items-end p-5">
                  <div className="text-white">
                    <span className="text-xs uppercase tracking-wider font-semibold text-amber-400">Featured Residence</span>
                    <h3 className="text-lg font-bold">Custom 3-Story Independent Home • Gomti Nagar</h3>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl text-gray-900 border border-gray-200">
                <div className="mb-5 text-center">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                    Instant Estimate
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-2">
                    Request Free Site Inspection
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    Get an engineer&apos;s BOQ quotation within 24 hours.
                  </p>
                </div>

                <EnquiryForm
                  sourcePage="Residential Construction Lucknow - Hero Form"
                  defaultService="Residential Home Construction"
                  buttonText="Get Free Quotation and Site Visit"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Showcase Gallery */}
      <section className="py-16 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-wider text-amber-600 font-bold">Engineering in Action</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
              Residential Construction Milestones
            </h2>
            <p className="text-gray-600 mt-3 text-sm sm:text-base">
              From heavy concrete foundations to elegant elevations and flawless internal finishes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {RESIDENTIAL_GALLERY.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow group flex flex-col"
              >
                <div className="relative overflow-hidden h-56">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-black/75 text-amber-400 text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm">
                    {item.tag}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-700 bg-primary-50 px-3.5 py-1.5 rounded-full">
              Transparent Pricing
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3">
              House Construction Packages in Lucknow
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-3">
              All-inclusive per sq ft construction rates. No hidden extras, no cost escalations halfway through your build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative rounded-3xl p-8 transition-all flex flex-col justify-between ${
                  pkg.popular
                    ? "bg-gradient-to-b from-gray-900 to-gray-800 text-white shadow-2xl scale-105 border-2 border-primary-500"
                    : "bg-white text-gray-900 border border-gray-200 shadow-sm hover:shadow-md"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-400 text-black text-xs font-black uppercase tracking-wider py-1 px-4 rounded-full shadow-md">
                    Most Popular
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold">{pkg.name}</h3>
                  <p className={`text-xs mt-1 ${pkg.popular ? "text-gray-300" : "text-gray-500"}`}>
                    {pkg.desc}
                  </p>

                  <div className="mt-5 pb-5 border-b border-gray-200/20">
                    <span className="text-4xl font-extrabold tracking-tight">{pkg.price}</span>
                    <span className={`text-xs ml-1 ${pkg.popular ? "text-gray-300" : "text-gray-500"}`}>
                      {pkg.unit}
                    </span>
                  </div>

                  <ul className="mt-6 space-y-3 text-xs sm:text-sm">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            pkg.popular ? "text-amber-400" : "text-emerald-600"
                          }`}
                        />
                        <span className={pkg.popular ? "text-gray-200" : "text-gray-700"}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4">
                  <a
                    href="#lead-form-section"
                    className={`w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                      pkg.popular
                        ? "bg-amber-400 hover:bg-amber-300 text-black shadow-lg"
                        : "bg-gray-900 hover:bg-black text-white"
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
      <section className="py-20 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-700 bg-primary-50 px-3.5 py-1.5 rounded-full">
              Engineered Execution
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3">
              Our 5-Step Construction Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-xs relative"
              >
                <div className="text-3xl font-extrabold text-primary-600">
                  {step.step}
                </div>
                <h3 className="text-base font-bold text-gray-900 mt-3">
                  {step.title}
                </h3>
                <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-14 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs uppercase tracking-wider text-amber-400 font-bold">Prime Localities</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold mt-2 text-white">
            Where We Build in Lucknow
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-8">
            {LOCATIONS.map((loc, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center gap-2 bg-gray-800/80 border border-gray-700 rounded-xl p-3 text-xs sm:text-sm font-medium text-gray-200 text-center"
              >
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{loc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-700 bg-primary-50 px-3.5 py-1.5 rounded-full">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-2">
              Residential Construction FAQs
            </h2>
          </div>
          <FAQSection faqs={RESIDENTIAL_FAQS} />
        </div>
      </section>
    </LandingPageLayout>
  );
}
