import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    "Residential Construction",
    "Commercial Buildings",
    "Turnkey Projects",
    "Renovation & Restoration",
    "Interior Design",
    "Project Management"
  ];

  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
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
                <h3 className="text-xl font-bold">Estarra</h3>
                <p className="text-gray-300 text-sm font-semibold">Shine Higher</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Building dreams with 15+ years of excellence in construction and engineering. From concept to completion, we deliver quality that lasts.
            </p>
            <div className="text-sm text-gray-400">
              <p className="font-semibold text-gray-300">Powered by Ishtika Engineers</p>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services" 
                    className="text-gray-300 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block duration-300"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(link.href.substring(1))?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                <div>
                  <a 
                    href="tel:+917392861099" 
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    +91 7392861099
                  </a>
                  <p className="text-xs text-gray-500">Mon-Sat 9AM-7PM</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                <div>
                  <a 
                    href="mailto:estarragroup@gmail.com" 
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    estarragroup@gmail.com
                  </a>
                  <p className="text-xs text-gray-500">24hr response time</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                <div>
                  <span className="text-gray-300 text-sm">Lucknow, Uttar Pradesh</span>
                  <p className="text-xs text-gray-500">Visit by appointment</p>
                </div>
              </div>
            </div>

            <Button
              onClick={() => {
                const message = `Hi! I'm interested in Estarra's construction services. I'd like to discuss my project requirements.`;
                window.open(`https://wa.me/917392861099?text=${encodeURIComponent(message)}`, '_blank');
              }}
              className="bg-white hover:bg-gray-200 text-black font-semibold px-6 py-3 rounded-full text-sm transition-all hover:scale-105"
            >
              WhatsApp Us
            </Button>
          </div>
        </div>

        {/* Divider */}
  <div className="h-px bg-gray-700"></div>

        {/* Bottom Footer */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © {currentYear} Estarra Group. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Powered by Ishtika Engineers | Building Excellence Since 2008
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