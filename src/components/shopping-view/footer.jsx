import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart, faArrowUp} from "@fortawesome/free-solid-svg-icons";
import { faCcVisa, faCcMastercard, faCcPaypal, faCcAmex, faCcDiscover } from "@fortawesome/free-brands-svg-icons";
import omimg from "@/assets/omlogo.webp";
import payment2 from "@/assets/payment2.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFavoriteClick = () => {
    alert("Added to Favorites!"); // Replace with actual functionality
  };

  const handleCartClick = () => {
    alert("Navigating to Cart!"); // Replace with actual functionality
  };

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between gap-8"> {/* Added gap */}
          {/* Logo and Description */}
          <div className="w-full md:w-1/2 lg:w-1/3 mb-6">
            <div className="flex items-center mb-4">
              <img
                src={omimg}
                alt="Logo"
                className="w-10 h-10 mr-2 object-contain"
              />
              <h2 className="text-xl font-bold">Bhadra Cottage Industries</h2>
            </div>
            <p className="text-gray-400 text-sm">
              Bhadra Cottage Industries, has grown from strength to strength, carving a
              name for itself in the online space for the unique products,
              quality, and customer service provided by the organization.
            </p>
          </div>

          {/* Links */}
          <div className="w-full md:w-1/2 lg:w-1/3 mb-6">
            <h3 className="font-semibold text-lg mb-4">Information</h3>
            <ul className="text-gray-400 text-sm">
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  Contact Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms and Conditions
                </a>
              </li>
            </ul>
          </div>
        
          <div className="w-full lg:w-1/3 ">
            <p className="text-gray-400 text-sm text-center lg:text-left mb-4">
              © Copyright 2021 | Bhadra Cottage Industries.
            </p>
            <div className="flex justify-center lg:justify-start space-x-3">
                {/* <img
                 src={payment2} // Use the imported image
                 alt="Payment Methods"
                 className="bg-gray-900 w-[250px] h-auto object-contain" 
                //  style={{ backgroundColor: bg-gray-900 }}
             /> */}
             <FontAwesomeIcon icon={faCcVisa} size="2x" />
  <FontAwesomeIcon icon={faCcMastercard} size="2x" />
  <FontAwesomeIcon icon={faCcPaypal} size="2x" />
  <FontAwesomeIcon icon={faCcAmex} size="2x" />
  <FontAwesomeIcon icon={faCcDiscover} size="2x" />
              {/* <FontAwesomeIcon icon={faCcVisa} size="2x" />
              <img
                src="https://via.placeholder.com/40x24"
                alt="MasterCard"
                className="w-10 h-6"
              />
              <img
                src="https://via.placeholder.com/40x24"
                alt="PayPal"
                className="w-10 h-6"
              />
              <img
                src="https://via.placeholder.com/40x24"
                alt="American Express"
                className="w-10 h-6"
              />
              <img
                src="https://via.placeholder.com/40x24"
                alt="Maestro"
                className="w-10 h-6"
              /> */}
            </div>
          </div>

          {/* <div className="w-full lg:w-1/3 flex flex-col items-center">
            <p className="text-gray-400 text-sm text-center mb-4 text-lg">
              © Copyright 2021 Bhadra Cottage Industries.
            </p>
         
            <img
              src={payment} // Use the imported image
              alt="Payment Methods"
              className="w-auto h-10 object-contain" // Make it responsive
              style={{ backgroundColor: "#1a1a1a" }}
            />
          </div> */}
        </div>

        {/* Floating Buttons */}
        <div className="fixed bottom-6 right-6 flex flex-col space-y-3">
          <button
            onClick={handleFavoriteClick}
            className="bg-white text-red-500 rounded-full p-2 shadow-md w-12 h-12 flex items-center justify-center"
          >
            <FontAwesomeIcon icon={faHeart} />
          </button>
          <button
            onClick={handleCartClick}
            className="bg-white text-red-500 rounded-full p-2 shadow-md w-12 h-12 flex items-center justify-center"
          >
            <FontAwesomeIcon icon={faShoppingCart} />
          </button>
          <button
            onClick={scrollToTop}
            className="bg-green-500 text-white rounded-full p-2 shadow-md w-12 h-12 flex items-center justify-center"
          >
            <FontAwesomeIcon icon={faArrowUp} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


