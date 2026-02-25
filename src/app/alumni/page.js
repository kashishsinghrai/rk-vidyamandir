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
      // Using reliable placeholder avatars for a cleaner look
      img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400&auto=format&fit=crop",
    },
    {
      name: "Er. Priya Singh",
      batch: "2012",
      profession: "Software Engineer",
      org: "Google (London)",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
    },
    {
      name: "Capt. Rahul Varma",
      batch: "2008",
      profession: "Squadron Leader",
      org: "Indian Air Force",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    },
    {
      name: "Ms. Neha Gupta",
      batch: "2015",
      profession: "Asst. Commissioner",
      org: "IAS (UP Cadre)",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
    },
  ];

  // SEO: Structured Data for Alumni Page
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Alumni Network | Late Ramkali Vidya Mandir",
    description:
      "Meet the proud alumni of Late R.K. Vidyamandir. From AIIMS doctors to IAS officers and Google engineers, our students are making a global impact.",
    url: "https://www.rkvmjuniorhighschool.dpdns.org/alumni",
    about: {
      "@type": "EducationalOrganization",
      name: "Late Ramkali Vidya Mandir Junior High School",
      alumni: alumniData.map((person) => ({
        "@type": "Person",
        name: person.name,
        jobTitle: person.profession,
        worksFor: {
          "@type": "Organization",
          name: person.org,
        },
      })),
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
          Our Legacy of <span>Success</span>
        </h1>
        <p>
          From the classrooms of Ruhellapur to the leading organizations of the
          world. We celebrate the achievements of our proud alumni.
        </p>
      </section>

      {/* 2. Impact Stats */}
      <section className={styles.statsBar}>
        <div className={styles.statItem}>
          <FaUserGraduate className={styles.statIcon} />
          <h2>5000+</h2>
          <p>Global Alumni</p>
        </div>
        <div className={styles.statItem}>
          <FaAward className={styles.statIcon} />
          <h2>200+</h2>
          <p>Govt. Officers</p>
        </div>
        <div className={styles.statItem}>
          <FaUniversity className={styles.statIcon} />
          <h2>50+</h2>
          <p>IIT/AIIMS Alumni</p>
        </div>
        <div className={styles.statItem}>
          <FaGlobe className={styles.statIcon} />
          <h2>15+</h2>
          <p>Countries Reached</p>
        </div>
      </section>

      {/* 3. Wall of Fame Grid */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Wall of Fame</h2>
          <p>Glimpses of our shining stars making a difference globally.</p>
        </div>

        <div className={styles.alumniGrid}>
          {alumniData.map((alumni, i) => (
            <div key={i} className={styles.alumniCard}>
              <div className={styles.imageWrapper}>
                <Image
                  src={alumni.img}
                  alt={`${alumni.name} - ${alumni.profession}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  style={{ objectFit: "cover", objectPosition: "top" }}
                />
              </div>
              <div className={styles.cardContent}>
                <span className={styles.batch}>BATCH {alumni.batch}</span>
                <h3 className={styles.alumniName}>{alumni.name}</h3>
                <p className={styles.profession}>{alumni.profession}</p>
                <p className={styles.organization}>{alumni.org}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Alumni Registration CTA */}
      <section className={styles.ctaWrapper}>
        <div className={styles.ctaSection}>
          <div className={styles.ctaIcon}>
            <FaIdCard />
          </div>
          <div className={styles.ctaText}>
            <h2>Are you an RKV Alumnus?</h2>
            <p>
              We&apos;d love to stay connected! Join our official Alumni network
              to mentor students, receive newsletters, and attend reunions.
            </p>
          </div>
          <a href="/contact" className={styles.ctaBtn}>
            Register as Alumnus
          </a>
        </div>
      </section>

      {/* 5. Inspirational Quote */}
      <section className={styles.quoteSection}>
        <div className={styles.quoteMark}>&quot;</div>
        <p className={styles.quoteText}>
          Your roots will always be here at Late R.K. Vidyamandir. No matter how
          high you fly, you are the pride of our school.
        </p>
        <p className={styles.quoteAuthor}>&mdash; Chand Sir, Founder</p>
      </section>
    </main>
  );
}
