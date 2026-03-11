import React from "react";
import { projects } from "../data/projects";

export default function Projectcard() {
  return (
    <section id="project" className="py-24 px-4 bg-base-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/20 rounded-full text-primary-content text-sm font-medium mb-4 border border-primary/30">
            My Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-zalando-expanded-black text-base-content mb-6">
            Featured <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">Projects</span>
          </h2>
          <div className="w-24 h-1.5 bg-linear-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="mt-6 text-base-content/60 max-w-2xl mx-auto text-lg font-zalando-italic">
            Here are some of my recent projects that demonstrate my skills and experience in web development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-base-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-base-300/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                  <div className="p-6">
                    <div className="flex gap-3">
                      <a 
                        href={project.github} 
                        className="flex items-center gap-2 px-4 py-2 bg-base-100/90 backdrop-blur-sm rounded-lg text-base-content hover:bg-base-100 transition-all duration-300"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        GitHub
                      </a>
                      <a 
                        href={project.live} 
                        className="flex items-center gap-2 px-4 py-2 bg-linear-to-r from-primary to-secondary text-primary-content rounded-lg hover:shadow-lg transition-all duration-300"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-zalando-expanded-bold text-base-content mb-3 group-hover:text-secondary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-base-content/70 mb-4 line-clamp-3 font-zalando-italic">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-base-200 text-base-content/70 text-xs font-medium rounded-full hover:bg-primary hover:text-primary-content transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-16">
          <a 
            href="#project" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-primary to-secondary text-primary-content rounded-full font-zalando-expanded-bold hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById('project');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
          >
            View All Projects
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
