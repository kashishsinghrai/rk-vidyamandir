import Image from "next/image";
import styles from "./about.module.css";

// ================= SEO METADATA =================
export const metadata = {
  title: "About Us | Late Ramkali Vidya Mandir History & Founder",
  description:
    "Learn about Late Ramkali Vidya Mandir Junior High School, established in 2000 by Chand Sir. Discover our history, educational philosophy, and legacy of excellence in Khaga, Fatehpur.",
  keywords: [
    "about rk vidya mandir",
    "chand sir school founder",
    "ramkali vidya mandir history",
    "best school in ruhellapur background",
  ],
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  // SEO: Structured Data for About Page (AboutPage Schema)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    mainEntity: {
      "@type": "EducationalOrganization",
      name: "Late Ramkali Vidya Mandir Junior High School",
      foundingDate: "2000",
      founder: {
        "@type": "Person",
        name: "Chand Sir",
      },
      description:
        "Established in 2000 by visionary educator Chand Sir, Late R. K. Vidyamandir is a beacon of learning in Ruhellapur, Khaga, providing quality education and moral values.",
    },
  };

  return (
    <div className={styles.main}>
      {/* Injecting Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Hero Header */}
      <section className={styles.aboutHero}>
        <h1>
          About Late R. K. <span>Vidyamandir</span>
        </h1>
        <p>A Legacy of Learning, Excellence, and Character Since 2000</p>
      </section>

      {/* 2. History & Founder Story */}
      <section className={styles.storySection}>
        <div className={styles.grid2}>
          <div className={styles.infoCard}>
            <h2>Our History</h2>
            <p>
              Late R. K. Vidyamandir was established in <strong>2000</strong> by
              the visionary educator <strong>Chand Sir</strong> with a dream to
              provide quality education to the children of Ruhellapur and
              surrounding areas.
            </p>
            <p>
              For over two decades, our school has been a beacon of learning,
              nurturing thousands of students. Named in honor of Late R. K. (Ram
              Kumar), we carry forward a legacy of dedication to social service
              and academic brilliance.
            </p>
          </div>
          <div className={styles.imagePlaceholder}>
            <div
              style={{
                position: "relative",
                height: "100%",
                minHeight: "400px",
                borderRadius: "30px",
                overflow: "hidden",
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              }}
            >
              <Image
                src="/founder.jpg"
                alt="Chand Sir - Founder of Late Ramkali Vidya Mandir"
                fill
                priority // Load this important image immediately
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover", objectPosition: "top center" }}
              />
            </div>
          </div>
        </div>

        <div
          className={`${styles.grid2} ${styles.reverseGrid}`}
          style={{ marginTop: "80px" }}
        >
          <div className={styles.infoCard}>
            <h2>Our Founder</h2>
            <p>
              Chand Sir, the guiding force behind our institution, has dedicated
              his life to the cause of education. With extensive experience in
              pedagogy, he ensures personalized attention for every student.
            </p>
            <p>
              His vision of combining academic excellence with strong moral
              values continues to inspire our faculty and students every single
              day.
            </p>
          </div>
          <div
            className={styles.infoCard}
            style={{
              background: "rgba(245, 158, 11, 0.08)",
              padding: "40px",
              borderRadius: "20px",
              border: "1px solid rgba(245, 158, 11, 0.2)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h3
              style={{
                color: "#f59e0b",
                marginBottom: "15px",
                fontSize: "1.5rem",
              }}
            >
              &quot;The Teacher of the People&quot;
            </h3>
            <p
              style={{
                fontStyle: "italic",
                color: "#1e1b4b",
                fontSize: "1.1rem",
                lineHeight: "1.8",
              }}
            >
              Chand Sir&apos;s journey started with a small room and a big
              dream. Today, R.K. Vidyamandir stands as a testament to his grit,
              passion, and unwavering belief in the power of education.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Philosophy Section */}
      <section className={styles.philosophyBg}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Educational Philosophy</h2>
          <div className={styles.philosophyGrid}>
            <div className={styles.pCard}>
              <span className={styles.pIcon}>🎓</span>
              <h3>Academic Excellence</h3>
              <p>
                Developing critical thinking, creativity, and problem-solving
                skills that go beyond traditional textbooks.
              </p>
            </div>
            <div className={styles.pCard}>
              <span className={styles.pIcon}>🌟</span>
              <h3>Character Building</h3>
              <p>
                Instilling core values of honesty, respect, and compassion to
                prepare students for life&apos;s real-world challenges.
              </p>
            </div>
            <div className={styles.pCard}>
              <span className={styles.pIcon}>🤝</span>
              <h3>Community Service</h3>
              <p>
                Teaching the importance of giving back to society through
                various social initiatives and awareness programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Achievements Section */}
      <section className={styles.achievementSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Legacy of Success</h2>
          <div className={styles.grid2}>
            <div className={styles.achievementBox}>
              <h3 className={styles.achievementBoxTitle}>Academic Records</h3>
              <ul className={styles.achievementList}>
                <li>Consistent 95%+ pass rates in board examinations</li>
                <li>Multiple district and state-level academic achievers</li>
                <li>
                  Strong alumni network successful in multiple professional
                  fields
                </li>
                <li>Certified excellence from state educational authorities</li>
              </ul>
            </div>
            <div className={styles.achievementBox}>
              <h3 className={styles.achievementBoxTitle}>Beyond Academics</h3>
              <ul className={styles.achievementList}>
                <li>Inter-school sports championship winners</li>
                <li>State-level Cultural program performers</li>
                <li>Active Environment Awareness and Eco-Club wing</li>
                <li>Leading local community service initiatives</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Director's Commitment */}
      <section className={styles.commitmentWrapper}>
        <div className={styles.commitmentBox}>
          <div className={styles.quoteMark}>“</div>
          <blockquote>
            We are committed to providing a nurturing environment where every
            child can discover their true potential and develop into confident,
            responsible, and successful individuals. Our students are
            well-prepared for the challenges of tomorrow.
          </blockquote>
          <span className={styles.author}>— Chand Sir, Founder & Director</span>
        </div>
      </section>
    </div>
  );
}
