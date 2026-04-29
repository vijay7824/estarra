"use client";

import { useEffect, useRef, useState } from "react";
import { Phone, PhoneOff, Loader2 } from "lucide-react";

// Vapi SDK types
declare global {
  interface Window {
    Vapi: any;
  }
}

export default function VapiCallButton() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isCallActive, setIsCallActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const vapiRef = useRef<any>(null);

  const API_KEY = "a6bf2b51-7e6c-4c12-93d2-2d6301150f94";
  const ASSISTANT_ID = "6c303a44-cc3e-45ed-bf39-8b75ec7c2694";

  // Load Vapi SDK from CDN
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Check if Vapi is already loaded
    if (window.Vapi) {
      setIsLoaded(true);
      return;
    }

    // Create script element
    const script = document.createElement("script");
    script.src = "https://cdn.vapi.ai/web/vapi.js";
    script.async = true;
    script.onload = () => {
      setIsLoaded(true);
    };
    script.onerror = () => {
      setError("Failed to load Vapi SDK");
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Initialize Vapi instance
  useEffect(() => {
    if (!isLoaded || !window.Vapi || vapiRef.current) return;

    try {
      const vapi = new window.Vapi(API_KEY);
      vapiRef.current = vapi;

      // Event listeners
      vapi.on("call-start", () => {
        setIsCallActive(true);
        setIsLoading(false);
        setError(null);
      });

      vapi.on("call-end", () => {
        setIsCallActive(false);
        setIsLoading(false);
      });

      vapi.on("error", (err: any) => {
        console.error("Vapi error:", err);
        setError("Call failed. Please try again.");
        setIsCallActive(false);
        setIsLoading(false);
      });
    } catch (err) {
      console.error("Failed to initialize Vapi:", err);
      setError("Failed to initialize");
    }
  }, [isLoaded]);

  const handleToggleCall = async () => {
    if (!vapiRef.current) {
      setError("Vapi not initialized");
      return;
    }

    if (isCallActive) {
      // End call
      try {
        vapiRef.current.stop();
      } catch (err) {
        console.error("Error stopping call:", err);
      }
    } else {
      // Start call
      setIsLoading(true);
      setError(null);
      try {
        await vapiRef.current.start(ASSISTANT_ID);
      } catch (err) {
        console.error("Error starting call:", err);
        setError("Failed to start call");
        setIsLoading(false);
      }
    }
  };

  // Prevent hydration mismatch by not rendering until client-side
  if (typeof window === "undefined") return null;

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={handleToggleCall}
        disabled={!isLoaded || isLoading}
        className={`
          fixed bottom-6 right-6 z-50
          flex items-center gap-2
          px-5 py-3 rounded-full
          font-semibold text-sm
          shadow-lg shadow-black/20
          transition-all duration-300
          hover:scale-105 active:scale-95
          disabled:opacity-50 disabled:cursor-not-allowed
          ${
            isCallActive
              ? "bg-red-500 hover:bg-red-600 text-white"
              : "bg-primary-600 hover:bg-primary-700 text-white"
          }
        `}
      >
        {isLoading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Connecting...</span>
          </>
        ) : isCallActive ? (
          <>
            <PhoneOff className="w-4 h-4" />
            <span>End Call</span>
          </>
        ) : (
          <>
            <Phone className="w-4 h-4" />
            <span>📞 Talk to Agent</span>
          </>
        )}
      </button>

      {/* Error Toast */}
      {error && (
        <div className="fixed bottom-24 right-6 z-50 bg-red-500 text-white px-4 py-3 rounded-lg shadow-lg max-w-xs">
          <p className="text-sm font-medium">{error}</p>
          <button
            onClick={() => setError(null)}
            className="absolute top-1 right-2 text-white/80 hover:text-white text-lg"
          >
            ×
          </button>
        </div>
      )}

      {/* Active Call Indicator */}
      {isCallActive && (
        <div className="fixed bottom-24 right-6 z-50 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
          <span className="text-sm font-medium">Call Active</span>
        </div>
      )}
    </>
  );
}
