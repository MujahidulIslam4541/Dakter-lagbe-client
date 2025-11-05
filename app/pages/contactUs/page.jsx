import { BookCheck, MapPin } from "lucide-react";
import React from "react";

const ContactUs = () => {
  return (
    <div className="max-w-7xl mx-auto bg-[#07332F] text-white grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 px-8  rounded-xl py-10">
      {/* content */}
      <div>
        <h2>Contact With Us</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas obcaecati officiis quae,
          voluptatibus id? Inventore, explicabo aperiam quia nostrum ex veritatis ab corrupti dolorem? Ullam, maiores!
          Nobis, quae adipisci. Soluta officiis recusandae rerum corporis ipsa. Vel pariatur numquam dolorum laborum
          accusantium expedita illo sapiente libero. Numquam molestiae dicta consectetur.
        </p>
        <div className="flex gap-3 mt-4">
          <MapPin />
          <p>Gulshan dhaka bangladesh</p>
        </div>
        <div className="flex gap-3">
          <BookCheck />
          <p>Available Monday 22 November</p>
        </div>
      </div>
      {/* input from */}
      <form className="grid grid-cols-2 gap-2">
        <input type="text" placeholder="Name" className="col-span-1" />
        <input type="email" placeholder="E-mail" className="col-span-1" />
        <input type="number" placeholder="Number" className="col-span-1" />
        <input type="text" placeholder="Doctor Name" className="col-span-1" />
        <input type="date" placeholder="Date" className="col-span-1" />
        <input type="time" placeholder="Time" className="col-span-1" />
        <button className="border border-yellow-500 col-span-2 ">Book Now</button>
      </form>
    </div>
  );
};

export default ContactUs;
