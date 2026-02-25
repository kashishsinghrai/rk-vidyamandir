"use client";

// Next image optimization component
import Image from "next/image";

// Next internal navigation
import Link from "next/link";

// CSS module import
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main className={styles.main}>
      {/* ================= HERO SECTION ================= */}
      {/* Top landing section (FIRST thing Google + users see) */}
      <section className={styles.hero}>
        {/* LEFT TEXT CONTENT */}
        <div className={styles.heroContent}>
          {/* Admission badge */}
          <span className={styles.heroBadge}>Admission Open 2025-26</span>

          {/* VERY IMPORTANT FOR SEO → keep school name visible */}
          <h1 className={styles.heroTitle}>
            Late Ramkali Vidya Mandir <span>Ruhellapur Khaga Fatehpur</span>
          </h1>

          {/* Description text */}
          <p className={styles.heroDesc}>
            Official website of Late Ramkali Vidya Mandir Junior High School,
            Ruhellapur, Khaga, Fatehpur Uttar Pradesh. Providing quality Primary
            and Junior education with discipline and modern learning.
          </p>

          {/* CTA button */}
          <div className={styles.heroButtons}>
            <Link href="/admission" className={styles.btnGlow}>
              Start Your Journey Today
            </Link>
          </div>
        </div>

        {/* RIGHT BACKGROUND IMAGE */}
        {/* Absolute image for modern hero look */}
        <div className={styles.heroImageWrap}>
          <Image
            src="/school-banner.jpg"
            alt="Late Ramkali Vidya Mandir School Campus"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section className={styles.statsSection}>
        <div className={styles.statGlassCard}>
          <span className={styles.statNumber}>25+</span>
          <p>Years of Excellence</p>
        </div>

        <div className={styles.statGlassCard}>
          <span className={styles.statNumber}>100%</span>
          <p>Result Oriented</p>
        </div>

        <div className={styles.statGlassCard}>
          <span className={styles.statNumber}>50+</span>
          <p>Qualified Mentors</p>
        </div>
      </section>

      {/* ================= EDUCATIONAL PILLARS ================= */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Our Educational Pillars</h2>

        <div className={styles.grid}>
          <div className={styles.card}>
            <span className={styles.cardIcon}>🔬</span>
            <h3>Modern Science</h3>
            <p>Advanced lab facilities and STEM-focused learning.</p>
          </div>

          <div className={styles.card}>
            <span className={styles.cardIcon}>⚖️</span>
            <h3>Moral Values</h3>
            <p>Instilling discipline, integrity and respect.</p>
          </div>

          <div className={styles.card}>
            <span className={styles.cardIcon}>🎨</span>
            <h3>Creative Arts</h3>
            <p>Music, dance and arts for holistic development.</p>
          </div>
        </div>
      </section>

      {/* ================= PRINCIPAL SECTION ================= */}
      <section className={styles.section}>
        <div className={styles.principalContainer}>
          {/* Principal Image */}
          <div className={styles.imageWrapper}>
            <Image
              src="/principal.jpg"
              alt="Principal Late Ramkali Vidya Mandir"
              width={300}
              height={380}
              className={styles.principalImg}
            />
          </div>

          {/* Principal message */}
          <div className={styles.principalText}>
            <h2>Message from the Principal</h2>

            <p className={styles.principalQuote}>
              &quot;Education is the most powerful weapon which you can use to
              change the world.&quot;
            </p>

            <p>
              <strong>Mr. Anshuman Singh</strong>
              <br />
              <span className={styles.principalDesignation}>
                M.A, B.Ed | Principal
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ================= NEWS / CAMPUS ================= */}
      <section className={`${styles.section} ${styles.newsHub}`}>
        <h2 className={styles.sectionTitle}>Campus Highlights</h2>

        <div className={styles.grid}>
          <div style={{ gridColumn: "span 2" }}>
            <div className={styles.newsCard}>
              <h4>Admission Notice</h4>
              <p>Registrations for new academic session are open.</p>
            </div>

            <div className={styles.newsCard}>
              <h4>Sports Meet 2025</h4>
              <p>Annual sports meet coming soon.</p>
            </div>
          </div>

          {/* Visit card */}
          <div className={styles.visitCard}>
            <h3>Visit Us</h3>
            <p>Take a walk through our campus facilities.</p>

            <Link href="/contact" className={styles.btnGlow}>
              Book a Visit
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
