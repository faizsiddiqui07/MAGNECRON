"use client";

import { ChevronRight } from "lucide-react";
import React, { useState, useRef } from "react";
import CapitalImage from "../../../assets/CapitalImage.webp";

const CapitalPage = () => {
  const [activeTab, setActiveTab] = useState("financial");
  const contentRef = useRef(null);

  const handleTabClick = (id) => {
    setActiveTab(id);
    setTimeout(() => {
      if (contentRef.current) {
        const yOffset = -120;
        const y =
          contentRef.current.getBoundingClientRect().top +
          window.scrollY +
          yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 50);
  };

  const tabs = [
    { id: "financial", label: "Financial Consulting & Capital Structuring" },
    { id: "investment", label: "Investment & Venture Building" },
  ];

  return (
    <div className="animate-fade-in w-full grow">
      {/* Hero Image */}
      <div className="w-full h-[40vh] relative border-b border-[#fcfcfc]">
        <img
          src={CapitalImage.src}
          alt="Capital Markets"
          className="w-full h-full object-cover grayscale opacity-40"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-30 w-full">
            <h2 className="text-6xl md:text-8xl font-bold uppercase tracking-tight text-[#fcfcfc]">
              Capital
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
            {activeTab === "financial" && (
              <div className="animate-fade-in space-y-6 text-lg text-gray-300">
                <h3 className="text-3xl font-bold uppercase border-b border-neutral-800 pb-4 mb-8 text-[#fcfcfc]">
                  Financial Consulting & Capital Structuring
                </h3>
                <p className="leading-relaxed">
                  MAGNECRON provides strategic financial guidance and designs
                  capital structures tailored to the requirements of each
                  investment or enterprise.
                </p>
                <p className="leading-relaxed">
                  The firm works across equity, debt, and hybrid
                  instruments—ensuring efficient capital deployment, risk
                  alignment, and long-term sustainability.
                </p>
                <p className="leading-relaxed">
                  From early-stage ventures to large-scale asset development,
                  MAGNECRON structures capital frameworks that enable growth
                  while maintaining financial discipline.
                </p>
                <h4 className="text-2xl font-bold">Key Capabilities</h4>
                <ul className="list-none space-y-4 text-gray-400">
                  <li className="flex items-start">
                    <ChevronRight
                      size={20}
                      className="text-[#C7B390] mr-3 mt-1 shrink-0"
                    />{" "}
                    Capital structuring and financial modelling
                  </li>
                  <li className="flex items-start">
                    <ChevronRight
                      size={20}
                      className="text-[#C7B390] mr-3 mt-1 shrink-0"
                    />{" "}
                    Investment planning and feasibility analysis
                  </li>
                  <li className="flex items-start">
                    <ChevronRight
                      size={20}
                      className="text-[#C7B390] mr-3 mt-1 shrink-0"
                    />{" "}
                    Debt and equity structuring
                  </li>
                  <li className="flex items-start">
                    <ChevronRight
                      size={20}
                      className="text-[#C7B390] mr-3 mt-1 shrink-0"
                    />{" "}
                    Project and asset financing frameworks
                  </li>
                  <li className="flex items-start">
                    <ChevronRight
                      size={20}
                      className="text-[#C7B390] mr-3 mt-1 shrink-0"
                    />{" "}
                    Strategic financial advisory for business expansion
                  </li>
                </ul>
              </div>
            )}

            {activeTab === "investment" && (
              <div className="animate-fade-in space-y-6 text-lg text-gray-300">
                <h3 className="text-3xl font-bold uppercase border-b border-neutral-800 pb-4 mb-8 text-[#fcfcfc]">
                  Investment & Venture Building
                </h3>
                <p className="leading-relaxed">
                  MAGNECRON actively deploys capital into businesses, assets,
                  and emerging ventures with strong growth potential.
                </p>
                <p className="leading-relaxed">
                  Beyond investment, the firm participates in the development
                  and scaling of enterprises, providing strategic direction,
                  governance, and operational support.
                </p>
                <p className="leading-relaxed">
                  Each investment is approached as an opportunity to build
                  long-term enterprise value rather than short-term financial
                  returns.
                </p>
                <h4 className="text-2xl font-bold">Investment Approach</h4>
                <ul className="list-none space-y-4 text-gray-400">
                  <li className="flex items-start">
                    <ChevronRight
                      size={20}
                      className="text-[#C7B390] mr-3 mt-1 shrink-0"
                    />{" "}
                    Direct investments in businesses and projects
                  </li>
                  <li className="flex items-start">
                    <ChevronRight
                      size={20}
                      className="text-[#C7B390] mr-3 mt-1 shrink-0"
                    />{" "}
                    Participation in venture development and new enterprises
                  </li>
                  <li className="flex items-start">
                    <ChevronRight
                      size={20}
                      className="text-[#C7B390] mr-3 mt-1 shrink-0"
                    />{" "}
                    Strategic partnerships and co-investments
                  </li>
                  <li className="flex items-start">
                    <ChevronRight
                      size={20}
                      className="text-[#C7B390] mr-3 mt-1 shrink-0"
                    />
                    Long-term capital commitment and portfolio integration
                  </li>
                  <li className="flex items-start">
                    <ChevronRight
                      size={20}
                      className="text-[#C7B390] mr-3 mt-1 shrink-0"
                    />{" "}
                    Active involvement in business growth and expansion
                  </li>
                </ul>

                <div className="inline-block border border-neutral-800 bg-[#0a0a0a] px-8 py-5 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#C7B390]"></div>
                  <p className="text-[#C7B390] font-bold uppercase tracking-widest text-sm relative z-10">
                    MAGNECRON integrates capital, strategy, and enterprise
                    development—ensuring that investments are not only funded,
                    but built into enduring businesses.
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

export default CapitalPage;
