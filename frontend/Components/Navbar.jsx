"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    
    //   console.log("window.innerHeigh" , window.innerHeigh);
    //   console.log("window.scrollY" , window.scrollY);
    const handleScroll = () => {
      setScrolled(window.scrollY > 0); // Navbar background change
      setShowTitle(window.scrollY > window.innerHeight * 0.9); // Show title after 100vh
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled ? "bg-white shadow-sm" : "bg-transparent"}
      `}
    >
      <nav className="w-full px-6 py-3 flex items-center justify-between">
        <div
          className={`text-[20px] font-semibold transition-opacity duration-300 ${
            showTitle ? "opacity-100" : "opacity-0"
          }`}
        >
          NATALIE DAWSON
        </div>

        <div className="hidden md:flex gap-8 text-[16px] font-bold">
          <Link href="#">ABOUT</Link>
          <Link href="#">BOOKS</Link>
          <Link href="#">PODCAST</Link>
          <Link href="#">COURSE</Link>
        </div>
      </nav>
    </header>
  );
}
