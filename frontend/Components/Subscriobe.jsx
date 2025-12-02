"use client";

import Image from "next/image";

export default function Subscribe() {
  return (
    <div
      className="min-h-[65vh] bg-[#fff] bg-cover bg-center bg-no-repeat relative flex  justify-center"
      style={{ backgroundImage: "url('/img2.webp')" }}
    >
      <div className="max-w-full w-full relative z-10">
        {/* Background Text */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 pointer-events-none z-0 ">
          <span className="text-[15vw] text-center w-full font-black text-white leading-none tracking-tight whitespace-nowrap">
            SUBSCRIBE
          </span>
        </div>

        {/* Header */}
        {/* <div className="text-center relative z-10 ">
          <h1 className="font-black tracking-wider text-black uppercase text-[40px] mb-12">
            I WROTE TWO BOOKS. YOU SHOULD READ THEM.
          </h1>
          <div className="flex items-center gap-10 justify-around max-w-6xl mx-auto">
            <div className=" w-[25%] flex flex-col gap-10">
              <div className=" ">
                <h2 className="text-[32px] italic font-normal text-gray-800 mb-3 text-left">
                  Start The Work
                </h2>
                <p className="text-[16px] text-gray-600 leading-relaxed text-left">
                  Systems + strategy = <br /> sustainable scale.
                </p>
              </div>
              <div className="w-full  flex items-center justify-end">
                <Image
                  src={"/img7.svg"}
                  alt="hero"
                  width={60}
                  height={90}
                  className=""
                />
              </div>
            </div>
            <div>
              <Image
                src={"/img4.webp"}
                alt="hero"
                width={250}
                height={90}
                className=" "
              />
            </div>
            <div>
              <Image
                src={"/img5.webp"}
                alt="hero"
                width={250}
                height={90}
                className=" "
              />
            </div>
            <div className=" w-[25%] flex flex-col gap-10">
              <div className="w-full  flex items-center justify-start">
                <Image
                  src={"/img6.svg"}
                  alt="hero"
                  width={60}
                  height={90}
                  className=" "
                />
              </div>
              <div>
                <h2 className="text-[32px] italic font-normal text-gray-800 mb-3 text-right">
                  Teamwork
                </h2>
                <p className="text-[16px] text-gray-600 leading-relaxed text-right">
                  How to build $125M <br /> high-performance team.
                </p>
              </div>
            </div>
          </div>
        </div> */}
        <div className="max-w-5xl py-20 h-full mx-auto relative z-10 flex items-center justify-center gap-12">
          {/* LEFT CONTENT */}
          <div className="w-1/2 h-full">
            <h2 className="text-[24px] font-semibold tracking-wide leading-snug mb-6">
              JOIN THE “BUSINESS &” <br /> NEWSLETTER
            </h2>

            <p className="text-[14px] text-[#333] leading-relaxed mb-4">
              Not another feel-good email. Enter the scale dispatch as this is
              your weekly dose of straight-to-the-point strategy, market trend
              updates, and sharp definitions that give you the edge.
              <span className="font-semibold">Delivered with zero fluff</span> –
              just the insights to keep you scaling and one move ahead.
            </p>
          </div>

          {/* RIGHT FORM */}
          <form className="flex flex-col gap-6 w-1/2 justify-end h-full ">
            {/* Name */}
            <input
              type="text"
              className="w-full bg-white border border-gray-300 px-4 py-1 text-md focus:outline-none focus:ring-2 focus:ring-black transition-all"
              placeholder="Name"

            />

            {/* Email */}
            <input
              type="email"
              className="w-full bg-white border border-gray-300 px-4 py-1 text-lg focus:outline-none focus:ring-2 focus:ring-black transition-all"
              placeholder="Email"
            />

            {/* Subscribe Button */}
            <button
              type="submit"
              className="mt-2 cursor-pointer w-[180px] px-3 py-2 text-center rounded-full bg-black text-white 
            font-semibold tracking-wider text-sm border-2 border-black
            transition-all duration-300 hover:bg-white hover:text-black hover:shadow-xl"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
