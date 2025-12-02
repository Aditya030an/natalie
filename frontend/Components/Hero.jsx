"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [imageScale, setImageScale] = useState(1);
  const [imageOpacity, setImageOpacity] = useState(1);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionBottom =
        sectionRef.current.getBoundingClientRect().bottom; // distance from top
      const windowHeight = window.innerHeight;

      // When bottom of section is at top, scale = 0
      const distanceToTop = Math.max(0, sectionBottom); // avoid negative
      const scale = Math.min(1, distanceToTop / windowHeight);
      setImageScale(scale);
      setImageOpacity(scale); // fade along with scale
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // init on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden"
    >
      {/* Video Background */}
     <video
  className="absolute top-1/2 left-1/2 w-auto min-w-full h-auto min-h-full -translate-x-1/2 -translate-y-1/2"
  src="https://thenataliedawson.com/wp-content/uploads/2025/08/Photo-Carousel-video-for-website-crop-01.mp4"
  autoPlay
  muted
  loop
></video>


      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center  max-w-6xl mx-auto">
        <div className="text-right text-black font-serif leading-snug space-y-3.5">
          <h1 className="text-4xl md:text-5xl lg:text-6xl">
            Growth operator, small <br />
            business-{" "}
            <span className="relative inline-block">
              obsessed
              <Image
                src="https://thenataliedawson.com/wp-content/uploads/2025/05/Group-425.png"
                alt="Wave Design"
                fill
                className="absolute italic -top-4 -left-2 w-full h-full object-contain -z-10"
              />
            </span>
            <br />
            entrepreneur, investor, <br />
            and author.
          </h1>
        </div>

      </div>
        {/* Bottom Image */}
        <div
          className="absolute bottom-0 left-7 w-[80%] origin-bottom-left "
          style={{
            transform: `scale(${imageScale})`,
            // opacity: imageOpacity,
            transition: "transform 0.2s ease-out, opacity 0.2s ease-out",
          }}
        >
          <Image
            src="/img14.svg"
            alt="NATALIE DAWSON"
            width={1000}
            height={100}
            className="w-full h-full"
          />
        </div>
    </section>
  );
}
