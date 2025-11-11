"use client";
import Image from "next/image";
import signUpImage from "@/public/images/singUp.png";
import topImage from "@/public/images/Frame.png";
import Link from "next/link";

const SignIn = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log("Email and password:", {email,password});
 
  };

  return (
    <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">
      {/* Left Side */}
      <div className="relative flex flex-col justify-center items-center bg-[#07332F] text-white overflow-hidden">
        {/* Top small image */}
        <div className="absolute top-8 right-8">
          <Image src={topImage} alt="Top Decoration" className="w-[120px] md:w-40" />
        </div>

        {/* Main image center */}
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
            Sign In To <span className="text-[#f58e64]">Dakter Lagbe</span>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div className="flex flex-col">
              <label className="mb-1 font-medium text-gray-700">
                Username or Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-[#f58e64]"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col">
              <label className="mb-1 font-medium text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                required
                className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-[#f58e64]"
              />
              <p className="text-sm text-right mt-2 text-[#f58e64] hover:underline cursor-pointer">
                Forgot Password?
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn bg-[#f58e64] hover:bg-[#e1784c] text-white w-full mt-2"
            >
              Sign In
            </button>
          </form>

          {/* Bottom link */}
          <p className="text-center text-sm mt-5 text-gray-700">
            Don’t have an account?{" "}
            <Link href="/signUp" className="text-[#f58e64] font-semibold hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
