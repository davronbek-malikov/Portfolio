"use client";

import { useEffect } from "react";

// EN | 한국어 switch. Also sets <html lang> for the current page and, on a
// visitor's first visit, sends Korean-language browsers to the Korean page.
export default function LangSwitch({ lang, href, label, title }) {
  const other = lang === "en" ? "ko" : "en";

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      const saved = localStorage.getItem("lang");
      if (!saved && lang === "en" && navigator.language?.toLowerCase().startsWith("ko")) {
        localStorage.setItem("lang", "ko");
        window.location.replace(href + window.location.hash);
      }
    } catch {
      // storage blocked: just stay on this page
    }
  }, [lang, href]);

  return (
    <a
      className="lang-switch"
      href={href}
      hrefLang={other}
      title={title}
      onClick={() => {
        try {
          localStorage.setItem("lang", other);
        } catch {
          // ignore
        }
      }}
    >
      {label}
    </a>
  );
}
