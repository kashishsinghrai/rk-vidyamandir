// app/layout.js
import { Poppins } from "next/font/google"; // Modern & Professional Font
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Font Setup
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata = {
  title: {
    default: "Late R. K. Vidyamandir | Excellence in Education Since 2000",
    template: "%s | Late R. K. Vidyamandir",
  },
  description:
    "Founded by the visionary educator Chand Sir, Late R. K. Vidyamandir in Ruhellapur, Khaga, is a premier school committed to holistic development, modern facilities, and academic success.",
  keywords: [
    "Late R.K. Vidyamandir",
    "Best School in Ruhellapur",
    "Khaga Fatehpur Schools",
    "Chand Sir School",
    "Quality Education Ruhellapur",
    "RK Vidyamandir Admission",
  ],
  authors: [{ name: "Chand Sir" }],
  creator: "Chand Sir",
  publisher: "Late R. K. Vidyamandir",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://www.rkvidyamandir.com", // Aapki actual domain yahan aayegi
    siteName: "Late R. K. Vidyamandir",
    title: "Late R. K. Vidyamandir | Future-Ready Schooling",
    description:
      "Empowering students with modern education and traditional values.",
    images: [
      {
        url: "/school-banner.jpg", // WhatsApp/Facebook share par ye dikhega
        width: 1200,
        height: 630,
        alt: "Late R. K. Vidyamandir Campus",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        {/* Mobile optimization & favicon details handled by Next.js metadata */}
      </head>
      <body className="body-wrapper">
        <Header />
        {/* Is main tag mein min-height di gayi hai taaki footer page ke niche hi rahe */}
        <main className="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
