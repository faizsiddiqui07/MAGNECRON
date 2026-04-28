"use client";

import { ArrowLeft } from "lucide-react";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { base_url } from "../../../config/config";
import axios from "axios";

const BlogDetailPage = () => {
  const { articleId } = useParams(); // Next.js next/navigation se useParams()

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.post(`${base_url}/api/blogDetails`, {
          blogSlug: articleId,
        });

        if (response.data.success) {
          setBlog(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching blog details:", error);
      } finally {
        setLoading(false);
      }
    };

    if (articleId) {
      fetchBlogDetails();
    }
  }, [articleId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-[#C7B390] text-2xl uppercase tracking-widest font-bold animate-pulse">
          Loading Article...
        </h2>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-[#fcfcfc]">
        <h2 className="text-3xl font-bold uppercase mb-4 text-[#C7B390]">
          Article Not Found
        </h2>
        <p className="text-gray-400 mb-8">
          The insight you are looking for does not exist.
        </p>
        <Link
          href="/insights"
          className="border border-[#C7B390] text-[#C7B390] px-6 py-3 uppercase tracking-widest hover:bg-[#C7B390] hover:text-[#060606] transition-colors"
        >
          Return to Insights
        </Link>
      </div>
    );
  }

  return (
    <div className="animate-fade-in w-full grow pb-24">
      {/* Hero Header for Article */}
      <div className="w-full h-[50vh] relative border-b border-[#fcfcfc]">
        <img
          src={blog.thumbnail?.url}
          alt={blog.title}
          className="w-full h-full object-cover grayscale opacity-30"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#060606] via-[#060606]/50 to-transparent"></div>
        <div className="absolute bottom-0 w-full pb-16">
          <div className="max-w-6xl mx-auto">
            <Link
              href="/insights"
              className="group flex items-center text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-[#C7B390] transition-colors mb-8"
            >
              <ArrowLeft
                size={16}
                className="mr-2 transform group-hover:-translate-x-2 transition-transform"
              />
              Back to Insights
            </Link>
            <div className="flex items-center text-sm font-bold uppercase tracking-widest text-[#C7B390] mb-4">
              <span>
                {blog.createdAt
                  ? new Date(blog.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  : "N/A"}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#fcfcfc] leading-tight">
              {blog?.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-20 mt-16">
        <div className="text-xl md:text-2xl text-gray-300 font-medium leading-relaxed border-l-4 border-[#C7B390] pl-6 mb-12">
          {blog?.subTitle}
        </div>

        <div 
          className="text-lg prose prose-invert prose-lg max-w-none prose-headings:uppercase prose-headings:tracking-wide prose-a:text-[#C7B390] prose-img:rounded-md"
          dangerouslySetInnerHTML={{ __html: blog?.content }}
        />
      </div>
    </div>
  );
};

export default BlogDetailPage;