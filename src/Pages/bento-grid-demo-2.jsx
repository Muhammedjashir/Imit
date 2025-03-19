import React from "react";
import { BentoGrid, BentoGridItem } from "../Component/ui/bento-grid";
import { IconClipboardCopy, IconFileBroken, IconSignature, IconTableColumn } from "@tabler/icons-react";

// Skeleton component
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] 
    [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-transparent 
    dark:border-white/[0.2] bg-neutral-100 dark:bg-black">
  </div>
);

// Items array with images
const items = [
  {
    title: "Website",
    description: "Building Next-Gen Dynamic Web Solutions",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    image: "https://bootstrapmade.com/content/templatefiles/Arsha/Arsha-bootstrap-website-template-md.webp",
  },
  {
    title: "Mobile Apps",
    description: "We provide innovative and dynamic mobile app solutions.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    image: "https://imitpark.com/webimg/app2.webp",
  },
  {
    title: "Branding",
    description: "Crafting Unique Brand Experiences.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    image: "https://imitpark.com/webimg/brand3.webp",
  },
  {
    title: "Social Media",
    description: "Empowering Your Social Presence Helping you connect, engage, and grow in the digital world.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    image: "https://imitpark.com/webimg/social3.webp",
  },
];

export default function BentoGridSecondDemo() {
  return (
    <>
      <div className="ml-4 md:ml-20 mt-10 text-center md:text-left">
        <h3 className="text-2xl">Portfolio</h3>
        <h1 className="text-3xl md:text-4xl font-medium text-orange-500">
          Our Latest <span className="text-blue-900">Project</span>
        </h1>
      </div>
      <BentoGrid className="w-full max-w-7xl px-4 md:px-0 gap-4 md:gap-10 mx-auto md:auto-rows-[20rem] mt-10 mb-15">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={<img src={item.image} alt={item.title} className="w-full h-40 md:h-45 object-cover rounded-lg" />}
            className={item.className}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </>
  );
}