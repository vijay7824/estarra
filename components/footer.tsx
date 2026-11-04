"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/seo-config";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    { name: "Residential Construction (Lucknow)", href: "/residential-construction-lucknow" },
    { name: "Turnkey House Construction", href: "/turnkey-construction-lucknow" },
    { name: "House Construction Cost Calculator", href: "/house-construction-cost-lucknow" },
    { name: "Commercial Buildings", href: "/#services" },
    { name: "Renovation & Restoration", href: "/#services" },
    { name: "Interior Design & Architecture", href: "/#services" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Residential Construction", href: "/residential-construction-lucknow" },
    { name: "Turnkey Projects", href: "/turnkey-construction-lucknow" },
    { name: "Cost Calculator (Lucknow)", href: "/house-construction-cost-lucknow" },
    { name: "Projects", href: "/#projects" },
    { name: "About Us", href: "/#about" },
    { name: "Contact & Free Quote", href: "/#contact" }
  ];

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-black"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center gap-3">
              <div>
                <h3 className="text-xl font-bold font-serif">Estarra</h3>
                <p className="text-gray-300 text-sm font-semibold">Shine Higher</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm">
              Building dreams with 15+ years of excellence in residential and turnkey construction across Lucknow. From 3D planning to key handover, we deliver quality that lasts.
            </p>
            <div className="text-sm text-gray-400">
              <p className="font-semibold text-gray-300">Powered by Ishtika Engineers</p>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white font-serif">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    href={service.href} 
                    className="text-gray-300 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block duration-300"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white font-serif">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white font-serif">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <a 
                    href={`tel:${SITE_CONFIG.phoneTel}`} 
                    className="text-gray-300 hover:text-white transition-colors text-sm font-semibold"
                  >
                    {SITE_CONFIG.phoneDisplay}
                  </a>
                  <p className="text-xs text-gray-500">Mon-Sat 9AM-7PM</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <a 
                    href={`mailto:${SITE_CONFIG.email}`} 
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {SITE_CONFIG.email}
                  </a>
                  <p className="text-xs text-gray-500">24hr response time</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <span className="text-gray-300 text-sm">Gomti Nagar / Shaheed Path</span>
                  <p className="text-xs text-gray-400">Lucknow, Uttar Pradesh</p>
                </div>
              </div>
            </div>

            <Button
              onClick={() => {
                const message = `Hi! I'm interested in Estarra's construction services in Lucknow. I'd like to discuss my project requirements.`;
                window.open(`${SITE_CONFIG.whatsappUrl}?text=${encodeURIComponent(message)}`, '_blank');
              }}
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold px-6 py-3 rounded-full text-sm transition-all hover:scale-105"
            >
              WhatsApp Us
            </Button>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-800"></div>

        {/* Bottom Footer */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © {currentYear} Estarra Group. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Powered by Ishtika Engineers | Lucknow House Construction Since 2010
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-xs text-gray-500">
              <span>Made with care in Lucknow</span>
            </div>
            <Button
              onClick={scrollToTop}
              size="sm"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full p-2 transition-all hover:scale-110 group"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-radial from-white/10 to-transparent"></div>
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-radial from-white/10 to-transparent"></div>
    </footer>
  );
}
