import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/autoplay";
import EnrollButton from "./EnrollButton";
import SectionHeading from "./SectionHeading";
import Image from "next/image";
const testimonialsImages = [
  "https://user-images.githubusercontent.com/76777058/212974664-1dc1eb30-efa9-4752-be6d-866b2d740438.jpeg",
  "https://user-images.githubusercontent.com/76777058/212974671-9bfb484b-f873-4cf9-82c0-8af0cd06af7a.jpeg",
  "https://user-images.githubusercontent.com/76777058/212974677-1249e8a5-df10-457e-b514-ef2a29798a97.jpeg",
  "https://user-images.githubusercontent.com/76777058/212974681-9a5a04d9-f9e1-4832-8dc4-f0c04fdc26f6.jpeg",
  "https://user-images.githubusercontent.com/76777058/212974688-7183fff8-bb18-472d-8632-111e3be4a2c9.jpeg",
  "https://user-images.githubusercontent.com/76777058/212974693-3c635c0b-cd33-41e6-a419-c3c30748e0f6.jpeg",
  "https://user-images.githubusercontent.com/76777058/212974695-46a620e2-391b-47e5-a1a6-ba12c082eb04.jpeg",
  "https://user-images.githubusercontent.com/76777058/212974698-5cd7b95f-2c62-4e7d-a58b-14e59bad58d4.jpeg",
  "https://user-images.githubusercontent.com/76777058/212974702-31c8d967-9182-4720-b2c4-f21805b1c09e.jpeg",
  "https://user-images.githubusercontent.com/76777058/212974712-3463eb28-0ec2-443b-9baf-c53fba618cad.jpeg",
];
const SlidingTestimonials = ({ data }) => {
  const { testimonialsHeading } = data;
  SwiperCore.use(Autoplay);
  return (
    <div className="my-10 md:my-15 w-full max-w-[1100px] mx-auto text-center px-[5%] px-4">
      <div className="text-center md:max-w-xl lg:max-w-3xl mx-auto">
        <SectionHeading className={"mb-2"}> Testimonials</SectionHeading>
        <p className="mb-6 pb-2 md:mb-12 md:pb-0">{testimonialsHeading}</p>
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
                    style={{ objectFit: "contain", objectPosition: "top" }}
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
