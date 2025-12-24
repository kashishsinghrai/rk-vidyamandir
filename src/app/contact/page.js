"use client";
import { useState } from "react"; // Hook add kiya
import { handleContactForm } from "../actions/contact"; // Action import kiya
import styles from "./page.module.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaClock,
  FaExclamationTriangle,
} from "react-icons/fa";

export default function ContactPage() {
  const [status, setStatus] = useState(null); // success, error, or loading

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("loading");

    const formData = new FormData(event.target);
    const result = await handleContactForm(formData);

    if (result.success) {
      setStatus("success");
      event.target.reset(); // Form clear kar dega
    } else {
      setStatus("error");
    }
  }

  return (
    <div className={styles.main}>
      {/* 1. Hero Section */}
      <section className={styles.hero}>
        <h1>
          Contact <span>Us</span>
        </h1>
        <p>
          Have questions? We&apos;re here to help. Reach out to the Late R.K.
          Vidyamandir administration for any inquiries or support.
        </p>
      </section>

      {/* 2. Top Info Cards */}
      <section className={styles.contactGrid}>
        <div className={styles.contactCard}>
          <div className={styles.iconWrapper}>
            <FaMapMarkerAlt />
          </div>
          <h3>Visit Us</h3>
          <p>
            Ruhellapur, Khaga,
            <br />
            Fatehpur, UP 212655
          </p>
        </div>
        <div className={styles.contactCard}>
          <div className={styles.iconWrapper}>
            <FaPhoneAlt />
          </div>
          <h3>Call Us</h3>
          <p>Main Office: +91 8009337704</p>
          <p>Principal: +91 9451406619</p>
        </div>
        <div className={styles.contactCard}>
          <div className={styles.iconWrapper}>
            <FaEnvelope />
          </div>
          <h3>Email Us</h3>
          <p>kashishsingh124356@gmail.com</p>
          <p>info@rkvidyamandir.edu</p>
        </div>
      </section>

      {/* 3. Interactive Section: Form & Map */}
      <section className={styles.actionSection}>
        <div className={styles.formWrapper}>
          <h2 style={{ marginBottom: "30px" }}>Send Us a Message</h2>

          <form onSubmit={handleSubmit}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px",
              }}
            >
              <div className={styles.inputGroup}>
                <label>Full Name *</label>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <label>Email Address *</label>
                <input
                  name="email"
                  type="email"
                  placeholder="example@mail.com"
                  required
                />
              </div>
            </div>
            <div className={styles.inputGroup}>
              <label>Subject *</label>
              <select name="subject" required>
                <option value="">Choose Subject</option>
                <option value="Admission Inquiry">Admission Inquiry</option>
                <option value="Fee Query">Fee Related Query</option>
                <option value="General Feedback">Feedback/Suggestions</option>
              </select>
            </div>
            <div className={styles.inputGroup}>
              <label>Message *</label>
              <textarea
                name="message"
                rows="5"
                placeholder="How can we help you?"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className={styles.submitBtn}
              disabled={status === "loading"}
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {/* Status Feedback Messages */}
            {status === "success" && (
              <p
                style={{
                  color: "#22c55e",
                  marginTop: "15px",
                  fontWeight: "bold",
                }}
              >
                ✅ Message sent! A confirmation email has been sent to you.
              </p>
            )}
            {status === "error" && (
              <p
                style={{
                  color: "#ef4444",
                  marginTop: "15px",
                  fontWeight: "bold",
                }}
              >
                ❌ Failed to send message. Please try again or call us.
              </p>
            )}
          </form>
        </div>

        <div className={styles.mapFrame}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.635814524451!2d81.1082604!3d25.7533668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDQ1JzEyLjEiTiA4McKwMDYnMjkuNyJF!5e0!3m2!1sen!2sin!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* 4. Administrative Details */}
      <section className={styles.infoSection}>
        <div className={styles.grid2}>
          <div className={styles.hourCard}>
            <h3>
              <FaClock style={{ color: "#f59e0b", marginRight: "10px" }} />{" "}
              Office Hours
            </h3>
            <div style={{ marginTop: "20px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                }}
              >
                <span>
                  <b>Mon - Fri:</b>
                </span>{" "}
                <span>8:00 AM - 4:00 PM</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                }}
              >
                <span>
                  <b>Saturday:</b>
                </span>{" "}
                <span>8:00 AM - 1:00 PM</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  color: "#ef4444",
                }}
              >
                <span>
                  <b>Sunday:</b>
                </span>{" "}
                <span>Closed</span>
              </div>
            </div>
          </div>
          <div className={styles.hourCard}>
            <h3>Department Contacts</h3>
            <p style={{ margin: "15px 0 5px" }}>
              <b>Academics:</b> academic@rkvidyamandir.edu
            </p>
            <p style={{ margin: "5px 0" }}>
              <b>Admissions:</b> +91 8009337704
            </p>
            <p style={{ margin: "5px 0" }}>
              <b>Accounts:</b> accounts@rkvidyamandir.edu
            </p>
          </div>
        </div>
      </section>

      {/* 5. Quick Connect Socials */}
      <section className={styles.socialGrid}>
        <a
          href="https://wa.me/917267011705"
          className={styles.socialBox}
          style={{ background: "#25D366" }}
        >
          <FaWhatsapp size={30} /> <p>WhatsApp</p>
        </a>
        <a
          href="http://www.youtube.com/@chandsir5588"
          className={styles.socialBox}
          style={{ background: "#FF0000" }}
        >
          <FaYoutube size={30} /> <p>YouTube</p>
        </a>
        <a
          href="#"
          className={styles.socialBox}
          style={{ background: "#1877F2" }}
        >
          <FaFacebook size={30} /> <p>Facebook</p>
        </a>
        <a
          href="#"
          className={styles.socialBox}
          style={{ background: "#E4405F" }}
        >
          <FaInstagram size={30} /> <p>Instagram</p>
        </a>
      </section>

      {/* 6. Emergency & Guidelines */}
      <section className={styles.infoSection} style={{ background: "#f8fafc" }}>
        <div className={styles.grid2}>
          <div className={styles.emergencyCard}>
            <h3 style={{ color: "#ef4444" }}>
              <FaExclamationTriangle /> Emergencies
            </h3>
            <p style={{ marginTop: "10px" }}>
              <b>Medical:</b> Dial 108 or +91 8009337704
            </p>
            <p>
              <b>Security:</b> Dial 100 or School Guard Office
            </p>
          </div>
          <div
            className={styles.hourCard}
            style={{ background: "#1e1b4b", color: "white" }}
          >
            <h3 style={{ color: "#f59e0b" }}>Visitor Policy</h3>
            <ul style={{ marginTop: "10px", fontSize: "0.9rem", opacity: 0.9 }}>
              <li>• Prior appointment recommended for Principal meeting.</li>
              <li>• Valid ID proof required at the reception.</li>
              <li>• Visiting hours: 9:00 AM to 12:00 PM.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
