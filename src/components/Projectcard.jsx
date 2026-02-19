import React from "react";

export default function Projectcard() {
  // Sample projects - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include product catalog, shopping cart, user authentication, and payment integration.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      github: "#",
      live: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team features, and advanced filtering options. Built with React and Firebase.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
      tags: ["React", "Firebase", "Tailwind CSS"],
      github: "#",
      live: "#"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A beautiful weather application that shows real-time weather data, forecasts, and location-based weather information using OpenWeatherMap API.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop",
      tags: ["React", "API", "Chart.js"],
      github: "#",
      live: "#"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Tailwind CSS. Features smooth animations, dark/light theme, and sections for projects and skills.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      github: "#",
      live: "#"
    },
    {
      id: 5,
      title: "Social Media App",
      description: "A social media platform with user profiles, posts, comments, and likes. Built with React, Node.js, and PostgreSQL.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
      tags: ["React", "Node.js", "PostgreSQL"],
      github: "#",
      live: "#"
    },
    {
      id: 6,
      title: "Blog Platform",
      description: "A modern blog platform with markdown support, categorization, and search functionality. Built with Next.js and Sanity CMS.",
      image: "https://images.unsplash.com/photo-1499750310159-5243062f73d5?w=600&h=400&fit=crop",
      tags: ["Next.js", "Sanity CMS", "Tailwind CSS"],
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="project" className="py-24 px-4 bg-linear-to-br from-alabaster-grey-50 to-deep-teal-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-mint-leaf-500/20 rounded-full text-mint-leaf-700 text-sm font-medium mb-4 border border-mint-leaf-500/30">
            My Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-zalando-expanded-black text-deep-teal-900 mb-6">
            Featured <span className="text-transparent bg-clip-text bg-linear-to-r from-mint-leaf-500 to-bright-teal-blue-500">Projects</span>
          </h2>
          <div className="w-24 h-1.5 bg-linear-to-r from-mint-leaf-500 to-bright-teal-blue-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-alabaster-grey-600 max-w-2xl mx-auto text-lg font-zalando-italic">
            Here are some of my recent projects that demonstrate my skills and experience in web development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-deep-teal-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                  <div className="p-6">
                    <div className="flex gap-3">
                      <a 
                        href={project.github} 
                        className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg text-deep-teal-900 hover:bg-white transition-all duration-300"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        GitHub
                      </a>
                      <a 
                        href={project.live} 
                        className="flex items-center gap-2 px-4 py-2 bg-linear-to-r from-mint-leaf-500 to-bright-teal-blue-500 text-white rounded-lg hover:shadow-lg transition-all duration-300"
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
                <h3 className="text-xl font-zalando-expanded-bold text-deep-teal-900 mb-3 group-hover:text-bright-teal-blue-500 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-alabaster-grey-600 mb-4 line-clamp-3 font-zalando-italic">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-alabaster-grey-100 text-alabaster-grey-700 text-xs font-medium rounded-full hover:bg-mint-leaf-500 hover:text-white transition-colors duration-300"
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
            href="#" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-mint-leaf-500 to-bright-teal-blue-500 text-white rounded-full font-zalando-expanded-bold hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
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
