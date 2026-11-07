"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Loader2, Phone, Send, MessageSquare, ExternalLink, ShieldCheck } from "lucide-react";
import { SITE_CONFIG } from "@/lib/seo-config";
import { trackEvent } from "@/lib/analytics";

interface EnquiryFormProps {
  sourcePage?: string;
  defaultService?: string;
  onSuccess?: () => void;
  compact?: boolean;
  buttonText?: string;
}

const SERVICES = [
  "Residential Construction",
  "Turnkey Construction",
  "Villa Construction",
  "Commercial Construction",
  "Architecture & Planning",
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

export default function EnquiryForm({
  sourcePage = "Landing Page",
  defaultService = "Residential Construction",
  onSuccess,
  compact = false,
  buttonText = "Request Free Site Visit & Quote",
}: EnquiryFormProps) {
  const [name, setName] = useState("");
  const [service, setService] = useState(defaultService);
  const [location, setLocation] = useState("");
  const [area, setArea] = useState("");
  const [budget, setBudget] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedWaUrl, setSubmittedWaUrl] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

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
          sourcePage,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Something went wrong");
      }

      const waUrl =
        data.whatsappUrl ||
        `${SITE_CONFIG.whatsappUrl}?text=${encodeURIComponent(
          `*New Estarra Construction Enquiry (Lucknow)*\n\n• Name: ${name}\n• Phone: ${cleanPhone}\n• Service: ${service}\n• Location: ${location || "Lucknow"}\n• Area: ${area || "Not specified"}\n• Budget: ${budget || "Not specified"}`
        )}`;

      setSubmittedWaUrl(waUrl);

      trackEvent("lead_form_submitted", {
        service,
        source_page: sourcePage,
        location,
        budget,
      });

      try {
        window.open(waUrl, "_blank");
      } catch (openErr) {
        console.warn("Auto-popup blocked, user can click button", openErr);
      }

      setSubmitted(true);
      if (onSuccess) {
        onSuccess();
      }
    } catch (err: any) {
      console.error("Lead form error:", err);
      setErrorMsg(err.message || "Failed to submit. Please call us directly.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center space-y-3.5 animate-in fade-in zoom-in-95 duration-200">
        <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900 tracking-tight">
            Consultation Request Logged
          </h3>
          <p className="text-gray-600 text-xs sm:text-sm mt-1 max-w-sm mx-auto leading-relaxed">
            Your requirements have been dispatched to our engineering desk via WhatsApp (<strong>{SITE_CONFIG.phoneDisplay}</strong>).
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2.5">
          <a
            href={submittedWaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold px-5 py-2.5 rounded-xl text-xs shadow-sm transition-all"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-white" />
            <span>Open in WhatsApp</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href={`tel:${SITE_CONFIG.phoneTel}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-white hover:bg-gray-100 text-gray-800 font-semibold px-4 py-2.5 rounded-xl text-xs border border-gray-300 shadow-xs transition-all"
          >
            <Phone className="w-3.5 h-3.5 text-gray-600" />
            <span>Call Desk: {SITE_CONFIG.phoneDisplay}</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      {errorMsg && (
        <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-xl text-xs font-medium">
          {errorMsg}
        </div>
      )}

      {/* 1. Full name */}
      <div>
        <Label htmlFor="lead-name" className="block text-xs sm:text-sm font-medium text-gray-800 mb-1.5">
          Full name *
        </Label>
        <Input
          id="lead-name"
          type="text"
          required
          placeholder="e.g. Rahul Verma"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full h-11 px-4 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all text-sm"
        />
      </div>

      {/* 2. Construction service */}
      <div>
        <Label htmlFor="lead-service" className="block text-xs sm:text-sm font-medium text-gray-800 mb-1.5">
          Construction service
        </Label>
        <select
          id="lead-service"
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="w-full h-11 px-4 rounded-xl border border-gray-300 bg-white text-gray-900 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-none transition-all text-sm"
        >
          {SERVICES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      {/* 3. Plot location */}
      <div>
        <Label htmlFor="lead-location" className="block text-xs sm:text-sm font-medium text-gray-800 mb-1.5">
          Plot location *
        </Label>
        <Input
          id="lead-location"
          type="text"
          required
          placeholder="e.g. Gomti Nagar, Lucknow"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full h-11 px-4 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all text-sm"
        />
      </div>

      {/* 4. Approximate built-up area (sq.ft.) */}
      <div>
        <Label htmlFor="lead-area" className="block text-xs sm:text-sm font-medium text-gray-800 mb-1.5">
          Approximate built-up area (sq.ft.)
        </Label>
        <Input
          id="lead-area"
          type="text"
          placeholder="e.g. 2000"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          className="w-full h-11 px-4 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all text-sm"
        />
      </div>

      {/* 5. Approximate budget */}
      <div>
        <Label htmlFor="lead-budget" className="block text-xs sm:text-sm font-medium text-gray-800 mb-1.5">
          Approximate budget
        </Label>
        <select
          id="lead-budget"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className="w-full h-11 px-4 rounded-xl border border-gray-300 bg-white text-gray-900 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-none transition-all text-sm"
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
        <Label htmlFor="lead-phone" className="block text-xs sm:text-sm font-medium text-gray-800 mb-1.5">
          Phone number *
        </Label>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm font-medium">
            +91
          </span>
          <Input
            id="lead-phone"
            type="tel"
            required
            maxLength={10}
            placeholder="10-digit mobile number"
            value={phone}
            onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
            className="w-full h-11 pl-12 pr-4 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all text-sm"
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <Button
          type="submit"
          disabled={loading}
          className="w-full h-12 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-xl shadow-md hover:shadow-lg transition-all text-sm sm:text-base flex items-center justify-center gap-2 group cursor-pointer"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin text-black" />
              <span>Submitting Details...</span>
            </>
          ) : (
            <>
              <span>{buttonText}</span>
              <Send className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </Button>
      </div>

      <div className="flex items-center justify-center gap-2 text-xs text-gray-500 pt-1 text-center">
        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
        <span>• Direct engineer review via WhatsApp ({SITE_CONFIG.phoneDisplay})</span>
      </div>
    </form>
  );
}
