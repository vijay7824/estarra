"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X, ArrowRight, Calculator } from "lucide-react";
import { SITE_CONFIG } from "@/lib/seo-config";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSectionClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    if (pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  const handleGetQuote = () => {
    const popupBtn = document.getElementById("lead-form-section");
    if (popupBtn) {
      popupBtn.scrollIntoView({ behavior: "smooth" });
    } else {
      handleSectionClick("contact");
    }
    setMobileMenuOpen(false);
  };

  const pageLinks = [
    { name: "Home", href: "/", isPage: true },
    { name: "Residential", href: "/residential-construction-lucknow", isPage: true },
    { name: "Turnkey", href: "/turnkey-construction-lucknow", isPage: true },
    { name: "Cost Calculator", href: "/house-construction-cost-lucknow", isPage: true, isHighlight: true },
    { name: "Services", sectionId: "services", isPage: false },
    { name: "Projects", sectionId: "projects", isPage: false },
    { name: "About", sectionId: "about", isPage: false },
    { name: "Contact", sectionId: "contact", isPage: false },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gray-200/80 shadow-sm py-2"
          : "bg-white/90 backdrop-blur-sm border-b border-gray-100 py-2.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-8">
        <div className="flex justify-between items-center h-12">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0 group mr-2">
            <img
              src="/assets/logo-transparent.png"
              alt="Estarra Construction Lucknow"
              className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation Links - Sleek & Uncluttered */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            {pageLinks.map((item) => {
              const isActive = item.isPage && pathname === item.href;

              if (item.isPage) {
                return (
                  <Link
                    key={item.name}
                    href={item.href!}
                    className={`px-2 xl:px-2.5 py-1.5 rounded-full text-xs xl:text-[13px] font-medium transition-all whitespace-nowrap ${
                      isActive
                        ? "bg-primary-50 text-primary-700 font-semibold shadow-xs"
                        : item.isHighlight
                        ? "text-amber-700 hover:text-amber-800 hover:bg-amber-50/80 font-semibold"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              }

              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => handleSectionClick(item.sectionId!)}
                  className="px-2 xl:px-2.5 py-1.5 rounded-full text-xs xl:text-[13px] font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all whitespace-nowrap"
                >
                  {item.name}
                </button>
              );
            })}
          </nav>

          {/* Right Action Elements - Compact & Clean */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Phone Number - Minimalist */}
            <a
              href={`tel:${SITE_CONFIG.phoneTel}`}
              className="hidden md:flex items-center gap-1.5 text-xs font-semibold text-gray-700 hover:text-primary-600 px-2.5 py-1.5 rounded-full hover:bg-gray-100 transition-colors whitespace-nowrap"
              title={`Call Estarra Lucknow: ${SITE_CONFIG.phoneDisplay}`}
            >
              <div className="w-6 h-6 rounded-full bg-primary-100/80 flex items-center justify-center text-primary-700">
                <Phone className="w-3 h-3" />
              </div>
              <span className="hidden xl:inline">{SITE_CONFIG.phoneDisplay}</span>
            </a>

            {/* Get Free Quote Button - Compact Pill */}
            <Button
              onClick={handleGetQuote}
              size="sm"
              className="bg-primary-600 hover:bg-primary-700 text-white font-medium text-xs px-3 sm:px-4 py-1.5 h-8 rounded-full shadow-sm transition-all hover:scale-105 whitespace-nowrap"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-3 h-3 ml-1" />
            </Button>

            {/* Mobile Menu Toggle Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-gray-700 h-9 w-9 rounded-full hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-gray-200 px-4 pt-3 pb-5 space-y-1 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-1.5 pb-2 border-b border-gray-100">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3 py-2 rounded-xl text-xs font-medium text-center ${
                pathname === "/" ? "bg-primary-50 text-primary-700 font-semibold" : "bg-gray-50 text-gray-700"
              }`}
            >
              Home
            </Link>
            <Link
              href="/house-construction-cost-lucknow"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3 py-2 rounded-xl text-xs font-medium text-center ${
                pathname === "/house-construction-cost-lucknow"
                  ? "bg-amber-100 text-amber-900 font-semibold"
                  : "bg-amber-50 text-amber-800"
              }`}
            >
              Cost Calculator
            </Link>
          </div>

          <div className="py-2 space-y-1">
            <Link
              href="/residential-construction-lucknow"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-xl text-xs sm:text-sm font-medium ${
                pathname === "/residential-construction-lucknow"
                  ? "bg-primary-50 text-primary-700 font-semibold"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              Residential Construction
            </Link>

            <Link
              href="/turnkey-construction-lucknow"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-xl text-xs sm:text-sm font-medium ${
                pathname === "/turnkey-construction-lucknow"
                  ? "bg-primary-50 text-primary-700 font-semibold"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              Turnkey Construction
            </Link>

            {["Services", "Projects", "About", "Contact"].map((sec) => (
              <button
                key={sec}
                type="button"
                onClick={() => handleSectionClick(sec.toLowerCase())}
                className="block w-full text-left px-3 py-2 rounded-xl text-xs sm:text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                {sec}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-gray-100 flex items-center gap-2">
            <a
              href={`tel:${SITE_CONFIG.phoneTel}`}
              className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl text-xs font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-primary-600" />
              <span>{SITE_CONFIG.phoneDisplay}</span>
            </a>
            <Button
              onClick={handleGetQuote}
              className="flex-1 bg-primary-600 hover:bg-primary-700 text-white font-medium text-xs py-2 rounded-xl shadow-xs"
            >
              Get Free Quote
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
