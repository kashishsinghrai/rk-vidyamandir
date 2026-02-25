"use client";
import styles from "./page.module.css";
import Image from "next/image";
import { FaFutbol, FaMicroscope, FaPalette, FaMusic } from "react-icons/fa";

export default function StudentLife() {
  // Using Local Authentic Images Only
  const houses = [
    {
      name: "Agni",
      color: "#ef4444",
      motto: "Power & Courage",
      image: "/house-agni.png",
    },
    {
      name: "Trishul",
      color: "#3b82f6",
      motto: "Strength & Unity",
      image: "/house-trishul.png",
    },
    {
      name: "Prithvi",
      color: "#22c55e",
      motto: "Peace & Growth",
      image: "/house-prithvi.png",
    },
    {
      name: "Akash",
      color: "#f59e0b",
      motto: "Vision & Wisdom",
      image: "/house-akash.png",
    },
  ];

  const clubs = [
    {
      name: "Science & Mathematics",
      image: "/science-club.png",
      icon: <FaMicroscope />,
      desc: "Exploring the wonders of technology, logic, and scientific innovation.",
    },
    {
      name: "Sports Academy",
      image: "/sport-club.jpg",
      icon: <FaFutbol />,
      desc: "Building discipline, teamwork, and champions on and off the field.",
    },
    {
      name: "Arts & Creativity",
      image: "/arts-club.png",
      icon: <FaPalette />,
      desc: "Expressing imagination through vibrant colors, crafts, and visual arts.",
    },
    {
      name: "Music & Dance",
      image: "/music-club.jpg",
      icon: <FaMusic />,
      desc: "Finding the rhythm of life through cultural expressions and performance.",
    },
  ];

  // SEO: Structured Data for Extracurricular Activities
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Student Life & Clubs | Late Ramkali Vidya Mandir",
    description:
      "Discover the vibrant campus culture at Late R.K. Vidyamandir. Explore our House system (Agni, Trishul, Prithvi, Akash) and various student clubs like Science and Sports.",
    url: "https://www.rkvmjuniorhighschool.dpdns.org/student-life",
  };

  return (
    <main className={styles.main}>
      {/* Injecting Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>
          Student <span>Life</span>
        </h1>
        <p>
          Beyond books, we nurture character and talents. Discover our vibrant
          and energetic campus culture.
        </p>
      </section>

      {/* House System */}
      <section className={`${styles.section} ${styles.houseSection}`}>
        <div className={styles.sectionHeader}>
          <h2>The Four Pillars</h2>
          <p>Our House System promotes healthy competition and unity.</p>
        </div>

        <div className={styles.houseGrid}>
          {houses.map((house, i) => (
            <div
              key={i}
              className={styles.houseCard}
              style={{ "--houseColor": house.color }} // Custom CSS variable for dynamic colors
            >
              <div className={styles.houseImgWrapper}>
                <Image
                  src={house.image}
                  alt={`${house.name} House at Late R.K. Vidyamandir`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  style={{ objectFit: "cover" }}
                />
                <div
                  className={styles.houseOverlay}
                  style={{ background: house.color }}
                ></div>
              </div>
              <div
                className={styles.houseContent}
                style={{ background: house.color }}
              >
                <h2 className={styles.houseName}>{house.name}</h2>
                <p className={styles.houseLabel}>HOUSE</p>
                <div className={styles.houseDivider}></div>
                <p className={styles.houseMotto}>{house.motto}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Clubs & Activities */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Clubs &amp; Societies</h2>
          <p>
            Platforms for students to discover and hone their unique skills.
          </p>
        </div>

        <div className={styles.clubGrid}>
          {clubs.map((club, i) => (
            <div key={i} className={styles.clubCard}>
              <div className={styles.clubImg}>
                <Image
                  src={club.image}
                  alt={`${club.name} at Late R.K. Vidyamandir`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className={styles.clubContent}>
                <div className={styles.clubIcon}>{club.icon}</div>
                <h3>{club.name}</h3>
                <p className={styles.clubDesc}>{club.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Daily Routine Preview / Spirit */}
      <section className={styles.spiritSection}>
        <div className={styles.spiritBox}>
          <h2 className={styles.spiritTitle}>Our Daily Spirit</h2>
          <p className={styles.spiritQuote}>
            &quot;From the morning assembly prayers to the evening sports
            practice, every single minute at R.K. Vidyamandir is carefully
            designed to build character, resilience, and lifelong
            friendships.&quot;
          </p>
        </div>
      </section>
    </main>
  );
}
