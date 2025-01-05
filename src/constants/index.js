import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  file02,
  homeSmile,
  notification2,
  notification3,
  notification4,
  plusSquare,
  figma,
  notion,
  c,
  csharp,
  git,
  java,
  python,
  unity,
  recording01,
  recording03,
  arcticmania,
  hamstar,
  mirrormadness,
  nchess,
  searchMd,
  sliders04,
  github,
  itch,
  linkedin,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "About Me",
    url: "#about",
  },
  {
    id: "1",
    title: "Skills",
    url: "#skills",
  },
  {
    id: "2",
    title: "Projects",
    url: "#projects",
  },
  {
    id: "5",
    title: "Contact Me",
    url: "#contact",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const projects = [
  {
    id: "0",
    title: "Arctic Mania",
    text: "Game jam project created in one week. A top down shoot-em-up where you play as a penguin fending off the hordes of arctic attackers.",
    date: "August 2023",
    status: "done",
    link: "https://oscosan.itch.io/arctic-mania",
    imageUrl: arcticmania,
    colorful: true,
  },
  {
    id: "1",
    title: "N-Piece Chess Solver",
    text: "In a group of 4, we created a take on the N-Queens problem using nothing but predicate logic and constraint satisfaction.",
    date: "November 2022",
    status: "done",
    link: "https://github.com/SchuylerGood/n-chess-simulation",
    imageUrl: nchess,
  },
  {
    id: "2",
    title: "Mirror Madness",
    text: "The most recent game jam project I've participated in. A puzzle platformer made in 48 hours where you use mirrors and various forms of symmetry to complete levels.",
    date: "March 2024",
    status: "done",
    link: "https://dylanwalker1320.itch.io/mirror-madness",
    imageUrl: mirrormadness,
  },
  {
    id: "3",
    title: "Hamstar",
    text: "The first game I've ever worked on. A 2D platformer where you play as a hamster through 6 levels of space themed obstacles.",
    date: "June 2022",
    status: "done",
    link: "https://oscosan.itch.io/hamstar",
    imageUrl: hamstar,
  },
];

export const skillsText =
  "From design software like Figma to low level languages like C++ and C#, I've got you covered."; 

export const skillsContent = [
  {
    id: "0",
    title: "Perfectionist",
    text: "I strive to deliver high-quality work that meets and exceeds expectations.",
  },
  {
    id: "1",
    title: "Efficient",
    text: "I work quickly and efficiently to meet deadlines and deliver results.",
  },
  {
    id: "2",
    title: "Punctual",
    text: "I am reliable and punctual, and I always deliver work on time.",
  },
];

export const skillsApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "C",
    icon: c,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "CSharp",
    icon: csharp,
    width: 36,
    height: 28,
  },
  {
    id: "4",
    title: "Github",
    icon: git,
    width: 34,
    height: 35,
  },
  {
    id: "5",
    title: "Java",
    icon: java,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Python",
    icon: python,
    width: 34,
    height: 34,
  },
  {
    id: "7",
    title: "Unity",
    icon: unity,
    width: 26,
    height: 34,
  },
];

export const about = [
  {
    id: "0",
    title: "Queen's Undergraduate",
    text: "I'm a 4th year student at Queen's University studying Computer Science with a focus in Game Development.",
    backgroundUrl: "./src/assets/about/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Game Developer",
    text: "Passionate about game development and creating immersive experiences for players. I've worked on a variety of projects, from game jams to extensive projects.",
    backgroundUrl: "./src/assets/about/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Robotics Engineer",
    text: "I have experience in robotics and automation, having worked on projects that involve building and programming robots for various applications.",
    backgroundUrl: "./src/assets/about/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  // {
  //   id: "3",
  //   title: "Fast responding",
  //   text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
  //   backgroundUrl: "./src/assets/about/card-4.svg",
  //   iconUrl: benefitIcon4,
  //   imageUrl: benefitImage2,
  //   light: true,
  // },
  // {
  //   id: "4",
  //   title: "Ask anything",
  //   text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
  //   backgroundUrl: "./src/assets/about/card-5.svg",
  //   iconUrl: benefitIcon1,
  //   imageUrl: benefitImage2,
  // },
  // {
  //   id: "5",
  //   title: "Improve everyday",
  //   text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
  //   backgroundUrl: "./src/assets/about/card-6.svg",
  //   iconUrl: benefitIcon2,
  //   imageUrl: benefitImage2,
  // },
];

export const socials = [
  {
    id: "0",
    title: "Github",
    iconUrl: github,
    url: "https://github.com/DylanWalker1320",
  },
  {
    id: "1",
    title: "Itch.io",
    iconUrl: itch,
    url: "https://dylanwalker1320.itch.io/",
  },
  {
    id: "2",
    title: "LinkedIn",
    iconUrl: linkedin,
    url: "https://www.linkedin.com/in/dylan-walker-2952b8232/",
  },
];
