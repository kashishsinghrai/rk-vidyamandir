"use client";
import styles from "./page.module.css";
import Image from "next/image";
import {
  FaBuilding,
  FaTree,
  FaFutbol,
  FaUsers,
  FaGlassWhiskey,
  FaBolt,
  FaUserShield,
  FaSun,
} from "react-icons/fa";

export default function CampusLife() {
  const schoolHighlights = [
    {
      title: "Iconic Two-Story Building",
      desc: "Our grand school building is designed with multiple spacious floors, wide corridors, and easy access, providing a secure and organized environment for all classes.",
      image: "/school-building.jpg", // Photos mein jo badi yellow building hai
      icon: <FaBuilding />,
    },
    {
      title: "Expansive Playground",
      desc: "A massive open ground as seen in our campus, perfect for morning assemblies, annual sports events, and daily outdoor activities for physical growth.",
      image: "/sport-club.jpg", // Photos mein jo bada khula maidan hai
      icon: <FaFutbol />,
    },
    {
      title: "Nature-Rich Environment",
      desc: "Located in a peaceful rural setting with plenty of fresh air and greenery, away from the dust and noise of city traffic.",
      image: "/campus-view.jpg", // Rural/Greenery view
      icon: <FaTree />,
    },
    {
      title: "Spacious Classrooms",
      desc: "Our classrooms are built with high ceilings and large windows to ensure natural ventilation and a bright atmosphere for learning.",
      image: "/classroom.jpg",
      icon: <FaUsers />,
    },
  ];

  return (
    <main className={styles.main}>
      {/* 1. Hero Section */}
      <section className={styles.hero}>
        <h1>
          Experience <span>Our Campus</span>
        </h1>
        <p>
          Take a look at the infrastructure and peaceful environment of Late
          R.K. Vidyamandir, Ruhellapur.
        </p>
      </section>

      {/* 2. Facility Cards - Real Descriptions */}
      <section className={styles.facilitySection}>
        <div className={styles.facilityGrid}>
          {schoolHighlights.map((item, i) => (
            <div key={i} className={styles.facilityCard}>
              <div className={styles.imgWrapper}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className={styles.cardBody}>
                <div
                  style={{
                    color: "#f59e0b",
                    fontSize: "1.5rem",
                    marginBottom: "10px",
                  }}
                >
                  {item.icon}
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Infrastructure Statistics */}
      <section className={styles.highlightSection}>
        <h2>
          Campus <span>At A Glance</span>
        </h2>
        <div className={styles.statGrid}>
          <div className={styles.statCard}>
            <h2>20+</h2>
            <p>Total Rooms</p>
          </div>
          <div className={styles.statCard}>
            <h2>1</h2>
            <p>Grand Playground</p>
          </div>
          <div className={styles.statCard}>
            <h2>2</h2>
            <p>Floors</p>
          </div>
          <div className={styles.statCard}>
            <h2>100%</h2>
            <p>Safe Environment</p>
          </div>
        </div>
      </section>

      {/* 4. Essential Services */}
      <section style={{ padding: "80px 8%", background: "#f8fafc" }}>
        <h2 style={{ textAlign: "center", marginBottom: "50px" }}>
          Essential <span>Daily Services</span>
        </h2>
        <div className={styles.facilityGrid}>
          {[
            {
              icon: <FaGlassWhiskey />,
              title: "Pure Drinking Water",
              text: "Purified RO water facility is provided to ensure the health of our students.",
            },
            {
              icon: <FaBolt />,
              title: "Full Power Backup",
              text: "Inverter and generator support so that learning never stops during power outages.",
            },
            {
              icon: <FaUserShield />,
              title: "Dedicated Security",
              text: "Safe entry and exit points with continuous supervision by our disciplined staff.",
            },
            {
              icon: <FaSun />,
              title: "Open Assembly Area",
              text: "A spacious courtyard for daily prayers, yoga, and cultural performances.",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              style={{
                background: "#fff",
                padding: "30px",
                borderRadius: "20px",
                border: "1px solid #e2e8f0",
              }}
            >
              <div
                style={{
                  color: "#f59e0b",
                  fontSize: "2rem",
                  marginBottom: "15px",
                }}
              >
                {service.icon}
              </div>
              <h4>{service.title}</h4>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#64748b",
                  marginTop: "10px",
                }}
              >
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Direct Visit CTA */}
      <section style={{ padding: "80px 8%", textAlign: "center" }}>
        <div
          style={{
            background: "#1e1b4b",
            color: "white",
            padding: "60px",
            borderRadius: "40px",
          }}
        >
          <h2 style={{ color: "#f59e0b" }}>Visit Our Campus Today</h2>
          <p
            style={{
              margin: "20px auto 35px",
              maxWidth: "600px",
              opacity: 0.9,
            }}
          >
            Nothing beats a personal visit. We invite you to Ruhellapur to see
            our grand building and meet our dedicated faculty.
          </p>
          <a
            href="https://maps.app.goo.gl/6jMwe3Np8MmamvoN8"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#f59e0b",
              color: "#1e1b4b",
              padding: "15px 40px",
              borderRadius: "12px",
              textDecoration: "none",
              fontWeight: "700",
              display: "inline-block",
            }}
          >
            Get Location on Maps
          </a>
        </div>
      </section>
    </main>
  );
}
