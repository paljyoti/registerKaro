import { CiSearch } from "react-icons/ci";



function Navbar() {
    return (
      <div>
        <div className="navbar flex flex-wrap items-center justify-between p-4 bg-white text-black shadow-md">
          <div className="logo">
            <h1 className="text-2xl text-blue-900 font-bold">Register<span className="text-yellow-400">Karo</span></h1>
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

            <CiSearch  className="mt-2 font-medium" />
            <button type="button" className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Talk an Expert</button>
            

          </div>
        </div>
      </div>
    );
  }
  
  export default Navbar;
  