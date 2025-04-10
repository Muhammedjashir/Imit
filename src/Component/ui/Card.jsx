import React, { useState } from "react";

function Card({ card, index, hovered, setHovered }) {
  return (
    
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={`rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out ${
        hovered !== null && hovered !== index ? "blur-sm scale-[0.98]" : ""
      }`}
    >
      <img
        src={card.img}
        alt={card.title}
        className="object-cover absolute inset-0 w-full h-full"
      />

      <div
        className={`absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300 ${
          hovered === index ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="md:text-2xl font-medium text-white drop-shadow-md text-center">
          <div className="text-3xl">{card.title}</div>
          <div className="text-lg mt-10 mb-10">{card.description}</div>
        </div>
      </div>
    </div>
    
  );
}

export function FocusCards({ cards }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="bg-white h-full w-full py-10 px-4 md:px-8   relative z-10">
      {/* Optional heading container styling */}
      <div className="mb-10 flex justify-center">
        <h1 className="text-3xl text-gray-800 font-medium text-center">
          Services we offer :
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto w-full">
        {cards.map((card, index) => (
          <Card
            key={card.id}
            card={card}
            index={index}
            hovered={hovered}
            setHovered={setHovered}
          />
        ))}
      </div>
    </div>
  );
}

export default FocusCards;
