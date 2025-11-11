
import Image from "next/image";
import { MapPin, BookCheck, CircleDollarSign } from "lucide-react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

import doctor1 from "@/public/images/image2.png";
import doctor2 from "@/public/images/image3.png";
import doctor3 from "@/public/images/image4.png";
import Link from "next/link";

const doctors = [
  {
    id: '1',
    name: "Dr. Kareyan Anderson",
    degree: "MBBS, FCPS (Medicine)",
    image: doctor1,
    rating: 4.5,
    location: "Gulshan, Dhaka, Bangladesh",
    available: "Monday 22 November",
    fee: 20,
  },
  {
    id: '2',
    name: "Dr. Ayesha Rahman",
    degree: "MBBS, MS (Cardiology)",
    image: doctor2,
    rating: 4.8,
    location: "Dhanmondi, Dhaka, Bangladesh",
    available: "Tuesday 23 November",
    fee: 25,
  },
  {
    id: '3',
    name: "Dr. Tanvir Hasan",
    degree: "MBBS, MD (Neurology)",
    image: doctor3,
    rating: 4.7,
    location: "Banani, Dhaka, Bangladesh",
    available: "Wednesday 24 November",
    fee: 22,
  },
];

const OurDoctors = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 mt-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#07332F] mb-3">
          Our Expert Doctors
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Meet our team of highly qualified doctors who are dedicated to
          providing the best healthcare services with professionalism and care.
        </p>
      </div>

      {/* Doctor Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden p-4"
          >
            {/* Image */}
            <div className="relative w-full h-64">
              <Image
                src={doctor.image}
                alt={doctor.name}
                fill
                className="object-cover rounded-xl"
              />
            </div>

            {/* Info */}
            <div className="flex flex-col gap-3 pt-6">
              <h3 className="text-2xl font-semibold text-[#07332F]">
                {doctor.name}
              </h3>
              <p className="text-gray-500 text-sm">{doctor.degree}</p>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-2">
                <Rating
                  style={{ maxWidth: 120 }}
                  value={doctor.rating}
                  readOnly
                />
                <span className="text-gray-600 text-sm">
                  {doctor.rating.toFixed(1)}
                </span>
              </div>

              <hr className="my-3 text-gray-300" />

              {/* Details */}
              <div className="space-y-2 text-gray-700 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="text-[#f7a582]" size={18} />
                  <span>{doctor.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookCheck className="text-[#f7a582]" size={18} />
                  <span>Available: {doctor.available}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CircleDollarSign className="text-[#f7a582]" size={18} />
                  <span>Fee: ${doctor.fee}</span>
                </div>
              </div>

              <button className="mt-5 w-full py-2 rounded-xl border border-[#f7a582] text-[#07332F] font-medium hover:bg-[#f7a582] hover:text-white transition-all duration-300">
                <Link href={`/doctors/${doctor.id}`}>View Details</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurDoctors;
