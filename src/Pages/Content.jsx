import { motion } from "framer-motion";
import { useState, useEffect } from "react";

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

const Content = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % contentData.length);
    }, 6000); // Extended time to 6s for a smoother transition
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between px-4 lg:px-10 py-10 lg:py-20 bg-white">
        
        {/* Text Content */}
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 50 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 3, ease: "easeInOut" }}
          className="max-w-md lg:ml-50 text-center lg:text-left"
        >
          <div className="break-words max-w-[250px]">
            <h2 className="text-3xl lg:text-4xl font-bold">
              <span className="text-orange-500">
                {contentData[index].title.split(" ")[0]}
              </span>
              <span className="text-blue-900 ">
                {" "}
                {contentData[index].title.split(" ").slice(1).join(" ")}
              </span>
            </h2>
          </div>
          <p className="mt-4 text-blue-900">{contentData[index].description}</p>
          <a
            href="#"
            className="mt-4 inline-block text-orange-400 font-semibold hover:text-blue-900 transition duration-500"
          >
            Read More &rarr;
          </a>
        </motion.div>

        {/* Image Content */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="relative mt-10 lg:mt-0 lg:mr-50"
        >
          <div className="absolute top-10 left-10 w-48 h-48 lg:w-64 lg:h-64 bg-orange-400 rounded-full opacity-50 blur-lg"></div>
          <motion.img
            key={index}
            src={contentData[index].image}
            alt={contentData[index].title}
            className="relative z-10 w-64 h-64 lg:w-350 lg:h-200"
            initial={{ opacity: 0.5, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </motion.div>
      </section>

      {/* About Section */}
      <div className="flex flex-col lg:flex-row px-4 lg:px-10 py-10 lg:py-20 w-full max-w-6xl mx-auto justify-center">
        
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
            Welcome to IMIT Park, your destination for all your IT needs in
            Kerala. As the leading IT company in Kerala, we are dedicated to
            giving you a wide range of services including website development,
            app development, digital marketing, search engine optimization
            services, media works, branding, and graphic designing. Our
            dedication to quality and technology sets us apart, making IMIT Park
            your suitable IT companion. IMIT Park proudly holds the difference
            of being a leading IT company in Kerala, providing exceptional
            knowledge and extraordinary services. Our experienced experts are
            committed to providing top remedies that help to meet your special
            requirements. Whether you require a visually striking website to
            target your market or a seamless app to expand your market reach,
            IMIT Park has the experience to surpass your expectations. Our
            dedication to supplying exceptional results makes us the trusted IT
            company in Kerala.
          </p>
        </div>
      </div>
    </>
  );
};

export default Content;
