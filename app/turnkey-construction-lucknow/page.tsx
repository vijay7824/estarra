import type { Metadata } from "next";
import LandingPageLayout from "@/components/landing-page-layout";
import EnquiryForm from "@/components/enquiry-form";
import FAQSection, { FAQItem } from "@/components/faq-section";
import { SEO_PAGES, SITE_CONFIG } from "@/lib/seo-config";
import {
  Key,
  ShieldCheck,
  Clock,
  Compass,
  HardHat,
  Ruler,
  CheckCircle2,
  XCircle,
  Phone,
  ArrowRight,
  Calculator,
  Camera,
  FileCheck2,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: SEO_PAGES.turnkey.title,
  description: SEO_PAGES.turnkey.description,
  keywords: SEO_PAGES.turnkey.keywords,
  alternates: {
    canonical: SEO_PAGES.turnkey.canonical,
  },
  openGraph: {
    title: SEO_PAGES.turnkey.title,
    description: SEO_PAGES.turnkey.description,
    url: SEO_PAGES.turnkey.canonical,
    type: "website",
    locale: "en_IN",
    siteName: SITE_CONFIG.name,
  },
};

const TURNKEY_FAQS: FAQItem[] = [
  {
    question: "What exactly is included in a turnkey house construction contract?",
    answer:
      "Turnkey construction means you hand over a vacant plot and receive a 100% finished, ready-to-move-in house. It covers soil testing, architectural 2D/3D design, LDA map approvals, all civil raw materials (cement, steel, bricks, sand), labor, plumbing, electrical wiring, flooring, interior modular kitchen, wardrobes, false ceiling, and exterior painting.",
  },
  {
    question: "How do you guarantee completion without cost escalations?",
    answer:
      "We provide a legally binding itemized Bill of Quantities (BOQ) with fixed brand specifications and rates. Even if cement or steel market prices rise during construction, the contracted per sq ft rate remains fixed for our clients.",
  },
  {
    question: "Can I monitor daily construction progress if I am outside Lucknow or an NRI?",
    answer:
      "Yes. Over 40% of our turnkey clients are NRIs or professionals living outside Lucknow. We maintain a dedicated WhatsApp project group and client portal providing daily HD photo logs, drone video overviews, and weekly civil milestone reports.",
  },
  {
    question: "What happens if the project is delayed beyond the committed handover date?",
    answer:
      "Our turnkey agreements feature a clear liquidated damages clause. If construction is delayed past the agreed completion date (barring force majeure), Estarra pays a monthly financial penalty until handover.",
  },
];

const TURNKEY_GALLERY = [
  {
    title: "End-to-End Single Contract Handover",
    desc: "From initial bare plot excavation to fully furnished turnkey handover without coordinating multiple independent vendors.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800",
    tag: "Plot to Keys",
  },
  {
    title: "100% Managed Material Procurement",
    desc: "Certified Grade-A cement, Tata Tiscon steel, and factory-tested materials delivered and stored with zero hassle for the homeowner.",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&q=80&w=800",
    tag: "Material Logistics",
  },
  {
    title: "Move-in Ready Luxury Interiors",
    desc: "Complete interior carpentry, designer false ceilings, and certified plumbing pressure-tested before the key handover ceremony.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
    tag: "Finished Interiors",
  },
];

const SCOPES = [
  {
    icon: Compass,
    title: "1. Architecture and 3D Visuals",
    desc: "Complete 2D space planning, structural engineering drawings, and photorealistic 3D day/night elevations.",
  },
  {
    icon: FileCheck2,
    title: "2. Approvals and Sanctions",
    desc: "Assistance with LDA, Awas Vikas, electricity connection, and local municipal clearances.",
  },
  {
    icon: HardHat,
    title: "3. Robust Civil Structure",
    desc: "Heavy RCC framing, column plinths, red clay bricks, waterproofing, and structural earthquake safety compliance.",
  },
  {
    icon: Ruler,
    title: "4. Concealed MEP and Infrastructure",
    desc: "CPVC water lines, drainage, underground and overhead water tanks, and fire-resistant concealed electrical conduits.",
  },
  {
    icon: ShieldCheck,
    title: "5. Designer Finishes and Woodwork",
    desc: "Italian marble or glazed vitrified tiles, designer flush doors, modular kitchen cabinets, and luxury bath suites.",
  },
  {
    icon: Key,
    title: "6. Snag Audit and Final Handover",
    desc: "400+ point quality audit, deep cleaning, testing all fixtures, and handing over the keys on time.",
  },
];

