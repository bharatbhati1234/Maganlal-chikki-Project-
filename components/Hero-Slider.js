// Hero Slider ---------------------------------------------------------------------------------------

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function HeroSlider() {
  const slides = [
    "https:\/\/appy.trycatchtech.com\/uploads\/maganlalchikki\/c1a016c7edcd233ce85cbfa8a23319b3.jpg",
    "https:\/\/appy.trycatchtech.com\/uploads\/maganlalchikki\/d10327cce146d2da9a1106a589dc27ed.jpg",
    "https:\/\/appy.trycatchtech.com\/uploads\/maganlalchikki\/0c9a3ba5d4cfdc351587dd365f639d2f.jpg",
     "https:\/\/appy.trycatchtech.com\/uploads\/maganlalchikki\/3db94bbb8007768afab757fda9fd9fa8.jpg",
      "https:\/\/appy.trycatchtech.com\/uploads\/maganlalchikki\/0215ae7602f0812e4dff20ae3a129624.jpg",
   
  ];

  return (
    <div className="w-full">
      <Swiper
        // modules={[Autoplay, Pagination]}
        // autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        loop={true}
        className="h-[250px] sm:h-[350px] md:h-[450px] lg:h-[540px]"
      >
        {slides.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}