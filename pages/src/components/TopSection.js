import { useAuthContext } from "../context/authContext";
import GradientText from "./GradientText";

const TopSection = () => {
const {setIsAuthModalOpen} = useAuthContext()
  return (
    <div className="bg-primary-color w-full text-white css-top-section relative">
      <div className=" py-32 flex flex-col items-center mx-auto max-w-[900px] text-center">
        <h1 className="text-4xl font-semibold mb-4 px-[10%]">Learn Secrets To <GradientText>Skyrocket Your Linkedin </GradientText>  Growth In Just 5 Days!</h1>
        <h5 className="text-lg font-medium px-[15%] mx-auto my-2">
          Secrets that generated me over <GradientText>300K+ followers</GradientText>, and <GradientText>1000’s of leads</GradientText>
          for FREE bringing in <GradientText>thousands of dollars</GradientText> on a monthly basis from
          Linkedin.
        </h5>
        <div className="flex w-full mt-5">
          <LeftCard />
          <RightCard />
        </div>
      </div>
    </div>
  );
};

const LeftCard = () => {
  return (
    <div className="w-full mx-2 rounded-xl bg-secondary-color p-5">
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
            src="https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/60d4e6508e4e0d3d23669fba_Vector-2.svg"
            alt=""
          />
          <span className="font-semibold ml-2 text-left">5 Days</span>
        </div>
      </div>
      <div className="flex flex-col items-center py-8">
        <h3 className="text-2xl font-bold mb-1">John Doe</h3>
        <h3 className="text-sm text-slate-400">
          LinkedIn Growth Expert,
          <br />
          Growth Hacker,
          <br />
          Ex- Uber & Klook
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
