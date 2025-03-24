// Testimonials.jsx
import React from "react";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Shomi",
    company: "Prosit Health Club",
    text: `"I approached Imitpark for a website revamp, and I must say, their web design team exceeded my expectations. They not only created a visually stunning website but also ensured it was user-friendly and responsive. I am impressed by their creativity and professionalism."`,
    rating: 4,
  },
  {
    name: "Renjith Karthikeyan",
    company: "Indian Red Cross State Chairman",
    text: `"Imitpark took our app idea and turned it into a reality. Their mobile app development team is top, and they delivered a high-quality, feature-rich app on time. We appreciate their dedication to our project and their technical expertise."`,
    rating: 5,
  },
  {
    name: "Bincy Binu",
    company: "Punja Leaf & Spares",
    text: `"Working with Imitpark for our digital marketing needs has been a game-changer for our business. Their strategies have significantly increased our online visibility, and their team is highly experienced. I highly recommend Imitpark for your marketing needs."`,
    rating: 4,
  },
];

const Review = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h3 className="text-lg text-gray-600 mb-2 font-bold">Testimonials</h3>
        <h2 className="text-4xl font-bold text-orange-500 mb-10 max-w-100">
          What Our{" "}
          <span className="text-blue-900 bg-clip-text">
            Customers
          </span>{" "}
          are saying
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 relative transition hover:shadow-lg"
            >
              {/* Stars */}
              <div className="flex text-yellow-400 mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              {/* Text */}
              <p className="text-gray-700 mb-4">{item.text}</p>
              {/* Name */}
              <p className="font-bold text-black">{item.name}</p>
              <p className="text-sm text-gray-500">{item.company}</p>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-end mt-10 gap-4">
          <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
            <FaArrowLeft />
          </button>
          <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Review;
