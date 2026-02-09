import React from "react";
import portfolio_logo from "../assets/portfolio_logo.png";

export default function Navbar() {
  return (
    <div id ="navbar">
      <a href='#navbar'>
        <img src={portfolio_logo} alt="logo" className="fixed w-15 h-15" />
      </a>
      <nav className="bg-deep-teal-400 font-zalando-italic">
        <div>
          <ul className="flex justify-center items-center space-x-10 py-4 text-white">
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

/*
  <img src={portfolio_logo} alt="logo" className="w-auto h-auto" />
   <nav className="w-full flex py-6 justify-between items-center navbar">
   <img src={portfolio_logo} alt="logo" className="w-31 h-8" />
  </nav>
 */

/*
  <nav>
   <div className="bg-[#4f5661] text-white">
    <div>
     <ul className="flex justify-center items-center space-x-10 py-4">
      <li className='bg-blue-950 px-4 py-1 rounded-4xl'><a href="#home">Home</a></li>
      <li className='bg-blue-950 px-4 py-1 rounded-4xl'><a href="#about">About</a></li>
      <li className='bg-blue-950 px-4 py-1 rounded-4xl'><a href="#techstack">Tech Stack</a></li>
      <li className='bg-blue-950 px-4 py-1 rounded-4xl'><a href="#project">Project</a></li>
      <li className='bg-blue-950 px-4 py-1 rounded-4xl'><a href="#certificates">Certificates</a></li>
      <li className='bg-blue-950 px-4 py-1 rounded-4xl'><a href="#contacts">Contacts</a></li>               
     </ul>
    </div>
   </div>
  </nav>
  */
