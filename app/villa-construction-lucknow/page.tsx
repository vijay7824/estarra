import type { Metadata } from "next";
import LandingPageLayout from "@/components/landing-page-layout";
import EnquiryForm from "@/components/enquiry-form";
import FAQSection, { FAQItem } from "@/components/faq-section";
import { SEO_PAGES, SITE_CONFIG } from "@/lib/seo-config";
import {
  Castle,
  ShieldCheck,
  Award,
  Layers,
  ArrowRight,
  CheckCircle2,
  Phone,
  Sparkles,
  MapPin,
  Maximize2,
  Flame,
  SunMedium,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: SEO_PAGES.villa.title,
  description: SEO_PAGES.villa.description,
  keywords: SEO_PAGES.villa.keywords,
  alternates: { canonical: SEO_PAGES.villa.canonical },
  openGraph: {
    title: SEO_PAGES.villa.title,
    description: SEO_PAGES.villa.description,
    url: SEO_PAGES.villa.canonical,
    type: "website",
    locale: "en_IN",
    siteName: SITE_CONFIG.name,
  },
};

const VILLA_FAQS: FAQItem[] = [
  {
    question: "What is the construction rate for a luxury villa in Lucknow?",
    answer:
      "Luxury villa construction in Lucknow ranges from ₹2,200 to ₹3,500+ per sq ft depending on custom structural spans, double-height ceilings, imported Italian marble, high-end thermal-break aluminium or UPVC fenestrations, home automation, and private elevator shafts.",
  },
  {
    question: "Do you build in Sushant Golf City and Gomti Nagar Extension?",
    answer:
      "Yes. Our luxury residential engineering team has active and completed turnkey villa projects across Sushant Golf City, Gomti Nagar Extension, Shaheed Path, Eldeco Greens, and Sultanpur Road.",
  },
  {
    question: "Can Estarra design both Contemporary Minimalist and Classical elevations?",
    answer:
      "Absolutely. Our in-house architectural team crafts tailored 3D elevations ranging from Neo-Classical colonnades to Ultra-Modern cantilevered villas with dynamic exterior facade lighting.",
  },
  {
    question: "What structural warranties are provided with villa construction?",
    answer:
      "All Estarra villas come with a 15-year legally backed RCC structural warranty, 10-year anti-termite plinth guarantee, and 5-year chemical waterproofing warranty.",
  },
];

const VILLA_GALLERY = [
  {
    title: "Double-Height Living and Grand Atrium",
    desc: "22-foot high structural ceilings with oversized imported glass windows bringing abundant natural lighting into your formal living lounge.",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=800",
    tag: "Interior Architecture",
  },
  {
    title: "Private Rooftop Deck and Pergola Garden",
    desc: "Engineered terrace leisure zones with composite wooden pergolas, concealed drainage, mood lighting, and outdoor barbecue provision.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
    tag: "Terrace Landscape",
  },
  {
    title: "Signature Modernist Facade and Louvers",
    desc: "Clean geometric massing with timber-finish aluminium louvers, textured exterior stone claddings, and integrated architectural profile lighting.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    tag: "Exterior Elevation",
  },
];

const VILLA_SPECS = [
  {
    category: "Structural Integrity",
    highlight: "Seismic Zone III Compliant RCC",
    details: "Heavy raft or pile foundations, Tata Tiscon Fe550D TMT rebar, UltraTech Premium cement with cube testing every slab.",
  },
  {
    category: "Grand Flooring",
    highlight: "Imported Italian Marble",
    details: "Botticino / Dyna marble bookmatched in living, dining, and foyer; premium 8x4 ft glazed porcelain slabs in bedrooms.",
  },
  {
    category: "Openings and Glazing",
    highlight: "Acoustic Double Glazed UPVC",
    details: "Soundproof 3-track sliding doors with DGU toughened glass and SS304 mosquito mesh by Fenesta or Kommerling.",
  },
  {
    category: "Smart Living",
    highlight: "Full Home Automation Pre-Wired",
    details: "Centralized conduit network for smart touch panels, motorized curtains, CCTV surveillance, and EV fast-charging garage point.",
  },
  {
    category: "Plumbing and Sanitary",
    highlight: "Kohler / Grohe Thermostatic Bathrooms",
    details: "Concealed diverters, frameless 10mm glass shower cubicles, wall-hung rimless commodes, and pressure-boosted solar water lines.",
  },
  {
    category: "Vertical Transit",
    highlight: "Hydraulic / Traction Lift Ready",
    details: "Custom concrete lift shaft construction with pit waterproofing and overhead machine room provisioning.",
  },
];

