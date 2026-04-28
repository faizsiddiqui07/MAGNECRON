"use client";
import { useEffect } from 'react';
import Lenis from 'lenis';

const useLenisSetup = () => {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true, 
      lerp: 0.08, 
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    return () => {
      lenis.destroy();
    };
  }, []); 
};

export default useLenisSetup;