import Image from "next/image";
import { useState } from "react";
import EnrollButton from "./EnrollButton";
import SectionHeading from "./SectionHeading";

const CheckboxSection = ({ data }) => {
  return (
    <>
      <div class="w-full bg-white my-10 md:my-15  px-[5%]">
        <div class="max-w-[1000px] mx-auto">
          <SectionHeading className={"mb-2"}>
            Still Wondering If This Virtual Class Is For You?
          </SectionHeading>
          <h1 class="text-2xl text-slate-700 mb-8 mx-auto text-center">
          Please Check All Boxes Where Your Answer Is YES!
          </h1>
          <div class="w-full flex flex-col gap-y-4">
            {data.checklist.map((t) => {
              return <CheckBoxContainer key={t.id} text={t.text} />;
            })}
          </div>
          <h1 class="text-2xl font-medium text-center px-1 my-8 text-slate-800">
        If you checked ANY of the boxes above, then you’re invited to join <span class=" text-[#FFAC32]">The {data.daysCount} Days Transformative {data.activity_name} Program</span>
        </h1>

      <EnrollButton applyClasses="md:py-5 mt-4">
        Book your slot!
      </EnrollButton>
        </div>
      </div>
    </>
  );
};
const CheckBoxContainer = ({ text }) => {
  return (
    <div class="flex items-center py-4 px-5 bg-[#f7f7f7] hover:bg-[#ededed] rounded-md">
      <CheckBox/>
      <h3 class="text-lg font-medium ml-2">{text}</h3>
    </div>
  );
};
const CheckBox = () => {
  const [checked,setChecked] = useState(false)
  return (
    <button class="w-8 h-8 border-primary-color border-2 rounded relative aspect-square" onClick={()=>{setChecked(prev=>!prev)}}>
      {checked && <div class="absolute top-0 left-0 w-full h-full">
        <Image src="/images/tick.svg" width={30} height={30}  alt="Check mark" />
      </div>}
    </button>
  );
};
export default CheckboxSection;
