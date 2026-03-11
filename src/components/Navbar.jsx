import portfolio_logo from "../assets/portfolio_logo.png";
import { useState, useEffect } from "react";
import menuIcon from "../assets/menu.png";
import closeIcon from "../assets/close.png";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage first, default to dark mode
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) return savedTheme === 'dark';
      // Check system preference
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        return false;
      }
    }
    return true;
  });

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    const theme = newMode ? 'dark' : 'light';
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  };

  const setTheme = (theme) => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    setDarkMode(theme === 'dark');
  };

  useEffect(() => {
    // Handle scroll and active section
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["home", "about", "techstack", "project", "certificates", "contacts"];
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveMenu(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Apply saved theme on mount
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.body.setAttribute('data-theme', savedTheme);
      setDarkMode(savedTheme === 'dark');
    } else {
      document.body.setAttribute('data-theme', 'dark');
    }
  }, []);

  const handleNavClick = (section) => {
    setActiveMenu(section);
    setShowMenu(false);
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-base-100/90 backdrop-blur-lg shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img 
            src={portfolio_logo} 
            alt="logo" 
            className="w-10 h-10 rounded-full object-cover border-2 border-mint-leaf-400 bg-alabaster-grey-50"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {[ 
            { id: "home", label: "Home" },
            { id: "about", label: "About" },
            { id: "techstack", label: "Tech Stack" },
            { id: "project", label: "Projects" },
            { id: "certificates", label: "Certificates" },
            { id: "contacts", label: "Contact" }
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => handleNavClick(item.id)}
              className={`text-sm font-medium transition-all duration-300 relative group ${
                activeMenu === item.id 
                  ? "text-primary" 
                  : "text-base-content/80 hover:text-primary"
              }`}
            >
              {item.label}
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ${
                activeMenu === item.id ? "w-full" : "group-hover:w-full"
              }`}></span>
            </a>
          ))}
          
          {/* Dark Mode Toggle */}
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle swap swap-rotate">
              {/* Sun icon for dark mode */}
              <svg className="swap-off fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L18,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41Z" />
              </svg>
              
              {/* Moon icon for light mode */}
              <svg className="swap-on fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </div>
            
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow">
              <li><a onClick={() => setTheme('light')}>Light</a></li>
              <li><a onClick={() => setTheme('dark')}>Dark</a></li>
            </ul>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="md:hidden p-2 rounded-full hover:bg-white/10 transition-all duration-300"
        >
          {showMenu ? (
            <img src={closeIcon} alt="Close" className="w-6 h-6 text-white" />
          ) : (
            <img src={menuIcon} alt="Menu" className="w-6 h-6 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {showMenu && (
        <div className="md:hidden fixed top-0 right-0 w-64 h-full bg-base-100/95 backdrop-blur-lg shadow-2xl z-50 transform transition-transform duration-300 ease-in-out">
          <div className="flex flex-col h-full p-6">
            {/* Mobile Header */}
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={() => setShowMenu(false)}
                className="p-2 rounded-full hover:bg-base-content/10 transition-all duration-300 "
              >
                <img src={closeIcon} alt="Close" className="w-5 h-5 text-base-content" />
              </button>
            </div>

            {/* Mobile Menu Items */}
            <div className="flex flex-col gap-4 flex-1">
              {[ 
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "techstack", label: "Tech Stack" },
                { id: "project", label: "Projects" },
                { id: "certificates", label: "Certificates" },
                { id: "contacts", label: "Contact" }
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-lg font-medium py-3 px-4 rounded-lg transition-all duration-300 border-l-2 ${
                    activeMenu === item.id 
                      ? "bg-primary/20 border-primary text-primary" 
                      : "bg-transparent border-transparent text-base-content/80 hover:bg-base-content/10 hover:text-primary"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              
              {/* Dark Mode Toggle for Mobile */}
              <button
                onClick={toggleDarkMode}
                className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 text-base-content/80 hover:bg-base-content/10"
              >
                {darkMode ? (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                    <span>Dark Mode</span>
                  </>
                )}
              </button>
            </div>

            {/* Mobile Footer */}
            <div className="mt-auto pt-6 border-t border-white/10">
              <div className="flex justify-center gap-4">
                {[ 
                  { icon: 'github', color: 'hover:text-gray-300' },
                  { icon: 'linkedin', color: 'hover:text-blue-400' },
                  { icon: 'instagram', color: 'hover:text-pink-400' }
                ].map((social) => (
                  <a 
                    key={social.icon} 
                    href="#" 
                    className={`text-alabaster-grey-400 hover:text-white transition-colors duration-300 ${social.color}`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      {social.icon === 'github' && (
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      )}
                      {social.icon === 'linkedin' && (
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      )}
                      {social.icon === 'instagram' && (
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      )}
                    </svg>
                  </a>
                ))}
              </div>
              <div className="text-center mt-4 text-xs text-base-content/60">
                © 2024 John Orlie Mascardo. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}