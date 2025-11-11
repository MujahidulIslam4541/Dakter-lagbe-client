import Image from "next/image";
import { MapPin, BookCheck, CircleDollarSign } from "lucide-react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

import doctor1 from "@/public/images/image2.png";
import doctor2 from "@/public/images/image3.png";
import doctor3 from "@/public/images/image4.png";

// Sample data same as list page
const doctors = [
  {
    id: "1",
    name: "Dr. Kareyan Anderson",
    degree: "MBBS, FCPS (Medicine)",
    image: doctor1,
    rating: 4.5,
    location: "Gulshan, Dhaka, Bangladesh",
    available: "Monday 22 November",
    fee: 20,
  },
  {
    id: "2",
    name: "Dr. Ayesha Rahman",
    degree: "MBBS, MS (Cardiology)",
    image: doctor2,
    rating: 4.8,
    location: "Dhanmondi, Dhaka, Bangladesh",
    available: "Tuesday 23 November",
    fee: 25,
  },
  {
    id: "3",
    name: "Dr. Tanvir Hasan",
    degree: "MBBS, MD (Neurology)",
    image: doctor3,
    rating: 4.7,
    location: "Banani, Dhaka, Bangladesh",
    available: "Wednesday 24 November",
    fee: 22,
  },
];

export default async function DoctorProfile ({ params }) {
  const { id } = await params;
console.log(id)
  // Filter only the selected doctor
  const doctor = doctors.find((d) => d.id === id);

  if (!doctor)
    return (
      <div className="mt-20 text-center text-xl font-semibold">
        Doctor not found
      </div>
    );

  return (
    <div className="max-w-3xl mx-auto p-6 mt-20 border rounded shadow">
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <div className="w-full md:w-1/3 h-64 relative">
          <Image
            src={doctor.image}
            alt={doctor.name}
            fill
            className="object-cover rounded-xl"
          />
        </div>
        <div className="flex-1 space-y-2">
          <h1 className="text-3xl font-bold">{doctor.name}</h1>
          <p className="text-gray-700">{doctor.degree}</p>

          <div className="flex items-center gap-2">
            <Rating style={{ maxWidth: 120 }} value={doctor.rating} readOnly />
            <span>{doctor.rating.toFixed(1)}</span>
          </div>

          <div className="space-y-1 text-gray-700 mt-2">
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
        </div>
      </div>
    </div>
  );
}
