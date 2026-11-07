import type { Metadata } from "next";
import LandingPageLayout from "@/components/landing-page-layout";
import EnquiryForm from "@/components/enquiry-form";
import FAQSection, { FAQItem } from "@/components/faq-section";
import { SEO_PAGES, SITE_CONFIG } from "@/lib/seo-config";
import {
  Hammer,
  ShieldCheck,
  CheckCircle2,
  Phone,
  ArrowRight,
  Sparkles,
  Layers,
  Wrench,
  Droplets,
  Building,
} from "lucide-react";

export const metadata: Metadata = {
  title: SEO_PAGES.renovation.title,
  description: SEO_PAGES.renovation.description,
  keywords: SEO_PAGES.renovation.keywords,
  alternates: { canonical: SEO_PAGES.renovation.canonical },
  openGraph: {
    title: SEO_PAGES.renovation.title,
    description: SEO_PAGES.renovation.description,
    url: SEO_PAGES.renovation.canonical,
    type: "website",
    locale: "en_IN",
    siteName: SITE_CONFIG.name,
  },
};

const RENOVATION_FAQS: FAQItem[] = [
  {
    question: "Can I add a first or second floor to my existing house in Lucknow?",
    answer:
      "Yes. Before adding a floor, our senior structural engineers conduct a non-destructive load-bearing assessment (rebound hammer and core test) on your foundation and existing columns. If required, we perform micro-concreting or steel column jacketing to safely support the additional floor.",
  },
  {
    question: "How do you prevent water seepage on old terrace slabs?",
    answer:
      "We apply a multi-tier elastomeric polymer chemical waterproofing membrane (Fosroc / Dr. Fixit Fastflex) combined with glass fiber mesh, followed by protective screed and brick-bat coba sloping towards drainage spouts.",
  },
  {
    question: "Can we live on the ground floor while renovation or floor addition takes place?",
    answer:
      "Yes. For vertical floor additions, we construct external scaffolding and temporary covered access chutes so daily civil work causes minimal disturbance to the family living on lower levels.",
  },
  {
    question: "What is the typical cost for a complete kitchen or bathroom renovation?",
    answer:
      "Bathroom renovation (complete retiling, concealed CPVC replumbing, and new sanitaryware) typically ranges from ₹75,000 to ₹1.5 Lakhs per bathroom. Kitchen civil remodeling with new counters and plumbing ranges from ₹1.2 to ₹3 Lakhs.",
  },
];

const RENOVATION_GALLERY = [
  {
    title: "Structural Floor Addition and Steel Retrofitting",
    desc: "Adding new bedrooms, family lounge, and terrace slabs safely with certified column jacketing and lightweight AAC block masonry.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800",
    tag: "Floor Addition",
  },
  {
    title: "Modern Exterior Facade and Balcony Makeover",
    desc: "Transforming 20-year-old traditional kothis into sleek contemporary homes with glass railings, textured exterior plaster, and louvers.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    tag: "Elevation Makeover",
  },
  {
    title: "Specialized Terrace and Wet Area Waterproofing",
    desc: "Polymer-modified chemical waterproofing membranes that eliminate dampness, efflorescence, and ceiling paint peeling permanently.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
    tag: "Waterproofing",
  },
];

const RENOVATION_SERVICES = [
  {
    title: "Vertical Floor Addition (G+1, G+2)",
    desc: "Complete civil construction of additional floors including slab casting, brickwork, plaster, flooring, and electrical wiring.",
    icon: Building,
  },
  {
    title: "Full Bathroom and Kitchen Makeover",
    desc: "Replacing old corroded GI pipes with concealed CPVC, modern anti-skid tile flooring, glass partitions, and wall-hung EWCs.",
    icon: Wrench,
  },
  {
    title: "Facade Remodeling and Balcony Redesign",
    desc: "Replacing outdated MS grills with toughened glass railings, adding wooden texture rafters, and installing LED profile lighting.",
    icon: Sparkles,
  },
  {
    title: "Dampness and Seepage Treatment",
    desc: "Pressure grouting, crystalline waterproofing, and chemical wall injection to cure rising dampness in older Lucknow foundations.",
    icon: Droplets,
  },
];

export default function RenovationRemodelingPage() {
  return (
    <LandingPageLayout pageName="Renovation and Remodeling Lucknow">
      {/* Hero Section */}
      <section className="relative bg-white text-gray-900 pt-8 pb-16 overflow-hidden border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-800 text-xs sm:text-sm font-semibold tracking-wide">
                <Hammer className="w-4 h-4 text-orange-600" />
                Expert Home Renovation, Floor Addition and Remodeling in Lucknow
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
                Home <span className="text-amber-500">Renovation and Remodeling</span> in Lucknow
              </h1>

              <p className="text-base sm:text-lg text-gray-700 max-w-2xl leading-relaxed">
                Rejuvenate your existing home with engineered floor additions, contemporary facade updates,
                luxurious bathroom and kitchen remodeling, and guaranteed chemical waterproofing.
                Zero structural guesswork.
              </p>

              {/* Quick Feature Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg p-2.5">
                  <ShieldCheck className="w-5 h-5 text-amber-500 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-gray-800">Structural Safety Audit</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg p-2.5">
                  <Droplets className="w-5 h-5 text-amber-500 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-gray-800">5-Yr Leak Guarantee</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg p-2.5 col-span-2 sm:col-span-1">
                  <Wrench className="w-5 h-5 text-amber-500 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-gray-800">Turnkey Handover</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2 justify-center lg:justify-start">
                <a
                  href="#renovation-inspection"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 text-black font-bold text-sm sm:text-base hover:bg-amber-400 transition-all shadow-md hover:shadow-lg"
                >
                  Book Site Renovation Audit
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
            <div id="renovation-inspection" className="lg:col-span-5 space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 group">
                <img
                  src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=1200"
                  alt="Home Renovation and Transformation Lucknow"
                  className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex items-end p-5">
                  <div className="text-white">
                    <span className="text-xs uppercase tracking-wider font-semibold text-amber-400">Transformation Project</span>
                    <h3 className="text-lg font-bold">2-Floor Addition and Modern Elevation • Indira Nagar</h3>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg">
                <div className="mb-4">
                  <span className="text-xs uppercase tracking-wider text-amber-600 font-bold">Fast Turnaround</span>
                  <h2 className="text-xl font-bold text-gray-900">Request Renovation Site Visit</h2>
                  <p className="text-xs text-gray-600">Our structural engineer will inspect your existing home.</p>
                </div>
                <EnquiryForm
                  defaultService="Renovation and Remodeling Lucknow"
                  buttonText="Schedule Site Inspection"
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
            <span className="text-xs uppercase tracking-wider text-amber-600 font-bold">Proven Craftsmanship</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
              Transformative Remodeling Capabilities
            </h2>
            <p className="text-gray-600 mt-3 text-sm sm:text-base">
              See how we modernize mature properties across Lucknow with engineered safety and luxury finishes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {RENOVATION_GALLERY.map((item, idx) => (
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

      {/* Renovation Services */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-wider text-amber-600 font-bold">Services</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
              Our Complete Renovation Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {RENOVATION_SERVICES.map((srv, idx) => (
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
            <span className="text-xs uppercase tracking-wider text-amber-600 font-bold">Answers</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-2">
              Renovation and Remodeling FAQs
            </h2>
          </div>
          <FAQSection faqs={RENOVATION_FAQS} />
        </div>
      </section>
    </LandingPageLayout>
  );
}
