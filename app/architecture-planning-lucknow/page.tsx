import type { Metadata } from "next";
import LandingPageLayout from "@/components/landing-page-layout";
import EnquiryForm from "@/components/enquiry-form";
import FAQSection, { FAQItem } from "@/components/faq-section";
import { SEO_PAGES, SITE_CONFIG } from "@/lib/seo-config";
import {
  Compass,
  FileCheck,
  CheckCircle2,
  Phone,
  ArrowRight,
  Sparkles,
  Layers,
  Ruler,
  Maximize2,
  FileText,
} from "lucide-react";

export const metadata: Metadata = {
  title: SEO_PAGES.architecture.title,
  description: SEO_PAGES.architecture.description,
  keywords: SEO_PAGES.architecture.keywords,
  alternates: { canonical: SEO_PAGES.architecture.canonical },
  openGraph: {
    title: SEO_PAGES.architecture.title,
    description: SEO_PAGES.architecture.description,
    url: SEO_PAGES.architecture.canonical,
    type: "website",
    locale: "en_IN",
    siteName: SITE_CONFIG.name,
  },
};

const ARCH_FAQS: FAQItem[] = [
  {
    question: "Do you provide Vastu-compliant architectural floor plans in Lucknow?",
    answer:
      "Yes. Every floor plan is designed around Vastu Shastra principles — optimizing master bedroom location (South-West), kitchen placement (South-East / Agni corner), main entrance orientation (North-East / Ishanya), and living room air cross-ventilation.",
  },
  {
    question: "What drawings are included in the complete architectural package?",
    answer:
      "Our comprehensive deliverable includes 5 full drawing sets: 1. 2D Architectural Furniture Layouts, 2. Photorealistic 3D Exterior Elevation, 3. STAAD.Pro Structural Column & Beam Schedule, 4. Concealed Electrical Loop Schematics, and 5. Plumbing & Drainage Schematics.",
  },
  {
    question: "Can Estarra help with LDA map sanction and building approvals?",
    answer:
      "Yes. We prepare compliant submission drawings adhering to the latest Lucknow Development Authority (LDA) and Awas Vikas building bylaws, setbacks, ground coverage, and FAR requirements.",
  },
  {
    question: "How long does it take to prepare 3D elevation and 2D floor plans?",
    answer:
      "Initial 2D floor plan options are delivered within 4 to 5 working days following site survey. Once finalized, photorealistic 3D elevations and structural drawings are completed within 7 to 10 working days.",
  },
];

const ARCH_GALLERY = [
  {
    title: "Vastu-Optimized 2D Space Planning",
    desc: "Zero-wastage room layouts designed to maximize natural sunlight, cross ventilation, and seamless family movement.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=800",
    tag: "2D Floor Plan",
  },
  {
    title: "Photorealistic 3D Day and Night Elevations",
    desc: "High-definition rendering showing realistic textures, Italian marble facade claddings, warm ambient lighting, and glass railings.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800",
    tag: "3D Elevation",
  },
  {
    title: "STAAD.Pro Structural Steel Engineering",
    desc: "Certified column, footing, and beam schedules calculated for seismic safety, soil load capacity, and optimal steel consumption.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800",
    tag: "Structural Design",
  },
];

const DRAWING_SETS = [
  {
    title: "1. 2D Architectural Masterplan",
    points: [
      "Room dimensions with furniture placement",
      "Door and window schedule with sizes",
      "Staircase and lift shaft details",
      "Setback and lawn clearance demarcation",
    ],
  },
  {
    title: "2. 3D Elevation and Exterior Finishes",
    points: [
      "Photorealistic front and corner angles",
      "Material and color palette specification",
      "Exterior lighting and accent wall details",
      "Balcony and terrace boundary designs",
    ],
  },
  {
    title: "3. Structural RCC Drawings",
    points: [
      "Plinth beam and footing layout",
      "Column reinforcement and stirrup details",
      "Roof slab and beam bar bending schedules",
      "Underground water tank structural design",
    ],
  },
  {
    title: "4. MEP Schematics (Electrical and Plumbing)",
    points: [
      "Concealed electrical conduit and switch loops",
      "AC outdoor unit and inverter point mapping",
      "Hot and cold water supply piping route",
      "Chamber and municipal drainage lines",
    ],
  },
];

