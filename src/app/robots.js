// Function to generate the robots.txt
export default function robots() {
  return {
    rules: [
      {
        userAgent: "*", // Applies to all bots (Google, Bing, etc.)
        allow: "/", // Allow them to crawl the whole site
        disallow: [
          "/admin", // Prevent bots from seeing your admin login
          "/private", // Hide any private folders
        ],
      },
    ],
    // Link to your sitemap (Next.js generates this from the sitemap.js above)
    sitemap: "https://www.rkvmjuniorhighschool.dpdns.org/sitemap.xml",
  };
}
