import img1 from "../../src/assets/img1.jpeg";
import img2 from "../../src/assets/img2.jpeg";
import img3 from "../../src/assets/img3.jpeg";
import img4 from "../../src/assets/img4.jpeg";
import img5 from "../../src/assets/img5.jpeg";
import img6 from "../../src/assets/img6.jpeg";

function Trusted() {
  return (
    <div className="bg-white text-black py-8 px-4">
      <h6 className="text-center text-sm md:text-base font-medium mb-6">
        Trusted by Over 100+ Startups and Freelance Businesses
      </h6>
      <div className="head grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 justify-items-center">
        <img
          src={img1}
          alt="Trusted logo 1"
          className="w-16 sm:w-20 md:w-24 lg:w-28 object-contain"
        />
        <img
          src={img2}
          alt="Trusted logo 2"
          className="w-16 sm:w-20 md:w-24 lg:w-28 object-contain"
        />
        <img
          src={img3}
          alt="Trusted logo 3"
          className="w-16 sm:w-20 md:w-24 lg:w-28 object-contain"
        />
        <img
          src={img4}
          alt="Trusted logo 4"
          className="w-16 sm:w-20 md:w-24 lg:w-28 object-contain"
        />
        <img
          src={img5}
          alt="Trusted logo 5"
          className="w-16 sm:w-20 md:w-24 lg:w-28 object-contain"
        />
        <img
          src={img6}
          alt="Trusted logo 6"
          className="w-16 sm:w-20 md:w-24 lg:w-28 object-contain"
        />
      </div>
    </div>
  );
}

export default Trusted;
