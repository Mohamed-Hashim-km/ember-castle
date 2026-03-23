

import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Hotel Éden",
  description: "Read our Privacy Policy to understand how Hotel Éden collects, uses, and protects your personal information.",
};

const PrivacyPolicy = () => {
  return (
    <div className="bg-white text-primary">
      <div className=" pb-10 pt-28 md:pt-54">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-light  mb-4">Privacy Policy</h1>
          {/* <p className=" text-secondary">Hotel Éden, Karwar</p> */}
        </div>
      </div>

      
    </div>
  );
};

export default PrivacyPolicy;
