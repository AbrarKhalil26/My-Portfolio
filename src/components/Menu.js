import React, { useState } from "react";
import { menu } from "../data/data";
import { NavLink, useLocation  } from "react-router-dom";

const Menu = () => {
  const [hoveredItemId, setHoveredItemId] = useState(null);
  const location = useLocation();

  return (
    <ul
      className="fixed left-0 top-40 flex flex-col gap-2 p-4"
      style={{ zIndex: 10000 }}
    >
      {menu.map((item) => (
        <NavLink
          to={item.url}
          key={item.id}
          className={`text-headingColor hover:text-white bg-bgGray hover:bg-accentColor w-12 h-12 rounded-full p-4 transition-width duration-300 ease-in-out 
          ${hoveredItemId === item.id ? "w-32" : ""}
          ${location.pathname === item.url ? "activeLink" : ""}
          `}
          onMouseEnter={() => setHoveredItemId(item.id)}
          onMouseLeave={() => setHoveredItemId(null)}
        >
          <li className="flex gap-3">
            <span>{item.icon}</span>
            {hoveredItemId === item.id && (
              <span className="-mt-1">{item.title}</span>
            )}
          </li>
        </NavLink>
      ))}
    </ul>
  );
};

export default Menu;