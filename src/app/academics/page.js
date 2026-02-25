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
    // { name: "IT & Coding", icon: <FaLaptopCode />, desc: "Digital Literacy" },
    { name: "Geography", icon: <FaGlobeAmericas />, desc: "Earth & Beyond" },
    {
      name: "Art & Craft",
      icon: <FaPalette />,
      desc: "Creative Expression",
    },
    { name: "History", icon: <FaBook />, desc: "Our Heritage" },
  ];

  // SEO: Structured Data for Educational Courses/Academics
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Academics & Curriculum | Late Ramkali Vidya Mandir",
    description:
      "Explore our academic programs from Nursery to Class 8. We offer a modern teaching methodology focusing on core subjects, values, and holistic development.",
    url: "https://www.rkvmjuniorhighschool.dpdns.org/academics",
    mainEntity: {
      "@type": "EducationalOrganization",
      name: "Late Ramkali Vidya Mandir Junior High School",
      makesOffer: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "EducationalOccupationalProgram",
            name: "Primary Wing (Nursery to 5th)",
            educationalCredentialAwarded: "Primary Education",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "EducationalOccupationalProgram",
            name: "Junior High Wing (6th to 8th)",
            educationalCredentialAwarded: "Junior High Education",
          },
        },
      ],
    },
  };

  return (
    <main className={styles.main}>
      {/* Injecting Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Hero Section */}
      <section className={styles.hero}>
        <h1>
          Academic <span>Excellence</span>
        </h1>
        <p>
          Providing a solid foundation of knowledge and skills to nurture future
          innovators and leaders at Late R.K. Vidyamandir.
        </p>
      </section>

      {/* 2. Educational Levels */}
      <section className={styles.levelSection}>
        <div className={styles.levelGrid}>
          <div className={styles.levelCard}>
            <h3>Primary Wing</h3>
            <p
              style={{
                color: "#f59e0b",
                fontWeight: "bold",
                fontSize: "1.1rem",
              }}
            >
              Class Nursery to 5th
            </p>
            <p
              style={{ marginTop: "15px", color: "#64748b", lineHeight: "1.6" }}
            >
              Focus on fundamental literacy, numeracy, and sensory development
              through play-way and activity-based learning. We build strong
              roots for a lifetime of learning.
            </p>
          </div>
          <div className={styles.levelCard}>
            <h3>Junior High Wing</h3>
            <p
              style={{
                color: "#f59e0b",
                fontWeight: "bold",
                fontSize: "1.1rem",
              }}
            >
              Class 6th to 8th
            </p>
            <p
              style={{ marginTop: "15px", color: "#64748b", lineHeight: "1.6" }}
            >
              Transitioning towards conceptual understanding, logical reasoning,
              and specialized subject-based learning. Preparing students for
              higher education challenges.
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
            color: "#1e1b4b",
          }}
        >
          Core Subjects Curriculum
        </h2>
        <div className={styles.subjectGrid}>
          {subjects.map((sub, idx) => (
            <div key={idx} className={styles.subjectCard}>
              <div className={styles.iconBox}>{sub.icon}</div>
              <h4
                style={{
                  color: "#1e1b4b",
                  fontSize: "1.2rem",
                  marginBottom: "5px",
                }}
              >
                {sub.name}
              </h4>
              <p style={{ fontSize: "0.9rem", color: "#64748b" }}>{sub.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Teaching Methodology */}
      <section className={styles.methodology}>
        <div className={styles.methodText}>
          <FaLightbulb
            style={{
              fontSize: "3.5rem",
              color: "#f59e0b",
              marginBottom: "20px",
            }}
          />
          <h2
            style={{ fontSize: "2.5rem", marginBottom: "20px", color: "white" }}
          >
            Modern Teaching Approach
          </h2>
          <p
            style={{ lineHeight: "1.8", color: "#cbd5e1", fontSize: "1.1rem" }}
          >
            At Late R.K. Vidyamandir, we move beyond traditional rote learning.
            Our methodology is designed to create active learners:
          </p>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              marginTop: "25px",
              color: "white",
            }}
          >
            <li
              style={{
                marginBottom: "15px",
                display: "flex",
                alignItems: "flex-start",
                gap: "10px",
              }}
            >
              <span style={{ color: "#22c55e", fontSize: "1.2rem" }}>✓</span>
              <span>
                <b>Project Based Learning:</b> Hands-on experiments and
                real-world projects to build practical skills.
              </span>
            </li>
            <li
              style={{
                marginBottom: "15px",
                display: "flex",
                alignItems: "flex-start",
                gap: "10px",
              }}
            >
              <span style={{ color: "#22c55e", fontSize: "1.2rem" }}>✓</span>
              <span>
                <b>Digital Integration:</b> Utilizing modern technology for
                research-based and interactive learning.
              </span>
            </li>
            <li
              style={{
                marginBottom: "15px",
                display: "flex",
                alignItems: "flex-start",
                gap: "10px",
              }}
            >
              <span style={{ color: "#22c55e", fontSize: "1.2rem" }}>✓</span>
              <span>
                <b>Personalized Attention:</b> Maintained student-teacher ratios
                to ensure no child is left behind.
              </span>
            </li>
          </ul>
        </div>
        <div className={styles.methodImage}>
          <Image
            src="/academic.png"
            alt="Students engaged in modern learning at Late R.K. Vidyamandir"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      </section>

      {/* 5. Academic Calendar & Resources */}
      <section className={styles.downloadSection}>
        <FaAward
          style={{ fontSize: "3rem", color: "#f59e0b", marginBottom: "20px" }}
        />
        <h2
          style={{ color: "#1e1b4b", fontSize: "2.5rem", marginBottom: "15px" }}
        >
          Resources & Calendars
        </h2>
        <p
          style={{ color: "#64748b", marginBottom: "40px", fontSize: "1.1rem" }}
        >
          Download the latest academic resources, syllabus, and stay updated
          with school schedules.
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
        style={{
          textAlign: "center",
          background: "#f8fafc",
          borderTop: "1px solid #e2e8f0",
        }}
      >
        <h2
          style={{ marginBottom: "50px", color: "#1e1b4b", fontSize: "2.2rem" }}
        >
          Beyond the Classroom
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              background: "white",
              padding: "40px 30px",
              borderRadius: "20px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
            }}
          >
            <h3
              style={{
                color: "#f59e0b",
                marginBottom: "15px",
                fontSize: "1.5rem",
              }}
            >
              Moral Values
            </h3>
            <p style={{ color: "#64748b", lineHeight: "1.6" }}>
              Instilling discipline, integrity, and respect in every student to
              build strong character.
            </p>
          </div>
          <div
            style={{
              background: "white",
              padding: "40px 30px",
              borderRadius: "20px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
            }}
          >
            <h3
              style={{
                color: "#f59e0b",
                marginBottom: "15px",
                fontSize: "1.5rem",
              }}
            >
              Life Skills
            </h3>
            <p style={{ color: "#64748b", lineHeight: "1.6" }}>
              Developing effective communication, leadership qualities, and
              critical thinking abilities.
            </p>
          </div>
          <div
            style={{
              background: "white",
              padding: "40px 30px",
              borderRadius: "20px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
            }}
          >
            <h3
              style={{
                color: "#f59e0b",
                marginBottom: "15px",
                fontSize: "1.5rem",
              }}
            >
              Sports & Fitness
            </h3>
            <p style={{ color: "#64748b", lineHeight: "1.6" }}>
              Ensuring physical fitness and teamwork through regular sports and
              athletic activities.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
