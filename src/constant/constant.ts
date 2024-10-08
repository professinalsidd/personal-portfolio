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
  des: `I am a dedicated Frontend Developer with ${calculateExperience(
    "2021-09-06"
  )} years of hands-on experience in crafting responsive and interactive web and mobile applications. After completing my Bachelor of Computer Applications (BCA) in 2020, I embarked on my development journey, gaining expertise in React.js, Material UI, TypeScript, and React Native.

With a strong foundation in both frontend technologies and mobile development, I am passionate about delivering high-quality, user-friendly digital experiences. My continuous learning mindset is demonstrated by completing specialized courses in React Native and Web Development.`,
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
      "Developed mobile applications using React Native CLI.",
      "Implemented advanced UI components using React Native Paper.",
      "Managed state and side effects with Redux-Saga.",
      "Integrated camera functionality into mobile apps.",
      "Designed and developed HTML/CSS website templates.",
      "Collaborated on UI/UX design using Figma.",
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
          "Developed a mobile application for Dank using React Native CLI.",
          "Implemented TypeScript for robust and maintainable code.",
          "Collaborated with cross-functional teams to deliver a high-quality product.",
        ],
        technologies: "React Native, Rest API",
      },
      {
        name: "WEB APP | JOIN GLOBAL",
        details: [
          "Worked on Material UI and React.js to build user-friendly interfaces.",
          "Implemented TypeScript for robust and maintainable code.",
          "Collaborated with cross-functional teams to deliver a high-quality product.",
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
    link: "https://nextgencodersprogram.online/",
  },
  // {
  //   title: "Food Web",
  //   description:
  //     "A sleek and modern website for food enthusiasts, showcasing a variety of recipes and culinary tips. The site is built with React.js and JavaScript, offering a seamless user experience with interactive elements and a clean design.",
  //   image: FoodWebImg,
  //   technologies: ["React Js", "JavaScript"],
  //   link: "https://github.com/professinalsidd/meals-app",
  // },
  {
    title: "Expense Tracker App",
    description:
      "A mobile app designed to help users manage their finances by tracking expenses. Built with React Native, it offers an intuitive interface and real-time updates, making it easy to keep track of spending on the go.",
    image: ExpenseAppImg,
    technologies: ["React Native", "JavaScript"],
    link: "https://github.com/professinalsidd/the-expense-tracker-app",
  },
  {
    title: "Food App",
    description:
      "A mobile application that allows users to explore a variety of meals and recipes. The app is built with React Native, offering a user-friendly interface with smooth navigation and rich content display.",
    image: FoodImg,
    technologies: ["React Native", "JavaScript"],
    link: "https://github.com/professinalsidd/meals-app",
  },
  {
    title: "Panorama App",
    description:
      "A mobile app that provides users with an immersive panoramic viewing experience. Developed with React Native and TypeScript, it offers advanced features like image stitching and interactive controls.",
    image: PanoramaImg,
    technologies: ["React Native", "Typescript"],
    link: "https://github.com/professinalsidd/panorama",
  },
  {
    title: "Blog Web",
    description:
      "A minimalist blog platform where users can write, edit, and publish articles. Built with EJS and JavaScript, the site is designed for simplicity and ease of use, with a clean, distraction-free interface.",
    image: BlogImg,
    technologies: ["EJS", "JavaScript", "CSS"],
    link: "https://github.com/professinalsidd/blog-web-ejs",
  },
  {
    title: "Guess Game App",
    description:
      "A fun and engaging mobile game where users guess the correct number in a series of rounds. The app is built with React Native and JavaScript, featuring a smooth and responsive user interface.",
    image: GameImg,
    technologies: ["React Native", "JavaScript"],
    link: "https://github.com/professinalsidd/guess-game-app",
  },
  {
    title: "Beans App",
    description:
      "A productivity app designed to help users manage their daily tasks efficiently. Built with React Native and TypeScript, it features a clean design, task tracking, and reminders to boost productivity.",
    image: BeansImg,
    technologies: ["React Native", "TypeScript"],
    link: "https://github.com/professinalsidd/beans-app",
  },
  // {
  //   title: "Ecommerce Web",
  //   description:
  //     "A full-fledged eCommerce platform built with ReactJS, NodeJS, and MongoDB. The site features a robust shopping cart, user authentication, and a powerful backend using Redux for state management.",
  //   image: EcomerceImg,
  //   technologies: ["ReactJS", "NodeJS express", "MongoDb", "Redux"],
  //   link: "https://github.com/jsidd06/rose-store",
  // },
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
    url: "https://www.linkedin.com/in/professional-siddharth-jain/",
  },
  {
    label: "Facebook",
    icon: "fa-brands fa-facebook",
    color: "#4267B2",
    url: "https://www.facebook.com/sidd.professional",
  },
  {
    label: "Instagram",
    icon: "fa-brands fa-instagram",
    color: "#C13584",
    url: "https://www.instagram.com/sidd.professional/",
  },
  {
    label: "X",
    icon: "fa-brands fa-twitter",
    color: "#1DA1F2",
    url: "https://x.com/sidd_vip",
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
    url: "mailto:professionalsiddmail@gmail.com",
  },
];
