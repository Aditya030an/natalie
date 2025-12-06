"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function JoinTheCourse() {
  const bgRef = useRef(null);

  useEffect(() => {
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
        {/* BACKGROUND WRAPPER */}
        <div ref={bgRef} className="absolute inset-0 w-full h-full flex">
          {/* LEFT IMAGE */}
          <div className="w-1/2 h-full relative">
            <Image
              src="/img30.png"
              alt="Left Section"
              fill
              className="object-cover grayscale contrast-125 brightness-50"
              priority
            />
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-1/2 h-full relative">
            <Image
              src="/img31.png"
              alt="Right Section"
              fill
              className="object-cover grayscale contrast-125 brightness-50"
              priority
            />
          </div>
        </div>

        {/* CENTER TEXT */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center">
          <p className="tracking-widest mb-2 text-sm md:text-lg">
            For CEOs who want clarity, control, and fast, field-tested scaling.
            Stop fixing the same problems. Start using the systems that scaled
            $8B+ in companies.
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            REALIGN YOUR BUSINESS
          </h1>

          <button className="mt-6 px-8 py-3 cursor-pointer bg-white text-black rounded-full font-semibold hover:opacity-80 transition">
            JOIN THE COURSE
          </button>
        </div>
      </section>
    </div>
  );
}
