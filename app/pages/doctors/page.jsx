import Image from "next/image";
import React from "react";
import image1 from "@/public/images/image2.png";
import { BookCheck, CircleDollarSign, MapPin } from "lucide-react";

const OurDoctors = () => {
  return (
    <div className="max-w-7xl mx-auto mt-20">
      {/* heading */}
      <div className="text-center">
        <h2 className="text-4xl font-bold">Our Exports Doctors</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis neque, amet, explicabo aut laboriosam
          sed ad mollitia provident distinctio, a ea quam reprehenderit illum ab vel labore natus tempore dolorem.
        </p>

        {/* doctors card */}
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-14">
          {/* card1 */}
          <div className="bg-white border rounded-2xl p-4">
            <div>
              <Image width="full" height="full" src={image1} alt="image 1"></Image>
            </div>
            <div  className="">
              <h2>kareyan anderson</h2>
              <p className="mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, impedit.</p>
              <hr />
              <div className="flex gap-3 mt-4">
                <MapPin />
                <p>Gulshan dhaka bangladesh</p>
              </div>
              <div className="flex gap-3">
                <BookCheck />
                <p>Available Monday 22 November</p>
              </div>
              <div className="flex gap-3">
                <CircleDollarSign />
                <p>20</p>
              </div>

              <button className="px-4 w-full py-2 border border-yellow-500 rounded-xl">View Details</button>
            </div>
          </div>
          {/* card2 */}
          <div className="bg-white border rounded-2xl p-4">
            <div>
              <Image width="full" height="full" src={image1} alt="image 1"></Image>
            </div>
            <div  className="">
              <h2>kareyan anderson</h2>
              <p className="mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, impedit.</p>
              <hr />
              <div className="flex gap-3 mt-4">
                <MapPin />
                <p>Gulshan dhaka bangladesh</p>
              </div>
              <div className="flex gap-3">
                <BookCheck />
                <p>Available Monday 22 November</p>
              </div>
              <div className="flex gap-3">
                <CircleDollarSign />
                <p>20</p>
              </div>

              <button className="px-4 w-full py-2 border border-yellow-500 rounded-xl">View Details</button>
            </div>
          </div>
          {/* card3 */}
          <div className="bg-white border rounded-2xl p-4">
            <div>
              <Image width="full" height="full" src={image1} alt="image 1"></Image>
            </div>
            <div  className="">
              <h2>kareyan anderson</h2>
              <p className="mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, impedit.</p>
              <hr />
              <div className="flex gap-3 mt-4">
                <MapPin />
                <p>Gulshan dhaka bangladesh</p>
              </div>
              <div className="flex gap-3">
                <BookCheck />
                <p>Available Monday 22 November</p>
              </div>
              <div className="flex gap-3">
                <CircleDollarSign />
                <p>20</p>
              </div>

              <button className="px-4 w-full py-2 border border-yellow-500 rounded-xl">View Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurDoctors;
