import { FaHome } from "react-icons/fa";
import { MdPerson } from "react-icons/md";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { GrProjects } from "react-icons/gr";
import { LuServer } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";

export const menu = [
  {
    id: 1,
    title: "Home",
    url: "#",
    icon: <FaHome />,
  },
  {
    id: 2,
    title: "About",
    url: "#about",
    icon: <MdPerson />,
  },
  {
    id: 3,
    title: "Projects",
    url: "#projects",
    icon: <GrProjects />,
  },
  {
    id: 4,
    title: "Services",
    url: "#services",
    icon: <LuServer />,
  },
  {
    id: 5,
    title: "Resume",
    url: "#Resume",
    icon: <HiOutlineDocumentText />,
  },
  {
    id: 6,
    title: "Contact",
    url: "#contact",
    icon: <MdOutlineMail />,
  },
];
