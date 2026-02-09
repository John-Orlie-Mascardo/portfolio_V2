import React from "react";
import portfolio_logo from "../assets/portfolio_logo.png";
import { createElement } from "react";
import { useState } from "react";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false); // state for showing/hiding the menu
  const [activeMenu, setActiveMenu] = useState(0); // state for tracking which nav item is active

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
            <li className="px-4 py-1 rounded-4xl">
              <a href="#about">About</a>
            </li>
            <li className="px-4 py-1 rounded-4xl">
              <a href="#techstack">Tech Stack</a>
            </li>
            <li className="px-4 py-1 rounded-4xl">
              <a href="#project">Project</a>
            </li>
            <li className="px-4 py-1 rounded-4xl">
              <a href="#certificates">Certificates</a>
            </li>
            <li className="px-4 py-1 rounded-4xl">
              <a href="#contacts">Contacts</a>
            </li>
          </ul>
        </div>
      </nav>

    </div>
  );
}
