// "use client";

// import { useState, useEffect, useRef } from "react";
// import Image from "next/image";

// export default function HeroSection() {
//   const [imageScale, setImageScale] = useState(1);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!sectionRef.current) return;

//       const rect = sectionRef.current.getBoundingClientRect();
//       const windowHeight = window.innerHeight;

//       const scale = Math.min(1, Math.max(0, rect.bottom / windowHeight));
//       setImageScale(scale);
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll();
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative w-full h-screen overflow-hidden"
//     >
//       {/* Video Background */}
//       <video
//         className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
//         src="https://thenataliedawson.com/wp-content/uploads/2025/08/Photo-Carousel-video-for-website-crop-01.mp4"
//         autoPlay
//         muted
//         loop
//       ></video>

//       {/* Content */}
//       <div className="relative z-10 w-full h-full flex flex-col justify-center max-w-6xl mx-auto px-4">
//   <div className="flex w-full justify-end">
//     {/* Text container limited to 40% width */}
//     <div className="w-[50%] text-right text-black font-serif leading-snug space-y-6">
//       <h1 className="text-3xl md:text-4xl lg:text-4xl leading-tight">
//         Entrepreneurship Growth Mastery<br />
//         Unlock the strategies to accelerate your{" "}
//         <span className="relative inline-block">
//           business
//           <Image
//             src="https://thenataliedawson.com/wp-content/uploads/2025/05/Group-425.png"
//             alt="Wave Design"
//             fill
//             className="absolute italic -top-4 -left-2 object-contain -z-10"
//           />
//         </span>
//         <br />
//         build unstoppable momentum,<br />
//         and create a company that thrives with or without you.
//       </h1>
//     </div>
//   </div>
// </div>

//       {/* Bottom Text (Now Behaves Like Full-Width Image) */}
//       <div
//         className="absolute bottom-0 left-0 w-full origin-bottom-left px-3"
//         style={{
//           transform: `scale(${imageScale})`,
//           transition: "transform 0.25s ease-out",
//         }}
//       >
//         <span className="block w-[85%] text-[90px] md:text-[140px] lg:text-[140px] font-bold tracking-tight leading-none whitespace-nowrap">
//           ROCKY SAGGOO
//         </span>
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

const images = ["/img21.png", "/img23.png", "/img22.png"];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [imageScale, setImageScale] = useState(1);
  const sectionRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(currentIndex);
      setCurrentIndex((prev) => (prev + 1) % images.length);

      // Remove prev image after animation (1s)
      setTimeout(() => setPrevIndex(null), 1000);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const scale = Math.min(1, Math.max(0, rect.bottom / windowHeight));
      setImageScale(scale);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      {/* Sliding Background Images */}
      <div className="slider-container absolute inset-0 ">
        {images.map((src, idx) => (
          <div
            key={idx}
            className={`slide ${
              idx === currentIndex ? "active" : idx === prevIndex ? "prev" : ""
            }`}
          >
            <Image src={src} alt="" fill className="object-cover opacity-90" />
          </div>
        ))}
      </div>

      {/* --- Foreground content stays same --- */}
      <div className="absolute top-0 left-0 z-10  w-full h-full flex flex-col justify-center ">
        <div className="flex w-full justify-end">
          <div className="w-[50%] text-right text-white font-serif leading-snug space-y-6  pr-16">
            <h1 className="text-3xl md:text-4xl lg:text-4xl leading-tight ">
              Entrepreneurship Growth Mastery <br />
              Unlock the strategies <br /> to accelerate your{" "}
              <span className="relative inline-block">
                business
                <Image
                  src="/img24.png"
                  alt="Wave Design"
                  fill
                  className="absolute italic -top-4 -left-2 object-contain -z-10 invert-white"
                />
              </span>
              <br />
              build unstoppable momentum, <br />
              and create a company that thrives <br /> with or without you.
            </h1>
          </div>
        </div>
      </div>

      {/* Bottom Text (Now Behaves Like Full-Width Image) */}
      <div
        className="absolute bottom-0 left-0 w-full origin-bottom-left px-3"
        style={{
          transform: `scale(${imageScale})`,
          transition: "transform 0.25s ease-out",
        }}
      >
        <span className="block w-[85%] text-[90px] md:text-[140px] lg:text-[140px] font-bold tracking-tight leading-none whitespace-nowrap text-white">
          ROCKY SAGGOO
        </span>
      </div>
    </section>
  );
}
