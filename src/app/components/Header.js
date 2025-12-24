"use client";
import Navbar from "./Navbar";
import { FaPhone, FaUserCircle } from "react-icons/fa";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.headerWrapper}>
      {/* 1. Top Mini-Header */}
      <div className={styles.topBar}>
        <div className={styles.topBarInfo}>
          <span>📍 Ruhellapur, Khaga, Fatehpur</span>
          <span>🗓 Estd. 2000 by Chand Sir</span>
        </div>
        <div className={styles.topBarInfo}>
          <span>
            UDISE Code: <b className={styles.udiseBadge}>09421306803</b>
          </span>
        </div>
      </div>

      {/* 2. Main Branding Header */}
      <div className={styles.mainHeader}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <Image
              src="/logo.png"
              alt="RK Vidyamandir Logo"
              width={70}
              height={70}
              priority
            />
          </div>
          <div className={styles.titleContainer}>
            <h1>
              Late Ramkali <span>Vidyamandir</span>
            </h1>
            <p className={styles.subtitle}>
              Junior High School | Nurturing Excellence
            </p>
          </div>
        </div>

        <div className={styles.headerActions}>
          {/* Contact Widget */}
          <div className={styles.callWidget}>
            <div className={styles.iconCircle}>
              <FaPhone />
            </div>
            <div className={styles.callText}>
              <span>Call Helpline</span>
              <b>+91 8009337704</b>
            </div>
          </div>

          {/* Futuristic Login Button */}
          <button className={styles.loginBtn}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <FaUserCircle /> Student Login
            </div>
          </button>
        </div>
      </div>

      {/* 3. Modern Navigation Bar */}
      <Navbar />
    </header>
  );
}
