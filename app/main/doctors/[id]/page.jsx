import Image from "next/image";
import { MapPin, BookCheck, CircleDollarSign } from "lucide-react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { getAllDoctors } from "@/api/getAllDoctors";
import DoctorProfileImage from "@/public/images/Vector.png";
import DoctorProfileImage2 from "@/public/images/Group7.png";

export default async function DoctorProfile({ params }) {
  const { id } = await params;
  const doctors = await getAllDoctors();

  const doctor = doctors.find((d) => d.id == id);

  return (
    <div className="bg-gray-50">
      {/* Banner Section */}
      <div className="relative w-full h-64 md:h-72 bg-[#07332F] flex items-center justify-between px-6">
        {/* Left Image */}
        <div className="w-24 md:w-32 h-24 md:h-32 relative">
          <Image
            src={DoctorProfileImage}
            alt="Left Banner Image"
            fill
            className="object-contain"
          />
        </div>

        {/* Banner Title */}
        <h2 className="text-white text-3xl font-bold text-center flex-1">
          Doctor Profile
        </h2>

        {/* Right Image */}
        <div className="w-24 md:w-32 h-24 md:h-32 relative">
          <Image
            src={DoctorProfileImage2}
            alt="Right Banner Image"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto p-6 mt-10 md:mt-20 space-y-10">
        {/* Doctor Overview */}
        <div className="flex flex-col md:flex-row gap-6 items-start bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
          {/* Doctor Image */}
          <div className="w-full md:w-1/3 h-80 relative rounded-xl overflow-hidden">
            <Image
              src={doctor.image}
              alt={doctor.name}
              fill
              className="object-cover rounded-xl"
            />
          </div>

          {/* Doctor Info */}
          <div className="flex-1 space-y-4">
            <h1 className="text-3xl font-bold text-gray-900">{doctor.name}</h1>
            <p className="text-gray-600">{doctor.degree}</p>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <Rating style={{ maxWidth: 120 }} value={doctor.rating} readOnly />
              <span className="text-gray-600">{doctor.rating.toFixed(1)}</span>
            </div>

            {/* Location, Availability, Fee */}
            <div className="space-y-2 text-gray-700 mt-2">
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

            {/* Services */}
            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2">Services</h3>
              <div className="flex flex-wrap gap-2">
                {doctor.services.map((service, idx) => (
                  <button
                    key={idx}
                    className="px-4 py-2 border rounded-lg bg-gray-100 hover:bg-[#f7a582] hover:text-white transition-all text-gray-700 text-sm font-medium"
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="border-b border-gray-300 pb-10">
          <h3 className="text-xl font-semibold mb-2">About Me</h3>
          <p className="text-gray-700 leading-relaxed">{doctor.about}</p>
        </div>

        {/* Grid Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Grid */}
          <div className="space-y-6  ">
            {/* Specializations */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Specializations</h3>
              <ul className="list-disc list-inside text-gray-700">
                {doctor.specializations.map((spec, idx) => (
                  <li key={idx}>{spec}</li>
                ))}
              </ul>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <ul className="list-disc list-inside text-gray-700">
                {doctor.education.map((edu, idx) => (
                  <li key={idx}>
                    {edu.degree}, {edu.institution} ({edu.years})
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Grid */}
          <div className="space-y-6 ">
            {/* Experience */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Work Experience</h3>
              <ul className="list-disc list-inside text-gray-700">
                {doctor.experience.map((exp, idx) => (
                  <li key={idx}>
                    {exp.workplace} ({exp.years})
                  </li>
                ))}
              </ul>
            </div>

            {/* Awards */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Awards</h3>
              <ul className="list-disc list-inside text-gray-700">
                {doctor.awards.map((award, idx) => (
                  <li key={idx}>
                    <strong>{award.title}</strong> ({award.date}) -{" "}
                    {award.description}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
