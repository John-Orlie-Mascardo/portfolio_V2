import portfolio_logo from "../assets/portfolio_logo.png";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false); // state for showing/hiding the menu
  const [activeMenu, setActiveMenu] = useState(null); // state for tracking which nav item is active

  // This effect runs whenever you scroll
  useEffect(() => {
    const handleScroll = () => {
      // Get all your sections by their IDs
      const sections = [ "home","about", "techstack", "project", "certificates", "contacts"];
      
      // Find which section is currently in view
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          // getBoundingClientRect tells us where the element is on the screen
          const rect = element.getBoundingClientRect();
          
          // If the section is near the top of the viewport (within 200px), it's "active"
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveMenu(section);
            break; // Stop checking once we found the active section
          }
        }
      }
    };

    // Listen for scroll events
    window.addEventListener("scroll", handleScroll);
    
    // Run once on page load to set initial active state
    handleScroll();

    // Cleanup: remove the listener when component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Empty array means this runs once when component mounts

  return (
    <div id="navbar">
      {/* This is the clickable logo button. When you click it, it flips showMenu between true/false. true = menu visible, false = menu hidden */}
      <div className="sm:cursor-pointer fixed w-15 h-15" onClick={() => setShowMenu(!showMenu)}>
          <img src={portfolio_logo} alt="logo"/>
      </div>
      
      {/* This is the navbar itself. It is fixed on the right side of the screen. 
      The important part is the conditional class: 
      - If showMenu is true → translate-x-0 (nav is visible in place). 
      - If showMenu is false → translate-x-full (nav is pushed off-screen to the right). 
      The duration/ease classes make the sliding smooth. */}
      <nav className={`fixed right-0 transform}
        ${ showMenu ? "translate-x-0" : "translate-x-full"} duration-300 ease-in-out`}>

        <div>
          <ul className="flex-col justify-center items-center space-y-5 py-4 text-deep-teal-900 font-zalando-italic">

            <li onClick={() => setActiveMenu("home")} 
              className={`px-4 py-1 rounded-4xl ${activeMenu === "home" ? "bg-teal-500 text-mint-leaf-100" : !activeMenu}`}>
              <a href="#home">Home</a>
            </li>

            <li onClick={() => setActiveMenu("about")} 
              className={`px-4 py-1 rounded-4xl ${activeMenu === "about" ? "bg-teal-500 text-mint-leaf-100" : !activeMenu}`}>
              <a href="#about">About</a>
            </li>

            <li onClick={() => setActiveMenu("techstack")} 
              className={`px-4 py-1 rounded-4xl ${activeMenu === "techstack" ? "bg-teal-500 text-mint-leaf-100" : ""}`}>
              <a href="#techstack">Tech Stack</a>
            </li>

            <li onClick={() => setActiveMenu("project")} 
              className={`px-4 py-1 rounded-4xl ${activeMenu === "project" ? "bg-teal-500 text-mint-leaf-100" : ""}`}>
              <a href="#project">Project</a>
            </li>

            <li onClick={() => setActiveMenu("certificates")} 
              className={`px-4 py-1 rounded-4xl ${activeMenu === "certificates" ? "bg-teal-500 text-mint-leaf-100" : ""}`}>
              <a href="#certificates">Certificates</a>
            </li>

            <li onClick={() => setActiveMenu("contacts")} 
              className={`px-4 py-1 rounded-4xl ${activeMenu === "contacts" ? "bg-teal-500 text-mint-leaf-100" : ""}`}>
              <a href="#contacts">Contact Me</a>
            </li>

          </ul>
        </div>
      </nav>

    </div>
  );
}
