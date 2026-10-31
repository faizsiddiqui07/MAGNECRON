import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { getAllBlogs } from "@/lib/blog";

// Server component — articles build time par render hote hain taaki
// Google ko HTML mein hi content mile (pehle sab client-side fetch tha)
const InsightsPage = async () => {
  const blogData = await getAllBlogs();

  return (
    <div className="animate-fade-in w-full grow">
      <div className="w-full h-[40vh] relative border-b border-[#fcfcfc]">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
          alt="Firm Headquarters"
          className="w-full h-full object-cover grayscale opacity-40"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-30 w-full">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold uppercase tracking-tight text-[#fcfcfc]">
              Insights
            </h1>
          </div>
        </div>
      </div>

      {/* Article Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-4 sm:px-6 lg:px-30 py-12">
        {!blogData || blogData.length === 0 ? (
          <p className="text-[#C7B390] text-xl">No insights published yet.</p>
        ) : (
          blogData.map((article, index) => (
            <Link
              href={`/insights/${article.slug}`}
              key={article._id || index}
              className="group cursor-pointer border border-neutral-800 hover:border-[#C7B390] p-6 transition-colors bg-neutral-900 flex flex-col"
            >
              <div className="h-64 w-full mb-6 overflow-hidden border border-neutral-700 group-hover:border-[#C7B390] transition-colors">
                <img
                  src={
                    article.thumbnail?.url ||
                    "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2000&auto=format&fit=crop"
                  }
                  alt={article.title}
                  className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h2 className="text-2xl font-bold uppercase mb-4 text-[#fcfcfc] group-hover:text-[#C7B390] transition-colors grow">
                {article.title}
              </h2>
              <p className="text-gray-400 text-lg mb-6">{article.subTitle}</p>
              <span className="inline-flex items-center uppercase tracking-widest text-sm font-bold text-[#C7B390] group-hover:text-[#fcfcfc] transition-colors">
                Read Article{" "}
                <ArrowRight
                  size={16}
                  className="ml-2 transform group-hover:translate-x-2 transition-transform"
                />
              </span>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default InsightsPage;
