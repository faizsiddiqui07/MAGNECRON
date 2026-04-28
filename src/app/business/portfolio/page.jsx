"use client";

import { ChevronRight } from "lucide-react";
import React, { useState, useRef } from "react";
import PortfolioImage from "../../../assets/PortfolioImage.webp";

const PortfolioPage = () => {
  const [activeTab, setActiveTab] = useState("assets");
  const contentRef = useRef(null);

  const handleTabClick = (id) => {
    setActiveTab(id);
    setTimeout(() => {
      if (contentRef.current) {
        const yOffset = -120;
        const y = contentRef.current.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 50);
  };

  const tabs = [
    { id: "assets", label: "Assets & Investment Management" },
    { id: "portfolio", label: "Portfolio Management" },
    { id: "holding", label: "Holding & Strategic Control" },
    { id: "strategy", label: "Business Strategy & Planning" },
  ];

  return (
    <div className="animate-fade-in w-full grow">
      {/* Hero Image */}
      <div className="w-full h-[40vh] relative border-b border-[#fcfcfc]">
        <img
          src={PortfolioImage.src}
          alt="Portfolio Management"
          className="w-full h-full object-cover grayscale opacity-40"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-30 w-full">
            <h2 className="text-6xl md:text-8xl font-bold uppercase tracking-tight text-[#fcfcfc]">
              Portfolio
            </h2>
          </div>
        </div>
      </div>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-30 py-12 md:pt-24 md:pb-16">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Sidebar Navigation */}
          <aside className="md:w-1/4 shrink-0">
            <div className="sticky top-32 flex flex-col space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`text-left px-4 py-4 text-sm tracking-widest uppercase transition-all duration-200 border-l-4 flex justify-between items-center ${
                    activeTab === tab.id
                      ? "border-[#C7B390] bg-[#C7B390] text-[#060606] font-bold pl-6"
                      : "border-transparent text-gray-500 hover:bg-neutral-900 hover:text-[#C7B390] hover:border-[#C7B390]"
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && <ChevronRight size={16} />}
                </button>
              ))}
            </div>
          </aside>

          {/* Right Content Area */}
          <div className="md:w-3/4 min-h-[50vh]" ref={contentRef}>
            {activeTab === "assets" && (
              <div className="animate-fade-in space-y-6 text-lg text-gray-300">
                <h3 className="text-3xl font-bold uppercase border-b border-neutral-800 pb-4 mb-8 text-[#fcfcfc]">
                  Assets & Investment Management
                </h3>
                <p className="leading-relaxed">
                 MAGNECRON oversees investments across real assets, operating businesses, and strategic platforms.
                </p>
                <p className="leading-relaxed">
                  The firm focuses on identifying high-potential opportunities and managing them through structured capital allocation and continuous performance evaluation.
                </p>
                <h4 className="text-2xl font-bold">Scope</h4>
                <ul className="list-none space-y-4 text-gray-400">
                  <li className="flex items-start">
                    <ChevronRight
                      size={20}
                      className="text-[#C7B390] mr-3 mt-1 shrink-0"
                    />{" "}
                    Real estate and built assets
                  </li>
                  <li className="flex items-start">
                    <ChevronRight
                      size={20}
                      className="text-[#C7B390] mr-3 mt-1 shrink-0"
                    />{" "}
                    Operating businesses and ventures
                  </li>
                  <li className="flex items-start">
                    <ChevronRight
                      size={20}
                      className="text-[#C7B390] mr-3 mt-1 shrink-0"
                    />{" "}
                    Strategic investments across sectors
                  </li>
                  <li className="flex items-start">
                    <ChevronRight
                      size={20}
                      className="text-[#C7B390] mr-3 mt-1 shrink-0"
                    />
                    Long-term capital holdings
                  </li>
                </ul>
              </div>
            )}

            {activeTab === "portfolio" && (
              <div className="animate-fade-in space-y-6 text-lg text-gray-300">
                <h3 className="text-3xl font-bold uppercase border-b border-neutral-800 pb-4 mb-8 text-[#fcfcfc]">
                  Portfolio Management
                </h3>
                <p className="leading-relaxed">
                 MAGNECRON applies a disciplined approach to managing its portfolio, ensuring alignment between capital deployment, operational performance, and long-term objectives.
                </p>
                <p className="leading-relaxed">
                  Each asset and business is continuously evaluated, optimized, and positioned for growth.
                </p>
                <h4 className="text-2xl font-bold">Approach</h4>
                <ul className="list-none space-y-4 text-gray-400">
                  <li className="flex items-start">
                    <ChevronRight
                      size={20}
                      className="text-[#C7B390] mr-3 mt-1 shrink-0"
                    />{" "}
                    Performance monitoring and evaluation
                  </li>
                  <li className="flex items-start">
                    <ChevronRight
                      size={20}
                      className="text-[#C7B390] mr-3 mt-1 shrink-0"
                    />{" "}
                    Capital reallocation and optimization
                  </li>
                  <li className="flex items-start">
                    <ChevronRight
                      size={20}
                      className="text-[#C7B390] mr-3 mt-1 shrink-0"
                    />{" "}
                    Operational oversight and strategic alignment
                  </li>
                  <li className="flex items-start">
                    <ChevronRight
                      size={20}
                      className="text-[#C7B390] mr-3 mt-1 shrink-0"
                    />
                    Risk management and value enhancement
                  </li>
                </ul>
              </div>
            )}

            {activeTab === "holding" && (
              <div className="animate-fade-in space-y-6 text-lg text-gray-300">
                <h3 className="text-3xl font-bold uppercase border-b border-neutral-800 pb-4 mb-8 text-[#fcfcfc]">
                  Holding & Strategic Control
                </h3>
                <p className="leading-relaxed">
                 MAGNECRON operates as a holding entity with ownership and control across its portfolio companies.
                </p>
                <p className="leading-relaxed">
                 The firm maintains strategic oversight to guide decision-making, ensure governance, and align businesses with long-term institutional objectives.
                </p>
                <h4 className="text-2xl font-bold">Role</h4>
                <ul className="list-none space-y-4 text-gray-400">
                  <li className="flex items-start">
                    <ChevronRight
                      size={20}
                      className="text-[#C7B390] mr-3 mt-1 shrink-0"
                    />{" "}
                    Equity ownership and control structures
                  </li>
                  <li className="flex items-start">
                    <ChevronRight
                      size={20}
                      className="text-[#C7B390] mr-3 mt-1 shrink-0"
                    />{" "}
                    Board-level and strategic oversight
                  </li>
                  <li className="flex items-start">
                    <ChevronRight
                      size={20}
                      className="text-[#C7B390] mr-3 mt-1 shrink-0"
                    />{" "}
                   Integration across portfolio companies
                  </li>
                  <li className="flex items-start">
                    <ChevronRight
                      size={20}
                      className="text-[#C7B390] mr-3 mt-1 shrink-0"
                    />
                    Long-term value preservation and growth
                  </li>
                </ul>
              </div>
            )}

            {activeTab === "strategy" && (
              <div className="animate-fade-in space-y-6 text-lg text-gray-300">
                <h3 className="text-3xl font-bold uppercase border-b border-neutral-800 pb-4 mb-8 text-[#fcfcfc]">
                  Business Strategy & Planning
                </h3>
                <p className="leading-relaxed">
                 MAGNECRON supports its portfolio companies with strategic planning and enterprise development.
                </p>
                <p className="leading-relaxed">
                The firm works closely with management teams to define growth strategies, expand market presence, and improve operational efficiency.
                </p>
                <h4 className="text-2xl font-bold">Focus Areas</h4>
                <ul className="list-none space-y-4 text-gray-400">
                  <li className="flex items-start">
                    <ChevronRight
                      size={20}
                      className="text-[#C7B390] mr-3 mt-1 shrink-0"
                    />{" "}
                    Business expansion and scaling strategies
                  </li>
                  <li className="flex items-start">
                    <ChevronRight
                      size={20}
                      className="text-[#C7B390] mr-3 mt-1 shrink-0"
                    />{" "}
                    Market positioning and growth planning
                  </li>
                  <li className="flex items-start">
                    <ChevronRight
                      size={20}
                      className="text-[#C7B390] mr-3 mt-1 shrink-0"
                    />{" "}
                  Operational efficiency and optimisation
                  </li>
                  <li className="flex items-start">
                    <ChevronRight
                      size={20}
                      className="text-[#C7B390] mr-3 mt-1 shrink-0"
                    />
                    Long-term enterprise development
                  </li>
                </ul>

                <div className="inline-block border border-neutral-800 bg-[#0a0a0a] p-4 sm:p-6 md:p-8 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#C7B390]"></div>
                  <p className="text-[#C7B390] font-bold uppercase tracking-widest text-sm relative z-10">
                    MAGNECRON’s portfolio approach is built on ownership, discipline, and long-term vision—ensuring that every asset and enterprise contributes to sustained value creation.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;