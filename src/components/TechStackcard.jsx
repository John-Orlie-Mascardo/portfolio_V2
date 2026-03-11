import React from "react";
import { techCategories, skillsProficiency } from "../data/techStack";

export default function TechStackcard() {
  return (
    <section id="techstack" className="py-24 px-4 bg-base-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/20 rounded-full text-primary-content text-sm font-medium mb-4 border border-primary/30">
            My Skills
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-zalando-expanded-black text-base-content mb-6">
            Tech <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">Stack</span>
          </h2>
          <div className="w-24 h-1.5 bg-linear-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="mt-6 text-base-content/60 max-w-2xl mx-auto text-lg font-zalando-italic">
            I work with a variety of modern technologies to build efficient and scalable applications
          </p>
        </div>

        {/* Tech Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="bg-base-200 backdrop-blur-lg rounded-2xl p-6 border border-base-300 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-linear-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-zalando-expanded-bold text-base-content">
                  {category.name}
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.technologies.map((tech, techIndex) => (
                  <div 
                    key={techIndex}
                    className="group relative"
                  >
                    <div className="bg-base-200/50 backdrop-blur-sm p-4 rounded-xl border border-base-300 hover:border-primary/50 hover:bg-base-200 transition-all duration-300 aspect-square flex flex-col items-center justify-center cursor-pointer group-hover:-translate-y-2">
                      <img 
                        src={tech.icon} 
                        alt={tech.name} 
                        className="w-12 h-12 object-contain mb-2 group-hover:scale-110 transition-transform duration-300"
                      />
                      <span className="text-sm font-medium text-base-content text-center">{tech.name}</span>
                    </div>
                    
                    {/* Hover effect indicator */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-linear-to-r from-primary to-secondary rounded-full group-hover:w-full transition-all duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Progress Section */}
        <div className="mt-16 bg-base-200 backdrop-blur-lg rounded-2xl p-8 border border-base-300">
          <h3 className="text-2xl font-zalando-expanded-bold text-base-content mb-8 text-center">
            Skills Proficiency
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillsProficiency.map((skill, index) => (
              <div key={index} className="group">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-base-content/70 font-medium">{skill.name}</span>
                  <span className="text-primary font-bold">{skill.percentage}%</span>
                </div>
                <div className="h-2 bg-base-300 rounded-full overflow-hidden">
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
