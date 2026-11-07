import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "@/components/providers/query-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import VapiCallButton from "@/components/vapi-call-button";
import EnquiryPopup from "@/components/enquiry-popup";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://estarra.in"),
  title: "Estarra | Premium Construction & Engineering Company in Lucknow",
  description: "Estarra is Lucknow's premier construction company specializing in residential homes, turnkey villas, and architectural planning with 15+ years of engineering excellence.",
  icons: {
    icon: "/assets/estarra_logo.svg",
    apple: "/assets/estarra_logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans`} suppressHydrationWarning>
        <QueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <VapiCallButton />
            <EnquiryPopup delayMs={1500} />
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