const PRIME_LOCALITIES = [
  "Sushant Golf City (Sultanpur Road)",
  "Gomti Nagar Extension (Sector 1, 4, 7)",
  "Amar Shaheed Path Corridor",
  "Eldeco Greens and Udyan",
  "Faizabad Road Villa Enclaves",
  "Vrindavan Yojna (Raebareli Road)",
];

export default function VillaConstructionPage() {
  return (
    <LandingPageLayout pageName="Villa Construction Lucknow">
      {/* Hero Section */}
      <section className="relative bg-white text-gray-900 pt-8 pb-16 overflow-hidden border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs sm:text-sm font-semibold tracking-wide">
                <Castle className="w-4 h-4 text-amber-600" />
                Luxury Independent Villas and Duplex Homes in Lucknow
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
                Luxury <span className="text-amber-500">Villa Construction</span> Company in Lucknow
              </h1>

              <p className="text-base sm:text-lg text-gray-700 max-w-2xl leading-relaxed">
                Build your bespoke estate with Lucknow&apos;s leading luxury civil engineers.
                From double-height atriums and Italian marble finishes to private elevator shafts
                and smart home automation — crafted with structural perfection.
              </p>

              {/* Quick Hero Feature Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg p-2.5">
                  <ShieldCheck className="w-5 h-5 text-amber-500 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-gray-800">15-Yr Warranty</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg p-2.5">
                  <Sparkles className="w-5 h-5 text-amber-500 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-gray-800">Italian Marble</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg p-2.5 col-span-2 sm:col-span-1">
                  <SunMedium className="w-5 h-5 text-amber-500 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-gray-800">Smart EV Ready</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2 justify-center lg:justify-start">
                <a
                  href="#villa-consultation"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 text-black font-bold text-sm sm:text-base hover:bg-amber-400 transition-all shadow-md hover:shadow-lg"
                >
                  Schedule Villa Consultation
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href={`tel:${SITE_CONFIG.phoneLead}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gray-900 text-white font-semibold text-sm sm:text-base hover:bg-black transition-all"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  Call {SITE_CONFIG.phoneLeadDisplay}
                </a>
              </div>
            </div>

            {/* Right: Featured Hero Visual & Quick Inquire Form */}
            <div id="villa-consultation" className="lg:col-span-5 space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 group">
                <img
                  src="https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=1200"
                  alt="Luxury Villa Construction Lucknow"
                  className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-5">
                  <div className="text-white">
                    <span className="text-xs uppercase tracking-wider font-semibold text-amber-400">Signature Project</span>
                    <h3 className="text-lg font-bold">Contemporary Luxury Villa • Sushant Golf City</h3>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg">
                <div className="mb-4">
                  <span className="text-xs uppercase tracking-wider text-amber-600 font-bold">Direct Engineer Connect</span>
                  <h2 className="text-xl font-bold text-gray-900">Request Villa BOQ Estimate</h2>
                  <p className="text-xs text-gray-600">Get custom architectural layout and per sq ft cost within 24 hours.</p>
                </div>
                <EnquiryForm
                  defaultService="Villa Construction Lucknow"
                  buttonText="Request Villa Plan and Quote"
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
            <span className="text-xs uppercase tracking-wider text-amber-600 font-bold">Craftsmanship In Every Detail</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
              Bespoke Villa Architectural Features
            </h2>
            <p className="text-gray-600 mt-3 text-sm sm:text-base">
              Explore how Estarra blends high-tensile structural engineering with world-class interior finishing
              for Lucknow&apos;s most discerning homeowners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VILLA_GALLERY.map((item, idx) => (
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

      {/* Specifications Breakdown */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-wider text-amber-600 font-bold">Uncompromising Standards</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
              Luxury Villa Construction Specifications
            </h2>
            <p className="text-gray-600 mt-3 text-sm sm:text-base">
              Every raw material and structural component is rigorously tested for longevity, thermal comfort, and earthquake safety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VILLA_SPECS.map((spec, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-gray-200 bg-white hover:border-amber-400 transition-colors shadow-sm"
              >
                <span className="text-xs uppercase font-bold text-amber-600 tracking-wider block">
                  {spec.category}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mt-1">
                  {spec.highlight}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                  {spec.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prime Villa Hubs in Lucknow */}
      <section className="py-14 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs uppercase tracking-wider text-amber-400 font-bold">Prime Locations</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold mt-2 text-white">
            Active Luxury Villa Building Hubs in Lucknow
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mt-2 text-xs sm:text-sm">
            We operate fully equipped civil teams and material testing labs across the major luxury residential sectors:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-8">
            {PRIME_LOCALITIES.map((loc, idx) => (
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

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-wider text-amber-600 font-bold">Clear Answers</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-2">
              Villa Construction FAQs
            </h2>
          </div>
          <FAQSection faqs={VILLA_FAQS} />
        </div>
      </section>
    </LandingPageLayout>
  );
}
