import { useEffect, useState } from "react";
import GradientButton from "./GradientButton";
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
    <div class="bg-white w-full my-20 px-[5%]">
      <div class="max-w-[1000px] mx-auto">
        <h1 class="text-4xl font-semibold text-slate-800 text-center mx-auto">
          Time Is Running Out. Grab Your Spot Fast!
        </h1>
        <div class="flex justify-between w-full text-white mt-8">
          <div class="bg-slate-700 rounded-lg  flex-1 mx-3 flex items-center justify-center">
            <div class="flex flex-col items-centerp-6 md:p-10 text-center">
              <span class=" text-3xl md:text-6xl">{days}</span>
              <span class="text-lg text-slate-200">Days</span>
            </div>
          </div>
          <div class="bg-slate-700 rounded-lg  flex-1 mx-3 flex items-center justify-center">
            <div class="flex flex-col items-center p-6 md:p-10 text-center">
              <span class=" text-3xl md:text-6xl">{hours}</span>
              <span class="text-lg text-slate-200">Hours</span>
            </div>
          </div>
          <div class="bg-slate-700 rounded-lg  flex-1 mx-3 flex items-center justify-center">
            <div class="flex flex-col items-centerp-6 md:p-10 text-center">
              <span class=" text-3xl md:text-6xl">{minutes}</span>
              <span class="text-lg text-slate-200">Minutes</span>
            </div>
          </div>
          <div class="bg-slate-700 rounded-lg  flex-1 mx-3 flex items-center justify-center">
            <div class="flex flex-col items-centerp-6 md:p-10 text-center">
              <span class=" text-3xl md:text-6xl">{seconds}</span>
              <span class="text-lg text-slate-200">Seconds</span>
            </div>
          </div>
        </div>
        <div class="mt-10 flex justify-center w-full">
          <button className="w-full text-2xl py-6 px-10 text-white font-semibold rounded-lg  gradient-bg-animation">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};
export default TimerSection;
