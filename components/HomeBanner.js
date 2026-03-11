

// Banner Section -------------------------------------------------------------------------

// this is 3 images Banner after hero Slider 

"use client"

import { useEffect, useState } from "react";
import Image from "next/image";

const BannerSection = () => {

  const [banners, setBanners] = useState([]);

  useEffect(()=>{

    fetch("https://appy.trycatchtech.com/v3/maganlalchikki/banner_image")
    .then(res => res.json())
    .then(data => setBanners(data))

  },[])

  return (
    <section className="py-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {banners.map((item, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-md">
            <img
              src={item.banner_image}
              alt="Banner"
              width={370}
              height={200}
              className="w-full h-[200px] object-cover hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BannerSection;