"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll effect for sticky navbar transparency/color change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Updated Navigation Items with New Features
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/academics", label: "Academics" },
    { href: "/administration", label: "Administration" },
    { href: "/admission", label: "Admission" },
    { href: "/student-life", label: "Student Life" }, // New: Clubs & Houses
    { href: "/exam-result", label: "Results" },
    { href: "/fee-structure", label: "Fees" },
    { href: "/transport", label: "Transport" }, // New: Safety & Routes
    { href: "/alumni", label: "Alumni" }, // New: Wall of Fame
    { href: "/about", label: "About" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`${styles.navbar} ${isScrolled ? styles.navbarScrolled : ""}`}
    >
      <div className={styles.navContainer}>
        {/* Mobile Menu Trigger */}
        <button className={styles.mobileMenuBtn} onClick={toggleMenu}>
          <FaBars />
        </button>

        {/* Desktop Links */}
        <ul className={styles.desktopNav}>
          {navItems.map((item, index) => (
            <li key={index}>
              <Link href={item.href} className={styles.navLink}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Sidebar */}
        <div
          className={`${styles.mobileSidebar} ${
            isMenuOpen ? styles.mobileSidebarOpen : ""
          }`}
        >
          <div className={styles.sidebarHeader}>
            <h3>RK Vidyamandir</h3>
            <button className={styles.closeBtn} onClick={closeMenu}>
              <FaTimes />
            </button>
          </div>
          <ul className={styles.mobileNavLinks}>
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className={styles.mobileNavLink}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Overlay */}
        {isMenuOpen && (
          <div className={styles.overlay} onClick={closeMenu}></div>
        )}
      </div>
    </nav>
  );
}
