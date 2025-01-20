import { FaInstagram } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";
import { CiApple } from "react-icons/ci";
import { FiFacebook } from "react-icons/fi";

function Footer() {
  return (
    <div className="bg-blue-900 text-white px-6 py-6 lg:px-16 lg:py-10 overflow-x-hidden">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="flex-1">
          <p className="text-sm lg:text-base w-full lg:w-96 mb-4">
            Design outstanding interfaces with advanced Figma features in a matter of minutes.
          </p>

          <div className="flex space-x-4 text-2xl">
            <FiFacebook />
            <IoMailOpenOutline />
            <CiApple />
            <FaInstagram />
          </div>
        </div>

        {/* Right Section with Columns */}
        <div className="flex-1 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          <div>
            <h1 className="font-semibold text-lg mb-2">START A BUSINESS</h1>
            <ul className="space-y-1 text-sm">
              <li>Features</li>
              <li>Solutions</li>
              <li>Integrations</li>
              <li>Enterprise</li>
              <li>Solutions</li>
            </ul>
          </div>

          <div>
            <h1 className="font-semibold text-lg mb-2">GOVERNMENT REGISTRATION</h1>
            <ul className="space-y-1 text-sm">
              <li>Partners</li>
              <li>Community</li>
              <li>Developers</li>
              <li>App</li>
              <li>Blog</li>
            </ul>
          </div>

          <div>
            <h1 className="font-semibold text-lg mb-2">COMPLIANCE & TAX</h1>
            <ul className="space-y-1 text-sm">
              <li>Channels</li>
              <li>Scale</li>
              <li>Watch the Demo</li>
              <li>Our Competition</li>
            </ul>
          </div>

          <div>
            <h1 className="font-semibold text-lg mb-2">BIS & CDSCO</h1>
            <ul className="space-y-1 text-sm">
              <li>About Us</li>
              <li>News</li>
              <li>Leadership</li>
              <li>Media Kit</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-8 text-center">
        <h1 className="text-sm lg:text-base">© 2024 Registerkaro. All Rights Reserved.</h1>
      </div>
    </div>
  );
}

export default Footer;
