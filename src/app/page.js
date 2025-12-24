"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main className={styles.main}>
      {/* --- ULTRA MODERN HERO --- */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>Excellence Redefined</span>
          <h1 className={styles.heroTitle}>
            Designing the <span>Future</span> of Education.
          </h1>
          <p className={styles.heroDesc}>
            Late R.K. Vidyamandir School merges traditional values with next-gen
            technology to nurture the leaders of tomorrow.
          </p>
          <div className={styles.heroButtons}>
            <Link href="/admission" className={styles.btnGlow}>
              Apply for Admission 2025
            </Link>
          </div>
        </div>

        {/* Background Image Element */}
        <div className={styles.heroImageContainer}>
          <Image
            src="/school-banner.jpg"
            alt="Future Education"
            fill
            className={styles.heroImage}
            style={{ opacity: 0.2, objectFit: "cover" }}
          />
        </div>
      </section>

      {/* --- GLASS STATS --- */}
      <section className={styles.statsSection}>
        <div className={styles.statGlassCard}>
          <span className={styles.statNumber}>25+</span>
          <p>Years of Legacy</p>
        </div>
        <div className={styles.statGlassCard}>
          <span className={styles.statNumber}>100%</span>
          <p>Digital Campus</p>
        </div>
        <div className={styles.statGlassCard}>
          <span className={styles.statNumber}>50+</span>
          <p>Expert Mentors</p>
        </div>
      </section>

      {/* --- CORE PILLARS --- */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>The Three Pillars</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <span className={styles.cardIcon}>🚀</span>
            <h3>Innovation</h3>
            <p>
              Coding, Robotics, and AI-driven learning modules integrated into
              the curriculum.
            </p>
          </div>
          <div className={styles.card}>
            <span className={styles.cardIcon}>🌿</span>
            <h3>Value System</h3>
            <p>
              Strong moral foundation based on respect, discipline, and cultural
              heritage.
            </p>
          </div>
          <div className={styles.card}>
            <span className={styles.cardIcon}>🏟️</span>
            <h3>Elite Sports</h3>
            <p>
              Professional coaching for indoor and outdoor sports with
              world-class equipment.
            </p>
          </div>
        </div>
      </section>

      {/* --- MANAGEMENT LEADERSHIP --- */}
      <section className={styles.section}>
        <div className={styles.principalContainer}>
          <div className={styles.imageWrapper}>
            <Image
              src="/teacher1.jpg"
              alt="Principal"
              width={350}
              height={450}
              className={styles.principalImg}
            />
          </div>
          <div className={styles.principalText}>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
              Visionary Leadership
            </h2>
            <p
              style={{
                fontSize: "1.2rem",
                color: "#94a3b8",
                fontStyle: "italic",
                marginBottom: "30px",
              }}
            >
              "Our mission is to create a learning ecosystem where every student
              doesn't just learn, but thrives in a rapidly changing world. We
              are building creators, not consumers."
            </p>
            <p>
              <strong>Mr. Anshuman Singh</strong>
              <br />
              Director & Principal
            </p>
          </div>
        </div>
      </section>

      {/* --- NEWS HUB --- */}
      <section className={`${styles.section} ${styles.newsHub}`}>
        <div className={styles.grid}>
          <div style={{ gridColumn: "span 2" }}>
            <h2 className={styles.sectionTitle} style={{ textAlign: "left" }}>
              Live Updates
            </h2>
            <div className={styles.card} style={{ marginBottom: "15px" }}>
              <p style={{ color: "#f97316" }}>
                • Admission Open for Batch 2025-26
              </p>
            </div>
            <div className={styles.card}>
              <p style={{ color: "#f97316" }}>
                • Annual Tech Fest coming up in February
              </p>
            </div>
          </div>
          <div className={styles.statGlassCard}>
            <h3>Visit Campus</h3>
            <p>Experience the future of schooling today.</p>
            <br />
            <Link href="/contact" className={styles.btnGlow}>
              Book a Tour
            </Link>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer
        className={styles.section}
        style={{
          background: "#020617",
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div className={styles.grid}>
          <div>
            <h3>RK Vidyamandir</h3>
            <p>The Future of Learning.</p>
          </div>
          <div>
            <h4>Contact</h4>
            <p>123 Galaxy Avenue, Education City</p>
          </div>
          <div>
            <h4>Socials</h4>
            <p>Instagram | LinkedIn | Facebook</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
