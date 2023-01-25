import moment from "moment";
import Image from "next/image";
import EnrollButton from "./EnrollButton";
import GradientText from "./GradientText";
import SlotPicker from "./SlotPicker";
import VideoPlayer from "./VideoPlayer";
// import moment from "moment/moment";
const ParsedGradientText=(textData)=>{

  if (textData) {
    return textData.map((txt, i) => {
      if (txt["gradient"]) {
        return <GradientText key={i}>{txt["gradient"]}</GradientText>;
      }
      return <span key={i}>{txt["normal"]}</span>;
    });
  }
}
const FeaturedCard=({image,text})=>{
  return(
    <div className=" bg-dark-primary-color px-2 md:px-4 py-4 md:py-6 rounded-xl flex justify-start items-center">
    <Image
      width={20}
      height={20}
      priority={true}
      src={image}
      alt=""
    />
    <span className="text-xs md:text-base font-semibold ml-3 text-left">
      {text}
    </span>
  </div>
  )
}
const TopSection = ({ data }) => {
 
  return (
    <div className="bg-dark-primary-color w-full text-white relative overflow-hidden z-10 px-[5%] py-4">
      <div className="bg-dark-primary-color absolute top-0 left-0 w-full h-full flex items-start justify-start">
        <Image
          src={data.bgImage}
          fill={true}
          style={{ objectFit: "contain", objectPosition: "0% 0%" }}
          alt="background"
          className="w-[50%]"
          priority={true}
        />
      </div>
      <div className="pt-20 md:pt-32 flex flex-col items-center mx-auto max-w-[1100px] text-center relative">
        <h1 className="flex flex-col md:block text-xl md:text-5xl font-bold mb-4 max-w-[80%] md:max-w-[90%]">
          {ParsedGradientText(data.title)}
        </h1>
        <h5 className="text-sm md:text-lg font-medium md:px-[15%] mx-auto my-2">
          {ParsedGradientText(data.description)}
        </h5>
        <div className="flex flex-col-reverse lg:flex-row w-full my-5 ">
          <InfoCard data={data} />
          <VideoCard data={data} />
        </div>
        <div className="bg-slate-700 mx-auto w-[80%] h-[1px]"></div>

        <SlotPicker data={data} />
      </div>
    </div>
  );
};

const InfoCard = ({ data }) => {
  return (
    <div className="flex-1 mx-2 rounded-xl bg-dark-secondary-color p-5">
      <div className="grid grid-cols-2 grid-rows-2 w-full gap-2">
        <FeaturedCard text="30 Days" image="/images/calender.svg"/>
        <FeaturedCard text={`Starts from ${moment(data.startDate).format("Do MMMM,YYYY")}`} image="/images/double-chevron-right.svg"/>
        <FeaturedCard text="Virtual Class + QnA chat" image="/images/video.svg"/>
        <FeaturedCard text="40-45 minutes/class" image="/images/hour-glass.svg"/>
      </div>
      {/* Intructor */}
      <div className="my-8">
        <h1 className="text-2xl text-slate-200 mb-4">Meet your instructor</h1>
        <div className="flex items-center justify-center gap-4">
          <div className="max-w-[300px] flex-[4]">
            <div className=" rounded-md overflow-hidden relative pt-[100%]">
              <Image
                src={data.instructor.image}
                alt="Instructor"
                fill={true}
                style={{ objectFit: "cover", objectPosition: "0% 0%" }}
                priority={true}
              />
            </div>
          </div>
          <div className="flex flex-col  flex-[6] text-left">
            <h3 className="text-xl md:text-2xl font-bold mb-1">{data.instructor.name}</h3>
            <h3 className="text-xs md:text-sm text-slate-400 ">
              {data.instructor.description}
            </h3>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 w-full gap-2 mb-8">
        <div className=" bg-dark-primary-color px-1 md:px-4 py-4 md:py-6 rounded-xl flex justify-start items-center">
          {/* <Image
            width={20}
            height={20}
            priority={true}
            src="/images/planner.svg"
            alt=""
          /> */}
          <span className="text-base md:text-base font-semibold ml-3 text-left">
            Personilzed Diet Plans
          </span>
        </div>
        <div className=" bg-dark-primary-color px-1 md:px-4 py-4 md:py-6 rounded-xl flex justify-start items-center">
          {/* <Image
            width={20}
            height={20}
            priority={true}
            src="/images/clock.svg"
            alt=""
          /> */}
          <span className="text-base md:text-base font-semibold ml-3 text-left">
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
      <EnrollButton applyClasses={"mb-4 py-6 md:py-4"}>
        Enroll now at &#x20b9; {data.price}
      </EnrollButton>
      <h4 className="md:text-lg text-slate-200 font-medium">
        Reserve a seat before {moment(data.startDate).format("Do MMMM,YYYY")}
      </h4>
      <h4 className="text-slate-300">Limited seats available</h4>
    </div>
  );
};
export default TopSection;
