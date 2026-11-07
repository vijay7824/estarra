"use client";

import { useState, useMemo, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Calculator,
  MessageSquare,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Shield,
  Layers,
  Wrench,
  Paintbrush,
  DoorClosed,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/seo-config";
import { trackEvent } from "@/lib/analytics";

interface TierInfo {
  id: "standard" | "premium" | "luxury";
  name: string;
  rate: number;
  badge?: string;
  cementSteel: string;
  flooring: string;
  fittings: string;
  warranty: string;
}

const TIERS: Record<string, TierInfo> = {
  standard: {
    id: "standard",
    name: "Standard Package",
    rate: 1650,
    cementSteel: "UltraTech / ACC Cement + Primary Fe550 TMT Steel",
    flooring: "2x2 ft Branded Vitrified Tiles",
    fittings: "Standard Branded CP & Sanitary Fittings",
    warranty: "10-Year Structural Guarantee",
  },
  premium: {
    id: "premium",
    name: "Premium Package",
    rate: 1950,
    badge: "Most Popular in Lucknow",
    cementSteel: "UltraTech / Ambuja Cement + Tata Tiscon / Jindal Fe550D Steel",
    flooring: "4x2 ft Large Format Glazed Vitrified Tiles (GVT)",
    fittings: "Jaquar / Kohler Luxury CP & Sanitary Fittings",
    warranty: "15-Year Structural Warranty + 1-Yr Free Maintenance",
  },
  luxury: {
    id: "luxury",
    name: "Ultra-Luxury Villa",
    rate: 2400,
    cementSteel: "UltraTech Super / ACC High-Performance + Tata Tiscon Fe550D",
    flooring: "Italian Marble / Large Slabs for Living Areas",
    fittings: "Kohler / Grohe Thermostatic Showers & Wall-Hung Toilets",
    warranty: "15-Year Comprehensive Structural Warranty",
  },
};

const FLOOR_OPTIONS = [
  { label: "Ground Floor", value: 1, tag: "G" },
  { label: "Ground + 1 Floor", value: 2, tag: "G+1 (Duplex)" },
  { label: "Ground + 2 Floors", value: 3, tag: "G+2 (Triplex)" },
  { label: "Ground + 3 Floors", value: 4, tag: "G+3" },
];

const PRESET_AREAS = [1000, 1200, 1500, 1800, 2000, 2500];

function formatINR(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

function formatLakhs(amount: number): string {
  if (amount >= 10000000) {
    const cr = (amount / 10000000).toFixed(2);
    return `₹${cr} Crore`;
  }
  const lk = (amount / 100000).toFixed(2);
  return `₹${lk} Lakhs`;
}

export default function CostCalculator() {
  const [plotArea, setPlotArea] = useState<number>(1200);
  const [floors, setFloors] = useState<number>(2); // Default G+1
  const [selectedTier, setSelectedTier] = useState<"standard" | "premium" | "luxury">("premium");

  const tier = TIERS[selectedTier];
  const totalBuiltUpArea = useMemo(() => plotArea * floors, [plotArea, floors]);
  const totalEstimatedCost = useMemo(() => totalBuiltUpArea * tier.rate, [totalBuiltUpArea, tier.rate]);

  // Track event on calculation change with debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      trackEvent("calculator_used", {
        plot_area: plotArea,
        floors,
        total_built_up_area: totalBuiltUpArea,
        tier: tier.name,
        estimated_cost: totalEstimatedCost,
      });
    }, 1200);
    return () => clearTimeout(timer);
  }, [plotArea, floors, tier.name, totalBuiltUpArea, totalEstimatedCost]);

  // Breakdown percentages
  const breakdowns = useMemo(() => {
    return [
      {
        label: "Civil & RCC Structure",
        share: 50,
        amount: totalEstimatedCost * 0.5,
        icon: Layers,
        details: "Foundation, column beams, RCC slabs, brickwork, excavation, and sand-gravel.",
      },
      {
        label: "Finishing & Flooring",
        share: 22,
        amount: totalEstimatedCost * 0.22,
        icon: Sparkles,
        details: "Vitrified tiles/marble, granite stairs, wall tiles, kitchen platform.",
      },
      {
        label: "Plumbing, Electrical & MEP",
        share: 14,
        amount: totalEstimatedCost * 0.14,
        icon: Wrench,
        details: "CPVC water lines, drainage, underground tank, fire-retardant wiring, switches.",
      },
      {
        label: "Doors, Windows & Fabrication",
        share: 8,
        amount: totalEstimatedCost * 0.08,
        icon: DoorClosed,
        details: "Flush doors with teak frames, UPVC / aluminum windows, SS balcony railings.",
      },
      {
        label: "Painting & Waterproofing",
        share: 6,
        amount: totalEstimatedCost * 0.06,
        icon: Paintbrush,
        details: "Putty, primer, Asian Paints internal & weather-proof exterior coats, roof waterproofing.",
      },
    ];
  }, [totalEstimatedCost]);

  const handleWhatsAppQuote = () => {
    const text = encodeURIComponent(
      `Hello Estarra, I calculated house construction cost on your website:\n` +
      `• Plot Area: ${plotArea} sq ft\n` +
      `• Floors: ${floors === 1 ? "Ground Floor" : `G+${floors - 1}`}\n` +
      `• Total Built-up: ${totalBuiltUpArea} sq ft\n` +
      `• Specification: ${tier.name} (₹${tier.rate}/sqft)\n` +
      `• Estimated Total: ${formatINR(totalEstimatedCost)} (${formatLakhs(totalEstimatedCost)})\n\n` +
      `Please share a detailed itemized BOQ for my site in Lucknow.`
    );
    window.open(`https://wa.me/917800074443?text=${text}`, "_blank");
    trackEvent("whatsapp_clicked", { source_page: "Cost Calculator - Share Quote" });
  };

  return (
    <div className="bg-white rounded-3xl border border-gray-200/90 shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 via-primary-950 to-gray-900 text-white p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-wider">
              <Calculator className="w-3.5 h-3.5" />
              Lucknow 2025-2026 Construction Rates
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold mt-2">
              Interactive House Construction Cost Estimator
            </h2>
            <p className="text-gray-300 text-xs sm:text-sm mt-1">
              Select your plot area, number of floors, and quality tier to get realistic Lucknow market estimates.
            </p>
          </div>

          <div className="text-left sm:text-right shrink-0">
            <span className="text-xs text-gray-400 uppercase tracking-wider block">Estimated Total Cost</span>
            <span className="text-3xl sm:text-4xl font-extrabold text-amber-400 block">
              {formatLakhs(totalEstimatedCost)}
            </span>
            <span className="text-xs text-gray-300">
              ({formatINR(totalEstimatedCost)})
            </span>
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-8 space-y-8">
        {/* Step 1: Area Selection */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label className="text-sm sm:text-base font-bold text-gray-900">
              Step 1: Plot / Floor Footprint Area (Sq Ft)
            </Label>
            <span className="text-sm font-semibold text-primary-700 bg-primary-50 px-3 py-1 rounded-full">
              {plotArea} sq. ft.
            </span>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            {PRESET_AREAS.map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => setPlotArea(preset)}
                className={`py-2 px-3 text-xs sm:text-sm font-semibold rounded-xl border transition-all ${
                  plotArea === preset
                    ? "bg-primary-600 text-white border-primary-600 shadow-md"
                    : "bg-gray-50 hover:bg-gray-100 text-gray-700 border-gray-200"
                }`}
              >
                {preset} sqft
              </button>
            ))}
          </div>

          <div className="pt-2">
            <Input
              type="number"
              min={500}
              max={15000}
              step={50}
              value={plotArea}
              onChange={(e) => setPlotArea(Math.max(100, Number(e.target.value) || 0))}
              placeholder="Or enter custom area in sq ft..."
              className="h-11 text-sm bg-gray-50 border-gray-300"
            />
          </div>
        </div>

        {/* Step 2: Number of Floors */}
        <div className="space-y-3">
          <Label className="text-sm sm:text-base font-bold text-gray-900">
            Step 2: Number of Floors
          </Label>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {FLOOR_OPTIONS.map((f) => (
              <button
                key={f.value}
                type="button"
                onClick={() => setFloors(f.value)}
                className={`p-3.5 rounded-2xl border text-left transition-all ${
                  floors === f.value
                    ? "bg-primary-50 border-primary-600 text-primary-950 shadow-sm ring-2 ring-primary-600/30"
                    : "bg-white hover:bg-gray-50 border-gray-200 text-gray-700"
                }`}
              >
                <div className="font-bold text-sm">{f.tag}</div>
                <div className="text-xs text-gray-500 mt-0.5">{f.label}</div>
              </button>
            ))}
          </div>

          <div className="text-xs text-gray-500 flex items-center justify-between pt-1">
            <span>Total Built-Up Construction Area:</span>
            <span className="font-bold text-gray-900">
              {plotArea} × {floors} floors = <strong className="text-primary-700">{totalBuiltUpArea.toLocaleString("en-IN")} sq. ft.</strong>
            </span>
          </div>
        </div>

        {/* Step 3: Specification Tiers */}
        <div className="space-y-3">
          <Label className="text-sm sm:text-base font-bold text-gray-900">
            Step 3: Construction Quality Tier
          </Label>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {(Object.keys(TIERS) as Array<keyof typeof TIERS>).map((key) => {
              const item = TIERS[key];
              const isSelected = selectedTier === key;
              return (
                <div
                  key={key}
                  onClick={() => setSelectedTier(key as any)}
                  className={`relative cursor-pointer rounded-2xl p-5 border transition-all ${
                    isSelected
                      ? "bg-primary-50/50 border-primary-600 ring-2 ring-primary-600/30 shadow-md"
                      : "bg-white hover:bg-gray-50 border-gray-200"
                  }`}
                >
                  {item.badge && (
                    <span className="absolute -top-2.5 right-4 bg-amber-500 text-black text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}

                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-gray-900">{item.name}</h3>
                    <div className="text-right">
                      <span className="text-xl font-extrabold text-primary-700">₹{item.rate}</span>
                      <span className="text-[11px] text-gray-500 block">/ sq ft</span>
                    </div>
                  </div>

                  <ul className="mt-3 space-y-1.5 text-xs text-gray-600">
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item.cementSteel}</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item.flooring}</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item.fittings}</span>
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Itemized Cost Breakdown */}
        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200/80 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-200 pb-3">
            <div>
              <h3 className="text-base font-bold text-gray-900">
                Estimated Cost Distribution Breakdown
              </h3>
              <p className="text-xs text-gray-500">
                Industry-standard allocation for {totalBuiltUpArea.toLocaleString("en-IN")} sq. ft. build
              </p>
            </div>
            <div className="text-xs font-semibold text-primary-700 bg-white px-3 py-1 rounded-full border border-gray-200">
              Total: {formatINR(totalEstimatedCost)}
            </div>
          </div>

          <div className="space-y-3">
            {breakdowns.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.label} className="bg-white rounded-xl p-3.5 border border-gray-100 shadow-sm space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 font-semibold text-gray-800">
                      <Icon className="w-4 h-4 text-primary-600" />
                      <span>{b.label} ({b.share}%)</span>
                    </div>
                    <span className="font-bold text-gray-900 font-mono">
                      {formatINR(b.amount)}
                    </span>
                  </div>

                  <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-primary-600 h-2 rounded-full"
                      style={{ width: `${b.share}%` }}
                    />
                  </div>

                  <p className="text-[11px] text-gray-500">{b.details}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
          <Button
            onClick={handleWhatsAppQuote}
            className="w-full sm:flex-1 h-12 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold rounded-xl text-sm shadow-lg shadow-green-600/20 flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>Send Quote to WhatsApp</span>
          </Button>

          <a
            href="#lead-form-section"
            className="w-full sm:flex-1 h-12 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl text-sm shadow-lg shadow-primary-600/20 flex items-center justify-center gap-2"
          >
            <span>Book Free Site Visit & Detailed BOQ</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

