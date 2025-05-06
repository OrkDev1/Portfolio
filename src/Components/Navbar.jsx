import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Logo from "./Logo";

export default function Navbar() {
  const location = useLocation();
  const [activePage, setActivePage] = useState("");
  useEffect(() => {
    let timeoutId = null;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      setActivePage(location.hash.slice(1));
    }, 300); // Delay in ms (adjust as needed)
  }, [location]);
  useEffect(() => {
    const sections = ["home", "about", "projects", "contact"];
    const sectionElements = sections.map((id) => document.getElementById(id));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActivePage(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "-50% 0px -40% 0px", threshold: 0.1 }
    );

    sectionElements.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return (
    <nav className="fixed z-50 top-4 flex flex-row items-center justify-center rounded-full px-4 py-3 w-3xl border-base-300 border backdrop-blur-md">
      <a href="/" className="absolute left-1">
        <Logo height={"h-12"} width={"w-12"} color="fill-primary" />
      </a>
      <div className="flex flex-row items-center gap-6">
        <a href="#home" className="transition flex items-center gap-2 font-semibold text-base-content/80 hover:text-base-content text-lg px-2">
          <div aria-label="status" className={`status transition-all duration-300 status-primary ${activePage == "home" || activePage == "" ? "" : "opacity-0"}`} />
          Home
        </a>
        <a href="#about" className="transition flex items-center gap-2 font-semibold text-base-content/80 hover:text-base-content text-lg px-2">
          <div aria-label="status" className={`status transition-all duration-300 status-primary ${activePage == "about" ? "" : "opacity-0"}`} />
          About
        </a>
        <a href="#projects" className="transition flex items-center gap-2 font-semibold text-base-content/80 hover:text-base-content text-lg px-2">
          <div aria-label="status" className={`status transition-all duration-300 status-primary ${activePage == "projects" ? "" : "opacity-0"}`} />
          Projects
        </a>
        <a href="#contact" className="transition flex items-center gap-2 font-semibold text-base-content/80 hover:text-base-content text-lg px-2">
          <div aria-label="status" className={`status transition-all duration-300 status-primary ${activePage == "contact" ? "" : "opacity-0"}`} />
          Contact
        </a>
      </div>
    </nav>
  );
}
