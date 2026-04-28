export default function sitemap() {
  // Tumhari live website ka base URL
  const baseUrl = "https://magnecron.com";

  // Tumhare saare static routes
  const staticRoutes = [
    {
      url: `${baseUrl}`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: "weekly",
      priority: 1.0, // Homepage ki priority sabse high hoti hai
    },
    {
      url: `${baseUrl}/firm`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/business`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/business/capital`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/business/portfolio`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/business/venture`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/investment`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];

  return [...staticRoutes];
}