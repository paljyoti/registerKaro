import React from 'react'
import img1 from "../../src/assets/img1.jpeg";
import img2 from "../../src/assets/img2.jpeg";
import img3 from "../../src/assets/img3.jpeg";
import img5 from "../../src/assets/img5.jpeg";
import img6 from "../../src/assets/img6.jpeg";
import img4 from "../../src/assets/img4.jpeg";


function Companylogo() {
  return (
    <div>

<div className="head grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 justify-items-center">
        <img
          src={img1}
          alt="Trusted logo 1"
          className="w-20 sm:w-24 lg:w-28 object-contain"
        />
        <img
          src={img2}
          alt="Trusted logo 2"
          className="w-20 sm:w-24 lg:w-28 object-contain"
        />
        <img
          src={img6}
          alt="Trusted logo 6"
          className="w-20 sm:w-24 lg:w-28 object-contain"
        />
        <img
          src={img5}
          alt="Trusted logo 5"
          className="w-20 sm:w-24 lg:w-28 object-contain"
        />
        <img
          src={img4}
          alt="Trusted logo 4"
          className="w-20 sm:w-24 lg:w-28 object-contain"
        />

        <img
          src={img3}
          alt="Trusted logo 3"
          className="w-20 sm:w-24 lg:w-28 object-contain"
        />
      </div>
    </div>
  )
}

export default Companylogo