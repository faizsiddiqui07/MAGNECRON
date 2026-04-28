export const dynamic = "force-static";

export default function sitemap() {
  const baseUrl = "https://magnecron.com";

  const staticRoutes = [
    {
      url: `${baseUrl}`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: "weekly",
      priority: 1.0,
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