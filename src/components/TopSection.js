import Image from "next/image";
import { useState } from "react";
import { useAuthContext } from "../context/authContext";
import GradientButton from "./GradientButton";
import GradientText from "./GradientText";

const TopSection = ({data}) => {
  return (
    <div className="bg-dark-primary-color w-full text-white relative overflow-hidden z-10">
      <div class="bg-dark-primary-color absolute top-0 left-0 w-full h-full">
          <img src={data.bgImage} alt="background"/>
      </div>
      <div className=" py-32 flex flex-col items-center mx-auto max-w-[900px] text-center relative">
        <h1 className="text-5xl font-bold mb-4 px-[10%]"><GradientText>{data.title}</GradientText></h1>
        <h5 className="text-lg font-medium px-[15%] mx-auto my-2">
          {data.description}
        </h5>
        <div className="flex w-full mt-5">
          <LeftCard data={data}/>
          <RightCard data={data}/>
        </div>
      </div>
    </div>
  );
};

const LeftCard = ({data}) => {
  return (
    <div className="w-full mx-2 rounded-xl bg-dark-secondary-color p-5">
      <div className="grid grid-cols-2 grid-rows-2 w-full gap-2">
        <div className=" bg-dark-primary-color px-4 h-20 rounded-xl flex justify-start items-center">
          <img
          className="w-8"
            src="https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/60d4e6508e4e0d3d23669fba_Vector-2.svg"
            alt=""
          />
          <span className="font-semibold ml-2 text-left">5 Days</span>
        </div>
        <div className=" bg-dark-primary-color px-4 h-20 rounded-xl flex justify-start items-center">
          <img
          className="w-8"
            src="https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/60d4e6511fcd6385aa72ac2c_Vector.svg"
            alt=""  
          />
          <span className="font-semibold ml-2 text-left">Pre-recorded Videos</span>
        </div>
        <div className=" bg-dark-primary-color px-4 h-20 rounded-xl flex justify-start items-center">
          <img
          className="w-8"
            src="https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/60d4e6508e4e0d3d23669fba_Vector-2.svg"
            alt=""
          />
          <span className="font-semibold ml-2 text-left">5 Days</span>
        </div>
        <div className=" bg-dark-primary-color px-4 h-20 rounded-xl flex justify-start items-center">
          <img
          className="w-8"
            src="/images/users.svg"
            alt="users"
          />
          <span className="font-semibold ml-2 text-left">20</span>
        </div>
      </div>
      <div className="flex flex-col items-center py-8">
        <h3 className="text-2xl font-bold mb-1">{data.instructor.name}</h3>
        <h3 className="text-sm text-slate-400">
          {data.instructor.description}
        </h3>
      </div>
    </div>
  );
};
const RightCard = ({data}) => {
  return (
    <div className="w-full mx-2 rounded-xl rounded-xl overflow-hidden">
     <VideoPlayer video={data.video}/>
    <h5 className=" text-lg mb-6">Reserve a seat before January 5, 2023 to unlock Bonuses worth ₹45,000</h5>
    <GradientButton applyClasses={"w-full py-5 "}>{data.enroll_btn}</GradientButton>
    </div>
  );
};
const VideoPlayer=({video})=>{
  const [playVideo,setPlayVIdeo] = useState(false)
  const handleClick=()=>{
    setPlayVIdeo(true)
  }
  return(
    <div class="w-full mb-5 pt-[56%] bg-slate-800 relative overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-full">
        {
          playVideo?
          <video className="w-full relative" autoplay>
          <source src={video.src} type="video/mp4"/>
        Your browser does not support the video tag.
        </video>:
          <div>

          <img src={video.thumbnail} alt="Introduction" className="opacity-50"/>
          <button className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-center bg-slate-800 bg-opacity-50 p-2 rounded-lg" onClick={handleClick}>
            <img src="/images/play.svg" alt="Play" className="w-8"/>
            <span class="text-sm">Watch Trailer</span>
          </button>
          </div>
        }
      </div>
     </div>
  )
}
export default TopSection;
