// src/app/about/page.js
import Image from "next/image";
import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <div className={styles.main}>
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
            <h3>Our History</h3>
            <p>
              Late R. K. Vidyamandir was established in 2000 by the visionary
              educator <strong>Chand Sir</strong> with a dream to provide
              quality education to the children of Ruhellapur and surrounding
              areas.
            </p>
            <p>
              For over two decades, our school has been a beacon of learning,
              nurturing thousands of students. Named in honor of Late R. K. (Ram
              Kumar), we carry forward a legacy of dedication to social service
              and academic brilliance.
            </p>
          </div>
          <div className={styles.imagePlaceholder}>
            {/* Founder Image can go here */}
            <div
              style={{
                position: "relative",
                height: "400px",
                borderRadius: "30px",
                overflow: "hidden",
              }}
            >
              <Image
                src="/teacher1.jpg"
                alt="Chand Sir"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>

        <div
          className={styles.grid2}
          style={{ marginTop: "80px", direction: "rtl" }}
        >
          <div className={styles.infoCard} style={{ direction: "ltr" }}>
            <h3>Our Founder</h3>
            <p>
              Chand Sir, the guiding force behind our institution, has dedicated
              his life to the cause of education. With extensive experience in
              pedagogy, he ensures personalized attention for every student.
            </p>
            <p>
              His vision of combining academic excellence with moral values
              continues to inspire our faculty and students every single day.
            </p>
          </div>
          <div
            className={styles.infoCard}
            style={{
              background: "#f59e0b10",
              padding: "40px",
              borderRadius: "20px",
            }}
          >
            <h4 style={{ color: "#f59e0b", marginBottom: "10px" }}>
              "The Teacher of the People"
            </h4>
            <p style={{ fontStyle: "italic", color: "#1e1b4b" }}>
              Chand Sir's journey started with a small room and a big dream.
              Today, R.K. Vidyamandir stands as a testament to his grit and
              passion.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Philosophy Section */}
      <section className={styles.philosophyBg}>
        <h2 className={styles.sectionTitle}>Our Educational Philosophy</h2>
        <div className={styles.philosophyGrid}>
          <div className={styles.pCard}>
            <span className={styles.pIcon}>🎓</span>
            <h3>Academic Excellence</h3>
            <p>
              Developing critical thinking, creativity, and problem-solving
              skills that go beyond textbooks.
            </p>
          </div>
          <div className={styles.pCard}>
            <span className={styles.pIcon}>🌟</span>
            <h3>Character Building</h3>
            <p>
              Instilling values of honesty, respect, and compassion to prepare
              students for life's challenges.
            </p>
          </div>
          <div className={styles.pCard}>
            <span className={styles.pIcon}>🤝</span>
            <h3>Community Service</h3>
            <p>
              Teaching the importance of giving back through various social
              initiatives and programs.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Achievements Section */}
      <section className={styles.achievementSection}>
        <h2 className={styles.sectionTitle}>Legacy of Success</h2>
        <div className={styles.grid2}>
          <div className={styles.infoCard}>
            <h4
              style={{
                color: "#1e1b4b",
                fontSize: "1.5rem",
                marginBottom: "20px",
              }}
            >
              Academic Records
            </h4>
            <ul className={styles.achievementList}>
              <li>Consistent 95%+ pass rates in board examinations</li>
              <li>Multiple district and state-level academic achievers</li>
              <li>Strong alumni network in engineering and medicine</li>
              <li>Certified excellence from educational authorities</li>
            </ul>
          </div>
          <div className={styles.infoCard}>
            <h4
              style={{
                color: "#1e1b4b",
                fontSize: "1.5rem",
                marginBottom: "20px",
              }}
            >
              Beyond Academics
            </h4>
            <ul className={styles.achievementList}>
              <li>Inter-school sports championship winners</li>
              <li>State-level Cultural program performers</li>
              <li>Active Environment Awareness wing</li>
              <li>Leading community service initiatives</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Director's Commitment */}
      <section className={styles.commitmentBox}>
        <div
          style={{
            position: "absolute",
            top: "-20px",
            left: "20px",
            fontSize: "10rem",
            opacity: 0.1,
            color: "#f59e0b",
          }}
        >
          “
        </div>
        <blockquote>
          "We are committed to providing an environment where every child can
          discover their potential and develop into confident, responsible, and
          successful individuals. Our students are well-prepared for the
          challenges of tomorrow."
        </blockquote>
        <span className={styles.author}>— Chand Sir, Founder & Director</span>
      </section>
    </div>
  );
}
