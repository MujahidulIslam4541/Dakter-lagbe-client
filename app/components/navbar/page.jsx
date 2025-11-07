"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import navImage from "@/public/images/nav.png";
// import image  from "@/public/images/Vector.png"

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Appointment", path: "/appointment" },
    { name: "Sign In", path: "/signIn" },
  ];

  return (
    <nav className="bg-[#07332F]  fixed top-0 left-0 w-full z-50 text-white ">
      <div className="max-w-7xl mx-auto flex items-center justify-between  overflow-hidden px-6 py-3">
        {/* Logo + Brand Name */}
        <div className="flex items-center gap-2">

          {/* <Image
            src={image}
            alt="Dakter-lagbe Logo"

          /> */}
          <Image
            src={navImage}
            alt="Dakter-lagbe Logo"
            width={50}
            height={50}
            className=""
          />
          <h1 className="text-2xl font-bold tracking-wide">
            Dakter<span className="text-[#34D399]">-lagbe</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          {links.map((link, i) => (
            <li key={i}>
              <Link
                href={link.path}
                className="relative text-white hover:text-[#34D399] transition-colors duration-300 after:content-[''] after:block after:h-[2px] after:w-0 after:bg-[#34D399] after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-white cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-[#07332F] border-t border-[#0e4d46]">
          <ul className="flex flex-col items-center gap-4 py-4 font-medium text-white">
            {links.map((link, i) => (
              <li key={i}>
                <Link
                  href={link.path}
                  onClick={() => setOpen(false)}
                  className="hover:text-[#34D399] transition-all"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
