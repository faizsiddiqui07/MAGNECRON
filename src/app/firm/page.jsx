"use client";

import { ChevronRight, Dot, Shield } from "lucide-react";
import React, { useState, useRef } from "react";
import firmImage from "../../assets/FirmImage.webp";

const TheFirmPage = () => {
  const [activeTab, setActiveTab] = useState("about");
  const contentRef = useRef(null);

  const handleTabClick = (id) => {
    setActiveTab(id);
    setTimeout(() => {
      if (contentRef.current) {
        const yOffset = -120; // Header margin offset
        const y = contentRef.current.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 50);
  };

  const tabs = [
    { id: "about", label: "About Magnecron" },
    { id: "philosophy", label: "Our Philosophy" },
    { id: "leadership", label: "Leadership" },
    { id: "governance", label: "Governance" },
  ];

  return (
    <div className="animate-fade-in w-full grow ">
      {/* Firm Hero Image */}
      <div className="w-full h-[40vh] relative border-b border-[#fcfcfc]">
        <img
          src={firmImage.src}
          alt="Firm Headquarters"
          className="w-full h-full object-cover grayscale opacity-40"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-30 w-full">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold uppercase tracking-tight text-[#fcfcfc]">
              The Firm
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
            {activeTab === "about" && (
              <div className="animate-fade-in space-y-6 text-lg text-gray-300">
                <h3 className="text-3xl font-bold uppercase border-b border-neutral-800 pb-4 mb-8 text-[#fcfcfc]">
                  About Magnecron
                </h3>
                <p className="leading-relaxed">
                  MAGNECRON operates as an investment platform and holding
                  structure designed to build and manage diversified portfolios
                  of high-growth businesses.
                </p>
                <p className="leading-relaxed">
                  The firm focuses on identifying opportunities where capital,
                  strategic leadership, and operational capability can
                  accelerate growth and create long-term value.
                </p>
                <div className="bg-neutral-900 p-4 sm:p-6 md:p-8 mt-8 border-l-4 border-[#fcfcfc] text-[#fcfcfc]">
                  <h4 className="font-bold uppercase tracking-widest text-sm mb-2 text-gray-400">
                    Our Vision
                  </h4>
                  <p className="italic">
                    "To become a globally respected investment and holding
                    institution - creating enduring wealth ecosystems across
                    diversified sectors."
                  </p>
                </div>

                <div className="bg-neutral-900 p-4 sm:p-6 md:p-8 mt-8 border-l-4 border-[#fcfcfc] text-[#fcfcfc]">
                  <h4 className="font-bold uppercase tracking-widest text-sm mb-2 text-gray-400">
                    Our Mission
                  </h4>
                  <p className="italic">
                    "To strategically manage assets, portfolios, and ventures
                    through disiplined capital allocation, intelligent risk
                    management, and long-term growth frameworks."
                  </p>
                </div>

                <div className="mt-16">
                  <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-[#C7B390]">
                    Our Core Values
                  </h4>
                  <div className="flex flex-col border-t border-neutral-800">
                    {[
                      {
                        title: "Integrity",
                        desc: "Transparent and responsible investment practices.",
                      },
                      {
                        title: "Discipline",
                        desc: "Structured financial strategy over speculation.",
                      },
                      {
                        title: "Innovation",
                        desc: "Adaptive and future-ready investment thinking.",
                      },
                      {
                        title: "Partnership",
                        desc: "Deep collaboration with ventures and stakeholders.",
                      },
                      {
                        title: "Sustainability",
                        desc: "Long-term value over short-term profits.",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="group flex flex-col md:flex-row md:items-center py-4 border-b border-neutral-800 hover:bg-neutral-900/40 transition-colors duration-500 px-4 -mx-4 cursor-default"
                      >
                        <h5 className="text-lg font-bold text-[#fcfcfc] uppercase tracking-wider md:w-[25%] mb-2 md:mb-0 group-hover:text-[#C7B390] group-hover:translate-x-2 transition-all duration-500">
                          {item.title}
                        </h5>
                        <p className="text-gray-400 md:w-[75%] text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-500">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "philosophy" && (
              <div className="animate-fade-in space-y-6 text-lg text-gray-300">
                <h3 className="text-3xl font-bold uppercase border-b border-neutral-800 pb-4 mb-8 text-[#fcfcfc]">
                  Our Philosophy
                </h3>
                <p className="leading-relaxed">
                  At MAGNECRON, investment is viewed as a process of enterprise
                  creation rather than financial speculation.
                </p>
                <ul className="space-y-8 mt-12">
                  <li className="flex flex-col md:flex-row gap-6 items-start">
                    <span className="shrink-0 bg-[#fcfcfc] text-[#060606] w-8 sm:w-12 h-8 sm:h-12 hidden md:flex items-center justify-center font-bold text-xl">
                      1
                    </span>
                    <div className="flex items-center gap-x-5 md:hidden">
                      <span className="shrink-0 bg-[#fcfcfc] text-[#060606] w-8 sm:w-12 h-8 sm:h-12 flex items-center justify-center font-bold text-xl">
                        1
                      </span>
                      <h4 className="font-bold uppercase tracking-wider text-[#fcfcfc]">
                        Strategic Capital
                      </h4>
                    </div>
                    <div>
                      <h4 className="hidden md:block font-bold uppercase tracking-wider mb-2 text-[#fcfcfc]">
                        Strategic Capital
                      </h4>
                      <p className="text-gray-400">
                        Capital must be structured with clarity, discipline, and
                        long-term vision. <br />
                        MAGNECRON deploys capital where structural growth and
                        innovation intersect.
                      </p>
                    </div>
                  </li>
                  <li className="flex flex-col md:flex-row gap-6 items-start">
                    <span className="shrink-0 bg-[#fcfcfc] text-[#060606] w-8 sm:w-12 h-8 sm:h-12 hidden md:flex items-center justify-center font-bold text-xl">
                      2
                    </span>
                    <div className="flex items-center gap-x-5 md:hidden">
                      <span className="shrink-0 bg-[#fcfcfc] text-[#060606] w-8 sm:w-12 h-8 sm:h-12 flex items-center justify-center font-bold text-xl">
                        2
                      </span>
                      <h4 className="font-bold uppercase tracking-wider text-[#fcfcfc]">
                        Active Ownership
                      </h4>
                    </div>
                    <div>
                      <h4 className="hidden md:block font-bold uppercase tracking-wider mb-2 text-[#fcfcfc]">
                        Active Ownership
                      </h4>
                      <p className="text-gray-400">
                        True value is created when investors participate in the
                        strategic direction of enterprises. <br />
                        MAGNECRON actively supports portfolio companies with
                        strategic guidance, partnerships, and operational
                        insights.
                      </p>
                    </div>
                  </li>
                  <li className="flex flex-col md:flex-row gap-6 items-start">
                    <span className="shrink-0 bg-[#fcfcfc] text-[#060606] w-8 sm:w-12 h-8 sm:h-12 hidden md:flex items-center justify-center font-bold text-xl">
                      3
                    </span>
                    <div className="flex items-center gap-x-5 md:hidden">
                      <span className="shrink-0 bg-[#fcfcfc] text-[#060606] w-8 sm:w-12 h-8 sm:h-12 flex items-center justify-center font-bold text-xl">
                        3
                      </span>
                      <h4 className="font-bold uppercase tracking-wider text-[#fcfcfc]">
                       Long-Term Value
                      </h4>
                    </div>
                    <div>
                      <h4 className="hidden md:block font-bold uppercase tracking-wider mb-2 text-[#fcfcfc]">
                        Long-Term Value
                      </h4>
                      <p className="text-gray-400">
                        The most meaningful wealth is created through
                        compounding growth over time. <br />
                        Our investment horizon is designed to prioritize
                        resilience, scalability, and lasting value.
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="mt-16 bg-[#0a0a0a] border border-neutral-800 p-4 sm:p-8 md:p-12 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#C7B390]"></div>
                  <h4 className="text-xl md:text-2xl font-light text-[#fcfcfc] mb-10">
                    True wealth is built at the intersection of{" "}
                    <span className="text-[#C7B390] font-serif italic">—</span>
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {[
                      "Strategic Vision",
                      "Financial Intelligence",
                      "Operational Execution",
                      "Long-Term Discipline",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center">
                        <span className="text-[#C7B390] text-sm">
                          <Dot size={40} />
                        </span>
                        <span className="text-sm font-bold uppercase tracking-widest text-gray-300 group-hover:text-[#fcfcfc] transition-colors duration-500">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-10 mb-8">
                  <h4 className="font-bold uppercase tracking-widest text-sm mb-8 text-gray-500">
                    We Believe In
                  </h4>
                  <ul className="space-y-6 mb-12 border-l border-neutral-800 pl-6 md:pl-8 ml-2">
                    <li className="text-xl font-light text-[#fcfcfc] leading-relaxed relative">
                      <span className="absolute -left-8.25 md:-left-9.25 top-5 w-3 h-0.5 bg-[#C7B390]"></span>
                      Owning strong businesses, not chasing short-term returns.
                    </li>
                    <li className="text-xl font-light text-[#fcfcfc] leading-relaxed relative">
                      <span className="absolute -left-8.25 md:-left-9.25 top-5 w-3 h-0.5 bg-[#C7B390]"></span>
                      Building asset-backed portfolios with predictable cash
                      flows.
                    </li>
                    <li className="text-xl font-light text-[#fcfcfc] leading-relaxed relative">
                      <span className="absolute -left-8.25 md:-left-9.25 top-5 w-3 h-0.5 bg-[#C7B390]"></span>
                      Creating systems that compound value over decades.
                    </li>
                  </ul>

                  <div className="inline-block border border-neutral-800 bg-[#060606] px-6 py-4">
                    <p className="text-[#C7B390] font-bold uppercase tracking-widest text-sm">
                      Our approach blends institutional-grade investment
                      thinking with entrepreneurial agility.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "leadership" && (
              <div className="animate-fade-in">
                <h3 className="text-3xl font-bold uppercase border-b border-neutral-800 pb-4 mb-8 text-[#fcfcfc]">
                  Leadership
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  MAGNECRON is guided by a leadership team committed to building
                  enduring enterprises through thoughtful capital allocation and
                  long-term strategic vision.
                  <br />
                  <br />
                  The firm brings together expertise across investment
                  management, real assets, technology, and enterprise
                  development—ensuring that every decision is aligned with
                  sustainable value creation.
                  <br />
                  <br />
                  Leadership at MAGNECRON is not defined by hierarchy, but by
                  stewardship—the responsibility to manage capital, guide
                  businesses, and shape outcomes with integrity and foresight.
                </p>

                <div className="my-12 sm:my-14 md:my-16">
                  <h4 className="font-bold uppercase tracking-widest text-sm mb-10 text-[#C7B390] border-l-2 border-[#C7B390] pl-4">
                    Leadership Principles
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                    {[
                      {
                        title: "Strategic Clarity",
                        desc: "Decisions are grounded in long-term vision rather than short-term movement.",
                      },
                      {
                        title: "Capital Discipline",
                        desc: "Every allocation is measured, structured, and aligned with value creation.",
                      },
                      {
                        title: "Enterprise Thinking",
                        desc: "Focus on building businesses, not just making investments.",
                      },
                      {
                        title: "Responsibility & Integrity",
                        desc: "Commitment to transparency, ethics, and trust.",
                      },
                      {
                        title: "Adaptive Perspective",
                        desc: "Ability to evolve with markets, technology, and global change.",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="group border-t border-neutral-800 pt-6 hover:border-[#C7B390] transition-colors duration-500"
                      >
                        <span className="text-xs font-mono text-neutral-600 mb-3 block group-hover:text-[#C7B390] transition-colors duration-500">
                          0{index + 1} //
                        </span>
                        <h5 className="text-xl font-bold text-[#fcfcfc] uppercase tracking-wider mb-3 group-hover:text-[#C7B390] group-hover:translate-x-1 transition-all duration-500">
                          {item.title}
                        </h5>
                        <p className="text-gray-400 text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-500">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="inline-block border border-neutral-800 bg-[#0a0a0a] p-4 sm:p-6 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#C7B390]"></div>
                  <p className="text-[#C7B390] font-bold uppercase tracking-widest text-sm relative z-10">
                    MAGNECRON’s leadership approach ensures that capital is not
                    only deployed—but guided with purpose.
                  </p>
                </div>
              </div>
            )}

            {activeTab === "governance" && (
              <div className="animate-fade-in space-y-6 text-lg text-gray-300">
                <h3 className="text-3xl font-bold uppercase border-b border-neutral-800 pb-4 mb-8 text-[#fcfcfc]">
                  Governance
                </h3>
                <p className="leading-relaxed mb-6">
                  MAGNECRON operates with a structured governance framework
                  designed to ensure accountability, transparency, and
                  disciplined decision-making across all levels of the
                  organisation.
                  <br />
                  <br />
                  The firm adheres to principles that align the interests of
                  investors, partners, and stakeholders while maintaining
                  operational integrity and strategic oversight.
                  <br />
                  <br />
                  Governance at MAGNECRON is not a formality—it is a core
                  mechanism that safeguards capital and sustains long-term value
                  creation.
                </p>

                <div className="my-12 sm:my-14 md:my-16">
                  <h4 className="font-bold uppercase tracking-widest text-sm mb-10 text-[#C7B390] border-l-2 border-[#C7B390] pl-4">
                    Governance Framework
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                    {[
                      {
                        title: "Transparency",
                        desc: "Clear communication and disclosure across investment activities and operations.",
                      },
                      {
                        title: "Accountability",
                        desc: "Defined responsibilities across leadership, management, and portfolio oversight.",
                      },
                      {
                        title: "Risk Management",
                        desc: "Continuous evaluation of financial, operational, and market risks.",
                      },
                      {
                        title: "Compliance & Ethics",
                        desc: "Adherence to legal frameworks and ethical business practices.",
                      },
                      {
                        title: "Investor Alignment",
                        desc: "Ensuring decisions are aligned with long-term investor interests.",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="group border-t border-neutral-800 pt-6 hover:border-[#C7B390] transition-colors duration-500"
                      >
                        <span className="text-xs font-mono text-neutral-600 mb-3 block group-hover:text-[#C7B390] transition-colors duration-500">
                          0{index + 1} //
                        </span>
                        <h5 className="text-xl font-bold text-[#fcfcfc] uppercase tracking-wider mb-3 group-hover:text-[#C7B390] group-hover:translate-x-1 transition-all duration-500">
                          {item.title}
                        </h5>
                        <p className="text-gray-400 text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-500">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="inline-block border border-neutral-800 bg-[#0a0a0a] p-4 sm:p-6 md:p-8 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#C7B390]"></div>
                  <p className="text-[#C7B390] font-bold uppercase tracking-widest text-sm relative z-10">
                    MAGNECRON’s governance framework ensures that growth is
                    built on discipline, and value is protected through
                    structure.
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

export default TheFirmPage;