import React, { useState } from "react";

const projects = [
  {
    id: 1,
    title: "CPR Training",
    description:
      "To create a world where every individual is equipped with life-saving CPR skills, ensuring that no life is lost due to the lack of timely intervention.",
    category: "Web Development",
    image: "src/Images/img1.png",
    link: "https://hands4heart.com/",
  },
  {
    id: 2,
    title: "Revolutionizing Networking with Digital Visiting Cards",
    description:
      "Gone are the days of traditional paper visiting cards! Say hello to a smarter, greener, and more efficient way of sharing your professional identity.",
    category: "Web Development",
    image: "src/Images/Ai.jpg",
    link: "http://www.myaicard.com",
  },
];

const categories = [
  "All",
  "App Development",
  "Web Development",
  "Logo & Branding",
  "Social Media",
  "Animation",
  "Design",
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section className=" px-6 py-12 ml-30 ">
      <h2 className="text-xl font-semibold uppercase text-gray-700">
        Portfolio
      </h2>
      <h1 className="text-4xl font-bold mt-2 text-orange-500 max-w-70">
        We Create <span className="text-blue-900">Digital Products</span>
      </h1>

      {/* Filter Buttons */}
      <div className="mt-6 flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm ${
              selectedCategory === category
                ? "bg-orange-500 text-white transition-all duration-1000 hover:scale-90"
                : "bg-gray-200 transition-all duration-1000 hover:scale-90"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="mt-8 grid md:grid-row gap-10 w-[1000px] ">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col md:flex-row items-center gap-6 "
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full md:w-1/2 rounded-lg  hover:shadow-2xl transition-all duration-1000 hover:scale-102"
            />
            <div>
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <p className="mt-3 font-bold">
                 {/* {project.category}  */}
              </p>
              <a
                href={project.link}
                className="inline-block mt-4 px-4 py-2 border rounded-full text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-1000 hover:scale-90"
              >
                View Website
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
