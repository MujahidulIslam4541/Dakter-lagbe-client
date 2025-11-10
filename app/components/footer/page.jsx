import Image from "next/image";
import React from "react";
import navImage from "@/public/images/footer.png";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#07332F] text-white mt-20">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6 py-14 border-b border-gray-700">
        {/* Brand Section */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <Image
              src={navImage}
              alt="Dakter-lagbe Logo"
              width={60}
              height={50}
              className="rounded-lg"
            />
            <h1 className="text-2xl font-bold tracking-wide">
              Dakter<span className="text-[#34D399]">-lagbe</span>
            </h1>
          </div>
          <p className="text-gray-300 leading-relaxed mb-5">
            Your trusted healthcare companion. Book appointments, consult top
            doctors, and manage your health easily from anywhere.
          </p>
          <Link href='/appointment' className="px-6 py-2 border-2 border-[#f7a582] hover:bg-[#f7a582] hover:text-black transition rounded-xl font-medium">
            Appointment
          </Link>
        </div>

        {/* Quick Links */}
        <div>
          <h6 className="text-lg font-semibold mb-4 text-[#f7a582]">Quick Links</h6>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-[#f7a582] transition cursor-pointer">About</li>
            <li className="hover:text-[#f7a582] transition cursor-pointer">Appointment</li>
            <li className="hover:text-[#f7a582] transition cursor-pointer">Doctors</li>
            <li className="hover:text-[#f7a582] transition cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h6 className="text-lg font-semibold mb-4 text-[#f7a582]">Services</h6>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-[#f7a582] transition cursor-pointer">Pediatric Clinic</li>
            <li className="hover:text-[#f7a582] transition cursor-pointer">Diagnosis Clinic</li>
            <li className="hover:text-[#f7a582] transition cursor-pointer">Cardiac Clinic</li>
            <li className="hover:text-[#f7a582] transition cursor-pointer">Gynecological Clinic</li>
          </ul>
        </div>

        {/* Working Hours */}
        <div>
          <h6 className="text-lg font-semibold mb-4 text-[#f7a582]">Working Hours</h6>
          <ul className="space-y-1 text-gray-300">
            <li>Monday - 10 am to 7 pm</li>
            <li>Tuesday - 10 am to 7 pm</li>
            <li>Wednesday - 10 am to 7 pm</li>
            <li>Thursday - 10 am to 7 pm</li>
            <li>Sunday - 10 am to 7 pm</li>
          </ul>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="py-4 text-center text-gray-400 text-sm bg-[#062E2B]">
        © {new Date().getFullYear()} All Rights Reserved by{" "}
        <span className="text-[#f7a582] font-semibold">Mujahidul Islam Rifat</span>
      </div>
    </footer>
  );
};

export default Footer;
