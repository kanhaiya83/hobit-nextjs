import { twMerge } from "tailwind-merge";
import { useAuthContext } from "../context/authContext";
import EnrollButton from "./EnrollButton";

  const SlotPicker = ({ data }) => {
    const {slot,setSlot}=useAuthContext()
    return (
      <div className="flex flex-col items-start mt-8 w-full max-w-[700px]" id="slot-picker">
        <h1 className=" mb-4 font-medium">
          <span className="text-lg md:text-2xl font-medium">Not getting flexible time slots?</span>
          <br/>
          <span className="md:text-xl text-slate-400">You can choose any of these time slots everyday according to your convenience.</span>
        </h1>
        <div className="flex flex-col items-start gap-2 mb-4 w-full">
          <h4 className="text-slate-400 text-sm md:text-base">Morning Slots</h4>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 w-full">
            {data.slots["morning"].map((s) => {
              return (
                <button
                  key={s}
                  className={twMerge(`px-4 py-2 border-slate-500 text-slate-300 border-2 rounded ${
                    slot === s && " border-primary-color text-white bg-primary-color"
                  }`)}
                  onClick={() => {
                    setSlot(s);
                  }}
                >
                  <span>{s}</span>
                </button>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col items-start gap-2 mb-4 w-full">
          <h4 className="text-slate-400 text-sm md:text-base">Evening Slots</h4>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 w-full">
            {data.slots["evening"].map((s) => {
              return (
                <button
                  key={s}
                  className={twMerge(`px-4 py-2 border-slate-500 text-slate-300 border-2 rounded ${
                    slot === s && " border-primary-color text-white bg-primary-color"
                  }`)}
                  onClick={() => {
                    setSlot(s);
                  }}
                >
                  <span>{s}</span>
                </button>
              );
            })}
          </div>
        </div>
        <EnrollButton
          applyClasses="py-4 mt-4"
          disabled={!Boolean(slot) && true}
        >
          Book your slot at &#x20b9; {data.price}
        </EnrollButton>
      </div>
    );
  };

  export default SlotPicker