

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
          <p className=" text-secondary">Hotel Éden, Karwar</p>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-12 ">
        <div className="mb-8">
          <p className="mb-2">
            <span className="font-medium">Effective Date:</span> January 17, 2026
          </p>
          <p className="mb-4">
            <span className="font-medium">Last Updated:</span> January 17, 2026
          </p>
          <p className="leading-relaxed">
            At Hotel Éden, Karwar, we consider our guests&apos; privacy a cornerstone of our hospitality. This Privacy Policy describes how we
            collect, use, and protect your personal information across our website, mobile services, and on-property interactions.
          </p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-medium mb-4 text-primary">1. Information We Collect</h2>
            <p className="mb-4">
              To provide you with our signature &quot;Hotel Éden Experience,&quot; we may collect the following categories of information:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-medium">Contact Information:</span> Name, email address, telephone number, and residential/business address.
              </li>
              <li>
                <span className="font-medium">Identity & Government Records:</span> Date of birth, gender, nationality, and details from
                government-issued IDs (Aadhar, Passport, or Visa for international guests) as required by local law.
              </li>
              <li>
                <span className="font-medium">Transaction & Financial Data:</span> Credit/debit card details (processed via secure gateways), billing
                address, and transaction history.
              </li>
              <li>
                <span className="font-medium">Stay Preferences:</span> Special requests, dietary requirements, health-related information (e.g.,
                allergies), and feedback regarding your stay.
              </li>
              <li>
                <span className="font-medium">Technical Data:</span> IP address, browser type, and &quot;cookie&quot; information when you visit our
                website.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4 text-primary">2. How We Use Your Information</h2>
            <p className="mb-4">We process your data based on your consent or for legitimate business purposes, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-medium">Reservations:</span> To process your booking, manage payments, and send confirmations.
              </li>
              <li>
                <span className="font-medium">Personalization:</span> To remember your preferences (e.g., room type, pillow choice) and tailor our
                services to your needs.
              </li>
              <li>
                <span className="font-medium">Safety & Security:</span> To ensure a secure environment through CCTV monitoring in public areas and
                identity verification at check-in.
              </li>
              <li>
                <span className="font-medium">Legal Compliance:</span> To comply with reporting requirements to the Foreigners Regional Registration
                Office (FRRO) and other Indian regulatory bodies.
              </li>
              <li>
                <span className="font-medium">Marketing:</span> With your explicit consent, to send you exclusive offers and updates about Hotel Éden.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4 text-primary">3. Data Sharing and Disclosure</h2>
            <p className="mb-4">We do not sell your personal data. We only share information with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-medium">Service Providers:</span> Third-party partners who assist with payment processing, IT support, or
                marketing services, under strict confidentiality agreements.
              </li>
              <li>
                <span className="font-medium">Legal Authorities:</span> When required by law, such as responding to a court order or police request.
              </li>
              <li>
                <span className="font-medium">Corporate Transactions:</span> In the event of a merger or sale of the property, your data may be
                transferred to the new entity.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4 text-primary">4. Cookies and Tracking</h2>
            <p className="leading-relaxed">
              Our website uses cookies to enhance your browsing experience. These allow us to remember your login details and analyze site traffic.
              You can manage your cookie preferences through your browser settings; however, disabling cookies may limit some website functionalities.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4 text-primary">5. Data Security</h2>
            <p className="mb-4">We implement robust technical and organizational measures to safeguard your data. This includes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Encryption for online transactions (PCI-DSS compliance).</li>
              <li>Restricted access to physical and digital guest files.</li>
              <li>Regular security audits.</li>
            </ul>
            <p className="mt-4 italic text-secondary">
              Note: While we strive for maximum protection, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4 text-primary">6. Your Rights (DPDP Act Compliance)</h2>
            <p className="mb-4">In accordance with the Digital Personal Data Protection (DPDP) Act, you have the following rights:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                <span className="font-medium">Right to Access:</span> Request a summary of the personal data we hold about you.
              </li>
              <li>
                <span className="font-medium">Right to Correction:</span> Ask us to update or correct inaccurate information.
              </li>
              <li>
                <span className="font-medium">Right to Erasure:</span> Request the deletion of your data (subject to legal retention requirements).
              </li>
              <li>
                <span className="font-medium">Right to Withdraw Consent:</span> Opt-out of marketing communications at any time.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4 text-primary">7. Children&apos;s Privacy</h2>
            <p className="leading-relaxed">
              Our services are not directed at individuals under the age of 18 without parental consent. We do not knowingly collect personal data
              from children unless provided by a parent or guardian during the booking process.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4 text-primary">8. Retention of Data</h2>
            <p className="leading-relaxed">
              We retain your personal information only for as long as necessary to fulfil the purposes outlined in this policy, or as required by
              Indian tax and hospitality laws (typically 7–10 years for financial records).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium mb-4 text-primary">9. Contact Us</h2>
            <p className="mb-4">For any questions regarding this policy or to exercise your privacy rights, please contact our Grievance Officer:</p>
            <div className="  ">
              <ul className="space-y-2">
                <li>
                  <span className="font-medium">Address:</span> Hotel Éden, Near Mulla Stop, Kajubagh, Karwar, Karnataka 581301
                </li>
                <li>
                  <span className="font-medium">Email:</span>{" "}
                  <a href="mailto:enquiry@hoteleden.in" className="text-blue-600 hover:underline">
                    enquiry@hoteleden.in
                  </a>
                </li>
                
                <li>
                  <span className="font-medium">Phone:</span>{" "}
                  <a href="tel:+91906948775" className="text-blue-600 hover:underline">
                    +91 906948775
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;