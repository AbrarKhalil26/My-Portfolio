import React, { useState } from "react";
import { menu } from "../data/data";
import { NavLink, useLocation  } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

const Mobile = () => (
  <div className="fixed top-0 left-0 h-full w-full" style={{ zIndex: 10000}}>
    <div className="w-full bg-black h-full opacity-20 absolute z-10"></div>
    <ul className="w-64 bg-white h-full px-10 flex flex-col justify-center gap-10 absolute z-20 shadow-2xl shadow-gray-500/40">
      {menu.map((item) => (
        <li key={item.id}>
          <NavLink to={item.url} className="flex gap-4 items-center font-bold text-headingColor hover:text-accentColor text-xl">
            <span>{item.icon}</span>
            <span>{item.title}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
)

const Menu = ({ isMobile }) => {
  const [hoveredItemId, setHoveredItemId] = useState(null);
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      {isMobile ? (
        <div
        className="fixed top-6 left-6"
        style={{ zIndex: 10000 }}
        onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu && <Mobile />}
          <div className="p-3 cursor-pointer hover:rounded-full hover:bg-gray-100 hover:transition-all duration-300">
            <IoMenu fontSize="2rem" color="var(--heading-color)" />
          </div>
        </div>
      ) : (
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
      )}
    </>
  );
};

export default Menu;