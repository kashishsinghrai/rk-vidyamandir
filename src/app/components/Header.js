"use client";
import Navbar from "./Navbar";
import { FaPhone, FaUserCircle } from "react-icons/fa";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.headerWrapper}>
      {/* 1. Top Mini-Header: Mobile par CSS isse hide kar degi space bachane ke liye */}
      <div className={styles.topBar}>
        <div className={styles.topBarInfo}>
          <span>📍 Ruhellapur, Khaga, Fatehpur</span>
          {/* Ye span tablet par hide ho jayega (CSS media query se) */}
          <span className={styles.hideOnTablet}>🗓 Estd. 2000 by Chand Sir</span>
        </div>
        <div className={styles.topBarInfo}>
          <span>
            UDISE: <b className={styles.udiseBadge}>09421306803</b>
          </span>
        </div>
      </div>

      {/* 2. Main Branding Header: Flex layout jo screen ke saath adjust hoga */}
      <div className={styles.mainHeader}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <Image
              src="/logo.png"
              alt="RK Vidyamandir Logo"
              width={70}
              height={70}
              priority
              className={styles.responsiveLogo}
            />
          </div>
          <div className={styles.titleContainer}>
            <h1>
              Late Ramkali <span>Vidyamandir</span>
            </h1>
            {/* Subtitle mobile par hide rehta hai clean look ke liye */}
            <p className={styles.subtitle}>
              Junior High School | Nurturing Excellence
            </p>
          </div>
        </div>

        {/* Header Actions: Call aur Login buttons */}
        <div className={styles.headerActions}>
          {/* Contact Widget: Tablet/Mobile par sirf icon dikhega ya hide ho jayega */}
          <div className={styles.callWidget}>
            <div className={styles.iconCircle}>
              <a href="tel:+918009337704" aria-label="Call Us">
                <FaPhone />
              </a>
            </div>
            <div className={styles.callText}>
              <span>Call Helpline</span>
              <b>+91 8009337704</b>
            </div>
          </div>

          {/* Login Button: Sabse important action */}
          <button className={styles.loginBtn} aria-label="Student Login">
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <FaUserCircle className={styles.loginIcon} />
              <span>Student Login</span>
            </div>
          </button>
        </div>
      </div>

      {/* 3. Modern Navigation Bar */}
      <Navbar />
    </header>
  );
}
