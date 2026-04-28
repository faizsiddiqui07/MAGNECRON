"use client";

import { ChevronRight } from "lucide-react";
import React, { useState, useRef } from "react";
import VentureImage from "../../../assets/VentureImage.webp";

const VenturePage = () => {
  const [expandedCategory, setExpandedCategory] = useState("sectors");
  const [activeTab, setActiveTab] = useState("tech_ai");
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

  const categories = [ 
    {
      id: "sectors",
      label: "Venture Strategic Sectors",
      subItems: [
        { id: "tech_ai", label: "Technology & Artificial Intelligence" },
        { id: "real_estate", label: "Real Estate Platforms" },
        { id: "agriculture", label: "Agriculture & Sustainability" },
        { id: "manufacturing", label: "Manufacturing & Industrial Innovation" },
        { id: "digital_infra", label: "Digital Infrastructure" },
      ],
    },
    {
      id: "architecture",
      label: "Venture Architecture",
      subItems: [
        { id: "idea", label: "Idea incubation" },
        { id: "partnerships", label: "Strategic partnerships" },
        { id: "capital", label: "Capital structuring" },
        { id: "growth", label: "Growth acceleration" },
        { id: "scaling", label: "Long-term scaling" },
      ],
    },
  ];

  const tabContent = {
    tech_ai: {
      title: "Technology & Artificial Intelligence",
      desc: [
        "MAGNECRON invests in platforms and systems that leverage artificial intelligence, automation, and advanced computing to redefine industries.",
        "The focus lies in building scalable digital businesses that improve efficiency, enable smarter decision-making, and create new market categories.",
      ],
      listHeading: "Key Areas",
      points: [
        "AI-driven platforms and tools",
        "Enterprise software and automation systems",
        "Data intelligence and analytics platforms",
        "Digital ecosystems and scalable applications"
      ]
    },
    real_estate: {
      title: "Real Estate Platforms",
      desc: [
        "MAGNECRON develops ventures that integrate real estate with technology and capital structuring to create modern ownership and investment ecosystems.",
        "These platforms aim to transform how assets are developed, managed, and accessed—bringing efficiency, transparency, and scalability to real estate markets."
      ],
      listHeading: "Key Areas",
      points: [
        "Fractional ownership platforms",
        "Real estate investment ecosystems",
        "Asset management and property technology",
        "Development-led investment models"
      ]
    },
    agriculture: {
      title: "Agriculture & Sustainability",
      desc: [
        "MAGNECRON builds ventures that align economic activity with environmental sustainability and long-term resource management.",
        "The firm focuses on agriculture, land development, and nature-integrated business models that respond to future global demand."
      ],
      listHeading: "Key Areas",
      points: [
        "Agri-technology and smart farming",
        "Sustainable land use and development",
        "Nature-based real estate and eco-assets",
        "Food systems and supply chain innovation"
      ]
    },
    manufacturing: {
      title: "Manufacturing & Industrial Innovation",
      desc: [
        "MAGNECRON supports ventures that enhance production efficiency, industrial processes, and manufacturing ecosystems.",
        "The objective is to build scalable industrial businesses that combine technology, process optimisation, and operational discipline."
      ],
      listHeading: "Key Areas",
      points: [
        "Advanced manufacturing systems",
        "Modular production and fabrication",
        "Industrial automation and efficiency tools",
        "Supply chain and production ecosystems"
      ]
    },
    digital_infra: {
      title: "Digital Infrastructure",
      desc: [
        "MAGNECRON invests in foundational systems that support the digital economy—creating the backbone for modern businesses and platforms.",
        "These ventures enable connectivity, data flow, and technological scalability across industries."
      ],
      listHeading: "Key Areas",
      points: [
        "Data infrastructure and digital networks",
        "Platform ecosystems and digital services",
        "Technology-enabled infrastructure systems",
        "Integration platforms for businesses"
      ]
    },
    idea: {
      title: "Idea Incubation",
      desc: [
        "The process begins with identifying ideas that demonstrate strong potential for scalability, differentiation, and long-term relevance.",
        "MAGNECRON evaluates opportunities based on market demand, structural trends, and the ability to build sustainable enterprises."
      ],
      listHeading: "Focus",
      points: [
        "Concept validation",
        "Market opportunity analysis",
        "Initial business structuring",
        "Feasibility and scalability assessment"
      ]
    },
    partnerships: {
      title: "Strategic Partnerships",
      desc: [
        "MAGNECRON collaborates with founders, domain experts, operators, and institutional partners to strengthen the foundation of each venture.",
        "Partnerships are designed to bring complementary capabilities, knowledge, and execution strength."
      ],
      listHeading: "Focus",
      points: [
        "Founder alignment and team building",
        "Strategic alliances and collaborations",
        "Domain expertise integration",
        "Institutional partnerships"
      ]
    },
    capital: {
      title: "Capital Structuring",
      desc: [
        "Capital is structured in a way that supports growth while maintaining financial discipline and risk alignment.",
        "MAGNECRON designs investment frameworks tailored to the specific requirements of each venture."
      ],
      listHeading: "Focus",
      points: [
        "Equity and ownership structuring",
        "Debt and hybrid financing models",
        "Capital allocation planning",
        "Risk and return alignment"
      ]
    },
    growth: {
      title: "Growth Acceleration",
      desc: [
        "Once established, ventures are actively supported in scaling operations, expanding markets, and strengthening business fundamentals.",
        "MAGNECRON provides strategic oversight to ensure efficient and sustainable growth."
      ],
      listHeading: "Focus",
      points: [
        "Market expansion strategies",
        "Operational development",
        "Revenue model optimisation",
        "Brand positioning and scale execution"
      ]
    },
    scaling: {
      title: "Long-Term Scaling",
      desc: [
        "MAGNECRON guides ventures toward maturity, stability, and long-term value creation.",
        "Successful ventures may evolve into independent enterprises, strategic holdings, or integrated components of the MAGNECRON ecosystem."
      ],
      listHeading: "Focus",
      points: [
        "Institutionalisation of business operations",
        "Market leadership positioning",
        "Long-term profitability and sustainability",
        "Integration into portfolio and holding structure"
      ]
    },
  };

  return (
    <div className="animate-fade-in w-full grow">
      <div className="w-full h-[40vh] relative border-b border-[#fcfcfc]">
        <img
          src={VentureImage.src}
          alt="Venture Capital"
          className="w-full h-full object-cover grayscale opacity-40"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-30 w-full">
            <h2 className="text-6xl md:text-8xl font-bold uppercase tracking-tight text-[#fcfcfc]">
              Venture
            </h2>
          </div>
        </div>
      </div>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-30 py-12 md:pt-24 md:pb-16">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Sidebar Navigation (Accordion) */}
          <aside className="md:w-1/3 lg:w-1/4 shrink-0">
            <div className="sticky top-32 flex flex-col space-y-4">
              {categories.map((category) => (
                <div key={category.id} className="flex flex-col">
                  {/* Category Header Button */}
                  <button
                    onClick={() =>
                      setExpandedCategory(
                        expandedCategory === category.id ? null : category.id,
                      )
                    }
                    className={`text-left px-4 py-3 text-sm font-bold tracking-widest uppercase border-b transition-colors flex justify-between items-center cursor-pointer ${
                      expandedCategory === category.id
                        ? "border-[#C7B390] text-[#C7B390]"
                        : "border-neutral-800 text-[#fcfcfc] hover:text-[#C7B390]"
                    }`}
                  >
                    <span>{category.label}</span>
                    <ChevronRight
                      size={16}
                      className={`transform transition-transform duration-300 ${expandedCategory === category.id ? "rotate-90" : ""}`}
                    />
                  </button>

                  {/* Sub Items Container */}
                  <div
                    className={`flex flex-col overflow-hidden transition-all duration-300 ease-in-out ${
                      expandedCategory === category.id
                        ? "max-h-125 transition-all delay-100 opacity-100 mt-2"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {category.subItems.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => handleTabClick(sub.id)}
                        className={`text-left cursor-pointer px-4 py-3 text-xs tracking-widest uppercase transition-all duration-200 border-l-2 ml-2 ${
                          activeTab === sub.id
                            ? "border-[#C7B390] text-[#C7B390] font-bold pl-6 bg-neutral-900/50"
                            : "border-neutral-800 text-gray-500 hover:text-[#fcfcfc] hover:border-gray-500 hover:pl-5"
                        }`}
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </aside>

          {/* Right Content Area */}
          <div className="md:w-2/3 lg:w-3/4 min-h-[50vh]" ref={contentRef}>
            <div className="animate-fade-in space-y-6 text-lg text-gray-300">
              <h3 className="text-3xl font-bold uppercase border-b border-neutral-800 pb-4 mb-8 text-[#fcfcfc]">
                {tabContent[activeTab].title}
              </h3>
              
              <div className="space-y-6 mb-8">
                {tabContent[activeTab].desc.map((paragraph, index) => (
                  <p key={index} className="leading-relaxed text-gray-300">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Rendering the Custom Bullet List */}
              {tabContent[activeTab].points && (
                <>
                  <h4 className="text-2xl font-bold text-[#fcfcfc] mt-12 mb-6">
                    {tabContent[activeTab].listHeading}
                  </h4>
                  <ul className="list-none space-y-4 text-gray-400">
                    {tabContent[activeTab].points.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <ChevronRight
                          size={20}
                          className="text-[#C7B390] mr-3 mt-1 shrink-0"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenturePage;