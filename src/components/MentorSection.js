import React from "react";

const MentorSection = ({ data }) => {
  return (
    <div className="my-10 md:my-20 px-[5%] lg:py-[4] max-w-[900px] mx-auto">
      <h1 class="text-4xl font-semibold text-slate-800 mb-8 w-ful text-center">
        Your instructor
      </h1>
      <div className="flex items-center justify-center  gap-4">
        <div className="w-full max-w-[400px] rounded-md overflow-hidden">
          <img src={data.instructor.image} alt="" />
        </div>
        <div className="flex-1 text-center">
          <h3 className="text-2xl font-bold mb-1">{data.instructor.name}</h3>
          <h3 className="text-sm text-slate-400 mb-4">
            {data.instructor.description}
          </h3>
          <p className="text-sm font-thin text-slate-700">
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