import axios from "axios";
import { base_url } from "../../../../config/config";

// 1. Next.js ko batana ki kaun-kaun se articles ki HTML banani hai
export async function generateStaticParams() {
  try {
    // Tumhari API se saare blogs fetch karke unke slugs (articleId) nikalna
    const response = await axios.get(`${base_url}/api/allWebsiteBlog`);
    
    if (response.data && response.data.data) {
      return response.data.data.map((blog) => ({
        articleId: blog.slug, // Dhyan rahe, folder ka naam [articleId] hai toh key bhi wahi hogi
      }));
    }
    return [];
  } catch (error) {
    console.error("Failed to fetch blogs for static params:", error);
    return []; // API fail hone par build crash na ho, isliye khali array return kar rahe hain
  }
}

// 2. Har article ka dynamic SEO set karna (Jo maine pehle bataya tha)
export async function generateMetadata({ params }) {
  try {
    const response = await axios.post(`${base_url}/api/blogDetails`, {
      blogSlug: params.articleId,
    });
    const blog = response.data?.data;

    return {
      title: `${blog?.title || "Insight"} | MAGNECRON`,
      description: blog?.subTitle || "Read the latest insights from MAGNECRON.",
      alternates: {
        canonical: `https://magnecron.com/insight/${params.articleId}`,
      },
    };
  } catch (error) {
    return {
      title: "Insight | MAGNECRON",
    };
  }
}

export default function InsightDetailLayout({ children }) {
  return <>{children}</>;
}