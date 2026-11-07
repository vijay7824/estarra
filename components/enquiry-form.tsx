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

const LUCKNOW_LOCATIONS = [
  "Gomti Nagar",
  "Gomti Nagar Extension",
  "Sushant Golf City (Sultanpur Rd)",
  "Shaheed Path / Amar Shaheed Path",
  "Indira Nagar",
  "Aliganj / Jankipuram",
  "Hazratganj / Civil Lines",
  "Faizabad Road / Ayodhya Highway",
  "Kanpur Road / Transport Nagar",
  "Raebareli Road / Vrindavan Yojna",
  "Vibhuti Khand / Vikas Nagar",
  "Other Lucknow Location",
];

const SERVICES = [
  "Residential Home Construction",
  "Complete Turnkey Construction",
  "Architectural & 3D Plan Design",
  "Villa & Duplex Construction",
  "Commercial Building Construction",
  "Interior Design & Execution",
  "Renovation & Floor Addition",
  "Project Management & Consulting",
];

const BUDGET_RANGES = [
  "Under ₹30 Lakhs",
  "₹30 Lakhs - ₹50 Lakhs",
  "₹50 Lakhs - ₹80 Lakhs",
  "₹80 Lakhs - ₹1.5 Crore",
  "Above ₹1.5 Crore",
];

