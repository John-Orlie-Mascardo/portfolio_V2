// Tech stack data for the portfolio
import { JavaLogo, Dart } from "../assets/TechStack/index.js";
import { Html, Css, Javascript, Flutter, ReactLogo } from "../assets/TechStack/index.js";
import { Vscode, Intellij, AndroidStudio } from "../assets/TechStack/index.js";
import { Express, Nodejs, MongoDB, Git, Github, Render, Vercel, Vite, Bruno } from "../assets/TechStack/index.js";

export const techCategories = [
  {
    name: "Programming Languages",
    icon: "💻",
    technologies: [
      { name: "Java", icon: JavaLogo },
      { name: "Dart", icon: Dart }
    ]
  },
  {
    name: "Frontend",
    icon: "🎨",
    technologies: [
      { name: "HTML", icon: Html },
      { name: "CSS", icon: Css },
      { name: "JavaScript", icon: Javascript },
      { name: "Flutter", icon: Flutter },
      { name: "React", icon: ReactLogo }
    ]
  },
  {
    name: "IDE",
    icon: "🔧",
    technologies: [
      { name: "Visual Studio Code", icon: Vscode },
      { name: "IntelliJ", icon: Intellij },
      { name: "Android Studio", icon: AndroidStudio }
    ]
  },
  {
    name: "Tools & Frameworks",
    icon: "⚙️",
    technologies: [
      { name: "Express", icon: Express },
      { name: "NodeJS", icon: Nodejs },
      { name: "MongoDB", icon: MongoDB },
      { name: "Git", icon: Git },
      { name: "Github", icon: Github },
      { name: "Render", icon: Render },
      { name: "Vercel", icon: Vercel },
      { name: "Vite", icon: Vite },
      { name: "Bruno", icon: Bruno }
    ]
  }
];

export const skillsProficiency = [
  { name: "Frontend Development", percentage: 85, color: "bg-linear-to-r from-mint-leaf-500 to-bright-teal-blue-500" },
  { name: "Backend Development", percentage: 75, color: "bg-linear-to-r from-bright-teal-blue-500 to-french-blue-500" },
  { name: "Mobile Development", percentage: 70, color: "bg-linear-to-r from-french-blue-500 to-deep-twilight-500" },
  { name: "Database Design", percentage: 80, color: "bg-linear-to-r from-deep-twilight-500 to-mint-leaf-500" }
];
