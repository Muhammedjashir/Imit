import React from "react";

function Description1() {
  return (
    <div className="relative z-10 bg-white">
      {/* About Section */}
      <div className="flex flex-col lg:flex-row px-4 lg:px-10 py-10 lg:py-20 w-full max-w-6xl mx-auto justify-center ">
        {/* Who We Are */}
        <div className="flex flex-col text-gray-700 text-center lg:text-left">
          <h1 className="text-2xl mb-5">Why You Choose</h1>
          <p className="text-3xl lg:text-4xl font-medium max-w-xl">
            Top IT Company in Kerala With New Marketing Solutions
          </p>
          <div className="mt-10">
            <button className="border border-orange-400 rounded-full px-6 py-2 hover:bg-orange-500 font-bold text-gray-500 hover:text-white transition-all duration-800 hover:scale-110">
              Our Services
            </button>
          </div>
        </div>

        {/* Description */}
        <div className="flex flex-col items-center lg:items-start mt-10 lg:mt-0 lg:ml-10">
          <p className="max-w-2xl font-serif font-medium text-gray-500 text-center lg:text-left">
            In today's digital-centric world, developing a durable online
            visibility is essential to an organization's success. IMIT Park
            specializes in digital marketing and SEO services that are
            thoroughly tailored to boost your presence and bring in natural
            traffic to your internet site. Our seasoned marketing experts use
            the most up-to-date strategies as well as methods to guarantee your
            brand obtains the recognition it should have. <br/> <br/>Our search engine
            optimization services are focused on boosting your search engine
            rankings. We possess a deep understanding of the regional market
            dynamics and use a data-driven method to safeguard famous placements
            in search results. As a top IT company in Kerala, IMIT Park offers
            top digital marketing solutions for your business and boosts your
            results.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Description1;
