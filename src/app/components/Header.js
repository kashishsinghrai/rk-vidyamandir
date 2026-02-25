"use client";
import Navbar from "./Navbar";
import { FaPhone, FaUserCircle } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link"; // Added Link for Logo navigation
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.headerWrapper}>
      {/* 1. Top Mini-Header */}
      <div className={styles.topBar}>
        <div className={styles.topBarInfo}>
          <span>📍 Ruhellapur, Khaga, Fatehpur</span>
          <span className={styles.hideOnTablet}>
            🗓 Estd. 2000 by Chand Sir
          </span>
        </div>
        <div className={styles.topBarInfo}>
          <span>
            UDISE: <b className={styles.udiseBadge}>09421306803</b>
          </span>
        </div>
      </div>

      {/* 2. Main Branding Header */}
      <div className={styles.mainHeader}>
        {/* Wrapped Brand in Link to navigate Home */}
        <Link href="/" className={styles.brand}>
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
            <p className={styles.subtitle}>
              Junior High School | Nurturing Excellence
            </p>
          </div>
        </Link>

        {/* Header Actions: Call aur Login buttons */}
        <div className={styles.headerActions}>
          {/* Contact Widget */}
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

          {/* Login Button */}
          <button className={styles.loginBtn} aria-label="Student Login">
            <div className={styles.btnContent}>
              <FaUserCircle className={styles.loginIcon} />
              <span className={styles.loginText}>Student Login</span>
            </div>
          </button>
        </div>
      </div>

      {/* 3. Modern Navigation Bar */}
      <Navbar />
    </header>
  );
}
