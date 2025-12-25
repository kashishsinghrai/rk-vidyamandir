"use client";
import styles from "./page.module.css";
import Image from "next/image";
import {
  FaUserTie,
  FaBuilding,
  FaBalanceScale,
  FaUsersCog,
  FaFileInvoice,
  FaShieldAlt,
  FaAward,
  FaHistory,
} from "react-icons/fa";

export default function AdministrationPage() {
  const adminWings = [
    {
      name: "Admission Cell",
      icon: <FaUsersCog />,
      desc: "Managing new enrollments and parent inquiries.",
    },
    {
      name: "Academic Council",
      icon: <FaAward />,
      desc: "Overseeing curriculum, exams, and teaching quality.",
    },
    {
      name: "Accounts Dept.",
      icon: <FaFileInvoice />,
      desc: "Handling fee structures, scholarships, and finances.",
    },
    {
      name: "Operations",
      icon: <FaBuilding />,
      desc: "Ensuring campus safety, transport, and maintenance.",
    },
  ];

  return (
    <main className={styles.main}>
      {/* 1. Hero Section */}
      <section className={styles.hero}>
        <h1>
          Leadership &amp; <span>Governance</span> {/* & ko &amp; kiya */}
        </h1>
        <p>
          The visionary team behind Late R.K. Vidyamandir&apos;s two decades of
          educational excellence. {/* ' ko &apos; kiya */}
        </p>
      </section>

      {/* 2. Management Leadership Profiles */}
      <section className={styles.profileSection}>
        <div className={styles.profileGrid}>
          {/* Manager / Founder Card */}
          <div className={styles.leaderCard}>
            <div className={styles.imageWrapper}>
              <Image
                src="/director.jpg"
                alt="Manager Sir"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.cardContent}>
              <span className={styles.roleBadge}>Manager &amp; Founder</span>
              <h3>Chand Sir</h3>
              <p
                style={{
                  color: "#64748b",
                  fontSize: "0.9rem",
                  marginTop: "10px",
                }}
              >
                The visionary behind R.K. Vidyamandir, dedicated to bringing
                quality education to Ruhellapur since 2000.
              </p>
            </div>
          </div>

          {/* Principal Card */}
          <div className={styles.leaderCard}>
            <div className={styles.imageWrapper}>
              <Image
                src="/principal.jpg"
                alt="Principal"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.cardContent}>
              <span className={styles.roleBadge}>School Principal</span>
              <h3>Mr. Anshuman Singh</h3>
              <p
                style={{
                  color: "#64748b",
                  fontSize: "0.9rem",
                  marginTop: "10px",
                }}
              >
                Leading our academic and administrative wing with a focus on
                discipline, innovation, and holistic student growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Administrative Wings */}
      <section className={styles.section}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <FaBalanceScale
            style={{ fontSize: "3rem", color: "#f59e0b", marginBottom: "15px" }}
          />
          <h2>Operational Pillars</h2>
          <p>
            The specialized departments that ensure our school runs smoothly
            every day.
          </p>
        </div>

        <div className={styles.wingsGrid}>
          {adminWings.map((wing, idx) => (
            <div key={idx} className={styles.wingCard}>
              <div className={styles.iconBox}>{wing.icon}</div>
              <h3>{wing.name}</h3>
              <p style={{ fontSize: "0.85rem", opacity: 0.8 }}>{wing.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Visionary Commitment (Legacy) */}
      <section className={styles.visionBox}>
        <h2
          style={{ color: "#f59e0b", fontSize: "2.5rem", marginBottom: "20px" }}
        >
          Our Commitment
        </h2>
        <p
          style={{
            fontSize: "1.4rem",
            fontStyle: "italic",
            maxWidth: "800px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}
        >
          &quot;Administration at R.K. Vidyamandir is not just about management;
          it is about serving the future of our nation. We are committed to
          transparency, excellence, and the safety of every child entrusted to
          us.&quot; {/* Quotes ko &quot; kiya */}
        </p>
        <p
          style={{
            marginTop: "30px",
            fontWeight: "bold",
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          &mdash; The Management Board {/* Dash ko &mdash; kiya */}
        </p>
      </section>

      {/* 5. Quick Stats for Trust */}
      <section
        className={styles.section}
        style={{ background: "#fff", paddingTop: "60px" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "30px",
            textAlign: "center",
          }}
        >
          <div>
            <FaHistory
              style={{
                fontSize: "2.5rem",
                color: "#f59e0b",
                marginBottom: "10px",
              }}
            />
            <h3>25 Years</h3>
            <p style={{ color: "#64748b" }}>Legacy of Trust</p>
          </div>
          <div>
            <FaUserTie
              style={{
                fontSize: "2.5rem",
                color: "#f59e0b",
                marginBottom: "10px",
              }}
            />
            <h3>15+ Team</h3>
            <p style={{ color: "#64748b" }}>Dedicated Staff</p>
          </div>
          <div>
            <FaShieldAlt
              style={{
                fontSize: "2.5rem",
                color: "#f59e0b",
                marginBottom: "10px",
              }}
            />
            <h3>Verified</h3>
            <p style={{ color: "#64748b" }}>UDISE Certified</p>
          </div>
        </div>
      </section>
    </main>
  );
}
