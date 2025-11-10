"use client";
import { BookCheck, MapPin } from "lucide-react";

const ContactUs = () => {

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const data=e.target
    const name=data.name.value;;
    const email=data.email.value;;
    const number=data.number.value;;
    const doctorName=data.doctorName.value;;
    const date=data.date.value;;
    const time=data.time.value;;
    const fromData={name,email,number,doctorName,date,time}
    console.log(fromData)

  };

  return (
    <div className="max-w-7xl mx-auto bg-[#07332F] text-white grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 px-10 rounded-2xl py-12 shadow-lg">
      {/* Left content */}
      <div>
        <h2 className="text-3xl font-bold mb-4 text-[#f7a582]">Contact With Us</h2>
        <p className="text-gray-200 leading-relaxed">
         Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi.
        </p>
        <div className="flex items-center gap-3 mt-6">
          <MapPin className="text-[#f7a582]" />
          <p>Gulshan, Dhaka, Bangladesh</p>
        </div>
        <div className="flex items-center gap-3 mt-2">
          <BookCheck className="text-[#f7a582]" />
          <p>Available Monday - Saturday, 9 AM to 8 PM</p>
        </div>
      </div>

      {/* Right form */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4  p-6 rounded-xl shadow-inner"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="p-3 rounded-lg bg-transparent border border-gray-500 focus:border-[#f7a582] outline-none transition"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          className="p-3 rounded-lg bg-transparent border border-gray-500 focus:border-[#f7a582] outline-none transition"
          required
        />
        <input
          type="number"
          name="number"
          placeholder="Phone Number"
          className="p-3 rounded-lg bg-transparent border border-gray-500 focus:border-[#f7a582] outline-none transition"
          required
        />
        <input
          type="text"
          name="doctorName"
          placeholder="Doctor Name"
          className="p-3 rounded-lg bg-transparent border border-gray-500 focus:border-[#f7a582] outline-none transition"
          required
        />
        <input
          type="date"
          name="date"
          className="p-3 rounded-lg bg-transparent border border-gray-500 focus:border-[#f7a582] outline-none transition"
          required
        />
        <input
          type="time"
          name="time"
          className="p-3 rounded-lg bg-transparent border border-gray-500 focus:border-[#f7a582] outline-none transition"
          required
        />
        <button
          type="submit"
          className="col-span-1 sm:col-span-2 mt-3 py-3 bg-[#f7a582] hover:bg-[#fa9d75]  text-black font-semibold rounded-lg transition"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
