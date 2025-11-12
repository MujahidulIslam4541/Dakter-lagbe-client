"use client";

import { useState } from "react";
import Image from "next/image";
import signUpImage from "@/public/images/singUp.png";
import topImage from "@/public/images/Frame.png";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react"; // 👁️ icons

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const userName = e.target.userName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log("Form Data:", { name, userName, email, password });
  };

  return (
    <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">
      {/* Left Side */}
      <div className="relative flex flex-col justify-center items-center bg-[#07332F] text-white overflow-hidden">
        <div className="absolute top-8 right-8">
          <Image src={topImage} alt="Top Decoration" className="w-[120px] md:w-48" />
        </div>

        <div className="flex justify-center items-center mt-20 md:mt-0">
          <Image
            src={signUpImage}
            alt="Sign Up Illustration"
            className="w-[250px] md:w-[350px] lg:w-[400px] object-contain"
          />
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex justify-center items-center p-6 md:p-12 bg-base-100">
        <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-[#07332F] mb-6">
            Sign Up To <span className="text-[#f58e64]">Dakter Lagbe</span>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div className="flex flex-col">
              <label className="mb-1 font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your Name"
                required
                className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-[#f58e64]"
              />
            </div>

            {/* Username */}
            <div className="flex flex-col">
              <label className="mb-1 font-medium text-gray-700">User Name</label>
              <input
                type="text"
                name="userName"
                placeholder="Enter your Username"
                required
                className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-[#f58e64]"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="mb-1 font-medium text-gray-700">E-mail</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-[#f58e64]"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col relative">
              <label className="mb-1 font-medium text-gray-700">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  required
                  className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-[#f58e64] pr-10" 
                />

                {/* Eye icon */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#f58e64] z-10"
                  tabIndex={-1} 
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn bg-[#f58e64] hover:bg-[#e1784c] text-white w-full mt-2">
              Sign Up
            </button>
          </form>

          {/* Bottom link */}
          <p className="text-center text-sm mt-5 text-gray-700">
            Already have an account?{" "}
            <Link href="/auth/signIn" className="text-[#f58e64] font-semibold hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
