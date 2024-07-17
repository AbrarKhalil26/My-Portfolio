import { IoHomeOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { GrProjects } from "react-icons/gr";
import { LuServer } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";
import { FaCodepen } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { FaCode } from "react-icons/fa6";
import { MdDevices } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa6";
import { FaTachometerAlt } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { FaCodeBranch } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FaBug } from "react-icons/fa6";
import { GrServicePlay } from "react-icons/gr";
import { FcLinux } from "react-icons/fc";
import { SiMui } from "react-icons/si";

import foodProject from "../assets/projects/food project.jpeg";
import whatsappProject from "../assets/projects/whatsapp.png";
import fitnessProject from "../assets/projects/fitness project.jpeg";
import YoutubeProject from "../assets/projects/youtube.jpeg";
import TodoListProject from "../assets/projects/Todo List.png";
import WindowsIcon from "../assets//Icons/windows.png";

import c1Icon from "../assets/Icons/C programming language.mp4";
import c2Icon from "../assets/Icons/C++ programming language.mp4";
import python from "../assets/Icons/python-logo.mp4";
import javascript from "../assets/Icons/javascript-logo.mp4";
import apiIcon from "../assets/Icons/api-7661089-6154191.mp4";
import bootstrapIcon from "../assets/Icons/bootstrap.mp4";
import tailwindIcon from "../assets/Icons/tailwind-css.mp4";
import githubIcon from "../assets/Icons/github-logo.mp4";
import gitIcon from "../assets/Icons/git.mp4";
import microsoftIcon from "../assets/Icons/microsoft-office.mp4";


export const menu = [
  {
    id: 1,
    title: "Home",
    url: "/My-Portfolio",
    icon: <IoHomeOutline />,
  },
  {
    id: 2,
    title: "About",
    url: "/My-Portfolio/about",
    icon: <IoPersonOutline />,
  },
  {
    id: 3,
    title: "Projects",
    url: "/My-Portfolio/projects",
    icon: <GrProjects />,
  },
  {
    id: 4,
    title: "Services",
    url: "/My-Portfolio/services",
    icon: <LuServer />,
  },
  {
    id: 5,
    title: "Resume/CV",
    url: "/My-Portfolio/resume",
    icon: <HiOutlineDocumentText />,
  },
  {
    id: 6,
    title: "Contact",
    url: "/My-Portfolio/contact",
    icon: <MdOutlineMail />,
  },
];

export const SocialMedia = [
  {
    id: 1,
    url: "https://x.com/AbrarKh88684926",
    icon: <FaXTwitter />,
  },
  {
    id: 2,
    url: "https://www.facebook.com/basma.star.789?mibextid=LQQJ4d",
    icon: <FaFacebook />,
  },
  {
    id: 3,
    url: "https://www.instagram.com/abrarh18?igsh=MThydmo5bGllbThpcA%3D%3D&utm_source=qr",
    icon: <FaInstagram />,
  },
  {
    id: 4,
    url: "https://www.linkedin.com/in/abrarkhalil26/",
    icon: <FaLinkedin />,
  },
];

export const about = [
  {
    id: 1,
    title: "Name",
    info: "Abrar Hosny Khalil",
  },
  {
    id: 2,
    title: "Email",
    info: "abrarkhalil135@gmail.com",
  },
  {
    id: 3,
    title: "Phone",
    info: "+201550504283",
  },
  {
    id: 4,
    title: "Location",
    info: "Ismailia, Egypt",
  },
  {
    id: 5,
    title: "Languages",
    info: "Arabic, English",
  },
  {
    id: 6,
    title: "Age",
    info: new Date().getFullYear() - 2002,
  },
];

