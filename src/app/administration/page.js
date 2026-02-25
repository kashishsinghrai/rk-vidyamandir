"use client";
import styles from "./page.module.css";
import Image from "next/image";
import {
  FaUserTie,
  FaBuilding,
  FaBalanceScale,
  FaUsersCog,
  FaFileInvoice,
  FaShieldAlt,
  FaAward,
  FaHistory,
  FaEnvelope, // Added for contact
  FaPhoneAlt, // Added for contact
} from "react-icons/fa";

export default function AdministrationPage() {
  const adminWings = [
    {
      name: "Admission Cell",
      icon: <FaUsersCog />,
      desc: "Managing new enrollments, student records, and parent inquiries.",
      contact: "+91 8009337704",
    },
    {
      name: "Academic Council",
      icon: <FaAward />,
      desc: "Overseeing curriculum design, examinations, and teaching quality.",
      contact: "academic@rkvidyamandir.edu",
    },
    {
      name: "Accounts Dept.",
      icon: <FaFileInvoice />,
      desc: "Handling fee structures, scholarships, salaries, and school finances.",
      contact: "accounts@rkvidyamandir.edu",
    },
    {
      name: "Operations & Safety",
      icon: <FaBuilding />,
      desc: "Ensuring campus safety, transport logistics, and building maintenance.",
      contact: "admin@rkvidyamandir.edu",
    },
  ];

  // SEO: Structured Data for the Organization/Leadership
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Administration & Leadership | Late Ramkali Vidya Mandir",
    description:
      "Meet the visionary leadership and management team of Late R.K. Vidyamandir. Learn about our administrative wings and commitment to excellence.",
    url: "https://www.rkvmjuniorhighschool.dpdns.org/administration",
    mainEntity: {
      "@type": "Organization",
      name: "Late Ramkali Vidya Mandir Management",
      founder: {
        "@type": "Person",
        name: "Chand Sir",
        jobTitle: "Manager & Founder",
      },
      employee: [
        {
          "@type": "Person",
          name: "Mr. Anshuman Singh",
          jobTitle: "School Principal",
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
          Leadership &amp; <span>Governance</span>
        </h1>
        <p>
          The visionary team behind Late R.K. Vidyamandir&apos;s two decades of
          educational excellence, ensuring transparency, safety, and growth.
        </p>
      </section>

      {/* 2. Management Leadership Profiles */}
      <section className={styles.profileSection}>
        <div className={styles.profileGrid}>
          {/* Manager / Founder Card */}
          <article className={styles.leaderCard}>
            <div className={styles.imageWrapper}>
              <Image
                src="/director.jpg"
                alt="Chand Sir - Founder & Manager of Late R.K. Vidyamandir"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover", objectPosition: "top center" }}
              />
            </div>
            <div className={styles.cardContent}>
              <span className={styles.roleBadge}>Manager &amp; Founder</span>
              <h2 className={styles.leaderName}>Chand Sir</h2>
              <p className={styles.leaderDesc}>
                The visionary pillar behind R.K. Vidyamandir, dedicated to
                bringing quality and accessible education to the children of
                Ruhellapur since 2000. His guidance forms the core of our
                school&apos;s values.
              </p>
            </div>
          </article>

          {/* Principal Card */}
          <article className={styles.leaderCard}>
            <div className={styles.imageWrapper}>
              <Image
                src="/principal.jpg"
                alt="Mr. Anshuman Singh - Principal of Late R.K. Vidyamandir"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover", objectPosition: "top center" }}
              />
            </div>
            <div className={styles.cardContent}>
              <span className={styles.roleBadge}>School Principal</span>
              <h2 className={styles.leaderName}>Mr. Anshuman Singh</h2>
              <p className={styles.leaderDesc}>
                Leading our academic and administrative wings with a strong
                focus on discipline, modern pedagogical innovations, and the
                holistic growth of every student entrusted to our care.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* 3. Administrative Wings (Departments) */}
      <section className={styles.section} style={{ background: "#f8fafc" }}>
        <div className={styles.sectionHeader}>
          <FaBalanceScale className={styles.sectionIcon} />
          <h2>Operational Pillars</h2>
          <p className={styles.sectionSubText}>
            The specialized departments that ensure our institution runs
            smoothly, efficiently, and safely every single day.
          </p>
        </div>

        <div className={styles.wingsGrid}>
          {adminWings.map((wing, idx) => (
            <div key={idx} className={styles.wingCard}>
              <div className={styles.iconBox}>{wing.icon}</div>
              <h3>{wing.name}</h3>
              <p className={styles.wingDesc}>{wing.desc}</p>

              {/* Added Contact Info for each department */}
              <div className={styles.wingContact}>
                {wing.contact.includes("@") ? (
                  <p>
                    <FaEnvelope className={styles.smallIcon} /> {wing.contact}
                  </p>
                ) : (
                  <p>
                    <FaPhoneAlt className={styles.smallIcon} /> {wing.contact}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Visionary Commitment (Legacy) */}
      <section className={styles.visionSection}>
        <div className={styles.visionBox}>
          <h2 className={styles.visionTitle}>Our Administrative Commitment</h2>
          <blockquote className={styles.visionQuote}>
            &quot;Administration at R.K. Vidyamandir is not merely about
            management; it is about serving the future of our nation. We stand
            deeply committed to transparency, academic excellence, and providing
            an environment where every child feels safe and valued.&quot;
          </blockquote>
          <p className={styles.visionSign}>
            &mdash; The Management Board, Late R.K. Vidyamandir
          </p>
        </div>
      </section>

      {/* 5. Quick Stats for Trust */}
      <section className={styles.statsSection}>
        <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <FaHistory className={styles.statIcon} />
            <h3>25+ Years</h3>
            <p>Legacy of Educational Trust</p>
          </div>
          <div className={styles.statItem}>
            <FaUserTie className={styles.statIcon} />
            <h3>50+ Team</h3>
            <p>Dedicated Teaching & Admin Staff</p>
          </div>
          <div className={styles.statItem}>
            <FaShieldAlt className={styles.statIcon} />
            <h3>Verified</h3>
            <p>UP Board & UDISE Certified</p>
          </div>
        </div>
      </section>
    </main>
  );
}
