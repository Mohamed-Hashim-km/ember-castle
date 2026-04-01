"use client";
import { useEffect, useMemo } from "react";
import Script from "next/script";

declare global {
  interface Window {
    CreateWhatsappChatWidget?: (options: Record<string, unknown>) => void;
  }
}

const WhatsappChatWidget = () => {
  const options = useMemo(
    () => ({
      enabled: true,
      chatButtonSetting: {
        backgroundColor: "#1FAD33",
        ctaText: "",
        borderRadius: "25",
        marginLeft: "0",
        marginRight: "20",
        marginBottom: "20",
        ctaIconWATI: false,
        position: "right",
      },
      brandSetting: {
        brandName: "Ember Castle by Hotel Éden",
        brandSubTitle: "", 
        brandImg: "https://www.wati.io/wp-content/uploads/2023/04/Wati-logo.svg",
        welcomeText: "Hi there!\nHow can I help you?",
        // --- UPDATED TEXT BELOW ---
        messageText: "Hi! I'm interested in booking a stay. Could you help me with the details?", 
        backgroundColor: "#00e785",
        ctaText: "Chat with us",
        borderRadius: "25",
        autoShow: false,
        phoneNumber: "+918147508284",
      },
    }),
    []
  );

  useEffect(() => {
    if (typeof window !== "undefined" && window.CreateWhatsappChatWidget) {
      window.CreateWhatsappChatWidget(options);
    }
  }, [options]);

  return (
    <Script
      src="https://wati-integration-prod-service.clare.ai/v2/watiWidget.js?50756"
      strategy="lazyOnload"
      onLoad={() => {
        if (typeof window !== "undefined" && window.CreateWhatsappChatWidget) {
          window.CreateWhatsappChatWidget(options);
        }
      }}
    />
  );
};

export default WhatsappChatWidget;