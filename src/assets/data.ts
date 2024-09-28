import hoobank from "../assets/images/hoobank_f.png";
import travelAdvisory from "../assets/images/travelAdvisory.png";
import shoppy from "../assets/images/shoppy.png";
import gymApp from "../assets/images/gymApp.png";
import portfolio from "../assets/images/portfolio.png";

import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons/faFreeCodeCamp";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faTelegram } from "@fortawesome/free-brands-svg-icons/faTelegram";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";

export const RESUME_DATA = [
  {
    company: "Zulmashi LTD",
    title: "English Support Representative",
    period: "Nov 2021 - present",
    responsibilities: [
      "Supported customer questions and issues by gathering data, analysing needs, evaluating possible resolutions and implementing best solutions.",
      "Recommended solutions to complex situations through research and critical thinking and escalated customer to supervisor for enhanced support.",
      "Broke down and evaluated user problems, using test scripts, personal expertise, and probing questions.",
      "Managed over 100 customer calls per day documenting customer interactions in CRM and assisted cross-functionally with billing and technical support to deliver high-quality customer service.",
      "Liaised with internal teams to resolve customer concerns, escalate issues and serve as company ambassador.",
      "Generated reports to track performance and analyse trends",
    ],
    skills: [
      "Critical Thinking",
      "Detail Oriented",
      "Planning & Coordination",
      "Customer Support Expert",
    ],
  },
  {
    company: "American College",
    title: "Computer Lab Assistant",
    period: "Nov 2018 - Nov 2021",
    responsibilities: [
      "Served in maintaining the operation of the computer lab, instructing students and staff in the use of computer lab technology and software applications; and monitoring students activities in the computer lab.",
      "Managed and maintained computer lab equipment, ensuring functionality and availability of resources.",
      "Provided troubleshooting support for a variety of applications, including Microsoft Office, programming environments, and internet browsers.",
      "Conducted routine updates and maintenance tasks such as software installations, system updates, and hardware checks.",
      "Supported students in using specialized software for academic projects and coursework.",
    ],
    skills: [
      "Technical Proficiency",
      "Problem-Solving",
      "Planning & Coordination",
      "Knowledge of Networking",
    ],
  },
  // {
  //   company: "Zulmashi LTD",
  //   title: "English Support Representative",
  //   period: "Mar 2021 - present",
  //   responsibilities: [
  //     "Supported customer questions and issues by gathering data, analysing needs, evaluating possible resolutions and implementing best solutions.",
  //     "Recommended solutions to complex situations through research and critical thinking and escalated customer to supervisor for enhanced support.",
  //     "Broke down and evaluated user problems, using test scripts, personal expertise, and probing questions.",
  //     "Managed over 100 customer calls per day documenting customer interactions in CRM and assisted cross-functionally with billing and technical support to deliver high-quality customer service.",
  //     "Liaised with internal teams to resolve customer concerns, escalate issues and serve as company ambassador.",
  //     "Generated reports to track performance and analyse trends",
  //   ],
  //   skills: [
  //     "Critical Thinking",
  //     "Detail Oriented",
  //     "Planning & Coordination",
  //     "Customer Support Expert",
  //   ],
  // },
];

export const PROJECT_DATA = [
  {
    title: "Shoppy Dashboard",
    img: shoppy,
    tech_stack: ["React", "Tailwind", "Syncfusion"],
    desc: "A responsive admin dashboard application built with React.js, Tailwind CSS, and Syncfusion components. This demo app features an intuitive UI for managing e-commerce data, including dynamic charts, customizable tables, and real-time analytics. Designed for seamless user experience with modern web technologies and efficient state management.",
    repo: "https://github.com/kamari-1/Dashboard-App",
    demo_url: "https://kamari-dashboard-app.netlify.app/",
  },
  {
    title: "Travel Advisor",
    img: travelAdvisory,
    tech_stack: ["React", "TypeScript", "MUI"],
    desc: "Travel Companion Application using Google Maps. Built with React, Material UI, Geolocation, Google Maps API. Features include: searching for places, Fetching restaurants, hotels and attractions based on location from Rapid APIs.",
    repo: "https://github.com/kamari-1/travel-advisory",
    demo_url: "https://kamari-travelapp.netlify.app/",
  },
  {
    title: "Gym App",
    img: gymApp,
    tech_stack: ["React", "MUI", "Axios"],
    desc: "A modern fitness tracking application built with React.js, MUI, and Axios for API integration. This demo app allows users to explore exercises. With a sleek, responsive design powered by Material UI, the app provides a user-friendly interface for finding various exercises.",
    repo: "https://github.com/kamari-1/gym_app",
    demo_url: "https://kamari-gym-app.netlify.app/",
  },
  {
    title: "Portfolio",
    img: portfolio,
    tech_stack: ["React", "TypeScript", "Tailwind"],
    desc: "",
    repo: "https://github.com/kamari-1/Hoobank-app",
    demo_url: "https://kamari-hoobank-app.netlify.app/",
  },
  {
    title: "Hoobank",
    img: hoobank,
    tech_stack: ["React", "Tailwind"],
    desc: "A sleek and responsive banking landing page created with React.js and Tailwind CSS. This demo app showcases modern design principles with a clean, minimalistic interface, optimized for performance and accessibility. The landing page highlights core banking features and services with seamless navigation, and a mobile-first approach.",
    repo: "https://github.com/kamari-1/Hoobank-app",
    demo_url: "https://kamari-hoobank-app.netlify.app/",
  },
];

export const SOCIAL_MEDIA = [
  {
    title: "Github",
    url: "https://github.com/kamari-1",
    icon: faGithub,
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/clement-oboh-0b607a81/",
    icon: faLinkedin,
  },
  {
    title: "Telegram",
    url: "https://t.me/kamarri",
    icon: faTelegram,
  },
  {
    title: "Freecodecamp",
    url: "https://www.freecodecamp.org/kamari",
    icon: faFreeCodeCamp,
  },
];
