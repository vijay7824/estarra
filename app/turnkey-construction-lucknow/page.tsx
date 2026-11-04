import type { Metadata } from "next";
import LandingPageLayout from "@/components/landing-page-layout";
import EnquiryForm from "@/components/enquiry-form";
import FAQSection, { FAQItem } from "@/components/faq-section";
import { SEO_PAGES, SITE_CONFIG } from "@/lib/seo-config";
import {
  ShieldCheck,
  CheckCircle2,
  XCircle,
  Clock,
  Key,
  Compass,
  FileCheck,
  Layers,
  Sparkles,
  Phone,
  ArrowRight,
  HardHat,
  Home,
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
    question: "What does 'Turnkey Construction' mean at Estarra Lucknow?",
    answer:
      "Turnkey construction means complete end-to-end project execution under a single contractual agreement. From initial soil testing, 3D architectural plans, and LDA municipal approvals, to civil construction, plumbing, electricals, tiling, painting, modular kitchen, and final deep cleaning — you receive a move-in ready home when you turn the key.",
  },
  {
    question: "How do you protect clients from material price hikes during construction?",
    answer:
      "Unlike traditional contractors who pass sudden cement and steel price hikes onto homeowners, Estarra locks in your project cost through a signed Bill of Quantities (BOQ) contract. The price agreed upon before breaking ground is the final price you pay.",
  },
  {
    question: "Do I need to visit the construction site daily?",
    answer:
      "No. Our turnkey service is designed specifically for busy professionals, doctors, government officers, and NRIs. A dedicated senior civil engineer supervises your site daily. You receive regular photo, video, and drone updates on WhatsApp, along with milestone test reports.",
  },
  {
    question: "Are interior finishes and modular kitchen included in the turnkey package?",
    answer:
      "Yes, our turnkey packages can be customized to include modular kitchens (marine ply with soft-close hardware), designer false ceilings, premium wardrobes, vanity counters, and exterior elevation treatments.",
  },
  {
    question: "What payment structure is followed for turnkey construction?",
    answer:
      "We operate on a 100% milestone-linked payment structure. You only pay for work that has been completed, inspected, and verified against quality parameters (e.g., foundation complete, ground floor slab cast, brickwork finished, etc.).",
  },
];

const SCOPES = [
  {
    icon: Compass,
    title: "1. Architecture & 3D Visuals",
    desc: "Vastu-compliant layouts, 3D photorealistic elevations, structural blueprints, and electrical/plumbing drawings.",
  },
  {
    icon: FileCheck,
    title: "2. Approvals & Sanctions",
    desc: "Assistance with LDA, Awas Vikas, or Zila Panchayat municipal map submissions, sanctioning, and compliance documentation.",
  },
  {
    icon: HardHat,
    title: "3. Heavy Civil Construction",
    desc: "Engineered foundation, anti-termite treatment, column beams, RCC roof slabs using UltraTech cement and Tata steel.",
  },
  {
    icon: Layers,
    title: "4. Concealed MEP & Infrastructure",
    desc: "CPVC water lines, drainage, underground & overhead water tanks, and flame-retardant concealed electrical wiring.",
  },
  {
    icon: Sparkles,
    title: "5. Designer Finishes & Interiors",
    desc: "Premium vitrified tiles / Italian marble, Asian Paints Royale finish, flush doors, UPVC windows, and modular kitchen.",
  },
  {
    icon: Key,
    title: "6. Handover with 15-Yr Warranty",
    desc: "Deep chemical cleaning, comprehensive 400+ quality checklist signoff, 15-year warranty certificate, and key handover.",
  },
];

const COMPARISON = [
  {
    feature: "Pricing Transparency",
    traditional: "Vague lump-sum quotes, frequent hidden extras, mid-project disputes",
    estarra: "Itemized BOQ contract with 0% cost escalation guarantee",
  },
  {
    feature: "Design & Approvals",
    traditional: "Homeowner must hire separate architects and manage LDA clearances",
    estarra: "In-house architects & engineers handle design and sanction end-to-end",
  },
  {
    feature: "Material Quality",
    traditional: "Unverified local brands, frequent material dilution on-site",
    estarra: "100% Grade-A certified brands (UltraTech, Tata, Jaquar) with lab test proofs",
  },
  {
    feature: "Timeline & Penalties",
    traditional: "Delays of 3-9 months are customary with zero accountability",
    estarra: "Contractual delivery date backed with delay compensation penalty clause",
  },
  {
    feature: "Site Supervision",
    traditional: "Left to unsupervised sub-contractors or local mistris",
    estarra: "Dedicated qualified civil engineer on-site daily with photo/video updates",
  },
  {
    feature: "Post-Handover Support",
    traditional: "Contractor disappears immediately after final payment",
    estarra: "15-Year structural warranty + 1-Year free maintenance support",
  },
];

