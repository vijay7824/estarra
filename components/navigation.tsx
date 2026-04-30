"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X, ArrowRight } from "lucide-react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const handleGetQuote = () => {
    scrollToSection('contact');
  };

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-xl border-b border-primary-100 shadow-lg shadow-primary-100/20 py-2' 
        : 'bg-gradient-to-r from-primary-50/80 via-white/80 to-luxury-50/80 backdrop-blur-sm py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${
          isScrolled ? 'h-16' : 'h-20'
        }`}>
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-2 group"
            >
              <img 
                src="/assets/logo.jpeg" 
                alt="Estarra Logo" 
                className={`w-auto transition-all duration-300 ${
                  isScrolled 
                    ? 'h-12 md:h-16' 
                    : 'h-16 md:h-20'
                } border-0 shadow-none group-hover:scale-105`}
              />
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {['Home', 'Services', 'Projects', 'About', 'Contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="relative px-3 lg:px-4 py-2 text-gray-600 hover:text-primary-700 font-medium transition-all duration-300 rounded-full hover:bg-primary-50 group whitespace-nowrap"
              >
                <span className="relative z-10">{item}</span>
                <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-luxury-500 group-hover:w-4/5 group-hover:left-[10%] transition-all duration-300 rounded-full"></span>
              </button>
            ))}
          </div>
          
          {/* Right Side - Phone & CTA */}
          <div className="flex items-center gap-4">
            {/* Phone Number */}
            <a 
              href="tel:7800074443" 
              className="hidden md:flex items-center gap-2 text-gray-600 hover:text-primary-700 font-semibold transition-all duration-300 hover:scale-105"
            >
              <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center">
                <Phone className="w-4 h-4 text-primary-600" />
              </div>
              <span className="hidden md:inline">7800074443</span>
            </a>
            
            {/* Get Quote Button */}
            <Button
              onClick={handleGetQuote}
              className="hidden sm:flex bg-primary-600 hover:bg-primary-700 text-white font-semibold px-5 py-2 rounded-full shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 transition-all duration-300 hover:scale-105 group"
            >
              Get Quote
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-700 hover:text-primary-700 hover:bg-primary-50 rounded-full"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-t border-primary-100 shadow-xl">
            <div className="px-4 py-6 space-y-2 max-w-7xl mx-auto">
              {['Home', 'Services', 'Projects', 'About', 'Contact'].map((item, index) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-4 py-3 text-lg text-gray-700 hover:text-primary-700 font-medium transition-all duration-300 rounded-xl hover:bg-primary-50 hover:pl-6"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item}
                </button>
              ))}
              <div className="pt-4 border-t border-gray-100 mt-4 space-y-3">
                <a 
                  href="tel:7800074443" 
                  className="flex items-center px-4 py-3 text-primary-700 font-semibold rounded-xl hover:bg-primary-50 transition-all"
                >
                  <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center mr-3">
                    <Phone className="w-5 h-5 text-primary-600" />
                  </div>
                  7800074443
                </a>
                <Button
                  onClick={handleGetQuote}
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 rounded-full shadow-lg"
                >
                  Get Free Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
