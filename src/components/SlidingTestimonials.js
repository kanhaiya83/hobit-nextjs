import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/autoplay";
import EnrollButton from "./EnrollButton";
import SectionHeading from "./SectionHeading";
import Image from "next/image";
const SlidingTestimonials = ({data}) => {
  const {testimonialsImages} = data;
  SwiperCore.use(Autoplay);
  return (
    <div className="my-10 md:my-15 w-full max-w-[1100px] mx-auto text-center px-[5%] px-4">
      <div className="text-center md:max-w-xl lg:max-w-3xl mx-auto">
        <SectionHeading className={"mb-2"}> Testimonials</SectionHeading>
        <p className="mb-6 pb-2 md:mb-12 md:pb-0">
          1000+ people people from all over the world have taken the classes.
        </p>
      </div>

      <div>
        <Swiper
          autoplay={{ delay: 3000 }}
          breakpoints={{
            300: {
              slidesPerView: 1.2,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1000: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
        >
          {testimonialsImages.map((img, i) => {
            return (
              <SwiperSlide key={i}>
                <div className=" p-2 rounded pt-[135%]">
                  <Image
                    src={img}
                    fill={true}
                    style={{ objectFit: "contain",objectPosition:"top"}}
                    alt=""
                    className="select-none w-full h-auto"
                    draggable="false"
                    quality={100}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <EnrollButton applyClasses={"md:py-6 my-8"}>
        Sale at &#x20b9;{data.price}
      </EnrollButton>
    </div>
  );
};
export default SlidingTestimonials;
