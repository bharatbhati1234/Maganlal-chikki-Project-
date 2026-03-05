

// Banner Section -------------------------------------------------------------------------

// this is 3 images Banner after hero Slider 

import Image from "next/image";

const banners = [
  {
    id: 1,
    img: "https:\/\/appy.trycatchtech.com\/uploads\/maganlalchikki\/cbb5c93caccae4783f52f3bdc2c4ec2d.jpg",
  },
  {
    id: 2,
    img: "https:\/\/appy.trycatchtech.com\/uploads\/maganlalchikki\/856ed0df1543eb9dc2558153c2bd2204.jpg",
  },
  {
    id: 3,
    img: "https:\/\/appy.trycatchtech.com\/uploads\/maganlalchikki\/bcb3ff17e992db6004e9c70ababace3a.jpg",
  },
];

const BannerSection = () => {
  return (
    <section className="py-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {banners.map((item) => (
          <div key={item.id} className="overflow-hidden rounded-lg shadow-md">
            <img
              src={item.img}
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