export const skills = [
  {
    id: 1,
    title: "Soft Skills",
    Lists: [
      {
        id: 1,
        name: "Communication",
      },
      {
        id: 2,
        name: "Teamwork",
      },
      {
        id: 3,
        name: "Self-Learning",
      },
      {
        id: 4,
        name: 'Responsibility',
      }
    ],
  },
  {
    id: 2,
    title: "Skills",
    Lists: [
      {
        id: 4,
        name: "C",
        video: c1Icon
      },
      {
        id: 5,
        name: "C++",
        video: c2Icon
      },
      {
        id: 6,
        name: "Python",
        video: python
      },
      {
        id: 7,
        name: "HTML5",
        video: 'https://cdnl.iconscout.com/lottie/premium/thumb/html-logo-6913842-5673053.mp4'
      },
      {
        id: 8,
        name: "CSS3",
        video: 'https://cdnl.iconscout.com/lottie/premium/thumb/css-11903648-9717102.mp4',
      },
      {
        id: 9,
        name: "JavaScript",
        video: javascript
      },
      {
        id: 10,
        name: "API",
        video: apiIcon
      },
      
      {
        id: 11,
        name: "Bootstrap",
        video: bootstrapIcon,
      },
      {
        id: 12,
        name: "Tailwind CSS",
        video: tailwindIcon
      },
      {
        id: 13,
        name: "Material UI",
        icon: <SiMui className="text-blue-500"/>,
      },
      {
        id: 14,
        name: "React",
        img: 'https://techstack-generator.vercel.app/react-icon.svg'
      },
      {
        id: 15,
        name: "Redux",
        img: 'https://techstack-generator.vercel.app/redux-icon.svg'
      },
      {
        id: 16,
        name: "Jest.js",
        img: 'https://techstack-generator.vercel.app/jest-icon.svg'
      },
    ],
  },
  
  {
    id: 3,
    title: "Software & Tools",
    Lists: [
      {
        id: 17,
        name: "GitHub",
        img: 'https://techstack-generator.vercel.app/github-icon.svg'
      },
      {
        id: 18,
        name: "Git",
        video: gitIcon
      },
      {
        id: 19,
        name: "Jira",
        img: 'https://github.com/AbrarKhalil26/AbrarKhalil26/assets/102384647/08b53dd1-3eee-45ee-8b21-53d844578d98'
      },
      {
        id: 20,
        name: "Firebase",
        img: 'https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png'
      },
      {
        id: 21,
        name: "Matlab",
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Matlab_Logo.png/1144px-Matlab_Logo.png'
      },
      {
        id: 22,
        name: "Microsoft Office",
        video: microsoftIcon
      },
      {
        id: 23,
        name: "VS Code",
        img: 'https://skillicons.dev/icons?i=vscode'
      },
    ],
  },
  {
    id: 4,
    title: "Operating Systems",
    Lists: [
      {
        id: 30,
        name: "Windows",
        img: WindowsIcon,
      },
      {
        id: 31,
        name: "Linux",
        icon: <FcLinux />,
      },
    ],
  },
  {
    id: 5,
    title: "Concepts",
    Lists: [
      {
        id: 24,
        name: "Data Structure",
        percentage: 80,
      },
      {
        id: 25,
        name: "Algorithm",
        percentage: 80,
      },
      {
        id: 26,
        name: "Object-Oriented Programming (OOP)",
        percentage: 80,
      },
      {
        id: 27,
        name: "Problem Solving",
        percentage: 85,
      },
      {
        id: 28,
        name: "Scrum",
        percentage: 75,
      },
      {
        id: 29,
        name: "Responsive Web Design",
      },
    ],
  },
  
  
];

export const projects = [
  {
    id: 1,
    title: "Food Project",
    info: "The Food Ordering Application is a dynamic web, It is a restaurant that provides you with the food, details about it and allows you to place an order with the food you prefer",
    languageUsed: [
      "Css",
      "Bootstrap",
      "React.js",
      "Firebase",
      "API integration",
    ],
    img: foodProject,
    url: "https://github.com/AbrarKhalil26/Food_Project",
    demo: "https://abrarkhalil26.github.io/Food_Project/",
  },
  {
    id: 2,
    title: "WhatsApp Project",
    info: "WhatsApp is a messaging app that allows users to send text and multimedia messages instantly. It offers a simple and secure way to communicate with individuals and groups globally.",
    languageUsed: ["Css", "React.js", "Firebase"],
    img: whatsappProject,
    url: "https://github.com/AbrarKhalil26/WhatsApp-Project",
    demo: "https://abrarkhalil26.github.io/WhatsApp-Project/",
  },
  {
    id: 3,
    title: "Fitness Project",
    info: "The Fitness Club identifies the part of your body that you want to exercise. It shows you information (benefits) about this exercise and how to do it through pictures and videos.",
    languageUsed: ["Css", "React.js", "Material UI", "Rabid API"],
    img: fitnessProject,
    url: "https://github.com/AbrarKhalil26/Fitness-Project",
    demo: "https://abrarkhalil26.github.io/Fitness-Project/",
  },
  {
    id: 4,
    title: "YouTube-Project",
    info: "The YouTube Application is a dynamic web, it is similar to the real YouTube in terms of its display of channels and videos of various types",
    languageUsed: ["Css", "React.js", "Material UI", "Rabid API"],
    img: YoutubeProject,
    url: "https://github.com/AbrarKhalil26/YouTube-Project",
    demo: "https://abrarkhalil26.github.io/YouTube-Project/",
  },
  {
    id: 5,
    title: "Social Media Dashboard",
    info: "Social Media Dashboard displaying follower statistics and engagement metrics for various social media platforms. It includes a dark mode toggle and presents data for page views, likes, retweets, and profile views in both light and dark themes.",
    languageUsed: ["Css", "Material UI", "React.js"],
    img: "https://github.com/AbrarKhalil26/social-media-dashboard/raw/main/public/design/desktop-preview.jpg",
    url: "https://github.com/AbrarKhalil26/social-media-dashboard",
    demo: "https://github.com/AbrarKhalil26/social-media-dashboard",
  },
  {
    id: 6,
    title: "Age Calculator App",
    info: "a date input interface calculating the age based on the provided date of birth. The result displays the age in years, months, and days in a clean and modern design.",
    languageUsed: ["Css", "Material UI", "React.js"],
    img: "https://github.com/AbrarKhalil26/Age-Calculator-App/raw/main/public/design/desktop-preview.jpg",
    url: "https://github.com/AbrarKhalil26/Age-Calculator-App",
    demo: "https://abrarkhalil26.github.io/Age-Calculator-App/",
  },
  {
    id: 7,
    title: "Todo List App",
    info: "A weather app that allows users to search for weather information by city. The app displays the temperature, weather conditions, and wind speed.",
    languageUsed: ["Css", "React.js"],
    img: TodoListProject,
    url: "https://github.com/AbrarKhalil26/Todo-List",
    demo: "https://abrarkhalil26.github.io/Todo-List/",
  },
  {
    id: 8,
    title: "Tip Calculator App",
    info: "A tip calculator app that allows users to calculate the tip amount based on the total bill and the selected tip percentage.",
    languageUsed: ["HTML", "CSS", "JS"],
    img: "https://github.com/AbrarKhalil26/tip-calculator-app/blob/main/design/desktop-design-completed.jpg?raw=true",
    url: "https://github.com/AbrarKhalil26/tip-calculator-app",
    demo: "https://abrarkhalil26.github.io/tip-calculator-app/",
  },
  {
    id: 9,
    title: "Interactive rating component",
    info: "An interactive rating component that allows users to select a rating from 1 to 5 stars. The component displays the selected rating and the corresponding feedback message.",
    languageUsed: ["HTML", "CSS", "JS"],
    img: "https://github.com/AbrarKhalil26/Interactive-rating-component/blob/main/design/desktop-design.jpg?raw=true",
    url: "https://github.com/AbrarKhalil26/Interactive-rating-component",
    demo: "https://abrarkhalil26.github.io/Interactive-rating-component/",
  }
];

