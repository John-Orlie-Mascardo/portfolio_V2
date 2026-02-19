// Import React so we can use JSX and build components
import React from "react";

// Import images from the TechStack folder via index.js
import { JavaLogo, Dart } from "../assets/TechStack/index.js";
import { Html, Css, Javascript, Flutter, ReactLogo } from "../assets/TechStack/index.js";
import { Vscode, Intellij, AndroidStudio } from "../assets/TechStack/index.js";
import { Express, Nodejs, MongoDB, Git, Github, Render, Vercel, Vite, Bruno } from "../assets/TechStack/index.js";

// Define and export the TechStackcard component
export default function TechStackcard() {
  // Tech stack categories with their respective technologies
  const techCategories = [
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

  return (
    <section id="techstack" className="py-24 px-4 bg-linear-to-br from-deep-teal-900 via-deep-teal-800 to-deep-teal-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-mint-leaf-500/20 rounded-full text-mint-leaf-200 text-sm font-medium mb-4 border border-mint-leaf-500/30">
            My Skills
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-zalando-expanded-black text-white mb-6">
            Tech <span className="text-transparent bg-clip-text bg-linear-to-r from-mint-leaf-400 to-bright-teal-blue-400">Stack</span>
          </h2>
          <div className="w-24 h-1.5 bg-linear-to-r from-mint-leaf-500 to-bright-teal-blue-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-alabaster-grey-300 max-w-2xl mx-auto text-lg font-zalando-italic">
            I work with a variety of modern technologies to build efficient and scalable applications
          </p>
        </div>

        {/* Tech Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-mint-leaf-500/30 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-linear-to-br from-mint-leaf-500 to-bright-teal-blue-500 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-zalando-expanded-bold text-white">
                  {category.name}
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.technologies.map((tech, techIndex) => (
                  <div 
                    key={techIndex}
                    className="group relative"
                  >
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:border-mint-leaf-400/50 hover:bg-white/15 transition-all duration-300 aspect-square flex flex-col items-center justify-center cursor-pointer group-hover:-translate-y-2">
                      <img 
                        src={tech.icon} 
                        alt={tech.name} 
                        className="w-12 h-12 object-contain mb-2 group-hover:scale-110 transition-transform duration-300"
                      />
                      <span className="text-sm font-medium text-white text-center">{tech.name}</span>
                    </div>
                    
                    {/* Hover effect indicator */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-linear-to-r from-mint-leaf-400 to-bright-teal-blue-400 rounded-full group-hover:w-full transition-all duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Progress Section */}
        <div className="mt-16 bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
          <h3 className="text-2xl font-zalando-expanded-bold text-white mb-8 text-center">
            Skills Proficiency
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: "Frontend Development", percentage: 85, color: "bg-linear-to-r from-mint-leaf-500 to-bright-teal-blue-500" },
              { name: "Backend Development", percentage: 75, color: "bg-linear-to-r from-bright-teal-blue-500 to-french-blue-500" },
              { name: "Mobile Development", percentage: 70, color: "bg-linear-to-r from-french-blue-500 to-deep-twilight-500" },
              { name: "Database Design", percentage: 80, color: "bg-linear-to-r from-deep-twilight-500 to-mint-leaf-500" }
            ].map((skill, index) => (
              <div key={index} className="group">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-alabaster-grey-200 font-medium">{skill.name}</span>
                  <span className="text-mint-leaf-400 font-bold">{skill.percentage}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${skill.color} rounded-full transition-all duration-1000 group-hover:scale-x-105 origin-left`}
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
