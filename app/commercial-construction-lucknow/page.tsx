import type { Metadata } from "next";
import LandingPageLayout from "@/components/landing-page-layout";
import EnquiryForm from "@/components/enquiry-form";
import FAQSection, { FAQItem } from "@/components/faq-section";
import { SEO_PAGES, SITE_CONFIG } from "@/lib/seo-config";
import {
  Building2,
  ShieldCheck,
  CheckCircle2,
  Phone,
  ArrowRight,
  Flame,
  FileCheck2,
  Zap,
  Clock,
  Compass,
} from "lucide-react";

export const metadata: Metadata = {
  title: SEO_PAGES.commercial.title,
  description: SEO_PAGES.commercial.description,
  keywords: SEO_PAGES.commercial.keywords,
  alternates: { canonical: SEO_PAGES.commercial.canonical },
  openGraph: {
    title: SEO_PAGES.commercial.title,
    description: SEO_PAGES.commercial.description,
    url: SEO_PAGES.commercial.canonical,
    type: "website",
    locale: "en_IN",
    siteName: SITE_CONFIG.name,
  },
};

const COMMERCIAL_FAQS: FAQItem[] = [
  {
    question: "Do you handle LDA commercial map sanctions and Fire NOC approvals?",
    answer:
      "Yes. Estarra’s commercial engineering wing coordinates end-to-end commercial approvals including LDA building bylaws sanction, UP Fire Department NOC, environmental clearances, and structural stability certifications.",
  },
  {
    question: "What is the typical timeline for constructing a 15,000 to 30,000 sq ft commercial building?",
    answer:
      "Depending on the structural foundation and basement excavation depth, a typical G+3 commercial building takes 9 to 14 months from plinth casting to facade glazing and fire-line commissioning.",
  },
  {
    question: "Can you execute both RCC framing and Pre-Engineered Steel (PEB) structures?",
    answer:
      "Yes. We specialize in conventional post-tensioned RCC frames for office complexes, as well as fast-track PEB structural steel frames for industrial warehouses, logistics hubs, and automobile showrooms.",
  },
  {
    question: "Do you offer comprehensive MEP (Mechanical, Electrical, and Plumbing) integration?",
    answer:
      "Yes. All commercial projects are engineered with central VRF air conditioning ducting, commercial diesel generator backup synchronization, hydrant and sprinkler fire suppression, and dual-source electrical panels.",
  },
];

const COMMERCIAL_GALLERY = [
  {
    title: "Structural Glazing and ACP Facades",
    desc: "Energy-efficient double-glazed unit (DGU) spider curtain walls, composite panel cladding, and integrated architectural exterior facade lighting.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    tag: "Commercial Facade",
  },
  {
    title: "Column-Free Large Span RCC Framing",
    desc: "Heavy-load post-tensioned beam design maximizing open carpet area for flexible corporate office and retail showroom layouts.",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&q=80&w=800",
    tag: "Civil and Structural",
  },
  {
    title: "Central HVAC and Fire Safety Infrastructure",
    desc: "Certified commercial fire sprinkler networks, automated smoke damper ventilation, and multi-tier MEP engineering to pass all regulatory inspections.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800",
    tag: "MEP Engineering",
  },
];

const COMMERCIAL_SEGMENTS = [
  {
    title: "Corporate Offices and IT Centers",
    desc: "High-density workspaces with acoustic drop ceilings, raised access flooring for structured cabling, and smart access control.",
    icon: Building2,
  },
  {
    title: "Retail Showrooms and Boutiques",
    desc: "Grand street-facing facades with maximum glass frontage, double-height display areas, and customer parking layouts.",
    icon: Compass,
  },
  {
    title: "Hospitals and Diagnostic Hubs",
    desc: "Cleanroom grade flooring, medical gas line conduits, radiation-shielded radiology rooms, and stretcher-friendly ramps.",
    icon: ShieldCheck,
  },
  {
    title: "Warehouses and PEB Sheds",
    desc: "High-tensile steel portals with clear heights up to 12 meters, laser-screeded vacuum dewatered trimix flooring, and docking bays.",
    icon: Zap,
  },
];

export default function CommercialConstructionPage() {
  return (
    <LandingPageLayout pageName="Commercial Construction Lucknow">
      {/* Hero Section */}
      <section className="relative bg-white text-gray-900 pt-8 pb-16 overflow-hidden border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs sm:text-sm font-semibold tracking-wide">
                <Building2 className="w-4 h-4 text-blue-600" />
                Institutional, Retail and Corporate Civil Engineering in Lucknow
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
                Commercial <span className="text-amber-500">Building Construction</span> in Lucknow
              </h1>

              <p className="text-base sm:text-lg text-gray-700 max-w-2xl leading-relaxed">
                Turnkey commercial construction for corporate offices, retail hubs, healthcare clinics, and shopping complexes.
                Engineered for maximum usable floor plate efficiency, full LDA compliance, and fast-track delivery.
              </p>

              {/* Quick Feature Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg p-2.5">
                  <FileCheck2 className="w-5 h-5 text-amber-500 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-gray-800">LDA and Fire NOC</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg p-2.5">
                  <Clock className="w-5 h-5 text-amber-500 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-gray-800">Penalty-Backed SLA</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg p-2.5 col-span-2 sm:col-span-1">
                  <Flame className="w-5 h-5 text-amber-500 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-gray-800">Heavy MEP Ready</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2 justify-center lg:justify-start">
                <a
                  href="#commercial-enquiry"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 text-black font-bold text-sm sm:text-base hover:bg-amber-400 transition-all shadow-md hover:shadow-lg"
                >
                  Request Commercial BOQ
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

            {/* Right: Featured Commercial Visual & Form */}
            <div id="commercial-enquiry" className="lg:col-span-5 space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 group">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"
                  alt="Commercial Office Tower Construction Lucknow"
                  className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex items-end p-5">
                  <div className="text-white">
                    <span className="text-xs uppercase tracking-wider font-semibold text-amber-400">Commercial Standard</span>
                    <h3 className="text-lg font-bold">Modern Glass Facade and Retail Plaza Execution</h3>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg">
                <div className="mb-4">
                  <span className="text-xs uppercase tracking-wider text-amber-600 font-bold">Fast Turnaround</span>
                  <h2 className="text-xl font-bold text-gray-900">Commercial Project Inquiry</h2>
                  <p className="text-xs text-gray-600">Connect with our chief commercial project engineer.</p>
                </div>
                <EnquiryForm
                  defaultService="Commercial Construction Lucknow"
                  buttonText="Get Commercial Estimate"
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
            <span className="text-xs uppercase tracking-wider text-amber-600 font-bold">Engineering Prowess</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
              Commercial Infrastructure Capabilities
            </h2>
            <p className="text-gray-600 mt-3 text-sm sm:text-base">
              From heavy foundation civil works to structural curtain walling and high-occupancy MEP systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {COMMERCIAL_GALLERY.map((item, idx) => (
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

      {/* Commercial Sectors Served */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-wider text-amber-600 font-bold">Sectors</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
              Tailored Solutions For Every Industry
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMMERCIAL_SEGMENTS.map((seg, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-gray-200 bg-white hover:border-amber-400 transition-colors shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 mb-4">
                  <seg.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  {seg.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                  {seg.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-wider text-amber-600 font-bold">Clarity and Guidance</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-2">
              Commercial Construction FAQs
            </h2>
          </div>
          <FAQSection faqs={COMMERCIAL_FAQS} />
        </div>
      </section>
    </LandingPageLayout>
  );
}
