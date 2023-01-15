import moment from "moment";
import Image from "next/image";
import { useState } from "react";
import EnrollButton from "./EnrollButton";
import GradientText from "./GradientText";
// import moment from "moment/moment";
const slots = {
  morning: ["5AM", "6AM", "7AM", "8AM"],
  evening: ["5PM", "6PM", "7PM", "8PM", "9PM"],
};
const TopSection = ({ data }) => {
  const titleData = data.title;
  let titleEl;
  if(titleData){
    titleEl = titleData.map((txt,i)=>{
      if(txt["gradient"]){
        return <GradientText key={i}>{txt["gradient"]}</GradientText>
      }
      return <span key={i}>{txt["normal"]}</span>
    })
  }
  return (
    <div className="bg-dark-primary-color w-full text-white relative overflow-hidden z-10 px-[5%] py-4">
      <div className="bg-dark-primary-color absolute top-0 left-0 w-full h-full flex items-start justify-start">
        <Image src={data.bgImage} fill={true} style={{objectFit:"contain",objectPosition:"0% 0%"}} alt="background" className="w-[50%]" priority={true}/>
      </div>
      <div className="pt-20 md:pt-32 flex flex-col items-center mx-auto max-w-[1100px] text-center relative">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 md:px-[10%]">
          {/* <GradientText>{data.title}</GradientText> */}
          {titleEl}
        </h1>
        <h5 className="md:text-lg font-medium md:px-[15%] mx-auto my-2">
          {data.description}
        </h5>
        <div className="flex flex-col-reverse lg:flex-row w-full my-5 ">
        <InfoCard data={data} />
          <VideoCard data={data} />
        </div>
      <div className="bg-slate-700 mx-auto w-[80%] h-[1px]"></div>

        <SlotPicker data={data}/>
      </div>
    </div>
  );
};

const InfoCard = ({ data }) => {
  return (
    <div className="flex-1 mx-2 rounded-xl bg-dark-secondary-color p-5">
      <div className="grid grid-cols-2 grid-rows-2 w-full gap-2">
        <div className=" bg-dark-primary-color px-2 md:px-4 h-20 rounded-xl flex justify-start items-center">
          <Image width={20} height={20} priority={true} src="/images/calender.svg" alt="" />
          <span className="text-sm md:text-base font-semibold ml-3 text-left">30 Days</span>
        </div>
        <div className=" bg-dark-primary-color px-2 md:px-4 h-20 rounded-xl flex justify-start items-center">
          <Image width={20} height={20} priority={true} src="/images/double-chevron-right.svg" alt="" />
          <span className="text-sm md:text-base font-semibold ml-3 text-left">
            Starts from {moment(data.startDate).format("Do MMMM,YYYY")}
          </span>
        </div>
        <div className=" bg-dark-primary-color px-2 md:px-4 h-20 rounded-xl flex justify-start items-center">
          <Image width={20} height={20} priority={true} src="/images/video.svg" alt="" />
          <span className="text-sm md:text-base font-semibold ml-3 text-left">
            Virtual Class + QnA chat
          </span>
        </div>
        <div className=" bg-dark-primary-color px-2 md:px-4 h-20 rounded-xl flex justify-start items-center">
          <Image width={20} height={20} priority={true} src="/images/hour-glass.svg" alt="users" />
          <span className="text-sm md:text-base font-semibold ml-3 text-left">45 minutes/class</span>
        </div>
      </div>
      {/* Intructor */}
      <div className="my-8">
        <h1 className="text-2xl text-slate-200 mb-4">Meet your instructor</h1>
        <div className="flex items-center justify-center  gap-4">
          <div class="max-w-[300px] w-full ">
          <div className=" rounded-md overflow-hidden relative pt-[100%]">
            <Image src={data.instructor.image} alt="Instructor" fill={true} style={{objectFit:"cover",objectPosition:"0% 0%"}}  priority={true}/>
          </div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold mb-1">{data.instructor.name}</h3>
            <h3 className="text-sm text-slate-400">
              {data.instructor.description}
            </h3>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 w-full gap-2 mb-8">
        <div className=" bg-dark-primary-color px-2 md:px-4 h-20 rounded-xl flex justify-start items-center">
          <Image width={20} height={20} priority={true} src="/images/planner.svg" alt="" />
          <span className="text-sm md:text-base font-semibold ml-3 text-left">
            Personilzed Diet Plans
          </span>
        </div>
        <div className=" bg-dark-primary-color px-2 md:px-4 h-20 rounded-xl flex justify-start items-center">
          <Image width={20} height={20} priority={true} src="/images/clock.svg" alt="" />
          <span className="text-sm md:text-base font-semibold ml-3 text-left">
            Convinient Time Slots
          </span>
        </div>
      </div>
    </div>
  );
};
const VideoCard = ({ data }) => {
  return (
    <div className="flex-1 mx-2 rounded-xl rounded-xl overflow-hidden mb-4">
      <VideoPlayer video={data.video} />
      <EnrollButton applyClasses={"mb-4"}>
        {`Enroll Now(Starts ${moment(data.startDate).format("Do MMMM,YYYY")})`}
      </EnrollButton>
      <h4 className="text-lg text-slate-200 font-medium">
        Reserve a seat before {moment(data.startDate).format("Do MMMM,YYYY")}
      </h4>
      <h4 className="text-slate-300">Limited seats available</h4>
    </div>
  );
};
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
              style={{objectFit:"cover"}}
            />
            <button
              className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-center bg-slate-800 bg-opacity-50 p-2 rounded-lg"
              onClick={handleClick}
            >
              <Image src="/images/play.svg" alt="Play" width={32} height={32}/>
              <span className="text-sm">Watch Trailer</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
const SlotPicker = ({data}) => {
  const [selectedSlot, setSelectedSlot] = useState(null);
  return (
    <div className="flex flex-col items-start mt-8">
      <h1 className="text-2xl text-slate-200 mb-4 font-medium">
        Select your time slot
      </h1>
      <div className="flex flex-col md:flex-row items-start md:items-center gap-2 mb-4">
        <h4>Morning Slots</h4>
        <div className="flex justify-between gap-2 flex-wrap">
          {slots["morning"].map((s) => {
            return (
              <button
                key={s}
                className={`px-4 py-2 border-primary-color border-2 rounded ${
                  selectedSlot === s && " bg-primary-color"
                }`}
                onClick={() => {
                  setSelectedSlot(s);
                }}
              >
                <span>{s}</span>
              </button>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-start md:items-center gap-2 ">
        <h4>Evening Slots</h4>
        <div className="flex justify-between gap-2">
          {slots["evening"].map((s) => {
            return (
              <button
                key={s}
                className={`px-4 py-2 border-primary-color border-2 rounded ${
                  selectedSlot === s && " bg-primary-color"
                }`}
                onClick={() => {
                  setSelectedSlot(s);
                }}
              >
                <span>{s}</span>
              </button>
            );
          })}
        </div>
      </div>
      <EnrollButton applyClasses="py-4 mt-4 text-lg" disabled={!Boolean(selectedSlot) && true}>
        Book your slot at &#x20b9; {data.price}
      </EnrollButton>
    </div>
  );
};
export default TopSection;
