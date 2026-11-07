import type { Metadata } from "next";
import LandingPageLayout from "@/components/landing-page-layout";
import EnquiryForm from "@/components/enquiry-form";
import FAQSection, { FAQItem } from "@/components/faq-section";
import { SEO_PAGES, SITE_CONFIG } from "@/lib/seo-config";
import {
  ClipboardCheck,
  ShieldCheck,
  CheckCircle2,
  Phone,
  ArrowRight,
  TrendingDown,
  FileSpreadsheet,
  Microscope,
  HardHat,
  SearchCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: SEO_PAGES.pmc.title,
  description: SEO_PAGES.pmc.description,
  keywords: SEO_PAGES.pmc.keywords,
  alternates: { canonical: SEO_PAGES.pmc.canonical },
  openGraph: {
    title: SEO_PAGES.pmc.title,
    description: SEO_PAGES.pmc.description,
    url: SEO_PAGES.pmc.canonical,
    type: "website",
    locale: "en_IN",
    siteName: SITE_CONFIG.name,
  },
};

const PMC_FAQS: FAQItem[] = [
  {
    question: "Why do I need an independent PMC engineer if I already hired a contractor?",
    answer:
      "Contractors often cut corners on steel grades, cement ratios, shuttering quality, or inflate BOQ measurements and running bills. An independent Estarra PMC engineer works 100% on your behalf — auditing material deliveries, verifying exact physical measurements before bill payment, and preventing 12% to 18% unnecessary cost overruns.",
  },
  {
    question: "What physical tests do you conduct on-site during house construction?",
    answer:
      "We conduct concrete slump cone workability tests before every pour, cast concrete test cubes for 7-day and 28-day compressive strength laboratory testing, verify steel TMT rebar bend tests, and perform rebound hammer non-destructive testing.",
  },
  {
    question: "Can I hire Estarra for intermittent milestone inspections rather than full-time?",
    answer:
      "Yes. We offer both full-time resident engineer packages and flexible milestone inspection packages (e.g. footing casting, plinth beam, each roof slab casting check, concealed MEP inspection, and final snag list handover audit).",
  },
  {
    question: "How do you audit contractor measurement bills?",
    answer:
      "Our quantity surveyors independently measure the physical site work with digital laser meters, cross-check against structural drawings, reconcile cement and steel consumption, and certify only the genuine payable amount before you release funds.",
  },
];

const PMC_GALLERY = [
  {
    title: "Non-Destructive Concrete and Rebar Testing",
    desc: "Rigorous laboratory and on-site testing ensuring concrete compressive strength and steel tensile specifications match IS code standards.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800",
    tag: "Quality Audit",
  },
  {
    title: "Contractor BOQ Vetting and Cost Control",
    desc: "Independent cross-examination of contractor estimates, line-item market rate benchmarking, and elimination of hidden clauses.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
    tag: "Bill Verification",
  },
  {
    title: "Daily Milestone and Drone Inspection Logs",
    desc: "Transparent visual progress reports sent directly to your phone, flagging structural anomalies before concrete pours occur.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800",
    tag: "Site Supervision",
  },
];

const PMC_SERVICES = [
  {
    title: "Contractor Bill and BOQ Vetting",
    desc: "Laser measurement verification of all completed civil works to prevent inflated billings and unauthorized extra claims.",
    icon: FileSpreadsheet,
  },
  {
    title: "On-Site Quality Supervision",
    desc: "Checking shuttering alignment, rebar spacing, cover blocks, vibrator usage, and 14-day curing compliance.",
    icon: HardHat,
  },
  {
    title: "Material Laboratory Testing",
    desc: "Cube compressive testing, aggregate silt test, steel tensile testing, and moisture content analysis.",
    icon: Microscope,
  },
  {
    title: "Pre-Handover Snag List Audit",
    desc: "400+ point comprehensive inspection of doors, tile hollows, plumbing pressure, electrical loops, and paint finish.",
    icon: SearchCheck,
  },
];

export default function ProjectManagementConsultingPage() {
  return (
    <LandingPageLayout pageName="Project Management and Consulting Lucknow">
      {/* Hero Section */}
      <section className="relative bg-white text-gray-900 pt-8 pb-16 overflow-hidden border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs sm:text-sm font-semibold tracking-wide">
                <ClipboardCheck className="w-4 h-4 text-cyan-600" />
                Third-Party Civil Engineering Supervision and PMC in Lucknow
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
                Construction <span className="text-amber-500">Project Management</span> and Consulting in Lucknow
              </h1>

              <p className="text-base sm:text-lg text-gray-700 max-w-2xl leading-relaxed">
                Protect your home investment. Our senior civil engineering consultants act as your independent advocates
                — auditing on-site concrete and steel quality, vetting contractor bills, and enforcing zero compromise on structural safety.
              </p>

              {/* Quick Feature Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg p-2.5">
                  <TrendingDown className="w-5 h-5 text-amber-500 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-gray-800">Save 12-18% Overrun</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg p-2.5">
                  <ShieldCheck className="w-5 h-5 text-amber-500 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-gray-800">100% Client Loyalty</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg p-2.5 col-span-2 sm:col-span-1">
                  <Microscope className="w-5 h-5 text-amber-500 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-gray-800">Lab Material Testing</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2 justify-center lg:justify-start">
                <a
                  href="#pmc-consult"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 text-black font-bold text-sm sm:text-base hover:bg-amber-400 transition-all shadow-md hover:shadow-lg"
                >
                  Consult A PMC Engineer
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
            <div id="pmc-consult" className="lg:col-span-5 space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 group">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200"
                  alt="Senior Civil Engineer Inspecting Steel Structure Lucknow"
                  className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex items-end p-5">
                  <div className="text-white">
                    <span className="text-xs uppercase tracking-wider font-semibold text-amber-400">Independent Oversight</span>
                    <h3 className="text-lg font-bold">On-Site Structural Inspection and Slab Audit</h3>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg">
                <div className="mb-4">
                  <span className="text-xs uppercase tracking-wider text-amber-600 font-bold">Fast Turnaround</span>
                  <h2 className="text-xl font-bold text-gray-900">Request PMC Inspection Proposal</h2>
                  <p className="text-xs text-gray-600">Share your project location and current construction phase.</p>
                </div>
                <EnquiryForm
                  defaultService="Project Management and Consulting Lucknow"
                  buttonText="Get PMC Proposal"
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
            <span className="text-xs uppercase tracking-wider text-amber-600 font-bold">Auditing Excellence</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
              PMC Inspection Capabilities
            </h2>
            <p className="text-gray-600 mt-3 text-sm sm:text-base">
              How our certified engineers ensure your home is built exactly to structural specifications without cost inflation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PMC_GALLERY.map((item, idx) => (
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

      {/* PMC Core Pillars */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-wider text-amber-600 font-bold">Comprehensive Protection</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
              Our 4 Pillars of Project Management
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PMC_SERVICES.map((srv, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-gray-200 bg-white hover:border-amber-400 transition-colors shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 mb-4">
                  <srv.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  {srv.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                  {srv.desc}
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
            <span className="text-xs uppercase tracking-wider text-amber-600 font-bold">Frequently Asked</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-2">
              PMC and Civil Consulting FAQs
            </h2>
          </div>
          <FAQSection faqs={PMC_FAQS} />
        </div>
      </section>
    </LandingPageLayout>
  );
}
