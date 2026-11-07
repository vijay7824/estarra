"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  Home,
  Calculator,
  Building,
  Key,
  Castle,
  Building2,
  Compass,
  Armchair,
  Hammer,
  ClipboardCheck,
  BookOpen,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/seo-config";

interface ServiceItem {
  name: string;
  href: string;
  icon: any;
  desc: string;
}

const SERVICES_LIST: ServiceItem[] = [
  {
    name: "Residential Construction",
    href: "/residential-construction-lucknow",
    icon: Home,
    desc: "Independent homes, duplexes & builder floors",
  },
  {
    name: "Turnkey Construction",
    href: "/turnkey-construction-lucknow",
    icon: Key,
    desc: "Complete design to key handover solutions",
  },
  {
    name: "Villa Construction",
    href: "/villa-construction-lucknow",
    icon: Castle,
    desc: "Bespoke luxury bungalows & custom estates",
  },
  {
    name: "Commercial Construction",
    href: "/commercial-construction-lucknow",
    icon: Building2,
    desc: "Offices, retail showrooms & complexes",
  },
  {
    name: "Architecture and Planning",
    href: "/architecture-planning-lucknow",
    icon: Compass,
    desc: "Vastu 2D layouts, 3D elevations and LDA map sanction",
  },
  {
    name: "Interior Design and Execution",
    href: "/interior-design-lucknow",
    icon: Armchair,
    desc: "Modular kitchens, wardrobes and luxury finishes",
  },
  {
    name: "Renovation and Remodeling",
    href: "/renovation-remodeling-lucknow",
    icon: Hammer,
    desc: "Floor additions, structural repairs and waterproofing",
  },
  {
    name: "Project Management and Consulting",
    href: "/project-management-consulting-lucknow",
    icon: ClipboardCheck,
    desc: "Quality audits, BOQ verification and PMC supervision",
  },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [pathname]);

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

  const isServiceActive = SERVICES_LIST.some((s) => pathname === s.href);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gray-200/90 shadow-sm py-2"
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

          {/* Desktop Navigation Tabs */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {/* 1. Home */}
            <Link
              href="/"
              className={`px-3 py-1.5 rounded-full text-xs xl:text-[13px] font-medium transition-all whitespace-nowrap ${
                pathname === "/"
                  ? "bg-primary-50 text-primary-700 font-semibold shadow-xs"
                  : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              Home
            </Link>

            {/* 2. Cost Calculator */}
            <Link
              href="/house-construction-cost-lucknow"
              className={`px-3 py-1.5 rounded-full text-xs xl:text-[13px] font-medium transition-all whitespace-nowrap flex items-center gap-1.5 ${
                pathname === "/house-construction-cost-lucknow"
                  ? "bg-amber-100 text-amber-900 font-semibold"
                  : "text-amber-700 hover:text-amber-800 hover:bg-amber-50/80 font-semibold"
              }`}
            >
              <Calculator className="w-3.5 h-3.5 text-amber-600" />
              <span>Cost Calculator</span>
            </Link>

            {/* 3. Services Dropdown with Down Arrow */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                aria-expanded={servicesDropdownOpen}
                className={`px-3 py-1.5 rounded-full text-xs xl:text-[13px] font-medium transition-all whitespace-nowrap flex items-center gap-1 ${
                  isServiceActive || servicesDropdownOpen
                    ? "bg-primary-50 text-primary-700 font-semibold"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    servicesDropdownOpen ? "rotate-180 text-primary-700" : "text-gray-500"
                  }`}
                />
              </button>

              {/* Modern Mega Dropdown Card */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 w-[560px] bg-white rounded-2xl shadow-2xl border border-gray-200/90 p-4 grid grid-cols-2 gap-2 animate-in fade-in zoom-in-95 duration-200 z-50">
                  <div className="col-span-2 pb-2 mb-1 border-b border-gray-100 flex items-center justify-between text-[11px] text-gray-500 font-semibold uppercase tracking-wider">
                    <span>Our Construction & Engineering Services</span>
                    <button
                      type="button"
                      onClick={() => handleSectionClick("services")}
                      className="text-primary-600 hover:underline"
                    >
                      View All Services
                    </button>
                  </div>

                  {SERVICES_LIST.map((service) => {
                    const Icon = service.icon;
                    const isActive = pathname === service.href;

                    return (
                      <Link
                        key={service.name}
                        href={service.href}
                        className={`flex items-start gap-3 p-2.5 rounded-xl transition-all ${
                          isActive
                            ? "bg-primary-50/80 text-primary-900 border border-primary-200/60"
                            : "hover:bg-gray-50 text-gray-800"
                        }`}
                      >
                        <div className="w-8 h-8 rounded-lg bg-primary-100/70 flex items-center justify-center text-primary-700 shrink-0 mt-0.5">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="text-left">
                          <div className="text-xs font-bold leading-snug">{service.name}</div>
                          <div className="text-[11px] text-gray-500 line-clamp-1 mt-0.5 font-normal">
                            {service.desc}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* 4. Projects */}
            <button
              type="button"
              onClick={() => handleSectionClick("projects")}
              className="px-3 py-1.5 rounded-full text-xs xl:text-[13px] font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-all whitespace-nowrap"
            >
              Projects
            </button>

            {/* 5. Home Building Guide */}
            <Link
              href="/home-building-guide-lucknow"
              className={`px-3 py-1.5 rounded-full text-xs xl:text-[13px] font-medium transition-all whitespace-nowrap flex items-center gap-1.5 ${
                pathname === "/home-building-guide-lucknow"
                  ? "bg-primary-50 text-primary-700 font-semibold shadow-xs"
                  : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-primary-600" />
              <span>Home Building Guide</span>
            </Link>

            {/* 6. Contact */}
            <button
              type="button"
              onClick={() => handleSectionClick("contact")}
              className="px-3 py-1.5 rounded-full text-xs xl:text-[13px] font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-all whitespace-nowrap"
            >
              Contact
            </button>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Phone Pill */}
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

            {/* Get Free Quote CTA */}
            <Button
              onClick={handleGetQuote}
              size="sm"
              className="bg-primary-600 hover:bg-primary-700 text-white font-medium text-xs px-3.5 sm:px-4 py-1.5 h-8 rounded-full shadow-sm transition-all hover:scale-105 whitespace-nowrap"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-3 h-3 ml-1" />
            </Button>

            {/* Mobile Menu Toggle */}
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
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-gray-200 px-4 pt-3 pb-5 space-y-1 shadow-2xl animate-in slide-in-from-top-2 duration-200 max-h-[85vh] overflow-y-auto">
          {/* Quick Top Chips */}
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

          {/* Services Accordion with Toggle Arrow */}
          <div className="pt-1.5 pb-1">
            <button
              type="button"
              onClick={() => setMobileServicesExpanded(!mobileServicesExpanded)}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-gray-800 hover:bg-gray-50"
            >
              <span className="flex items-center gap-2">
                <Building className="w-4 h-4 text-primary-600" />
                <span>Our Services</span>
              </span>
              <ChevronDown
                className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                  mobileServicesExpanded ? "rotate-180 text-primary-600" : ""
                }`}
              />
            </button>

            {mobileServicesExpanded && (
              <div className="pl-4 pr-1 py-1 space-y-1 bg-gray-50/70 rounded-xl mt-1 border border-gray-100">
                {SERVICES_LIST.map((s) => (
                  <Link
                    key={s.name}
                    href={s.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-3 py-2 rounded-lg text-xs font-medium ${
                      pathname === s.href ? "bg-primary-100/70 text-primary-800 font-bold" : "text-gray-700"
                    }`}
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Remaining Independent Tabs */}
          <button
            type="button"
            onClick={() => handleSectionClick("projects")}
            className="block w-full text-left px-3 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Projects
          </button>

          <Link
            href="/home-building-guide-lucknow"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2.5 rounded-xl text-xs sm:text-sm font-medium ${
              pathname === "/home-building-guide-lucknow"
                ? "bg-primary-50 text-primary-700 font-semibold"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            Home Building Guide
          </Link>

          <button
            type="button"
            onClick={() => handleSectionClick("contact")}
            className="block w-full text-left px-3 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Contact
          </button>

          {/* Mobile Bottom Contact Call & Quote */}
          <div className="pt-3 border-t border-gray-100 flex items-center gap-2">
            <a
              href={`tel:${SITE_CONFIG.phoneTel}`}
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl text-xs font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-primary-600" />
              <span>{SITE_CONFIG.phoneDisplay}</span>
            </a>
            <Button
              onClick={handleGetQuote}
              className="flex-1 bg-primary-600 hover:bg-primary-700 text-white font-medium text-xs py-2.5 rounded-xl shadow-xs"
            >
              Get Free Quote
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
