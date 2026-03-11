// Hero Slider ----------------------------------------------------------------------

"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function HeroSlider() {

  const [slides, setSlides] = useState([]);

  useEffect(() => {
    fetch("https://appy.trycatchtech.com/v3/maganlalchikki/home_image_gallery")
      .then((res) => res.json())
      .then((data) => setSlides(data));
  }, []);

  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        loop={true}
        className="h-[250px] sm:h-[350px] md:h-[450px] lg:h-[540px]"
      >
        {slides.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${image.image})` }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}