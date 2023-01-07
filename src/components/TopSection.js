import Image from "next/image";
import { useAuthContext } from "../context/authContext";
import GradientText from "./GradientText";

const TopSection = ({data}) => {
  return (
    <div className="bg-dark-primary-color w-full text-white relative overflow-hidden">
      <div class="bg-dark-primary-color absolute top-0 left-0 w-full h-full">
          <img src={data.bgImage} alt="background"/>
      </div>
      <div className=" py-32 flex flex-col items-center mx-auto max-w-[900px] text-center relative">
        <h1 className="text-4xl font-semibold mb-4 px-[10%]"><GradientText>{data.title}</GradientText></h1>
        <h5 className="text-lg font-medium px-[15%] mx-auto my-2">
          {data.description}
        </h5>
        <div className="flex w-full mt-5">
          <LeftCard data={data}/>
          <RightCard />
        </div>
      </div>
    </div>
  );
};

const LeftCard = ({data}) => {
  return (
    <div className="w-full mx-2 rounded-xl bg-dark-secondary-color p-5">
      <div className="grid grid-cols-2 grid-rows-2 w-full gap-2">
        <div className=" bg-primary-color px-4 h-20 rounded-xl flex justify-start items-center">
          <img
          className="w-8"
            src="https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/60d4e6508e4e0d3d23669fba_Vector-2.svg"
            alt=""
          />
          <span className="font-semibold ml-2 text-left">5 Days</span>
        </div>
        <div className=" bg-primary-color px-4 h-20 rounded-xl flex justify-start items-center">
          <img
          className="w-8"
            src="https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/60d4e6511fcd6385aa72ac2c_Vector.svg"
            alt=""  
          />
          <span className="font-semibold ml-2 text-left">Pre-recorded Videos</span>
        </div>
        <div className=" bg-primary-color px-4 h-20 rounded-xl flex justify-start items-center">
          <img
          className="w-8"
            src="https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/60d4e6508e4e0d3d23669fba_Vector-2.svg"
            alt=""
          />
          <span className="font-semibold ml-2 text-left">5 Days</span>
        </div>
        <div className=" bg-primary-color px-4 h-20 rounded-xl flex justify-start items-center">
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
      <div className="flex">
        <div className="py-6 px-3 mx-2 rounded-xl bg-primary-color">
          <h1 className="text-4xl font-semibold text-red-500"><GradientText>300K+</GradientText></h1>
          <h6 className="mt-2">LinkedIn Followers</h6>
        </div>
        <div className="py-6 px-3 mx-2 rounded-xl bg-primary-color ">
          <h1 className="text-4xl font-semibold text-red-500"><GradientText>150M+</GradientText></h1>
          <h6 className="mt-2">LinkedIn Impressions</h6>
        </div>
      </div>
    </div>
  );
};
const RightCard = () => {
  return (
    <div className="w-full mx-2 rounded-xl rounded-xl overflow-hidden">
     <div class="w-full mb-5">
      <img src="https://i.vimeocdn.com/video/1297959690-e3058771ece32e64e4aa8522218cb9f8b76e3480f34c23c02?mw=500&mh=282" alt="" class="w-full"/>
     </div>
    <h5 className=" text-lg mb-6">Reserve a seat before January 5, 2023 to unlock Bonuses worth ₹45,000</h5>
    <button className="grad-btn w-full text-center text-lg font-semibold text-white py-5 rounded-lg">Reserve Seat for ₹499</button>
    </div>
  );
};
export default TopSection;
