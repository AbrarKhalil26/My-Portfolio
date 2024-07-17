import React from "react";
import { skills } from "../data/data";
import { Title } from "../components";

const Skills = () => {
  return (
    <div className="skill">
      <Title title='Skills'/>
      <div className="grid gap-10 gap-y-20">
        {skills.map((skill) => (
          <div key={skill.id} data-aos="fade-right" data-aos-duration="1000">
            <h3 className="text-2xl font-bold text-headingColor">{skill.title}</h3>
            <ul className="text-gray-500 flex flex-wrap gap-10 p-5">
              {
                skill.Lists.map((list) => (
                  <li key={list.id}>
                    <div className="flex flex-col justify-between items-center">
                      {list.icon && <p className="text-[45px] p-4">{list.icon}</p>}
                      {list.img && <div className="p-4">
                        <img src={list.img} alt={list.name} className="w-[45px] h-[45px]" />
                      </div>
                      }
                      {list.video && 
                        <div className="relative">
                          <div className="absolute top-0 left-0 w-full h-full z-10"></div>
                          <video className="w-16" autoPlay loop muted>
                            <source src={list.video} type="video/mp4" />
                          </video>
                        </div>
                      }
                      <p>{list.name}</p>
                    </div>
                  </li>
                ))
              }
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
