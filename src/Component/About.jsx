import React from "react";
import aboutImage from "../../src/assets/WhatsApp Image 2025-01-18 at 11.23.57 PM (1).jpeg";
import dot from "../../src/assets/dot.jpeg";
import shape from "../../src/assets/shape.jpeg";

function About() {
  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-between px-4 lg:px-16 py-8">
      {/* Text Section */}
      <div className="about text-center lg:text-left lg:w-1/2">
        <p className="text-orange-300 text-lg font-medium">Welcome to RegisterKaro.in</p>
        <h1 className="text-3xl lg:text-4xl font-bold mt-4">
          About <span className="text-orange-300">Register Karo</span>
        </h1>
        <p className="mt-4 text-gray-700 leading-relaxed">
          We have been using Intelegencia as our DevOps vendor for our field
          service applications over the last couple of years and I’m extremely
          pleased with their performance, ability to execute, and willingness to
          adapt in our ever-changing environment. Perry is an outstanding leader
          who is fanatical about customer satisfaction. He has built a solid
          team which has consistently delivered on projects thereby exceeding
          everyone’s expectations.
        </p>
        <p className="mt-4 text-gray-700 leading-relaxed">
          I would strongly recommend their services to any organization that is
          looking for solid, reliable, and predictable outcomes.
        </p>
        <button
          type="button"
          className="mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
        >
          Learn More
        </button>
      </div>

      {/* Image Section */}
      <div className="relative lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0">
        <img
          src={aboutImage}
          alt="About Register Karo"
          className="w-full max-w-sm lg:max-w-md rounded-lg shadow-lg"
        />
        <img
          src={dot}
          alt="Decorative Dot"
          className="absolute top-3/4 right-0 h-20 hidden lg:block"
        />
        <img
          src={shape}
          alt="Decorative Shape"
          className="absolute bottom-0 right-0  h-32 lg:h-96 hidden lg:block"
        />
      </div>
    </div>
  );
}

export default About;
