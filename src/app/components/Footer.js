"use client";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.mainGrid}>
          {/* Brand Column */}
          <div className={styles.brandInfo}>
            <h2>
              R.K. <span>Vidyamandir</span>
            </h2>
            <p>
              Dedicated to academic excellence and character development. We
              prepare students to lead and inspire in an ever-changing world
              with rooted values.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className={styles.column}>
            <h3>Academy</h3>
            <ul className={styles.linksList}>
              <li>
                <Link href="/about">Our History</Link>
              </li>
              <li>
                <Link href="/admission">Admissions</Link>
              </li>
              <li>
                <Link href="/facilities">Campus Life</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info Column */}
          <div className={styles.column}>
            <h3>Reach Us</h3>
            <div className={styles.contactItem}>
              <span className={styles.iconCircle}>📍</span>
              <p>
                Ruhellapur, Khaga,
                <br />
                Fatehpur, UP 212655
              </p>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.iconCircle}>📞</span>
              <p>+91 8009337704</p>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.iconCircle}>✉️</span>
              <p>lateramkalivi@gmail.com</p>
            </div>
          </div>

          {/* School Hours Column */}
          <div className={styles.column}>
            <h3>School Hours</h3>
            <div className={styles.hourRow}>
              <span>Mon - Fri:</span>
              <span className={styles.highlight}>8:00 AM - 2:00 PM</span>
            </div>
            <div className={styles.hourRow}>
              <span>Saturday:</span>
              <span className={styles.highlight}>8:00 AM - 12:00 PM</span>
            </div>
            <div className={styles.hourRow}>
              <span>Sunday:</span>
              <span style={{ color: "#ef4444", fontWeight: "bold" }}>
                Closed
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()}{" "}
            <span className={styles.highlight}>Late R. K. Vidyamandir</span>.
            All Rights Reserved.
          </p>
          <p className={styles.poweredBy}>
            Designed with Vision by{" "}
            <span style={{ color: "#fff", fontWeight: "600" }}>Chand Sir</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
