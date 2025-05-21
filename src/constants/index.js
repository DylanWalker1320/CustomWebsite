import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  kingston,
  robotics,
  unityinterface,
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
  arcticmania,
  crashkitchen,
  hamstar,
  mirrormadness,
  nchess,
  searchMd,
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

export const projects = [
  {
    id: "0",
    title: "Crash Kitchen",
    text: "University capstone project about a delivery van that cooks the food on the go. Played in VR with real-time multiplayer and simulated physics.",
    date: "Winter 2025",
    status: "done",
    link: "https://www.youtube.com/watch?v=UAyBOHtPMK4",
    imageUrl: crashkitchen,
    colorful: true,
  },
  {
    id: "1",
    title: "Arctic Mania",
    text: "Game jam project created in one week. A top down shoot-em-up where you play as a penguin fending off the hordes of arctic attackers.",
    date: "August 2023",
    status: "done",
    link: "https://oscosan.itch.io/arctic-mania",
    imageUrl: arcticmania,
    colorful: true,
  },
  {
    id: "2",
    title: "N-Piece Chess Solver",
    text: "In a group of 4, we created a take on the N-Queens problem using nothing but predicate logic and constraint satisfaction.",
    date: "November 2022",
    status: "done",
    link: "https://github.com/SchuylerGood/n-chess-simulation",
    imageUrl: nchess,
  },
  {
    id: "3",
    title: "Mirror Madness",
    text: "The most recent game jam project I've participated in. A puzzle platformer made in 48 hours where you use mirrors and various forms of symmetry to complete levels.",
    date: "March 2024",
    status: "done",
    link: "https://dylanwalker1320.itch.io/mirror-madness",
    imageUrl: mirrormadness,
  },
  {
    id: "4",
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
    title: "Goal-Oriented",
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
    title: "Queen's University Graduate",
    text: "I graduated from Queen's University with a degree in Computer Science, and recieved a degree with distinction.",
    backgroundUrl: "./src/assets/about/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: kingston,
  },
  {
    id: "1",
    title: "Game Developer",
    text: "Passionate about game development and creating immersive experiences for players. I've worked on a variety of projects, from game jams to extensive projects.",
    backgroundUrl: "./src/assets/about/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: unityinterface,
    light: true,
  },
  {
    id: "2",
    title: "Robotics Engineer",
    text: "I have experience in robotics and automation, having worked on projects that involve building and programming robots for various applications.",
    backgroundUrl: "./src/assets/about/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: robotics,
  },
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