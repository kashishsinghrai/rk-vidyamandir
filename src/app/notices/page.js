
"use client";

export default function NoticesPage() {
  // Data array containing all school notices
  const notices = [
    {
      date: "January 30, 2026",
      title: "Admission Open for Academic Year 2026-27",
      content:
        "Admissions are now open for all classes from Nursery to Class X. Limited seats available. Interested parents can collect application forms from the school office or apply online through our website.",
      type: "admission",
      important: true,
    },
    {
      date: "January 28, 2026",
      title: "Annual Sports Day - February 15, 2026",
      content:
        "Our annual sports day will be held on February 15, 2026, starting at 9:00 AM. Parents are cordially invited to witness their children's participation in various sports events.",
      type: "event",
      important: false,
    },
    {
      date: "January 25, 2026",
      title: "Parent-Teacher Meeting Scheduled",
      content:
        "Parent-Teacher Meeting for all classes will be conducted on February 5, 2026, from 10:00 AM to 1:00 PM. Parents are requested to attend and discuss their child's academic progress with respective teachers.",
      type: "academic",
      important: true,
    },
    {
      date: "January 22, 2026",
      title: "School Timing Change - Winter Schedule",
      content:
        "Due to winter season, school timings have been revised. New timings: 9:00 AM to 2:30 PM (Monday to Friday), 9:00 AM to 12:30 PM (Saturday). This will be effective from February 1, 2026.",
      type: "general",
      important: false,
    },
    {
      date: "January 20, 2026",
      title: "Science Exhibition - February 10, 2026",
      content:
        "Annual Science Exhibition will be organized on February 10, 2026. Students from Classes VI to X are encouraged to participate and showcase their scientific projects and innovations.",
      type: "academic",
      important: false,
    },
    {
      date: "January 18, 2026",
      title: "Fee Payment Reminder",
      content:
        "Parents are reminded that the fee for the month of February 2026 is due by January 31, 2026. Late fee charges will be applicable after the due date. Please ensure timely payment.",
      type: "fee",
      important: true,
    },
    {
      date: "January 15, 2026",
      title: "Republic Day Celebration",
      content:
        "Republic Day will be celebrated in the school premises on January 26, 2026, at 9:00 AM. All students are required to attend in proper school uniform. Cultural program will follow the flag hoisting ceremony.",
      type: "event",
      important: false,
    },
    {
      date: "January 12, 2026",
      title: "Mathematics Olympiad Registration",
      content:
        "Registration for Inter-School Mathematics Olympiad is now open for Classes III to X. Interested students can register with their respective class teachers by January 30, 2026. Registration fee: ₹100.",
      type: "academic",
      important: false,
    },
    {
      date: "January 10, 2026",
      title: "Health Check-up Camp",
      content:
        "A comprehensive health check-up camp will be organized in school on February 3, 2026, in collaboration with local health department. All students will undergo basic health screening.",
      type: "health",
      important: false,
    },
    {
      date: "January 8, 2026",
      title: "New Library Books Available",
      content:
        "New collection of books including story books, reference materials, and educational magazines have been added to the school library. Students are encouraged to make use of these resources.",
      type: "general",
      important: false,
    },
  ];

  // Helper function to assign brand colors based on the notice type
  const getNoticeTypeColor = (type) => {
    const colors = {
      admission: "#e74c3c", // Red
      academic: "#3498db", // Blue
      event: "#f39c12", // Orange
      fee: "#e67e22", // Dark Orange
      health: "#27ae60", // Green
      general: "#9b59b6", // Purple
    };
    return colors[type] || "#34495e";
  };

  // Helper function to assign emojis/icons based on the notice type
  const getNoticeTypeIcon = (type) => {
    const icons = {
      admission: "🎓",
      academic: "📚",
      event: "🎉",
      fee: "💳",
      health: "🏥",
      general: "📢",
    };
    return icons[type] || "📄";
  };

  // JSON-LD Schema: Tells Google that this page contains a list of articles/news
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Late Ramkali Vidya Mandir School Notices",
    itemListElement: notices.map((notice, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "NewsArticle",
        headline: notice.title,
        datePublished: new Date(notice.date).toISOString(),
        description: notice.content,
      },
    })),
  };

  return (
    <div
      className="notice-page-container"
      style={{ padding: "40px 20px", maxWidth: "1000px", margin: "0 auto" }}
    >
      {/* Injecting Schema Markup for Search Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header style={{ textAlign: "center", marginBottom: "50px" }}>
        <h1 style={{ fontSize: "2.5rem", color: "#2c3e50" }}>Notice Board</h1>
        <p style={{ color: "#7f8c8d" }}>
          Latest updates and official announcements from the school
          administration.
        </p>
      </header>

      <section
        className="notices-list"
        style={{ display: "flex", flexDirection: "column", gap: "25px" }}
      >
        {notices.map((notice, index) => (
          <article
            key={index}
            className={`notice-card ${notice.important ? "important" : ""}`}
            style={{
              padding: "25px",
              borderRadius: "12px",
              backgroundColor: "#fff",
              boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
              borderLeft: `6px solid ${getNoticeTypeColor(notice.type)}`,
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Highlight Tag for Important Notices */}
            {notice.important && (
              <span
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  backgroundColor: "#e74c3c",
                  color: "#fff",
                  fontSize: "10px",
                  padding: "2px 8px",
                  borderRadius: "4px",
                  fontWeight: "bold",
                }}
              >
                IMPORTANT
              </span>
            )}

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "10px",
              }}
            >
              <span style={{ fontSize: "1.5rem" }}>
                {getNoticeTypeIcon(notice.type)}
              </span>
              <span
                style={{
                  fontSize: "0.85rem",
                  fontWeight: "bold",
                  color: getNoticeTypeColor(notice.type),
                  textTransform: "uppercase",
                }}
              >
                {notice.type}
              </span>
              <span style={{ fontSize: "0.85rem", color: "#95a5a6" }}>
                • {notice.date}
              </span>
            </div>

            <h2
              style={{
                fontSize: "1.3rem",
                color: "#2c3e50",
                marginBottom: "12px",
              }}
            >
              {notice.title}
            </h2>

            <p style={{ color: "#5d6d7e", lineHeight: "1.6", margin: 0 }}>
              {notice.content}
            </p>
          </article>
        ))}
      </section>

      {/* CSS Styles (Standard CSS-in-JS or can be moved to globals.css) */}
      <style jsx>{`
        .important {
          background-color: #fff9f9 !important;
          animation: pulse 2s infinite ease-in-out;
        }
        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.01);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
