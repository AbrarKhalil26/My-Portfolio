import React, { useState } from "react";
import { projects } from "../data/data";
import { IoIosArrowRoundForward } from "react-icons/io";
import Title from "./Title";

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div>
      <Title title='Projects'/>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="relative max-w-xs md:max-w-full bg-white rounded-lg overflow-hidden border-2 border-gray-200"
            style={{ boxShadow: "0px 5px 90px 0px rgba(0, 0, 0, 0.1)", maxHeight: '372.5px' }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            data-aos="fade-up" data-aos-duration="1000"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-full object-cover object-top"
            />

            <div
              className={`transition-translate duration-300 bg-white bg-opacity-95 absolute top-0 left-0 w-full h-full p-8 rounded-lg flex flex-col gap-4 overflow-auto ${
                hoveredIndex === index ? "translate-y-0" : "translate-y-full"
              }`}
              style={{ boxShadow: "0px 5px 90px 0px rgba(0, 0, 0, 0.1)" }}
            >
              <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
              <p className="text-gray-600">{project.info}</p>
              <div className="flex gap-3 flex-wrap">
                {project.languageUsed.map((item) => (
                  <p key={item} className="px-4 py-2 bg-accentColor text-white rounded-lg w-fit h-fit text-xs">
                    {item}
                  </p>
                ))}
              </div>
              <div className="grid grid-cols-2">
                {
                  project.url && 
                  <p className="flex items-center gap-2"><IoIosArrowRoundForward/>
                    <a href={project.url} target="_blank" rel="noreferrer" className="font-bold hover:text-red-500">Repo</a>
                  </p>
                }
                {project.demo &&
                  <p className="flex items-center gap-2"><IoIosArrowRoundForward/>
                    <a href={project.demo} target="_blank" rel="noreferrer" className="font-bold hover:text-red-500">Demo</a>
                  </p>
                }
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
