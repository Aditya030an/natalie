"use client";

import Image from "next/image";

export default function HeroPodcast() {
  return (
    <section className="relative  w-full h-[90vh] overflow-hidden ">
      {/* FIXED BACKGROUND INSIDE THIS SECTION ONLY */}
      <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden">
        <div className="fixed inset-0">
          <Image
            src="/img9.webp"
            fill
            alt="background"
            className="object-cover "
          />
        </div>
      </div>

      {/* CONTENT WRAPPER */}
      <div className="relative z-0 max-w-6xl mx-auto h-full ">
        {/* LEFT TEXT ONLY HALF SCREEN WIDTH */}
        <div className="max-w-2xl flex flex-col h-full justify-center">
          <h1 className="text-xl  font-extrabold leading-tight mt-4">
            {/* IS THIS TRAINING FOR REAL FOUNDERS */}
            <div className="inline-block bg-black text-white text-xl font-semibold tracking-wide mr-2">
              REAL 
            </div>
            SOLUTIONS FOR REAL 
          </h1>
          <div className="text-black text-6xl font-bold mt-4">FOUNDERS &</div>

          <div className="w-full h-[1.5px] bg-black my-6"></div>

          <p className="text-md  leading-relaxed text-black mb-6 max-w-[400px] w-full ">
            If your business is doing $1M+ in revenue but growth feels heavier
            instead of smoother, this is where things begin to shift.
          </p>

          <p className="text-md leading-relaxed text-black max-w-[400px] w-full ">
            We’ve helped companies across HVAC, real estate, e-commerce,
            healthcare, IT, construction, and more — scaling over $8 Billion in
            combined growth. Now we’re sharing the exact strategies behind those
            results, built for founders who want clarity, stronger systems, and
            predictable scaling. In today’s economy, the businesses that win
            aren’t the ones pushing harder — they’re the ones doing the right
            things, better.
          </p>
        </div>
        <button
          className="mt-8 cursor-pointer w-[230px] z-20 absolute bottom-3 left-0 px-3 py-2 text-center rounded-full bg-black text-white 
            font-semibold tracking-wider text-sm border-2 border-black
            transition-all duration-300 hover:bg-white hover:text-black hover:shadow-xl"
        >
          LISTEN TO MY PODCAST
        </button>
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/3 z-0 w-[1000px] h-[800px] overflow-hidden">
          <Image
            src="/img27.png"
            fill
            alt="background"
            className="object-contain w-full h-full "
          />
        </div>
      </div>
    </section>
  );
}
