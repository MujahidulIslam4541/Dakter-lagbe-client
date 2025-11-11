import Image from "next/image";
import AboutImage from "@/public/images/about.png";
import ServiceImage from "@/public/images/Rectangle.png";
import { Clock8, MapPin, PhoneCall } from "lucide-react";

const OurService = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      {/* Top Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <div className="">
          <Image src={AboutImage} alt="About us" className="rounded-2xl shadow-lg  object-cover" />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#07332F] mb-4">Our Service</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa veniam corporis ea ullam quisquam, vel non saepe minima omnis molestias!
          </p>

          {/* buttons */}
          <div className="grid grid-cols-3  text-center border rounded-xl mb-8 font-bold border-base-300">
            <p className="bg-[#f7a582] rounded-xl text-white px-4 py-4">Cavity Protection</p>
            <p className="px-4 py-4">Cosmetic Dentistry</p>
            <p className="px-4 py-4">Oral Surgery</p>
          </div>

          {/* Middle Image */}
          <div className="rounded-xl overflow-hidden shadow-md mb-6">
            <Image src={ServiceImage} alt="Service" className="w-full" />
          </div>

          <h3 className="text-2xl font-semibold text-[#07332F] mb-3">Electro Gastrology Therapy</h3>
          <p className="text-gray-600 mb-3 leading-relaxed">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
            aperiam. Ea quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
            et quasi architecto.
          </p>

          <button className="px-5 py-2 bg-[#f7a582] text-white rounded-lg font-medium shadow hover:bg-[#e36c3f] transition-all duration-300">
            More Details
          </button>
        </div>
      </div>

      {/* Info Cards */}
      <div className="grid md:grid-cols-3 gap-8 text-white mt-20">
        {/* Card 1 */}
        <div className="flex items-center gap-4 bg-[#07332F] p-6 rounded-2xl shadow hover:shadow-lg transition">
          <Clock8 className="w-10 h-10 text-[#f7a582]" />
          <div>
            <h4 className="text-lg font-semibold">Opening Hours</h4>
            <p className="text-sm text-gray-200">Open 9:00 AM to 5:00 PM Every Day</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex items-center gap-4 bg-[#f7a582] p-6 rounded-2xl shadow hover:shadow-lg transition">
          <MapPin className="w-10 h-10 text-white" />
          <div>
            <h4 className="text-lg font-semibold">Our Location</h4>
            <p className="text-sm text-gray-100">Dhanmondi 17, Dhaka 1200, Bangladesh</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex items-center gap-4 bg-[#07332F] p-6 rounded-2xl shadow hover:shadow-lg transition">
          <PhoneCall className="w-10 h-10 text-[#f7a582]" />
          <div>
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <p className="text-sm text-gray-200">+8801800000025</p>
            <p className="text-sm text-gray-200">+8801800000026</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurService;
