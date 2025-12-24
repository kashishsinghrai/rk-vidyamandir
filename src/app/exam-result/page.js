"use client";
import { useState } from "react";
import styles from "./page.module.css";
import {
  FaSearch,
  FaFileDownload,
  FaTrophy,
  FaCalendarAlt,
} from "react-icons/fa";
import Image from "next/image";

export default function ResultPage() {
  const [rollNumber, setRollNumber] = useState("");
  const [examType, setExamType] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    alert(
      `Searching result for Roll No: ${rollNumber} in ${examType}. (Connect your backend here)`
    );
  };

  const toppers = [
    {
      name: "Rahul Singh",
      class: "Class 10th",
      percentage: "98.4%",
      rank: "Rank 1",
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200",
    },
    {
      name: "Anjali Devi",
      class: "Class 8th",
      percentage: "97.2%",
      rank: "Rank 1",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200",
    },
    {
      name: "Amit Kumar",
      class: "Class 12th",
      percentage: "96.8%",
      rank: "Rank 2",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
    },
  ];

  return (
    <main className={styles.main}>
      {/* 1. Hero Section */}
      <section className={styles.hero}>
        <h1>
          Examination <span>Results</span>
        </h1>
        <p>
          Access your academic performance records and celebrate our top
          achievers.
        </p>
      </section>

      {/* 2. Result Search Portal */}
      <section className={styles.searchSection}>
        <div className={styles.searchCard}>
          <h3 style={{ color: "#1e1b4b" }}>Check Your Result</h3>
          <p style={{ fontSize: "0.9rem", color: "#64748b" }}>
            Enter your details to view/download your marksheet.
          </p>

          <form onSubmit={handleSearch} className={styles.inputGroup}>
            <select
              value={examType}
              onChange={(e) => setExamType(e.target.value)}
              required
            >
              <option value="">Select Examination</option>
              <option value="annual-2025">Annual Examination 2024-25</option>
              <option value="half-yearly">Half Yearly Examination 2024</option>
              <option value="board-10">UP Board Class 10th (Mock)</option>
            </select>

            <input
              type="text"
              placeholder="Enter Roll Number (e.g. 102501)"
              value={rollNumber}
              onChange={(e) => setRollNumber(e.target.value)}
              required
            />

            <button type="submit" className={styles.btnSearch}>
              <FaSearch style={{ marginRight: "10px" }} /> Find Result
            </button>
          </form>
          <p style={{ fontSize: "0.8rem", opacity: 0.6 }}>
            Note: In case of any technical error, contact school office.
          </p>
        </div>
      </section>

      {/* 3. Academic Toppers (Trust Factor) */}
      <section className={styles.section}>
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <FaTrophy
            style={{
              fontSize: "2.5rem",
              color: "#f59e0b",
              marginBottom: "15px",
            }}
          />
          <h2>Our Academic Stars</h2>
          <p>Recognizing the dedication and hard work of our top performers.</p>
        </div>

        <div className={styles.grid3}>
          {toppers.map((topper, idx) => (
            <div key={idx} className={styles.topperCard}>
              <img
                src={topper.img}
                alt={topper.name}
                className={styles.topperImg}
              />
              <span className={styles.badge}>{topper.rank}</span>
              <h3 style={{ marginTop: "15px" }}>{topper.name}</h3>
              <p style={{ color: "#64748b" }}>{topper.class}</p>
              <h2 style={{ color: "#f59e0b", margin: "10px 0" }}>
                {topper.percentage}
              </h2>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Recent Results & Downloads */}
      <section className={styles.section} style={{ background: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ marginBottom: "40px" }}>
            <FaCalendarAlt style={{ color: "#f59e0b" }} /> Recent Result Updates
          </h2>

          {[
            {
              title: "Class 8th Annual Exam Result - 2024",
              date: "March 25, 2025",
            },
            {
              title: "Class 5th Annual Exam Result - 2024",
              date: "March 22, 2025",
            },
            {
              title: "Scholarship Test Merit List - 2025",
              date: "Jan 10, 2025",
            },
          ].map((res, i) => (
            <div key={i} className={styles.listCard}>
              <div>
                <h4 style={{ color: "#1e1b4b" }}>{res.title}</h4>
                <p style={{ fontSize: "0.8rem", color: "#64748b" }}>
                  Published on: {res.date}
                </p>
              </div>
              <div className={styles.viewBtn}>
                <FaFileDownload /> PDF Marks
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Support Message */}
      <section
        style={{
          padding: "60px 8%",
          textAlign: "center",
          background: "#f59e0b",
          color: "#1e1b4b",
        }}
      >
        <h3>Result not found or contains error?</h3>
        <p style={{ marginTop: "10px" }}>
          Please visit the school administrative office with your admit card.
        </p>
      </section>
    </main>
  );
}
