"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { ScrollTrigger } from "@/lib/gsap";

const LanguageContext = createContext({ lang: "en", setLang: () => {}, t: (v) => v });

// t({ en: "...", mn: "..." }) → text in the current language
export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  // Remember the visitor's choice
  useEffect(() => {
    try {
      const saved = localStorage.getItem("lang");
      if (saved === "mn" || saved === "en") setLang(saved);
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem("lang", lang);
    } catch {}
    // Text length changed → re-measure the scroll animations
    const id = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(id);
  }, [lang]);

  const t = (value) => (value && typeof value === "object" && "en" in value ? value[lang] : value);

  return <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>;
}

export const useLang = () => useContext(LanguageContext);
