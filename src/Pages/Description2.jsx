import React from "react";

function Description2() {
  return (
    <div>
      {/* About Section */}
      <div className="flex flex-col lg:flex-row px-4 lg:px-10 py-10 lg:py-20 w-full max-w-6xl mx-auto justify-center mb-10">
        {/* Who We Are */}
        <div className="flex flex-col text-gray-700 text-center lg:text-left">
          <h1 className="text-2xl mb-5">Brand Your Business</h1>
          <p className="text-3xl lg:text-4xl font-medium max-w-xl">
            Change Your Brand Name with Imaginative Media, Branding, and Graphic
            Designs
          </p>
          <div className="mt-10">
            <button className="border border-orange-400 rounded-full px-6 py-2 hover:bg-orange-500 font-bold text-gray-500 hover:text-white transition-all duration-800 hover:scale-110">
              Contact Us
            </button>
          </div>
        </div>

        {/* Description */}
        <div className="flex flex-col items-center lg:items-start mt-10 lg:mt-0 lg:ml-10">
          <p className="max-w-2xl font-serif font-medium text-gray-500 text-center lg:text-left">
            IMIT Park offers typical IT solutions by using imaginative solutions
            that elevate your brand name to brand-new elevations. Our best
            media, branding, as well as visual style groups collaborate
            effortlessly to craft aesthetically exciting and engaging material.
            Whether you call for attention-grabbing visuals, engaging video
            clips, or an extensive branding technique, our specialists have the
            expertise to change your vision right into reality. <br/> <br/>
            In conclusion,
            IMIT Park proudly stands as the epitome of excellence in the IT
            industry in Kerala. We are not just an IT business; we are your
            committed partner in achieving digital accomplishment. With an
            exhaustive variety of solutions, an unwavering dedication to
            technology, and an undeviating devotion to high quality, we
            encourage your organization to master the digital age. Get in touch
            with us today and let IMIT Park, the premier IT company in Kerala,
            guide you in the direction of unparalleled success.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Description2;
