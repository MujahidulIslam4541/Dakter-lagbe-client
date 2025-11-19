"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // icons

export default function DashboardLayout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-base-100">

      {/* Sidebar */}
      <div
        className={`bg-[#07332F] text-white p-5 w-60 min-h-screen fixed top-0 left-0 z-50 transform transition-transform duration-300 
          ${open ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0`}
      >
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>

        <ul className="space-y-3">
          <li>
            <Link className="btn btn-sm w-full bg-white text-black" href="/dashboard">
              Overview
            </Link>
          </li>
          <li>
            <Link className="btn btn-sm w-full bg-white text-black" href="/dashboard/appointments">
              My Appointments
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Toggle Button */}
      <button
        className="btn btn-sm md:hidden fixed top-3 left-3 z-50 bg-[#07332F] text-white border-none"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={20} /> : <Menu size={20} />}  
      </button>

      {/* Right Side Content */}
      <div className="flex-1 md:ml-60 p-5">{children}</div>
    </div>
  );
}
