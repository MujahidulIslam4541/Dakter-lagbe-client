import React from "react";
import groupImage from "@/public/images/Group8.png";
import image7 from "@/public/images/Group7.png";
import image6 from "@/public/images/Group6.png";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="w-full h-lvh bg-[#07332F] text-white px-10">
      <div className="grid  grid-cols-1 md:grid-cols-2 ">
        {/* left side */}
        <div className="col-span-1">
          <h2 className="text-4xl font-bold">Your Best Medical Help Center</h2>
          <Image src={image7} alt="image"></Image>
          <p>Lorem Ipsum is simply dummy text they are printing typesetting has been the industry’s stardard.</p>
          <button>All Service</button>
<Image src={image6}  alt="images"></Image>
        </div>

        {/* right side */}
        <div className="  col-span-1">
          <Image src={groupImage} alt="banner image"></Image>
        </div>
      </div>
    </div>
  );
};

export default Banner;
