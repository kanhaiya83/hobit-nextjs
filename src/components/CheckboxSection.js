const TEXT_LIST = [
  "I want to build my personal brand but have no idea where to start",
  "I want to build my personal brand but have no idea where to start",
  "I want to build my personal brand but have no idea where to start",
  "I want to build my personal brand but have no idea where to start",
  "I want to build my personal brand but have no idea where to start",
  "I want to build my personal brand but have no idea where to start",
];
const CheckboxSection = () => {
  return (
    <div class="w-full bg-white py-32">
      <div class="max-w-[1000px] mx-auto">
        <h1 class="text-4xl text-slate-800 mb-8 px-[25%] font-semibold text-center">
          Please Check All Boxes Where Your Answer Is YES!
        </h1>
        <div class="w-full  grid grid-cols-2 grid-rows-3 gap-x-4 gap-y-8">
          {TEXT_LIST.map((t, i) => {
            return <CheckBox key={i} text={t} />;
          })}
        </div>
        <h1 class="text-2xl font-semibold text-center px-1 my-8 text-slate-800">
        If you checked ANY of the boxes above, then you’re invited to join <span class=" text-[#FFAC32]">The 5 Day Transformative LinkedIn Workshop</span>. If you don’t believe me, just look at the kind of results my students have been getting:
        </h1>
      </div>
    </div>
  );
};
const CheckBox = ({ text }) => {
  return (
    <div class="flex items-center p-3 bg-slate-100 rounded-md">
      <div class="w-8 h-8 border-emerald-400 border-2 rounded mr-2"></div>
      <h3 class="text-lg font-medium">{text}</h3>
    </div>
  );
};
export default CheckboxSection;
