"use client";

import { ArrowRight } from "lucide-react";
import { useSelector } from "react-redux";
import Link from "next/link";
import testImage from "../assets/homeInvestment1.webp";
import testImage2 from "../assets/homeInvestment2.webp";
import bannerImage from "../assets/HomeBannerImage.webp";
// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Homepage = () => {
  const { blogData } = useSelector((state) => state.blog);

  // Core Investment Domains Data
  const coreDomains = [
    {
      id: "01",
      title: "Real Estate Platforms",
      desc: "Strategic development, asset management, and real estate investment ecosystems.",
    },
    {
      id: "02",
      title: "Technology & Artificial Intelligence",
      desc: "AI infrastructure, digital platforms, and next-generation technology ventures.",
    },
    {
      id: "03",
      title: "Digital Infrastructure",
      desc: "Platforms powering the digital economy.",
    },
    {
      id: "04",
      title: "Agri-Tech & Sustainability",
      desc: "Innovation in agriculture, food systems, and sustainable development.",
    },
    {
      id: "05",
      title: "Manufacturing & Industrial Innovation",
      desc: "Advanced manufacturing and industrial technologies.",
    },
    {
      id: "06",
      title: "Hospitality & Tourism",
      desc: "Experiential hospitality, food ecosystems, and destination-led tourism.",
    },
  ];

  return (
    <div className="animate-fade-in flex flex-col w-full h-full grow">
      {/* Hero Section with Image */}
      <section className="min-h-[85vh] flex items-center relative overflow-hidden">
        {/* --- MOBILE PAR BACKGROUND IMAGE --- */}
        <div className="absolute inset-0 lg:hidden z-0">
          <img
            src={bannerImage.src}
            alt="Magnecron Background Mobile"
            className="w-full h-full object-cover grayscale opacity-30 object-center"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#060606] via-[#060606]/80 to-transparent"></div>
        </div>

        {/* Content Container */}
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-30 w-full z-10 py-20 flex flex-col lg:flex-row items-center gap-12 relative">
          <div className="w-full lg:w-3/5 relative z-20">
            <h2 className="text-5xl lg:text-7xl xl:text-8xl text-center lg:text-start font-bold leading-tight mb-6 uppercase tracking-tight">
              Managing <br /> The Future <br /> Of Capital
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 w-full lg:max-w-2xl text-center lg:text-start mb-12 border-l-4 border-[#fcfcfc] pl-6">
              We mitigate risk and drive value for the world's leading
              companies, institutions, and investors through disciplined
              strategies.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Link
                href={"/firm"}
                className="group flex items-center space-x-4 bg-[#C7B390] text-[#060606] px-4 sm:px-8 py-4 font-bold tracking-widest uppercase hover:bg-[#fcfcfc] transition-colors"
              >
                <span>Discover Magnecron</span>
                <ArrowRight className="transform group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="lg:w-2/5 hidden lg:block relative mt-10 lg:mt-0 z-20">
            <div className="absolute inset-0 bg-[#fcfcfc] transform translate-x-4 translate-y-4"></div>
            <img
              src={bannerImage.src}
              alt="Magnecron Banner"
              className="relative z-10 w-full h-125 object-cover grayscale contrast-125 border border-[#fcfcfc]"
            />
          </div>
        </div>
      </section>

      {/* Magnecron Process Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-[#060606] text-[#fcfcfc] border-y border-neutral-800">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-30">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-neutral-800 border border-neutral-800">
            <div className="p-6 lg:p-8 xl:p-10 group cursor-default hover:bg-neutral-900/40 transition-colors duration-500">
              <span className="text-[#C7B390] text-sm font-bold tracking-[0.2em] block mb-6">
                STEP 01
              </span>
              <h3 className="text-4xl font-bold uppercase tracking-tight mb-6 text-[#fcfcfc] group-hover:translate-x-2 transition-transform duration-500">
                CAPITAL IN
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Deploy capital into curated, high-performance investment
                strategies.
              </p>
            </div>

            <div className="p-6 lg:p-8 xl:p-10 group cursor-default hover:bg-neutral-900/40 transition-colors duration-500">
              <span className="text-[#C7B390] text-sm font-bold tracking-[0.2em] block mb-6">
                STEP 02
              </span>
              <h3 className="text-4xl font-bold uppercase tracking-tight mb-6 text-[#fcfcfc] group-hover:translate-x-2 transition-transform duration-500">
                INTELLIGENT MANAGEMENT
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Magnecron actively structures, optimizes, and protects your
                capital.
              </p>
            </div>

            <div className="p-6 lg:p-8 xl:p-10 group cursor-default hover:bg-neutral-900/40 transition-colors duration-500">
              <span className="text-[#C7B390] text-sm font-bold tracking-[0.2em] block mb-6">
                STEP 03
              </span>
              <h3 className="text-4xl font-bold uppercase tracking-tight mb-6 text-[#fcfcfc] group-hover:translate-x-2 transition-transform duration-500">
                WEALTH OUT
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Realize compounded growth, sustained returns, and long-term
                value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Magnecron Advantage */}
      <section className="py-8 sm:py-12 md:py-16 bg-neutral-900 text-[#fcfcfc] border-b border-neutral-800">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-30">
          <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-8 lg:gap-10 xl:gap-12">
            <div className="lg:w-1/2 w-full">
              <h2 className="text-sm tracking-widest uppercase text-gray-400 mb-4 border-l-2 border-[#fcfcfc] pl-4">
                Our Approach
              </h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight mb-8">
                INVESTMENT STRUCTURES
              </h3>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                MAGNECRON designs and manages strategically structured
                investment pools that aggregate capital for disciplined
                deployment across high-potential opportunities. Each pool is
                guided by defined risk frameworks, active portfolio management,
                and performance-driven strategies—aimed at delivering consistent
                returns, capital appreciation, and long-term wealth creation
                with institutional rigor.
              </p>
              <Link
                href={"/investment"}
                className="inline-flex items-center uppercase tracking-widest text-sm font-bold border-b border-[#C7B390] text-[#C7B390] pb-1 hover:text-[#fcfcfc] hover:border-[#fcfcfc] transition-all"
              >
                Explore <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center items-center gap-x-5">
              <div className="relative">
                <img
                  src={testImage.src}
                  alt="Business Professionals"
                  className="w-full h-full block lg:hidden xl:block object-cover border border-neutral-700"
                />
                <img
                  src={testImage2.src}
                  alt="Business Professionals"
                  className="w-full h-125 hidden lg:block xl:hidden object-cover border border-neutral-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUPER PREMIUM SECTION: Core Investment Domains (Bento Grid) */}
      <section className="py-10 sm:py-12 md:py-16 bg-[#060606] text-[#fcfcfc] border-b border-neutral-800">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-30">
          <div className="mb-8 md:mb-10 lg:mb-16">
            <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">
              Core Investment Domains
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 lg:gap-6">
            {coreDomains.map((domain, index) => (
              <div
                key={index}
                className={`group relative bg-[#0a0a0a] border border-neutral-800 hover:border-[#C7B390]/50 transition-all duration-500 overflow-hidden flex flex-col min-h-60 sm:min-h-64 md:min-h-80 p-4 md:p-6 lg:p-8 xl:p-10 md:col-span-2`}
              >
                <div className="absolute top-0 left-0 w-0 h-1 bg-[#C7B390] group-hover:w-full transition-all duration-700 ease-out"></div>
                <div className="absolute -bottom-12 -right-6 text-[140px] font-black text-neutral-800/20 group-hover:text-[#C7B390]/10 group-hover:-translate-y-4 transition-all duration-700 select-none pointer-events-none">
                  {domain.id}
                </div>
                <div className="relative z-10 flex flex-col h-full">
                  <span className="text-[#C7B390] font-mono tracking-widest text-sm mb-6">
                    {domain.id} //
                  </span>
                  <h4 className="text-2xl xl:text-3xl font-bold uppercase tracking-wide text-[#fcfcfc] mb-6 group-hover:text-[#C7B390] transition-colors duration-500">
                    {domain.title}
                  </h4>
                  <p className="text-gray-400 text-lg leading-relaxed mt-auto">
                    {domain.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="flex flex-col border-t border-neutral-800 bg-[#060606]">
        {/* Row 1: Business Domain */}
        <Link
          href={"/business"}
          className="group flex flex-col md:flex-row justify-between items-start md:items-center py-10 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-30 border-b border-neutral-800 hover:bg-neutral-900/40 transition-colors duration-500"
        >
          <div className="md:w-1/2 mb-8 md:mb-0">
            <span className="text-[#C7B390] text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
               Capabilities
            </span>
            <h3 className="text-5xl md:text-7xl font-bold uppercase tracking-tight text-[#fcfcfc] group-hover:text-[#C7B390] transition-colors duration-500">
              Business <br /> Domain
            </h3>
          </div>
          <div className="md:w-1/2 flex flex-col md:items-end md:text-right">
            <p className="text-xl text-gray-400 max-w-md mb-8 group-hover:text-gray-200 transition-colors duration-500 leading-relaxed">
              Our approach blends capital allocation, strategic management, and venture creation to build scalable and resilient businesses.
            </p>
            <div className="w-16 h-16 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-[#C7B390] group-hover:bg-[#C7B390] transition-all duration-500">
              <ArrowRight
                className="text-[#fcfcfc] group-hover:text-[#060606] group-hover:translate-x-2 transition-transform duration-500"
                size={32}
              />
            </div>
          </div>
        </Link>

        {/* Row 2: Contact Us */}
        <Link
          href={"/contact"}
          className="group flex flex-col md:flex-row justify-between items-start md:items-center py-10 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-30 border-b border-neutral-800 hover:bg-neutral-900/40 transition-colors duration-500"
        >
          <div className="md:w-1/2 mb-8 md:mb-0">
            <span className="text-[#C7B390] text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
              Connect
            </span>
            <h3 className="text-5xl md:text-7xl font-bold uppercase tracking-tight text-[#fcfcfc] group-hover:text-[#C7B390] transition-colors duration-500">
              Contact 
            </h3>
          </div>
          <div className="md:w-1/2 flex flex-col md:items-end md:text-right">
            <p className="text-xl text-gray-400 max-w-md mb-8 group-hover:text-gray-200 transition-colors duration-500 leading-relaxed">
              MAGNECRON collaborates with investors, founders, and strategic partners seeking to build long-term value.
            </p>
            <div className="w-16 h-16 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-[#C7B390] group-hover:bg-[#C7B390] transition-all duration-500">
              <ArrowRight
                className="text-[#fcfcfc] group-hover:text-[#060606] group-hover:translate-x-2 transition-transform duration-500"
                size={32}
              />
            </div>
          </div>
        </Link>
      </section>
    </div>
  );
};

export default Homepage;