export default function TurnkeyConstructionPage() {
  return (
    <LandingPageLayout pageName="Turnkey Construction Lucknow">
      {/* Hero Section */}
      <section className="relative bg-white text-gray-900 pt-8 pb-16 overflow-hidden border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs sm:text-sm font-semibold tracking-wide">
                <Key className="w-4 h-4 text-amber-600" />
                Single-Contract Turnkey House Construction in Lucknow
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
                Best <span className="text-amber-500">Turnkey Construction</span> Company in Lucknow
              </h1>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                Experience hassle-free home building. From architectural drawings and LDA map sanctioning to civil construction, luxury interiors, and key handover — Estarra delivers turnkey excellence.
              </p>

              {/* Quick Perks */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-left max-w-xl mx-auto lg:mx-0">
                <div className="flex items-center gap-2.5 bg-gray-50 border border-gray-200 rounded-xl p-3 shadow-xs">
                  <Clock className="w-5 h-5 text-amber-600 shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-gray-900 tracking-wide">On-Time Handover</span>
                </div>
                <div className="flex items-center gap-2.5 bg-gray-50 border border-gray-200 rounded-xl p-3 shadow-xs">
                  <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-gray-900 tracking-wide">15-Yr Warranty</span>
                </div>
                <div className="flex items-center gap-2.5 bg-gray-50 border border-gray-200 rounded-xl p-3 col-span-2 sm:col-span-1 shadow-xs">
                  <Key className="w-5 h-5 text-amber-600 shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-gray-900 tracking-wide">100% Turnkey</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="#lead-form-section"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-500 text-white font-semibold px-7 py-3.5 rounded-full shadow-lg shadow-primary-600/30 transition-all hover:scale-105"
                >
                  Book Free Turnkey Consultation
                  <ArrowRight className="w-4 h-4" />
                </a>

                <Link
                  href="/house-construction-cost-lucknow"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium px-6 py-3.5 rounded-full border border-gray-300 transition-all hover:scale-105"
                >
                  <Calculator className="w-4 h-4 text-amber-600" />
                  Estimate Turnkey Cost
                </Link>
              </div>
            </div>

            {/* Right Lead Capture Box with Visual */}
            <div id="lead-form-section" className="lg:col-span-5 space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 group">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200"
                  alt="Turnkey Luxury Home Handover Lucknow"
                  className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex items-end p-5">
                  <div className="text-white">
                    <span className="text-xs uppercase tracking-wider font-semibold text-amber-400">Delivered Turnkey</span>
                    <h3 className="text-lg font-bold">Independent Villa Handed Over On Time • Shaheed Path</h3>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl text-gray-900 border border-gray-200">
                <div className="mb-5 text-center">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                    No Contractor Hassle
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-2">
                    Start Your Turnkey Project
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    Meet our project director for a custom architectural and cost review.
                  </p>
                </div>

                <EnquiryForm
                  sourcePage="Turnkey Construction Lucknow - Hero Form"
                  defaultService="Complete Turnkey Construction"
                  buttonText="Schedule Turnkey Meeting and Quote"
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
            <span className="text-xs uppercase tracking-wider text-amber-600 font-bold">End-to-End Delivery</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
              Turnkey Construction In Action
            </h2>
            <p className="text-gray-600 mt-3 text-sm sm:text-base">
              A single point of contact for architectural drawings, civil engineering, material logistics, and finishing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TURNKEY_GALLERY.map((item, idx) => (
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

      {/* Scope of Work */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-700 bg-primary-50 px-3.5 py-1.5 rounded-full">
              Everything Under One Roof
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3">
              Comprehensive Scope of Work (Design to Key Handover)
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-3">
              You never have to deal with plumbers, electricians, or material vendors. We handle every detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SCOPES.map((scope) => {
              const Icon = scope.icon;
              return (
                <div
                  key={scope.title}
                  className="bg-white rounded-2xl p-7 border border-gray-200 shadow-xs hover:shadow-md transition-all hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center text-primary-700 mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{scope.title}</h3>
                  <p className="text-gray-600 text-sm mt-2 leading-relaxed">{scope.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison: Estarra vs Local Contractor */}
      <section className="py-20 bg-gray-50 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-700 bg-primary-50 px-3.5 py-1.5 rounded-full">
              Why Turnkey Matters
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3">
              Estarra Turnkey vs Traditional Local Contractors
            </h2>
          </div>

          <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-gray-900 text-white">
                  <tr>
                    <th className="py-4 px-6 font-semibold">Comparison Parameter</th>
                    <th className="py-4 px-6 font-semibold text-red-300">
                      Traditional Local Contractor
                    </th>
                    <th className="py-4 px-6 font-semibold text-emerald-300">
                      Estarra Turnkey Engineering
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-700">
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-6 font-semibold text-gray-900">Cost Transparency</td>
                    <td className="py-4 px-6 text-red-600">
                      <div className="flex items-center gap-1.5">
                        <XCircle className="w-4 h-4 shrink-0" />
                        <span>Vague verbal quotes, 25-40% extra costs later</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-emerald-700 font-medium">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                        <span>Fixed per-sqft BOQ contract, 0% escalation</span>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-6 font-semibold text-gray-900">Timeline Commitment</td>
                    <td className="py-4 px-6 text-red-600">
                      <div className="flex items-center gap-1.5">
                        <XCircle className="w-4 h-4 shrink-0" />
                        <span>Frequent delays with zero accountability</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-emerald-700 font-medium">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                        <span>Contractual date with delay penalty clause</span>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-6 font-semibold text-gray-900">Material Quality</td>
                    <td className="py-4 px-6 text-red-600">
                      <div className="flex items-center gap-1.5">
                        <XCircle className="w-4 h-4 shrink-0" />
                        <span>Unbranded cement and secondary steel</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-emerald-700 font-medium">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                        <span>100% UltraTech/ACC & Tata Tiscon Fe550D</span>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-6 font-semibold text-gray-900">Structural Warranty</td>
                    <td className="py-4 px-6 text-red-600">
                      <div className="flex items-center gap-1.5">
                        <XCircle className="w-4 h-4 shrink-0" />
                        <span>No warranty once payment is completed</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-emerald-700 font-medium">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                        <span>15-Year legal structural guarantee</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-700 bg-primary-50 px-3.5 py-1.5 rounded-full">
              Turnkey Queries
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-2">
              Frequently Asked Turnkey Questions
            </h2>
          </div>
          <FAQSection faqs={TURNKEY_FAQS} />
        </div>
      </section>
    </LandingPageLayout>
  );
}
