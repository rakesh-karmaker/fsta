"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function HeroCardSwiper({ className }: { className: string }) {
  return (
    <div className={className + " image-container"}>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={4}
        grabCursor={true}
        speed={400}
        spaceBetween={20}
        autoplay={{
          delay: 1000,
        }}
        loop={true}
        className="image-swiper overflow-hidden"
      >
        {Array(5)
          .fill(0)
          .map((_, i) => {
            return (
              <SwiperSlide key={i}>
                <div className="w-[295px] h-[335px] max-2xl:w-[250px] max-2xl:h-[290px] max-xl:w-[200px] max-xl:h-[240px] max-lg:w-[160px] max-lg:h-[200px] bg-white rounded-t-[7px] shadow-[0px_0px_14.3px_rgba(0,_0,_0,_0.25)] max-lg:translate-0 max-lg:rotate-0 max-md:max-h-[150px] max-md:w-[120px]" />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}
