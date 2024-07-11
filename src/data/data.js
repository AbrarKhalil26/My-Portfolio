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
    url: "/My-Portfolio",
    icon: <FaHome />,
  },
  {
    id: 2,
    title: "About",
    url: "/My-Portfolio/about",
    icon: <MdPerson />,
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
    title: "Resume",
    url: "/Resume",
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

export const skills = [
  {
    id: 1,
    title: 'Soft Skills',
    Lists: [
      {
        id: 1,
        name: 'Communication',
        percentage: 95
      },
      {
        id: 2,
        name: 'Teamwork',
        percentage: 90
      }
    ]
  },
  {
    id: 2,
    title: 'Programming Languages',
    Lists: [
      {
        id: 1,
        name: 'C',
        percentage: 70
      },
      {
        id: 2,
        name: 'C++',
        percentage: 80
      },
      {
        id: 3,
        name: 'Python',
        percentage: 70
      }
    ]
  },
  {
    id: 3,
    title: 'Frontend',
    Lists: [
      {
        id: 1,
        name: 'HTML5',
        percentage: 100
      },
      {
        id: 2,
        name: 'CSS',
        percentage: 90
      },
      {
        id: 3,
        name: 'JavaScript',
        percentage: 75
      },
      {
        id: 4,
        name: 'Responsive Web Design',
        percentage: 85
      },
      {
        id: 5,
        name: 'API',
        percentage: 90
      }
    ]
  },
  {
    id: 4,
    title: 'Frameworks',
    Lists: [
      {
        id: 1,
        name: 'Bootstrap',
        percentage: 85
      },
      {
        id: 2,
        name: 'Tailwind CSS',
        percentage: 90
      },
      {
        id: 3,
        name: 'Material UI',
        percentage: 95
      },
      {
        id: 4,
        name: 'React',
        percentage: 90
      },
      {
        id: 5,
        name: 'Redux',
        percentage: 75
      },
      {
        id: 6,
        name: 'Redux Toolkit',
        percentage: 75
      },
      {
        id: 7,
        name: 'Jest.js',
        percentage: 70
      }
    ]
  },
  {
    id: 5,
    title: 'Concepts',
    Lists: [
      {
        id: 1,
        name: 'Data Structure',
        percentage: 80
      },
      {
        id: 2,
        name: 'Algorithm',
        percentage: 80
      },
      {
        id: 3,
        name: 'Object-Oriented Programming (OOP)',
        percentage: 80
      },
      {
        id: 4,
        name: 'Problem Solving',
        percentage: 85
      },
      {
        id: 5,
        name: 'Scrum',
        percentage: 75
      }
    ]
  },
  {
    id: 6,
    title: 'Software & Tools',
    Lists: [
      {
        id: 1,
        name: 'GitHub',
        percentage: 85
      },
      {
        id: 2,
        name: 'Git',
        percentage: 75
      },
      {
        id: 3,
        name: 'Jira',
        percentage: 85
      },
      {
        id: 4,
        name: 'Firebase',
        percentage: 80
      },
      {
        id: 5,
        name: 'Matlab',
        percentage: 65
      },
      {
        id: 6,
        name: 'Microsoft Office',
        percentage: 90
      },
      {
        id: 3,
        name: 'VS Code',
        percentage: 80
      }
    ]
  },
  {
    id: 7,
    title: 'Operating Systems',
    Lists: [
      {
        id: 1,
        name: 'Windows',
        percentage: 90
      },
      {
        id: 2,
        name: 'Linux',
        percentage: 70
      }
    ]
  }
]