import React from "react";
import portfolio_logo from "../assets/portfolio_logo.png";
import SocialIcon from "./ui/SocialIcon";

export default function Footer() {
  return (
    <footer className="bg-base-200 py-16 px-4 border-t border-base-200/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={portfolio_logo} 
                alt="logo" 
                className="w-12 h-12 rounded-full object-cover border-2 border-mint-leaf-400"
              />
              <span className="text-2xl font-zalando-expanded-bold text-base-content">
                John Orlie Mascardo
              </span>
            </div>
            <p className="text-base-content/60 mb-6 max-w-md font-zalando-italic">
              An aspiring full stack developer passionate about building modern, 
              responsive web applications that solve real-world problems.
            </p>
            <div className="flex gap-4">
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

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-zalando-expanded-bold text-base-content mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "#home" },
                { name: "About", href: "#about" },
                { name: "Tech Stack", href: "#techstack" },
                { name: "Projects", href: "#project" },
                { name: "Certificates", href: "#certificates" },
                { name: "Contact", href: "#contacts" }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-base-content/60 hover:text-primary transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-zalando-expanded-bold text-base-content mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-base-content/60">johnorliem@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-base-content/60">+63 921 435 2203</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-base-content/60">Cavite, Philippines</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-base-200/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-base-content/60 text-sm mb-4 md:mb-0">
              © 2024 John Orlie Mascardo. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-base-content/60 hover:text-primary transition-colors duration-300 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-base-content/60 hover:text-primary transition-colors duration-300 text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}