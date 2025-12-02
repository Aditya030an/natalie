"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaPlay } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function JoinTheCourse() {
  const bgRef = useRef(null);

  useEffect(() => {
    // Parallax scroll animation
    gsap.to(bgRef.current, {
      scale: 1.15,
      opacity: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: bgRef.current,
        start: "top top",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="bg-[#fff] pt-20">
    <section className="relative w-full h-screen overflow-hidden max-w-6xl mx-auto">

      {/* BACKGROUND LAYER */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-full flex"
      >
        {/* LEFT IMAGE (Laptop Video Frame) */}
        <div className="w-full relative h-full">
          <Image
            src="/img1.jpg"
            alt="Laptop Video Frame"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* CENTER TEXT */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center">
        
        <p className="tracking-widest mb-2 text-sm md:text-lg">
          FOR CEOS WHO NEED FAST, FIELD-TESTED SCALING
        </p>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
          REMIX YOUR BUSINESS
        </h1>

        {/* CTA BUTTON */}
        <button className="mt-6 px-8 py-3 bg-white text-black rounded-full font-semibold hover:opacity-80 transition">
          JOIN THE COURSE
        </button>


      </div>

    </section>
    </div>
  );
}