export default function ArchitecturePlanningPage() {
  return (
    <LandingPageLayout pageName="Architecture and Planning Lucknow">
      {/* Hero Section */}
      <section className="relative bg-white text-gray-900 pt-8 pb-16 overflow-hidden border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-semibold tracking-wide">
                <Compass className="w-4 h-4 text-emerald-600" />
                Vastu-Compliant 2D Plans and 3D Elevations in Lucknow
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
                Architectural <span className="text-amber-500">Design and Planning</span> in Lucknow
              </h1>

              <p className="text-base sm:text-lg text-gray-700 max-w-2xl leading-relaxed">
                Transform your dream home concept into construction-ready blueprints.
                Estarra’s licensed architects and structural engineers provide complete Vastu layouts,
                stunning 3D elevations, STAAD.Pro structural engineering, and LDA approval assistance.
              </p>

              {/* Quick Feature Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg p-2.5">
                  <Ruler className="w-5 h-5 text-amber-500 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-gray-800">100% Vastu Align</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg p-2.5">
                  <Sparkles className="w-5 h-5 text-amber-500 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-gray-800">Photoreal 3D</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg p-2.5 col-span-2 sm:col-span-1">
                  <FileText className="w-5 h-5 text-amber-500 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-gray-800">LDA Sanction Ready</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2 justify-center lg:justify-start">
                <a
                  href="#architect-consult"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 text-black font-bold text-sm sm:text-base hover:bg-amber-400 transition-all shadow-md hover:shadow-lg"
                >
                  Consult An Architect
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

            {/* Right: Featured Hero Visual & Form */}
            <div id="architect-consult" className="lg:col-span-5 space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 group">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200"
                  alt="Architectural Planning and 3D Design in Lucknow"
                  className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex items-end p-5">
                  <div className="text-white">
                    <span className="text-xs uppercase tracking-wider font-semibold text-amber-400">Architectural Suite</span>
                    <h3 className="text-lg font-bold">Concept to Blueprints • 2D, 3D and Structural</h3>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg">
                <div className="mb-4">
                  <span className="text-xs uppercase tracking-wider text-amber-600 font-bold">Fast Turnaround</span>
                  <h2 className="text-xl font-bold text-gray-900">Request Architectural Consultation</h2>
                  <p className="text-xs text-gray-600">Share your plot dimensions for customized floor plan options.</p>
                </div>
                <EnquiryForm
                  defaultService="Architecture and Planning Lucknow"
                  buttonText="Get Floor Plan Options"
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
            <span className="text-xs uppercase tracking-wider text-amber-600 font-bold">Visual Deliverables</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
              Precision Architectural Drawings
            </h2>
            <p className="text-gray-600 mt-3 text-sm sm:text-base">
              Every detail is meticulously planned to avoid costly modifications during civil construction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ARCH_GALLERY.map((item, idx) => (
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

      {/* Deliverable Drawing Sets */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-wider text-amber-600 font-bold">What You Receive</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
              Complete Architectural Deliverable Kit
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DRAWING_SETS.map((set, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-gray-200 bg-white hover:border-amber-400 transition-colors shadow-sm"
              >
                <h3 className="text-base font-bold text-gray-900 border-b border-gray-100 pb-3">
                  {set.title}
                </h3>
                <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-gray-600">
                  {set.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-wider text-amber-600 font-bold">Common Queries</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-2">
              Architecture and Planning FAQs
            </h2>
          </div>
          <FAQSection faqs={ARCH_FAQS} />
        </div>
      </section>
    </LandingPageLayout>
  );
}
