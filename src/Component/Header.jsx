"use client";
import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Header() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className=" bg-white  w-full h-[60px] flex justify-between items-center px-4 sm:px-20 z-10 text-gray-700  ">
        <div>
          <img
            src="https://imitpark.com/webimg/logo.webp"
            alt="IMIT Park Logo"
            className="h-9 sm:h-9"
          />
        </div>
        <div className="hidden sm:flex gap-10 text-xl font-medium relative cursor-pointer">
          <h1 className="hover:underline decoration-orange-500 underline-offset-8">
            Home
          </h1>

          <div
            className="relative"
            onMouseEnter={() => setIsAboutOpen(true)}
            onMouseLeave={() => setIsAboutOpen(false)}
          >
            <h1 className="cursor-pointer flex items-center gap-1 hover:underline decoration-orange-500 underline-offset-8">
              About ⮟
            </h1>
            {isAboutOpen && (
              <div className="absolute top-full left-0  shadow-2xs rounded-s py-2 w-38 border text-gray-700 mt-1 z-20 bg-white">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  About IMIT
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Our Team
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Events
                </a>
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <h1 className="cursor-pointer flex items-center gap-1 hover:underline decoration-orange-500 underline-offset-8">
              Services ⮟
            </h1>
            {isServicesOpen && (
              <div className="absolute top-full left-0  shadow-2xs rounded-s py-2 w-53 border text-gray-700 mt-1 z-30 bg-white">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Cyber Security
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  App Development
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Digital Marketing
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Web Development
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Media
                </a>
              </div>
            )}
          </div>

          <h1 className="hover:underline decoration-orange-500 underline-offset-8">
            Portfolio
          </h1>
          <h1 className="hover:underline decoration-orange-500 underline-offset-8">
            Blog
          </h1>
          <h1 className="hover:underline decoration-orange-500 underline-offset-8">
            Careers
          </h1>
          <h1 className="hover:underline decoration-orange-500 underline-offset-8">
            Contact Us
          </h1>
        </div>

        <div className="sm:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden bg-white w-full absolute z-20">
          <div className="flex flex-col items-center gap-4 py-4">
            <h1 className="hover:underline decoration-orange-500 underline-offset-8">
              Home
            </h1>

            <div
              className="relative"
              onClick={() => setIsAboutOpen(!isAboutOpen)}
            >
              <h1 className="cursor-pointer flex items-center gap-1 hover:underline decoration-orange-500 underline-offset-8">
                About ⮟
              </h1>
              {isAboutOpen && (
                <div className="bg-white shadow-2xs rounded-s py-2 w-38 border text-gray-700 mt-1">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    About IMIT
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Our Team
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Events
                  </a>
                </div>
              )}
            </div>

            <div
              className="relative"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              <h1 className="cursor-pointer flex items-center gap-1 hover:underline decoration-orange-500 underline-offset-8">
                Services ⮟
              </h1>
              {isServicesOpen && (
                <div className="bg-white shadow-2xs rounded-s py-2 w-53 border text-gray-700 mt-1">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Cyber Security
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    App Development
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Digital Marketing
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Web Development
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Media
                  </a>
                </div>
              )}
            </div>

            <h1 className="hover:underline decoration-orange-500 underline-offset-8">
              Portfolio
            </h1>
            <h1 className="hover:underline decoration-orange-500 underline-offset-8">
              Blog
            </h1>
            <h1 className="hover:underline decoration-orange-500 underline-offset-8">
              Careers
            </h1>
            <h1 className="hover:underline decoration-orange-500 underline-offset-8">
              Contact Us
            </h1>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
