import React from 'react';
// Optional: Uncomment if using Lucide icons
// import { ArrowRight } from 'lucide-react';

function Events() {
  return (
    <div className="bg-white min-h-screen relative z-10 flex flex-col justify-cene tr items-start px-8 sm:px-16 py-10">
      {/* Header */}
      <h1 className="text-2xl font-semibold text-gray-700">Events</h1>

      {/* Tagline */}
      <div className="text-4xl mt-5 font-bold leading-tight">
        <h1 className="text-orange-500">
          Innovate.<br />
          <span className="text-blue-900">Integrate.</span><br />
          Inspire.
        </h1>
      </div>

      {/* Button with Animated Arrow */}
      <div className="mt-5 group">
        <button className="font-semibold cursor-pointer text-orange-500 hover:text-blue-900 flex items-center  transition-all duration-300">
          View All Events
          <span className="ml-2 transform group-hover:translate-x-5 transition-transform duration-300 ease-in-out">
            →
          </span>
        </button>
      </div>

      {/* Optional: If using Lucide Arrow Icon */}
      {/*
      <div className="mt-5 group">
        <button className="font-semibold cursor-pointer text-orange-500 hover:text-blue-900 flex items-center transition-all duration-300">
          View All Events
          <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300 ease-in-out" />
        </button>
      </div>
      */}
    </div>
  );
}

export default Events;
