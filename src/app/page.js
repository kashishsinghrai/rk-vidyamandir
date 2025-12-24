"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main className={styles.main}>
      {/* --- HERO SECTION --- */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>Admission Open 2025-26</span>
          <h1 className={styles.heroTitle}>
            Empowering Minds <span>Shaping</span> Success.
          </h1>
          <p className={styles.heroDesc}>
            Late R.K. Vidyamandir School combines academic rigor with character
            building to prepare students for a global future.
          </p>
          <div className={styles.heroButtons}>
            <Link href="/admission" className={styles.btnGlow}>
              Start Your Journey Today
            </Link>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: "50%",
            height: "100%",
            opacity: 0.15,
          }}
        >
          <Image
            src="/school-banner.jpg"
            alt="School Banner"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </section>

      {/* --- STATS SECTION --- */}
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

      {/* --- CORE PILLARS --- */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Our Educational Pillars</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <span className={styles.cardIcon}>🔬</span>
            <h3>Modern Science</h3>
            <p>
              Advanced lab facilities and STEM-focused learning to spark
              curiosity and innovation.
            </p>
          </div>
          <div className={styles.card}>
            <span className={styles.cardIcon}>⚖️</span>
            <h3>Moral Values</h3>
            <p>
              Instilling discipline, integrity, and respect through our
              deep-rooted value system.
            </p>
          </div>
          <div className={styles.card}>
            <span className={styles.cardIcon}>🎨</span>
            <h3>Creative Arts</h3>
            <p>
              Encouraging students to explore music, dance, and fine arts for
              holistic growth.
            </p>
          </div>
        </div>
      </section>

      {/* --- PRINCIPAL SECTION --- */}
      <section className={styles.section}>
        <div className={styles.principalContainer}>
          <div className={styles.imageWrapper}>
            <Image
              src="/teacher1.jpg"
              alt="Principal"
              width={300}
              height={380}
              className={styles.principalImg}
            />
          </div>
          <div className={styles.principalText}>
            <h2>Message from the Principal</h2>
            <p
              style={{
                fontSize: "1.25rem",
                fontStyle: "italic",
                marginBottom: "25px",
              }}
            >
              "Education is the most powerful weapon which you can use to change
              the world. At RK Vidyamandir, we don't just teach books, we build
              futures."
            </p>
            <p>
              <strong>Mr. Anshuman Singh</strong>
              <br />
              <span style={{ color: "#f59e0b" }}>M.A, B.Ed | Principal</span>
            </p>
          </div>
        </div>
      </section>

      {/* --- NEWS & CAMPUS --- */}
      <section className={`${styles.section} ${styles.newsHub}`}>
        <h2 className={styles.sectionTitle}>Campus Highlights</h2>
        <div className={styles.grid}>
          <div style={{ gridColumn: "span 2" }}>
            <div className={styles.newsCard}>
              <h4 style={{ color: "#1e1b4b", marginBottom: "5px" }}>
                Admission Notice
              </h4>
              <p style={{ color: "#64748b" }}>
                Registrations for the new academic session are now open for KG
                to Class XII.
              </p>
            </div>
            <div className={styles.newsCard}>
              <h4 style={{ color: "#1e1b4b", marginBottom: "5px" }}>
                Sports Meet 2025
              </h4>
              <p style={{ color: "#64748b" }}>
                Our annual sports meet is scheduled for the last week of
                January. Get ready!
              </p>
            </div>
          </div>
          <div
            className={styles.statGlassCard}
            style={{ background: "#1e1b4b", color: "white" }}
          >
            <h3 style={{ color: "#f59e0b" }}>Visit Us</h3>
            <p style={{ color: "#cbd5e1" }}>
              Take a walk through our hi-tech campus facilities.
            </p>
            <br />
            <Link
              href="/contact"
              className={styles.btnGlow}
              style={{ width: "100%" }}
            >
              Book a Visit
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
