import HeroImg from "../assets/images/heroSection.png";
import AbstractImg from "../assets/images/abstract.png";
import PortfolioImg from "../assets/images/nextgencoder.png";
import FoodImg from "../assets/images/food-app.png";
import ExpenseAppImg from "../assets/images/expense-tracker-app.png";
import FoodWebImg from "../assets/images/food-web.png";
import BlogImg from "../assets/images/blog.png";
import GameImg from "../assets/images/game.png";
import PanoramaImg from "../assets/images/panorama.png";
import BeansImg from "../assets/images/beans.png";
import EcomerceImg from "../assets/images/ecommerce.png";
import SahejImg from "../assets/images/sahej.png";
import WintejWebImg from "../assets/images/wintej-web.png";
import WintejAppImg from "../assets/images/wintej-app.png";
import DankImg from "../assets/images/dank.png";
import { calculateExperience } from "../utils";

// Hero section data
export const heroSectionData = {
  name: "Siddharth Jain",
  title: "Frontend Developer | Web Design",
  startDate: "2021-09-06",
  imagePath: HeroImg,
  abstractImagePath: AbstractImg,
  resumeButtonText: "Resume",
  hireMeButtonText: "Hire me",
};

// About section data
export const hobbies = [
  {
    icon: "fa-solid fa-headphones",
    label: "Listening to Music",
    color: "#1DB954",
  },
  { icon: "fa-solid fa-plane", label: "Traveling", color: "#FF4500" },
  { icon: "fa-solid fa-school", label: "Study", color: "#4CAF50" },
];

export const aboutContent = [
  {
    label: "Experience",
    startDate: "2021-09-06",
    expSuffix: " Years",
  },
  {
    label: " Completed",
    projects: 31,
    proSuffix: "+ Projects",
  },
];

export const description = {
  des: `I am a Frontend Developer with over ${calculateExperience(
    "2021-09-06"
  )} years of experience, specializing in React.js and React Native. I graduated in 2020 with a Bachelor of Computer Applications (BCA) from CCS University, Meerut. To further enhance my skills, I completed Dr. Angela Yu's Web Development Bootcamp on Udemy, which provided me with a solid foundation in web technologies.
  Over the course of my career, I have successfully completed 31+ projects, ranging from dynamic web applications to mobile apps. My expertise lies in creating responsive and intuitive user interfaces, ensuring that each project delivers a seamless user experience. I am committed to staying updated with the latest trends in frontend development, continuously honing my skills to provide innovative solutions.`,
};

// Education section data
export const educationData = [
  {
    duration: "2017-2020",
    educationType: "Graduation",
    degree: "Bachelor's Degree",
    course: "BCA",
    title: "Bachelor of Computer Applications",
    university: "Chaudhary Charan Singh University, Meerut",
    location: "Meerut, India",
  },
  {
    duration: "2014-2015",
    educationType: "Inter School",
    degree: "ART",
    title: "Inter School",
    university: "T.P.S Public inter school",
    location: "Hapur, India",
  },
];

