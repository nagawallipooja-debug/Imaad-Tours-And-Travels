import React from 'react';
import { LegalPageLayout } from '../components/LegalPageLayout';
import { BUSINESS_INFO } from '../lib/site-data';

interface TermsConditionsViewProps {
  onNavigateHome: () => void;
}

export const TermsConditionsView: React.FC<TermsConditionsViewProps> = ({ onNavigateHome }) => {
  return (
    <LegalPageLayout
      title="Terms & Conditions"
      subtitle="The contractual framework governing travel bookings, Umrah packages, and pilgrimage services provided by Imaad International Tours & Travels."
      lastUpdated="October 2026"
      onNavigateHome={onNavigateHome}
    >
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white font-serif">1. Acceptance of Terms</h2>
        <p>
          By booking an Umrah package, requesting a quotation, or purchasing travel services from <strong>{BUSINESS_INFO.name}</strong>, you acknowledge that you have read, understood, and agreed to be legally bound by these Terms & Conditions. If you are making a booking on behalf of family members or a group, you confirm that you have the authority to accept these terms on their behalf.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white font-serif">2. Description of Services</h2>
        <p>
          Imaad International Tours & Travels facilitates Umrah pilgrimage arrangements including flight reservation coordination, hotel accommodation in Makkah and Madinah, ground bus transfers in Saudi Arabia, guided historical Ziyarat excursions, visa assistance, and pilgrim welfare kits. We act as an organizer and travel coordinator connecting travelers with vetted airlines, hospitality providers, and licensed ground transportation suppliers.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white font-serif">3. Package Pricing & Quotation Validity</h2>
        <p>
          Indicative baseline rates shown on our website (such as ₹79,000, ₹95,000, or ₹1,10,000 per person) represent draft estimates based on seasonal projections and standard room sharing. Definite, binding package prices are provided via formal written quotation and remain valid for the period specified therein. Quotations may fluctuate prior to confirmed deposit due to changes in airline fares, foreign currency exchange rates (SAR/INR), or peak season hotel rate adjustments.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white font-serif">4. Booking Procedures</h2>
        <p>
          A booking is initiated upon submission of travel details and passport documentation, followed by payment of the designated initial deposit per pilgrim. A reservation is officially confirmed only when our office issues a written Booking Confirmation and receipt voucher.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white font-serif">5. Payment Requirements</h2>
        <p>
          An initial advance deposit (as specified in your package quotation) is required at reservation. The remaining balance must be paid in full at least 15 to 20 days prior to the scheduled flight departure date. Failure to remit final balance payments within the stipulated timeline may result in automatic forfeiture of reservations as per supplier deadlines.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white font-serif">6. Travel Documents & Customer Responsibilities</h2>
        <p>
          It is the sole responsibility of the pilgrim to ensure that:
        </p>
        <ul className="list-disc list-inside space-y-1 pl-2 text-sm text-[#BDBDBD]">
          <li>Their passport possesses at least 6 months validity from the scheduled date of departure.</li>
          <li>All submitted personal details, spellings, and dates of birth match government identification exactly.</li>
          <li>They possess required health immunizations (e.g. Meningococcal meningitis and required vaccines).</li>
          <li>They abide by local Saudi laws, cultural norms, and regulations throughout their pilgrimage.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white font-serif">7. Visa Applications & Approval Limitations</h2>
        <p>
          While we assist with submitting and processing Umrah / Tourist e-visas through official Saudi government channels, the issuance, rejection, or delay of visas rests exclusively within the sovereign discretion of the Ministry of Foreign Affairs and Ministry of Hajj & Umrah of the Kingdom of Saudi Arabia. We cannot guarantee visa grant and are not liable for government-imposed entry denials.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white font-serif">8. Airline Schedules & Baggage Rules</h2>
        <p>
          Flight schedules, terminal allocations, and baggage allowances are determined by the operating airline. We are not liable for airline-initiated flight delays, mechanical rescheduling, lost baggage, or missed connections, though our team will provide reasonable assistance in coordinating with airline desks.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white font-serif">9. Hotel Reservations & Substitutions</h2>
        <p>
          Hotel check-in and check-out times follow standard Saudi hospitality norms (typically check-in from 4:00 PM, check-out by 12:00 PM). In exceptional circumstances where a contracted hotel is overbooked by local management or unavailable due to unforeseen municipal orders, we reserve the right to provide an accommodation of equal or higher star category in similar proximity.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white font-serif">10. Ziyarat Itineraries & Local Restrictions</h2>
        <p>
          Guided historical Ziyarat excursions in Makkah, Madinah, and Ji'ranah are scheduled according to local traffic permits and crowd management conditions enforced by Saudi traffic authorities. In cases where specific historical sites are temporarily closed by local authorities for maintenance or security, the tour will visit accessible alternative locations.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white font-serif">11. Changes to Itineraries</h2>
        <p>
          While every effort is made to adhere to the announced itinerary, adjustments in the order of cities (e.g. Makkah first vs. Madinah first) may occur due to confirmed flight slot allocations or official Nusuk Rawdah visiting permits.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white font-serif">12. Cancellations and Refunds</h2>
        <p>
          Cancellations must be communicated in writing. Refunds are governed strictly by our dedicated <span className="text-[#D4AF37]">Cancellation & Refund Policy</span>, taking into account actual non-refundable airline ticketing penalties, visa fees, and hotel deposit forfeiture rules.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white font-serif">13. Third-Party Supplier Arrangements</h2>
        <p>
          Airlines, ground coach operators, and hotel properties operate under independent licenses and conditions of carriage. While we carefully select our partners, we are not liable for the independent acts, omissions, or delays of third-party operators beyond our direct control.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white font-serif">14. Customer Complaints & Resolution</h2>
        <p>
          If any service deficiency arises during your journey, it must be reported immediately to our on-ground tour coordinator or our Hyderabad helpline (+91 79891 15941) so prompt corrective measures can be implemented on-site.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white font-serif">15. Applicable Law & Dispute Resolution</h2>
        <p>
          These Terms & Conditions are governed by and construed in accordance with the laws of the Republic of India. In the event of any dispute or controversy arising out of or in connection with our travel services, the courts located in <strong>Hyderabad, Telangana</strong> shall have exclusive legal jurisdiction.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white font-serif">16. Contact Information</h2>
        <p>
          For queries regarding these terms:
        </p>
        <div className="p-4 bg-[#141414] border border-[#262626] rounded text-sm text-[#BDBDBD] space-y-1">
          <p><strong className="text-white">Legal Desk:</strong> {BUSINESS_INFO.name}</p>
          <p><strong>Address:</strong> {BUSINESS_INFO.address}</p>
          <p><strong>Email:</strong> {BUSINESS_INFO.email}</p>
          <p><strong>Phone:</strong> {BUSINESS_INFO.phone} / {BUSINESS_INFO.phoneSecondary}</p>
        </div>
      </section>
    </LegalPageLayout>
  );
};
