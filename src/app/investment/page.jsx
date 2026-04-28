"use client";

import { ChevronRight } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import InvestmentImage from "../../assets/InvestmentImage.webp";


const InvestmentPage = () => {
  const [activeTab, setActiveTab] = useState("sharing");
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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []); // Initial load par top pe rakhe

  const tabs = [
    { id: "sharing", label: "Sharing Pool Investment" },
    { id: "debt", label: "Debt Pool Investment" },
  ];

  return (
    <div className="animate-fade-in w-full grow bg-[#060606]">
      {/* Hero Image Section */}
      <div className="w-full h-[40vh] relative border-b border-[#fcfcfc]">
        <img
          src={InvestmentImage.src}
          alt="Investment Pools"
          className="w-full h-full object-cover grayscale opacity-40"
        />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-30 w-full">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold uppercase tracking-tight text-[#fcfcfc]">
              Investments
            </h2>
          </div>
        </div>
      </div>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-30 pt-12 md:pt-24 md:pb-10">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Sidebar Navigation */}
          <aside className="md:w-1/4 shrink-0">
            <div className="sticky top-32 flex flex-col space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`text-left px-4 py-4 text-sm tracking-widest uppercase transition-all duration-300 border-l-4 flex justify-between items-center ${
                    activeTab === tab.id
                      ? "border-[#C7B390] bg-[#C7B390] text-[#060606] font-bold pl-6 shadow-lg shadow-[#C7B390]/10"
                      : "border-transparent text-gray-500 hover:bg-neutral-900/50 hover:text-[#C7B390] hover:border-[#C7B390]"
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
            {/* ======================================= */}
            {/* TAB 1: SHARING POOL INVESTMENT          */}
            {/* ======================================= */}
            {activeTab === "sharing" && (
              <div className="animate-fade-in space-y-6 text-lg text-gray-300">
                <h3 className="text-3xl font-bold uppercase border-b border-neutral-800 pb-4 mb-8 text-[#fcfcfc]">
                  Sharing Pool Investment
                </h3>
                <p className="leading-relaxed">
                  The Sharing Pool Investment model allows investors to
                  participate in equity-based opportunities, where capital is
                  deployed into projects and ventures alongside MAGNECRON.
                </p>
                <p className="leading-relaxed">
                  Returns are directly linked to the performance and
                  profitability of the underlying investments, creating
                  alignment between investors and the firm.
                </p>

                {/* 2-Column Grid Layout for Data */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 mt-16 mb-12">
                  {/* Structure */}
                  <div>
                    <h4 className="text-2xl font-bold text-[#fcfcfc] mb-6 border-l-2 border-[#C7B390] pl-4 uppercase tracking-wider">
                      Structure
                    </h4>
                    <ul className="list-none space-y-4 text-gray-400">
                      <li className="flex items-start">
                        <ChevronRight
                          size={20}
                          className="text-[#C7B390] mr-3 mt-1 shrink-0"
                        />
                        Capital is pooled and deployed into selected projects or
                        businesses
                      </li>
                      <li className="flex items-start">
                        <ChevronRight
                          size={20}
                          className="text-[#C7B390] mr-3 mt-1 shrink-0"
                        />
                        MAGNECRON manages investment execution and strategy
                      </li>
                      <li className="flex items-start">
                        <ChevronRight
                          size={20}
                          className="text-[#C7B390] mr-3 mt-1 shrink-0"
                        />
                        Profits are shared based on predefined participation
                        ratios
                      </li>
                      <li className="flex items-start">
                        <ChevronRight
                          size={20}
                          className="text-[#C7B390] mr-3 mt-1 shrink-0"
                        />
                        Investment tenure is aligned with project lifecycle
                      </li>
                    </ul>
                  </div>

                  {/* Investment Focus */}
                  <div>
                    <h4 className="text-2xl font-bold text-[#fcfcfc] mb-6 border-l-2 border-[#C7B390] pl-4 uppercase tracking-wider">
                      Investment Focus
                    </h4>
                    <ul className="list-none space-y-4 text-gray-400">
                      <li className="flex items-start">
                        <ChevronRight
                          size={20}
                          className="text-[#C7B390] mr-3 mt-1 shrink-0"
                        />
                        Real estate development and asset-backed projects
                      </li>
                      <li className="flex items-start">
                        <ChevronRight
                          size={20}
                          className="text-[#C7B390] mr-3 mt-1 shrink-0"
                        />
                        Hospitality and income-generating assets
                      </li>
                      <li className="flex items-start">
                        <ChevronRight
                          size={20}
                          className="text-[#C7B390] mr-3 mt-1 shrink-0"
                        />
                        Strategic ventures and business opportunities
                      </li>
                    </ul>
                  </div>

                  {/* Return Profile */}
                  <div>
                    <h4 className="text-2xl font-bold text-[#fcfcfc] mb-6 border-l-2 border-[#C7B390] pl-4 uppercase tracking-wider">
                      Return Profile
                    </h4>
                    <ul className="list-none space-y-4 text-gray-400">
                      <li className="flex items-start">
                        <ChevronRight
                          size={20}
                          className="text-[#C7B390] mr-3 mt-1 shrink-0"
                        />
                        Performance-linked returns
                      </li>
                      <li className="flex items-start">
                        <ChevronRight
                          size={20}
                          className="text-[#C7B390] mr-3 mt-1 shrink-0"
                        />
                        Participation in upside of projects
                      </li>
                      <li className="flex items-start">
                        <ChevronRight
                          size={20}
                          className="text-[#C7B390] mr-3 mt-1 shrink-0"
                        />
                        Potential for higher returns compared to fixed-income
                        models
                      </li>
                    </ul>
                  </div>

                  {/* Investor Advantage */}
                  <div>
                    <h4 className="text-2xl font-bold text-[#fcfcfc] mb-6 border-l-2 border-[#C7B390] pl-4 uppercase tracking-wider">
                      Investor Advantage
                    </h4>
                    <ul className="list-none space-y-4 text-gray-400">
                      <li className="flex items-start">
                        <ChevronRight
                          size={20}
                          className="text-[#C7B390] mr-3 mt-1 shrink-0"
                        />
                        Direct participation in real assets and businesses
                      </li>
                      <li className="flex items-start">
                        <ChevronRight
                          size={20}
                          className="text-[#C7B390] mr-3 mt-1 shrink-0"
                        />
                        Alignment with MAGNECRON’s own capital deployment
                      </li>
                      <li className="flex items-start">
                        <ChevronRight
                          size={20}
                          className="text-[#C7B390] mr-3 mt-1 shrink-0"
                        />
                        Transparent profit-sharing structure
                      </li>
                      <li className="flex items-start">
                        <ChevronRight
                          size={20}
                          className="text-[#C7B390] mr-3 mt-1 shrink-0"
                        />
                        Exposure to high-growth opportunities
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Summary Callout Box */}
                <div className="inline-block border border-neutral-800 bg-[#0a0a0a] p-4 sm:p-6 md:p-8 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#C7B390]"></div>
                  <p className="text-[#C7B390] font-bold uppercase tracking-widest text-sm relative z-10">
                    MAGNECRON’s investment pools are designed to provide
                    structured access to opportunities across assets,
                    businesses, and ventures, balancing growth potential with
                    disciplined capital management.
                  </p>
                </div>
              </div>
            )}

            {/* ======================================= */}
            {/* TAB 2: DEBT POOL INVESTMENT             */}
            {/* ======================================= */}
            {activeTab === "debt" && (
              <div className="animate-fade-in space-y-6 text-lg text-gray-300">
                <h3 className="text-3xl font-bold uppercase border-b border-neutral-800 pb-4 mb-8 text-[#fcfcfc]">
                  Debt Pool Investment
                </h3>
                <p className="leading-relaxed">
                  The Debt Pool Investment model provides investors with
                  structured fixed-return opportunities, where capital is
                  deployed as debt into projects and businesses.
                </p>
                <p className="leading-relaxed">
                  This model focuses on predictable returns with defined
                  timelines, supported by disciplined capital allocation.
                </p>

                {/* 2-Column Grid Layout for Data */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 mt-16 mb-12">
                  {/* Structure */}
                  <div>
                    <h4 className="text-2xl font-bold text-[#fcfcfc] mb-6 border-l-2 border-[#C7B390] pl-4 uppercase tracking-wider">
                      Structure
                    </h4>
                    <ul className="list-none space-y-4 text-gray-400">
                      <li className="flex items-start">
                        <ChevronRight
                          size={20}
                          className="text-[#C7B390] mr-3 mt-1 shrink-0"
                        />
                        Capital is deployed as structured debt into projects
                      </li>
                      <li className="flex items-start">
                        <ChevronRight
                          size={20}
                          className="text-[#C7B390] mr-3 mt-1 shrink-0"
                        />
                        Fixed or pre-agreed return rates
                      </li>
                      <li className="flex items-start">
                        <ChevronRight
                          size={20}
                          className="text-[#C7B390] mr-3 mt-1 shrink-0"
                        />
                        Defined tenure and repayment schedule
                      </li>
                      <li className="flex items-start">
                        <ChevronRight
                          size={20}
                          className="text-[#C7B390] mr-3 mt-1 shrink-0"
                        />
                        Priority return structure over equity participants
                      </li>
                    </ul>
                  </div>

                  {/* Investment Focus */}
                  <div>
                    <h4 className="text-2xl font-bold text-[#fcfcfc] mb-6 border-l-2 border-[#C7B390] pl-4 uppercase tracking-wider">
                      Investment Focus
                    </h4>
                    <ul className="list-none space-y-4 text-gray-400">
                      <li className="flex items-start">
                        <ChevronRight
                          size={20}
                          className="text-[#C7B390] mr-3 mt-1 shrink-0"
                        />
                        Short to mid-term project financing
                      </li>
                      <li className="flex items-start">
                        <ChevronRight
                          size={20}
                          className="text-[#C7B390] mr-3 mt-1 shrink-0"
                        />
                        Working capital for businesses
                      </li>
                      <li className="flex items-start">
                        <ChevronRight
                          size={20}
                          className="text-[#C7B390] mr-3 mt-1 shrink-0"
                        />
                        Asset-backed lending opportunities
                      </li>
                    </ul>
                  </div>

                  {/* Return Profile */}
                  <div>
                    <h4 className="text-2xl font-bold text-[#fcfcfc] mb-6 border-l-2 border-[#C7B390] pl-4 uppercase tracking-wider">
                      Return Profile
                    </h4>
                    <ul className="list-none space-y-4 text-gray-400">
                      <li className="flex items-start">
                        <ChevronRight
                          size={20}
                          className="text-[#C7B390] mr-3 mt-1 shrink-0"
                        />
                        Fixed or structured returns (e.g., 18%–24% p.a.
                        depending on structure)
                      </li>
                      <li className="flex items-start">
                        <ChevronRight
                          size={20}
                          className="text-[#C7B390] mr-3 mt-1 shrink-0"
                        />
                        Predictable income streams
                      </li>
                      <li className="flex items-start">
                        <ChevronRight
                          size={20}
                          className="text-[#C7B390] mr-3 mt-1 shrink-0"
                        />
                        Lower risk compared to equity participation
                      </li>
                    </ul>
                  </div>

                  {/* Investor Advantage */}
                  <div>
                    <h4 className="text-2xl font-bold text-[#fcfcfc] mb-6 border-l-2 border-[#C7B390] pl-4 uppercase tracking-wider">
                      Investor Advantage
                    </h4>
                    <ul className="list-none space-y-4 text-gray-400">
                      <li className="flex items-start">
                        <ChevronRight
                          size={20}
                          className="text-[#C7B390] mr-3 mt-1 shrink-0"
                        />
                        Stable and defined returns
                      </li>
                      <li className="flex items-start">
                        <ChevronRight
                          size={20}
                          className="text-[#C7B390] mr-3 mt-1 shrink-0"
                        />
                        Lower exposure to market volatility
                      </li>
                      <li className="flex items-start">
                        <ChevronRight
                          size={20}
                          className="text-[#C7B390] mr-3 mt-1 shrink-0"
                        />
                        Structured repayment frameworks
                      </li>
                      <li className="flex items-start">
                        <ChevronRight
                          size={20}
                          className="text-[#C7B390] mr-3 mt-1 shrink-0"
                        />
                        Priority in capital recovery
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Summary Callout Box */}
                <div className="inline-block border border-neutral-800 bg-[#0a0a0a] p-4 sm:p-6 md:p-8 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#C7B390]"></div>
                  <p className="text-[#C7B390] font-bold uppercase tracking-widest text-sm relative z-10">
                    MAGNECRON’s investment pools are designed to provide
                    structured access to opportunities across assets,
                    businesses, and ventures, balancing growth potential with
                    disciplined capital management.
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

export default InvestmentPage;
