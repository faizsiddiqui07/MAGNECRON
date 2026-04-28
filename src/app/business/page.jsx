import { ArrowRight } from "lucide-react";
import Link from "next/link";
import CapitalImage from "../../assets/CapitalImage.webp";
import PortfolioImage from "../../assets/PortfolioImage.webp";
import VentureImage from "../../assets/VentureImage.webp";

export const metadata = {
  title: "Business Domains – Core Investment Pillars of Magnecron | MAGNECRON",
  description: "Magnecron's investment framework is built on three core pillars - Capital, Portfolio, Venture",
  alternates: {
    canonical: "https://magnecron.com/business",
  },
};

const BusinessDomainPage = () => {
  const domains = [
    {
      title: "Capital",
      to: "business/capital",
      image: CapitalImage,
      desc: "Strategic Capital Deployment",
      details:
        "MAGNECRON operates as a capital platform that structures, deploys, and manages investments across businesses, assets, and emerging opportunities. The firm combines financial discipline with enterprise thinking to create scalable and enduring value.",
    },
    {
      title: "Portfolio",
      to: "business/portfolio",
      image: PortfolioImage,
      desc: "Portfolio & Asset Stewardship",
      details:
        "MAGNECRON manages a diversified portfolio of businesses and assets across strategic sectors. Through active ownership and disciplined oversight, the firm seeks to build long-term value, strengthen operations, and guide enterprises toward sustainable growth.",
    },
    {
      title: "Venture",
      to: "business/venture",
      image: VentureImage,
      desc: "Building Emerging Enterprises",
      details:
        "MAGNECRON Ventures is a structured platform for the creation, development, and scaling of businesses across strategic sectors. The firm combines capital, strategic direction, and operational discipline to transform ideas into enterprises with long-term economic value.",
    },
  ];

  return (
    <div className="animate-fade-in w-full grow">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-30 py-16 md:pt-24 md:pb-16">
        <div className="mb-16 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold uppercase tracking-tight mb-6 text-[#fcfcfc]">
            Business Domain
          </h2>
          <p className="text-xl text-gray-400">
            Magnecron's investment framework is built on three core pillars.
            Each domain is highly specialized yet deeply integrated into our
            overarching investment philosophy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-8">
          {domains.map((domain, index) => (
            <Link
              href={`/${domain.to}`}
              key={index}
              className="group bg-neutral-900 border border-neutral-800 hover:border-[#C7B390] transition-all duration-300 hover:shadow-2xl flex flex-col h-full"
            >
              <div className="h-64 overflow-hidden border-b border-neutral-800 group-hover:border-[#C7B390] transition-colors">
                <img
                  src={domain.image.src}
                  alt={domain.title}
                  className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-4 lg:p-6 xl:p-8 grow">
                <h3 className="text-3xl font-bold uppercase tracking-widest mb-4 border-l-4 border-transparent group-hover:border-[#C7B390] pl-0 group-hover:pl-4 transition-all duration-300 text-[#fcfcfc] group-hover:text-[#C7B390]">
                  {domain.title}
                </h3>
                <p className="text-xl font-medium mb-6 text-gray-300">
                  {domain.desc}
                </p>
                <p className="text-gray-400 leading-relaxed">
                  {domain.details}
                </p>
              </div>
              <div className="bg-[#C7B390] text-[#060606] p-6 cursor-pointer hover:bg-[#fcfcfc] transition-colors flex justify-between items-center mt-auto">
                <span className="uppercase tracking-widest text-sm font-bold">
                  Explore {domain.title}
                </span>
                <ArrowRight size={20} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessDomainPage;
