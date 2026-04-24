import type { Metadata } from "next";
import localFont from "next/font/local";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { BookNowModalProvider } from "@/context/BookNowModalContext";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const monaSans = Mona_Sans({
  variable: "--font-mona",
  subsets: ["latin"],
  // Mona Sans is a variable font on Google Fonts usually, but if weights are needed:
  // weight is omitted for full variable support if possible, or specified if not supported natively as variable
});

// Configure CanelaDeck
const canelaDeck = localFont({
  variable: "--font-canela",
  src: [
    {
      path: "../public/canelaDeck/CanelaDeck-Regular-Trial.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/canelaDeck/CanelaDeck-Medium-Trial.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/canelaDeck/CanelaDeck-Bold-Trial.otf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://embercastle.hoteleden.in"),
  title: {
    template: "%s | Ember Castle by Éden, Gokarna",
    default: "Ember Castle by Éden | Luxury Boutique Hotel in Gokarna",
  },
  description:
    "Discover Ember Castle by Éden — a luxury designer boutique hotel in Gokarna, Karnataka. Indulge in premium sanctuaries, rooftop dining, wellness experiences, and stunning scenic spaces. Book your stay today.",
  keywords: [
    "Ember Castle Gokarna",
    "Hotel Éden Gokarna",
    "Hotel Eden Ember Castle",
    "Luxury Hotel Gokarna",
    "Boutique Hotel Gokarna",
    "Best Hotel in Gokarna",
    "Gokarna Beach Resort",
    "Rooftop Dining Gokarna",
    "Spa and Wellness Gokarna",
    "Romantic Hotel Gokarna",
    "Weekend Getaway Gokarna",
    "Fine Dining Gokarna",
    "Event Space Gokarna",
    "Karwar Hotels",
    "Karnataka Luxury Hotels",
    "embercastle.hoteleden.in",
  ],
  authors: [{ name: "Hotel Éden", url: "https://embercastle.hoteleden.in" }],
  creator: "Hotel Éden",
  publisher: "Hotel Éden",
  alternates: {
    canonical: "https://embercastle.hoteleden.in",
  },
  openGraph: {
    title: "Ember Castle by Éden | Luxury Boutique Hotel in Gokarna",
    description:
      "Experience the epitome of fine living at Ember Castle by Éden in Gokarna. Premium sanctuaries, rooftop dining, wellness, and breathtaking scenic spaces await you.",
    url: "https://embercastle.hoteleden.in",
    siteName: "Ember Castle by Éden",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ember Castle by Éden — Luxury Boutique Hotel, Gokarna",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ember Castle by Éden | Luxury Boutique Hotel in Gokarna",
    description:
      "Discover Ember Castle by Éden — luxury stays, rooftop dining, and wellness experiences in the heart of Gokarna, Karnataka.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "", // Add your Google Search Console verification token here
  },
  category: "travel",
};

import { Footer } from "@/components/layout/Footer";
import Script from "next/script";
import WhatsappChatWidget from "@/components/shared/WhatsappChatWidget";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${canelaDeck.variable} ${monaSans.variable} font-sans antialiased`}>
        <BookNowModalProvider>
          <Navbar />
          {children}
          <Footer />
        </BookNowModalProvider>
        {/* Vercel Analytics */}
        <Analytics />

        <Script src="/smoothScroll/smoothScroll.js" />
        <WhatsappChatWidget />
        {/* Vercel Speed Insights */}
        <SpeedInsights />
      </body>
    </html>
  );
}
