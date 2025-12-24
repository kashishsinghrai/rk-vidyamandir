"use client";
import { useState } from "react"; // Added for Calculator logic
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
} from "react-icons/fa";

export default function FeePage() {
  const [selectedClass, setSelectedClass] = useState(0);

  const feeStructure = [
    { class: "Nursery - UKG", tuition: 800, development: 200, total: 1000 },
    { class: "Class 1st - 3rd", tuition: 1000, development: 250, total: 1250 },
    { class: "Class 4th - 5th", tuition: 1200, development: 300, total: 1500 },
    { class: "Class 6th - 8th", tuition: 1500, development: 400, total: 1900 },
  ];

  return (
    <main className={styles.main}>
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

      {/* 2. Interactive Fee Estimator (New) */}
      <section className={styles.section} style={{ paddingBottom: 0 }}>
        <div className={styles.calculatorBox}>
          <h3 style={{ marginBottom: "15px" }}>
            <FaInfoCircle style={{ color: "#f59e0b" }} /> Quick Fee Preview
          </h3>
          <p style={{ marginBottom: "20px", color: "#64748b" }}>
            Select your child's grade to see the monthly estimate.
          </p>
          <select
            className={styles.selectPremium}
            onChange={(e) => setSelectedClass(e.target.value)}
          >
            {feeStructure.map((item, idx) => (
              <option key={idx} value={idx}>
                {item.class}
              </option>
            ))}
          </select>
          <div style={{ marginTop: "25px" }}>
            <span style={{ fontSize: "0.9rem", color: "#64748b" }}>
              Estimated Monthly:
            </span>
            <h2 style={{ fontSize: "2.5rem", color: "#1e1b4b" }}>
              ₹{feeStructure[selectedClass].total}
            </h2>
          </div>
        </div>
      </section>

      {/* 3. Main Fee Table */}
      <section className={styles.section} style={{ paddingTop: "20px" }}>
        <div className={styles.tableCard}>
          <h2 style={{ marginBottom: "25px", color: "#1e1b4b" }}>
            Full Grade-wise Details
          </h2>
          <div style={{ overflowX: "auto" }}>
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
                    style={
                      selectedClass == idx ? { background: "#f59e0b10" } : {}
                    }
                  >
                    <td>
                      <b>{item.class}</b>
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
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
          One-Time & Annual Investment
        </h2>
        <div className={styles.grid3}>
          <div className={styles.paymentCard}>
            <FaFileInvoiceDollar className={styles.iconBox} />
            <h3>Admission Fee</h3>
            <p>During new enrollment only.</p>
            <h2 style={{ color: "#1e1b4b", marginTop: "10px" }}>₹10,000</h2>
          </div>
          <div className={styles.paymentCard}>
            <FaWallet className={styles.iconBox} />
            <h3>Registration</h3>
            <p>Application form processing.</p>
            <h2 style={{ color: "#1e1b4b", marginTop: "10px" }}>₹500</h2>
          </div>
          <div className={styles.paymentCard}>
            <FaGift className={styles.iconBox} />
            <h3>Annual Charges</h3>
            <p>Sports, Events & Library.</p>
            <h2 style={{ color: "#1e1b4b", marginTop: "10px" }}>₹5,000</h2>
          </div>
        </div>
      </section>

      {/* 5. Payment Portal Info */}
      <section className={styles.section} style={{ background: "#fff" }}>
        <h2 style={{ textAlign: "center", marginBottom: "50px" }}>
          Secure Payment Modes
        </h2>
        <div className={styles.grid3}>
          <div className={styles.paymentCard}>
            <FaUniversity className={styles.iconBox} />
            <h4>Online Bank Transfer</h4>
            <p
              style={{
                fontSize: "0.85rem",
                marginTop: "10px",
                color: "#64748b",
              }}
            >
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
            <p
              style={{
                fontSize: "0.85rem",
                marginTop: "10px",
                color: "#64748b",
              }}
            >
              Pay via Cash/Card at the accounts desk.
              <br />
              Timings: 9:00 AM - 2:00 PM
            </p>
          </div>
          <div className={styles.paymentCard}>
            <div className={styles.iconBox}>📱</div>
            <h4>Digital Wallet (UPI)</h4>
            <p
              style={{
                fontSize: "0.85rem",
                marginTop: "10px",
                color: "#64748b",
              }}
            >
              Scan the QR at reception or pay to:
              <br />
              <b>rkvidya@upi</b>
            </p>
          </div>
        </div>
      </section>

      {/* 6. Scholarship (High Impact CTA) */}
      <section className={styles.section}>
        <div className={styles.alertBox}>
          <div style={{ fontSize: "3.5rem" }}>🎓</div>
          <div style={{ flex: 1 }}>
            <h3>Empowering Bright Students</h3>
            <p style={{ opacity: 0.9 }}>
              Late R.K. Vidyamandir offers merit-based scholarships up to 50%
              for students with exceptional academic or sports records.
            </p>
          </div>
          <a href="/contact" className={styles.btnGold}>
            Apply for Scholarship
          </a>
        </div>
      </section>

      {/* 7. FAQs (New) */}
      <section className={styles.faqSection}>
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
          <FaQuestionCircle style={{ color: "#f59e0b" }} /> Frequently Asked
          Questions
        </h2>
        <div className={styles.faqGrid}>
          <div className={styles.faqItem}>
            <h4>Is there a discount for siblings?</h4>
            <p style={{ fontSize: "0.9rem", color: "#64748b" }}>
              Yes, a 10% concession on tuition fees is provided to the younger
              sibling.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h4>What is the last date for monthly payment?</h4>
            <p style={{ fontSize: "0.9rem", color: "#64748b" }}>
              Fees should be cleared by the 10th of every month to avoid late
              fines.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h4>Do you accept online payments?</h4>
            <p style={{ fontSize: "0.9rem", color: "#64748b" }}>
              Yes, we accept UPI, NEFT, and IMPS. Please share the screenshot
              with the accounts office.
            </p>
          </div>
        </div>
      </section>

      {/* 8. Policy Footer */}
      <section
        style={{
          textAlign: "center",
          padding: "60px 8%",
          background: "#f1f5f9",
          borderTop: "1px solid #e2e8f0",
        }}
      >
        <h4
          style={{
            color: "#1e1b4b",
            textTransform: "uppercase",
            letterSpacing: "1px",
          }}
        >
          Important Guidelines
        </h4>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            marginTop: "20px",
            fontSize: "0.95rem",
            color: "#64748b",
            lineHeight: "2",
          }}
        >
          <li>
            • Late fine of <b>₹50 per week</b> applies after the 10th of the
            month.
          </li>
          <li>
            • Fees once paid are <b>non-refundable</b> and non-transferable.
          </li>
          <li>
            • Computer and Science lab fees are charged on a termly basis.
          </li>
        </ul>
      </section>
    </main>
  );
}
