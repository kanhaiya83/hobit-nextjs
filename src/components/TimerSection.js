import { useEffect, useState } from "react";
import EnrollButton from "./EnrollButton";
import SectionHeading from "./SectionHeading";
const TimerSection = ({ data }) => {
  const [timeRemaining, setTimeRemaining] = useState(0);
  const seconds = timeRemaining % 60;
  const minutes = Math.floor((timeRemaining % 3600) / 60);
  const hours = Math.floor((timeRemaining % (3600 * 24)) / 3600);
  const days = Math.floor(timeRemaining / (3600 * 24));

  useEffect(() => {
    setTimeRemaining(
      Math.trunc((data.startDate - new Date().getTime()) / 1000)
    );
  }, []);
  useEffect(() => {
    const i = setInterval(() => {
      setTimeRemaining((prev) => prev - 1);
    }, 1000);
    return () => {
      clearInterval(i);
    };
  }, [timeRemaining]);
  return (
    <div className="bg-white w-full my-10 md:my-15 px-[5%]">
      <div className="max-w-[1000px] mx-auto">
        <SectionHeading>
          Time Is Running Out. Grab Your Spot Fast!
        </SectionHeading>
        <div className="flex justify-between w-full text-white mt-8">
          <div className="bg-slate-700 rounded-lg  flex-1 mx-1 md:mx-3 flex items-center justify-center">
            <div className="flex flex-col items-center p-3 md:p-10 text-center">
              <span className=" text-xl md:text-6xl">{days}</span>
              <span className="text-sm md:text-lg text-slate-200">Days</span>
            </div>
          </div>
          <div className="bg-slate-700 rounded-lg  flex-1 mx-1 md:mx-3 flex items-center justify-center">
            <div className="flex flex-col items-center p-3 md:p-10 text-center">
              <span className=" text-xl md:text-6xl">{hours}</span>
              <span className="text-sm md:text-lg text-slate-200">Hours</span>
            </div>
          </div>
          <div className="bg-slate-700 rounded-lg  flex-1 mx-1 md:mx-3 flex items-center justify-center">
            <div className="flex flex-col items-center p-3 md:p-10 text-center">
              <span className=" text-xl md:text-6xl">{minutes}</span>
              <span className="text-sm md:text-lg text-slate-200">Minutes</span>
            </div>
          </div>
          <div className="bg-slate-700 rounded-lg  flex-1 mx-1 md:mx-3 flex items-center justify-center">
            <div className="flex flex-col items-center p-3 md:p-10 text-center">
              <span className=" text-xl md:text-6xl">{seconds}</span>
              <span className="text-sm md:text-lg text-slate-200">Seconds</span>
            </div>
          </div>
        </div>
        <div className="mt-10 flex justify-center w-full">
          <EnrollButton className="gradient-bg-animation">
            Enroll Now
          </EnrollButton>
        </div>
      </div>
    </div>
  );
};
export default TimerSection;
