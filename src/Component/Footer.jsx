import React from "react";

function Footer() {
  return (
    <footer className="ml-5 mr-5 mb-5">
      <div className="bg-black w-full rounded-3xl text-gray-300 p-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Title & Get a Quote Section */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10">
            <div>
              <h1 className="text-4xl font-medium text-orange-500 mb-4">
                Connecting for Innovative <br /> Solutions
              </h1>
              <p className="text-lg mb-6 text-gray-400">
                Our mission is to link customers with creative IT solutions.
                Let's <br /> connect today for a brighter tomorrow!
              </p>
            </div>
            <div className="mt-4 lg:mt-0">
              <button className="text-white px-6 py-2 rounded-4xl border-2 border-orange-400 bg-black hover:bg-orange-600 transition-all duration-1000 hover:scale-90">
                Get a Quote
              </button>
            </div>
          </div>

          {/* Separator */}
          <div className="border-t border-gray-700 pt-6"></div>

          {/* Footer Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
            
            {/* Logo & Address */}
            <div>
              <img src="https://imitpark.com/webimg/logo.webp" alt="IMIT Park Logo" />
              <h1 className="mt-6 text-gray-400">
                IMIT Park Ltd.
                <br /> Tana Irinjalakuda,
                <br /> Thrissur - 680121 <br /> Kerala, India
              </h1>
            </div>

            {/* Quick Links */}
            <div>
              <h2 className="text-3xl font-semibold text-white mb-4">Quick Links</h2>
              <ul className="space-y-2 text-gray-400">
                {["Home", "About", "Services", "Portfolio", "Career", "Events", "Contact Us", "Terms & Conditions", "Privacy Policy"].map((link, index) => (
                  <li key={index}>
                    <a href="#" className="hover:text-orange-500">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h2 className="text-3xl font-semibold text-white mb-4">Services</h2>
              <ul className="space-y-2 text-gray-400">
                {["Web Development", "Mobile App Development", "Digital Marketing", "Graphic Designing", "2D & 3D Animations"].map((service, index) => (
                  <li key={index}>
                    <a href="#" className="hover:text-orange-500">{service}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-semibold text-white mb-4">Contact Info</h2>
              <ul className="space-y-2 text-gray-400">
                <li>HR: +918598833370</li>
                <li>Office: +918943627627</li>
                <li>Landline: 04802991234</li>
                <li>Info@imitpark.com</li>
                <li>connect@imitpark.com</li>
                <li>Tana Irinjalakuda, Kerala, India</li>
              </ul>
            </div>

          </div>

          {/* Footer Image */}
          <div className="mb-10">
            <img src="https://imitpark.com/webimg/footerimg.webp" alt="Footer Decoration" />
          </div>

          {/* Copyright Section */}
          <div className="border-t border-gray-700 pt-6 text-center">
            <p className="text-gray-400">
              Copyright &copy; {new Date().getFullYear()}{" "}
              <span className="text-orange-400">IMIT Park.</span> All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
