import Image from "next/image";
import Link from "next/link";

const PageBanner = ({ title }) => {
  return (
    <div className="relative w-full h-[300px] flex items-center justify-center">

      <Image
        src="/Chikki-CategoryImage.jpg"
        alt="banner"
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative text-center text-white">
        <h1 className="text-4xl font-bold">{title}</h1>

        <div className="mt-2">
          <Link href="/">Home</Link>
          <span className="mx-2">/</span>
          <span>{title}</span>
        </div>
      </div>

    </div>
  );
};

export default PageBanner;