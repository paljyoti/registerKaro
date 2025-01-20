import React from "react";
import { CiSearch } from "react-icons/ci";

import bg from "../../src/assets/navimage.jpeg";
import client from "../../src/assets/client-removebg-preview.png";

function Header() {
  return (
    <div>
      <div className="navbar flex flex-wrap items-center justify-between p-4 bg-white text-black shadow-md">
        <div className="logo">
          <h1 className="text-2xl text-blue-900 font-bold">
            Register<span className="text-yellow-400">Karo</span>
          </h1>
        </div>

        <div className="block md:hidden">
          <button id="menu-button" className="text-black focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <div
          id="menu"
          className="hidden md:flex md:space-x-6 flex-col md:flex-row text-center"
        >
          <a
            href="#"
            className="hover:text-gray-600 transition font-medium text-lg"
          >
            Home
          </a>
          <a
            href="#"
            className="hover:text-gray-600 transition font-medium text-lg"
          >
            Our Service
          </a>
          <a
            href="#"
            className="hover:text-gray-600 transition font-medium text-lg"
          >
            Blog
          </a>
          <a
            href="#"
            className="hover:text-gray-600 transition font-medium text-lg"
          >
            Contact Us
          </a>
          <a
            href="#"
            className="hover:text-gray-600 transition font-medium text-lg"
          >
            About Us
          </a>

          <CiSearch className="mt-2 font-medium" />
          <button
            type="button"
            className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
          >
            Talk an Expert
          </button>
        </div>
      </div>

      <div className="relative">
        <div className="relative">
          <img
            src={bg}
            alt="Background"
            className="w-full h-auto object-cover"
          />

          <div className="absolute inset-0 flex items-center justify-start px-6 sm:px-10 md:px-16 lg:px-20">
            <div className="text-left text-black space-y-4 max-w-md">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                Your Trusted Partner
              </h1>
              <h1 className="text-lg sm:text-xl lg:text-2xl">
                For Compliance Business Needs
              </h1>
              <p className="text-sm sm:text-base">
                An online business compliance platform that helps entrepreneurs
                and other individuals with various registrations, tax filings,
                and other legal matters.
              </p>
              <img src={client} alt="" className="" />
              <div className="pt-5">
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Talk an Expert
                </button>
                <button
                  type="button"
                  className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  see how it work
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
