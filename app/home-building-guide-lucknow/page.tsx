import type { Metadata } from "next";
import LandingPageLayout from "@/components/landing-page-layout";
import FAQSection, { FAQItem } from "@/components/faq-section";
import EnquiryForm from "@/components/enquiry-form";
import { SEO_PAGES, SITE_CONFIG } from "@/lib/seo-config";
import {
  BookOpen,
  CheckCircle2,
  FileCheck2,
  HardHat,
  Ruler,
  Compass,
  ArrowRight,
  ShieldAlert,
  Coins,
  Calculator,
  Phone,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: SEO_PAGES.guide.title,
  description: SEO_PAGES.guide.description,
  keywords: SEO_PAGES.guide.keywords,
  alternates: {
    canonical: SEO_PAGES.guide.canonical,
  },
  openGraph: {
    title: SEO_PAGES.guide.title,
    description: SEO_PAGES.guide.description,
    url: SEO_PAGES.guide.canonical,
    type: "website",
    locale: "en_IN",
    siteName: SITE_CONFIG.name,
  },
};

const GUIDE_FAQS: FAQItem[] = [
  {
    question: "Do I need LDA map sanction if my plot is outside municipal limits?",
    answer:
      "If your plot falls under Lucknow Development Authority (LDA) notified zones (including Gomti Nagar Extension, Sultanpur Road, and Amar Shaheed Path), LDA building bylaws approval is legally required. In Zila Panchayat or rural areas, regional panchayat NOC is mandatory. Always verify jurisdiction before excavating.",
  },
  {
    question: "Why is soil testing essential in Lucknow?",
    answer:
      "Lucknow’s terrain varies significantly: areas near the Gomti river basin (such as Gomti Nagar and Faizabad Road) often feature clayey alluvial or loose silt soils with high water tables, requiring deeper plinth beams, pile foundations, or raft slabs. Areas near Kanpur Road or Raebareli Road have firmer bearing capacity. Soil testing ensures you don't over-engineer or risk foundation settlement.",
  },
  {
    question: "How can I avoid contractor fraud and cost overruns?",
    answer:
      "Always sign a legally binding, line-item Bill of Quantities (BOQ) contract that specifies exact brands of cement, steel, tiles, and fittings. Never accept lump-sum oral promises. Link contractor payments to verified physical milestones (e.g. 15% after plinth casting, 20% after first floor slab casting), retaining 5-10% until final snag inspection.",
  },
  {
    question: "What is the standard curing period for RCC slabs in Lucknow?",
    answer:
      "Concrete slabs in Lucknow must be pond-cured continuously with water for a minimum of 14 to 21 days. In hot summer months (May–June), premature drying can cause plastic shrinkage micro-cracks, weakening structural strength.",
  },
];

const GUIDE_CHAPTERS = [
  {
    step: "Phase 1",
    title: "Plot Due Diligence and Soil Investigation",
    points: [
      "Verify 12-year non-encumbrance certificate and land registry title.",
      "Check ground water table level and test soil bearing capacity (SBC).",
      "Confirm plot coordinates against LDA Master Plan road alignments.",
    ],
  },
  {
    step: "Phase 2",
    title: "Vastu Architecture and 3D Planning",
    points: [
      "Align main entrance towards North or East for optimal Vastu energy.",
      "Draft 2D furniture layouts with zero dead hallway space.",
      "Finalize photorealistic 3D elevations and structural STAAD.Pro column schedules.",
    ],
  },
  {
    step: "Phase 3",
    title: "Budgeting and Contractor Contract Formulation",
    points: [
      "Prepare a line-item BOQ with clear material brands (UltraTech, Tata Tiscon).",
      "Include liquidated damage delay penalty clauses (e.g. ₹1,000/day).",
      "Establish a milestone-based fund disbursement schedule.",
    ],
  },
  {
    step: "Phase 4",
    title: "RCC Civil Structure and Plinth Engineering",
    points: [
      "Perform anti-termite chemical soil injection prior to PCC.",
      "Use primary Fe-550 TMT bars and minimum M20 grade concrete for columns.",
      "Cure RCC slabs for a minimum of 14–21 continuous days.",
    ],
  },
  {
    step: "Phase 5",
    title: "Brickwork, Concealed MEP and Waterproofing",
    points: [
      "Install CPVC pressure-tested plumbing lines with zero joints inside walls.",
      "Run fire-retardant concealed conduit wires with proper earthing pits.",
      "Apply polymer crystalline waterproofing on all wet bathroom areas.",
    ],
  },
  {
    step: "Phase 6",
    title: "Finishing, Quality Audit and Handover",
    points: [
      "Lay vitrified tiles / marble with laser leveling and zero lippage.",
      "Conduct 400+ point quality inspection covering electricals and doors.",
      "Collect 15-year structural warranty certificate upon key handover.",
    ],
  },
];

