import React from "react";
import choose1 from "../../src/assets/choose1.jpeg";
import choose2 from "../../src/assets/choose2.jpeg";
import choose3 from "../../src/assets/choose3.jpeg";
import choose4 from "../../src/assets/choose4.jpeg";
import choose5 from "../../src/assets/choose5.jpeg";

function Choose() {
  return (
    <div className="bg-white py-10 px-4 sm:px-6 lg:px-8">
    

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-6 pb-4">
         
          <div className="text-left mb-10 lg:w-1/2">
            <h6 className="text-orange-300 font-semibold text-sm">
              WHY REGISTERKARO.IN
            </h6>
            <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-4">
              Why Choose Register Karo
            </h1>
            <p className="text-gray-600">
              It is with consistent services and results that build trust with
              the people and that in turn help us to serve the business better.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:w-1/2">
          
            <div className="bg-pink-100 shadow-md rounded-lg p-6 text-center">
              <img
                src={choose4}
                alt="Guaranteed Satisfaction"
                className="rounded-full w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Guaranteed Satisfaction
              </h3>
              <p className="text-gray-600">
                We ensure that you stay 100% satisfied with our offered
                services.
              </p>
            </div>

           
            <div className="bg-sky-100 shadow-md rounded-lg p-6 text-center">
              <img
                src={choose5}
                alt="Guaranteed Satisfaction"
                className="rounded-full w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Guaranteed Satisfaction
              </h3>
              <p className="text-gray-600">
                We ensure that you stay 100% satisfied with our offered
                services.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-sky-100 shadow-md rounded-lg p-6 text-center">
            <img
              src={choose3}
              alt="Guaranteed Satisfaction"
              className="rounded-full w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Guaranteed Satisfaction
            </h3>
            <p className="text-gray-600">
              We ensure that you stay 100% satisfied with our offered services.
            </p>
          </div>

          <div className="bg-pink-100 shadow-md rounded-lg p-6 text-center">
            <img
              src={choose2}
              alt="Expert Assistance"
              className="rounded-full w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Expert CA/CS Assistance
            </h3>
            <p className="text-gray-600">
              Prompt support from our in-house expert professionals.
            </p>
          </div>

          <div className="bg-sky-100 shadow-md rounded-lg p-6 text-center">
            <img
              src={choose1}
              alt="Confidential & Safe"
              className="rounded-full w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Confidential & Safe
            </h3>
            <p className="text-gray-600">
              All your private information is safe with us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Choose;
