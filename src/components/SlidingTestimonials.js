import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/autoplay";
import EnrollButton from "./EnrollButton";
import SectionHeading from "./SectionHeading";
import Image from "next/image";
const testimonialImages = [
  "https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/5feb5c987b9f08191d9463d3_Screenshot_20201012-012848_Instagram-1.png",
  "https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/5feb5c987b9f0889409463e7_Screenshot_20201009-140529_Instagram-1.png",
  "https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/5feb5c987b9f0860859463e5_Screenshot_20201001-053628_Instagram-1.png",
  "https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/5feb5c987b9f0889409463e7_Screenshot_20201009-140529_Instagram-1.png",
  "https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/5feb5c987b9f083d009463eb_Screenshot_20201012-001628_Instagram-1.png",
  "https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/5feb5c987b9f0860859463e5_Screenshot_20201001-053628_Instagram-1.png",
  "https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/5feb5c987b9f0889409463e7_Screenshot_20201009-140529_Instagram-1.png",
  "https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/5feb5c987b9f083d009463eb_Screenshot_20201012-001628_Instagram-1.png",
];
const SlidingTestimonials = () => {
  SwiperCore.use(Autoplay);
  return (
    <div class="my-10 md:my-15 w-full max-w-[1100px] mx-auto text-center px-[5%] px-4">
      <div className="text-center md:max-w-xl lg:max-w-3xl mx-auto">
        <SectionHeading className={"mb-2"}> Testimonials</SectionHeading>
        <p className="mb-6 pb-2 md:mb-12 md:pb-0">
          1000+ people people from all over the world have taken the classes.
        </p>
      </div>

      <div>
        <Swiper
          autoplay={{ delay: 300000 }}
          breakpoints={{
            400: {
              slidesPerView: 1,
              spaceBetween: 0,
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
          {testimonialImages.map((img, i) => {
            return (
              <SwiperSlide key={i}>
                <div className=" p-2 rounded pt-[157%]">
                  <Image
                    src={img}
                    onLoadingComplete={(e)=>{console.log(e);}}
                    fill={true}
                    style={{ objectFit: "contain",objectPosition:"top"}}
                    alt=""
                    className="select-none w-full h-auto"
                    draggable="false"
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <EnrollButton applyClasses={"md:py-6 my-8"}>
        Sale at &#x20b9;999
      </EnrollButton>
    </div>
  );
};
export default SlidingTestimonials;
