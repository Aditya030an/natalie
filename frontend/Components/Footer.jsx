import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-0">
      <footer className=" max-w-7xl mx-auto px-6 py-6 ">
        {/* TOP SECTION */}
        <div className=" grid gap-12 lg:grid-cols-2  mt-8 mx-4">
          {/* LEFT SECTION */}
          <div className="flex items-start justify-between w-10/12">
            {/* SVG LOGO */}
            <div className="block -mt-4 text-9xl font-serif ">
              {/* <Image
              src="/img12.svg"
              alt="ND Logo"
              width={120}
              height={120}
              className="w-[70px] sm:w-[150px] -mt-8"
              priority
            /> */}
              RS
            </div>

            {/* LEARN */}
            <div>
              <h4 className="text-[16px] font-bold mb-2 tracking-widest">
                LEARN
              </h4>
              <ul className="space-y-2 text-[16px]">
                <li>
                  <Link href="#">Home</Link>
                </li>
                <li>
                  <Link href="#">About</Link>
                </li>
                <li>
                  <Link href="#">Books</Link>
                </li>
                <li>
                  <Link href="#">Podcast</Link>
                </li>
                <li>
                  <Link href="#">Course</Link>
                </li>
              </ul>
            </div>

            {/* CONNECT */}
            <div>
              <h4 className="text-[16px] font-bold mb-2 tracking-widest">
                CONNECT
              </h4>
              <ul className="space-y-2 text-[16px]">
                <li>
                  <Link href="#">Instagram</Link>
                </li>
                <li>
                  <Link href="#">YouTube</Link>
                </li>
                <li>
                  <Link href="#">Threads</Link>
                </li>
                <li>
                  <Link href="#">LinkedIn</Link>
                </li>
                <li>
                  <Link href="#">TikTok</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT SECTION — GIF + CTA */}
          <div className="border border-white px-3 py-6 flex items-center justify-between gap-6">
            {/* GIF */}
            <img
              // src="https://thenataliedawson.com/wp-content/uploads/2025/07/natalie-dawson-talking-to-camera-01.gif"
              src="/footerGif.gif"
              alt="Training GIF"
              className="w-1/2 brightness-75 "
            />

            <div className="text-center sm:text-left">
              <h3 className="text-2xl sm:text-xl font-bold leading-snug mb-4">
                FREE BUSINESS <br /> GROWTH TRAINING
              </h3>

              <p className="text-gray-300 text-[16px] mb-6 max-w-md">
                Learn the strategies we use to scale companies beyond 7–8
                figures with clarity and precision.
              </p>

              <button className="bg-white text-black rounded-full px-3 w-full py-4 text-[12px] tracking-widest cursor-pointer font-medium whitespace-nowrap hover:bg-gray-200 transition">
                WATCH YOUR FREE TRAINING
              </button>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white mt-10" />

        {/* BOTTOM SECTION */}
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6 text-[12px] text-white">
          {/* LEFT LINKS */}
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white">
              Terms & Conditions
            </Link>
          </div>

          {/* COPYRIGHT */}
          <p className="text-center md:text-right">
            © 2025 RS Enterprises | Designed & Built by{" "}
            <Link href="#" className="underline hover:text-white">
              Your Agency
            </Link>
          </p>
        </div>
      </footer>
    </footer>
  );
}
