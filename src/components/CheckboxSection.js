
const CheckboxSection = ({checklist}) => {
  return (
    <>
    <div class="w-full bg-white my-20 px-[5%]">
      <div class="max-w-[1000px] mx-auto">
        <h1 class="text-4xl text-slate-800 mb-8 max-w-[500px] mx-auto font-semibold text-center">
          Here are few benefits that you will receive by joining this class.
        </h1>
        <div class="w-full  grid grid-cols-1 md:grid-cols-2 grid-rows-3 gap-y-2 md:gap-x-4 md:gap-y-8">
          {checklist.map((t) => {
            return <CheckBox key={t.id} text={t.text} />;
          })}
        </div>
        {/* <h1 class="text-2xl font-semibold text-center px-1 my-8 text-slate-800">
        If you checked ANY of the boxes above, then you’re invited to join <span class=" text-[#FFAC32]">The 5 Day Transformative LinkedIn Workshop</span>. If you don’t believe me, just look at the kind of results my students have been getting:
        </h1> */}
      </div>
    </div>
    </>
  );
};
const CheckBox = ({ text }) => {
  return (
    <div class="flex items-center p-3 bg-[#fafafa] rounded-md">
      <div class="w-8 h-8 border-primary-color border-2 rounded relative aspect-square">
        <div class="absolute top-0 left-0 w-full h-full">
          <img src="/images/tick.svg" alt="" className="w-full"/>
        </div>
      </div>
      <h3 class="text-lg font-medium ml-2">{text}</h3>
    </div>
  );
};
export default CheckboxSection;
