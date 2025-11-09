"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";

// demo images (replace later)
import user1 from "@/public/images/image3.png";
import user2 from "@/public/images/image2.png";
import user3 from "@/public/images/image4.png";

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Dhaka, Bangladesh",
    image: user1,
    review:
      "The doctors and staff were amazing! They explained everything clearly and made me feel very comfortable during the treatment.",
  },
  {
    id: 2,
    name: "David Miller",
    location: "Chittagong, Bangladesh",
    image: user2,
    review:
      "Fantastic service! The environment is super clean, and the doctors are truly professional. Highly recommended!",
  },
  {
    id: 3,
    name: "Ayesha Rahman",
    location: "Sylhet, Bangladesh",
    image: user3,
    review:
      "I was nervous before visiting, but their friendly approach made everything easy. Great experience overall!",
  },
  {
    id: 4,
    name: "Tanvir Hasan",
    location: "Rajshahi, Bangladesh",
    image: user1,
    review:
      "They took great care of me. The service was on time and the facilities are top-notch!",
  },
];

const OurReviews = () => {
  return (
    <section className="max-w-7xl mx-auto mt-20 px-6">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#07332F] mb-3">
          What Our Patients Say
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Hear from our happy patients who have experienced our professional care and modern facilities.
        </p>
      </div>

      {/* Swiper */}
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="pb-10"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="bg-white border border-gray-100 shadow-lg rounded-2xl p-6 hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between">
              <p className="text-gray-600 leading-relaxed mb-6 italic">
                “{review.review}”
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#f7a582]">
                  <Image
                    src={review.image}
                    alt={review.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#07332F]">
                    {review.name}
                  </h4>
                  <p className="text-sm text-gray-500">{review.location}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default OurReviews;
