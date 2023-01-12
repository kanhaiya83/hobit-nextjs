import moment from "moment";
import GradientButton from "./GradientButton";

const videoTestimonials = [
  "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fplayer.vimeo.com%2Fvideo%2F703700660%3Fh%3D76585e1ed8%26app_id%3D122963&amp;dntp=1&amp;display_name=Vimeo&amp;url=https%3A%2F%2Fvimeo.com%2F703700660%2F76585e1ed8&amp;image=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1421341536-79f6bac7ce17549e7677ed85488525d4dfbbe21dc1af168c29e81743d6808553-d_640&amp;key=96f1f04c5f4143bcb0f2e68c87d65feb&amp;type=text%2Fhtml&amp;schema=vimeo",
  "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fplayer.vimeo.com%2Fvideo%2F703700604%3Fh%3Dfb12c8fa05%26app_id%3D122963&amp;dntp=1&amp;display_name=Vimeo&amp;url=https%3A%2F%2Fvimeo.com%2F703700604%2Ffb12c8fa05&amp;image=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1421341131-7c7c17500d6eaa5d197592cff6b5633e230bf1a7e984e733b522fb8aeeb1ca2c-d_640&amp;key=96f1f04c5f4143bcb0f2e68c87d65feb&amp;type=text%2Fhtml&amp;schema=vimeo",
  "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fplayer.vimeo.com%2Fvideo%2F703700534%3Fh%3Dc98555dbe8%26app_id%3D122963&amp;dntp=1&amp;display_name=Vimeo&amp;url=https%3A%2F%2Fvimeo.com%2F703700534%2Fc98555dbe8&amp;image=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1421341123-cce2c99a0b0aeab17843e3ff4d7e5aeeea222b3ee251aa5af89fc02aa2756f47-d_640&amp;key=c4e54deccf4d4ec997a64902e9a30300&amp;type=text%2Fhtml&amp;schema=vimeo",
];
const VideoTestimonialSection = ({data}) => {
  return (
    <section className="my-10 md:my-20 text-gray-700 max-w-[1000px] mx-auto px-[5%]">
      <div className="grid md:grid-cols-3 gap-6 lg:gap-12 text-center mb-8">
        {/* {videoTestimonials.map((t, i) => {
          return <Testimonial key={i} testimonial={t} />;
        })} */}

        <div className="relative w-full pt-[100%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fplayer.vimeo.com%2Fvideo%2F703700660%3Fh%3D76585e1ed8%26app_id%3D122963&amp;dntp=1&amp;display_name=Vimeo&amp;url=https%3A%2F%2Fvimeo.com%2F703700660%2F76585e1ed8&amp;image=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1421341536-79f6bac7ce17549e7677ed85488525d4dfbbe21dc1af168c29e81743d6808553-d_640&amp;key=96f1f04c5f4143bcb0f2e68c87d65feb&amp;type=text%2Fhtml&amp;schema=vimeo"
            scrolling="no"
            allowfullscreen=""
            title="Aaradhya-14"
          ></iframe>
        </div>
        <div className="relative w-full pt-[100%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fplayer.vimeo.com%2Fvideo%2F703700604%3Fh%3Dfb12c8fa05%26app_id%3D122963&amp;dntp=1&amp;display_name=Vimeo&amp;url=https%3A%2F%2Fvimeo.com%2F703700604%2Ffb12c8fa05&amp;image=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1421341131-7c7c17500d6eaa5d197592cff6b5633e230bf1a7e984e733b522fb8aeeb1ca2c-d_640&amp;key=96f1f04c5f4143bcb0f2e68c87d65feb&amp;type=text%2Fhtml&amp;schema=vimeo"
            scrolling="no"
            allowfullscreen=""
            title="Aaradhya-14"
          ></iframe>
        </div>
        <div className="relative w-full pt-[100%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fplayer.vimeo.com%2Fvideo%2F703700534%3Fh%3Dc98555dbe8%26app_id%3D122963&amp;dntp=1&amp;display_name=Vimeo&amp;url=https%3A%2F%2Fvimeo.com%2F703700534%2Fc98555dbe8&amp;image=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1421341123-cce2c99a0b0aeab17843e3ff4d7e5aeeea222b3ee251aa5af89fc02aa2756f47-d_640&amp;key=c4e54deccf4d4ec997a64902e9a30300&amp;type=text%2Fhtml&amp;schema=vimeo"
            scrolling="no"
            allowfullscreen=""
            title="Aaradhya-14"
          ></iframe>
        </div>
      </div>
      <h4 className="text-2xl text-slate-800 font-medium text-center w-full mb-4">
        Reserve a seat before 10th Jan&apos;23 to join the January batch. 
      </h4>
      <GradientButton applyClasses={"w-full py-8 text-xl mb-4 font-medium flex justify-center"}>
        30 Days transformative Zumba class in &#x20b9;&nbsp;<div className="relative w-fit"><span className="line-through text-slate-200">1299</span><span class="absolute top-[70%] left-0">999</span></div>
      </GradientButton>
    </section>
  );
};
const Testimonial = ({ testimonial }) => {
  return (
    <div className="relative w-full pt-[100%]">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={testimonial}
        scrolling="no"
        allowfullscreen=""
        title="Aaradhya-14"
      ></iframe>
    </div>
  );
};
export default VideoTestimonialSection;
