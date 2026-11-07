import type { Metadata } from "next";
import LandingPageLayout from "@/components/landing-page-layout";
import EnquiryForm from "@/components/enquiry-form";
import FAQSection, { FAQItem } from "@/components/faq-section";
import { SEO_PAGES, SITE_CONFIG } from "@/lib/seo-config";
import {
  Armchair,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Phone,
  ArrowRight,
  Palette,
  Layers,
  Flame,
  Award,
} from "lucide-react";

export const metadata: Metadata = {
  title: SEO_PAGES.interior.title,
  description: SEO_PAGES.interior.description,
  keywords: SEO_PAGES.interior.keywords,
  alternates: { canonical: SEO_PAGES.interior.canonical },
  openGraph: {
    title: SEO_PAGES.interior.title,
    description: SEO_PAGES.interior.description,
    url: SEO_PAGES.interior.canonical,
    type: "website",
    locale: "en_IN",
    siteName: SITE_CONFIG.name,
  },
};

const INTERIOR_FAQS: FAQItem[] = [
  {
    question: "What materials do you use for modular kitchens and wardrobes in Lucknow?",
    answer:
      "We use 100% boiling waterproof (BWP) marine-grade plywood (IS 710) or high-density water-resistant HDHMR boards for base carcasses, paired with German soft-close hardware by Blum, Hafele, or Hettich. Exterior finishes include anti-scratch acrylic, PU lacquer paint, or natural wood veneers.",
  },
  {
    question: "What is the typical cost of 3BHK interior design in Lucknow?",
    answer:
      "A complete turnkey 3BHK interior package (including modular kitchen with quartz counter, 3 wardrobes, TV unit, POP false ceiling with COB/strip lights, and premium paint) generally ranges from ₹6.5 Lakhs for Essential to ₹14+ Lakhs for Luxury finishes.",
  },
  {
    question: "Do you offer a warranty on interior woodwork and hardware?",
    answer:
      "Yes. Estarra provides a 10-year warranty against termite attack and board delamination, plus up to a lifetime manufacturer replacement warranty on Blum and Hafele hinges and drawer channels.",
  },
  {
    question: "Can I customize the 3D interior design before production begins?",
    answer:
      "Yes. We create 360-degree photorealistic 3D interior renders of your living room, bedrooms, and kitchen. Factory cutting and pressing starts only after your 100% design sign-off.",
  },
];

const INTERIOR_GALLERY = [
  {
    title: "Acrylic and PU Modular Kitchens",
    desc: "Seamless handleless cabinets, tandem drawers, Kesseböhmer tall pantry pull-outs, and stain-resistant quartz stone countertops.",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800",
    tag: "Kitchens",
  },
  {
    title: "Floor-to-Ceiling Walk-In Wardrobes",
    desc: "Toughened fluted glass shutters, integrated sensor LED wardrobe rails, jewelry drawers, and velvet-lined compartments.",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800",
    tag: "Wardrobes",
  },
  {
    title: "Ambient False Ceiling and Profile Lighting",
    desc: "Saint-Gobain gypsum board false ceilings with concealed magnetic track lights, indirect warm LED coves, and acoustic wall panels.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800",
    tag: "Lighting and Ceilings",
  },
];

const MATERIAL_HIGHLIGHTS = [
  {
    title: "Core Woodwork",
    desc: "IS:710 Marine Grade BWP Plywood and Action TESA HDHMR boards for zero sagging and superior moisture resistance.",
  },
  {
    title: "German Hardware",
    desc: "Blum Clip Top Blumotion hinges, Hafele soft-closing drawer runners with 100,000+ open-close cycle certification.",
  },
  {
    title: "Surface Finishes",
    desc: "1.5mm anti-scratch acrylics, high-gloss PU lacquered finishes, and natural imported smoked veneers.",
  },
  {
    title: "Lighting Experience",
    desc: "Philips / Wipro commercial-grade LED drivers, magnetic track lights, and smart automated mood scene controllers.",
  },
];

export default function InteriorDesignPage() {
  return (
    <LandingPageLayout pageName="Interior Design Lucknow">
      {/* Hero Section */}
      <section className="relative bg-white text-gray-900 pt-8 pb-16 overflow-hidden border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-800 text-xs sm:text-sm font-semibold tracking-wide">
                <Armchair className="w-4 h-4 text-purple-600" />
                Turnkey Luxury Interior Design and Execution in Lucknow
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
                Turnkey <span className="text-amber-500">Interior Design</span> and Execution in Lucknow
              </h1>

              <p className="text-base sm:text-lg text-gray-700 max-w-2xl leading-relaxed">
                Elevate your living experience with bespoke modular kitchens, luxury wardrobes,
                false ceilings with magnetic track lighting, and premium Italian wall finishes.
                Executed with factory precision and guaranteed 10-year durability.
              </p>

              {/* Quick Feature Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg p-2.5">
                  <ShieldCheck className="w-5 h-5 text-amber-500 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-gray-800">10-Yr Wood Warranty</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg p-2.5">
                  <Sparkles className="w-5 h-5 text-amber-500 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-gray-800">German Hardware</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg p-2.5 col-span-2 sm:col-span-1">
                  <Palette className="w-5 h-5 text-amber-500 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-gray-800">3D Render Sign-Off</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2 justify-center lg:justify-start">
                <a
                  href="#interior-consult"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 text-black font-bold text-sm sm:text-base hover:bg-amber-400 transition-all shadow-md hover:shadow-lg"
                >
                  Book Interior Consultation
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
            <div id="interior-consult" className="lg:col-span-5 space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 group">
                <img
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200"
                  alt="Luxury Living Room Interior Design Lucknow"
                  className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex items-end p-5">
                  <div className="text-white">
                    <span className="text-xs uppercase tracking-wider font-semibold text-amber-400">Curated Interiors</span>
                    <h3 className="text-lg font-bold">Warm Modern Living Lounge • Gomti Nagar</h3>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg">
                <div className="mb-4">
                  <span className="text-xs uppercase tracking-wider text-amber-600 font-bold">Fast Turnaround</span>
                  <h2 className="text-xl font-bold text-gray-900">Request Interior Cost Estimate</h2>
                  <p className="text-xs text-gray-600">Get customized modular package quote for your home.</p>
                </div>
                <EnquiryForm
                  defaultService="Interior Design and Execution Lucknow"
                  buttonText="Get 3D Design and Quote"
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
            <span className="text-xs uppercase tracking-wider text-amber-600 font-bold">Exquisite Spaces</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
              Signature Interior Deliverables
            </h2>
            <p className="text-gray-600 mt-3 text-sm sm:text-base">
              Custom-manufactured modular cabinetry with German mechanical hardware and seamless factory edge banding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {INTERIOR_GALLERY.map((item, idx) => (
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

      {/* Material Standards */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-wider text-amber-600 font-bold">Quality Assured</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
              Engineered Materials and Hardware
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MATERIAL_HIGHLIGHTS.map((mat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-gray-200 bg-white hover:border-amber-400 transition-colors shadow-sm"
              >
                <h3 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-2">
                  {mat.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-3 leading-relaxed">
                  {mat.desc}
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
              Interior Design FAQs
            </h2>
          </div>
          <FAQSection faqs={INTERIOR_FAQS} />
        </div>
      </section>
    </LandingPageLayout>
  );
}
