import React from "react";
import groupImage from "@/public/images/Group8.png";
import image7 from "@/public/images/Group7.png";
import image6 from "@/public/images/Group6.png";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative w-full h-full bg-[#07332F] text-white overflow-hidden md:h-lvh">
      <div className="max-w-7xl mx-auto  px-6 py-16 grid grid-cols-1 md:grid-cols-2 items-center gap-12">

        {/* Left side */}
        <div className="space-y-6 relative">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Your Best Medical <br /> Help Center
          </h2>

          {/* Decorative floating image */}
          <Image
            src={image7}
            alt="decorative shape"
            className="absolute hidden lg:block md:left-80 md:top-10 w-52 h-52 opacity-80"
          />

          <p className="text-gray-200 text-base md:text-lg leading-relaxed max-w-md">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry s standard dummy text ever since.
          </p>

          <button className="bg-[#F7A582] hover:bg-[#f58e64] text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-300">
            All Services
          </button>
        </div>

        {/* Right side */}
        <div className="relative flex justify-center md:justify-end mt-10">
          <Image
            src={groupImage}
            alt="banner main image"
            className="w-full max-w-md lg:max-w-lg"
          />
          <Image
            src={image6}
            alt="decorative shape"
            className="absolute bottom-0 left-12 w-16 h-28 hidden md:block"
          />
        </div>

      </div>
    </div>
  );
};

export default Banner;
