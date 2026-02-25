"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { FaPlay, FaTrophy, FaTimes, FaExpandAlt } from "react-icons/fa";

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [selectedImg, setSelectedImg] = useState(null);

  const galleryItems = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop",
      title: "Global Campus",
      category: "Campus",
      desc: "A world-class environment for learning.",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop",
      title: "E-Learning Hub",
      category: "Academic",
      desc: "Digital classrooms with smart boards.",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop",
      title: "Chemistry Lab",
      category: "Academic",
      desc: "Advanced labs for practical discovery.",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop",
      title: "Athletic Meet",
      category: "Sports",
      desc: "Building strength and sportsmanship.",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop",
      title: "Annual Fest",
      category: "Cultural",
      desc: "Celebrating art and local culture.",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?q=80&w=800&auto=format&fit=crop",
      title: "IT Excellence",
      category: "Campus",
      desc: "Our high-tech computer laboratory.",
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1507842217343-58137243e5c9?q=80&w=800&auto=format&fit=crop",
      title: "Library",
      category: "Academic",
      desc: "A peaceful ocean of knowledge.",
    },
    {
      id: 8,
      image:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop",
      title: "Yoga Session",
      category: "Sports",
      desc: "Mental and physical well-being.",
    },
  ];

  // Filter Logic
  const filteredItems =
    filter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  // SEO: Structured Data for Image Gallery
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "School Photo Gallery | Late Ramkali Vidya Mandir",
    description:
      "Explore the visual legacy of Late R.K. Vidyamandir. Browse through our campus, academic events, sports meets, and cultural programs.",
    url: "https://www.rkvmjuniorhighschool.dpdns.org/gallery",
  };

  return (
    <main className={styles.main}>
      {/* Injecting Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Hero */}
      <section className={styles.hero}>
        <h1>
          Visual <span>Legacy</span>
        </h1>
        <p>Explore the moments that define excellence at R.K. Vidyamandir.</p>
      </section>

      {/* 2. Functional Filter Bar */}
      <div className={styles.filterBar}>
        {["All", "Academic", "Sports", "Cultural", "Campus"].map((cat) => (
          <button
            key={cat}
            className={`${styles.filterBtn} ${
              filter === cat ? styles.activeFilter : ""
            }`}
            onClick={() => setFilter(cat)}
            aria-label={`Filter by ${cat}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 3. The Masonry Grid */}
      <section className={styles.galleryGrid}>
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className={styles.galleryItem}
            onClick={() => setSelectedImg(item)}
            tabIndex="0"
            role="button"
            aria-label={`View full image of ${item.title}`}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={styles.image}
              style={{ objectFit: "cover" }}
            />
            <div className={styles.overlay}>
              <FaExpandAlt className={styles.expandIcon} />
              <h3>{item.title}</h3>
              <p>{item.category}</p>
            </div>
          </div>
        ))}
      </section>

      {/* 4. Lightbox Modal */}
      {selectedImg && (
        <div className={styles.modal} onClick={() => setSelectedImg(null)}>
          <button className={styles.closeBtn} aria-label="Close image">
            <FaTimes />
          </button>
          <div className={styles.modalContent}>
            <Image
              src={selectedImg.image}
              alt={selectedImg.title}
              fill
              style={{ objectFit: "contain" }}
            />
            <div className={styles.modalText}>
              <h2>{selectedImg.title}</h2>
              <p>{selectedImg.desc}</p>
            </div>
          </div>
        </div>
      )}

      {/* 5. Achievement Stats */}
      <section className={styles.statsSection}>
        <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <h2>500+</h2>
            <p>Event Memories</p>
          </div>
          <div className={styles.statItem}>
            <h2>100+</h2>
            <p>Trophies Captured</p>
          </div>
          <div className={styles.statItem}>
            <h2>25</h2>
            <p>Annual Days</p>
          </div>
        </div>
      </section>

      {/* 6. Video Preview Section */}
      <section className={styles.videoSection}>
        <h2>School Cinema</h2>
        <div className={styles.videoGrid}>
          <div className={styles.videoCard}>
            <div className={styles.videoPlayerPlaceholder}>
              <FaPlay className={styles.playIcon} />
            </div>
            <h3>Annual Day Highlights</h3>
          </div>
          <div className={styles.videoCard}>
            <div className={styles.videoPlayerPlaceholder}>
              <FaPlay className={styles.playIcon} />
            </div>
            <h3>Sports Documentary</h3>
          </div>
        </div>
      </section>
    </main>
  );
}
