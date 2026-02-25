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
      `Searching result for Roll No: ${rollNumber} in ${examType}. (Connect your backend here)`,
    );
  };

  const toppers = [
    {
      name: "Rahul Singh",
      class: "Class 10th",
      percentage: "98.4%",
      rank: "Rank 1",
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
    },
    {
      name: "Anjali Devi",
      class: "Class 8th",
      percentage: "97.2%",
      rank: "Rank 1",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    },
    {
      name: "Amit Kumar",
      class: "Class 12th", // Note: The school goes up to 8th/10th based on other pages, update if needed
      percentage: "96.8%",
      rank: "Rank 2",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    },
  ];

  // SEO: Structured Data for the Results/Exams Page
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Examination Results | Late Ramkali Vidya Mandir",
    description:
      "Check your academic examination results online. View term-end results, board exam scores, and celebrate the academic toppers of Late R.K. Vidyamandir.",
    url: "https://www.rkvmjuniorhighschool.dpdns.org/exam-result",
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
          Examination <span>Results</span>
        </h1>
        <p>
          Access your academic performance records securely and celebrate the
          success of our top achievers.
        </p>
      </section>

      {/* 2. Result Search Portal */}
      <section className={styles.searchSection}>
        <div className={styles.searchCard}>
          <h2 className={styles.searchTitle}>Check Your Result</h2>
          <p className={styles.searchSubtitle}>
            Enter your examination details to view or download your marksheet.
          </p>

          <form onSubmit={handleSearch} className={styles.inputGroup}>
            <div className={styles.inputWrapper}>
              <select
                className={styles.selectInput}
                value={examType}
                onChange={(e) => setExamType(e.target.value)}
                required
                aria-label="Select Examination"
              >
                <option value="" disabled>
                  Select Examination
                </option>
                <option value="annual-2025">Annual Examination 2024-25</option>
                <option value="half-yearly">
                  Half Yearly Examination 2024
                </option>
                <option value="board-10">UP Board Class 10th (Mock)</option>
              </select>
            </div>

            <div className={styles.inputWrapper}>
              <input
                className={styles.textInput}
                type="text"
                placeholder="Enter Roll Number (e.g. 102501)"
                value={rollNumber}
                onChange={(e) => setRollNumber(e.target.value)}
                required
                aria-label="Enter Roll Number"
              />
            </div>

            <button type="submit" className={styles.btnSearch}>
              <FaSearch className={styles.searchIcon} /> Find Result
            </button>
          </form>

          <p className={styles.noteText}>
            Note: In case of any technical error or discrepancy, please contact
            the school administration office.
          </p>
        </div>
      </section>

      {/* 3. Academic Toppers */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <FaTrophy className={styles.sectionIcon} />
          <h2>Our Academic Stars</h2>
          <p>
            Recognizing the dedication, hard work, and excellence of our top
            performers.
          </p>
        </div>

        <div className={styles.grid3}>
          {toppers.map((topper, idx) => (
            <div key={idx} className={styles.topperCard}>
              <div className={styles.imageContainer}>
                {/* Changed img to next/image for better performance */}
                <Image
                  src={topper.img}
                  alt={`Topper ${topper.name}`}
                  width={120}
                  height={120}
                  className={styles.topperImg}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <span className={styles.badge}>{topper.rank}</span>
              <h3 className={styles.topperName}>{topper.name}</h3>
              <p className={styles.topperClass}>{topper.class}</p>
              <h2 className={styles.topperScore}>{topper.percentage}</h2>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Recent Results & Downloads */}
      <section className={`${styles.section} ${styles.recentSection}`}>
        <div className={styles.recentContainer}>
          <h2 className={styles.recentTitle}>
            <FaCalendarAlt className={styles.calendarIcon} /> Recent Result
            Updates
          </h2>

          <div className={styles.listContainer}>
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
                <div className={styles.listText}>
                  <h4>{res.title}</h4>
                  <p>Published on: {res.date}</p>
                </div>
                <button className={styles.viewBtn}>
                  <FaFileDownload /> PDF Marks
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Support Message */}
      <section className={styles.supportSection}>
        <h3>Result not found or contains an error?</h3>
        <p>
          Please visit the school administrative office with your original admit
          card during working hours.
        </p>
      </section>
    </main>
  );
}
