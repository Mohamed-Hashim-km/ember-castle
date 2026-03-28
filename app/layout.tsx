import type { Metadata } from "next";
import { Gilda_Display, Jost } from "next/font/google"; // Import the requested fonts
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { BookNowModalProvider } from "@/context/BookNowModalContext";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

// Configure Gilda Display
const gildaDisplay = Gilda_Display({
  variable: "--font-gilda",
  subsets: ["latin"],
  weight: "400", // Gilda Display usually only comes in 400
});

// Configure Jost
const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  // Jost is a variable font, so we might not strictly need to specify weights,
  // but if we did, it handles ranges. Default is usually fine for variable fonts.
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ember-castle.hoteleden.in"),
  title: {
    template: "%s | Hotel Éden - Ember Castle, Gokarna",
    default: "Hotel Éden - Ember Castle, Gokarna",
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
    title: "Hotel Éden - Ember Castle, Gokarna",
    description: "Experience a designer boutique hotel stay at Hotel Éden's Ember Castle in Gokarna. Offering luxury stays, dining, and wellness.",
    url: "https://ember-castle.hoteleden.in",
    siteName: "Hotel Éden - Ember Castle",
    images: [
      {
        url: "https://hotel-eden-v2.vercel.app/images/ogImages/home.png", // Using an existing image as default
        width: 1200,
        height: 630,
        alt: "Hotel Éden Ember Castle Exterior",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Éden - Ember Castle, Gokarna",
    description: "Experience a designer boutique hotel stay at Hotel Éden's Ember Castle in Gokarna.",
    images: ["https://hotel-eden-v2.vercel.app/images/ogImages/home.png"],
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
      <body className={`${gildaDisplay.variable} ${jost.variable} antialiased`}>
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
