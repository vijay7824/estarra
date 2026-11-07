"use client";

import { useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import { X, CheckCircle2, ArrowRight, Loader2, Phone, ShieldCheck, MessageSquare } from "lucide-react";
import { SITE_CONFIG } from "@/lib/seo-config";
import { trackEvent } from "@/lib/analytics";

interface EnquiryPopupProps {
  sourcePage?: string;
  delayMs?: number;
}

const POPULAR_SERVICES = [
  "Residential Construction",
  "Turnkey Construction (Plot to Keys)",
  "Villa Construction",
  "Commercial Construction",
  "Architecture & 3D Planning",
  "Interior Design & Execution",
  "Renovation & Remodeling",
  "Project Management & Consulting",
];

const BUDGET_RANGES = [
  "Select...",
  "Under ₹30 Lakhs",
  "₹30 Lakhs - ₹50 Lakhs",
  "₹50 Lakhs - ₹80 Lakhs",
  "₹80 Lakhs - ₹1.5 Crore",
  "Above ₹1.5 Crore",
];

// In-memory session flag: resets on browser refresh/reload, but stays true during client-side route navigation
let hasTriggeredInSession = false;

export default function EnquiryPopup({
  sourcePage,
  delayMs = 1500,
}: EnquiryPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [service, setService] = useState(POPULAR_SERVICES[0]);
  const [location, setLocation] = useState("");
  const [area, setArea] = useState("");
  const [budget, setBudget] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedWaUrl, setSubmittedWaUrl] = useState("");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const pathname = usePathname();
  const currentPage = sourcePage || (pathname === "/" ? "Homepage" : pathname);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    trackEvent("lead_popup_dismissed", { source_page: currentPage });
  }, [currentPage]);

  // Open popup only once per visit / refresh (does NOT pop up again when clicking between service links)
  useEffect(() => {
    if (hasTriggeredInSession) return;
    hasTriggeredInSession = true;

    const timer = setTimeout(() => {
      setIsOpen(true);
      trackEvent("lead_popup_opened", { source_page: currentPage });
    }, delayMs);

    return () => clearTimeout(timer);
  }, [delayMs, currentPage]);

  // ESC key listener
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    const cleanPhone = phone.replace(/\D/g, "");
    if (cleanPhone.length < 10) {
      setErrorMsg("Please enter a valid 10-digit mobile number");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim() || "Prospective Client",
          phone: cleanPhone,
          service,
          location: location.trim() || "Lucknow",
          area: area ? `${area} sq ft` : undefined,
          budget: budget && budget !== "Select..." ? budget : undefined,
          sourcePage: `Popup: ${currentPage}`,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to submit lead");
      }

      const waUrl =
        data.whatsappUrl ||
        `${SITE_CONFIG.whatsappUrl}?text=${encodeURIComponent(
          `*New Estarra Construction Enquiry (Lucknow)*\n\n• Name: ${name}\n• Phone: ${cleanPhone}\n• Service: ${service}\n• Location: ${location || "Lucknow"}\n• Area: ${area || "Not specified"}\n• Budget: ${budget || "Not specified"}`
        )}`;

      setSubmittedWaUrl(waUrl);

      trackEvent("lead_form_submitted", {
        service,
        source_page: `Popup: ${currentPage}`,
        location,
        budget,
      });

      // Try opening WhatsApp
      try {
        window.open(waUrl, "_blank");
      } catch (err) {}

      setSubmitted(true);

      // Auto close after 3.5s
      setTimeout(() => {
        setIsOpen(false);
      }, 3500);
    } catch (err: any) {
      setErrorMsg(err.message || "Something went wrong. Please call directly.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col md:flex-row max-h-[92vh]"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          aria-label="Close dialog"
          className="absolute top-3.5 right-3.5 z-20 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition-all duration-150"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Left Visual Column (Desktop) */}
        <div className="hidden md:flex md:w-5/12 relative flex-col justify-between p-6 bg-gray-900 text-white overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800"
            alt="Estarra Construction Lucknow"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-transparent" />

          {/* Top Brand */}
          <div className="relative z-10">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
              Estarra Group
            </span>
            <p className="text-[11px] text-gray-300 mt-0.5">Civil Engineers & Builders</p>
          </div>

          {/* Bottom Highlights */}
          <div className="relative z-10 space-y-3">
            <h3 className="text-xl font-bold leading-snug">
              Building in Lucknow?
            </h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Get an engineer-reviewed per sq. ft. estimate and 3D architectural plan consultation for your plot.
            </p>

            <div className="pt-2 border-t border-white/15 space-y-1.5 text-[11px] text-gray-300">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>15-Year Structural Warranty</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Fixed BOQ • 0% Cost Overruns</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form Column */}
        <div className="w-full md:w-7/12 p-6 sm:p-7 flex flex-col justify-center overflow-y-auto bg-white">
          {submitted ? (
            <div className="text-center py-6 space-y-3 animate-in fade-in">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">
                Estimate Request Sent!
              </h3>
              <p className="text-xs text-gray-600 max-w-xs mx-auto leading-relaxed">
                We have dispatched your project details to our chief engineer via WhatsApp (<strong>{SITE_CONFIG.phoneDisplay}</strong>).
              </p>
              {submittedWaUrl && (
                <div className="pt-2">
                  <a
                    href={submittedWaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs px-4 py-2.5 rounded-xl shadow-sm"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-white" />
                    <span>Open in WhatsApp</span>
                  </a>
                </div>
              )}
            </div>
          ) : (
            <div>
              {/* Header */}
              <div className="mb-4 pr-6">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600">
                  Instant Site Inspection & Quote
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-1">
                  Get Construction Quote
                </h2>
                <p className="text-xs text-gray-500 mt-0.5">
                  Share your plot details to receive accurate per sq ft rates.
                </p>
              </div>

              {errorMsg && (
                <div className="mb-3 p-2.5 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl">
                  {errorMsg}
                </div>
              )}

              {/* Form - Arranged in exact sequence */}
              <form onSubmit={handleSubmit} className="space-y-3">
                {/* 1. Full name */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Full name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Verma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full h-10 px-3.5 text-xs sm:text-sm rounded-xl border border-gray-200 bg-gray-50/50 hover:border-gray-300 focus:bg-white focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-all text-gray-900"
                  />
                </div>

                {/* 2. Construction service */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Construction service
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full h-10 px-3.5 text-xs sm:text-sm rounded-xl border border-gray-200 bg-gray-50/50 hover:border-gray-300 focus:bg-white focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-all text-gray-900"
                  >
                    {POPULAR_SERVICES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 3. Plot location */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Plot location *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Gomti Nagar, Lucknow"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full h-10 px-3.5 text-xs sm:text-sm rounded-xl border border-gray-200 bg-gray-50/50 hover:border-gray-300 focus:bg-white focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-all text-gray-900"
                  />
                </div>

                {/* 4. Approximate built-up area (sq.ft.) */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Approximate built-up area (sq.ft.)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 2000"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="w-full h-10 px-3.5 text-xs sm:text-sm rounded-xl border border-gray-200 bg-gray-50/50 hover:border-gray-300 focus:bg-white focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-all text-gray-900"
                  />
                </div>

                {/* 5. Approximate budget */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Approximate budget
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full h-10 px-3.5 text-xs sm:text-sm rounded-xl border border-gray-200 bg-gray-50/50 hover:border-gray-300 focus:bg-white focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-all text-gray-900"
                  >
                    {BUDGET_RANGES.map((b) => (
                      <option key={b} value={b === "Select..." ? "" : b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 6. Phone number */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Phone number *
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 text-xs font-medium">
                      +91
                    </span>
                    <input
                      type="tel"
                      required
                      maxLength={10}
                      placeholder="10-digit mobile number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                      className="w-full h-10 pl-11 pr-3.5 text-xs sm:text-sm rounded-xl border border-gray-200 bg-gray-50/50 hover:border-gray-300 focus:bg-white focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-all text-gray-900"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full h-11 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-xl transition-all shadow-sm hover:shadow flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Request...</span>
                      </>
                    ) : (
                      <>
                        <span>Get Free Estimate & Site Visit</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                {/* Micro note */}
                <div className="flex items-center justify-center gap-1.5 text-[11px] text-gray-500 pt-1">
                  <Phone className="w-3 h-3 text-gray-400" />
                  <span>
                    Or call directly:{" "}
                    <a
                      href={`tel:${SITE_CONFIG.phoneTel}`}
                      className="font-semibold text-gray-700 underline hover:text-amber-600"
                    >
                      {SITE_CONFIG.phoneDisplay}
                    </a>
                  </span>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
