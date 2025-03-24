import React from 'react'

function Description() {
  return (
    <div className="relative z-10 bg-white "> {/* Added z-10 here */}
      {/* About Section */}
      <div className="flex flex-col lg:flex-row px-4 lg:px-10 py-10 lg:py-20 w-full max-w-6xl mx-auto justify-center  ">
        
        {/* Who We Are */}
        <div className="flex flex-col text-gray-700 text-center lg:text-left">
          <h1 className="text-2xl mb-5">Who we are</h1>
          <p className="text-3xl lg:text-5xl font-medium">
            Your Trusted IT <br /> Company in India
          </p>
          <div className="mt-10">
            <button className="border border-orange-400 rounded-full px-6 py-2 hover:bg-orange-500 font-bold text-gray-500 hover:text-white transition-all duration-800 hover:scale-110">
              About Us
            </button>
          </div>
        </div>

        {/* Description */}
        <div className="flex flex-col items-center lg:items-start mt-10 lg:mt-0 lg:ml-10">
          <p className="max-w-2xl font-serif font-medium text-gray-500 text-center lg:text-left">
            Welcome to IMIT Park, your destination for all your IT needs in Kerala.
            As the leading IT company in Kerala, we are dedicated to giving you
            a wide range of services including website development, app development,
            digital marketing, search engine optimization services, media works,
            branding, and graphic designing. Our dedication to quality and technology
            sets us apart, making IMIT Park your suitable IT companion. IMIT Park
            proudly holds the difference of being a leading IT company in Kerala,
            providing exceptional knowledge and extraordinary services. Our experienced
            experts are committed to providing top remedies that help to meet your
            special requirements. Whether you require a visually striking website to
            target your market or a seamless app to expand your market reach, IMIT Park
            has the experience to surpass your expectations. Our dedication to supplying
            exceptional results makes us the trusted IT company in Kerala.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Description
