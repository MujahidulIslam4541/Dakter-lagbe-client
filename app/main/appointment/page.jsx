"use client";

import DoctorProfileImage from "@/public/images/Vector.png";
import DoctorProfileImage2 from "@/public/images/Group7.png";
import chairImage from "@/public/images/chair.png";
import teethImage from "@/public/images/teeth.png";
import Flat from "@/public/images/Flat.png";
import Group from "@/public/images/Group.png";
import Group23 from "@/public/images/Group23.png";
import smile from "@/public/images/smile.png";
import teeth from "@/public/images/teeth.png";
import teethGroup from "@/public/images/teethGroup.png";
import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Appointment = () => {
  const [date, setDate] = useState(new Date());

  const services = [
    { img: teethImage, title: "Teeth Orthodontics" ,id:1 },
    { img: Flat, title: "Teeth Cleaning" ,id:2 },
    { img: Group, title: "Cosmetic Dentistry",id:3 },
    { img: Group23, title: "Teeth Whitening",id:4 },
    { img: teethGroup, title: "Cavity Protection",id:5 },
    { img: smile, title: "Pediatric Dental" ,id:6},
    { img: teeth, title: "Oral Surgery",id:7 },
    { img: teethImage, title: "Teeth Orthodontics",id:8 },
  ];

  return (
    <div className="w-full bg-gray-50">
      {/* Banner Section */}
      <div className="relative w-full h-64 md:h-72 bg-[#07332F] flex flex-col md:flex-row items-center justify-between px-6 md:px-16">
        {/* Left Image */}
        <div className="w-24 md:w-32 h-24 md:h-32 relative mb-4 md:mb-0">
          <Image src={DoctorProfileImage} alt="Left Banner Image" fill className="object-contain" />
        </div>

        {/* Banner Title */}
        <h2 className="text-white text-3xl md:text-4xl font-bold flex-1 text-center md:text-left">Appointment</h2>

        {/* Right Image */}
        <div className="w-24 md:w-32 h-24 md:h-32 relative mt-4 md:mt-0">
          <Image src={DoctorProfileImage2} alt="Right Banner Image" fill className="object-contain" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-6 md:px-16">
        {/* Calendar + Chair Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Calendar */}
          <div className=" p-8 rounded-3xl ">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Select Your Appointment Date</h3>
            <Calendar
              onChange={setDate}
              value={date}
              className="react-calendar w-full text-gray-800 rounded-xl border border-gray-200"
            />
          </div>

          {/* Chair Image */}
          <div className="flex justify-center items-center">
            <Image src={chairImage} alt="Chair Image" className="rounded-2xl shadow-md" />
          </div>
        </div>

        {/* Services Section */}
        <div className="mt-16 text-center">
          <p className="text-orange-400 font-medium mb-2">Available Services on {date.toDateString()}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Please select a service</h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            >
              <div className="bg-[#ffecee] p-4 rounded-xl mb-4 flex justify-center items-center">
                <Image src={service.img} alt={service.title} className="w-16 h-16" />
              </div>
              <h3 className="text-gray-900 font-medium text-center">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Global Calendar Styles */}
      <style jsx global>{`
        .react-calendar {
          border: none;
          font-family: "Poppins", sans-serif;
        }
        .react-calendar__month-view__weekdays {
          text-align: center;
          text-transform: uppercase;
          font-weight: 600;
          color: #065f46;
          margin-bottom: 0.5rem;
        }
        .react-calendar__tile {
          border-radius: 12px;
          padding: 12px 0;
          text-align: center;
          transition: all 0.2s ease;
        }
        .react-calendar__tile:hover {
          background-color: #bbf7d0;
          color: #065f46;
        }
        .react-calendar__tile--active {
          background-color: #16a34a;
          color: white;
        }
        .react-calendar__tile--now {
          background-color: #dcfce7;
          border-radius: 12px;
        }
        .react-calendar__tile:focus {
          outline: none;
        }
      `}</style>
    </div>
  );
};

export default Appointment;
