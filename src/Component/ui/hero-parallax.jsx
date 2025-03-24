"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export function HeroParallax({ products }) {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="top-0 h-[300vh] py-40 overflow-hidden flex flex-col [perspective:1000px] [transform-style:preserve-3d] bg-white"
    >
      <Header />
      <motion.div style={{ rotateX, rotateZ, translateY, opacity }}>
        {/* First Row */}
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-5 sm:space-x-10 md:space-x-20 mb-10 sm:mb-20 overflow-x-auto sm:overflow-visible px-2">
          {firstRow.map((product, index) => (
            <ProductCard product={product} translate={translateX} key={product.id || index} />
          ))}
        </motion.div>
        {/* Second Row */}
        <motion.div className="flex flex-row space-x-5 sm:space-x-10 md:space-x-20 mb-10 sm:mb-20 overflow-x-auto sm:overflow-visible px-2 ">
          {secondRow.map((product, index) => (
            <ProductCard product={product} translate={translateXReverse} key={product.id || index} />
          ))}
        </motion.div>
        {/* Third Row */}
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-5 sm:space-x-10 md:space-x-20 overflow-x-auto sm:overflow-visible px-2">
          {thirdRow.map((product, index) => (
            <ProductCard product={product} translate={translateX} key={product.id || index} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

const contentData = [
  {
    title: "Web Development",
    description:
      "Transforming ideas into stunning websites. Our web development experts ensure your online success. Explore the art of digital excellence with us!",
    image: "https://imitpark.com/webimg/banner02.webp",
  },
  {
    title: "Digital Marketing",
    description:
      "Drive digital success with our expert strategies. From clicks to conversions, we're your partner in online growth. Let's craft your digital triumph together!",
    image: "https://imitpark.com/webimg/banner03.webp",
  },
  {
    title: "Graphic Design & Media",
    description:
      "From visuals to stories, we craft all your media needs. Let's bring your brand to life with our artistic touch!",
    image: "https://imitpark.com/webimg/banner04.webp",
  },
  {
    title: "Mobile App Development",
    description:
      "Improve your digital presence with our experts in Web and mobile Apps, Web Design, and UI/UX Design. Your vision, our innovation. Let's build together!",
    image: "https://imitpark.com/webimg/banner01.webp",
  },
];

export const Header = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % contentData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl w-full flex justify-center px-4 sm:px-6 lg:px-8 ml-20">
      <motion.div
        key={index}
        initial={{ opacity: 0, x: -30, y: 30 }}
        animate={{ opacity: 1, x: 0, y: -50 }}
        exit={{ opacity: 0, x: -30, y: 30 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between w-full gap-y-4 lg:gap-y-0 lg:space-x-8"
      >
        {/* Text Content */}
        <div className="max-w-md lg:max-w-lg text-center lg:text-left">
          <div className="break-words max-w-[250px] mx-auto lg:mx-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              <span className="text-orange-500">
                {contentData[index].title.split(" ")[0]}
              </span>
              <span className="text-blue-900">
                {" "}
                {contentData[index].title.split(" ").slice(1).join(" ")}
              </span>
            </h2>
          </div>
          <p className="mt-4 text-blue-900 text-base sm:text-lg md:text-xl">
            {contentData[index].description}
          </p>
          <a
            href="#"
            className="cursor-pointer mt-4 inline-block text-orange-400 font-semibold hover:text-blue-900 transition duration-500"
          >
            Read More &rarr;
          </a>
        </div>

        {/* Image Content */}
        <motion.img
          src={contentData[index].image}
          alt={contentData[index].title}
          className="h-[250px] sm:h-[400px] md:h-[500px] w-auto translate-y-[-30px] lg:mt-0"
          initial={{ opacity: 0.5, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: -30 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
};

export const ProductCard = ({ product, translate }) => {
  return (
    <motion.div
      style={{ x: translate }}
      whileHover={{ y: -20 }}
      className="group/product h-64 sm:h-80 md:h-96 w-[20rem] sm:w-[25rem] md:w-[30rem] relative shrink-0"
    >
      <a href={product.link} className="block group-hover/product:shadow-2xl">
        <img
          src={product.thumbnail}
          className="object-cover object-left-top absolute h-full w-full"
          alt={product.title}
        />
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white text-sm sm:text-base md:text-lg">
        {product.title}
      </h2>
    </motion.div>
  );
};
