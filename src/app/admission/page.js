"use client";
import { useState } from "react";
import styles from "./page.module.css";
import {
  FaClipboardCheck,
  FaFileUpload,
  FaPenNib,
  FaUserFriends,
} from "react-icons/fa";

export default function AdmissionPage() {
  const [formStatus, setFormStatus] = useState(null); // 'loading', 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("loading");

    // Here you would normally call your Server Action from /actions
    // For now, we simulate a 2-second delay
    setTimeout(() => {
      setFormStatus("success");
    }, 2000);
  };

  return (
    <div className={styles.main}>
      {/* 1. Header Hero - Updated for 2026 */}
      <section className={styles.hero}>
        <h1>
          Admission <span>2026-27</span>
        </h1>
        <p>
          Your journey towards a brighter future begins here. Join Late R.K.
          Vidyamandir for a world-class educational experience.
        </p>
      </section>

      {/* 2. Admission Journey (Steps) */}
      <section className={styles.processSection}>
        <div className={styles.processGrid}>
          {[
            {
              id: "01",
              title: "Apply",
              icon: <FaPenNib />,
              desc: "Fill the digital application form below",
            },
            {
              id: "02",
              title: "Verify",
              icon: <FaFileUpload />,
              desc: "Submit and verify your documents",
            },
            {
              id: "03",
              title: "Assessment",
              icon: <FaClipboardCheck />,
              desc: "A simple aptitude test for the student",
            },
            {
              id: "04",
              title: "Meet Us",
              icon: <FaUserFriends />,
              desc: "A warm interaction with the parents",
            },
          ].map((step, index) => (
            <div key={index} className={styles.stepCard}>
              <div className={styles.stepNum}>{step.id}</div>
              <div
                style={{
                  fontSize: "1.5rem",
                  color: "#f59e0b",
                  marginBottom: "10px",
                }}
              >
                {step.icon}
              </div>
              <h3>{step.title}</h3>
              <p style={{ color: "#64748b", fontSize: "0.9rem" }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. The Digital Form */}
      <section className={styles.formSection}>
        <div className={styles.formWrapper}>
          <h2
            style={{
              color: "#1e1b4b",
              marginBottom: "40px",
              textAlign: "center",
            }}
          >
            Candidate Registration 2026
          </h2>

          {formStatus === "success" ? (
            <div
              style={{
                textAlign: "center",
                padding: "40px",
                background: "#dcfce7",
                borderRadius: "10px",
              }}
            >
              <h3 style={{ color: "#166534" }}>✅ Registration Submitted!</h3>
              <p>
                We have received your application. Our team will contact you
                within 24-48 hours.
              </p>
              <button
                onClick={() => setFormStatus(null)}
                className={styles.submitBtn}
                style={{ marginTop: "20px" }}
              >
                Fill Another Form
              </button>
            </div>
          ) : (
            <form className={styles.admissionForm} onSubmit={handleSubmit}>
              <div className={styles.formGrid}>
                {/* Student Details */}
                <div className={styles.inputGroup}>
                  <label htmlFor="studentName">Student Full Name*</label>
                  <input
                    id="studentName"
                    name="studentName"
                    type="text"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="dob">Date of Birth*</label>
                  <input id="dob" name="dob" type="date" required />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="gender">Gender*</label>
                  <select id="gender" name="gender" required>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="class">Class Applying For*</label>
                  <select id="class" name="class" required>
                    <option value="">Select Class</option>
                    <option value="nursery">Nursery</option>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <option key={n} value={n}>
                        Class {n}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Parent Details */}
                <div className={styles.inputGroup}>
                  <label htmlFor="fatherName">Father&apos;s Name*</label>
                  <input
                    id="fatherName"
                    name="fatherName"
                    type="text"
                    required
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="motherName">Mother&apos;s Name*</label>
                  <input
                    id="motherName"
                    name="motherName"
                    type="text"
                    required
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="phone">Phone Number*</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91"
                    required
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="email@example.com"
                  />
                </div>

                <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                  <label htmlFor="address">Residential Address*</label>
                  <textarea
                    id="address"
                    name="address"
                    rows="3"
                    placeholder="Enter complete address..."
                    required
                  ></textarea>
                </div>
              </div>

              <div style={{ textAlign: "center" }}>
                <button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={formStatus === "loading"}
                >
                  {formStatus === "loading"
                    ? "Processing..."
                    : "Submit Registration"}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* 4. Information Hub */}
      <section className={styles.infoSection}>
        <div className={styles.infoGrid}>
          <div className={styles.infoCard}>
            <h3>Necessary Papers</h3>
            <ul>
              <li>• Original Transfer Certificate</li>
              <li>• Copy of Birth Certificate</li>
              <li>• 4 Passport Size Photographs</li>
              <li>• Student &amp; Parent Aadhar Card</li>
            </ul>
          </div>
          <div className={styles.infoCard}>
            <h3>Key Dates (2026)</h3>
            <ul>
              <li>
                • <strong>Dec 01:</strong> Portal Opens
              </li>
              <li>
                • <strong>Feb 28:</strong> Deadline for Phase 1
              </li>
              <li>
                • <strong>Mar 15:</strong> Entrance Evaluation
              </li>
              <li>
                • <strong>Mar 30:</strong> Result Publishing
              </li>
            </ul>
          </div>
          <div className={styles.infoCard}>
            <h3>Fee Structure</h3>
            <ul>
              <li>• Registration: ₹500</li>
              <li>• Admission: ₹10,000</li>
              <li>• Monthly: Varies by class</li>
              <li>
                • <strong>Scholarships:</strong> Available for merit students.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Support Section */}
      <footer
        style={{
          padding: "60px 8%",
          textAlign: "center",
          background: "#1e1b4b",
          color: "white",
        }}
      >
        <h2>Need Help with Admission?</h2>
        <p style={{ margin: "10px 0 30px", opacity: 0.8 }}>
          Our admission counselors are here to help you through every step.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            flexWrap: "wrap",
          }}
        >
          <div>
            📞 <b>+91 8009337704</b>
          </div>
          <div>
            ✉️ <b>lateramkalivi@gmail.com</b>
          </div>
          <div>
            📍 <b>Office Hours: 9 AM - 4 PM</b>
          </div>
        </div>
      </footer>
    </div>
  );
}
