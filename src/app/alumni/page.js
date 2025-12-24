"use client";
import styles from "./page.module.css";
import Image from "next/image";
import {
  FaUserGraduate,
  FaGlobe,
  FaAward,
  FaUniversity,
  FaIdCard,
} from "react-icons/fa";

export default function AlumniPage() {
  const alumniData = [
    {
      name: "Dr. Sameer Khan",
      batch: "2010",
      profession: "Senior Surgeon",
      org: "AIIMS Delhi",
      img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400",
    },
    {
      name: "Er. Priya Singh",
      batch: "2012",
      profession: "Software Engineer",
      org: "Google (London)",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400",
    },
    {
      name: "Capt. Rahul Varma",
      batch: "2008",
      profession: "Squadron Leader",
      org: "Indian Air Force",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400",
    },
    {
      name: "Ms. Neha Gupta",
      batch: "2015",
      profession: "Asst. Commissioner",
      org: "IAS (UP Cadre)",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400",
    },
  ];

  return (
    <main className={styles.main}>
      {/* 1. Hero Section */}
      <section className={styles.hero}>
        <h1>
          Our Legacy of <span>Success</span>
        </h1>
        <p>
          From the classrooms of Ruhellapur to the leading organizations of the
          world.
        </p>
      </section>

      {/* 2. Impact Stats */}
      <section className={styles.statsBar}>
        <div className={styles.statItem}>
          <FaUserGraduate style={{ fontSize: "2rem", color: "#f59e0b" }} />
          <h2>5000+</h2>
          <p>Global Alumni</p>
        </div>
        <div className={styles.statItem}>
          <FaAward style={{ fontSize: "2rem", color: "#f59e0b" }} />
          <h2>200+</h2>
          <p>Govt. Officers</p>
        </div>
        <div className={styles.statItem}>
          <FaUniversity style={{ fontSize: "2rem", color: "#f59e0b" }} />
          <h2>50+</h2>
          <p>IIT/AIIMS Alumni</p>
        </div>
        <div className={styles.statItem}>
          <FaGlobe style={{ fontSize: "2rem", color: "#f59e0b" }} />
          <h2>15+</h2>
          <p>Countries Reached</p>
        </div>
      </section>

      {/* 3. Wall of Fame Grid */}
      <section className={styles.section}>
        <h2 style={{ textAlign: "center", marginBottom: "50px" }}>
          Wall of Fame
        </h2>
        <div className={styles.alumniGrid}>
          {alumniData.map((alumni, i) => (
            <div key={i} className={styles.alumniCard}>
              <div className={styles.imageWrapper}>
                <Image
                  src={alumni.img}
                  alt={alumni.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className={styles.cardContent}>
                <span className={styles.batch}>BATCH {alumni.batch}</span>
                <h3 style={{ color: "#1e1b4b" }}>{alumni.name}</h3>
                <p className={styles.profession}>{alumni.profession}</p>
                <p style={{ fontSize: "0.85rem", color: "#64748b" }}>
                  {alumni.org}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Alumni Registration CTA */}
      <section className={styles.ctaSection}>
        <div style={{ fontSize: "4rem", color: "#f59e0b" }}>
          <FaIdCard />
        </div>
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: "2rem", color: "#f59e0b" }}>
            Are you an RKV Alumnus?
          </h2>
          <p style={{ marginTop: "10px", opacity: 0.9 }}>
            We'd love to stay connected! Join our official Alumni network to
            mentor students, receive newsletters, and attend reunions.
          </p>
        </div>
        <a href="/contact" className={styles.ctaBtn}>
          Register as Alumnus
        </a>
      </section>

      {/* 5. Inspirational Quote */}
      <section
        style={{ padding: "60px 8%", textAlign: "center", background: "#fff" }}
      >
        <p
          style={{
            fontSize: "1.6rem",
            fontStyle: "italic",
            color: "#1e1b4b",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          "Your roots will always be here at Late R.K. Vidyamandir. No matter
          how high you fly, you are the pride of our school."
        </p>
        <p style={{ marginTop: "20px", fontWeight: "bold", color: "#f59e0b" }}>
          — Chand Sir, Founder
        </p>
      </section>
    </main>
  );
}
