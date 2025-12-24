"use client";
import styles from "./page.module.css";
import Image from "next/image";
import { FaFutbol, FaMicroscope, FaPalette, FaMusic } from "react-icons/fa";

export default function StudentLife() {
  const houses = [
    { name: "Agni", color: "#ef4444", motto: "Power & Courage" },
    { name: "Trishul", color: "#3b82f6", motto: "Strength & Unity" },
    { name: "Prithvi", color: "#22c55e", motto: "Peace & Growth" },
    { name: "Akash", color: "#f59e0b", motto: "Vision & Wisdom" },
  ];

  const clubs = [
    {
      name: "Science & Robotics",
      icon: <FaMicroscope />,
      desc: "Exploring the wonders of technology and innovation.",
    },
    {
      name: "Sports Academy",
      icon: <FaFutbol />,
      desc: "Building champions on and off the field.",
    },
    {
      name: "Arts & Creativity",
      icon: <FaPalette />,
      desc: "Expressing imagination through colors and craft.",
    },
    {
      name: "Music & Dance",
      icon: <FaMusic />,
      desc: "Finding the rhythm of life through performance.",
    },
  ];

  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>
          Student <span>Life</span>
        </h1>
        <p>
          Beyond books, we nurture talents. Discover our vibrant campus culture.
        </p>
      </section>

      {/* House System */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.houseGrid}>
          {houses.map((house, i) => (
            <div
              key={i}
              className={styles.houseCard}
              style={{ background: house.color }}
            >
              <h2 style={{ fontSize: "2rem", marginBottom: "5px" }}>
                {house.name}
              </h2>
              <p style={{ fontSize: "0.8rem", opacity: 0.9 }}>HOUSE</p>
              <div
                style={{
                  height: "2px",
                  background: "rgba(255,255,255,0.3)",
                  margin: "15px 0",
                }}
              ></div>
              <p style={{ fontStyle: "italic" }}>{house.motto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Clubs & Activities */}
      <section className={styles.section}>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "50px",
            fontSize: "2.5rem",
            color: "#1e1b4b",
          }}
        >
          Clubs &amp; Societies {/* & badal kar &amp; kiya */}
        </h2>
        <div className={styles.clubGrid}>
          {clubs.map((club, i) => (
            <div key={i} className={styles.clubCard}>
              <div className={styles.clubImg}>
                <Image
                  src={`https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=400`}
                  alt={club.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className={styles.clubContent}>
                <div
                  style={{
                    fontSize: "2.5rem",
                    color: "#f59e0b",
                    marginBottom: "10px",
                  }}
                >
                  {club.icon}
                </div>
                <h3>{club.name}</h3>
                <p
                  style={{
                    color: "#64748b",
                    fontSize: "0.95rem",
                    lineHeight: "1.6",
                  }}
                >
                  {club.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Daily Routine Preview - FIXED QUOTES HERE */}
      <section
        className={styles.section}
        style={{
          background: "#1e1b4b",
          color: "white",
          borderRadius: "50px",
          margin: "0 8% 80px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h2 style={{ color: "#f59e0b", marginBottom: "20px" }}>
            Our Daily Spirit
          </h2>
          <p
            style={{
              fontSize: "1.3rem",
              opacity: 0.9,
              maxWidth: "800px",
              margin: "0 auto",
              fontStyle: "italic",
              lineHeight: "1.8",
            }}
          >
            &quot;From the morning assembly prayers to the evening sports
            practice, every minute at R.K. Vidyamandir is designed to build
            character.&quot;
          </p>
        </div>
      </section>
    </main>
  );
}
