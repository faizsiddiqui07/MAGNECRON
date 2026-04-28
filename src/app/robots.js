export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/", // Backend APIs ko search engine se hide karne ke liye
    },
    sitemap: "https://magnecron.com/sitemap.xml", // Tumhara naya sitemap yahan link ho gaya
  };
}