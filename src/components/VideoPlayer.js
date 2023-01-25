import Image from "next/image";
import { useState } from "react";

  const VideoPlayer = ({ video }) => {
    const [playVideo, setPlayVIdeo] = useState(false);
    const handleClick = () => {
      setPlayVIdeo(true);
    };
    return (
      <div className="w-full mb-5 pt-[56%] bg-slate-800 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          {playVideo ? (
            <video className="w-full relative" playsInline autoPlay muted loop>
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div>
              <Image
                src={video.thumbnail}
                alt="Introduction"
                className="opacity-50 w-full"
                fill={true}
                style={{ objectFit: "cover" }}
                priority={true}
              />
              <button
                className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-center bg-slate-800 bg-opacity-50 p-2 rounded-lg"
                onClick={handleClick}
              >
                <Image
                  src="/images/play.svg"
                  alt="Play"
                  width={32}
                  height={32}
                  priority={true}
                />
                <span className="text-sm">Watch Trailer</span>
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

  export default VideoPlayer;