// Experience section data
export const experienceData = [
  {
    company: "COMPLETUMHEALTH - US",
    period: "AUG. 2023 – FEB. 2024",
    role: "FRONTEND DEVELOPER",
    details: [
      "Developed and maintained a mobile application using React Native, incorporating multiple screens with seamless navigation via react-navigation.",
      "Spearheaded UI redesign efforts, enhancing user experience and engagement.",
      "Implemented API integration utilizing Axios, ensuring efficient data retrieval and management.",
      "Leveraged React Native Paper Library and Redux Saga for streamlined development processes.",
    ],
    technologies: "React Native, Redux, React.js, Rest API",
  },
  {
    company: "DANK - UK",
    period: "FEB. 2023 – JULY. 2023",
    role: "FRONTEND DEVELOPER",
    projects: [
      {
        name: "MOBILE APP | DANK GLOBAL",
        details: [
          "Collaborated on projects involving API integration using Axios and adhered to established code structures.",
          "TypeScript and React Native to deliver robust solutions for diverse client requirements.",
        ],
        technologies: "React Native, Rest API",
      },
      {
        name: "WEB APP | JOIN GLOBAL",
        details: [
          "Material UI for designing intuitive user interfaces.",
          "Integrated APIs seamlessly using Axios for enhanced functionality and performance.",
        ],
        technologies: "React.js, Rest API",
      },
    ],
  },
  {
    company: "WONDER PILLARS TECHNOLOGY PVT LTD - IN",
    period: "SEP. 2021 – FEB. 2023",
    role: "FRONTEND DEVELOPER",
    projects: [
      {
        name: "WEB APP | VANTAAN TAXI",
        details: [
          "Engaged in the development of software for taxi information systems, resolving numerous bugs across various models.",
          "Collaborated closely with the team to ensure the core functionality of the software.",
          "Gained valuable experience in designing and implementing complex logic and user interfaces.",
        ],
        technologies: "React.js, Rest API, HTML5, CSS",
      },
      {
        name: "WEB APP | STOCK HISAB",
        details: [
          "Played a key role in developing a stock market project from inception, focusing on building an interactive user interface.",
        ],
        technologies: "React.js, Rest API, HTML5, CSS",
      },
      {
        name: "WEB APP | FIXCEL",
        details: [
          "Contributed to the creation of various user interface modules for a construction company project.",
        ],
        technologies: "React.js, Rest API, HTML5, CSS",
      },
    ],
  },
];

// certificate section data
export const certificateData = [
  {
    platform: "Udemy",
    course: `Build Ecommerce Website Like Amazon [React & Node &‘MongoDB]`,
    viewLink:
      "https://drive.google.com/file/d/12a9PMP0jylXvZVyDOUZ9uvqnPyBMmwwP/view?usp=drive_link",
  },
  {
    platform: "Udemy",
    course: `React Native - The Practical Guide [2023]`,
    viewLink:
      "https://drive.google.com/file/d/19-1gJsTip9dZ6lZuG6PJzqHNivOAIofN/view?usp=drive_link",
  },
  {
    platform: "Udemy",
    course: `MERN Stack Full Ecommerce Site - Using React, Redux,Node.js`,
    viewLink:
      "https://drive.google.com/file/d/16NGoyoBoosfkgrSAsZrDfiDOUHtj6Ek3/view?usp=drive_link",
  },
  {
    platform: "Udemy",
    course: `The Complete 2021 Web Development Bootcamp`,
    viewLink:
      "https://drive.google.com/file/d/1BJGhAKlzXmPLCu7pUBJ8WqTI3y8PdLqY/view?usp=drive_link",
  },
  {
    platform: "Udemy",
    course: `The Ultimate 2021 | Digital Marketing `,
    viewLink:
      "https://drive.google.com/file/d/1PQcGJxs6__VP-JQeeIchdNv7OrH5YMQa/view?usp=drive_link",
  },
  {
    platform: "Network Computer Education",
    course: `Computer-
| Operating, MS Office, D.T.P. Coreldraw, Photoshop,
Tally 4.5, 5.4. 623% 7.2, 8.1, 9.0 % Internet `,
    viewLink:
      "https://drive.google.com/file/d/1sMLYTL6kQHqLXCR13NHIlKVNhjBHwCzo/view?usp=drive_link",
  },
  {
    platform: "CCC",
    course: `Course on Computer Concepts`,
    viewLink:
      "https://drive.google.com/file/d/1Jc96VQTaxNxYdy8yEVmEuth_GSPDBKYr/view?usp=drive_link",
  },
  {
    platform: "Hi-Tech",
    course: `Hi-Tech Institute Advance of Technologies`,
    viewLink:
      "https://drive.google.com/file/d/1ITb9XbS1itwWQCppetBsFNyn6XI75TsX/view?usp=drive_link",
  },
];

