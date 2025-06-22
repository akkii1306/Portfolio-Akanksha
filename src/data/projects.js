import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
const projects = [
  {
    id: 1,
    title: "Krishi Haat",
    description: "Farmer-focused e-commerce platform with voice search, cart, order summary, and real-time MongoDB integration.",
    image: project1, // <-- Replace with actual image path
    technologies: ["React", "Node.js", "Tailwind", "MongoDB"],
    github: "https://github.com/akkii1306/KrishiHaat",
    demo: "https://krishi-haat.vercel.app",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "My personal portfolio built with Vite, React, and Framer Motion.",
    image: project2, // <-- Replace with actual image path
    technologies: ["React", "Vite", "Tailwind", "Framer Motion"],
    github: "https://github.com/akkii1306/Portfolio-Akanksha",
    demo: "https://portfolio-akanksha-ten.vercel.app/",
  },
  {
    id: 3,
    title: "Krishi Help",
    description: "Hackathon-winning Agri-Advisory Platform with expert chat, crop guidance, and weather info.",
    image: project3, // <-- Replace with actual image path
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/akkii1306/KrishiHelp",
    demo: "https://krishi-help-eight.vercel.app",
  },
];

export default projects;