export default function EnquiryForm({
  sourcePage = "Landing Page",
  defaultService = "Residential Home Construction",
  onSuccess,
  compact = false,
  buttonText = "Request Free Site Visit & Quote",
}: EnquiryFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState(LUCKNOW_LOCATIONS[0]);
  const [service, setService] = useState(defaultService);
  const [area, setArea] = useState("");
  const [budget, setBudget] = useState(BUDGET_RANGES[1]);
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
          location,
          area: area ? `${area} sq ft` : undefined,
          budget,
          sourcePage,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Something went wrong");
      }

      const waUrl = data.whatsappUrl || `${SITE_CONFIG.whatsappUrl}?text=${encodeURIComponent(
        `*New Estarra Construction Enquiry (Lucknow)*\n\n• Name: ${name}\n• Phone: ${cleanPhone}\n• Service: ${service}\n• Location: ${location}\n• Budget: ${budget}`
      )}`;

      setSubmittedWaUrl(waUrl);

      trackEvent("lead_form_submitted", {
        service,
        source_page: sourcePage,
        location,
        budget,
      });

      // Automatically open WhatsApp with the lead details
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
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center space-y-3.5 animate-in fade-in zoom-in-95 duration-200">
        <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900 tracking-tight">
            Consultation Request Logged
          </h3>
          <p className="text-gray-600 text-xs sm:text-sm mt-1 max-w-sm mx-auto leading-relaxed">
            Your requirements have been dispatched to our engineering desk via WhatsApp (<strong>+91 7392861099</strong>).
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2.5">
          <a
            href={submittedWaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold px-5 py-2.5 rounded-lg text-xs shadow-sm transition-all"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-white" />
            <span>Open in WhatsApp</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href={`tel:${SITE_CONFIG.phoneLead}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-white hover:bg-gray-100 text-gray-800 font-semibold px-4 py-2.5 rounded-lg text-xs border border-gray-300 shadow-xs transition-all"
          >
            <Phone className="w-3.5 h-3.5 text-gray-600" />
            <span>Call Desk: {SITE_CONFIG.phoneLeadDisplay}</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3.5 text-left">
      {errorMsg && (
        <div className="p-2.5 bg-red-50 border border-red-200 text-red-700 rounded-lg text-xs font-medium">
          {errorMsg}
        </div>
      )}

      <div className={compact ? "grid grid-cols-1 sm:grid-cols-2 gap-3" : "grid grid-cols-1 md:grid-cols-2 gap-3.5"}>
        {/* Name */}
        <div className="space-y-1">
          <Label htmlFor="lead-name" className="text-[11px] font-mono uppercase tracking-wider text-gray-500 font-medium">
            Full Name *
          </Label>
          <Input
            id="lead-name"
            type="text"
            required
            placeholder="e.g. Rahul Verma"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-gray-50/60 border-gray-200 hover:border-gray-300 focus:bg-white focus:border-gray-900 focus:ring-1 focus:ring-gray-900 rounded-lg text-xs sm:text-sm h-10 transition-all"
          />
        </div>

        {/* Phone */}
        <div className="space-y-1">
          <Label htmlFor="lead-phone" className="text-[11px] font-mono uppercase tracking-wider text-gray-500 font-medium">
            Mobile Number *
          </Label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-mono text-xs">
              +91
            </span>
            <Input
              id="lead-phone"
              type="tel"
              required
              maxLength={10}
              placeholder="7392861099"
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
              className="bg-gray-50/60 border-gray-200 hover:border-gray-300 focus:bg-white focus:border-gray-900 focus:ring-1 focus:ring-gray-900 pl-11 rounded-lg text-xs sm:text-sm font-mono h-10 transition-all"
            />
          </div>
        </div>

        {/* Service */}
        <div className="space-y-1">
          <Label htmlFor="lead-service" className="text-[11px] font-mono uppercase tracking-wider text-gray-500 font-medium">
            Service Required
          </Label>
          <select
            id="lead-service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full h-10 px-3 text-xs sm:text-sm rounded-lg border border-gray-200 bg-gray-50/60 hover:border-gray-300 focus:bg-white focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 text-gray-900 transition-all"
          >
            {SERVICES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        {/* Plot Location */}
        <div className="space-y-1">
          <Label htmlFor="lead-location" className="text-[11px] font-mono uppercase tracking-wider text-gray-500 font-medium">
            Lucknow Location *
          </Label>
          <select
            id="lead-location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full h-10 px-3 text-xs sm:text-sm rounded-lg border border-gray-200 bg-gray-50/60 hover:border-gray-300 focus:bg-white focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 text-gray-900 transition-all"
          >
            {LUCKNOW_LOCATIONS.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        {/* Built-up Area */}
        <div className="space-y-1">
          <Label htmlFor="lead-area" className="text-[11px] font-mono uppercase tracking-wider text-gray-500 font-medium">
            Plot / Built-up Area (Sq Ft)
          </Label>
          <Input
            id="lead-area"
            type="number"
            placeholder="e.g. 1500"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            className="bg-gray-50/60 border-gray-200 hover:border-gray-300 focus:bg-white focus:border-gray-900 focus:ring-1 focus:ring-gray-900 rounded-lg text-xs sm:text-sm h-10 transition-all"
          />
        </div>

        {/* Budget */}
        <div className="space-y-1">
          <Label htmlFor="lead-budget" className="text-[11px] font-mono uppercase tracking-wider text-gray-500 font-medium">
            Approx. Budget
          </Label>
          <select
            id="lead-budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full h-10 px-3 text-xs sm:text-sm rounded-lg border border-gray-200 bg-gray-50/60 hover:border-gray-300 focus:bg-white focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 text-gray-900 transition-all"
          >
            {BUDGET_RANGES.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="pt-1.5">
        <Button
          type="submit"
          disabled={loading}
          className="w-full h-11 bg-gray-950 hover:bg-black text-white font-medium rounded-lg shadow-sm hover:shadow transition-all text-xs sm:text-sm flex items-center justify-center gap-2 group cursor-pointer"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin text-amber-400" />
              <span>Transmitting to Engineering Desk...</span>
            </>
          ) : (
            <>
              <span>{buttonText}</span>
              <Send className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-0.5 transition-transform" />
            </>
          )}
        </Button>
      </div>

      <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-gray-500 pt-0.5">
        <ShieldCheck className="w-3 h-3 text-emerald-600 shrink-0" />
        <span>No spam • Direct dispatch to engineering WhatsApp (+91 7392861099)</span>
      </div>
    </form>
  );
}
