import EnrollButton from "./EnrollButton";

const videoTestimonials = [
  {
    src: "https://user-images.githubusercontent.com/76777058/213711162-3246f27d-fbfd-489e-a7bc-1d14e982e81b.mp4",
    thumbnail: "https://user-images.githubusercontent.com/76777058/214374975-6df5544d-6481-41f2-9d80-58689c525aa5.png",
  },
  {
    src: "https://user-images.githubusercontent.com/76777058/213711184-5eb620b3-723e-4c66-bd6b-67f39cb433c8.mp4",
    thumbnail: "https://user-images.githubusercontent.com/76777058/214374912-47c0d644-3100-49d6-8da5-ef7a58a05d97.png",
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
      <EnrollButton applyClasses={"flex justify-center py-4 md:py-6"}>
        30 Days transformative Zumba class in &#x20b9;&nbsp;
        <span className="line-through text-slate-200 font-thin">
          {data.before_discount_price}
        </span>
        <span className="ml-1 text-2xl font-bold">{data.price}</span>
      </EnrollButton>
    </section>
  );
};
const Testimonial = ({ video }) => {
  return (
    <div className="relative w-full">
      <video controls preload="metadata" poster={video.thumbnail}>
        <source src={video.src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
export default VideoTestimonialSection;
