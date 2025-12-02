"use client";

import { useRef, useState  , useEffect} from "react";
import { FaPlay } from "react-icons/fa"; 

export default function ImpactSection() {
  const videos = [
    {
      src: "/video2.mp4",
      name: "ALEJANDRA AVILA",
      text: `“Looking at Natalie, what she was able to do, how she was able to structure her own business...”`,
    },
    {
      src: "/video2.mp4",
      name: "CHANELLE SIMPSON",
      text: `“She lays it out so clearly... so many things I didn’t know that I needed to know...”`,
    },
    {
      src: "/video2.mp4",
      name: "DEBBIE DINDSDALE",
      text: `“The highlight of working with Cardone Ventures is the focus on the things that matter...”`,
    },
    {
      src: "/video2.mp4",
      name: "JEFF GIBSON",
      text: `“Natalie is a wealth of information… it’s changed how I communicate with my team...”`,
    },
    {
      src: "/video2.mp4",
      name: "NICHOLE FRANK",
      text: `“Working with Natalie has made it more fun… more meaningful. It’s making lives better.”`,
    },
  ];

  return (
    <section className="bg-black text-white py-24">
      <div className="text-start max-w-4xl mx-auto mb-16">
        <h1 className="text-7xl font-extrabold">IMPACT</h1>
        <p className="text-3xl font-semibold tracking-wide mt-4">
          I HELP OWNERS BUILD BETTER BUSINESSES
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-2 px-3 w-full">
        {videos.map((item, i) => (
          <VideoCard key={i} {...item} />
        ))}
      </div>
    </section>
  );
}

function VideoCard({ src, name, text }) {
  const videoRef = useRef(null);
  const hiddenVideoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [thumbnail, setThumbnail] = useState(null);

  // Generate thumbnail from last second
  const generateThumbnail = () => {
    const hiddenVideo = hiddenVideoRef.current;

    hiddenVideo.onloadedmetadata = () => {
      // Jump to last second
      const targetTime = Math.max(hiddenVideo.duration - 1, 0);
      hiddenVideo.currentTime = targetTime;
    };

    hiddenVideo.onseeked = () => {
      const canvas = document.createElement("canvas");
      canvas.width = hiddenVideo.videoWidth;
      canvas.height = hiddenVideo.videoHeight;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(hiddenVideo, 0, 0);

      const imgURL = canvas.toDataURL("image/jpeg");
      setThumbnail(imgURL);
    };
  };

  // run once
  useEffect(() => {
    generateThumbnail();
  }, []);

  const playVideo = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <div
      className="flex flex-col cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Hidden video to capture thumbnail */}
      <video
        ref={hiddenVideoRef}
        src={src}
        preload="metadata"
        style={{ display: "none" }}
      />

      <div className="relative w-full aspect-[9/16] overflow-hidden group">

        {/* VIDEO */}
        <video
          ref={videoRef}
          src={src}
          preload="metadata"
          playsInline
          controls={isPlaying}
          onPause={handlePause}
          onEnded={handlePause}
          className="w-full h-full object-cover"
          poster={thumbnail}  // <-- The last-second thumbnail here
        />

        {/* PLAY BUTTON */}
        {!isPlaying && (
          <button
            onClick={playVideo}
            className="absolute inset-0 flex items-center justify-center z-20"
          >
            <div className="w-10 h-10 bg-white/40 cursor-pointer border border-white backdrop-blur-md rounded-full flex items-center justify-center">
              <FaPlay size={12} color="white" />
            </div>
          </button>
        )}

        {/* HOVER OVERLAY */}
        {!isPlaying && (
          <div
            className={`absolute inset-0 transition-all duration-300 pointer-events-none 
            ${
              hovered
                ? "bg-black/70"
                : "bg-gradient-to-t from-black/70 to-transparent"
            }`}
          ></div>
        )}

        {/* TEXT SECTION BEFORE PLAY */}
        {!isPlaying && (
          <div className="absolute bottom-0 left-0 p-4 z-30">
            <p className="text-sm mt-2 opacity-90 leading-relaxed">{text}</p>
            <h3 className="text-white font-bold mt-3 tracking-wide">{name}</h3>
          </div>
        )}
      </div>
    </div>
  );
}

