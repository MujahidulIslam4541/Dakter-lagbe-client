import React from "react";
import Banner from "../homePage/Banner/page";
import OurService from "../homePage/Service/page";
import OurReviews from "../homePage/reviews/page";
import OurDoctors from "./doctors/page";
import ContactUs from "../homePage/contactUs/page";

const MainHome = () => {
  return (
    <div>
      <Banner />
      <OurService />
      <OurReviews />
      <OurDoctors />
      <ContactUs />
    </div>
  );
};

export default MainHome;
