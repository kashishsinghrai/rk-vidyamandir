"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Handle Body Scroll Lock on Mobile Menu Open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  // Handle Scroll Effect for Sticky Navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Main Visible Navigation Items (Desktop)
  const mainNavItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/academics", label: "Academics" },
    { href: "/admission", label: "Admission" },
    { href: "/fee-structure", label: "Fees" },
    { href: "/teachers", label: "Faculty" },
    { href: "/student-life", label: "Student Life" },
    { href: "/contact", label: "Contact" },
  ];

  // Items to go inside the "More" Dropdown on Desktop
  const moreNavItems = [
    { href: "/notices", label: "Notices & Updates" },
    { href: "/exam-result", label: "Results" },
    { href: "/facilities", label: "Facilities" },
    { href: "/transport", label: "Transport" },
    { href: "/alumni", label: "Alumni" },
    { href: "/gallery", label: "Gallery" },
    { href: "/administration", label: "Administration" },
    { href: "/actions", label: "Actions" }, // Added from screenshot
  ];

  // All Items combined for Mobile View
  const allNavItems = [...mainNavItems, ...moreNavItems];

  return (
    <nav
      className={`${styles.navbar} ${isScrolled ? styles.navbarScrolled : ""}`}
      aria-label="Main Navigation"
    >
      <div className={styles.navContainer}>
        {/* Mobile Menu Trigger */}
        <button
          className={styles.mobileMenuBtn}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <FaBars />
          <span className={styles.menuText}>Menu</span>
        </button>

        {/* Desktop Links */}
        <ul className={styles.desktopNav}>
          {mainNavItems.map((item, index) => (
            <li key={index} className={styles.navItem}>
              <Link href={item.href} className={styles.navLink}>
                {item.label}
              </Link>
            </li>
          ))}

          {/* Desktop Dropdown for 'More' */}
          <li
            className={styles.navItem}
            ref={dropdownRef}
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button
              className={`${styles.navLink} ${styles.dropdownBtn}`}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              aria-haspopup="true"
              aria-expanded={isDropdownOpen}
            >
              Explore <FaChevronDown className={styles.chevron} />
            </button>

            {/* Dropdown Menu */}
            <div
              className={`${styles.dropdownMenu} ${isDropdownOpen ? styles.showDropdown : ""}`}
            >
              {moreNavItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={styles.dropdownLink}
                  onClick={() => setIsDropdownOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </li>
        </ul>

        {/* Mobile Sidebar */}
        <div
          className={`${styles.mobileSidebar} ${
            isMenuOpen ? styles.mobileSidebarOpen : ""
          }`}
          aria-hidden={!isMenuOpen}
        >
          <div className={styles.sidebarHeader}>
            <h3>RK Vidyamandir</h3>
            <button
              className={styles.closeBtn}
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <FaTimes />
            </button>
          </div>
          <ul className={styles.mobileNavLinks}>
            {allNavItems.map((item, index) => (
              <li key={index} className={styles.mobileNavItem}>
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
          <div
            className={styles.overlay}
            onClick={closeMenu}
            aria-hidden="true"
          ></div>
        )}
      </div>
    </nav>
  );
}
