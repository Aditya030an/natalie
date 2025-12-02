"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FewThings() {
  const sectionRef = useRef(null); // Reference for the entire section/scroll area
  const rightRef = useRef(null); // Reference for the images container

  useEffect(() => {
    // 1. Set the initial position of the images (start slightly down)
    // We use a CSS class to set the initial Y position to ensure it's there before GSAP runs
    // In this case, we'll let GSAP handle the whole movement for better control.

    if (!sectionRef.current || !rightRef.current) return;

    // We'll create a timeline that controls the Y position of the images.
    // The timeline's progress will be "scrubbed" by the scroll position.
    gsap.fromTo(
      rightRef.current,
      {
        y: 100, // Start 100px down (The initial "comes up" part of the animation)
        opacity: 0, // Start invisible
      },
      {
        y: -100, // Move up to a final position 100px higher than its start
        opacity: 1, // End fully visible
        ease: "none", // Linear movement tied to scroll
        scrollTrigger: {
          trigger: sectionRef.current, // The whole section is the trigger
          start: "top bottom", // Start the animation when the top of the section hits the bottom of the viewport
          end: "bottom center", // End the animation when the bottom of the section hits the center of the viewport
          scrub: true, // Smoothly link the animation progress to the scroll position
          // markers: true, // Uncomment for visual debugging of start/end points
        },
      }
    );

    // Optional: Add a simple stagger entrance for the two images (opacity and initial y)
    gsap.from(rightRef.current.children, {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%", // Trigger early in the section
        toggleActions: "play none none reverse",
      },
    });

  }, []);

  return (
    <div className="bg-[#fff]">
      {/* SECTION WRAPPER: Added ref for ScrollTrigger */}
      <section 
        ref={sectionRef} 
        className="w-full max-w-6xl mx-auto py-20 md:py-20 grid md:grid-cols-2 gap-12 md:gap-20 overflow-hidden" // Added overflow-hidden to prevent horizontal scroll from y offset
      >
        {/* LEFT SIDE TEXT */}
        <div>
          <h1 className="text-[clamp(38px,4vw,72px)] font-extrabold leading-tight whitespace-nowrap">
            A FEW THINGS <br /> UP FRONT
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
            <strong>I didn’t learn scaling from textbooks —</strong> I learned
            it by breaking businesses, rebuilding them, and turning failure into
            formula.{" "}
            <em>
              Now I help business owners scale smarter, faster, and without
              distractions.
            </em>
          </p>

          <p className="italic text-gray-700 mb-4">
            I believe in scaling the right way:
          </p>

          <p className="text-gray-800 mb-2">
            <strong>Built, Not Borrowed:</strong> reinvesting profits instead of
            relying on outside capital.
          </p>

          <p className="text-gray-800 mb-2">
            <strong>Blueprint-Driven Growth:</strong> replicable systems proven
            in the trenches.
          </p>

          <p className="text-gray-800 mb-6">
            <strong>No Excuses Execution:</strong> no fluff — just strategy,
            delivery, and measurable outcomes.
          </p>

          <p className="text-gray-800">
            If you’re ready to scale smarter, faster, and with zero distractions
            — you’re in the right place.
          </p>
        </div>

        {/* RIGHT SIDE IMAGES: Added ref to control its parallax movement */}
        <div ref={rightRef} className="flex flex-col gap-10">
          <Image
            src="/img10.jpg"
            alt="Event Crowd"
            width={450}
            height={400}
            className="shadow-lg w-full h-auto object-cover" // Added w-full h-auto object-cover for better responsiveness
          />

          <Image
            src="/img11.jpg"
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