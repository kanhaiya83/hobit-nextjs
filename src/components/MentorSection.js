import Image from "next/image";
import React from "react";
import SectionHeading from "./SectionHeading";

const MentorSection = ({ data }) => {
  return (
    <div className="my-10 md:my-20 px-[5%] lg:py-[4] max-w-[900px] mx-auto">
      <SectionHeading>
        Your instructor
      </SectionHeading>
      <div className="flex flex-col md:flex-row items-center justify-center  gap-4">
        <div className="flex-1 max-w-[400px] rounded-md overflow-hidden">
          <div class="w-full pt-[100%] relative">
          <Image src={data.instructor.image} alt="Instructor" fill={true} style={{objectFit:"cover"}}/>
          </div>
        </div>
        <div className="flex-1 text-center">
          <h3 className="text-2xl font-bold mb-1">{data.instructor.name}</h3>
          <h3 className="text-sm text-slate-400 mb-4">
            {data.instructor.description}
          </h3>
          <p className="text-sm font-thin text-slate-700 max-w-[80%] mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non
            mauris sit amet nisi imperdiet fringilla. Maecenas molestie mauris
            tincidunt placerat tempus. Aenean eu consequat orci. Integer a
            blandit arcu.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MentorSection;
