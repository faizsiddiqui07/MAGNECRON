"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import Preloader from "./Preloader";
import useLenisSetup from "../hooks/useLenisSetup";
import ReduxProvider from "../redux/ReduxProvider";

export default function ClientWrapper({ children }) {
  useLenisSetup();
  const pathname = usePathname();
  const [showPreloader, setShowPreloader] = useState(false);

  useEffect(() => {
    // Exact old logic: Sirf homepage par preloader dikhega
    if (window.location.pathname === "/") {
      setShowPreloader(true);
    }
  }, []);

  return (
    <ReduxProvider>
      <AnimatePresence mode="wait">
        {showPreloader && (
          <Preloader onLoadingComplete={() => setShowPreloader(false)} />
        )}
      </AnimatePresence>
      {children}
    </ReduxProvider>
  );
}