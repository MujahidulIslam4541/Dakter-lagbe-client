import AboutImage from "@/public/images/about.png";
import Image from "next/image";
import image from "@/public/images/Rectangle.png";
import { Clock8, MapPin, PhoneCall } from "lucide-react";

const OurService = () => {
  return (
    <div className="my-20 bg-white max-w-7xl mx-auto">
      <div className=" grid  grid-cols-2 gap-6">
        {/* lest side */}
        <div className="col-span-1">
          <Image src={AboutImage} alt="about image"></Image>
        </div>

        {/* right side */}
        <div className="col-span-1">
          <h2>Our Service</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid labore eaque voluptatum veniam alias
            libero laborum atque mollitia veritatis quisquam.
          </p>
          <div className="space-x-2  border-1 rounded-sm py-2 px-2 grid grid-cols-3">
            {" "}
            <button>Cavity Protection</button>
            <button>Cavity Protection</button>
            <button>Cavity Protection</button>
          </div>

          <Image src={image} alt="image"></Image>

          <h2>Electro Gastrology Therapy</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Sed ut perspiciatis unde omnis iste natus error{" "}
          </p>
          <p>
            Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore
            veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
          <button className="px-2 py-2 rounded border-amber-500 border">More Details</button>
        </div>
      </div>

      {/* cart section */}

      <div className="grid grid-cols-3 gap-8 text-white my-10">
        {/* cart 1 */}
        <div className="col-span-1 bg-[#07332F] rounded-2xl flex  gap-2">
          <div>
            <Clock8 />
          </div>
          <div>
            <h2>Opening Hour</h2>
            <p>Open 9.00 am to 5.00 pm EveryDay</p>
          </div>
        </div>
        {/* cart 2 */}
        <div className="col-span-1 bg-[#f7a582] rounded-2xl flex  gap-2">
          <div>
            <MapPin />
          </div>
          <div>
            <h2>Our Location</h2>
            <p>Dhanmondi 17 Dhaka 1200  Bangladesh 1  </p>
          </div>
        </div>
        {/* cart 3 */}
        <div className="col-span-1 bg-[#07332F] rounded-2xl flex  gap-2">
          <div>
            <PhoneCall />
          </div>
          <div>
            <h2>Contact Us</h2>
            <p>+8801800000025</p>
            <p>+8801800000026</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
