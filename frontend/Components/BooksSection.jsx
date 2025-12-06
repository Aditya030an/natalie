"use client";

import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function BooksPromo() {
  return (
    <div
      id="books-section"
      className="min-h-[80vh] bg-[#fff] bg-cover bg-center bg-no-repeat relative flex items-center justify-center"
      style={{ backgroundImage: "url('/img2.webp')" }}
    >
      <div className="max-w-full w-full relative z-10">
        {/* Background Text */}
        <div className="absolute left-0 top-0   pointer-events-none z-0 ">
          <span className="text-[22vw] text-center w-full font-black text-white leading-none tracking-widest whitespace-nowrap">
            BOOKS
          </span>
        </div>

        {/* Header */}
        <div className="text-center relative z-10 ">
          <h1 className="font-black tracking-wider text-black uppercase text-[40px] mb-12">
            I WROTE TWO BOOKS. YOU SHOULD READ THEM.
          </h1>
          <div className="flex items-center gap-10 justify-around max-w-6xl mx-auto">
            <div className=" w-[40%] flex flex-col gap-10">
              <div className=" ">
                <h2 className="text-[32px] italic font-normal text-gray-800 mb-3 text-left">
                  Most Startups Struggle Because They Lack Systems
                </h2>
                <p className="text-[16px] text-gray-600 leading-relaxed text-left">
                  If you’re working nonstop but profits aren’t growing, or the
                  business can’t run without you <br /> — it’s a sign the
                  foundation isn’t built to scale.
                </p>
              </div>
              <div
                // data-aos="zoom-in-right"
                // data-aos-anchor="#books-section"
                // data-aos-duration="1200"
                className="w-full flex items-center justify-end"
              >
                <Image src={"/img7.svg"} width={60} height={90} alt="hero"  data-aos="zoom-in-right"
                data-aos-anchor="#books-section"
                data-aos-duration="120" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src={"/img29.jpg"}
                  alt="hero"
                  width={250}
                  height={90}
                  className=" "
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <Image
                  src={"/img28.png"}
                  alt="hero"
                  width={250}
                  height={70}
                  className=" "
                />
              </div>
            </div>
            <div className=" w-[40%] flex flex-col gap-10">
              <div
                // data-aos="zoom-in-left"
                // data-aos-anchor="#books-section"
                // data-aos-duration="1200"
                className="w-full flex items-center justify-start"
              >
                <Image src={"/img6.svg"} width={60} height={90} alt="hero" data-aos="zoom-in-left"
                data-aos-anchor="#books-section"
                data-aos-duration="120"
               />
              </div>
              <div>
                <h2 className="text-[32px] italic font-normal text-gray-800 mb-3 text-right">
                  Why This Training Matters
                </h2>
                <p className="text-[16px] text-gray-600 leading-relaxed text-right">
                  In today’s economy, guesswork doesn’t work. You need clear
                  systems, strategy, and structure. <br /> This training shows
                  you how to build sustainable growth without burning out.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
