import React from "react";

export default function AboutComponents() {
  return (
    <section id="about" className="py-24 px-4 bg-base-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/20 rounded-full text-primary-content text-sm font-medium mb-4 border border-primary/30">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-zalando-expanded-black text-base-content mb-6">
            Who I <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">Am</span>
          </h2>
          <div className="w-24 h-1.5 bg-linear-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* About Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-lg md:text-xl text-base-content/70 leading-relaxed font-zalando-italic">
                I'm a passionate <strong className="text-base-content">BSIT student</strong> at St. Dominic College of Asia, currently in my third year. 
                My journey in technology is driven by curiosity and a love for problem-solving.
              </p>
              
              <p className="text-lg md:text-xl text-base-content/70 leading-relaxed font-zalando-italic">
                I spend most of my time <strong className="text-base-content">honing my skills</strong> through reading, watching tutorials, 
                practicing coding, and asking questions. While I'm still discovering my specific aspirations 
                within the field, I'm actively exploring different paths to find where my true interests lie.
              </p>

              <p className="text-lg md:text-xl text-base-content/70 leading-relaxed font-zalando-italic">
                I believe in <strong className="text-base-content">continuous learning</strong> and personal growth. 
                Every challenge is an opportunity to learn something new and improve myself both 
                mentally and physically.
              </p>
            </div>

            {/* Skills Highlight */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '💻', text: 'Web Development' },
                { icon: '🚀', text: 'Problem Solving' },
                { icon: '📚', text: 'Continuous Learning' },
                { icon: '🎯', text: 'Growth Mindset' }
              ].map((skill, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-base-100 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="font-medium text-base-content">{skill.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats & Visual */}
          <div className="grid grid-cols-2 gap-6">
            {/* Stats Cards */}
            <div className="space-y-6">
              {[
                { number: '3', label: 'Years Studying' },
                { number: '1', label: 'Projects' },
                { number: '10+', label: 'Technologies' },
                { number: '24/7', label: 'Learning' }
              ].map((stat, index) => (
                <div key={index} className="bg-base-100 p-6 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-linear-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <div className="relative z-10">
                    <div className="text-4xl font-zalando-expanded-black text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm font-medium text-base-content/60">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative Elements */}
            <div className="relative">
              <div className="absolute -inset-4 bg-linear-to-r from-primary via-secondary to-accent rounded-2xl blur-lg opacity-20 animate-pulse"></div>
              <div className="relative bg-base-100/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg text-center">
                <div className="w-20 h-20 bg-linear-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎓</span>
                </div>
                <h3 className="text-xl font-zalando-expanded-bold text-base-content mb-2">Education</h3>
                <p className="text-base-content/60 font-zalando-italic">St. Dominic College of Asia</p>
                <p className="text-sm text-base-content/50 mt-1">BSIT - Third Year</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <a 
            href="#contacts" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-primary to-secondary text-primary-content rounded-full font-zalando-expanded-bold hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            Let's Work Together
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
