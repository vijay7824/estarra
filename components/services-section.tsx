"use client";

import { CardContent } from "@/components/ui/card";
import { ElegantCard } from "@/components/ui/elegant-card";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Home, Building, Key, Wrench, Paintbrush, ClipboardList } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Construction",
    description: "Custom homes designed and built to your exact specifications. Structure starts from ₹1149/- per sqft, full finished starts from ₹1699/- per sqft.",
    color: "text-purple-600"
  },
  {
    icon: Building,
    title: "Commercial Buildings",
    description: "Professional commercial and institutional construction projects with modern design and functionality.",
    color: "text-purple-700"
  },
  {
    icon: Key,
    title: "Turnkey Projects",
    description: "Complete project solutions from design to delivery, handling every aspect of your construction needs.",
    color: "text-purple-800"
  },
  {
    icon: Wrench,
    title: "Renovation & Remodeling",
    description: "Transform existing spaces with innovative renovation and remodeling solutions that add value.",
    color: "text-purple-600"
  },
  {
    icon: Paintbrush,
    title: "Interior Design",
    description: "Complete interior design and execution services to create beautiful, functional living spaces.",
    color: "text-purple-700"
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    description: "Professional project management and consulting services to ensure timely and quality delivery.",
    color: "text-purple-800"
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239333ea' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection animation="slideUp" className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold">
              Our Expertise
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6">
            Our <span className="text-gradient">Premium</span> Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive construction solutions tailored to bring your vision to life with unmatched quality and precision.
          </p>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection 
              key={index}
              animation="scaleIn"
              delay={index * 100}
            >
              <ElegantCard className="h-full">
                <CardContent className="p-8 relative z-10">
                  <div className={`w-20 h-20 bg-${service.color.replace('text-', '')} bg-opacity-10 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                    <service.icon className={`w-10 h-10 ${service.color} drop-shadow-sm`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-700 transition-colors">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  {/* Hover effect overlay */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-purple-200/20 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </CardContent>
              </ElegantCard>
            </AnimatedSection>
          ))}
        </div>
        
        {/* Call to action */}
        <AnimatedSection animation="fadeIn" delay={800} className="text-center mt-16">
          <div className="glass-effect rounded-2xl p-8 inline-block border border-purple-200/30">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Project?</h3>
            <p className="text-gray-600 mb-6">Get a free consultation and quote for your construction needs.</p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="estarra-gradient text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all glow-effect shadow-xl hover:shadow-purple-500/50"
            >
              Get Free Quote
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

