import React from "react";
import { FloatingDock } from "../Component/ui/FloatingDock";
import { 
    IconBrandX, 
    IconBrandInstagram,
    IconBrandFacebook ,
    IconBrandYoutube ,
    IconBrandLinkedin ,
    IconBrandBehance ,
    IconBrandMedium ,
    IconBrandThreads
    
  } from "@tabler/icons-react";
  
export default function FloatingDockDemo() {
  const links = [
    {
      title: "Instagram",
      icon: <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://www.instagram.com/imitpark/",
    },
    {
      title: "Facebook",
      icon: <IconBrandFacebook  className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://www.facebook.com/TheIMITPark",
    },
    {
      title: "Youtube",
      icon: <IconBrandYoutube  className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://www.youtube.com/@imitpark",
    },
    {
      title: "Linkedin",
      icon: <IconBrandLinkedin  className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://www.linkedin.com/company/imitpark/",
    },
  ,
    {
      title: "Behance",
      icon: <IconBrandBehance  className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://www.behance.net/IMITPARK",
    },
    {
      title: "X",
      icon: <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://x.com/i/flow/login?redirect_after_login=%2Fimitpark",
    },
    {
      title: "Medium",
      icon: <IconBrandMedium  className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://medium.com/imit-insiders",
    },
    {
      title: "Threads",
      icon: <IconBrandThreads className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://www.threads.com",
    },
  ];

  return (
    <div className="bg-black flex items-center justify-center  w-full ">
      <FloatingDock mobileClassName="translate-y-20" items={links} />
    </div>
  );
}
