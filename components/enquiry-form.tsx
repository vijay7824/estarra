"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Loader2, Phone, Send, MessageSquare, ExternalLink } from "lucide-react";
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
  "Renovation & Floor Addition",
  "Site Inspection & Cost Estimation",
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
        // In case browser popup blocker activates
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
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6 md:p-8 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
        <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto shadow-lg shadow-green-500/20">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 font-serif">
          Enquiry Received & Sent to WhatsApp!
        </h3>
        <p className="text-gray-600 max-w-md mx-auto text-sm md:text-base leading-relaxed">
          Your details have been saved to our database and dispatched to our official WhatsApp (<strong>+91 7392861099</strong>).
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={submittedWaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-6 py-3 rounded-full text-sm shadow-lg shadow-green-600/30 transition-all hover:scale-105"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>Open WhatsApp (+91 7392861099)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <a
            href={`tel:${SITE_CONFIG.phoneTel}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-800 font-semibold px-5 py-3 rounded-full text-sm border border-gray-300 shadow-sm transition-all hover:scale-105"
          >
            <Phone className="w-4 h-4 text-primary-600" />
            Call: {SITE_CONFIG.phoneDisplay}
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {errorMsg && (
        <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
          {errorMsg}
        </div>
      )}

      <div className={compact ? "space-y-3" : "grid grid-cols-1 md:grid-cols-2 gap-4"}>
        {/* Name */}
        <div className="space-y-1.5 text-left">
          <Label htmlFor="lead-name" className="text-xs font-semibold uppercase tracking-wider text-gray-700">
            Your Full Name *
          </Label>
          <Input
            id="lead-name"
            type="text"
            required
            placeholder="e.g. Rahul Verma"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-white border-gray-300 focus:border-primary-600 focus:ring-primary-600 text-sm h-11"
          />
        </div>

        {/* Phone */}
        <div className="space-y-1.5 text-left">
          <Label htmlFor="lead-phone" className="text-xs font-semibold uppercase tracking-wider text-gray-700">
            10-Digit Mobile Number *
          </Label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-medium">
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
              className="bg-white border-gray-300 pl-12 focus:border-primary-600 focus:ring-primary-600 text-sm h-11"
            />
          </div>
        </div>

        {/* Service */}
        <div className="space-y-1.5 text-left">
          <Label htmlFor="lead-service" className="text-xs font-semibold uppercase tracking-wider text-gray-700">
            Service Required
          </Label>
          <select
            id="lead-service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full h-11 px-3 text-sm rounded-md border border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-600"
          >
            {SERVICES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        {/* Plot Location */}
        <div className="space-y-1.5 text-left">
          <Label htmlFor="lead-location" className="text-xs font-semibold uppercase tracking-wider text-gray-700">
            Lucknow Plot Location *
          </Label>
          <select
            id="lead-location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full h-11 px-3 text-sm rounded-md border border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-600"
          >
            {LUCKNOW_LOCATIONS.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        {/* Built-up Area */}
        <div className="space-y-1.5 text-left">
          <Label htmlFor="lead-area" className="text-xs font-semibold uppercase tracking-wider text-gray-700">
            Approx. Built-up Area (Sq Ft)
          </Label>
          <Input
            id="lead-area"
            type="number"
            placeholder="e.g. 1500"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            className="bg-white border-gray-300 focus:border-primary-600 focus:ring-primary-600 text-sm h-11"
          />
        </div>

        {/* Budget */}
        <div className="space-y-1.5 text-left">
          <Label htmlFor="lead-budget" className="text-xs font-semibold uppercase tracking-wider text-gray-700">
            Estimated Budget
          </Label>
          <select
            id="lead-budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full h-11 px-3 text-sm rounded-md border border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-600"
          >
            {BUDGET_RANGES.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="w-full h-12 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl shadow-lg shadow-primary-600/30 hover:shadow-xl hover:shadow-primary-600/40 transition-all duration-300 text-sm md:text-base flex items-center justify-center gap-2 group"
      >
        {loading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Sending to WhatsApp & saving...</span>
          </>
        ) : (
          <>
            <span>{buttonText}</span>
            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </Button>

      <p className="text-[11px] text-gray-600 text-center">
        🔒 Details are securely stored and directly dispatched to our engineering team on WhatsApp (+91 7392861099).
      </p>
    </form>
  );
}