// skill section data
export const skillsData = {
  designTools: [
    {
      name: "Figma",
      iconClass: "fa-brands fa-figma",
      color: "#F24E1E",
    },
    {
      name: "Adobe Photoshop",
      iconClass: "fa-brands fa-adobe",
      color: "#31A8FF",
    },
  ],
  technologies: [
    {
      name: "React",
      iconClass: "fa-brands fa-react",
      color: "#61DAFB",
    },
    {
      name: "JavaScript",
      iconClass: "fa-brands fa-js",
      color: "#F7DF1E",
    },
    {
      name: "TypeScript",
      iconClass: "fa-brands fa-js-square",
      color: "#3178C6",
    },
    {
      name: "HTML5",
      iconClass: "fa-brands fa-html5",
      color: "#E34F26",
    },
    {
      name: "CSS3",
      iconClass: "fa-brands fa-css3-alt",
      color: "#1572B6",
    },
    {
      name: "Node.js",
      iconClass: "fa-brands fa-node-js",
      color: "#339933",
    },
    {
      name: "React Native",
      iconClass: "fa-brands fa-react",
      color: "#61DAFB",
    },
  ],
  productivityTools: [
    {
      name: "Visual Studio Code",
      iconClass: "fa-solid fa-code",
      color: "#007ACC",
    },
    {
      name: "Git",
      iconClass: "fa-brands fa-git",
      color: "#F05032",
    },
    {
      name: "Docker",
      iconClass: "fa-brands fa-docker",
      color: "#2496ED",
    },
    {
      name: "Jira",
      iconClass: "fa-brands fa-jira",
      color: "#0052CC",
    },
    {
      name: "Slack",
      iconClass: "fa-brands fa-slack",
      color: "#4A154B",
    },
  ],
};