export default function HomeBuildingGuidePage() {
  return (
    <LandingPageLayout pageName="Home Building Guide Lucknow">
      {/* Hero Section */}
      <section className="relative bg-white text-gray-900 pt-8 pb-16 overflow-hidden border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs sm:text-sm font-semibold tracking-wide">
                <BookOpen className="w-4 h-4 text-amber-600" />
                Comprehensive Lucknow Construction Guide (2025-2026)
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
                Complete <span className="text-amber-500">Home Building Guide</span> for Lucknow
              </h1>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-normal max-w-2xl">
                Everything you need to know before laying your first brick. From soil testing and LDA map approvals to material budgeting, civil engineering stages, and handover checklists.
              </p>

              <div className="pt-2 flex flex-wrap justify-center lg:justify-start gap-3">
                <Link
                  href="/house-construction-cost-lucknow"
                  className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-full text-sm shadow-md transition-all hover:scale-105"
                >
                  <Calculator className="w-4 h-4" />
                  Calculate Lucknow Cost Per Sq Ft
                </Link>
                <a
                  href="#guide-chapters"
                  className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold px-6 py-3 rounded-full text-sm border border-gray-300 transition-all"
                >
                  Read 6-Phase Guide
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right: Guide Featured Visual & Consultation */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 group">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200"
                  alt="Architectural Blueprint and Home Construction Planning in Lucknow"
                  className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex items-end p-5">
                  <div className="text-white">
                    <span className="text-xs uppercase tracking-wider font-semibold text-amber-400">Blueprint to Keys</span>
                    <h3 className="text-lg font-bold">Lucknow Civil Engineering Roadmap</h3>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900">Need Free Construction Advice?</h3>
                <p className="text-xs text-gray-600 mt-1 mb-4">Connect with our principal civil engineer for plot layout guidance.</p>
                <EnquiryForm
                  defaultService="Home Building Guide Consultation"
                  buttonText="Talk to a Chief Engineer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guide Chapters Section */}
      <section id="guide-chapters" className="py-20 bg-gray-50 border-b border-gray-200 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-700 bg-primary-50 px-3.5 py-1.5 rounded-full">
              6-Phase Roadmap
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3">
              Step-by-Step House Construction Stages in Lucknow
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-2">
              Master the exact sequence followed by top civil engineering firms to avoid budget overruns and construction delays.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {GUIDE_CHAPTERS.map((ch, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all"
              >
                <div className="inline-block px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-bold uppercase mb-3">
                  {ch.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {ch.title}
                </h3>
                <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-gray-600">
                  {ch.points.map((pt, pIdx) => (
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
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-700 bg-primary-50 px-3.5 py-1.5 rounded-full">
              Expert Clarifications
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-2">
              Home Building Guide FAQs
            </h2>
          </div>
          <FAQSection faqs={GUIDE_FAQS} />
        </div>
      </section>
    </LandingPageLayout>
  );
}
