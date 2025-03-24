// ContactForm.jsx
import React from "react";

const ContactForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="relative z-10">
          <h4 className="text-lg text-gray-600 mb-2">Get in Touch</h4>
          <h1 className="text-4xl sm:text-4xl font-bold text-orange-500">
            Let’s discuss <br />
            on{" "}
            <span className="bg-gradient-to-r text-blue-800 bg-clip-text">
              something cool
            </span>{" "}
            <br /> together
          </h1>

          {/* Gradient background blur */}
          <div className="absolute inset-0 bg-orange-300 opacity-30 blur-3xl rounded-full w-64 h-64 -z-10 left-10 top-10"></div>
        </div>

        {/* Right Form */}
        <form className="space-y-4 relative z-10">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="email"
            placeholder="Enter email"
            className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          ></textarea>

          {/* Button with gradient */}
          <button
            type="submit"
            className="text-gray-700  border border-orange-500 hover:bg-orange-500 hover:text-white px-6 py-2 rounded-4xl font-semibold shadow-md hover:scale-110 transition duration-800"
          >
            Send →
          </button>

          {/* Gradient background blur under button */}
          <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-60 h-60 bg-orange-300 opacity-30 blur-3xl rounded-full -z-10"></div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
