import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Transforming your ideas into outstanding websites that make a lasting impact. Our web development expertise is your pathway to online success.",
    img: "https://imitpark.com/webimg/ser01.webp",
  },
  {
    id: 2,
    title: "Web & Mobile App Development",
    description:
      "Enhance your online impact with our mastery of Web and Mobile Apps, Web Design, and UI/UX Excellence. We turn your ideas into digital magic.",
    img: "https://imitpark.com/webimg/ser02.webp",
  },
  {
    id: 3,
    title: "Digital Marketing",
    description:
      "From getting more clicks to turning them into real customers, we are here as your trusted online growth partner. Build a powerful online presence to make your business grow faster",
    img: "https://imitpark.com/webimg/ser03.webp",
  },
  {
    id: 4,
    title: "UI/UX Designing",
    description:
      "Crafting digital experiences that are user-friendly, visually compelling, and brand-enhancing. Create visually impressive user interfaces now",
    img: "https://imitpark.com/webimg/ser04.webp",
  },
  {
    id: 5,
    title: "Graphic Design",
    description:
      "Where creativity meets technology, crafting compelling visual stories that captivate and inspire in our digital age. Let's create together and make your vision a reality",
    img: "https://imitpark.com/webimg/ser05.webp",
  },
  {
    id: 6,
    title: "2D/3D Animation",
    description:
      "Transforming imagination into vibrant realities through dynamic visuals, compelling narratives, and animated graphics",
    img: "https://imitpark.com/webimg/ser06.webp",
  },
  {
    id: 7,
    title: "Cyber Security",
    description:
      "Safeguard your digital assets with our top-tier cybersecurity solutions. We protect your business from threats, ensuring a secure and resilient online presence.",
    img: "https://imitpark.com/webimg/ser07.webp",
  },
];

const Services = () => {
  return (
    <div className="mb-10 px-4">
      {/* Title */}
      <h2 className="text-3xl font-medium text-gray-700 text-center mb-10">
        Services We Offer:
      </h2>

      {/* Services Grid */}
      <div className="w-full max-w-[1200px] mx-auto grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div key={service.id} className="relative group flex justify-center">
            {/* Background shadow effect */}
            <div className="shadow-xl absolute w-[300px] h-full bg-orange-300 rounded-3xl transform rotate-1 group-hover:rotate-6 transition duration-500"></div>

            {/* Card */}
            <div className="relative p-5 bg-white rounded-3xl shadow-xl flex flex-col items-start h-[400px] w-[300px]">
              {/* Image */}
              <div className="relative w-16 h-16 mb-3">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full transform transition-transform duration-800 group-hover:scale-75 group-hover:rotate-360"
                />
              </div>

              {/* Service ID */}
              <h3 className="text-2xl text-gray-500 mb-2">{service.id}</h3>

              {/* Title */}
              <h1 className="text-2xl font-medium text-gray-700 mb-5 break-words text-center">
                {service.title}
              </h1>

              {/* Description */}
              <p className="text-gray-600 text-lg">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="relative text-gray-700 mt-16 flex justify-center items-center">
  {/* Animated Image Section */}
  <div className="relative">
  
    {/* <motion.div
    
      initial={{ opacity: 0, scale: 0.8, y: 50, rotateY: 0, rotateX: 0 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      whileHover={{
        scale: 1.05,
        rotateY: 10, // Creates a 3D tilt effect
        rotateX: 0,
        boxShadow: "20px 40px 60px rgba(0, 0, 0, 0.4)", // Adds depth
      }}
      whileTap={{ scale: 0.95, rotateY: 0, rotateX: 0 }}
      className="rounded-2xl h-[450px] w-[1100px] shadow-lg transform-gpu"
      src="https://h2o-digital.com/wp-content/uploads/2024/03/Artificial-Intelligence-and-its-role-in-Web-Design-Nottingham-h2o-digital.jpg"
      alt="AI in Web Design"
    /> */}
    <div className="flex justify-around items-center ">
   <div className="rounded-2xl h-[450px] w-[1100px] shadow-xl transform-gpu transition-all duration-1200 hover:scale-110 hover:shadow-2xl">
    <img className="w-[550px] h-[350px] rounded-2xl"  src="https://h2o-digital.com/wp-content/uploads/2024/03/Artificial-Intelligence-and-its-role-in-Web-Design-Nottingham-h2o-digital.jpg" alt="" />
   </div>
   </div>
   

    {/* Overlay Text & Button */}
    <div className="absolute top-1/2 left-1/2 transform -translate-y-1/3 px-6">
      <h1 className="text-xl font-medium">Our Partner</h1>
      
      <span className="font-medium text-5xl text-orange-500">Cyber </span>
      <span className="font-medium text-5xl text-blue-900">Finpro</span>
      <p className="max-w-xl mt-5 text-lg text-blue-900">
        At IMIT, we are committed to providing comprehensive cybersecurity
        solutions to protect your digital assets. Our team of experts is
        dedicated to staying ahead of cyber threats and ensuring that you are
        equipped with the knowledge and tools needed to secure your digital
        presence.
      </p>
      <button className="mt-6 bg-white hover:bg-orange-500 text-gray-700 border border-orange-500 font-bold py-3 px-6 rounded-lg shadow-lg transform transition duration-1000 hover:scale-110 hover:text-blue-900">
  View Website ⬏
</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default Services;
