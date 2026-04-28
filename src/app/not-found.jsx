import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link"; 

export const metadata = {
  title: "404 - Not Found | MAGNECRON",
};

const NotFoundPage = () => {
  return (
    <div className="animate-fade-in w-full min-h-[80vh] flex flex-col items-center justify-center bg-[#060606] text-white relative overflow-hidden px-4 py-20">
      
      {/* Massive Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] md:text-[25rem] lg:text-[35rem] font-black text-neutral-900/40 select-none pointer-events-none">
        404
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
        {/* Top Accent Line */}
        <div className="w-16 h-0.5 bg-[#C7B390] mb-8"></div>


        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight mb-8 text-white">
          Asset Not Located
        </h1>

        {/* CTA Button */}
        <Link
          href="/"
          className="group flex items-center justify-center gap-4 bg-[#C7B390] text-black px-6 sm:px-10 py-5 uppercase tracking-widest font-bold hover:bg-white transition-colors duration-500"
        >
          <span>Return to Homepage</span>
          <ArrowRight size={20} className="transform group-hover:translate-x-2 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;