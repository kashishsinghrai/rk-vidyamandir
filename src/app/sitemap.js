// Function to generate the sitemap.xml dynamically
export default function sitemap() {
  const baseUrl = "https://www.rkvmjuniorhighschool.dpdns.org";

  // These routes match the folders visible in your screenshot
  const routes = [
    "", // Home page
    "/about", // About Us
    "/academics", // Academics section
    "/administration", // Admin info
    "/admission", // Admission process
    "/alumni", // Alumni records
    "/contact", // Contact details
    "/exam-result", // Exam results page
    "/facilities", // School facilities
    "/fee-structure", // Fee details
    "/gallery", // Photo gallery
    "/notices", // Notice board
    "/student-life", // Student activities
    "/teachers", // Faculty/Teachers info
    "/transport", // School bus/transport info
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0], // Updates to today's date
    changeFrequency: "monthly",
    priority: route === "" ? 1.0 : 0.8, // Home page is the top priority
  }));

  return routes;
}