export default function TurnkeyConstructionPage() {
  return (
    <LandingPageLayout pageName="Turnkey Construction Lucknow">
      {/* Hero Section */}
      <section className="relative bg-white text-gray-900 pt-8 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs sm:text-sm font-semibold tracking-wide">
                <Key className="w-4 h-4 text-amber-600" />
                Single-Contract Turnkey House Construction in Lucknow
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif leading-tight text-gray-900">
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
                  Estimate Turnkey Cost
                </Link>
              </div>
            </div>

            {/* Right Lead Capture Box */}
            <div id="lead-form-section" className="lg:col-span-5 scroll-mt-24">
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl text-gray-900 border border-gray-200">
                <div className="mb-5 text-center">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                    No Contractor Hassle
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold font-serif text-gray-900 mt-2">
                    Start Your Turnkey Project
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    Meet our project director for a custom architectural and cost review.
                  </p>
                </div>

                <EnquiryForm
                  sourcePage="Turnkey Construction Lucknow - Hero Form"
                  defaultService="Complete Turnkey Construction"
                  buttonText="Schedule Turnkey Meeting & Quote"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scope of Work */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-700 bg-primary-50 px-3.5 py-1.5 rounded-full">
              Everything Under One Roof
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-gray-900 mt-3">
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
                  className="bg-white rounded-2xl p-7 border border-gray-200/80 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center text-primary-700 mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 font-serif">{scope.title}</h3>
                  <p className="text-gray-600 text-sm mt-2 leading-relaxed">{scope.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Matrix: Traditional Contractor vs Estarra Turnkey */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-700 bg-primary-50 px-3.5 py-1.5 rounded-full">
              The Estarra Difference
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-gray-900 mt-3">
              Traditional Contractor vs. Estarra Turnkey Construction
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-3">
              Why leading Lucknow families and professionals trust Estarra over unorganized local contractors.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="py-4 px-6 text-sm font-semibold font-serif">Comparison Parameter</th>
                  <th className="py-4 px-6 text-sm font-semibold font-serif text-red-300">
                    Traditional Local Contractor
                  </th>
                  <th className="py-4 px-6 text-sm font-semibold font-serif text-emerald-300">
                    Estarra Turnkey Construction
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                {COMPARISON.map((row, idx) => (
                  <tr
                    key={row.feature}
                    className={idx % 2 === 0 ? "bg-white" : "bg-gray-50/60"}
                  >
                    <td className="py-4 px-6 font-semibold text-gray-900">{row.feature}</td>
                    <td className="py-4 px-6 text-gray-600">
                      <div className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        <span>{row.traditional}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-gray-900 bg-emerald-50/40">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="font-medium text-emerald-950">{row.estarra}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <FAQSection
        title="Turnkey Construction FAQs — Lucknow"
        subtitle="Clarifying how turnkey house construction works, contracts, and timelines in Lucknow."
        faqs={TURNKEY_FAQS}
      />

      {/* Bottom CTA Banner */}
      <section className="py-14 bg-primary-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif">
            Build Your Luxury Home in Lucknow Without the Daily Stress
          </h2>
          <p className="text-primary-200 text-sm sm:text-base">
            Contact our senior engineering team to review your plot, map out 3D designs, and establish fixed project budgets.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${SITE_CONFIG.phoneTel}`}
              className="inline-flex items-center gap-2 bg-white text-primary-900 hover:bg-gray-100 font-semibold px-6 py-3 rounded-full text-sm shadow-lg transition-transform hover:scale-105"
            >
              <Phone className="w-4 h-4 text-primary-700" />
              Call Directly: {SITE_CONFIG.phoneDisplay}
            </a>
            <a
              href="#lead-form-section"
              className="inline-flex items-center gap-2 bg-primary-700 hover:bg-primary-600 text-white font-semibold px-6 py-3 rounded-full text-sm border border-primary-500 transition-transform hover:scale-105"
            >
              Request Turnkey Proposal
            </a>
          </div>
        </div>
      </section>
    </LandingPageLayout>
  );
}

