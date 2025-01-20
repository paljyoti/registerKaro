import React from "react";
import imageYt from "../../src/assets/youtube-shorts-7740696_1280.jpg";
import intro1  from "../../src/assets/introicon1.jpeg"; 
import intro2 from "../../src/assets/introicon2.jpeg";

function Intro() {
  return (
    <div className="w-full bg-blue-900 text-white">
      <div className="intro max-w-7xl mx-auto px-8 md:px-8 py-8 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="text-content flex-1">
          <h1 className="text-3xl md:text-4xl font-bold text-center lg:text-left">
            Our Video Introductions
          </h1>
          <p className="mt-4 text-lg md:text-xl text-center lg:text-left">
            Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna
            vulputate pellentesque a diam tincidunt apis dui.
          </p>

          <div className="flex mt-8">
        
            <img src={intro1} alt="" className="w-10 h-10" />
            <div className="ml-4">
              <h6 className="text-xl font-semibold">Explore ideas together</h6>
              <p className="mt-2 text-center lg:text-left">
                Engage audience segments and finally create actionable insights.
                Amplify vertical integration.
              </p>
            </div>
          </div>

          <div className="flex mt-8">
            <img src={intro2} alt=""className="w-10 h-10" />
        
            <div className="ml-4">
              <h6 className="text-xl font-semibold">Bring those ideas to life</h6>
              <p className="mt-2 text-center lg:text-left">
                Engage audience segments and finally create actionable insights.
                Amplify vertical integration.
              </p>
            </div>
          </div>
        </div>

        <div className="img flex-1 w-full lg:w-auto">
          <img
            src={imageYt}
            alt="YouTube Shorts"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Intro;
