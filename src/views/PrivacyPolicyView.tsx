import React from 'react';
import { LegalPageLayout } from '../components/LegalPageLayout';
import { BUSINESS_INFO } from '../lib/site-data';

interface PrivacyPolicyViewProps {
  onNavigateHome: () => void;
}

export const PrivacyPolicyView: React.FC<PrivacyPolicyViewProps> = ({ onNavigateHome }) => {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      subtitle="How Imaad International Tours & Travels collects, protects, and handles personal pilgrim data in accordance with applicable Indian laws and travel regulations."
      lastUpdated="October 2026"
      onNavigateHome={onNavigateHome}
    >
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white font-serif">1. Company Identity & Contact Details</h2>
        <p>
          This Privacy Policy governs the collection, processing, and protection of personal data by <strong>{BUSINESS_INFO.name}</strong>, having its principal registered office at {BUSINESS_INFO.address}, Telangana, India. For privacy enquiries or to exercise data rights, you may reach our designated data representative via email at <span className="text-[#D4AF37]">{BUSINESS_INFO.email}</span> or by telephone at {BUSINESS_INFO.phone}.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white font-serif">2. Personal Information Collected</h2>
        <p>
          When you enquire about or purchase an Umrah package or travel service, we may collect the following necessary personal information:
        </p>
        <ul className="list-disc list-inside space-y-1.5 pl-2 text-sm text-[#BDBDBD]">
          <li><strong>Identity & Contact Details:</strong> Full legal name (as per passport), telephone numbers (including WhatsApp contact), email address, and residential postal address.</li>
          <li><strong>Passport & Travel Identification:</strong> Passport number, nationality, date of birth, place of issue, expiry date, and scanned bio-page copies.</li>
          <li><strong>Health & Special Requirements:</strong> Voluntary disclosure of mobility limitations (e.g. wheelchair requirements), dietary preferences, or medical conditions necessary for on-ground assistance.</li>
          <li><strong>Financial & Transactional Records:</strong> Bank transfer reference numbers, transaction dates, and billing addresses. We never request or store sensitive card PINs or full debit/credit card security numbers.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white font-serif">3. Purpose of Information Processing</h2>
        <p>
          Personal information is collected strictly for lawful, legitimate travel facilitation purposes, including:
        </p>
        <ul className="list-disc list-inside space-y-1 pl-2 text-sm text-[#BDBDBD]">
          <li>Processing official Umrah e-visas and entry permissions with Saudi authorities.</li>
          <li>Reserving and ticketing scheduled airline flights from Hyderabad or other departure hubs.</li>
          <li>Confirming hotel room allocations, bed arrangements, and catering services in Makkah and Madinah.</li>
          <li>Arranging air-conditioned coach transportation and local Ziyarat tours.</li>
          <li>Responding to your WhatsApp or telephone enquiries with personalized quotations.</li>
          <li>Complying with statutory reporting obligations under Indian and Saudi civil aviation and tourism regulations.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white font-serif">4. Enquiries and Booking Information</h2>
        <p>
          Information submitted through our online inquiry forms, WhatsApp conversations, or office consultations is stored securely and accessed solely by authorized reservation personnel to generate accurate quotations and booking confirmations.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white font-serif">5. Passport and Visa Information Handling</h2>
        <p>
          Passport documents and biometric details are treated with the highest degree of confidentiality. Passport copies are transmitted securely to authorized visa service portals, Saudi Ministry of Hajj & Umrah platforms, and ticketing airline systems. We never publish, broadcast, or display pilgrim passport identification on promotional channels or public website pages.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white font-serif">6. Information Sharing with Third-Party Travel Partners</h2>
        <p>
          To deliver contracted travel packages, we share strictly relevant data with vetted partners:
        </p>
        <ul className="list-disc list-inside space-y-1 pl-2 text-sm text-[#BDBDBD]">
          <li>Commercial airlines for ticket issuance and baggage manifests.</li>
          <li>Contracted hotels in Makkah and Madinah for guest check-in rosters.</li>
          <li>Licensed Saudi transport operators for bus passenger registers.</li>
          <li>Mandatory travel insurance underwriters for medical emergency coverage.</li>
        </ul>
        <p>
          We do not sell, rent, lease, or trade pilgrim data to third-party marketing companies.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white font-serif">7. Data Retention</h2>
        <p>
          Personal travel records and transaction invoices are retained for the duration necessary to satisfy tax, audit, and legal recordkeeping statutes under Indian law (typically up to 7 years for financial records). Sensitive identification copies (such as passport bio-pages) are purged or archived under restricted access following the completion of your travel itinerary.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white font-serif">8. Data Security Safeguards</h2>
        <p>
          We employ reasonable administrative, operational, and technical security measures to protect pilgrim data against unauthorized access, alteration, disclosure, or accidental destruction. Access to booking systems is restricted to authorized staff on a need-to-know basis.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white font-serif">9. Cookies and Analytics</h2>
        <p>
          Our website uses standard essential session cookies to ensure proper page rendering and navigation functionality. We do not deploy invasive third-party cross-site trackers or behavioral advertising cookies without clear notice.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white font-serif">10. Marketing Communications and Opt-Out</h2>
        <p>
          We communicate regarding confirmed bookings and requested quotations. We do not pre-select optional marketing consent boxes. If you receive seasonal Umrah program announcements, you may opt out at any time by messaging "STOP" on WhatsApp or sending an email to our office.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white font-serif">11. User Rights: Access, Correction, and Deletion</h2>
        <p>
          Under applicable Indian data protection principles, you may request access to the personal data we hold about you, request rectification of inaccurate records, or seek deletion where the information is no longer legally required for regulatory or tax obligations.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white font-serif">12. Children's Information</h2>
        <p>
          When minors travel with parents or legal guardians as part of a family Umrah group, we collect minor details (such as birth certificate or passport) strictly with explicit parental consent for ticketing and visa purposes.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white font-serif">13. Third-Party Links & Services</h2>
        <p>
          Our website includes direct external links to WhatsApp for direct chat communication. WhatsApp is operated independently by Meta Platforms, and interactions on WhatsApp are subject to WhatsApp's own privacy policy.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white font-serif">14. Policy Updates</h2>
        <p>
          We periodically review this policy to reflect regulatory changes or updated operational procedures. Updated versions will be published on this page with the effective date indicated.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white font-serif">15. Contact Information</h2>
        <p>
          For questions or grievances concerning your personal data, contact:
        </p>
        <div className="p-4 bg-[#141414] border border-[#262626] rounded text-sm text-[#BDBDBD] space-y-1">
          <p><strong className="text-white">Privacy Officer:</strong> Imaad International Tours & Travels</p>
          <p><strong>Address:</strong> {BUSINESS_INFO.address}</p>
          <p><strong>Email:</strong> {BUSINESS_INFO.email}</p>
          <p><strong>Phone:</strong> {BUSINESS_INFO.phone}</p>
        </div>
      </section>
    </LegalPageLayout>
  );
};