export const services = [
  {
    id: 1,
    title: "Website Design and Development",
    info: "Creating visually appealing and user-friendly websites using HTML, CSS, and JavaScript.",
    icon: <FaCode />,
  },
  {
    id: 3,
    title: "Responsive Design",
    info: "Ensuring websites are optimized for different devices and screen sizes.",
    icon: <MdDevices />,
  },
  {
    id: 4,
    title: "Web Application Development",
    info: "Building interactive and dynamic web applications using frameworks like React.",
    icon: <FaLaptopCode />,
  },
  {
    id: 6,
    title: "Cross-Browser Compatibility",
    info: "Ensuring websites work seamlessly across different browsers.",
    icon: <FaGlobe />,
  },
  {
    id: 7,
    title: "Performance Optimization",
    info: "Enhancing website speed and performance through various techniques.",
    icon: <FaTachometerAlt />,
  },
  {
    id: 9,
    title: "SEO Optimization",
    info: "Implementing best practices to improve search engine rankings and visibility.",
    icon: <IoSearchSharp />,
  },
  {
    id: 11,
    title: "Version Control with Git",
    info: "Using Git for version control to manage and collaborate on code.",
    icon: <FaCodeBranch />,
  },
  {
    id: 12,
    title: "API Integration",
    info: "Connecting websites and applications with external services through APIs.",
    icon: <FaDatabase />,
  },
  {
    id: 13,
    title: "Maintenance and Support",
    info: "Providing ongoing website maintenance, updates, and support.",
    icon: <FaTools />,
  },
  {
    id: 14,
    title: "Testing and Debugging",
    info: "Conducting thorough testing and debugging to ensure website functionality and performance.",
    icon: <FaBug />,
  },
  {
    id: 15,
    title: "Animation and Interactivity",
    info: "Adding animations and interactive elements using CSS animations, JavaScript, or libraries like GSAP.",
    icon: <GrServicePlay />,
  },
];

export const followMe = [
  {
    id: 5,
    title: "Github",
    url: "https://github.com/AbrarKhalil26",
    icon: <FaGithub />,
  },
  {
    id: 6,
    title: "Frontendmentor",
    url: "https://www.frontendmentor.io/profile/AbrarKhalil26",
    icon: <SiFrontendmentor />,
  },
  {
    id: 7,
    title: "Codepen",
    url: "https://codepen.io/abrarkhalil26",
    icon: <FaCodepen />,
  },
  {
    id: 1,
    title: "Twitter",
    url: "https://x.com/AbrarKh88684926",
    icon: <FaXTwitter />,
  },
  {
    id: 2,
    title: "Facebook",
    url: "https://www.facebook.com/basma.star.789?mibextid=LQQJ4d",
    icon: <FaFacebook />,
  },
  {
    id: 3,
    title: "Instagram",
    url: "https://www.instagram.com/abrarh18?igsh=MThydmo5bGllbThpcA%3D%3D&utm_source=qr",
    icon: <FaInstagram />,
  },
  {
    id: 4,
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/abrarkhalil26/",
    icon: <FaLinkedin />,
  },
];

export const mainFollowMe = [
  {
    id: 1,
    title: "Address",
    info: "Ismailia, Egypt",
    icon: <IoLocationOutline />,
  },
  {
    id: 2,
    title: "Call Us",
    info: "+201550504283",
    icon: <FiPhone />,
  },
  {
    id: 3,
    title: "Email",
    info: "abrarkhalil135@gmail.com",
    icon: <MdOutlineMail />,
  },
];
