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
        "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=800",
      title: "Global Campus",
      category: "Campus",
      desc: "A world-class environment for learning.",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800",
      title: "E-Learning Hub",
      category: "Academic",
      desc: "Digital classrooms with smart boards.",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1523050335456-c38466a0961f?q=80&w=800",
      title: "Chemistry Lab",
      category: "Academic",
      desc: "Advanced labs for practical discovery.",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=800",
      title: "Athletic Meet",
      category: "Sports",
      desc: "Building strength and sportsmanship.",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800",
      title: "Annual Fest",
      category: "Cultural",
      desc: "Celebrating art and local culture.",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1577896851231-70ef1469759e?q=80&w=800",
      title: "IT Excellence",
      category: "Campus",
      desc: "Our high-tech computer laboratory.",
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800",
      title: "Library",
      category: "Academic",
      desc: "A peaceful ocean of knowledge.",
    },
    {
      id: 8,
      image:
        "https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=800",
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

  return (
    <main className={styles.main}>
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
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className={styles.image}
              style={{ objectFit: "cover" }}
            />
            <div className={styles.overlay}>
              <FaExpandAlt
                style={{
                  color: "#f59e0b",
                  fontSize: "2rem",
                  marginBottom: "10px",
                }}
              />
              <h3 style={{ color: "white" }}>{item.title}</h3>
              <p style={{ color: "#f59e0b", fontSize: "0.8rem" }}>
                {item.category}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* 4. Lightbox Modal */}
      {selectedImg && (
        <div className={styles.modal} onClick={() => setSelectedImg(null)}>
          <button className={styles.closeBtn}>
            <FaTimes />
          </button>
          <div style={{ position: "relative", width: "90%", height: "80%" }}>
            <Image
              src={selectedImg.image}
              alt="Preview"
              fill
              style={{ objectFit: "contain" }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "-60px",
                left: 0,
                width: "100%",
                textAlign: "center",
              }}
            >
              <h2 style={{ color: "#f59e0b" }}>{selectedImg.title}</h2>
              <p style={{ color: "white" }}>{selectedImg.desc}</p>
            </div>
          </div>
        </div>
      )}

      {/* 5. Achievement Stats */}
      <section
        style={{
          padding: "80px 8%",
          background: "#1e1b4b",
          color: "white",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            gap: "40px",
          }}
        >
          <div>
            <h2 style={{ fontSize: "3rem", color: "#f59e0b" }}>500+</h2>
            <p>Event Memories</p>
          </div>
          <div>
            <h2 style={{ fontSize: "3rem", color: "#f59e0b" }}>100+</h2>
            <p>Trophies Captured</p>
          </div>
          <div>
            <h2 style={{ fontSize: "3rem", color: "#f59e0b" }}>25</h2>
            <p>Annual Days</p>
          </div>
        </div>
      </section>

      {/* 6. Video Preview Section */}
      <section style={{ padding: "80px 8%" }}>
        <h2 style={{ textAlign: "center", marginBottom: "50px" }}>
          School Cinema
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px",
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "20px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
            }}
          >
            <div
              style={{
                background: "#000",
                height: "200px",
                borderRadius: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FaPlay
                style={{
                  color: "#f59e0b",
                  fontSize: "2.5rem",
                  cursor: "pointer",
                }}
              />
            </div>
            <h3 style={{ marginTop: "15px" }}>Annual Day Highlights</h3>
          </div>
          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "20px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
            }}
          >
            <div
              style={{
                background: "#000",
                height: "200px",
                borderRadius: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FaPlay
                style={{
                  color: "#f59e0b",
                  fontSize: "2.5rem",
                  cursor: "pointer",
                }}
              />
            </div>
            <h3 style={{ marginTop: "15px" }}>Sports Documentary</h3>
          </div>
        </div>
      </section>
    </main>
  );
}
