"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { Home, Building, Key, Wrench, Paintbrush, ClipboardList, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Construction",
    description: "Build your dream home with Estarra's expert residential construction services. We deliver strong, durable, and modern homes using high-quality materials and advanced construction techniques.",
    pricing: [
      { label: "Structure starts from", price: "₹1149/sqft" },
      { label: "Full finished starts from", price: "₹1699/sqft" }
    ],
    features: [
      "Customized Home Construction",
      "Strong Structural Quality",
      "Modern Designs & Finishing",
      "On-Time Delivery"
    ]
  },
  {
    icon: Building,
    title: "Commercial Construction",
    description: "We specialize in building high-performance commercial spaces including offices, showrooms, and retail outlets designed for functionality and long-term value.",
    pricing: [
      { label: "Starting from", price: "₹1299/sqft" }
    ],
    features: [
      "Office & Retail Construction",
      "Scalable & Modern Designs",
      "Efficient Project Execution",
      "Durable Construction Standards"
    ]
  },
  {
    icon: Key,
    title: "Turnkey Projects",
    description: "From concept to completion, Estarra handles everything—design, planning, construction, and finishing—so you don't have to manage multiple vendors.",
    pricing: [],
    features: [
      "End-to-End Project Execution",
      "Single Point Responsibility",
      "Hassle-Free Experience",
      "Budget & Timeline Control"
    ]
  },
  {
    icon: Wrench,
    title: "Renovation & Remodeling",
    description: "Upgrade your existing space with modern designs and improved functionality. We transform spaces with precision and creativity.",
    pricing: [],
    features: [
      "Home & Office Renovation",
      "Space Optimization",
      "Modern Upgrades",
      "Value Enhancement"
    ]
  },
  {
    icon: Paintbrush,
    title: "Interior Design",
    description: "We design and execute interiors that reflect your lifestyle and elevate your space with premium finishes and seamless execution.",
    pricing: [],
    features: [
      "Customized Interior Designs",
      "Modern & Functional Spaces",
      "Complete Execution",
      "Premium Finishes"
    ]
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    description: "We manage your construction project from start to finish—handling planning, budgeting, coordination, and execution efficiently.",
    pricing: [],
    features: [
      "End-to-End Management",
      "Cost & Time Control",
      "Site Supervision",
      "Transparent Updates"
    ]
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-gradient-to-br from-white via-gray-50 to-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <AnimatedSection animation="slideUp" className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold">
              Our Expertise
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6">
            Our <span className="text-gradient">Premium</span> Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Premium construction & interior solutions in Lucknow
          </p>
        </AnimatedSection>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <AnimatedSection 
              key={index}
              animation="scaleIn"
              delay={index * 100}
            >
              <div className="group bg-white rounded-2xl p-6 shadow-[0_0_40px_-10px_rgba(59,130,246,0.15)] hover:shadow-[0_0_50px_-5px_rgba(59,130,246,0.25)] transition-all duration-300 hover:-translate-y-2 border border-gray-50 h-full flex flex-col">
                {/* Icon */}
                <div className="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-purple-100 transition-colors">
                  <service.icon className="w-7 h-7 text-purple-600" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                
                {/* Pricing */}
                {service.pricing.length > 0 && (
                  <div className="mb-4 space-y-2">
                    {service.pricing.map((price, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm bg-purple-50/50 px-3 py-2 rounded-lg">
                        <span className="text-purple-600 font-medium">₹</span>
                        <span className="text-gray-600">{price.label}</span>
                        <span className="font-bold text-purple-700 ml-auto">{price.price}</span>
                      </div>
                    ))}
                  </div>
                )}
                
                {/* Features */}
                <ul className="space-y-3 mb-6 flex-grow">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-600">
                      <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* CTA Button */}
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30"
                >
                  Start Your Project with Expert Guidance
                </button>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

