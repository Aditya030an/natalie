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
            <div className="inline-block bg-black text-white text-xl font-semibold tracking-wide mr-2">
              REAL
            </div>
            SCALING STORIES, NEVER THE FLUFF
          </h1>
          <div className="text-black text-6xl font-bold mt-4">BUSINESS &</div>

          <div className="w-full h-[1.5px] bg-black my-6"></div>

          <p className="text-md  leading-relaxed text-black mb-6 max-w-[350px] w-full ">
            Running a successful business takes over your life, but there’s
            still room for the “ands” — the things that keep you sharp,
            confident, and ahead of the game.
          </p>

          <p className="text-md leading-relaxed text-black max-w-[350px] w-full ">
            Success isn’t just what you build — it’s how you show up. I’ve
            helped businesses scale to nine figures, and here, I share real
            strategies, data-driven insights, and what’s next in business,
            health, wealth, beauty, and fashion.
          </p>

          
        </div>
        <button
            className="mt-8 cursor-pointer w-[230px] z-20 absolute bottom-3 left-0 px-3 py-2 text-center rounded-full bg-black text-white 
            font-semibold tracking-wider text-sm border-2 border-black
            transition-all duration-300 hover:bg-white hover:text-black hover:shadow-xl"
          >
            LISTEN TO MY PODCAST
          </button>
      <div className="absolute top-0 left-1/2 -translate-x-1/3 z-0 w-[1000px] h-[700px] overflow-hidden">
        <Image
          src="/img8.webp"
          fill
          alt="background"
          className="object-contain w-full h-full "
        />
      </div>
      </div>

    </section>
  );
}
