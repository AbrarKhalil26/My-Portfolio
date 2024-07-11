import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { skills } from "../data/data";

const Skills = () => {
  return (
    <div className="skill">
      <h2 className=" title ms-24 mb-16">
        Skills
      </h2>
      <div className="grid grid-cols-3 gap-10 gap-y-20">
        {skills.map((skill) => (
          <div key={skill.id}>
            <h3 className="text-2xl font-bold text-headingColor">{skill.title}</h3>
            <ul className="mt-4 text-gray-500 grid gap-5">
              {
                skill.Lists.map((list) => (
                  <li key={list.id}>
                    <div className="flex justify-between mb-2">
                      <p>{list.name}</p>
                      <p>{list.percentage}%</p>
                    </div>
                    <ProgressBar
                      completed={list.percentage}
                      bgColor="var(--accent-color)"
                      labelAlignment="outside"
                      height="8px"
                      labelClassName="label"
                    />
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
