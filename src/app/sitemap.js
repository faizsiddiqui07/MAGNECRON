import { SITE_URL } from "@/config/site";
import { getAllBlogs } from "@/lib/blog";

export const dynamic = "force-static";

const staticRoutes = [
  { path: "", changeFrequency: "weekly", priority: 1.0 },
  { path: "/firm", changeFrequency: "monthly", priority: 0.8 },
  { path: "/business", changeFrequency: "monthly", priority: 0.8 },
  { path: "/business/capital", changeFrequency: "monthly", priority: 0.8 },
  { path: "/business/portfolio", changeFrequency: "monthly", priority: 0.8 },
  { path: "/business/venture", changeFrequency: "monthly", priority: 0.8 },
  { path: "/investment", changeFrequency: "monthly", priority: 0.8 },
  { path: "/insights", changeFrequency: "weekly", priority: 0.7 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
];

async function getArticleRoutes() {
  const blogs = await getAllBlogs();

  return blogs.map((blog) => ({
    url: `${SITE_URL}/insights/${blog.slug}`,
    lastModified: new Date(blog.updatedAt || blog.createdAt || Date.now())
      .toISOString()
      .split("T")[0],
    changeFrequency: "monthly",
    priority: 0.6,
  }));
}

export default async function sitemap() {
  const today = new Date().toISOString().split("T")[0];

  return [
    ...staticRoutes.map((route) => ({
      url: `${SITE_URL}${route.path}`,
      lastModified: today,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...(await getArticleRoutes()),
  ];
}
