import React from 'react';
import clientImg from "../../src/assets/clients-removebg-preview.png";

function Clients() {
  return (
    <div className="bg-white text-black p-4">
        <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold">Our Happy Clients</h1>
            <p className="text-sm md:text-lg mt-4">
              Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-
            </p>
            <p className='text-sm md:text-lg'>leveling customer service for state-of-the-art customer service.</p>
        </div>
        <div className="flex justify-center">
            <img src={clientImg} alt="Clients" className="max-w-full h-auto md:max-w-3/4 lg:max-w-1/2"/>
        </div>

        
    </div>
  );
}

export default Clients;
