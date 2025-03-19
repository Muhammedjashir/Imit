import React from "react";
import { cn } from "../../lib/utils";

export const BentoGrid = ({ className, children }) => {
  return (
    <div className={cn("grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto", className)}>
      {children}
    </div>
  );
};

export const BentoGridItem = ({ className, title, description, header, icon, image }) => {
  return (
    <div
      className={cn(
        "row-span-1  rounded-xl group/bento hover:shadow-2xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-gray-100 dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      {/* 🖼️ Image at the Top */}
      {image && <img src={image} alt={title} className="w-full h-40 object-cover rounded-lg" />}

      {/* 🟡 Header (optional, if provided) */}
      {header}

      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {/* 🔷 Icon (optional) */}
        {icon}

        {/* 🏷️ Title */}
        <div className="font-sans font-bold text-neutral-600 dark:text-gray-700 mb-2 mt-2">{title}</div>

        {/* 📝 Description */}
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-gray-500">{description}</div>
      </div>
    </div>
  );
};
