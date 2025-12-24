"use client";
import styles from "./page.module.css";
import {
  FaBus,
  FaShieldAlt,
  FaSatellite,
  FaVideo,
  FaUserShield,
  FaMapMarkedAlt,
  FaPhoneVolume,
} from "react-icons/fa";

export default function TransportPage() {
  const busRoutes = [
    {
      area: "Ruhellapur Central",
      stop: "School Main Gate",
      morning: "07:15 AM",
      evening: "02:30 PM",
    },
    {
      area: "Khaga Town",
      stop: "Main Market Square",
      morning: "07:30 AM",
      evening: "02:45 PM",
    },
    {
      area: "Vijay Nagar",
      stop: "Post Office Colony",
      morning: "07:45 AM",
      evening: "03:00 PM",
    },
    {
      area: "Fatehpur Road",
      stop: "Panchayat Bhawan",
      morning: "08:00 AM",
      evening: "03:15 PM",
    },
  ];

  return (
    <main className={styles.main}>
      {/* 1. Hero Section */}
      <section className={styles.hero}>
        <h1>
          Safe <span>Commute</span>
        </h1>
        <p>
          A secure and comfortable transportation network for our students,
          covering all major surrounding areas.
        </p>
      </section>

      {/* 2. Safety Features Grid */}
      <section className={styles.safetySection}>
        <div className={styles.grid4}>
          <div className={styles.safetyCard}>
            <div className={styles.iconBox}>
              <FaSatellite />
            </div>
            <h3>GPS Tracking</h3>
            <p style={{ fontSize: "0.85rem", color: "#64748b" }}>
              Real-time satellite tracking enabled for every vehicle in our
              fleet.
            </p>
          </div>
          <div className={styles.safetyCard}>
            <div className={styles.iconBox}>
              <FaVideo />
            </div>
            <h3>CCTV Security</h3>
            <p style={{ fontSize: "0.85rem", color: "#64748b" }}>
              On-board surveillance cameras for continuous monitoring of student
              safety.
            </p>
          </div>
          <div className={styles.safetyCard}>
            <div className={styles.iconBox}>
              <FaUserShield />
            </div>
            <h3>Trained Staff</h3>
            <p style={{ fontSize: "0.85rem", color: "#64748b" }}>
              Professional drivers and female attendants on every bus route.
            </p>
          </div>
          <div className={styles.safetyCard}>
            <div className={styles.iconBox}>
              <FaShieldAlt />
            </div>
            <h3>Speed Control</h3>
            <p style={{ fontSize: "0.85rem", color: "#64748b" }}>
              Strict speed governors installed to ensure safe driving limits.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Real-time Tracking Concept (Futuristic Feel) */}
      <section className={styles.section}>
        <div className={styles.trackingBox}>
          <div style={{ flex: 1 }}>
            <h2 style={{ color: "#f59e0b", marginBottom: "15px" }}>
              Smart Tracking Portal
            </h2>
            <p style={{ opacity: 0.9, lineHeight: "1.6" }}>
              Parents can now monitor their child's bus location through our
              upcoming Mobile App. Experience a stress-free morning with precise
              arrival alerts.
            </p>
            <div style={{ marginTop: "20px" }}>
              <span className={styles.statusPulse}></span>
              <span
                style={{
                  fontSize: "0.9rem",
                  color: "#22c55e",
                  fontWeight: "bold",
                }}
              >
                SYSTEM ONLINE - 2025
              </span>
            </div>
          </div>
          <div style={{ fontSize: "5rem", color: "#f59e0b", opacity: 0.3 }}>
            <FaMapMarkedAlt />
          </div>
        </div>
      </section>

      {/* 4. Bus Routes Table */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <FaBus style={{ fontSize: "2.5rem", color: "#f59e0b" }} />
          <h2>Network & Schedule</h2>
          <p>Find your nearest pick-up point and timing details.</p>
        </div>

        <div className={styles.routeContainer}>
          <table className={styles.routeTable}>
            <thead>
              <tr>
                <th>Area / Zone</th>
                <th>Major Pick-up Point</th>
                <th>Morning Pickup</th>
                <th>Evening Drop</th>
              </tr>
            </thead>
            <tbody>
              {busRoutes.map((route, i) => (
                <tr key={i}>
                  <td>
                    <b>{route.area}</b>
                  </td>
                  <td>{route.stop}</td>
                  <td style={{ color: "#1e1b4b", fontWeight: "bold" }}>
                    {route.morning}
                  </td>
                  <td>{route.evening}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. Rules & Help Section */}
      <section className={styles.section} style={{ background: "#fff" }}>
        <div className={styles.grid2}>
          <div
            style={{
              padding: "30px",
              background: "#f8fafc",
              borderRadius: "20px",
            }}
          >
            <h3 style={{ color: "#1e1b4b", marginBottom: "15px" }}>
              Transport Rules
            </h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                fontSize: "0.9rem",
                color: "#64748b",
                lineHeight: "2",
              }}
            >
              <li>• Students must reach the stop 5 mins before time.</li>
              <li>• Identity cards are mandatory for bus entry.</li>
              <li>• Discipline must be maintained inside the vehicle.</li>
              <li>• Unauthorized persons are not allowed on the bus.</li>
            </ul>
          </div>
          <div
            style={{
              padding: "30px",
              background: "#1e1b4b",
              color: "white",
              borderRadius: "20px",
              textAlign: "center",
            }}
          >
            <FaPhoneVolume
              style={{
                fontSize: "2.5rem",
                color: "#f59e0b",
                marginBottom: "15px",
              }}
            />
            <h3>Transport Helpline</h3>
            <p style={{ opacity: 0.8, margin: "10px 0" }}>
              For route changes or emergency support:
            </p>
            <h2 style={{ color: "#f59e0b" }}>+91 8009337704</h2>
            <p style={{ fontSize: "0.8rem", marginTop: "10px" }}>
              Manager: Mr. [Name]
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
