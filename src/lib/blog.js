import { cache } from "react";
import axios from "axios";
import { base_url } from "@/config/config";

// Static export har route ke liye ek file likhta hai, isliye slug mein
// : * ? " < > | ya slash jaise characters nahi chal sakte (Windows build fail hota hai)
const UNSAFE_SLUG_CHARS = /[:*?"<>|\\/\s#%]/;

export function isExportableSlug(slug) {
  return typeof slug === "string" && slug.length > 0 && !UNSAFE_SLUG_CHARS.test(slug);
}

/**
 * Build ke time par saare published blogs laata hai.
 * API fail ho jaye toh khali array, taaki build crash na ho.
 */
export async function getAllBlogs() {
  try {
    const response = await axios.get(`${base_url}/api/allWebsiteBlog`);
    const blogs = response.data?.data || [];

    const skipped = blogs.filter((blog) => !isExportableSlug(blog?.slug));
    if (skipped.length > 0) {
      console.warn(
        `[seo] ${skipped.length} blog(s) skipped — slug mein invalid character hai, dashboard se theek karo:`,
        skipped.map((blog) => blog?.slug)
      );
    }

    return blogs.filter((blog) => isExportableSlug(blog?.slug));
  } catch (error) {
    console.error("Failed to fetch blogs:", error.message);
    return [];
  }
}

/**
 * Ek article ka data. cache() isliye ki generateMetadata aur layout
 * dono isse call karte hain, par API hit sirf ek baar ho.
 */
export const getBlogBySlug = cache(async (slug) => {
  try {
    const response = await axios.post(`${base_url}/api/blogDetails`, {
      blogSlug: slug,
    });
    return response.data?.data || null;
  } catch (error) {
    console.error(`Failed to fetch blog "${slug}":`, error.message);
    return null;
  }
});
