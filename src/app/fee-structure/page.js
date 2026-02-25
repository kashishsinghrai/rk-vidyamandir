"use client";

import { useState } from "react";
import styles from "./page.module.css";
import {
  FaWallet,
  FaUniversity,
  FaCreditCard,
  FaFileInvoiceDollar,
  FaGift,
  FaDownload,
  FaQuestionCircle,
  FaInfoCircle,
  FaQrcode,
} from "react-icons/fa";

export default function FeePage() {
  const [selectedClass, setSelectedClass] = useState(0);

  const feeStructure = [
    { class: "Nursery - UKG", tuition: 800, development: 200, total: 1000 },
    { class: "Class 1st - 3rd", tuition: 1000, development: 250, total: 1250 },
    { class: "Class 4th - 5th", tuition: 1200, development: 300, total: 1500 },
    { class: "Class 6th - 8th", tuition: 1500, development: 400, total: 1900 },
  ];

  // SEO: Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Fee Structure | Late Ramkali Vidya Mandir",
    description:
      "Transparent and affordable fee modules for Nursery to Class 8th. Check tuition fees, admission charges, and payment modes.",
    url: "https://www.rkvmjuniorhighschool.dpdns.org/fee-structure",
    publisher: {
      "@type": "EducationalOrganization",
      name: "Late Ramkali Vidya Mandir Junior High School",
    },
  };

  return (
    <main className={styles.main}>
      {/* Injecting Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Hero Section */}
      <section className={styles.hero}>
        <h1>
          Fee <span>Structure</span>
        </h1>
        <p>
          Transparent and affordable fee modules for the academic session
          2025-26.
        </p>
        <button className={styles.downloadBtn}>
          <FaDownload /> Download Fee Brochure (PDF)
        </button>
      </section>

      {/* 2. Interactive Fee Estimator */}
      <section className={`${styles.section} ${styles.noPaddingBottom}`}>
        <div className={styles.calculatorBox}>
          <h3 className={styles.calculatorTitle}>
            <FaInfoCircle className={styles.iconGold} /> Quick Fee Preview
          </h3>
          <p className={styles.calculatorDesc}>
            Select your child&apos;s grade to see the monthly estimate.
          </p>
          <select
            className={styles.selectPremium}
            onChange={(e) => setSelectedClass(Number(e.target.value))}
            value={selectedClass}
            aria-label="Select Class for Fee Estimate"
          >
            {feeStructure.map((item, idx) => (
              <option key={idx} value={idx}>
                {item.class}
              </option>
            ))}
          </select>
          <div className={styles.estimateResult}>
            <span>Estimated Monthly:</span>
            <h2>₹{feeStructure[selectedClass].total}</h2>
          </div>
        </div>
      </section>

      {/* 3. Main Fee Table */}
      <section className={`${styles.section} ${styles.tableSection}`}>
        <div className={styles.tableCard}>
          <h2 className={styles.tableTitle}>Full Grade-wise Details</h2>
          <div className={styles.tableResponsive}>
            <table className={styles.feeTable}>
              <thead>
                <tr>
                  <th>Grade / Class</th>
                  <th>Tuition Fee (Monthly)</th>
                  <th>Development Fee</th>
                  <th>Total Payable</th>
                </tr>
              </thead>
              <tbody>
                {feeStructure.map((item, idx) => (
                  <tr
                    key={idx}
                    className={selectedClass === idx ? styles.activeRow : ""}
                  >
                    <td>
                      <strong>{item.class}</strong>
                    </td>
                    <td>₹{item.tuition}</td>
                    <td>₹{item.development}</td>
                    <td className={styles.amount}>₹{item.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. One-Time & Annual Charges */}
      <section className={`${styles.section} ${styles.noPaddingTop}`}>
        <div className={styles.sectionHeader}>
          <h2>One-Time & Annual Investment</h2>
        </div>
        <div className={styles.grid3}>
          <div className={styles.paymentCard}>
            <FaFileInvoiceDollar className={styles.iconBox} />
            <h3>Admission Fee</h3>
            <p>During new enrollment only.</p>
            <h2 className={styles.priceTag}>₹10,000</h2>
          </div>
          <div className={styles.paymentCard}>
            <FaWallet className={styles.iconBox} />
            <h3>Registration</h3>
            <p>Application form processing.</p>
            <h2 className={styles.priceTag}>₹500</h2>
          </div>
          <div className={styles.paymentCard}>
            <FaGift className={styles.iconBox} />
            <h3>Annual Charges</h3>
            <p>Sports, Events & Library.</p>
            <h2 className={styles.priceTag}>₹5,000</h2>
          </div>
        </div>
      </section>

      {/* 5. Payment Portal Info */}
      <section className={`${styles.section} ${styles.bgLight}`}>
        <div className={styles.sectionHeader}>
          <h2>Secure Payment Modes</h2>
        </div>
        <div className={styles.grid3}>
          <div className={styles.paymentCard}>
            <FaUniversity className={styles.iconBox} />
            <h4>Online Bank Transfer</h4>
            <p className={styles.paymentDetails}>
              A/C Name: R.K. Vidyamandir
              <br />
              A/C No: 1234567890
              <br />
              IFSC: SBIN000XXXX
            </p>
          </div>
          <div className={styles.paymentCard}>
            <FaCreditCard className={styles.iconBox} />
            <h4>Campus Counter</h4>
            <p className={styles.paymentDetails}>
              Pay via Cash/Card at the accounts desk.
              <br />
              Timings: 9:00 AM - 2:00 PM
            </p>
          </div>
          <div className={styles.paymentCard}>
            <FaQrcode className={styles.iconBox} />
            <h4>Digital Wallet (UPI)</h4>
            <p className={styles.paymentDetails}>
              Scan the QR code at reception or pay to:
              <br />
              <strong>rkvidya@upi</strong>
            </p>
          </div>
        </div>
      </section>

      {/* 6. Scholarship (High Impact CTA) */}
      <section className={styles.section}>
        <div className={styles.alertBox}>
          <div className={styles.alertIcon}>🎓</div>
          <div className={styles.alertContent}>
            <h3>Empowering Bright Students</h3>
            <p>
              Late R.K. Vidyamandir offers merit-based scholarships up to 50%
              for students with exceptional academic or sports records.
            </p>
          </div>
          <a href="/contact" className={styles.btnGold}>
            Apply for Scholarship
          </a>
        </div>
      </section>

      {/* 7. FAQs */}
      <section className={styles.faqSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.faqTitle}>
            <FaQuestionCircle className={styles.iconGold} /> Frequently Asked
            Questions
          </h2>
        </div>
        <div className={styles.faqGrid}>
          <div className={styles.faqItem}>
            <h4>Is there a discount for siblings?</h4>
            <p>
              Yes, a 10% concession on tuition fees is provided to the younger
              sibling.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h4>What is the last date for monthly payment?</h4>
            <p>
              Fees should be cleared by the 10th of every month to avoid late
              fines.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h4>Do you accept online payments?</h4>
            <p>
              Yes, we accept UPI, NEFT, and IMPS. Please share the screenshot
              with the accounts office.
            </p>
          </div>
        </div>
      </section>

      {/* 8. Policy Footer */}
      <section className={styles.policySection}>
        <h4>Important Guidelines</h4>
        <ul className={styles.policyList}>
          <li>
            <span>•</span> Late fine of <strong>₹50 per week</strong> applies
            after the 10th of the month.
          </li>
          <li>
            <span>•</span> Fees once paid are <strong>non-refundable</strong>{" "}
            and non-transferable.
          </li>
          <li>
            <span>•</span> Computer and Science lab fees are charged on a termly
            basis.
          </li>
        </ul>
      </section>
    </main>
  );
}
