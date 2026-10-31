import { OG_IMAGE, SITE_NAME, SITE_URL } from "@/config/site";
import { getAllBlogs, getBlogBySlug } from "@/lib/blog";

// 1. Next.js ko batana ki kaun-kaun se articles ki HTML banani hai
export async function generateStaticParams() {
  const blogs = await getAllBlogs();

  // Folder ka naam [articleId] hai toh key bhi wahi hogi
  return blogs.map((blog) => ({ articleId: blog.slug }));
}

// 2. Har article ka dynamic SEO set karna
export async function generateMetadata({ params }) {
  // Next 16 mein params ek Promise hai, isliye await zaroori hai
  const { articleId } = await params;
  const url = `${SITE_URL}/insights/${articleId}`;
  const blog = await getBlogBySlug(articleId);

  const title = blog?.title || "Insight";
  const description =
    blog?.subTitle || "Read the latest insights from MAGNECRON.";
  // WhatsApp/Facebook http wali image reject kar dete hain, isliye https force karo
  const thumbnail = blog?.thumbnail?.url?.replace(/^http:\/\//, "https://");
  const image = thumbnail ? { url: thumbnail, alt: title } : OG_IMAGE;

  return {
    // absolute isliye taaki "| MAGNECRON" suffix pakka lage
    title: { absolute: `${title} | ${SITE_NAME}` },
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      url,
      siteName: SITE_NAME,
      title: `${title} | ${SITE_NAME}`,
      description,
      locale: "en_US",
      images: [image],
      publishedTime: blog?.createdAt,
      modifiedTime: blog?.updatedAt || blog?.createdAt,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [image.url],
    },
  };
}

// 3. Article ka structured data (Google rich results ke liye)
export default async function InsightDetailLayout({ children, params }) {
  const { articleId } = await params;
  const blog = await getBlogBySlug(articleId);

  if (!blog) return <>{children}</>;

  const url = `${SITE_URL}/insights/${articleId}`;
  const thumbnail = blog.thumbnail?.url?.replace(/^http:\/\//, "https://");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline: blog.title,
    description: blog.subTitle,
    image: thumbnail ? [thumbnail] : [`${SITE_URL}${OG_IMAGE.url}`],
    datePublished: blog.createdAt,
    dateModified: blog.updatedAt || blog.createdAt,
    author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-US",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      {children}
    </>
  );
}