// project section data
export const projects = [
  {
    title: "NextGen Coders Program Web",
    description:
      "A comprehensive platform designed to guide aspiring coders through interactive lessons and projects. The website features dynamic content transitions and user interactions powered by Framer Motion, with a responsive design built using React.js and TypeScript.",
    image: PortfolioImg,
    technologies: [
      "ReactJs",
      "Html",
      "Css",
      "email-js",
      "Framer-motion",
      "Typescript",
    ],
    link: "https://next-gen-coder-program-web.vercel.app/",
  },
  {
    title: "Food Web",
    description:
      "A sleek and modern website for food enthusiasts, showcasing a variety of recipes and culinary tips. The site is built with React.js and JavaScript, offering a seamless user experience with interactive elements and a clean design.",
    image: FoodWebImg,
    technologies: ["React Js", "JavaScript"],
    link: "https://github.com/jsidd06/react-food-website",
  },
  {
    title: "Expense Tracker App",
    description:
      "A mobile app designed to help users manage their finances by tracking expenses. Built with React Native, it offers an intuitive interface and real-time updates, making it easy to keep track of spending on the go.",
    image: ExpenseAppImg,
    technologies: ["React Native", "JavaScript"],
    link: "https://github.com/jsidd06/the-expense-tracker-app",
  },
  {
    title: "Food App",
    description:
      "A mobile application that allows users to explore a variety of meals and recipes. The app is built with React Native, offering a user-friendly interface with smooth navigation and rich content display.",
    image: FoodImg,
    technologies: ["React Native", "JavaScript"],
    link: "https://github.com/jsidd06/meals-app",
  },
  {
    title: "Panorama App",
    description:
      "A mobile app that provides users with an immersive panoramic viewing experience. Developed with React Native and TypeScript, it offers advanced features like image stitching and interactive controls.",
    image: PanoramaImg,
    technologies: ["React Native", "Typescript"],
    link: "https://github.com/jsidd06/Panorama",
  },
  {
    title: "Blog Web",
    description:
      "A minimalist blog platform where users can write, edit, and publish articles. Built with EJS and JavaScript, the site is designed for simplicity and ease of use, with a clean, distraction-free interface.",
    image: BlogImg,
    technologies: ["EJS", "JavaScript", "CSS"],
    link: "https://github.com/jsidd06/R-Wblog",
  },
  {
    title: "Guess Game App",
    description:
      "A fun and engaging mobile game where users guess the correct number in a series of rounds. The app is built with React Native and JavaScript, featuring a smooth and responsive user interface.",
    image: GameImg,
    technologies: ["React Native", "JavaScript"],
    link: "https://github.com/jsidd06/guess-game",
  },
  {
    title: "Beans App",
    description:
      "A productivity app designed to help users manage their daily tasks efficiently. Built with React Native and TypeScript, it features a clean design, task tracking, and reminders to boost productivity.",
    image: BeansImg,
    technologies: ["React Native", "TypeScript"],
    link: "https://github.com/jsidd06/beans-app",
  },
  {
    title: "Ecommerce Web",
    description:
      "A full-fledged eCommerce platform built with ReactJS, NodeJS, and MongoDB. The site features a robust shopping cart, user authentication, and a powerful backend using Redux for state management.",
    image: EcomerceImg,
    technologies: ["ReactJS", "NodeJS express", "MongoDb", "Redux"],
    link: "https://github.com/jsidd06/rose-store",
  },
  {
    title: "Sahej App",
    description:
      "Diabetes is a complex disease and severely impairs the quality of life. Managing diabetes can be hard and a patient must make good decisions several times a day, to keep diabetes from progressively deteriorating. The current ecosystem of diabetes management is limiting and compels the patient to live a constrained life. Life is a finite phenomenon, and everyone should have an opportunity to live it to the fullest.",
    image: SahejImg,
    technologies: ["React Native", "Dot.net", "MongoDb", "Redux saga"],
    link: "https://apps.apple.com/in/app/sahej-health-app/id6469026236",
  },
  {
    title: "Dank App",
    description:
      "Dank empowers students to build their personal brand by showcasing their skills, interests, education, and career experiences. Connect with peers from any university globally, engage in meaningful 1:1 conversations, and discover students at your university based on shared interests and experiences. With robust features like real-time notifications, powerful search, and in-app messaging, Dank provides a comprehensive platform for student networking and personal growth.",
    image: DankImg,
    technologies: ["React Native", "NodeJS express", "MongoDb", "Redux"],
    link: "https://play.google.com/store/apps/details?id=com.joindank.dankapp&hl=en_IN&pli=1",
  },
  {
    title: "Wintej App",
    description:
      "Wintej is a fast growing gaming platform for people who wants to bring back their childhood memories by playing games like Ludo, Tambola and many more. ",
    image: WintejAppImg,
    technologies: ["React Native", "C##", "MSqual", "Redux"],
    link: "https://apps.apple.com/in/app/wintej/id6477755807",
  },
  {
    title: "Wintej Web",
    description:
      "WINTej is the ultimate gaming app where vintage games will help you win fast! The platform provides an exceptional gaming experience that not only entertains but also rewards your skills and dedication.",
    image: WintejWebImg,
    technologies: ["React Js"],
    link: "https://wintej.com/",
  },
];

export const socialLinks = [
  {
    label: "LinkedIn",
    icon: "fa-brands fa-linkedin",
    color: "#0A66C2",
    url: "https://www.linkedin.com/in/contact-siddharth-jain/",
  },
  {
    label: "Facebook",
    icon: "fa-brands fa-facebook",
    color: "#4267B2",
    url: "https://www.facebook.com/sidd.jain.90",
  },
  {
    label: "Instagram",
    icon: "fa-brands fa-instagram",
    color: "#C13584",
    url: "https://www.instagram.com/siddharth_coder",
  },
  {
    label: "X",
    icon: "fa-brands fa-twitter",
    color: "#1DA1F2",
    url: "https://x.com/codesiddharth",
  },
  {
    label: "WhatsApp",
    icon: "fa-brands fa-whatsapp",
    color: "#25D366",
    url: "https://wa.me/918979492547",
  },
  {
    label: "Email",
    icon: "fa-solid fa-envelope",
    color: "#EA4335",
    url: "mailto:jsidd06@gmail.com",
  },
];
