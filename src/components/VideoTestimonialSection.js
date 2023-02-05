import Image from "next/image";
import { useState } from "react";
import Modal from "react-modal";
import EnrollButton from "./EnrollButton";
import CrossImage from "./../../public/images/cross.svg"
import VideoJSPlayer from "./VideoJsPlayer";
import { twMerge } from "tailwind-merge";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    maxWidth: "700px",
    width: "100%",
    margin: "0 auto",
    border: "none",
    padding: "0",
    backgroundColor: "transparent",
    overflow: "visible",
  },
  overlay: {
    backgroundColor: "rgb(52 52 52 / 75%)",
    zIndex: 1000,
  },
};
const VideoTestimonialSection = ({ data }) => {
  const {videoTestimonials} = data;
  if(!videoTestimonials || videoTestimonials.length ===0){
    return "";
  }
  return (
    <section className="my-10 md:my-20 text-gray-700 max-w-[1200px] mx-auto">
      <div className={twMerge(`grid md:grid-cols-3 gap-3 lg:gap-5 text-center mb-8 ${videoTestimonials.length ===2 && " gap-6 lg:gap-12 md:grid-cols-2" }`)}>
        {videoTestimonials.map((t, i) => {
          return <Testimonial key={i} video={t} />;
        })}
      </div>
      <h4 className="text-2xl text-slate-800 font-medium text-center w-full mb-4">
        Reserve a seat before 10th Jan&apos;23 to join the January batch.
      </h4>
      <EnrollButton applyClasses={"py-4 md:py-6"}>
        {data.btnText}&#x20b9;&nbsp;
        <span className="line-through text-slate-200 font-thin">
          {data.before_discount_price}
        </span>
        <span className="ml-1 text-xl md:text-2xl font-bold">{data.price}</span>
      </EnrollButton>
    </section>
  );
};
const Testimonial = ({ video }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Login Modal"
      >
        <button
          onClick={closeModal}
          id="cross-btn"
          className="absolute -top-10 right-0 w-8 h-8"
        >
          <Image
            src={CrossImage}
            className="w-full"
          />
        </button>
        <div class="w-full max-w-[900px] px-2">
          <VideoJSPlayer
            options={{
              autoplay:"any"  ,
              controls: true,
              responsive: true,
              fluid: true,
              preload:"none",
              sources: [{
                src: video.src,
                type: video.type
              }]
            }}/>
        </div>
      </Modal>
      <div
        className="relative rounded-3xl overflow-hidden"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <div className="pt-[57%] overflow-hidden relative">
        <Image src={video.thumbnail} fill={true} priority={true} sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 25vw,
              20vw"/>
</div>          

        <div class="bg-black absolute left-0 top-0 w-full h-full bg-opacity-40"></div>
        <button class="absolute top-[50%] left-[50%] translate-x-[-50%]  translate-y-[-50%] w-14 h-14 p-2 rounded-md">
          <Image src="/images/play.svg" fill={true} style={{objectFit:"contain"}}/>
        </button>
      </div>
    </>
  );
};
export default VideoTestimonialSection;