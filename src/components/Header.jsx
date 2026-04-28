"use client";

import { Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../assets/LOGO.webp";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Scroll to top and close menu on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { id: "firm", label: "The Firm" },
    { id: "business", label: "Business Domain" },
    { id: "investment", label: "Investment" },
    { id: "contact", label: "Contact" },
  ];

  const isActive = (path) => pathname === `/${path}`;

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#060606] border-b border-neutral-800 shadow-xl">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-30">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <Link
              href="/"
              className="shrink-0 flex items-center cursor-pointer relative z-50"
            >
              <img
                src={logo.src}
                className="w-48 sm:w-67.5 object-contain"
                alt="Magnecron Logo"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-6 lg:space-x-4 xl:space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={`/${link.id}`}
                  className={`text-xs xl:text-sm tracking-[0.2em] uppercase transition-all duration-300 relative group ${
                    isActive(link.id)
                      ? "font-bold text-[#C7B390]"
                      : "font-normal text-gray-400 hover:text-[#C7B390]"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-2 left-0 w-full h-0.5 bg-[#C7B390] transform origin-left transition-transform duration-300 ${
                      isActive(link.id)
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  ></span>
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Toggle Button */}
            <div className="lg:hidden flex items-center relative z-50">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-[#fcfcfc] hover:text-[#C7B390] transition-colors focus:outline-none p-2"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Full-Screen Overlay */}
      <div
        className={`fixed inset-0 top-0 bg-[#060606]/95 backdrop-blur-md z-40 transition-all duration-500 ease-in-out lg:hidden flex flex-col justify-center ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-full invisible"
        }`}
      >
        <div className="flex flex-col items-center justify-center space-y-8 px-6">
          {navLinks.map((link, index) => (
            <Link
              key={link.id}
              href={`/${link.id}`}
              style={{
                transitionDelay: isMobileMenuOpen ? `${index * 100}ms` : "0ms",
              }}
              className={`text-2xl sm:text-3xl tracking-[0.2em] uppercase text-center transition-all duration-500 transform ${
                isMobileMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              } ${
                isActive(link.id)
                  ? "font-bold text-[#C7B390]"
                  : "text-gray-400 hover:text-[#C7B390] hover:scale-110"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <div
            className={`mt-12 w-24 h-0.5 bg-neutral-800 transition-all duration-700 delay-500 ${
              isMobileMenuOpen ? "scale-100" : "scale-0"
            }`}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Header;
