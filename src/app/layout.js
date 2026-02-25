// Import Google Font for site typography
import { Poppins } from "next/font/google";

// Global CSS
import "./globals.css";

// Layout components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Font configuration
const poppins = Poppins({
  subsets: ["latin"], // Language subset
  weight: ["300", "400", "500", "600", "700", "800"], // Font weights
  variable: "--font-poppins", // CSS variable name for Tailwind/custom CSS
});

// ================= VIEWPORT METADATA =================
// Note: In modern Next.js, viewport is exported separately from metadata
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1, // Optional: Prevents users from zooming in too much on mobile
  themeColor: "#1e1b4b", // Sets the browser address bar color on mobile
};

// ================= SEO METADATA =================
export const metadata = {
  // Base domain (Important for OpenGraph images & canonical URLs)
  // Note: Highly recommend using "https://" for better SEO rankings
  metadataBase: new URL("https://www.rkvmjuniorhighschool.dpdns.org"),

  // Browser title + Google search title
  title: {
    default: "Late Ramkali Vidya Mandir | Best School in Ruhellapur, Fatehpur",
    template: "%s | Late Ramkali Vidya Mandir", // Fallback for page-specific titles
  },

  // Google search description (VERY IMPORTANT for ranking & click-through rate)
  description:
    "Official website of Late Ramkali Vidya Mandir Junior High School, Ruhellapur, Khaga, Fatehpur (UP). Best UP Board school with quality education. Admission Open. Call +91 8009337704.",

  // Search keywords (Google largely ignores these, but helpful for other search engines like Bing/Yahoo)
  keywords: [
    "late ramkali vidya mandir ruhellapur",
    "late ramkali vidya mandir khaga fatehpur",
    "ramkali vidya mandir",
    "rk vidya mandir ruhellapur",
    "late ramkali vidya mandir junior highschool",
    "school in ruhellapur",
    "school in khaga fatehpur",
    "primary school ruhellapur",
    "junior high school ruhellapur",
    "up board school ruhellapur",
    "best school ruhellapur",
    "ramkali school fatehpur",
  ],

  // Site author / creator information
  authors: [{ name: "Late Ramkali Vidya Mandir" }],
  creator: "Late Ramkali Vidya Mandir",
  publisher: "Late Ramkali Vidya Mandir",

  // Canonical URL (Helps avoid duplicate content issues in SEO)
  alternates: {
    canonical: "/",
  },

  // ===== SOCIAL MEDIA SHARE PREVIEW =====
  // WhatsApp / Facebook / LinkedIn share preview settings
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.rkvmjuniorhighschool.dpdns.org",
    siteName: "Late Ramkali Vidya Mandir",
    title: "Late Ramkali Vidya Mandir | Top School in Khaga, Fatehpur",
    description:
      "Best Private Primary & Junior UP Board School in Ruhellapur, Khaga, Fatehpur. Shaping bright futures. Admission Open Now.",
    images: [
      {
        url: "/school-banner.jpg", // Share banner image path
        width: 1200,
        height: 630,
        alt: "Late Ramkali Vidya Mandir Ruhellapur Khaga Fatehpur Campus",
      },
    ],
  },

  // Twitter share card settings
  twitter: {
    card: "summary_large_image",
    title: "Late Ramkali Vidya Mandir | Top School in Khaga, Fatehpur",
    description:
      "Official website of Late Ramkali Vidya Mandir Ruhellapur. Admission Open.",
    images: ["/school-banner.jpg"],
  },

  // Search engine crawling permissions
  robots: {
    index: true, // Allow indexing
    follow: true, // Allow link crawling
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// ================= SCHEMA MARKUP (FOR LOCAL SEO) =================
// This explicitly tells Google search bots that this is an Educational Institute
const schoolSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Late Ramkali Vidya Mandir Junior High School",
  alternateName: "RK Vidya Mandir",
  url: "https://www.rkvmjuniorhighschool.dpdns.org",
  logo: "https://www.rkvmjuniorhighschool.dpdns.org/logo.png", // Update with actual logo path
  telephone: "+91-8009337704",
  email: "info@rkvmjuniorhighschool.dpdns.org", // Update if you have an official email
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ruhellapur, Post Ukathu",
    addressLocality: "Khaga, Fatehpur",
    addressRegion: "Uttar Pradesh",
    postalCode: "212655", // Update with exact postal code if different
    addressCountry: "IN",
  },
};

// ================= ROOT LAYOUT =================
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        {/* Injecting Schema Markup for Google Bots */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schoolSchema) }}
        />
      </head>
      <body className="body-wrapper">
        {/* Top navigation */}
        <Header />

        {/* Main page content */}
        <main className="main-content">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
