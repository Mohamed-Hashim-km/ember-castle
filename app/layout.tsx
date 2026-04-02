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
  metadataBase: new URL("https://ember-castle.hoteleden.in"),
  title: {
    template: "%s | Ember Castle by Éden, Gokarna",
    default: "Ember Castle by Éden, Gokarna",
  },
  description:
    "Experience a designer boutique hotel stay at Hotel Éden's Ember Castle in Gokarna. Offering luxury stays, dining, wellness, and beautiful scenic spaces.",
  keywords: [
    "Hotel Éden",
    "Ember Castle Gokarna",
    "Hotel Eden Ember Castle",
    "Gokarna Hotels",
    "Luxury Stay Gokarna",
    "Boutique Hotel Gokarna",
    "Ember Castle",
    "Best Hotel in Gokarna",
    "Spa in Gokarna",
    "Fine Dining Gokarna",
    "Event Space Gokarna",
    "Karwar Hotels",
  ],
  authors: [{ name: "Hotel Éden" }],
  creator: "Hotel Éden",
  publisher: "Hotel Éden",
  openGraph: {
    title: "Ember Castle by Éden, Gokarna",
    description: "Experience a designer boutique hotel stay at Hotel Éden's Ember Castle in Gokarna. Offering luxury stays, dining, and wellness.",
    url: "https://ember-castle.hoteleden.in",
    siteName: "Ember Castle by Éden",
    images: [
      {
        url: "https://ember-castle.vercel.app/images/og-image.png", // Using an existing image as default
        width: 1200,
        height: 630,
        alt: "Ember Castle by Éden Exterior",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ember Castle by Éden, Gokarna",
    description: "Experience a designer boutique hotel stay at Hotel Éden's Ember Castle in Gokarna.",
    images: ["https://ember-castle.vercel.app/images/og-image.png"],
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
