import React, { useState } from "react";
import { menu } from "../data/data";

const Menu = () => {
  const [hoveredItemId, setHoveredItemId] = useState(null);

  return (
    <ul className="fixed left-0 top-40 flex flex-col gap-2 p-4" style={{ zIndex: 10000}}>
      {menu.map((item) => (
        <li
          key={item.id}
          onMouseEnter={() => setHoveredItemId(item.id)}
          onMouseLeave={() => setHoveredItemId(null)}
        >
          <a
            href={item.url}
            className={`flex items-center cursor-pointer text-headingColor list-none rounded-full w-0
              ${hoveredItemId === item.id && 'bg-accentColor w-36 text-white transition duration-300 ease-in-out'}
            `}
          >
            <span
              className={`text-xl bg-bgGray p-4 rounded-full ${hoveredItemId === item.id && 'text-white bg-accentColor transition duration-300 ease-in-out'}`}
            >
              {item.icon}
            </span>
            {hoveredItemId === item.id && (
              <span className="text-white text-sm transition duration-300 ease-in-out">
                {item.title}
              </span>
            )}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Menu;

