import React from "react";
import portfolio_logo from "../assets/portfolio_logo.png";

export default function Navbar() {
 return (
  <nav className="">
   <div className="bg-[#4f5661] text-white">
    <div>
     <img src={portfolio_logo} alt="logo" className="w-auto h-auto" />
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
);
}


/*
   <nav className="w-full flex py-6 justify-between items-center navbar">
   <img src={portfolio_logo} alt="logo" className="w-31 h-8" />
  </nav>
 */
