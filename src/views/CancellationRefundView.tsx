import React from 'react';
import { LegalPageLayout } from '../components/LegalPageLayout';
import { BUSINESS_INFO } from '../lib/site-data';

interface CancellationRefundViewProps {
  onNavigateHome: () => void;
}

export const CancellationRefundView: React.FC<CancellationRefundViewProps> = ({ onNavigateHome }) => {
  return (
    <LegalPageLayout
      title="Cancellation & Refund Policy"
      subtitle="Clear, transparent terms governing booking modifications, pilgrim cancellations, supplier charges, and refund processing schedules."
      lastUpdated="October 2026"
      onNavigateHome={onNavigateHome}
    >
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white font-serif">1. Requesting Cancellation or Changes</h2>
        <p>
          All requests for cancellation, postponement, or name alterations must be formally submitted in writing via email to <strong>{BUSINESS_INFO.email}</strong> or submitted in person at our Hyderabad office by the primary booking applicant. Verbal notices or WhatsApp messages must be followed by written confirmation.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white font-serif">2. Cancellation Charges & Calculation</h2>
        <p>
          Because Umrah packages involve upfront commitments for scheduled international flights, non-refundable Saudi visa fees, and hotel block guarantees, cancellation deductions are determined by actual supplier penalties and the time of cancellation prior to departure:
        </p>
        <ul className="list-disc list-inside space-y-1.5 pl-2 text-sm text-[#BDBDBD]">
          <li><strong>30 Days or More Prior to Departure:</strong> Forfeiture of the initial administrative processing charge plus any non-refundable flight ticketing penalties already incurred.</li>
          <li><strong>15 to 29 Days Prior to Departure:</strong> Actual airline ticket cancellation fee + 50% of the contracted hotel accommodation charges + full visa fee.</li>
          <li><strong>Less Than 14 Days Prior to Departure / No-Show:</strong> Up to 100% of the total package cost may be non-refundable, as Saudi hotel reservations and group airfare allocations cannot be recovered at short notice.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white font-serif">3. Airline Cancellation Rules</h2>
        <p>
          Air ticket cancellation or rescheduling charges are subject directly to the fare rules of the issuing airline (e.g. Saudia, Air India, Emirates, or Indigo). Group airline tickets often carry strict no-refund or restricted cancellation provisions imposed by carrier contracts.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white font-serif">4. Hotel & Transport Cancellations</h2>
        <p>
          During peak pilgrimage periods (including Ramadan, Rajab, Sha'ban, and December winter vacation), Makkah and Madinah hotels operate on strict non-refundable advance deposit rules. Any refund is contingent upon the property releasing funds back to our agency.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white font-serif">5. Visa & Medical Insurance Fees</h2>
        <p>
          Once an official Saudi electronic visa (e-visa) and health insurance policy have been issued by Saudi authorities, the associated government fees are 100% non-refundable under Saudi regulations, regardless of whether the pilgrim ultimately travels.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white font-serif">6. Refund Eligibility & Processing Timeline</h2>
        <p>
          Upon approval of a valid cancellation request, admissible refunds are calculated and credited back to the original bank account or payment method utilized by the customer. Due to international supplier settlement cycles, approved refunds are typically processed within <strong>14 to 28 business days</strong>.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white font-serif">7. Supplier Disruptions & Force Majeure</h2>
        <p>
          If travel is interrupted or prevented by events beyond reasonable control—such as natural disasters, epidemics, airspace closures, sudden government travel bans, or sovereign border restrictions—we will work vigorously on behalf of pilgrims to secure credits, vouchers, or supplier refunds, subject to the policies of the respective airlines and Saudi authorities.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white font-serif">8. Duplicate Payments & Billing Errors</h2>
        <p>
          In the event of an accidental duplicate bank transfer or billing discrepancy, notify our accounts department immediately with bank transaction reference numbers. Verified duplicate transactions are refunded within 3 to 5 business days.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white font-serif">9. Contact for Cancellation Inquiries</h2>
        <p>
          To enquire about an existing booking cancellation or check refund status, please contact:
        </p>
        <div className="p-4 bg-[#141414] border border-[#262626] rounded text-sm text-[#BDBDBD] space-y-1">
          <p><strong className="text-white">Accounts & Cancellations:</strong> {BUSINESS_INFO.name}</p>
          <p><strong>Email:</strong> {BUSINESS_INFO.email}</p>
          <p><strong>Direct Helpline:</strong> {BUSINESS_INFO.phone}</p>
        </div>
      </section>
    </LegalPageLayout>
  );
};
