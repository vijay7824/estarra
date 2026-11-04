// GTM / GA4 dataLayer event tracker

declare global {
  interface Window {
    dataLayer?: any[];
  }
}

export function trackEvent(eventName: string, params?: Record<string, any>) {
  if (typeof window !== "undefined") {
    try {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: eventName,
        ...params,
        timestamp: new Date().toISOString(),
      });
    } catch (e) {
      console.warn("Analytics trackEvent warning:", e);
    }
  }
}

