import Banner from "./pages/Banner/page";
import OurService from "./pages/Service/page";
import OurReviews from "./pages/reviews/page";
import OurDoctors from "./pages/doctors/page";
import ContactUs from "./pages/contactUs/page";

export default function Home() {
  return (
    <div>
      <Banner />
      <OurService />
      <OurReviews />
      <OurDoctors />
      <ContactUs />
    </div>
  );
}
