"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../assets/LOGO.webp";

const Preloader = ({ onLoadingComplete }) => {
  // Background scroll lock
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      onLoadingComplete();
    }, 2000); 

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    // Main Background Overlay
    <motion.div
      className="fixed inset-0 z-100 bg-[#060606] flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className="flex flex-col items-center justify-center relative">
        {/* Cinematic Logo Animation */}
        <motion.img
          src={logo.src}
          alt="Magnecron Logo"
          className="w-64 sm:w-80 md:w-112.5 lg:w-137.5 object-contain mb-8 md:mb-12"
          initial={{ scale: 1.1, opacity: 0, filter: "blur(10px)" }} 
          animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }} 
          exit={{ scale: 0.95, opacity: 0, filter: "blur(5px)" }}
          transition={{
            duration: 1.5,
            ease: [0.76, 0, 0.24, 1], // Cinematic Easing
          }}
        />
      </div>
    </motion.div>
  );
};

export default Preloader;