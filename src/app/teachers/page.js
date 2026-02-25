"use client";
import styles from "./page.module.css";
import Image from "next/image";
import { FaGraduationCap, FaChalkboardTeacher, FaAward } from "react-icons/fa";

export default function TeachersPage() {
  const teachers = [
    {
      name: "Chand Sir",
      subject: "Principal & Mathematics",
      qualification: "M.A., B.Ed.",
      experience: "25+ years",
      image: "/teacher-principal.jpg", // Replace with actual path if different
    },
    {
      name: "Mrs. Sunita Sharma",
      subject: "English & Hindi",
      qualification: "M.A. English, B.Ed.",
      experience: "18 years",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop", // Placeholder
    },
    {
      name: "Mr. Rajesh Kumar",
      subject: "Science & Mathematics",
      qualification: "M.Sc. Physics, B.Ed.",
      experience: "15 years",
      image:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=400&auto=format&fit=crop", // Placeholder
    },
    {
      name: "Mrs. Priya Singh",
      subject: "Social Studies",
      qualification: "M.A. History, B.Ed.",
      experience: "12 years",
      image:
        "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=400&auto=format&fit=crop", // Placeholder
    },
    {
      name: "Mr. Amit Verma",
      subject: "Physical Education",
      qualification: "B.P.Ed., M.P.Ed.",
      experience: "10 years",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop", // Placeholder
    },
    {
      name: "Mrs. Kavita Gupta",
      subject: "Art & Craft",
      qualification: "B.F.A., Diploma in Art",
      experience: "8 years",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop", // Placeholder
    },
  ];

  // SEO: Structured Data for Faculty Page
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Our Teachers & Faculty | Late Ramkali Vidya Mandir",
    description:
      "Meet the dedicated and experienced teaching staff at Late R.K. Vidyamandir. Our faculty is committed to nurturing each student's potential.",
    url: "https://www.rkvmjuniorhighschool.dpdns.org/teachers",
    about: {
      "@type": "EducationalOrganization",
      name: "Late Ramkali Vidya Mandir Junior High School",
      employee: teachers.map((t) => ({
        "@type": "Person",
        name: t.name,
        jobTitle: t.subject,
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
          Our Dedicated <span>Faculty</span>
        </h1>
        <p>
          Experienced, passionate, and committed to nurturing the leaders of
          tomorrow.
        </p>
      </section>

      {/* Intro Text */}
      <section className={styles.introSection}>
        <p className={styles.introText}>
          Our experienced and passionate teachers are the backbone of our
          educational excellence. They are committed to nurturing each
          student&apos;s potential and providing personalized attention to
          ensure comprehensive development.
        </p>
      </section>

      {/* 2. Principal Section */}
      <section className={styles.principalSection}>
        <div className={styles.sectionHeader}>
          <h2>Principal&apos;s Message</h2>
        </div>

        <div className={styles.principalGrid}>
          <div className={styles.principalCard}>
            <div className={styles.principalImgWrapper}>
              <Image
                src={teachers[0].image} // Assuming Chand Sir is the first in array
                alt="Principal Chand Sir"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                style={{ objectFit: "cover", objectPosition: "top center" }}
              />
            </div>
            <div className={styles.principalInfo}>
              <h3>{teachers[0].name}</h3>
              <p className={styles.roleTitle}>
                <strong>Founder & Principal</strong>
              </p>
              <p className={styles.qualifications}>
                {teachers[0].qualification} | {teachers[0].experience}
              </p>
            </div>
          </div>

          <div className={styles.messageCard}>
            <h3 className={styles.messageTitle}>
              A Message from Our Principal
            </h3>
            <div className={styles.quoteMark}>&quot;</div>
            <p className={styles.messageText}>
              Welcome to Late Ramkali Vidya Mandir Junior High School! For over
              two decades, we have been committed to providing quality education
              that shapes not just academic minds but builds character and
              values. Our dedicated faculty works tirelessly to ensure that
              every student reaches their full potential.
            </p>
            <p className={styles.messageText}>
              We believe in creating an environment where learning is joyful,
              meaningful, and relevant to real life. Our goal is to prepare
              students who are not only academically strong but also socially
              responsible citizens.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Faculty Grid */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Meet Our Teachers</h2>
          <p>The mentors guiding our students towards success.</p>
        </div>

        <div className={styles.facultyGrid}>
          {teachers.slice(1).map((teacher, index) => (
            <div key={index} className={styles.teacherCard}>
              <div className={styles.teacherImgWrapper}>
                <Image
                  src={teacher.image}
                  alt={teacher.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover", objectPosition: "top" }}
                />
              </div>
              <div className={styles.teacherInfo}>
                <h3 className={styles.teacherName}>{teacher.name}</h3>
                <p className={styles.teacherSubject}>
                  <strong>{teacher.subject}</strong>
                </p>
                <div className={styles.divider}></div>
                <p className={styles.teacherQual}>{teacher.qualification}</p>
                <p className={styles.teacherExp}>
                  {teacher.experience} Experience
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Teaching Philosophy */}
      <section className={styles.philosophySection}>
        <div className={styles.sectionHeader}>
          <h2>Our Teaching Philosophy</h2>
        </div>
        <div className={styles.philosophyGrid}>
          <div className={styles.infoCard}>
            <div className={styles.iconBox}>
              <FaChalkboardTeacher />
            </div>
            <h3>Student-Centered Learning</h3>
            <p>
              We focus on individual learning styles and adapt our teaching
              methods to suit each student&apos;s needs, ensuring that no child
              is left behind.
            </p>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.iconBox}>
              <FaGraduationCap />
            </div>
            <h3>Holistic Development</h3>
            <p>
              Our approach goes beyond academics to include physical, emotional,
              and social development, preparing students for all aspects of
              life.
            </p>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.iconBox}>
              <FaAward />
            </div>
            <h3>Innovation in Teaching</h3>
            <p>
              We continuously update our teaching methods, incorporating modern
              techniques and technology to make learning effective and engaging.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Faculty Achievements */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Faculty Achievements</h2>
          <p>Continuous learning and excellence among our staff.</p>
        </div>
        <div className={styles.achievementGrid}>
          <div className={styles.achievementCard}>
            <h3>Recognition &amp; Awards</h3>
            <ul className={styles.achievementList}>
              <li>Best Teacher Awards at district level</li>
              <li>Recognition for innovative teaching methods</li>
              <li>Published research papers in education journals</li>
              <li>Active participation in teacher training programs</li>
            </ul>
          </div>
          <div className={styles.achievementCard}>
            <h3>Professional Development</h3>
            <ul className={styles.achievementList}>
              <li>Regular workshops and seminars attendance</li>
              <li>Certification in modern teaching methodologies</li>
              <li>Computer literacy and technology integration</li>
              <li>Continuous learning and skill enhancement</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 6. Join Our Team CTA */}
      <section className={styles.joinSection}>
        <div className={styles.joinBox}>
          <h2>Join Our Teaching Family</h2>
          <p>
            Are you a passionate educator looking to make a difference? We are
            always looking for dedicated teachers who share our vision of
            quality education and holistic student development.
          </p>
          <a href="/contact" className={styles.btnGold}>
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  );
}
