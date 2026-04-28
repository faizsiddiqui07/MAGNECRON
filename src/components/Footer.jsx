import React from "react";
import logo from "../assets/LOGO.webp";
import Link from "next/link";
// Lucide se sirf normal icons aayenge (agar future mein chahiye), Brands ke liye react-icons
import { FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#060606] text-[#fcfcfc] pt-16 pb-8 border-t border-neutral-800">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-30">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="cursor-pointer z-50 inline-block">
              <img
                src={logo.src}
                className="w-48 sm:w-67.5 object-contain"
                alt="Magnecron Logo"
              />
            </Link>
            <p className="text-gray-400 max-w-md mt-6 leading-relaxed">
              Magnecron is not just an investment firm - it is a strategic
              wealth-building institution.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold tracking-widest uppercase mb-6 text-gray-500">
              Quick Links
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/firm"
                  className="text-gray-400 hover:text-[#C7B390] hover:pl-2 transition-all duration-300"
                >
                  The Firm
                </Link>
              </li>
              <li>
                <Link
                  href="/business"
                  className="text-gray-400 hover:text-[#C7B390] hover:pl-2 transition-all duration-300"
                >
                  Business Domain
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-[#C7B390] hover:pl-2 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h3 className="text-sm font-bold tracking-widest uppercase mb-6 text-gray-500">
              Connect With Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://linkedin.com/company/magnecron"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center text-gray-400 hover:text-[#C7B390] transition-colors"
                >
                  <FaLinkedin
                    size={18}
                    className="mr-3 group-hover:scale-110 transition-transform"
                  />
                  <span className="text-sm tracking-wider">LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/magnecron" 
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center text-gray-400 hover:text-[#C7B390] transition-colors"
                >
                  <FaXTwitter
                    size={18}
                    className="mr-3 group-hover:scale-110 transition-transform"
                  />
                  <span className="text-sm tracking-wider">X</span>
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com/magnecron" 
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center text-gray-400 hover:text-[#C7B390] transition-colors"
                >
                  <FaFacebook
                    size={18}
                    className="mr-3 group-hover:scale-110 transition-transform"
                  />
                  <span className="text-sm tracking-wider">Facebook</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold tracking-widest uppercase mb-4 text-gray-500">
              Legal
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/privacy" className="hover:text-[#C7B390] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#C7B390] transition-colors">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-neutral-800 pt-8 flex justify-center items-center gap-4">
          <p className="text-gray-500 text-sm text-center">
            &copy; {new Date().getFullYear()} Magnecron. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;