"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function FewThings() {
  const sectionRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <div className="bg-[#fff]">
      <section
        ref={sectionRef}
        className="w-full max-w-6xl mx-auto py-20 md:py-20 grid md:grid-cols-2 gap-12 md:gap-20 overflow-hidden"
      >
        {/* LEFT TEXT */}
        <div>
          <h1 className="text-[clamp(38px,4vw,72px)] font-extrabold leading-tight whitespace-nowrap">
            THW 5 PILLARS OF <br /> UNSTOPPABLE <br /> GROWTH
          </h1>
          <div className="w-[260px] mt-2 mb-8">
            <Image
              src="/img15.svg"
              alt="underline"
              width={300}
              height={20}
              className="w-full"
            />
          </div>
          <p className="text-gray-800 text-[18px] leading-relaxed mb-6">
            <strong>01 Why Most Businesses Plateau:</strong> Discover the 3
            biggest mistakes that silently kill momentum—and how to break free
            before it’s too late.
          </p>
          <p className="text-gray-800 text-[18px] leading-relaxed mb-6">
            <strong>02 Building an Unshakable Foundation:</strong> Create
            systems, processes, and structures that make your business stronger
            than market shifts or competition.
          </p>
          <p className="text-gray-800 text-[18px] leading-relaxed mb-6">
            <strong>03 Marketing That Works on Autopilot:</strong> Turn your
            marketing into a consistent revenue engine that generates qualified
            leads and sales daily.
          </p>
          <p className="text-gray-800 text-[18px] leading-relaxed mb-6">
            <strong>04 Scaling Without Burning Out:</strong> Learn how to grow
            your business without adding endless stress or chaos.
          </p>
        </div>

        {/* RIGHT IMAGES WITH AOS */}
        <div data-aos="fade-up" className="flex flex-col gap-10">
          <Image
            src="/img18.jpg"
            alt="Event Crowd"
            width={450}
            height={400}
            className="shadow-lg w-full h-auto object-cover"
          />

          <Image
            src="/img20.jpg"
            alt="Group Photo"
            width={450}
            height={400}
            className="shadow-lg w-full h-auto object-cover"
          />
        </div>
      </section>
    </div>
  );
}
