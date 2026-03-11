import React from "react";
import profile from "../assets/profile.jpg";
import SocialIcon from "./ui/SocialIcon";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-base-100 py-20 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-mint-leaf-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-bright-teal-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-french-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Profile Image */}
        <div className="relative">
          <div className="absolute -inset-4 bg-linear-to-r from-primary via-secondary to-accent rounded-2xl blur-lg opacity-50"></div>
          <img 
            src={profile} 
            alt="John Mascardo" 
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl mx-auto object-cover shadow-2xl border-4 border-base-100"
          />
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-base-100/90 backdrop-blur-sm px-6 py-2 rounded-full shadow-lg flex items-center gap-2">
            <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-base-content">Available for work</span>
          </div>
        </div>

        {/* Hero Content */}
        <div className="text-center md:text-left">
          <div className="inline-block px-4 py-2 bg-primary/20 rounded-full text-primary-content text-sm font-medium mb-6 border border-primary/30">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              Hello, World! 👋
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-zalando-expanded-black text-base-content mb-6 leading-tight">
            I'm <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">John Orlie</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl font-zalando-expanded-bold text-base-content/80 mb-8">
            Aspiring Full Stack Developer
          </h2>
          
          <p className="text-lg md:text-xl text-base-content/70 mb-10 leading-relaxed max-w-lg mx-auto md:mx-0 font-zalando-italic">
            I'm a BSIT student passionate about building modern, responsive web applications. 
            I love solving problems, learning new technologies, and creating meaningful digital experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href="#projects" 
              className="px-8 py-4 bg-linear-to-r from-primary to-secondary text-primary-content rounded-full font-zalando-expanded-bold hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
            >
              View My Work
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            
            <a 
              href="#contacts" 
              className="px-8 py-4 bg-transparent border-2 border-base-content text-base-content rounded-full font-zalando-expanded-bold hover:bg-base-content/10 hover:border-secondary hover:text-secondary transition-all duration-300 flex items-center justify-center gap-2"
            >
              Contact Me
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-12 flex gap-6 justify-center md:justify-start">
            {[ 
              { icon: 'github', color: 'hover:text-base-content' },
              { icon: 'linkedin', color: 'hover:text-blue-400' },
              { icon: 'instagram', color: 'hover:text-pink-400' }
            ].map((social) => (
              <a 
                key={social.icon} 
                href="#" 
                className={`text-base-content/60 hover:text-base-content transition-colors duration-300 ${social.color}`}
              >
                <SocialIcon type={social.icon} className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
