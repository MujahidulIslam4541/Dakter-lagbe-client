import Image from "next/image";
import React from "react";
import navImage from "@/public/images/footer.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-base-300 mt-20 text-base-content p-10">
        <aside>
          <Image src={navImage} alt="Dakter-lagbe Logo" width={50} height={50} className="" />
          <h1 className="text-2xl font-bold tracking-wide">
            Dakter<span className="text-[#34D399]">-lagbe</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Veritatis temporibus{" "}
          </p>
          <button className="px-6 py-2 border-2 border-yellow-500  rounded-xl">Appointment</button>
        </aside>
        <nav>
          <h6 className="footer-title">Quick Links</h6>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Appointment</a>
          <a className="link link-hover">Doctors</a>
          <a className="link link-hover">Contact Us</a>
        </nav>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Pediatric Clinic</a>
          <a className="link link-hover">Diagnosis Clinic</a>
          <a className="link link-hover">Cardiac Clinic</a>
          <a className="link link-hover">Gynecological Clinic</a>
        </nav>
        <nav>
          <h6 className="footer-title">Working Hours</h6>
          <a className="link link-hover">Monday - 10 am to 7 pm</a>
          <a className="link link-hover">Tuesday - 10 am to 7 pm</a>
          <a className="link link-hover">Wednesday - 10 am to 7 pm</a>
          <a className="link link-hover">Thursday - 10 am to 7 pm</a>
          <a className="link link-hover">Sunday - 10 am to 7 pm</a>
        </nav>
      </footer>
      <p className="py-4 text-center bg-base-300 border-t-1">All Right By Mujahidul Islam Rifat </p>
    </div>
  );
};

export default Footer;
