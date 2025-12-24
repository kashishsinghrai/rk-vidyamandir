"use client";
import styles from "./page.module.css";
import Image from "next/image";
import {
  FaAtom,
  FaCalculator,
  FaBook,
  FaGlobeAmericas,
  FaLaptopCode,
  FaPalette,
  FaMicroscope,
  FaLanguage,
  FaFileDownload,
  FaLightbulb,
  FaAward,
} from "react-icons/fa";

export default function AcademicsPage() {
  const subjects = [
    { name: "Mathematics", icon: <FaCalculator />, desc: "Logic & Numbers" },
    { name: "Science", icon: <FaAtom />, desc: "Physics & Chemistry" },
    { name: "English", icon: <FaLanguage />, desc: "Literature & Grammar" },
    { name: "Biology", icon: <FaMicroscope />, desc: "Life Sciences" },
    { name: "IT & Coding", icon: <FaLaptopCode />, desc: "Digital Literacy" },
    { name: "Geography", icon: <FaGlobeAmericas />, desc: "Earth & Beyond" },
    { name: "Art & Craft", icon: <FaPalette />, desc: "Creative Expression" },
    { name: "History", icon: <FaBook />, desc: "Our Heritage" },
  ];

  return (
    <main className={styles.main}>
      {/* 1. Hero Section */}
      <section className={styles.hero}>
        <h1>
          Academic <span>Excellence</span>
        </h1>
        <p>
          Providing a foundation of knowledge and skills to nurture future
          innovators and leaders.
        </p>
      </section>

      {/* 2. Educational Levels */}
      <section className={styles.levelSection}>
        <div className={styles.levelGrid}>
          <div className={styles.levelCard}>
            <h3>Primary Wing</h3>
            <p style={{ color: "#f59e0b", fontWeight: "bold" }}>
              Class Nursery to 5th
            </p>
            <p style={{ marginTop: "10px", color: "#64748b" }}>
              Focus on fundamental literacy, numeracy, and sensory development
              through play-way and activity-based learning.
            </p>
          </div>
          <div className={styles.levelCard}>
            <h3>Junior High Wing</h3>
            <p style={{ color: "#f59e0b", fontWeight: "bold" }}>
              Class 6th to 8th
            </p>
            <p style={{ marginTop: "10px", color: "#64748b" }}>
              Transitioning towards conceptual understanding, logical reasoning,
              and specialized subject-based learning.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Subjects Grid */}
      <section className={styles.section}>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "50px",
            fontSize: "2.5rem",
          }}
        >
          Core Subjects
        </h2>
        <div className={styles.subjectGrid}>
          {subjects.map((sub, idx) => (
            <div key={idx} className={styles.subjectCard}>
              <div className={styles.iconBox}>{sub.icon}</div>
              <h4>{sub.name}</h4>
              <p style={{ fontSize: "0.8rem", opacity: 0.7, marginTop: "5px" }}>
                {sub.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Teaching Methodology */}
      <section className={styles.methodology}>
        <div className={styles.methodText}>
          <FaLightbulb
            style={{ fontSize: "3rem", color: "#f59e0b", marginBottom: "20px" }}
          />
          <h2 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
            Modern Teaching Approach
          </h2>
          <p style={{ lineHeight: "1.8", opacity: 0.9 }}>
            At Late R.K. Vidyamandir, we move beyond traditional rote learning.
            Our methodology includes:
          </p>
          <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
            <li style={{ marginBottom: "10px" }}>
              ✅ <b>Project Based Learning:</b> Hands-on experiments and
              real-world projects.
            </li>
            <li style={{ marginBottom: "10px" }}>
              ✅ <b>Digital Integration:</b> Use of smart-boards and e-learning
              resources.
            </li>
            <li style={{ marginBottom: "10px" }}>
              ✅ <b>Personalized Attention:</b> Small batch sizes to ensure no
              child is left behind.
            </li>
          </ul>
        </div>
        <div className={styles.methodImage}>
          <Image
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800"
            alt="Students Learning"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </section>

      {/* 5. Academic Calendar & Resources */}
      <section className={styles.downloadSection}>
        <FaAward
          style={{ fontSize: "3rem", color: "#f59e0b", marginBottom: "20px" }}
        />
        <h2>Resources & Calendars</h2>
        <p>
          Download the latest academic resources and stay updated with school
          schedules.
        </p>
        <div className={styles.downloadGrid}>
          <button className={styles.btnDownload}>
            <FaFileDownload /> Academic Calendar 2025
          </button>
          <button className={styles.btnDownload}>
            <FaFileDownload /> Syllabus (All Classes)
          </button>
          <button className={styles.btnDownload}>
            <FaFileDownload /> Book List 2025-26
          </button>
        </div>
      </section>

      {/* 6. Values Section */}
      <section
        className={styles.section}
        style={{ textAlign: "center", background: "#fff" }}
      >
        <h2 style={{ marginBottom: "40px" }}>Beyond the Classroom</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "30px",
          }}
        >
          <div>
            <h3>Values</h3>
            <p style={{ color: "#64748b" }}>
              Instilling discipline, integrity, and respect in every student.
            </p>
          </div>
          <div>
            <h3>Skills</h3>
            <p style={{ color: "#64748b" }}>
              Developing communication, leadership, and technical skills.
            </p>
          </div>
          <div>
            <h3>Sports</h3>
            <p style={{ color: "#64748b" }}>
              Ensuring physical fitness through regular sports and athletics.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
