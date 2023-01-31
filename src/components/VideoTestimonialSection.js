import Image from "next/image";
import { useState } from "react";
import Modal from "react-modal";
import EnrollButton from "./EnrollButton";
import CrossImage from "./../../public/images/cross.svg"
import VideoJSPlayer from "./VideoJsPlayer";
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
const videoTestimonials = [
  {
    src: "https://user-images.githubusercontent.com/76777058/213711162-3246f27d-fbfd-489e-a7bc-1d14e982e81b.mp4",
    thumbnail:
      "https://user-images.githubusercontent.com/76777058/214374975-6df5544d-6481-41f2-9d80-58689c525aa5.png",
    thumbnailText: "I saw really good result in just 2 months.",
  },
  {
    src: "https://user-images.githubusercontent.com/76777058/213711184-5eb620b3-723e-4c66-bd6b-67f39cb433c8.mp4",
    thumbnail:
      "https://user-images.githubusercontent.com/76777058/214551388-7fdaea10-1d7f-4fb0-aacc-967e8d661226.png",
    thumbnailText: "100% satisfied with the product.",
  },
];
const VideoTestimonialSection = ({ data }) => {
  return (
    <section className="my-10 md:my-20 text-gray-700 max-w-[1000px] mx-auto px-[5%]">
      <div className="grid md:grid-cols-2 gap-6 lg:gap-12 text-center mb-8">
        {videoTestimonials.map((t, i) => {
          return <Testimonial key={i} video={t} />;
        })}
      </div>
      <h4 className="text-2xl text-slate-800 font-medium text-center w-full mb-4">
        Reserve a seat before 10th Jan&apos;23 to join the January batch.
      </h4>
      <EnrollButton applyClasses={"py-4 md:py-6"}>
        30 Days transformative Zumba class in &#x20b9;&nbsp;
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
                type: 'video/mp4'
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