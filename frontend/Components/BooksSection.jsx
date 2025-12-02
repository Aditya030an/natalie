"use client";

import Image from "next/image";

export default function BooksPromo() {
  return (
    <div
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
        </div>
      </div>
    </div>
  );
}
