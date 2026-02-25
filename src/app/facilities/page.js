"use client";
import styles from "./page.module.css";
import Image from "next/image";
import {
  FaBuilding,
  FaTree,
  FaFutbol,
  FaUsers,
  FaGlassWhiskey,
  FaBolt,
  FaUserShield,
  FaSun,
  FaMapMarkerAlt, // Added for the map button
} from "react-icons/fa";

export default function CampusLife() {
  const schoolHighlights = [
    {
      title: "Iconic Two-Story Building",
      desc: "Our grand school building is designed with multiple spacious floors, wide corridors, and easy access, providing a secure and organized environment for all classes.",
      image: "/school-building.jpg", // The large yellow building
      icon: <FaBuilding />,
    },
    {
      title: "Expansive Playground",
      desc: "A massive open ground as seen in our campus, perfect for morning assemblies, annual sports events, and daily outdoor activities for physical growth.",
      image: "/sport-club.jpg", // The open field
      icon: <FaFutbol />,
    },
    {
      title: "Nature-Rich Environment",
      desc: "Located in a peaceful rural setting with plenty of fresh air and greenery, ensuring a focused learning atmosphere away from city noise.",
      image: "/campus-view.jpg", // Rural/Greenery view
      icon: <FaTree />,
    },
    {
      title: "Spacious Classrooms",
      desc: "Our classrooms are built with high ceilings and large windows to ensure natural ventilation and a bright, healthy atmosphere for learning.",
      image: "/classroom.jpg",
      icon: <FaUsers />,
    },
  ];

  // SEO: Structured Data for the Campus/Facilities Page
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Campus & Facilities | Late Ramkali Vidya Mandir",
    description:
      "Explore the expansive campus, iconic two-story building, large playground, and modern facilities of Late R.K. Vidyamandir in Ruhellapur, Khaga.",
    url: "https://www.rkvmjuniorhighschool.dpdns.org/facilities",
    mainEntity: {
      "@type": "Place",
      name: "Late Ramkali Vidya Mandir Campus",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Ruhellapur Post Ukathu",
        addressLocality: "Khaga",
        addressRegion: "Uttar Pradesh",
        postalCode: "212655",
        addressCountry: "IN",
      },
      amenityFeature: [
        {
          "@type": "LocationFeatureSpecification",
          name: "Large Playground",
          value: "True",
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Two-Story Building",
          value: "True",
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Pure Drinking Water",
          value: "True",
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Power Backup",
          value: "True",
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
          Experience <span>Our Campus</span>
        </h1>
        <p>
          Take a look at the infrastructure and peaceful, nature-rich
          environment of Late R.K. Vidyamandir, Ruhellapur.
        </p>
      </section>

      {/* 2. Facility Cards - Real Descriptions */}
      <section className={styles.facilitySection}>
        <div className={styles.facilityGrid}>
          {schoolHighlights.map((item, i) => (
            <article key={i} className={styles.facilityCard}>
              <div className={styles.imgWrapper}>
                <Image
                  src={item.image}
                  alt={`Late R.K. Vidyamandir - ${item.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={i === 0} // Load the first image quickly
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardIcon}>{item.icon}</div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 3. Infrastructure Statistics */}
      <section className={styles.highlightSection}>
        <div className={styles.highlightContainer}>
          <h2 className={styles.highlightTitle}>
            Campus <span>At A Glance</span>
          </h2>
          <div className={styles.statGrid}>
            <div className={styles.statCard}>
              <h3 className={styles.statNumber}>20+</h3>
              <p className={styles.statLabel}>Total Rooms</p>
            </div>
            <div className={styles.statCard}>
              <h3 className={styles.statNumber}>1</h3>
              <p className={styles.statLabel}>Grand Playground</p>
            </div>
            <div className={styles.statCard}>
              <h3 className={styles.statNumber}>2</h3>
              <p className={styles.statLabel}>Floors Building</p>
            </div>
            <div className={styles.statCard}>
              <h3 className={styles.statNumber}>100%</h3>
              <p className={styles.statLabel}>Safe Environment</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Essential Services */}
      <section className={styles.servicesSection}>
        <div className={styles.servicesHeader}>
          <h2>
            Essential <span>Daily Services</span>
          </h2>
          <p>
            We ensure that basic needs and safety are prioritized every day.
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {[
            {
              icon: <FaGlassWhiskey />,
              title: "Pure Drinking Water",
              text: "Purified RO water facility is provided to ensure the health and hydration of our students.",
            },
            {
              icon: <FaBolt />,
              title: "Full Power Backup",
              text: "Inverter and generator support so that learning and ventilation never stop during power outages.",
            },
            {
              icon: <FaUserShield />,
              title: "Dedicated Security",
              text: "Safe entry and exit points with continuous supervision by our disciplined administrative staff.",
            },
            {
              icon: <FaSun />,
              title: "Open Assembly Area",
              text: "A spacious courtyard for daily prayers, morning physical exercises, and cultural performances.",
            },
          ].map((service, idx) => (
            <div key={idx} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>{service.icon}</div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceText}>{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Direct Visit CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaBox}>
          <h2 className={styles.ctaTitle}>Visit Our Campus Today</h2>
          <p className={styles.ctaDesc}>
            Nothing beats a personal visit. We invite you to Ruhellapur to see
            our grand building, explore the playground, and meet our dedicated
            faculty.
          </p>
          <a
            href="https://maps.google.com/?q=25.7766,81.1147" // Replace with actual Google Maps coordinates/link
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaBtn}
          >
            <FaMapMarkerAlt /> Get Location on Maps
          </a>
        </div>
      </section>
    </main>
  );
}
