import portfolio_logo from "../assets/portfolio_logo.png";
import { useState, useEffect } from "react";

export default function Navbar() {
  // showMenu controls whether the navbar is visible (true) or hidden (false)
  const [showMenu, setShowMenu] = useState(false);
  
  // activeMenu stores which section is currently active (e.g., "home", "about")
  const [activeMenu, setActiveMenu] = useState(null);

  // useEffect runs code after the component loads and when certain things change
  // The empty [] at the end means "run once when the component first appears"
  useEffect(() => {
    // This function checks which section is visible on screen while scrolling
    const handleScroll = () => {
      // List of all section IDs that match our page sections
      const sections = ["home", "about", "techstack", "project", "certificates", "contacts"];
      
      // Loop through each section to check if it's visible
      for (let section of sections) {
        // Try to find the HTML element with this ID
        const element = document.getElementById(section);
        
        if (element) {
          // getBoundingClientRect() tells us where the element is on screen
          // rect.top = distance from top of screen
          // rect.bottom = distance from bottom of screen
          const rect = element.getBoundingClientRect();
          
          // If the section is within 200px from the top, it's considered "active"
          // This means when you scroll to a section, it gets highlighted
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveMenu(section); // Update which nav item should be highlighted
            break; // Stop checking other sections once we found the active one
          }
        }
      }
    };

    // Tell the browser: "Run handleScroll every time the user scrolls"
    window.addEventListener("scroll", handleScroll);
    
    // Run handleScroll immediately when page loads to highlight the first section
    handleScroll();

    // Cleanup function: Remove the scroll listener when component is removed from page
    // This prevents memory leaks and errors
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="navbar">
      {/* Logo button: clicking it toggles the menu between visible/hidden */}
      <div 
        className="sm:cursor-pointer fixed w-15 h-15" 
        onClick={() => setShowMenu(!showMenu)}
      >
        <img src={portfolio_logo} alt="logo"/>
      </div>
      
      {/* The sliding navbar menu */}
      {/* translate-x-0 = normal position, translate-x-full = pushed off screen to the right */}
      {/* The showMenu state controls which position it's in */}
      <nav 
        className={`fixed right-0 transform ${showMenu ? "translate-x-0" : "translate-x-full"} duration-300 ease-in-out`}
      >
        <div>
          <ul className="flex-col justify-center items-center space-y-5 py-4 text-deep-teal-900 font-zalando-italic">
            {/* Each nav item: */}
            {/* - onClick sets which item is active when clicked */}
            {/* - The className checks if this item is active and applies highlight styles */}
            {/* - href="#home" makes clicking scroll to that section */}
            
            <li 
              onClick={() => setActiveMenu("home")} 
              className={`px-4 py-1 rounded-4xl ${activeMenu === "home" ? "bg-teal-500 text-mint-leaf-100" : ""}`}
            >
              <a href="#home">Home</a>
            </li>

            <li 
              onClick={() => setActiveMenu("about")} 
              className={`px-4 py-1 rounded-4xl ${activeMenu === "about" ? "bg-teal-500 text-mint-leaf-100" : ""}`}
            >
              <a href="#about">About</a>
            </li>

            <li 
              onClick={() => setActiveMenu("techstack")} 
              className={`px-4 py-1 rounded-4xl ${activeMenu === "techstack" ? "bg-teal-500 text-mint-leaf-100" : ""}`}
            >
              <a href="#techstack">Tech Stack</a>
            </li>

            <li 
              onClick={() => setActiveMenu("project")} 
              className={`px-4 py-1 rounded-4xl ${activeMenu === "project" ? "bg-teal-500 text-mint-leaf-100" : ""}`}
            >
              <a href="#project">Project</a>
            </li>

            <li 
              onClick={() => setActiveMenu("certificates")} 
              className={`px-4 py-1 rounded-4xl ${activeMenu === "certificates" ? "bg-teal-500 text-mint-leaf-100" : ""}`}
            >
              <a href="#certificates">Certificates</a>
            </li>

            <li 
              onClick={() => setActiveMenu("contacts")} 
              className={`px-4 py-1 rounded-4xl ${activeMenu === "contacts" ? "bg-teal-500 text-mint-leaf-100" : ""}`}
            >
              <a href="#contacts">Contact Me</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}