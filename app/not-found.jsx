import Link from "next/link";
import Image from "next/image";
import notFoundImage from '@/public/images/Frame1.png'

export default function NotFound() {
  return (
    <div className="min-h-screen flex mt-20 flex-col justify-center items-center px-4">
      
      {/* Main Message */}
      <div className="text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#07332F]">Oops! Page Not Found</h2>
        <p className="text-gray-600 text-lg md:text-xl">The page you re looking for does n t exist or has been moved.</p>
      </div>

      {/* Image */}
      <div className="mt-10">
        <Image 
          src={notFoundImage} 
          alt="Not Found Image" 
          className="w-64 md:w-96 animate-bounce"
          priority
        />
      </div>

      {/* Button */}
      <Link 
        href="/" 
        className=" inline-block bg-gradient-to-r from-[#f58e64] to-[#ffb28b] hover:scale-105 transition-transform text-white px-8 py-3 rounded-full font-semibold shadow-lg"
      >
        Go Back Home
      </Link>
    </div>
  );
}
