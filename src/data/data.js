import { FaHome } from "react-icons/fa";
import { MdPerson } from "react-icons/md";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { GrProjects } from "react-icons/gr";
import { LuServer } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const menu = [
  {
    id: 1,
    title: "Home",
    url: "/",
    icon: <FaHome />,
  },
  {
    id: 2,
    title: "About",
    url: "/about",
    icon: <MdPerson />,
  },
  {
    id: 3,
    title: "Projects",
    url: "/projects",
    icon: <GrProjects />,
  },
  {
    id: 4,
    title: "Services",
    url: "/services",
    icon: <LuServer />,
  },
  {
    id: 5,
    title: "Resume",
    url: "/Resume",
    icon: <HiOutlineDocumentText />,
  },
  {
    id: 6,
    title: "Contact",
    url: "/contact",
    icon: <MdOutlineMail />,
  },
];

export const SocialMedia = [
  {
    id: 1,
    url: 'https://x.com/AbrarKh88684926',
    icon: <FaXTwitter/>
  },
  {
    id: 2,
    url: 'https://www.facebook.com/basma.star.789?mibextid=LQQJ4d',
    icon: <FaFacebook/>
  },
  {
    id: 3,
    url: 'https://www.instagram.com/abrarh18?igsh=MThydmo5bGllbThpcA%3D%3D&utm_source=qr',
    icon: <FaInstagram/>
  },
  {
    id: 4,
    url: 'https://www.linkedin.com/in/abrarkhalil26/',
    icon: <FaLinkedin/>
  },
]

export const about = [
  {
    id: 1,
    title: 'Name',
    info: 'Abrar Hosny Khalil'
  },
  {
    id: 2,
    title: 'Email',
    info: 'abrarkhalil135@gmail.com'
  },
  {
    id: 3,
    title: 'Phone',
    info: '+201550504283'
  },
  {
    id: 4,
    title: 'Location',
    info: 'Ismailia, Egypt'
  },
  {
    id: 5,
    title: 'Languages',
    info: 'Arabic, English'
  },
  {
    id: 6,
    title: 'Age',
    info: new Date().getFullYear() - 2002
  }
]