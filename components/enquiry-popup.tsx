"use client";

import { useEffect, useState } from "react";
import { X, Sparkles, ShieldCheck, Clock, Award } from "lucide-react";
import EnquiryForm from "@/components/enquiry-form";
import { trackEvent } from "@/lib/analytics";

interface EnquiryPopupProps {
  sourcePage?: string;
  delayMs?: number;
}

const STORAGE_KEY = "estarra_lead_popup_closed";
const EXPIRY_DAYS = 3; // Re-open after 3 days if dismissed

export default function EnquiryPopup({
  sourcePage = "Homepage Landing",
  delayMs = 4500, // Pops up 4.5s after user lands
}: EnquiryPopupProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if dismissed recently
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const timestamp = parseInt(stored, 10);
        const now = Date.now();
        if (now - timestamp < EXPIRY_DAYS * 24 * 60 * 60 * 1000) {
          return;
        }
      }
    } catch (e) {
      // Ignore localStorage errors
    }

    const timer = setTimeout(() => {
      setIsOpen(true);
      trackEvent("lead_popup_opened", { source_page: sourcePage });
    }, delayMs);

    return () => clearTimeout(timer);
  }, [delayMs, sourcePage]);

  const handleClose = () => {
    setIsOpen(false);
    try {
      localStorage.setItem(STORAGE_KEY, Date.now().toString());
    } catch (e) {}
    trackEvent("lead_popup_dismissed", { source_page: sourcePage });
  };

  const handleSuccess = () => {
    try {
      // Permanent suppression once submitted
      localStorage.setItem(STORAGE_KEY, (Date.now() + 30 * 24 * 60 * 60 * 1000).toString());
    } catch (e) {}
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div 
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden animate-in zoom-in-95 duration-300 max-h-[92vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-all hover:rotate-90 duration-200"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Banner */}
        <div className="bg-gradient-to-r from-primary-700 via-primary-800 to-luxury-900 text-white p-6 sm:p-7 relative overflow-hidden">
          <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none" />
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-amber-300 text-xs font-semibold uppercase tracking-wider mb-2.5">
            <Sparkles className="w-3.5 h-3.5" />
            Special Lucknow Home Builders Offer
          </div>

          <h2 className="text-xl sm:text-2xl font-bold font-serif leading-tight">
            Plan Your Dream Home in Lucknow
          </h2>
          <p className="text-primary-100 text-xs sm:text-sm mt-1.5 leading-relaxed">
            Get a <strong>Free 3D Architectural Plan Consultation</strong>, Accurate Per-Sqft Cost Estimate & Free On-Site Inspection.
          </p>

          {/* Quick Badges */}
          <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-white/15 text-[11px] text-white/90">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>15-Yr Warranty</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Timely Handover</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>15+ Yrs Trust</span>
            </div>
          </div>
        </div>

        {/* Modal Body / Form */}
        <div className="p-5 sm:p-7 bg-white">
          <EnquiryForm
            sourcePage={`Popup: ${sourcePage}`}
            onSuccess={handleSuccess}
            buttonText="Get Instant Free Quote & Consultation"
          />
        </div>
      </div>
    </div>
  );
}

