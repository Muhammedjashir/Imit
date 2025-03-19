import React from "react";

// Replace with your real logo URLs
const logos = [
  "https://bizopp.co.in/assets/img/logo.png",
  "https://yt3.googleusercontent.com/ytc/AIdro_koDK4MDN3dW1hJfK4CMiB_fFqVWDT2DLJgUVfnhFvL1g=s900-c-k-c0x00ffffff-no-rj",
  "https://imitpark.com/webimg/logoslider3.webp",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMdr2eKMEhCWA0bJdmWtCtO3Lrnyas7co-bA&s",
  "https://imitpark.com/webimg/logoslider5.webp",
];

const LogoSlider = () => {
  return (
    <div className="overflow-hidden bg-white py-4 relative">
      {/* Slider Track */}
      <div
        className="flex w-max space-x-10 animate-logoSlide"
        style={{
          animation: "logoSlide 20s linear infinite",
        }}
      >
        {[...logos, ...logos].map((logo, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center bg-white rounded-xl shadow-md p-4 h-24 w-48"
          >
            <img
              src={logo}
              alt={`logo-${idx}`}
              className="object-contain h-full w-full"
              draggable="false"
            />
          </div>
        ))}
      </div>

      {/* Keyframes Definition */}
      <style>
        {`
          @keyframes logoSlide {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-30%); }
          }
        `}
      </style>
    </div>
  );
};

export default LogoSlider;
